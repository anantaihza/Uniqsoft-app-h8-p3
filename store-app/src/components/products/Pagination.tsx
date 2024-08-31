import InfiniteScroll from 'react-infinite-scroll-component';
import ListProduct from './ListProduct';
import { ProductModel } from '@/db/models/product';

interface TypePagination {
  products: ProductModel[];
  fetchProducts: any; //!
  hasMore: boolean;
}

export default function Pagination({
  products,
  fetchProducts,
  hasMore,
}: TypePagination) {
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchProducts}
      hasMore={hasMore}
      loader={<h1>Loading...</h1>}
    >
      <ListProduct products={products} />
    </InfiniteScroll>
  );
}
