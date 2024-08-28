import { deleteWishlist } from "@/db/models/wishlist";

interface PropParams {
  params: {
    id: string;
  };
}

export async function DELETE(request: Request, { params }: PropParams) {
  const wishlist = await deleteWishlist(params.id)

  return Response.json(wishlist)
}