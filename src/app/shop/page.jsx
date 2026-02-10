'use client';

import { Navbar } from '@/components/webcomp/Navbar';
import { ShopPage } from '@/components/webcomp/shop/shop-page';
import { Footer } from '@/components/webcomp/Footer';


export default function Page() {
   return (
      <>
         <Navbar />
         <ShopPage />
         <Footer />
      </>
   );
}
