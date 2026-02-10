'use client'

import { Navbar } from '@/components/webcomp/Navbar';
import { Footer } from '@/components/webcomp/Footer';

export default function ContactPage() {
   return (
      <>
         <Navbar />
         <main className="bg-white">
            {/* Hero Section */}
            <section className="min-h-screen py-16 px-6 bg-light-pink flex items-center">
               <div className="max-w-7xl mx-auto w-full">
                  <h1 className="text-5xl font-serif font-bold text-maroon mb-4">Get in Touch</h1>
                  <p className="text-gray-700 text-lg">We'd love to hear from you. Our jewelry experts are here to help.</p>
               </div>
            </section>

            {/* Contact Content */}
            <section className="min-h-screen py-16 px-6 flex items-center">
               <div className="max-w-7xl mx-auto w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                     {/* Left - Contact Info */}
                     <div className="space-y-12">
                        <div>
                           <h2 className="text-4xl font-serif font-bold text-maroon mb-8">Contact Information</h2>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-8">
                           {/* Phone */}
                           <div className="border-l-4 border-maroon pl-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">📞 Call Us</h3>
                              <p className="text-gray-700">+91 (64) 8344-1233</p>
                              <p className="text-sm text-gray-600">Monday to Saturday: 10 AM - 8 PM</p>
                              <p className="text-sm text-gray-600">Sunday: 12 PM - 6 PM</p>
                           </div>

                           {/* Email */}
                           <div className="border-l-4 border-gold pl-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">✉️ Email Us</h3>
                              <p className="text-gray-700">hello@vemus.com</p>
                              <p className="text-sm text-gray-600">We reply within 24 hours</p>
                           </div>

                           {/* Store */}
                           <div className="border-l-4 border-maroon pl-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">📍 Visit Our Store</h3>
                              <p className="text-gray-700">VEMUS Jewelry Flagship Store</p>
                              <p className="text-gray-700">123 Jewelry Lane, Premium Plaza</p>
                              <p className="text-gray-700">New Delhi, India 110001</p>
                           </div>

                           {/* Social */}
                           <div className="border-l-4 border-gold pl-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                              <div className="flex gap-4">
                                 <a href="#" className="text-gray-600 hover:text-maroon text-2xl transition">📘</a>
                                 <a href="#" className="text-gray-600 hover:text-maroon text-2xl transition">📷</a>
                                 <a href="#" className="text-gray-600 hover:text-maroon text-2xl transition">🐦</a>
                                 <a href="#" className="text-gray-600 hover:text-maroon text-2xl transition">🎬</a>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Right - Contact Form */}
                     <div className="bg-light-pink p-12 rounded-sm">
                        <h2 className="text-2xl font-bold text-maroon mb-8">Send Us a Message</h2>
                        <form className="space-y-6">
                           {/* Name */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                              <input
                                 type="text"
                                 placeholder="Your full name"
                                 className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
                                 required
                              />
                           </div>

                           {/* Email */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                              <input
                                 type="email"
                                 placeholder="your@email.com"
                                 className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
                                 required
                              />
                           </div>

                           {/* Phone */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
                              <input
                                 type="tel"
                                 placeholder="+91 XXXXX XXXXX"
                                 className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
                                 required
                              />
                           </div>

                           {/* Subject */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-800 mb-2">Subject</label>
                              <select className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon">
                                 <option>Select a subject</option>
                                 <option>Custom Design</option>
                                 <option>Product Inquiry</option>
                                 <option>Warranty Service</option>
                                 <option>Return/Exchange</option>
                                 <option>General Inquiry</option>
                              </select>
                           </div>

                           {/* Message */}
                           <div>
                              <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                              <textarea
                                 placeholder="Tell us more about your inquiry..."
                                 rows={5}
                                 className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon resize-none"
                                 required
                              ></textarea>
                           </div>

                           {/* Submit */}
                           <button
                              type="submit"
                              className="w-full bg-maroon text-white py-3 font-bold hover:bg-maroon-light transition rounded-sm"
                           >
                              Send Message
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </section>

            {/* Why Choose Us */}
            <section className="min-h-screen py-16 px-6 bg-light-pink flex items-center">
               <div className="max-w-7xl mx-auto w-full">
                  <h2 className="text-4xl font-serif font-bold text-center text-maroon mb-16">Why Reach Out to Us?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="bg-white p-8 rounded-sm border-t-4 border-maroon">
                        <h3 className="text-2xl font-bold text-maroon mb-4">Expert Consultation</h3>
                        <p className="text-gray-700">Our jewelry specialists can help you find the perfect piece or create a custom design tailored to your vision.</p>
                     </div>
                     <div className="bg-white p-8 rounded-sm border-t-4 border-gold">
                        <h3 className="text-2xl font-bold text-maroon mb-4">Personalized Service</h3>
                        <p className="text-gray-700">We provide personalized shopping experiences and detailed guidance on selecting authentic jewelry.</p>
                     </div>
                     <div className="bg-white p-8 rounded-sm border-t-4 border-maroon">
                        <h3 className="text-2xl font-bold text-maroon mb-4">After-Sales Support</h3>
                        <p className="text-gray-700">From warranty services to maintenance, we're here to support your jewelry throughout its lifetime.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="min-h-screen py-16 px-6 bg-white flex items-center">
               <div className="max-w-4xl mx-auto w-full">
                  <h2 className="text-4xl font-serif font-bold text-center text-maroon mb-16">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                     {[
                        {
                           q: 'How long does it take for custom jewelry?',
                           a: 'Custom jewelry typically takes 4-6 weeks depending on the complexity of the design. We will provide you with a detailed timeline during consultation.',
                        },
                        {
                           q: 'What is your return policy?',
                           a: 'We offer a 30-day return/exchange policy on all purchases. Items must be in original condition with all documentation.',
                        },
                        {
                           q: 'Do you provide international shipping?',
                           a: 'Yes, we ship to selected countries. Contact our support team for details on international shipping and customs.',
                        },
                        {
                           q: 'How can I verify the authenticity of jewelry?',
                           a: 'All our jewelry comes with complete certification and hallmark stamps. We also provide a detailed authenticity report with every purchase.',
                        },
                     ].map((faq, i) => (
                        <details key={i} className="border border-gray-200 p-6 rounded-sm group cursor-pointer">
                           <summary className="flex items-center justify-between font-bold text-gray-800 group-open:text-maroon">
                              <span>{faq.q}</span>
                              <span className="text-2xl group-open:rotate-180 transition">+</span>
                           </summary>
                           <p className="text-gray-700 mt-4">{faq.a}</p>
                        </details>
                     ))}
                  </div>
               </div>
            </section>

            {/* CTA */}
            <section className="min-h-48 py-12 px-6 bg-maroon text-white flex items-center">
               <div className="max-w-4xl mx-auto w-full text-center">
                  <h2 className="text-4xl font-serif font-bold mb-4">Ready to Find Your Perfect Piece?</h2>
                  <p className="text-lg mb-8 opacity-90">Visit our showroom or explore our collection online</p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                     <a href="/shop" className="inline-block bg-gold text-maroon px-8 py-3 font-bold hover:bg-yellow-500 transition rounded-sm">
                        Explore Collection
                     </a>
                     <a href="tel:+91-64-8344-1233" className="inline-block border-2 border-gold text-gold px-8 py-3 font-bold hover:bg-gold/20 transition rounded-sm">
                        Call Us Now
                     </a>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
