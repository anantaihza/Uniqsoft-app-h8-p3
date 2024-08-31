import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { verifyTokenJose } from './db/helpers/jwt';

interface TypeJWT {
  _id: string;
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.url.includes('api/wishlist')) {
    const authorization = cookies().get('Authorization');
    // console.log(cookies().getAll(), '<<<');

    // {
    //   name: 'Authorization',
    //   value: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNkZDUwNDYyOGVlNTNjODY2M2U1YTAiLCJpYXQiOjE3MjQ4MzYxMjR9.HvLjuFMl6sxDd2YOV1TdATpWl5BIZtM3qS88fzTLMUA'
    // }
    console.log(authorization);

    if (!authorization) {
      return NextResponse.json(
        {
          message: 'Authentication failed',
        },
        { status: 401 }
      );
    }

    // console.log(request, "<< request")
    // console.log(request.headers, "<< request headers")
    const access_token = authorization.value.split(' ')[1];

    //! bagian sini belum ngerti di type generic
    const decoded = await verifyTokenJose<TypeJWT>(access_token);

    // await verifyTokenJose<{ name: string, age: number }>(tokenlain) // { name: string, age: number }

    //! dari sini belum ngerti di headers2 ini
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set('x-user-id', decoded._id);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
