import Hero from '@/components/home/Hero';
import CountBoard from '@/components/home/CountBoard';
import Benefit from '@/components/home/Benefit';
import SpecialOffer from '@/components/home/SpecialOffer';
import NewProducts from '@/components/home/NewProducts';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Uniqsoft | Home",
  description: "UniqSoft is a clothing store that focuses on softness and comfort. Our collection is designed to keep you feeling comfortable all day long."
}

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
