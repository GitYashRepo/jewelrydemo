'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const categories = [
   { name: 'All Jewellery', icon: '💎', subcategories: ['All Jewelry', 'Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Anklets', 'Bangles'] },
   { name: 'Gold', icon: '✨', subcategories: ['Gold Rings', 'Gold Necklaces', 'Gold Bracelets', 'Gold Earrings'] },
   { name: 'Diamond', icon: '💠', subcategories: ['Diamond Rings', 'Diamond Necklaces', 'Diamond Earrings', 'Diamond Sets'] },
   { name: 'Earrings', icon: '👂', subcategories: ['Drop Earrings', 'Studs', 'Jhumkas', 'Hoops'] },
   { name: 'Rings', icon: '💍', subcategories: ['Engagement Rings', 'Wedding Rings', 'Casual Rings', 'Cocktail Rings'] },
   { name: 'Daily Wear', icon: '👔', subcategories: ['Daily Rings', 'Daily Necklaces', 'Daily Earrings'] },
   { name: 'Collections', icon: '🎁', subcategories: ['New Collections', 'Featured', 'Limited Edition'] },
   { name: 'Wedding', icon: '💒', subcategories: ['Wedding Sets', 'Bridal Jewelry', 'Couple Rings'] },
   { name: 'Gifting', icon: '🎀', subcategories: ['Gift Sets', 'Gift Cards', 'Customized Gifts'] },
   { name: 'More', icon: '⋮', subcategories: ['Custom Design', 'Gift Wrapping', 'Size Guide', 'Maintenance'] },
];

export function Navbar() {
   const [activeCategory, setActiveCategory] = useState(null);
   const sliderRef = useRef(null);
   const [goldPrice, setGoldPrice] = useState(null);
   const [updatedAt, setUpdatedAt] = useState(null);

   const fetchGoldPrice = async () => {
      try {
         const res = await fetch("/api/gold-price");
         const data = await res.json();

         // ✅ Use INDIA 24K price (per 10 gram)
         setGoldPrice(data.indiaMarketPricePer10Gram);
         setUpdatedAt(data.updatedAt);
      } catch (err) {
         console.error("Gold price fetch failed", err);
      }
   };

   useEffect(() => {
      fetchGoldPrice();

      // 🔁 refresh every 10 minutes
      const interval = setInterval(fetchGoldPrice, 10 * 60 * 1000);

      return () => clearInterval(interval);
   }, []);


   return (
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
         {/* Top Bar */}
         <div className="bg-gray-100 px-6 py-3 text-xs text-gray-600 flex justify-between">
            {/* <div>Free Shipping on Orders Above ₹10,000</div> */}
            <div className="text-black text-sm text-center">
               {goldPrice ? (
                  <>Live Gold Price: <b>₹{goldPrice}</b> / 10 gram</>
               ) : (
                  "Fetching live gold price..."
               )}
            </div>
            <div className="flex gap-4">
               <Link href="#" className="hover:text-maroon">Track Order</Link>
               <Link href="#" className="hover:text-maroon">Visit Store</Link>
            </div>
         </div>

         {/* Main Navbar */}
         <div className="px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif text-maroon font-bold">
               JEWELS
            </Link>

            {/* Search Bar */}
            <div className="flex flex-row items-center gap-4">
               {/* <div className="relative">
                  <input
                     type="text"
                     placeholder="Search for gold necklace"
                     className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-maroon"
                  />
                  <button className="absolute right-4 top-2.5 text-gray-400 hover:text-maroon">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                  </button>
               </div> */}
               <div><Link href="/about">About Us</Link></div>
               <div><Link href="/contact">Contact</Link></div>
               <div><Link href="/shop">Shop</Link></div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
               {/* <button className="text-gray-600 hover:text-maroon text-xl">📷</button> */}
               {/* <button className="text-gray-600 hover:text-maroon text-xl">⌚</button> */}
               {/* <button className="text-gray-600 hover:text-maroon text-xl">💎</button> */}
               {/* <button className="text-gray-600 hover:text-maroon text-xl">📅</button> */}
               {/* <button className="text-gray-600 hover:text-maroon text-xl">❤️</button> */}
               {/* <button className="text-gray-600 hover:text-maroon text-xl">👤</button> */}

               <button className="w-40">
                  <span className="text-gray-600 hover:text-maroon text-xl">Cart 🛒</span>
               </button>
            </div>
         </div>

         {/* Category Tabs with Slider */}
         <div
            className="border-t border-gray-200 px-6 py-0 flex items-center gap-4 relative"
            onMouseLeave={() => setActiveCategory(null)}
         >
            {/* Left Arrow Button */}
            {/* <button
               onClick={() => scroll('left')}
               className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 hover:border-maroon hover:bg-light-pink flex items-center justify-center transition text-gray-600 hover:text-maroon font-bold text-lg"
            >
               ◀
            </button> */}

            {/* Slider Container */}
            <div
               ref={sliderRef}
               className="flex-1 overflow-hidden"
               style={{ scrollBehavior: 'smooth' }}
            >
               <div className="flex gap-8">
                  {categories.map((cat) => (
                     <div
                        key={cat.name}
                        className="relative flex-shrink-0"
                        onMouseEnter={() => setActiveCategory(cat.name)}
                     >
                        <button
                           className={`text-sm font-medium whitespace-nowrap py-4 px-2 border-b-2 transition-colors ${activeCategory === cat.name ? 'text-maroon border-maroon' : 'text-gray-700 border-transparent hover:text-maroon'
                              }`}
                        >
                           {cat.name}
                        </button>

                        {/* Dropdown Menu - Appears on hover */}
                        {activeCategory === cat.name && (
                           <div
                              className="absolute left-0 top-full bg-white border border-gray-200 shadow-lg rounded-sm z-50 min-w-max"
                              onMouseEnter={() => setActiveCategory(cat.name)}
                           >
                              <div className="py-4 px-6">
                                 <div className="space-y-2">
                                    {cat.subcategories.map((sub) => (
                                       <Link
                                          key={sub}
                                          href={`/shop?category=${sub.toLowerCase()}`}
                                          className="block text-sm text-gray-700 hover:text-maroon hover:font-semibold transition py-2"
                                       >
                                          {sub}
                                       </Link>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>

            {/* Right Arrow Button */}
            {/* <button
               onClick={() => scroll('right')}
               className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 hover:border-maroon hover:bg-light-pink flex items-center justify-center transition text-gray-600 hover:text-maroon font-bold text-lg"
            >
               ▶
            </button> */}
         </div>
      </nav>
   );
}
