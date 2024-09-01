'use client';

import Footer from '@/components/Footer';
import { BASE_URL } from '@/constants';
import { ProductModel } from '@/db/models/product';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Pagination from '@/components/products/Pagination';
import Search from '@/components/products/Search';

export default function page({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState('');
  const [oldSearch, setOldSearch] = useState('');
  const [debouncedValue] = useDebounce(search, 1000);

  const fetchProducts = async () => {
    let url = BASE_URL + '/api/products';

    if (!search) {
      url += `?page=${page}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (search !== oldSearch) {
        setProducts([]);
        setProducts(data);
        setOldSearch(search);
      } else {
        setProducts([...products, ...data]);
      }

      data.length > 0 ? setHasMore(true) : setHasMore(false);

      setPage(page + 1);
    } else {
      setPage(1);
      setProducts([]);
      setHasMore(false);

      url += `?search=${search}`;
      const res = await fetch(url, {
        method: 'GET',
      });

      const data = await res.json();

      setProducts(data);
      setOldSearch(search);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [debouncedValue]);

  return (
    <>
      <div className="min-h-screen my-28 container mx-auto px-10 lg:px-32">
        {searchParams.error ? (
          <div
            role="alert"
            className="alert alert-error text-white mt-10 rounded-full px-6"
          >
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

        <h2 className="font-black text-[#303459] text-4xl my-12">Products</h2>

        <Search setSearch={setSearch} />

        <Pagination
          products={products}
          fetchProducts={fetchProducts}
          hasMore={hasMore}
        />
      </div>
      <Footer />
    </>
  );
}
