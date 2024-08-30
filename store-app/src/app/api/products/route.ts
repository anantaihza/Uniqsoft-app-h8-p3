import { getProducts } from '@/db/models/product';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const queryPage: string | null = searchParams.get('page');
    const querySearch: string | null = searchParams.get('search');
    // console.log(typeof queryPage);
    // console.log(typeof querySearch);

    const products = await getProducts(queryPage, querySearch);

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
