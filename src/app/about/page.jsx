'use client'

import { Navbar } from '@/components/webcomp/Navbar'
import { AboutPage } from '@/components/webcomp/about/about-page'
import { Footer } from '@/components/webcomp/Footer'

export default function Page() {
   return (
      <>
         <Navbar />
         <AboutPage />
         <Footer />
      </>
   )
}
