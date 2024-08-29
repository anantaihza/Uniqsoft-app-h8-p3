import { comparePassword } from '@/db/helpers/bcrypt';
import { signToken } from '@/db/helpers/jwt';
import { getUserByEmail } from '@/db/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

interface TypeLogin {
  email: string;
  password: string;
}

// pake nextRequest kalau pake cookies
export async function POST(request: NextRequest) {
  try {
    const body: TypeLogin = await request.json();

    const validateData = z
      .object({
        email: z.string().email(),
        password: z.string().min(5),
      })
      .safeParse(body);

    if (!validateData.success) {
      throw validateData.error;
    }

    const user = await getUserByEmail(body.email);

    if (!user) {
      throw { name: 'Unauthorized' };
    }

    const isValidPassword = comparePassword(body.password, user.password);

    if (!isValidPassword) {
      throw { name: 'Unauthorized' };
    }

    const access_token = signToken({
      _id: user._id,
    });

    const response = NextResponse.json({
      access_token,
    });

    // Ini dibutuhkan jika fetch dari client component
    response.cookies.set('Authorization', `Bearer ${access_token}`);

    return response;
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;

      return NextResponse.json(
        {
          message: `${errorPath} ${errorMessage}`,
        },
        { status: 400 }
      );
    }

    if (error.name === 'Unauthorized') {
      return NextResponse.json(
        {
          message: 'Invalid email or password',
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
