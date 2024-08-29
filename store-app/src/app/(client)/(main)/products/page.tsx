import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { ProductModel } from '@/db/models/product';
// import Link from 'next/link';

const fetchProducts = async () => {
  const res = await fetch('http://localhost:3000' + '/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return data;
};

export default async function page() {
  const products: ProductModel[] = await fetchProducts();

  return (
    <>
      <div className="min-h-screen my-28 container mx-auto px-10 lg:px-32">
        <h2 className="font-black text-[#303459] text-4xl my-12">Products</h2>
        <section className="">

          {/* Harus kah use client? */}
          <div className="grid grid-cols-4 gap-8">
            {products.map((product: ProductModel) => {
              return <Card key={product.slug} product={product} />;
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
