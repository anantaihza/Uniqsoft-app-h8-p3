// import Footer from '@/components/Footer';
import Footer from '@/components/Footer';
import Benefit from '@/components/home/Benefit';
import CountBoard from '@/components/home/CountBoard';
import Hero from '@/components/home/Hero';
import NewProducts from '@/components/home/NewProducts';
import SpecialOffer from '@/components/home/SpecialOffer';

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />

        <CountBoard />

        <Benefit />

        <SpecialOffer />

        <NewProducts/>

      </div>
      <Footer/>

    </>
  );
}

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
