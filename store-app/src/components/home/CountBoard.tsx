export default function CountBoard() {
  return (
    <section className="relative mx-auto container px-10 lg:px-32">
      <div className="stats stats-horizontal shadow-lg absolute bottom-6 right-1/4 left-1/4 w-[50%]">
        <div className="stat text-center py-5">
          <div className="stat-title text-[#FE9345] font-bold">New Users</div>
          <div className="stat-value mt-2 text-[#303459] font-black">4,2K</div>
        </div>

        <div className="stat text-center py-5">
          <div className="stat-title text-[#FE9345] font-bold">
            New Registers
          </div>
          <div className="stat-value mt-2  text-[#303459] font-black">1,2K</div>
        </div>

        <div className="stat text-center py-5">
          <div className="stat-title text-[#FE9345] font-bold">Products</div>
          <div className="stat-value mt-2  text-[#303459] font-black">31K</div>
        </div>
      </div>
    </section>
  );
}
