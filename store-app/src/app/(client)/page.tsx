import Navbar from '@/components/Navbar';
// import Image from 'next/image';

{
  /* <Image
  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>; */
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <section className="hero min-h-screen flex container mx-auto px-10 lg:px-32">
          <div className="content w-full lg:w-[40%] bg-blue">
            <h6 className="text-[#FE9345] font-bold text-xl text-center lg:text-left">
              Modern Fasion
            </h6>
            <h1 className="text-[#303459] font-black text-6xl lg:text-7xl text-center lg:text-left">
              Uniq<span className="text-[#FE9345]">Soft</span>
            </h1>
            <p className="mt-5 text-[#A3A2A8] text-center lg:text-left">
              UniqSoft is a clothing store that focuses on softness and comfort.
              Our collection is designed to keep you feeling comfortable all day
              long.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#FE9345] rounded-full text-white mt-5 px-12 py-4 flex gap-2">
                Shop Now!{' '}
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
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="content-img w-[60%] h-[100vh] relative hidden lg:block">
            {/* <Image src="/hero.png" width={1000} height={1000} alt='Hero' /> */}
            <img
              src="/hero3.png"
              alt=""
              className="w-[100%] absolute bottom-14 -right-20"
            />
          </div>
        </section>
        <section className="relative mx-auto container px-10 lg:px-32">
          <div className="stats stats-horizontal shadow-lg absolute bottom-6 right-1/4 left-1/4 w-[50%]">
            <div className="stat text-center py-5">
              <div className="stat-title text-[#FE9345] font-bold">
                New Users
              </div>
              <div className="stat-value mt-2 text-[#303459] font-black">
                4,2K
              </div>
              {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
            </div>

            <div className="stat text-center py-5">
              <div className="stat-title text-[#FE9345] font-bold">
                New Registers
              </div>
              <div className="stat-value mt-2  text-[#303459] font-black">
                1,2K
              </div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>

            <div className="stat text-center py-5">
              <div className="stat-title text-[#FE9345] font-bold">
                Products
              </div>
              <div className="stat-value mt-2  text-[#303459] font-black">
                31K
              </div>
              {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
            </div>
          </div>
        </section>
        <section className="container mx-auto px-10 lg:px-32 min-h-[100vh] flex flex-col justify-center gap-6">
          <h2 className="font-black text-5xl text-center text-[#303459]">
            Benefits
          </h2>
          <div className="grid grid-cols-3 gap-10 justify-center mt-20">
            <div className="bg-[#EDFAF0] px-12 pb-12 pt-14 rounded-xl relative">
              <div className="p-4 bg-[#3DD18A] w-fit absolute -top-8 rounded-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h2 className="text-[#303459] font-black text-2xl">
                Free Shipping
              </h2>
              <p className="mt-4 text-[#A3A2A8]">
                Free shipping without worrying about distance!
              </p>
            </div>
            <div className="bg-[#FFF6D9] px-12 pb-12 pt-14 rounded-xl relative">
              <div className="p-4 bg-[#FDBC18] w-fit absolute -top-8 rounded-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                  />
                </svg>
              </div>
              <h2 className="text-[#303459] font-black text-2xl">
                14 Days Easy Return
              </h2>
              <p className="mt-4 text-[#A3A2A8]">
                Facilitate return costs if the item has not arrived
              </p>
            </div>
            <div className="bg-[#EFF6FF] px-12 pb-12 pt-14 rounded-xl relative">
              <div className="p-4 bg-[#1878FF] w-fit absolute -top-8 rounded-md text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <h2 className="text-[#303459] font-black text-2xl">
                Customer Support
              </h2>
              <p className="mt-4 text-[#A3A2A8]">
                The support team will be ready to assist you at any time.
              </p>
            </div>
          </div>
        </section>

        <section className="min-h-[80vh] container mx-auto px-10 lg:px-32">
          <h2 className="font-black text-5xl text-center text-[#303459]">
            <span className=" text-[#FE9345]">Special</span> Offer
          </h2>
          <div className="p-20 bg-[#EFF6FF] mt-20 rounded-xl flex relative">
            <div className="text-white w-[50%]">
              <h5 className="font-bold text-lg text-[#303459]">
                Trending cloths
              </h5>
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
        <section className="min-h-[80vh] container mx-auto px-10 lg:px-32 flex flex-col gap-32">
          <h2 className="font-black text-5xl text-center text-[#303459]">
            <span className=" text-[#FE9345]">Trending</span> products
          </h2>

          <div className="grid grid-cols-4 gap-10">
            <div className="card bg-base-100 shadow-xl">
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
            </div>
            <div className="card bg-base-100 shadow-xl">
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
            </div>
            <div className="card bg-base-100 shadow-xl">
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
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/item/idgoods_69_461914.jpg?width=750"
                  alt="Shoes"
                  className='h-60'
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
            </div>
          </div>
        </section>
        <footer className="footer bg-[#FE9345] text-white py-10 px-10 lg:px-32">
          <aside>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              UniqSoft Industries Ltd.
              <br />
              Providing reliable cloth since 2024
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
}
