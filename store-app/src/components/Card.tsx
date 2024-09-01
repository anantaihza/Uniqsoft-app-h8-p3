'use client';
import { AddWishlist } from '@/actions/wishlist';
import { ProductModel } from '@/db/models/product';
import Link from 'next/link';

interface TypeProduct {
  product: ProductModel;
}

export default function Card({ product }: TypeProduct) {
  const handleWishlist = async (id: string) => {
    AddWishlist(id);
  };

  return (
    <div className="card bg-base-100 border relative">
      <Link href={`/products/${product.slug}`} className="">
        <figure>
          <img src={product.thumbnail} alt={product.name} className="rounded-t-2xl" />
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
          <p className="line-clamp-2 mb-6">{product.excerpt}</p>
          {/*  */}
        </div>
      </Link>
      <div className="absolute bottom-3 right-5">
        <button
          className="z-50 hover:text-[#FE9345]"
          onClick={() => handleWishlist(String(product._id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
