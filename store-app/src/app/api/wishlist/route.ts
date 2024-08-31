import {
  createWishlist,
  getWishlist,
  getWishlistById,
} from '@/db/models/wishlist';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

interface PropParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest) {
  try {
    const id = String(headers().get('x-user-id'));
    const wishlist = await getWishlist(id);

    return NextResponse.json(wishlist);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
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

    const wishlist = await getWishlistById(body.productId, body.userId);
    if (wishlist) throw { name: 'AlreadyAdd' };

    await createWishlist(body);

    return NextResponse.json(body, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.log(error.issues, '< error issue');
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;

      return NextResponse.json(
        {
          message: `${errorPath} ${errorMessage}`,
        },
        { status: 400 }
      );
    }

    if (error.name === 'AlreadyAdd') {
      return NextResponse.json(
        {
          message: 'Already add to wishlist',
        },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
