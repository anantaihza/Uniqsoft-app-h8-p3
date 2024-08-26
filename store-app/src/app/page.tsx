import Navbar from '@/components/home/Navbar';
import Image from 'next/image';

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
          <div className="content w-full lg:w-[45%] bg-blue">
            <h6 className="text-[#FE9345] font-bold text-xl text-center lg:text-left">
              Modern Fasion
            </h6>
            <h1 className="text-[#303459] font-black text-6xl lg:text-7xl text-center lg:text-left">
              SmoothJam
            </h1>
            <p className="mt-5 text-[#A3A2A8] text-center lg:text-left">
              SmoothJam is a clothing store that prioritizes softness and
              comfort in every piece we offer. Our collection features a wide
              range of clothing designed to provide a soft and comfortable feel
              against your skin, ensuring you feel relaxed and confident
              throughout the day.
            </p>

            <div className="text-center lg:text-left">
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
          <div className="content-img w-[55%] h-[100vh] relative hidden lg:block">
            {/* <Image src="/hero.png" width={1000} height={1000} alt='Hero' /> */}
            <img
              src="/hero.png"
              alt=""
              className="w-[100%] absolute bottom-0 -right-20"
            />
          </div>
        </section>
        <section className="relative h-12 mx-auto container px-10 lg:px-32">
          <div className="stats stats-horizontal shadow-lg absolute bottom-0 right-1/4 left-1/4 w-[50%]">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </section>
        <section className="container px-10 lg:px-32 min-h-[80vh] flex flex-col justify-center gap-6">
          <h2 className="font-black text-5xl text-center text-[#303459]">
            Benefits
          </h2>
          <div className="grid grid-cols-3 gap-10 justify-center mt-20">
            <div className="bg-[#EDFAF0] px-12 pb-12 pt-14 rounded-lg relative">
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
            <div className="bg-[#FFF6D9] px-12 pb-12 pt-14 rounded-lg relative">
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
            <div className="bg-[#EFF6FF] px-12 pb-12 pt-14 rounded-lg relative">
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
                24/7 Customer Support
              </h2>
              <p className="mt-4 text-[#A3A2A8]">
                The support team will be ready to assist you at any time.
              </p>
            </div>
          </div>
        </section>

        <section className='min-h-screen flex container mx-auto px-10 lg:px-32'>
          <div className=""></div>
          <div className=""></div>
        </section>
      </div>
    </>
  );
}
