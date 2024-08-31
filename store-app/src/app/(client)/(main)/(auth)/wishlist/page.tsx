import ListWishlist from '@/components/wishlist/ListWishlist';
import { BASE_URL } from '@/constants';
import { ProductModel } from '@/db/models/product';
import { ObjectId } from 'mongodb';
import { cookies } from 'next/headers';

export interface TypeItem {
  _id: ObjectId;
  product: ProductModel;
}

const fetchWishlist = async () => {
  const res = await fetch(BASE_URL + '/api/wishlist', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookies().toString(),
    },
  });

  const data = await res.json();

  return data;
};

export default async function page() {
  const wishlist: TypeItem[] = await fetchWishlist();

  return (
    <div className="mt-28 mb-10 min-h-screen container mx-auto px-10 lg:px-32">
      <h2 className="font-black text-[#303459] text-4xl mt-12">Wishlist</h2>
      <p className="mt-4 font-bold text-[#A3A2A8]">
        <span className="text-[#FE9345]">{wishlist.length} items</span> in your
        shopping cart
      </p>

      <ListWishlist wishlist={wishlist} />
    </div>
  );
}
