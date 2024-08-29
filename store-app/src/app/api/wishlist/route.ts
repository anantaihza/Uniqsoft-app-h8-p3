import { createWishlist, getWishlist } from '@/db/models/wishlist';
import { headers } from 'next/headers';
import { z } from 'zod';

interface PropParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request) {
  try {
    const id = String(headers().get('x-user-id'));
    const wishlist = await getWishlist(id);

    return Response.json(wishlist[0].wishlist);
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // console.log(headers().get("x-user-id"))
    let body = await request.json();
    body = { ...body, userId: headers().get('x-user-id') };

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
    // return Response.json("skd", { status: 201 });
  } catch (error) {
    // console.log(error, "< error")
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

    return Response.json(
      {
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
