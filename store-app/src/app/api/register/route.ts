import {
  createUser,
  getUserByEmail,
  getUserByUsername,
} from '@/db/models/user';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validateData = z
      .object({
        name: z.string().optional(),
        username: z.string(), //! kurang unique
        email: z.string().email(), //! kurang unique
        password: z.string().min(5),
      })
      .safeParse(body);

    if (!validateData.success) {
      throw validateData.error;
    }

    const checkUsername = await getUserByUsername(body.username);
    if (checkUsername) throw { name: 'NotUniqueUsername' };

    const checkEmail = await getUserByEmail(body.email);
    if (checkEmail) throw { name: 'NotUniqueEmail' };

    const user = await createUser(body);

    return Response.json(user, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.log(error.issues, '< error issue');
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;

      return Response.json(
        {
          message: `${errorPath} ${errorMessage}`,
        },
        { status: 400 }
      );
    }

    if (error.name === "NotUniqueUsername") {
      return Response.json({
        message: "Username is not unique"
      }, {status: 400})
    }

    if (error.name === "NotUniqueEmail") {
      return Response.json({
        message: "Email is not unique"
      }, {status: 400})
    }

    return Response.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
