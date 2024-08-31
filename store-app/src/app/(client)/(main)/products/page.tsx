'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { BASE_URL } from '@/constants';
import { ProductModel } from '@/db/models/product';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDebounce } from 'use-debounce';

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
      // console.log(products, '<<<<<<');

      url += `?page=${page}`;
      const res = await fetch(url, {
        method: 'GET',
      });

      const data = await res.json();
      // console.log(data, 'page');

      if (search !== oldSearch) {
        setProducts([]);
        setOldSearch(search);
        setProducts(data);
      } else {
        setProducts([...products, ...data]);
      }

      data.length > 0 ? setHasMore(true) : setHasMore(false);
      setPage(page + 1);
    } else {
      setProducts([]);
      setPage(1);
      setHasMore(false);
      url += `?search=${search}`;
      const res = await fetch(url, {
        method: 'GET',
      });

      const data = await res.json();
      // console.log(data, 'search');
      setProducts(data);
      // console.log(products, '<product');
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

        <label className="input input-bordered flex items-center gap-2 my-10">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {/* <div className="grid grid-cols-4 gap-8">
            {products.map((product: ProductModel) => {
              return <Card key={product.slug} product={product} />;
            })}
          </div> */}
        <div>
          <InfiniteScroll
            dataLength={products.length}
            next={fetchProducts}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
          >
            <div className="bg-transparent grid grid-cols-4 gap-8">
              {products.map((product: ProductModel) => {
                return <Card key={product.slug} product={product} />;
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
    </>
  );
}

// 'use client';

// import Card from '@/components/Card';
// import Footer from '@/components/Footer';
// import { BASE_URL } from '@/constants';
// import { ProductModel } from '@/db/models/product';
// import { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useDebounce } from 'use-debounce';

// export default function page() {
//   const [page, setPage] = useState(1);
//   const [products, setProducts] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [search, setSearch] = useState("")
//   const [debouncedValue] = useDebounce(search, 1000)

//   const initialFetch = async () => {
//     const res = await fetch(BASE_URL + `/api/products?page=${page}&search=${search}`, {
//       method: 'GET',
//     });

//     const data = await res.json();

//     setProducts(data);
//   };

//   const fetchProducts = async () => {
//     console.log(page, "<page")
//     const res = await fetch(BASE_URL + `/api/products?page=${page+ 1}&search=${search}`, {
//       method: 'GET',
//     });

//     const data = await res.json();

//     // setProducts(products.concat(data));
//     // console.log(data, "<Data")
//     setProducts(data);
//     data.length > 0 ? setHasMore(true) : setHasMore(false);

//     setPage((prevPage) => prevPage + 1);
//   };

//   useEffect(() => {
//     initialFetch();
//   }, []);

//   useEffect(() => {
//     console.log("jalan")
//     if (debouncedValue) {
//       fetchProducts()

//     }
//   }, [debouncedValue])

//   return (
//     <>
//       <div className="min-h-screen my-28 container mx-auto px-10 lg:px-32">
//         <h2 className="font-black text-[#303459] text-4xl my-12">Products</h2>

//         <label className="input input-bordered flex items-center gap-2 my-10">
//           <input type="text" className="grow" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </label>
//         {/* <div className="grid grid-cols-4 gap-8">
//             {products.map((product: ProductModel) => {
//               return <Card key={product.slug} product={product} />;
//             })}
//           </div> */}
//         <div>
//           <InfiniteScroll
//             className="bg-transparent grid grid-cols-4 gap-8"
//             dataLength={products.length}
//             next={fetchProducts}
//             hasMore={hasMore}
//             loader={<h1>Loading...</h1>}
//           >
//             {products.map((product: ProductModel) => {
//               return <Card key={product.slug} product={product} />;
//             })}
//           </InfiniteScroll>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
