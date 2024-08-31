import { getNewProducts } from '@/db/models/product';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const products = await getNewProducts();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
