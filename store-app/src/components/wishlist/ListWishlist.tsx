'use client';

import CardWishlist from '../CardWishlist';
import { TypeItem } from '@/app/(client)/(main)/(auth)/wishlist/page';

export default function ListWishlist({ wishlist }: { wishlist: TypeItem[] }) {
  return (
    <div className="mt-10 flex flex-col gap-5">
      {wishlist.map((item) => {
        return <CardWishlist key={String(item._id)} item={item} />;
      })}
    </div>
  );
}
