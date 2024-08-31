import Button from '@/components/wishlist/Button';
// import { process.env.BASE_URL } from '@/constants';
import { ProductModel } from '@/db/models/product';
import Link from 'next/link';

import type { Metadata } from 'next';

interface TypeProp {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: TypeProp): Promise<Metadata> {
  const splitSlug = params.slug.split('-');
  const id = splitSlug[splitSlug.length - 1];

  const res = await fetch(process.env.BASE_URL + `/api/products/${id}`, {
    method: 'GET',
  });

  const data = await res.json();

  return {
    title: `Uniqsoft | ${data.name}`,
    description: data.description,
  };
}

const fetchDetailProduct = async (slug: string) => {
  const splitSlug = slug.split('-');
  const id = splitSlug[splitSlug.length - 1];

  const res = await fetch(process.env.BASE_URL + `/api/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return data;
};

interface TypeParams extends TypeProp {
  searchParams: {
    error: string;
  };
}

export default async function page({ params, searchParams }: TypeParams) {
  const product: ProductModel = await fetchDetailProduct(params.slug);

  // console.log(searchParams)
  return (
    <div className="container min-h-screen mx-auto px-10 lg:px-32 flex gap-6">
      <div className="content-img w-[50%] my-auto">
        <div className="carousel carousel-center bg-white rounded-box space-x-4 w-[34rem] h-[34rem]">
          {product.images
            ? product.images.map((image, index) => {
                return (
                  <section
                    key={index}
                    className="carousel-item"
                    id={`image-${index}`}
                  >
                    <img
                      src={image}
                      className="rounded-box h-[100%]"
                      alt={`${product.name}-${index}`}
                    />
                  </section>
                );
              })
            : null}
        </div>
      </div>
      <div className="content w-[50%] my-auto">
        {searchParams.error ? (
          <div role="alert" className="alert alert-error text-white mb-10 rounded-full px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{searchParams.error}</span>
          </div>
        ) : null}
        
        <div className="flex gap-3">
          {product.tags
            ? product.tags.map((tag, index) => {
                return (
                  <div key={index} className="badge badge-outline">
                    {tag}
                  </div>
                );
              })
            : null}
        </div>
        <h2 className="mt-4 font-black text-4xl text-[#303459]">
          {product.name}
        </h2>

        <div className="flex gap-6 mt-10">
          {product.images
            ? product.images.map((image, index) => {
                return (
                  <Link href={`#image-${index}`} key={index}>
                    <img
                      className="w-24 rounded-xl"
                      src={image}
                      alt={`${product.name}-${index}`}
                    />
                  </Link>
                );
              })
            : null}
        </div>

        <div className="mt-10">
          <p className="text-[#303459] font-bold">Price: </p>
          <h4 className="font-bold text-2xl text-[#303459]">
            Rp. {product.price}
          </h4>
        </div>

        <div className="desc mt-10">
          <p className="text-[#303459] font-bold">Description: </p>
          <p className="text-[#A3A2A8]">{product.description}</p>
        </div>

        <Button productId={String(product._id)} slug={product.slug} />
      </div>
    </div>
  );
}
