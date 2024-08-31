import { getProductById } from '@/db/models/product';
import { NextRequest, NextResponse } from 'next/server';

interface PropParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: PropParams) {
  try {
    const product = await getProductById(params.id);

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
