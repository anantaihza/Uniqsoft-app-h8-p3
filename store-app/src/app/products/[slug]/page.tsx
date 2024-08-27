import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function page() {
  const tags = ['T-Shirts', 'Men'];
  return (
    <>
      <Navbar />
      <div className="container min-h-screen mx-auto px-10 lg:px-32 flex gap-6">
        <div className="content-img w-[50%] my-auto">
          <div className="carousel carousel-center bg-white rounded-box space-x-4 w-[34rem] h-[34rem]">
            <div className="carousel-item">
              <img
                src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/item/idgoods_69_461914.jpg?width=750"
                className="rounded-box h-[100%]"
                id='slide1'
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/sub/idgoods_461914_sub2.jpg?width=750"
                className="rounded-box h-[100%]"
                id='slide2'
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461914/sub/goods_461914_sub14.jpg?width=750"
                className="rounded-box h-[100%]"
                id='slide3'
              />
            </div>
          </div>
        </div>
        <div className="content w-[50%] my-auto">
          <div className="flex gap-3">
            {tags.map((tag) => {
              return <div className="badge badge-outline text-[#303459]">{tag}</div>;
            })}
          </div>
          <h2 className="mt-4 font-black text-4xl text-[#303459]">
            AIRism Cotton Oversized T-Shirt | Striped Half Sleeve
          </h2>

          <div className="flex gap-6 mt-10">
            <Link href="#slide1">
            <img className='w-24 rounded-xl' src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/item/idgoods_69_461914.jpg?width=750" alt="" />

            </Link>
            <Link href="#slide2">
            <img className='w-24 rounded-xl' src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/sub/idgoods_461914_sub2.jpg?width=750" alt="" />

            </Link>
            <Link href="#slide3">
            <img className='w-24 rounded-xl' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461914/sub/goods_461914_sub14.jpg?width=750" alt="" />

            </Link>
          </div>

          <div className="mt-10">
            <p className="text-[#303459] font-bold">Price: </p>
            <h4 className="font-bold text-2xl text-[#303459]">Rp. 199000</h4>
          </div>

          <div className="desc mt-10">
            <p className='text-[#303459] font-bold'>Description: </p>
            <p className='text-[#A3A2A8]'>
              Smooth 'AIRism' fabric with the look of cotton. Narrow crew neck
              for a sleek look. Dropped shoulders and roomy half-length sleeves.
              The fabric creates a flattering silhouette.
            </p>
          </div>

          <button className="btn btn-lg bg-[#FE9345] text-white rounded-full mt-10 flex gap-3 px-10">
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
        </div>
      </div>
    </>
  );
}
