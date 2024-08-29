export default function Benefit() {
  return (
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
          <h2 className="text-[#303459] font-black text-2xl">Free Shipping</h2>
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
  );
}
