import { getProducts } from '@/db/models/product';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const queryPage: string | null = searchParams.get('page');
    const querySearch: string | null = searchParams.get('search');
    // console.log(typeof queryPage);
    // console.log(typeof querySearch);

    const products = await getProducts(queryPage, querySearch);

    return NextResponse.json(products);
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
