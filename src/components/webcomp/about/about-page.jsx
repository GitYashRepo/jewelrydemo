'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutPage() {
   return (
      <main className="bg-background">
         {/* Hero Section */}
         <section className="bg-gradient-to-b from-[#F5F1E8] to-background py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center space-y-6">
                  <h1 className="text-5xl md:text-6xl font-serif italic text-foreground">
                     Our <span className="text-[#D4AF37]">Story</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Vemus is dedicated to crafting timeless jewelry that celebrates love, elegance, and individuality.
                  </p>
               </div>
            </div>
         </section>

         {/* Mission Section */}
         <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                     <h2 className="text-4xl font-serif italic text-foreground">Our Mission</h2>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        At Vemus, our mission is to provide jewelry shop owners and customers with access to the finest handcrafted pieces. We believe that jewelry is more than just an accessory—it's a symbol of moments, relationships, and personal expression.
                     </p>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        We partner with skilled artisans and designers from around the world to bring you exclusive collections that blend traditional craftsmanship with contemporary design.
                     </p>
                  </div>
                  <div className="h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-3xl flex items-center justify-center">
                     <div className="text-6xl">🎯</div>
                  </div>
               </div>
            </div>
         </section>

         {/* Values Section */}
         <section className="py-16 bg-[#F5F1E8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-serif italic text-center text-foreground mb-12">Our Values</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                     {
                        title: 'Quality',
                        description: 'Every piece meets our rigorous standards for materials and craftsmanship.',
                        icon: '💎',
                     },
                     {
                        title: 'Integrity',
                        description: 'We are transparent about sourcing, pricing, and product information.',
                        icon: '✨',
                     },
                     {
                        title: 'Innovation',
                        description: 'We continuously evolve our collections while respecting tradition.',
                        icon: '🔮',
                     },
                     {
                        title: 'Customer Focus',
                        description: 'Your satisfaction and happiness are at the heart of everything we do.',
                        icon: '❤️',
                     },
                  ].map((value, idx) => (
                     <div key={idx} className="bg-white rounded-lg p-6 border border-border text-center">
                        <div className="text-5xl mb-4">{value.icon}</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* History Section */}
         <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-3xl flex items-center justify-center">
                     <div className="text-6xl">📖</div>
                  </div>
                  <div className="space-y-6">
                     <h2 className="text-4xl font-serif italic text-foreground">A Rich Heritage</h2>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        Founded in 2010, Vemus began as a small jewelry atelier with a passion for creating exceptional pieces. Over the years, we've grown into a trusted source for jewelry shop owners seeking premium collections and unique designs.
                     </p>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        Our journey has been shaped by relationships with our customers, collaborations with master craftspeople, and a commitment to celebrating the art of jewelry making.
                     </p>
                     <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                           <span className="text-[#D4AF37] text-xl">✓</span>
                           <span>Serving 5,000+ jewelry shops globally</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <span className="text-[#D4AF37] text-xl">✓</span>
                           <span>Partnerships with 200+ master artisans</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <span className="text-[#D4AF37] text-xl">✓</span>
                           <span>Award-winning designs and collections</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* Team Section */}
         <section className="py-16 bg-[#F5F1E8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-serif italic text-center text-foreground mb-12">Meet Our Team</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        name: 'Sofia Martinez',
                        title: 'Founder & Creative Director',
                        bio: 'With 25 years of jewelry design experience, Sofia leads our creative vision.',
                     },
                     {
                        name: 'James Chen',
                        title: 'Chief Quality Officer',
                        bio: 'Ensures every piece meets our exacting standards for excellence.',
                     },
                     {
                        name: 'Emma Wilson',
                        title: 'Customer Relations',
                        bio: 'Dedicated to building lasting relationships with our shop partners.',
                     },
                  ].map((member, idx) => (
                     <div key={idx} className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-5xl">
                           👤
                        </div>
                        <div className="p-6 text-center">
                           <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                           <p className="text-[#D4AF37] font-medium text-sm mb-3">{member.title}</p>
                           <p className="text-sm text-muted-foreground">{member.bio}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Why Shop With Us */}
         <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-serif italic text-center text-foreground mb-12">Why Shop With Us</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                     {
                        title: 'Exclusive Collections',
                        description: 'Access limited edition and custom pieces not available through other suppliers.',
                     },
                     {
                        title: 'Competitive Wholesale Pricing',
                        description: 'Our shop owner partnerships offer special pricing and bulk order discounts.',
                     },
                     {
                        title: 'Expert Support',
                        description: 'Our team is available to help with product selection, orders, and custom requests.',
                     },
                     {
                        title: 'Fast Delivery',
                        description: 'Reliable shipping with tracking for peace of mind with every order.',
                     },
                     {
                        title: 'Quality Guarantee',
                        description: 'Every piece includes certification and a satisfaction guarantee.',
                     },
                     {
                        title: 'Marketing Support',
                        description: 'We provide marketing materials and content for our shop partners.',
                     },
                  ].map((item, idx) => (
                     <div key={idx} className="p-8 border border-border rounded-lg hover:border-[#D4AF37] hover:shadow-lg transition-all">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-16 bg-foreground text-background">
            <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
               <h2 className="text-4xl font-serif italic">Join the Vemus Family</h2>
               <p className="text-lg opacity-90">
                  Whether you're a jewelry shop owner looking for wholesale partnerships or a customer seeking exceptional pieces, we'd love to work with you.
               </p>
               <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                     href="/shop"
                     className="px-8 py-3 bg-[#D4AF37] text-foreground font-semibold rounded hover:bg-[#B8860B] transition-colors flex items-center gap-2"
                  >
                     Browse Collection
                     <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                     href="mailto:hello@vemus.com"
                     className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded hover:bg-[#D4AF37] hover:text-foreground transition-colors"
                  >
                     Contact Us
                  </a>
               </div>
            </div>
         </section>
      </main>
   )
}
