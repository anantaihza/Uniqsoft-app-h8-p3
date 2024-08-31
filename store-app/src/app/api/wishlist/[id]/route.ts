import { deleteWishlist } from '@/db/models/wishlist';
import { NextRequest, NextResponse } from 'next/server';

interface PropParams {
  params: {
    id: string;
  };
}

export async function DELETE(request: NextRequest, { params }: PropParams) {
  try {
    const wishlist = await deleteWishlist(params.id);

    return NextResponse.json(wishlist);
  } catch (error) {
    console.log(error, '<error');

    return NextResponse.json({
      message: error,
    });
  }
}
