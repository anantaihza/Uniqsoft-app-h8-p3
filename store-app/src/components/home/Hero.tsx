import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero min-h-screen flex container mx-auto px-10 lg:px-32">
      <div className="content w-full lg:w-[40%] bg-blue">
        <h6 className="text-[#FE9345] font-bold text-xl text-center lg:text-left">
          Modern Fasion
        </h6>
        <h1 className="text-[#303459] font-black text-6xl lg:text-7xl text-center lg:text-left">
          Uniq<span className="text-[#FE9345]">Soft</span>
        </h1>
        <p className="mt-5 text-[#A3A2A8] text-center lg:text-left">
          UniqSoft is a clothing store that focuses on softness and comfort. Our
          collection is designed to keep you feeling comfortable all day long.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Link href="/products" className="btn btn-lg bg-[#FE9345] text-white rounded-full mt-10 flex gap-3 px-10">
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
          </Link>
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
  );
}
