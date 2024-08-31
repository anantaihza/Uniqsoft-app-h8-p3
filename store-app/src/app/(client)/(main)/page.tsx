import Hero from '@/components/home/Hero';
import CountBoard from '@/components/home/CountBoard';
import Benefit from '@/components/home/Benefit';
import SpecialOffer from '@/components/home/SpecialOffer';
import NewProducts from '@/components/home/NewProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <CountBoard />
        <Benefit />
        <SpecialOffer />
        <NewProducts />
      </div>
      <Footer />
    </>
  );
}
