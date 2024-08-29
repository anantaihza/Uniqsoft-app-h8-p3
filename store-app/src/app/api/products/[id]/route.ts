import { getProductById } from '@/db/models/product';

interface PropParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: PropParams) {
  try {
    const product = await getProductById(params.id);

    return Response.json(product, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
