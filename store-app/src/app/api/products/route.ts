import { getProducts } from '@/db/models/product';

export async function GET(request: Request) {
  try {
    const products = await getProducts();

    return Response.json(products);
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
