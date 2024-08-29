import { deleteWishlist } from '@/db/models/wishlist';

interface PropParams {
  params: {
    id: string;
  };
}

export async function DELETE(request: Request, { params }: PropParams) {
  try {
    const wishlist = await deleteWishlist(params.id);

    return Response.json(wishlist);
  } catch (error) {
    console.log(error, "<error");
    
    return Response.json({
      message: error
    })
  }
}
