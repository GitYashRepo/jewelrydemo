'use client';

import React from "react"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactPage() {
   const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

   useEffect(() => {
      // Header animation
      gsap.from('.contact-header h1', {
         opacity: 0,
         y: 30,
         duration: 0.8,
         ease: 'power2.out',
      });

      // Contact info cards animation
      gsap.to('.contact-info-card', {
         scrollTrigger: {
            trigger: '.contact-info-section',
            start: 'top 70%',
            end: 'top 20%',
            scrub: 0.5,
         },
         opacity: 1,
         y: 0,
         stagger: 0.15,
         duration: 1,
      });

      // Form animation
      gsap.to('.contact-form', {
         scrollTrigger: {
            trigger: '.contact-form-section',
            start: 'top 70%',
            end: 'top 20%',
            scrub: 0.5,
         },
         opacity: 1,
         scale: 1,
         duration: 1,
      });

      // Form fields animation
      gsap.to('.form-field', {
         scrollTrigger: {
            trigger: '.contact-form-section',
            start: 'top 70%',
            end: 'top 20%',
            scrub: 0.5,
         },
         opacity: 1,
         x: 0,
         stagger: 0.08,
         duration: 1,
      });
   }, []);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
   };

   return (
      <main className="pt-24 pb-20 bg-background">
         {/* Header Section */}
         <section className="contact-header px-6 py-20 border-b border-border/50">
            <div className="max-w-4xl mx-auto text-center">
               <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
                  Let's Create <span className="text-gradient-gold">Something Beautiful</span>
               </h1>
               <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Whether you have questions about our collections, need custom design services, or want to schedule a private consultation with our jewelry experts, we're here to help.
               </p>
            </div>
         </section>

         {/* Contact Info Cards */}
         <section className="contact-info-section px-6 py-20">
            <div className="max-w-7xl mx-auto">
               <div className="grid md:grid-cols-3 gap-8">
                  {[
                     {
                        icon: '🏪',
                        title: 'Visit Our Showroom',
                        details: ['Vemus Flagship Store', '123 Luxury Avenue', 'Mumbai, India'],
                     },
                     {
                        icon: '☎️',
                        title: 'Call Us',
                        details: ['+91 (22) 1234-5678', '+91 (22) 1234-5679', 'Mon - Sat: 10am - 8pm'],
                     },
                     {
                        icon: '✉️',
                        title: 'Email Us',
                        details: ['hello@vemus.com', 'support@vemus.com', 'Response within 24 hours'],
                     },
                  ].map((item, index) => (
                     <div
                        key={index}
                        className="contact-info-card opacity-0 translate-y-10 p-10 rounded-lg border border-border hover:border-gold hover:shadow-lg transition-all duration-300 bg-secondary/20"
                     >
                        <div className="text-5xl mb-6">{item.icon}</div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">{item.title}</h3>
                        <div className="space-y-2">
                           {item.details.map((detail, i) => (
                              <p key={i} className="text-foreground/70">
                                 {detail}
                              </p>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Contact Form Section */}
         <section className="contact-form-section px-6 py-20 bg-secondary/10">
            <div className="max-w-3xl mx-auto">
               <div className="contact-form opacity-0 scale-95 bg-background rounded-lg p-12 border border-border">
                  <h2 className="text-4xl font-bold text-foreground mb-2 text-center">Send us a Message</h2>
                  <p className="text-foreground/60 text-center mb-10">We'll get back to you within 24 hours</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     {/* Name and Email Row */}
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-field opacity-0 translate-x-4">
                           <label className="block text-xs uppercase tracking-widest text-foreground/70 font-bold mb-3">
                              Full Name
                           </label>
                           <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className="w-full px-6 py-3 bg-secondary/30 border border-border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                              required
                           />
                        </div>
                        <div className="form-field opacity-0 translate-x-4">
                           <label className="block text-xs uppercase tracking-widest text-foreground/70 font-bold mb-3">
                              Email Address
                           </label>
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className="w-full px-6 py-3 bg-secondary/30 border border-border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                              required
                           />
                        </div>
                     </div>

                     {/* Phone and Subject Row */}
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-field opacity-0 translate-x-4">
                           <label className="block text-xs uppercase tracking-widest text-foreground/70 font-bold mb-3">
                              Phone Number
                           </label>
                           <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 (22) 1234-5678"
                              className="w-full px-6 py-3 bg-secondary/30 border border-border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                           />
                        </div>
                        <div className="form-field opacity-0 translate-x-4">
                           <label className="block text-xs uppercase tracking-widest text-foreground/70 font-bold mb-3">
                              Subject
                           </label>
                           <select
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-6 py-3 bg-secondary/30 border border-border rounded-sm text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                              required
                           >
                              <option value="">Select a subject</option>
                              <option>Custom Design Inquiry</option>
                              <option>Product Question</option>
                              <option>Schedule Store Visit</option>
                              <option>Repair & Maintenance</option>
                              <option>Other</option>
                           </select>
                        </div>
                     </div>

                     {/* Message */}
                     <div className="form-field opacity-0 translate-x-4">
                        <label className="block text-xs uppercase tracking-widest text-foreground/70 font-bold mb-3">
                           Message
                        </label>
                        <textarea
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           placeholder="Tell us about your inquiry..."
                           rows={6}
                           className="w-full px-6 py-3 bg-secondary/30 border border-border rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none"
                           required
                        ></textarea>
                     </div>

                     {/* Submit Button */}
                     <div className="form-field opacity-0 translate-x-4 pt-4">
                        <button
                           type="submit"
                           className="w-full shiny-button px-8 py-4 text-foreground font-bold uppercase tracking-widest rounded-sm text-lg transition-all duration-300"
                        >
                           Send Message
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </section>

         {/* Visit Showroom CTA */}
         <section className="px-6 py-20 bg-secondary/30">
            <div className="max-w-4xl mx-auto rounded-lg p-12 text-center">
               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience Vemus in Person</h2>
               <p className="text-lg text-foreground/70 mb-10">
                  Visit our flagship showroom to explore our collections and receive personalized styling advice from our jewelry experts.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                     href="#contact"
                     className="shiny-button px-12 py-4 text-foreground font-bold uppercase tracking-widest rounded-sm"
                  >
                     Schedule Appointment
                  </Link>
                  <button className="px-12 py-4 border-2 border-gold text-gold font-bold uppercase tracking-widest rounded-sm hover:bg-gold/10 transition-colors duration-300">
                     Get Directions
                  </button>
               </div>
            </div>
         </section>

         {/* Store Hours & Info */}
         <section className="px-6 py-20 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto">
               <div className="grid md:grid-cols-3 gap-12">
                  <div>
                     <h3 className="text-xl font-bold text-foreground mb-4">Store Hours</h3>
                     <div className="space-y-2 text-foreground/70">
                        <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: 11:00 AM - 7:00 PM</p>
                     </div>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-foreground mb-4">Location</h3>
                     <p className="text-foreground/70">Vemus Flagship Store</p>
                     <p className="text-foreground/70">123 Luxury Avenue</p>
                     <p className="text-foreground/70">Mumbai, India</p>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
                     <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                           <Link key={social} href="#" className="text-gold hover:text-gold-light transition-colors">
                              {social}
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
