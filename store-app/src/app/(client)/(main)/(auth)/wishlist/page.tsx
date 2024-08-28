export default function page() {
  const tags = ['T-Shirts', 'Men'];
  return (
    <div className="mt-28 container mx-auto px-10 lg:px-32">
      <h2 className="font-black text-[#303459] text-4xl mt-12">Wishlist</h2>
      <p className="mt-4 font-bold text-[#A3A2A8]">
        <span className="text-[#FE9345]">3 items</span> in your shopping cart
      </p>
      <div className="mt-10">
        <div className="bg-[#EFF6FF] p-10 flex gap-10 rounded-xl">
          <div className="">
            <img
              className="w-36 rounded-xl"
              src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461914/item/idgoods_69_461914.jpg?width=750"
              alt=""
            />
          </div>
          <div className="grow">
            <div className="flex gap-3">
              {tags.map((tag) => {
                return (
                  <div className="badge badge-outline text-[#303459]">
                    {tag}
                  </div>
                );
              })}
            </div>
            <h2 className="mt-2 font-bold text-xl text-[#FE9345]">
              AIRism Cotton Oversized T-Shirt | Striped Half Sleeve
            </h2>

            <div className="mt-4">
              <p className="text-[#303459] font-semibold">Price: </p>
              <h4 className="font-bold text-xl text-[#303459]">Rp. 199000</h4>
            </div>
          </div>
          <div className="action flex items-center">
            <button className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}