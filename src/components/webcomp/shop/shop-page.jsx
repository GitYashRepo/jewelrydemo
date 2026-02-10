'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function ShopPage() {
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [selectedPrice, setSelectedPrice] = useState(null);
   const [selectedMetal, setSelectedMetal] = useState(null);
   const [showFilters, setShowFilters] = useState(false);
   const [gold24KPricePer10g, setGold24KPricePer10g] = useState(null);

   useEffect(() => {
      const fetchGoldPrice = async () => {
         try {
            const res = await fetch("/api/gold-price");
            const data = await res.json();
            setGold24KPricePer10g(Number(data.indiaMarketPricePer10Gram));
         } catch (err) {
            console.error("Failed to fetch gold price", err);
         }
      };

      fetchGoldPrice();
   }, []);


   const categories = [
      { name: 'All Jewellery', count: 14000 },
      { name: 'Earrings', count: 2500 },
      { name: 'Pendants', count: 1800 },
      { name: 'Finger Rings', count: 3200 },
      { name: 'Mangalsutra', count: 800 },
      { name: 'Chains', count: 1200 },
      { name: 'Necklaces', count: 2100 },
      { name: 'Bangles', count: 1600 },
      { name: 'Bracelets', count: 900 },
   ];

   const categoryWeightMap = {
      Rings: [2, 6],
      Earrings: [4, 10],
      Pendants: [1, 4],
      Chains: [8, 25],
      Necklaces: [20, 60],
      Bangles: [15, 40],
      Bracelets: [6, 15],
      Mangalsutra: [10, 30],
   };

   const categoryList = Object.keys(categoryWeightMap);

   const priceRanges = [
      { label: 'Under ₹5,000', value: '0-5000' },
      { label: '₹5,000 - ₹10,000', value: '5000-10000' },
      { label: '₹10,000 - ₹25,000', value: '10000-25000' },
      { label: '₹25,000 - ₹50,000', value: '25000-50000' },
      { label: 'Above ₹50,000', value: '50000-above' },
   ];

   const metals = [
      { name: '22K Gold', icon: '✨' },
      { name: '18K Gold', icon: '🌟' },
      { name: 'Platinum', icon: '💎' },
      { name: 'Silver', icon: '⭐' },
   ];

   // const products = Array.from({ length: 24 }).map((_, i) => ({
   //    id: i + 1,
   //    name: `Jewelry Item ${i + 1}`,
   //    price: 5000 + i * 2000,
   //    image: i % 2 === 0 ? '/carousel-1.jpg' : '/carousel-2.jpg',
   //    rating: 4.5 + (i % 5) * 0.1,
   //    reviews: 120 + i * 5,
   // }));

   const getRandomGrams = (min, max) =>
      Number((Math.random() * (max - min) + min).toFixed(1));

   const products = Array.from({ length: 24 }).map((_, i) => {
      const category = categoryList[i % categoryList.length];
      const [minG, maxG] = categoryWeightMap[category];

      return {
         id: i + 1,
         name: `24K Gold ${category.slice(0, -1)} ${i + 1}`,
         category,
         grams: getRandomGrams(minG, maxG), // ✅ THIS FIXES YOUR ISSUE
         image: i % 2 === 0 ? '/carousel-1.jpg' : '/carousel-2.jpg',
         rating: 4.3 + (i % 5) * 0.1,
         reviews: 100 + i * 7,
      };
   });

   return (
      <main className="bg-white min-h-screen pt-20">
         {/* Shop Header */}
         <section className="min-h-48 py-12 px-6 bg-light-pink flex items-center">
            <div className="max-w-7xl mx-auto w-full">
               <h1 className="text-5xl font-serif font-bold text-maroon mb-4">Shop Our Collection</h1>
               <p className="text-gray-700 text-lg">Explore 14,000+ exquisite jewelry pieces</p>
            </div>
         </section>

         {/* Shop Content */}
         <section className="px-6 py-12">
            <div className="max-w-7xl mx-auto">
               <div className="flex gap-8">
                  {/* ===== SIDEBAR FILTERS ===== */}
                  <aside
                     className={`w-full md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'
                        } md:block`}
                  >
                     <div className="space-y-8">
                        {/* Category Filter */}
                        <div>
                           <h3 className="text-lg font-bold text-maroon mb-4 border-b border-gray-200 pb-3">Category</h3>
                           <div className="bg-light-pink p-4 rounded-sm mb-4">
                              <input
                                 type="text"
                                 placeholder="Search categories"
                                 className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-maroon"
                              />
                           </div>
                           <div className="space-y-3">
                              {categories.map((cat) => (
                                 <label
                                    key={cat.name}
                                    className="flex items-center gap-3 cursor-pointer hover:text-maroon transition"
                                 >
                                    <input
                                       type="checkbox"
                                       checked={selectedCategory === cat.name}
                                       onChange={() =>
                                          setSelectedCategory(selectedCategory === cat.name ? null : cat.name)
                                       }
                                       className="w-4 h-4 border border-gray-300 rounded"
                                    />
                                    <span className="text-sm text-gray-700">
                                       {cat.name}
                                       <span className="text-gray-500 ml-2">({cat.count})</span>
                                    </span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        {/* Price Filter */}
                        <div>
                           <h3 className="text-lg font-bold text-maroon mb-4 border-b border-gray-200 pb-3">Price</h3>
                           <div className="space-y-3">
                              {priceRanges.map((range) => (
                                 <label
                                    key={range.value}
                                    className="flex items-center gap-3 cursor-pointer hover:text-maroon transition"
                                 >
                                    <input
                                       type="radio"
                                       name="price"
                                       value={range.value}
                                       checked={selectedPrice === range.value}
                                       onChange={() => setSelectedPrice(range.value)}
                                       className="w-4 h-4"
                                    />
                                    <span className="text-sm text-gray-700">{range.label}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        {/* Metal Filter */}
                        <div>
                           <h3 className="text-lg font-bold text-maroon mb-4 border-b border-gray-200 pb-3">Metal & Stones</h3>
                           <div className="space-y-3">
                              {metals.map((metal) => (
                                 <label
                                    key={metal.name}
                                    className="flex items-center gap-3 cursor-pointer hover:text-maroon transition"
                                 >
                                    <input
                                       type="checkbox"
                                       checked={selectedMetal === metal.name}
                                       onChange={() =>
                                          setSelectedMetal(selectedMetal === metal.name ? null : metal.name)
                                       }
                                       className="w-4 h-4 border border-gray-300 rounded"
                                    />
                                    <span className="text-lg">{metal.icon}</span>
                                    <span className="text-sm text-gray-700">{metal.name}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        {/* Occasion Filter */}
                        <div>
                           <h3 className="text-lg font-bold text-maroon mb-4 border-b border-gray-200 pb-3">Occasion</h3>
                           <div className="space-y-3">
                              {['Wedding', 'Engagement', 'Anniversary', 'Daily Wear', 'Festive'].map((occasion) => (
                                 <label
                                    key={occasion}
                                    className="flex items-center gap-3 cursor-pointer hover:text-maroon transition"
                                 >
                                    <input
                                       type="checkbox"
                                       className="w-4 h-4 border border-gray-300 rounded"
                                    />
                                    <span className="text-sm text-gray-700">{occasion}</span>
                                 </label>
                              ))}
                           </div>
                        </div>

                        {/* Clear Filters */}
                        <button className="w-full py-3 bg-maroon text-white font-semibold hover:bg-maroon-light transition rounded-sm">
                           Clear All Filters
                        </button>
                     </div>
                  </aside>

                  {/* ===== PRODUCTS GRID ===== */}
                  <div className="flex-1">
                     {/* Top Bar */}
                     <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                        <div className="flex items-center gap-4">
                           <button
                              onClick={() => setShowFilters(!showFilters)}
                              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm hover:border-maroon transition"
                           >
                              <span>🔽</span>
                              Filters
                           </button>
                           <p className="text-gray-700">Showing 1-24 of {products.length} results</p>
                        </div>
                        <select className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-maroon">
                           <option>Sort By: New Arrivals</option>
                           <option>Price: Low to High</option>
                           <option>Price: High to Low</option>
                           <option>Best Sellers</option>
                           <option>Top Rated</option>
                        </select>
                     </div>

                     {/* Products Grid */}
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                        {products.map((product) => (
                           <Link
                              key={product.id}
                              href={`/product/${product.id}`}
                              className="group border border-gray-200 overflow-hidden hover:shadow-lg transition"
                           >
                              <div className="relative h-64 overflow-hidden bg-gray-200">
                                 <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                 />
                                 <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-light-pink transition">
                                    ❤️
                                 </button>
                              </div>
                              <div className="p-4">
                                 <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-maroon transition">
                                    {product.name}
                                 </h3>
                                 <p className="text-sm text-gray-500 mb-1">
                                    24K Gold • {product.grams} g
                                 </p>
                                 <div className="flex items-center gap-2 mb-3">
                                    <div className="flex gap-1">
                                       {Array(5)
                                          .fill(0)
                                          .map((_, i) => (
                                             <span
                                                key={i}
                                                className={i < Math.floor(product.rating) ? '⭐' : '☆'}
                                             />
                                          ))}
                                    </div>
                                    <span className="text-xs text-gray-500">({product.reviews})</span>
                                 </div>
                                 {gold24KPricePer10g ? (
                                    <p className="text-maroon font-bold text-lg">
                                       ₹{Math.round((gold24KPricePer10g / 10) * product.grams).toLocaleString()}
                                    </p>
                                 ) : (
                                    <p className="text-gray-400">Calculating price...</p>
                                 )}
                                 <button className="mt-3 w-full py-2 border border-maroon text-maroon font-semibold hover:bg-maroon hover:text-white transition rounded-sm">
                                    Add to Cart
                                 </button>
                              </div>
                           </Link>
                        ))}
                     </div>

                     {/* Pagination */}
                     <div className="flex justify-center items-center gap-2 mb-12">
                        <button className="px-4 py-2 border border-gray-300 rounded-sm hover:border-maroon transition">
                           ←
                        </button>
                        {[1, 2, 3, 4, 5].map((page) => (
                           <button
                              key={page}
                              className={`px-4 py-2 rounded-sm font-semibold transition ${page === 1
                                 ? 'bg-maroon text-white'
                                 : 'border border-gray-300 hover:border-maroon'
                                 }`}
                           >
                              {page}
                           </button>
                        ))}
                        <button className="px-4 py-2 border border-gray-300 rounded-sm hover:border-maroon transition">
                           →
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Bottom CTA */}
         <section className="min-h-48 py-12 px-6 bg-maroon text-white flex items-center">
            <div className="max-w-7xl mx-auto w-full text-center">
               <h2 className="text-4xl font-serif font-bold mb-4">Need Help Finding the Perfect Piece?</h2>
               <p className="text-lg mb-6 opacity-90">Our jewelry experts are here to assist you</p>
               <Link href="/contact" className="inline-block bg-gold text-maroon px-8 py-3 font-bold hover:bg-yellow-500 transition">
                  Book Consultation
               </Link>
            </div>
         </section>
      </main>
   );
}
