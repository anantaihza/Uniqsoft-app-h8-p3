'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { BASE_URL } from '@/constants';
import { ProductModel } from '@/db/models/product';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListProduct from '@/components/products/ListProduct';
import Pagination from '@/components/products/Pagination';
import Search from '@/components/products/Search';

export default function page() {
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
