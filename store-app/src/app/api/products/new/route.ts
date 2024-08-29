import { getNewProducts } from '@/db/models/product';

export async function GET(request: Request) {
  try {
    const products = await getNewProducts();

    return Response.json(products);
  } catch (error) {
    return Response.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
