import { ProductModel } from '@/db/models/product';
import Card from '../Card';

interface TypeListProduct {
  products: ProductModel[];
}

export default function ListProduct({ products }: TypeListProduct) {
  return (
    <div className="bg-transparent grid grid-cols-4 gap-8">
      {products.map((product: ProductModel) => {
        return <Card key={product.slug} product={product} />;
      })}
    </div>
  );
}
