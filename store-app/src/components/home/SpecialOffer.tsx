import React from 'react';

export default function SpecialOffer() {
  return (
    <section className="min-h-[80vh] container mx-auto px-10 lg:px-32">
      <h2 className="font-black text-5xl text-center text-[#303459]">
        <span className=" text-[#FE9345]">Special</span> Offer
      </h2>
      <div className="p-20 bg-[#EFF6FF] mt-20 rounded-xl flex relative">
        <div className="text-white w-[50%]">
          <h5 className="font-bold text-lg text-[#303459]">Trending cloths</h5>
          <h3 className="font-black text-4xl uppercase text-[#303459]">
            New Collection of UniqSoft
          </h3>
          <div className="flex gap-4 mt-5 items-center text-[#FE9345]">
            <p className="text-[#303459]">
              <s>Rp. 300.000</s>
            </p>
            <p className="font-black text-2xl">Rp. 150.000</p>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src="/special-offer.png"
            className="h-[100%] absolute top-0 bottom-0 right-0"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
