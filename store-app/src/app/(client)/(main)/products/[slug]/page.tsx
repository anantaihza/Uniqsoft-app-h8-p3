import Button from '@/components/wishlist/Button';
import { BASE_URL } from '@/constants';
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

  const res = await fetch(BASE_URL + `/api/products/${id}`, {
    method: 'GET',
  });

  const data = await res.json();

  return {
    title: `Unisoft | ${data.name}`,
    description: data.description
  }
}



const fetchDetailProduct = async (slug: string) => {
  const splitSlug = slug.split('-');
  const id = splitSlug[splitSlug.length - 1];

  const res = await fetch(BASE_URL + `/api/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return data;
};

export default async function page({ params }: TypeProp) {
  const product: ProductModel = await fetchDetailProduct(params.slug);

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

        <Button productId={String(product._id)} />
      </div>
    </div>
  );
}
