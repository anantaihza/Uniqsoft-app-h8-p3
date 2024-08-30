import { ProductModel } from '@/db/models/product';
import Link from 'next/link';

interface TypeProduct {
  product: ProductModel;
}

// ! Perlu kah add wishlist di card? 
export default function Card({ product }: TypeProduct) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card bg-base-100 border"
    >
      <figure>
        <img src={product.thumbnail} alt={product.name} className="" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          {product.tags.map((tag, index) => {
            return (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            );
          })}
        </div>
        <h2 className="card-title h-14 line-clamp-2">{product.name}</h2>
        <h6 className="mt-3 font-bold text-xl">Rp. {product.price}</h6>
        <p className="line-clamp-2">{product.excerpt}</p>
      </div>
    </Link>
  );
}
