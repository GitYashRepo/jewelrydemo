'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [currentCarousel, setCurrentCarousel] = useState(0);
   const [currentTestimonial, setCurrentTestimonial] = useState(0);

   const banners = [
      { id: 1, title: 'Elan - My World. My Story.', image: '/banner-1.jpg', subtitle: 'Explore Now', text: 'Discover our exquisite collection' },
      { id: 2, title: 'Celebrate Love & Milestones', image: '/banner-2.jpg', subtitle: 'Shop Now', text: 'Find the perfect piece for every moment' },
   ];

   const carouselItems = [
      { id: 1, title: 'Earrings', image: '/carousel-1.jpg', price: '₹5,000 - ₹50,000' },
      { id: 2, title: 'Necklaces', image: '/carousel-2.jpg', price: '₹8,000 - ₹1,00,000' },
      { id: 3, title: 'Bracelets', image: '/carousel-1.jpg', price: '₹3,000 - ₹75,000' },
      { id: 4, title: 'Rings', image: '/carousel-2.jpg', price: '₹5,000 - ₹2,00,000' },
   ];

   const collections = [
      { name: 'All Jewellery', icon: '💎' },
      { name: 'Earrings', icon: '👂' },
      { name: 'Pendants', icon: '📿' },
      { name: 'Finger Rings', icon: '💍' },
      { name: 'Mangalsutra', icon: '🎀' },
      { name: 'Chains', icon: '⛓️' },
      { name: 'Nose Pin', icon: '👃' },
      { name: 'Necklaces', icon: '✨' },
      { name: 'Necklace Set', icon: '💫' },
      { name: 'Bangles', icon: '🔔' },
      { name: 'Bracelets', icon: '⌚' },
      { name: 'Pendants & Earring Set', icon: '🎁' },
   ];

   const testimonials = [
      { text: 'Pure & Authentic', desc: '100% certified pure gold and diamonds with authenticity guaranteed' },
      { text: 'Expert Craftsmanship', desc: 'Handcrafted by master artisans with decades of experience' },
      { text: 'Lifetime Warranty', desc: 'Free maintenance and lifetime warranty on all purchases' },
   ];

   // Auto-rotate banner
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
   }, []);

   // Auto-rotate carousel
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentCarousel((prev) => (prev + 1) % carouselItems.length);
      }, 4000);
      return () => clearInterval(interval);
   }, []);

   // Auto-rotate testimonials
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
   }, []);

   return (
      <main className="bg-white">
         {/* ===== HERO BANNER CAROUSEL ===== */}
         <section className="min-h-screen flex items-center relative overflow-hidden">
            {banners.map((banner, index) => (
               <div
                  key={banner.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                     }`}
               >
                  <Image
                     src={banner.image || "/placeholder.svg"}
                     alt={banner.title}
                     fill
                     className="object-cover"
                     priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
               </div>
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
               <div className="max-w-2xl text-white">
                  <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{banners[currentSlide].title}</h1>
                  <p className="text-xl mb-8 opacity-90">{banners[currentSlide].text}</p>
                  <Link href="/shop" className="inline-block bg-maroon text-white px-8 py-3 font-semibold hover:bg-maroon-light transition">
                     {banners[currentSlide].subtitle}
                  </Link>
               </div>

               {/* Right Banner Image */}
               <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5">
                  <Image
                     src={banners[currentSlide].image || "/placeholder.svg"}
                     alt="Featured"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
               {banners.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => setCurrentSlide(index)}
                     className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-maroon' : 'bg-white/50'
                        }`}
                  />
               ))}
            </div>
         </section>

         {/* ===== CATEGORY GRID ===== */}
         <section className="min-h-screen py-16 px-6 bg-white flex items-center">
            <div className="max-w-7xl mx-auto w-full">
               <h2 className="text-4xl font-serif font-bold text-center mb-2 text-maroon">Shop by Category</h2>
               <p className="text-center text-gray-600 mb-12">Explore our stunning collection of 14,000+ designs</p>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {collections.map((cat) => (
                     <Link
                        key={cat.name}
                        href={`/shop?category=${cat.name.toLowerCase()}`}
                        className="group p-6 border border-gray-200 text-center hover:border-maroon hover:bg-light-pink transition"
                     >
                        <div className="text-5xl mb-4">{cat.icon}</div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-maroon transition">{cat.name}</h3>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         {/* ===== FEATURED CAROUSEL WITH TEXT & IMAGES ===== */}
         <section className="min-h-screen py-16 px-6 bg-light-pink flex items-center">
            <div className="max-w-7xl mx-auto w-full">
               <h2 className="text-4xl font-serif font-bold text-center mb-12 text-maroon">Featured Collections</h2>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Left Images */}
                  <div className="space-y-4">
                     {carouselItems.slice(0, 2).map((item) => (
                        <div key={item.id} className="h-48 overflow-hidden rounded-sm border border-gray-300">
                           <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover hover:scale-110 transition duration-300"
                           />
                        </div>
                     ))}
                  </div>

                  {/* Center Large Carousel Image */}
                  <div className="h-full min-h-96 overflow-hidden rounded-sm border-4 border-maroon">
                     <Image
                        src={carouselItems[currentCarousel].image || "/placeholder.svg"}
                        alt={carouselItems[currentCarousel].title}
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                     />
                  </div>

                  {/* Right Content - Text Carousel */}
                  <div className="space-y-6">
                     <div>
                        <h3 className="text-4xl font-serif font-bold text-maroon mb-4">
                           {carouselItems[currentCarousel].title}
                        </h3>
                        <p className="text-gray-700 mb-6">
                           Discover our exclusive collection of {carouselItems[currentCarousel].title.toLowerCase()}
                        </p>
                        <p className="text-2xl font-bold text-gold mb-8">{carouselItems[currentCarousel].price}</p>
                     </div>

                     <Link href="/shop" className="inline-block bg-maroon text-white px-8 py-3 font-semibold hover:bg-maroon-light transition">
                        View All
                     </Link>

                     {/* Carousel Indicators */}
                     <div className="flex gap-2 mt-8">
                        {carouselItems.map((_, index) => (
                           <button
                              key={index}
                              onClick={() => setCurrentCarousel(index)}
                              className={`w-3 h-3 rounded-full transition ${index === currentCarousel ? 'bg-maroon' : 'bg-gray-400'
                                 }`}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ===== INFINITE CAROUSEL - NEW ARRIVALS ===== */}
         <section className="min-h-screen py-16 px-6 bg-white flex items-center">
            <div className="max-w-7xl mx-auto w-full">
               <h2 className="text-4xl font-serif font-bold text-center mb-12 text-maroon">New Arrivals</h2>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                     <div key={i} className="border border-gray-200 overflow-hidden hover:shadow-lg transition group">
                        <div className="h-64 bg-gray-200 overflow-hidden relative">
                           <Image
                              src={carouselItems[i % carouselItems.length].image || "/placeholder.svg"}
                              alt="Product"
                              width={300}
                              height={300}
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                           />
                        </div>
                        <div className="p-4">
                           <h4 className="font-semibold text-gray-800 mb-2">{carouselItems[i % carouselItems.length].title}</h4>
                           <p className="text-maroon font-bold">₹{5000 + i * 1000}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* ===== TEXT CAROUSEL - TESTIMONIALS ===== */}
         <section className="min-h-screen py-16 px-6 bg-light-pink flex items-center">
            <div className="max-w-4xl mx-auto text-center w-full">
               <h2 className="text-4xl font-serif font-bold mb-12 text-maroon">Why Choose Us</h2>

               <div className="transition-all duration-500 min-h-48 flex items-center justify-center">
                  <div className="bg-white p-12 rounded-sm border-l-4 border-maroon w-full">
                     <h3 className="text-3xl font-bold text-maroon mb-4">{testimonials[currentTestimonial].text}</h3>
                     <p className="text-gray-700 text-lg">{testimonials[currentTestimonial].desc}</p>
                  </div>
               </div>

               {/* Testimonial Indicators */}
               <div className="flex gap-2 mt-8 justify-center">
                  {testimonials.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition ${index === currentTestimonial ? 'bg-maroon' : 'bg-gray-400'
                           }`}
                     />
                  ))}
               </div>
            </div>
         </section>

         {/* ===== FEATURED SECTION WITH IMAGE ===== */}
         <section className="min-h-screen py-16 px-6 bg-white flex items-center">
            <div className="max-w-7xl mx-auto w-full">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="h-96 md:h-[600px] overflow-hidden rounded-sm">
                     <Image
                        src="/banner-1.jpg"
                        alt="Signature Collection"
                        width={500}
                        height={600}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                     />
                  </div>
                  <div className="space-y-6">
                     <h2 className="text-5xl font-serif font-bold text-maroon mb-6">The Timeless Elegance</h2>
                     <p className="text-gray-700 text-lg leading-relaxed">
                        Our flagship collection represents the pinnacle of jewelry craftsmanship. Each piece is meticulously designed and handcrafted by master artisans with decades of experience.
                     </p>
                     <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-gray-700">
                           <span className="text-2xl">✨</span>
                           <span>22K Pure Gold & Natural Diamonds</span>
                        </li>
                        <li className="flex items-center gap-4 text-gray-700">
                           <span className="text-2xl">🔐</span>
                           <span>100% Certified & Authenticated</span>
                        </li>
                        <li className="flex items-center gap-4 text-gray-700">
                           <span className="text-2xl">♾️</span>
                           <span>Lifetime Warranty & Free Maintenance</span>
                        </li>
                     </ul>
                     <Link href="/shop" className="inline-block bg-maroon text-white px-8 py-3 font-semibold hover:bg-maroon-light transition">
                        Explore Collection
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         {/* ===== CTA SECTION ===== */}
         <section className="min-h-screen py-16 px-6 bg-maroon text-white flex items-center">
            <div className="max-w-4xl mx-auto text-center w-full">
               <h2 className="text-5xl font-serif font-bold mb-6">Jewellery for Every Moment</h2>
               <p className="text-2xl mb-8 opacity-90">14,000+ designs to choose from</p>
               <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <Link href="/shop" className="inline-block bg-gold text-maroon px-12 py-4 font-bold text-lg hover:bg-yellow-500 transition">
                     Start Shopping
                  </Link>
                  <Link href="/contact" className="inline-block border-2 border-gold text-gold px-12 py-4 font-bold text-lg hover:bg-gold/20 transition">
                     Book Appointment
                  </Link>
               </div>
            </div>
         </section>
      </main>
   );
}
