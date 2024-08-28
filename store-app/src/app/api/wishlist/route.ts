import { createWishlist } from '@/db/models/wishlist';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validateData = z
      .object({
        userId: z.string(),
        productId: z.string(),
      })
      .safeParse(body);

    if (!validateData.success) {
      throw validateData.error;
    }

    const wishlist = await createWishlist(body);

    return Response.json(wishlist, { status: 201 });
  } catch (error) {
    // console.log(error, "< error")
    if (error instanceof z.ZodError) {
      console.log(error.issues, '< error issue');
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;

      return Response.json(
        {
          error: {
            message: `${errorPath} ${errorMessage}`,
          },
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}


