// export const metadata: Metadata = {
//   title: 'Ecommerce',
//   description: 'Generated by create next app',
// };

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Uniqsoft | Product",
  description: "Our collection is designed to keep you feeling comfortable all day long."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
