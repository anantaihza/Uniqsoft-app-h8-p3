import React from 'react';
import Card from '../Card';
import { ProductModel } from '@/db/models/product';

const fetchNewProduct = async () => {
  const res = await fetch('http://localhost:3000' + '/api/products/new', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return data;
};

export default async function NewProducts() {
  const products: ProductModel[] = await fetchNewProduct();

  // console.log(products);

  return (
    <section className="min-h-[90vh] container mx-auto px-10 lg:px-32 flex flex-col gap-28">
      <h2 className="font-black text-5xl text-center text-[#303459]">
        <span className=" text-[#FE9345]">New</span> products
      </h2>

      <div className="grid grid-cols-4 gap-10">
        {products.map((product: ProductModel) => {
          return <Card key={product.slug} product={product} />;
        })}
      </div>
    </section>
  );
}
