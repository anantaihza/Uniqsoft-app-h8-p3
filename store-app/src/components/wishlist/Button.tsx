'use client';

import { AddWishlist } from '@/actions/wishlist';

export default function Button({ productId, slug }: { productId: string, slug: string }) {
  const handleWishlist = async (id: string, slug: string) => {
    await AddWishlist(id, slug);
  };

  return (
    <button
      onClick={() => handleWishlist(productId, slug)}
      className="btn btn-lg bg-[#FE9345] text-white rounded-full mt-10 flex gap-3 px-10"
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
      <span>Wishlish</span>
    </button>
  );
}
