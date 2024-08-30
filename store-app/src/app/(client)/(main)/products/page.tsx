'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { BASE_URL } from '@/constants';
import { ProductModel } from '@/db/models/product';
import { useEffect, useState } from 'react';
// import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function page() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  // const products: ProductModel[] = await fetchProducts();

  const initialFetch = async () => {
    const res = await fetch(BASE_URL + `/api/products?page=${page}`, {
      method: 'GET',
    });

    const data = await res.json();

    setProducts(data);
  };

  const fetchProducts = async () => {
    const res = await fetch(BASE_URL + `/api/products?page=${page}`, {
      method: 'GET',
    });

    const data = await res.json();

    setProducts(products.concat(data));
    data.length > 0 ? setHasMore(true) : setHasMore(false);

    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <>
      <div className="min-h-screen my-28 container mx-auto px-10 lg:px-32">
        <h2 className="font-black text-[#303459] text-4xl my-12">Products</h2>
        {/* <div className="grid grid-cols-4 gap-8">
            {products.map((product: ProductModel) => {
              return <Card key={product.slug} product={product} />;
            })}
          </div> */}
        <div>
          <InfiniteScroll
            className="bg-transparent grid grid-cols-4 gap-8"
            dataLength={products.length}
            next={fetchProducts}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
          >
            {products.map((product: ProductModel) => {
              return <Card key={product.slug} product={product} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
    </>
  );
}
