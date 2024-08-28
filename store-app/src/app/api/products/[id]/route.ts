import { getProductById } from '@/db/models/product';

interface PropParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: PropParams) {
  const product = await getProductById(params.id);

  return Response.json(product);
}
