'use client';

import { DeleteWishlist } from '@/actions/wishlist';
import { ProductModel } from '@/db/models/product';
import { ObjectId } from 'mongodb';

interface TypeProp {
  item: {
    _id: ObjectId;
    product: ProductModel;
  };
}

export default function CardWishlist({ item }: TypeProp) {
  // handle delete bisa di sini
  const handleDelete = async (id: string) => {
    // console.log(id);
    // console.log('ke hit');
    await DeleteWishlist(id);
    // console.log('selesai');
  };

  return (
    <div className="card-wishlist bg-[#EFF6FF] p-10 flex gap-10 rounded-xl">
      <div className="">
        <img
          className="w-36 rounded-xl"
          src={item.product.thumbnail}
          alt={item.product.name}
        />
      </div>
      <div className="grow">
        <div className="flex gap-3">
          {item.product.tags.map((tag, index) => {
            return (
              <div key={index} className="badge badge-outline text-[#303459]">
                {tag}
              </div>
            );
          })}
        </div>
        <h2 className="mt-2 font-bold text-xl text-[#FE9345]">
          {item.product.name}
        </h2>

        <div className="mt-4">
          <p className="text-[#303459] font-semibold">Price: </p>
          <h4 className="font-bold text-xl text-[#303459]">
            Rp. {item.product.price}
          </h4>
        </div>
      </div>
      <div className="action flex items-center">
        <button
          className="btn btn-circle btn-outline"
          onClick={() => handleDelete(String(item._id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
