import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mt-28 container mx-auto px-10 lg:px-32">
        <h2 className="font-black text-[#303459] text-4xl my-12">Products</h2>
        <section className="">
          <div className="grid grid-cols-4 gap-8">
            <Link href="/products/1" className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
