import { ProductModel } from '@/db/models/product';
import { ObjectId } from 'mongodb';
import RemoveButton from './wishlist/RemoveButton';

interface TypeProp {
  item: {
    _id: ObjectId;
    product: ProductModel;
  };
}

export default function CardWishlist({ item }: TypeProp) {
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
        <RemoveButton wishlistId={String(item._id)} />
      </div>
    </div>
  );
}
