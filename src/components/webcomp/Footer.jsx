import Link from 'next/link';

export function Footer() {
   return (
      <footer className="bg-white border-t border-gray-200">
         {/* Main Footer */}
         <div className="px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                  {/* Brand */}
                  <div>
                     <h3 className="text-2xl font-serif font-bold text-maroon mb-4">VEMUS</h3>
                     <p className="text-gray-700 text-sm mb-6">
                        Luxury jewelry crafted with passion and precision. Discover timeless elegance.
                     </p>
                     <div className="flex gap-4">
                        <a href="#" className="text-gray-600 hover:text-maroon text-xl">📱</a>
                        <a href="#" className="text-gray-600 hover:text-maroon text-xl">📘</a>
                        <a href="#" className="text-gray-600 hover:text-maroon text-xl">📷</a>
                        <a href="#" className="text-gray-600 hover:text-maroon text-xl">🎬</a>
                     </div>
                  </div>

                  {/* Shop */}
                  <div>
                     <h4 className="font-bold text-gray-800 mb-4">SHOP</h4>
                     <ul className="space-y-2">
                        <li><Link href="/shop" className="text-gray-600 hover:text-maroon text-sm transition">All Jewellery</Link></li>
                        <li><Link href="/shop" className="text-gray-600 hover:text-maroon text-sm transition">Earrings</Link></li>
                        <li><Link href="/shop" className="text-gray-600 hover:text-maroon text-sm transition">Rings</Link></li>
                        <li><Link href="/shop" className="text-gray-600 hover:text-maroon text-sm transition">Necklaces</Link></li>
                        <li><Link href="/shop" className="text-gray-600 hover:text-maroon text-sm transition">Bracelets</Link></li>
                        <li><Link href="/shop" className="text-gray-600 hover:text-maroon text-sm transition">Collections</Link></li>
                     </ul>
                  </div>

                  {/* Company */}
                  <div>
                     <h4 className="font-bold text-gray-800 mb-4">COMPANY</h4>
                     <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">About Us</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">Store Locator</Link></li>
                        <li><Link href="/contact" className="text-gray-600 hover:text-maroon text-sm transition">Contact Us</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">Careers</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">Blog</Link></li>
                     </ul>
                  </div>

                  {/* Support */}
                  <div>
                     <h4 className="font-bold text-gray-800 mb-4">SUPPORT</h4>
                     <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">FAQ</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">Shipping Info</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">Returns</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">Warranty</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-maroon text-sm transition">Size Guide</Link></li>
                     </ul>
                  </div>

                  {/* Newsletter */}
                  <div>
                     <h4 className="font-bold text-gray-800 mb-4">NEWSLETTER</h4>
                     <p className="text-gray-700 text-sm mb-4">Subscribe for exclusive offers and updates</p>
                     <form className="space-y-2">
                        <input
                           type="email"
                           placeholder="Your email"
                           className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-maroon"
                        />
                        <button className="w-full bg-maroon text-white py-2 font-semibold hover:bg-maroon-light transition rounded-sm">
                           Subscribe
                        </button>
                     </form>
                  </div>
               </div>

               {/* Divider */}
               <div className="border-t border-gray-200 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                     <div>
                        <p className="font-semibold text-gray-800 mb-2">💎 CERTIFIED AUTHENTIC</p>
                        <p>100% genuine gold and diamonds with complete certification</p>
                     </div>
                     <div>
                        <p className="font-semibold text-gray-800 mb-2">🚚 FREE SHIPPING</p>
                        <p>Free shipping on all orders above ₹10,000</p>
                     </div>
                     <div>
                        <p className="font-semibold text-gray-800 mb-2">♾️ LIFETIME WARRANTY</p>
                        <p>Lifetime warranty and free maintenance on all pieces</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Footer */}
         <div className="bg-light-pink py-6 px-6">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                  <div>
                     <p className="font-semibold text-gray-800 mb-2">PAYMENT METHODS</p>
                     <p>Credit Card • Debit Card • UPI • Digital Wallets • EMI Available</p>
                  </div>
                  <div className="text-center">
                     <p>&copy; 2024 VEMUS Jewelry. All rights reserved.</p>
                  </div>
                  <div className="text-right">
                     <Link href="#" className="hover:text-maroon transition">Privacy Policy</Link>
                     <span className="mx-2">•</span>
                     <Link href="#" className="hover:text-maroon transition">Terms & Conditions</Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
