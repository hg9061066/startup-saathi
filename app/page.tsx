"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  // Reusable animation variants strongly typed for TypeScript
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-500 selection:text-white overflow-hidden">
      
      {/* NAVIGATION */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 sm:px-8 sm:py-5 flex justify-between items-center transition-all"
      >
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Startup Sathi Logo" width={40} height={40} className="rounded-xl shadow-sm" />
            <h1 className="text-2xl font-extrabold tracking-tighter text-slate-900">
              Startup<span className="text-red-600">Sathi</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>

        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Work With Us
        </a>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="inline-block border border-red-200 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          Marketing Agency ✨
        </motion.div>
        
        <motion.h2 
          initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900"
        >
          Your All-in-One <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Business Partner</span>
        </motion.h2>
        
        <motion.p 
          initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We are Startup Sathi — a creative marketing agency focused on helping businesses grow online with professional branding and digital marketing solutions.
        </motion.p>
        
        <motion.a 
          initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl shadow-red-600/20 flex items-center gap-2"
        >
          DM "START" 🚀
        </motion.a>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Services</h3>
            <p className="text-slate-600">Everything you need to create a strong online presence.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              "Logo Design & Brand Identity", "Social Media Management", "Reels & Content Creation", 
              "Digital Marketing", "Instagram Growth", "Business Registration", 
              "Account Management", "Creative Post Designing", "Ad Campaign Management", "Website Setup"
            ].map((service, i) => (
              <motion.div 
                key={i} variants={fadeInUp}
                className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-red-500 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                  <span className="text-xl">✨</span>
                </div>
                <h4 className="font-bold text-lg text-slate-800">{service}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Services & Pricing</h3>
          <p className="text-slate-600">Transparent packages tailored for your growth.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Starter Plan */}
          <motion.div variants={fadeInUp} className="p-8 bg-white border border-slate-200 rounded-3xl flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold mb-2 text-slate-900">1️⃣ Starter Plan</h4>
            <p className="text-sm text-slate-500 mb-6">Perfect for startups & local businesses</p>
            <div className="text-4xl font-extrabold mb-8 text-slate-900">₹999<span className="text-lg text-slate-400 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Logo Design', '4 Social Media Posts', '1 Reel', 'Basic Branding Support', 'Account Setup Assistance'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 mt-0.5">✔</span> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="w-full block text-center bg-slate-100 text-slate-900 hover:bg-slate-200 py-3 rounded-xl font-bold transition-colors">Choose Starter</a>
          </motion.div>

          {/* Growth Plan - Highlighted */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 bg-red-50 border-2 border-red-500 rounded-3xl flex flex-col relative md:-translate-y-4 shadow-xl shadow-red-500/10 hover:shadow-2xl hover:shadow-red-500/20 transition-shadow duration-300"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-md">Recommended</div>
            <h4 className="text-xl font-bold mb-2 text-red-950">2️⃣ Growth Plan</h4>
            <p className="text-sm text-red-700/80 mb-6">For businesses looking to grow online</p>
            <div className="text-4xl font-extrabold mb-8 text-red-950">₹2,499<span className="text-lg text-red-700/60 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Professional Logo', '8 Social Media Posts', '2 Reels', 'Social Media Management', 'Caption & Hashtag Support'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-red-900">
                  <span className="text-red-600 mt-0.5">✔</span> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="w-full block text-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-colors shadow-lg shadow-red-600/30">Choose Growth</a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div variants={fadeInUp} className="p-8 bg-white border border-slate-200 rounded-3xl flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold mb-2 text-slate-900">3️⃣ Premium Plan</h4>
            <p className="text-sm text-slate-500 mb-6">Complete business growth package</p>
            <div className="text-4xl font-extrabold mb-8 text-slate-900">₹4,999<span className="text-lg text-slate-400 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Complete Brand Identity', '15 Creative Posts', '4 Reels', 'Full Account Management', 'Ad Campaign Support', 'Monthly Growth Strategy'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 mt-0.5">✔</span> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="w-full block text-center bg-slate-100 text-slate-900 hover:bg-slate-200 py-3 rounded-xl font-bold transition-colors">Choose Premium</a>
          </motion.div>
        </motion.div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-16 bg-slate-100 border-t border-slate-200 overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-900">🎯 Additional Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Business Registration', 'Website Development', 'Visiting Card Design', 'Menu / Brochure Design', 'Professional Video Editing', 'Paid Ads Setup'].map((item, i) => (
              <motion.span 
                key={i} 
                whileHover={{ scale: 1.05, backgroundColor: "#fee2e2", borderColor: "#fca5a5" }}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 shadow-sm cursor-default transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-4xl font-bold mb-6 text-slate-900">Ready to Scale?</h3>
          <p className="text-slate-600 mb-10 text-lg">
            Let's discuss your business goals and explore how we can help your brand grow digitally.
          </p>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="bg-white p-8 rounded-3xl border border-slate-200 text-left flex flex-col gap-5 shadow-xl shadow-slate-200/50">
            {/* Update with your Web3Forms Key! */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700">Your Name</label>
                <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700">Business Name</label>
                <input type="text" name="business" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all" placeholder="Startup Sathi" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Email Address</label>
              <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all" placeholder="hello@startupsathi.com" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Message / Package Interest</label>
              <textarea name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all resize-none" placeholder="I'm interested in the Growth Plan..."></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="mt-2 w-full bg-red-600 text-white hover:bg-red-700 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-600/20"
            >
              Send Message 🚀
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Startup Sathi Logo" width={36} height={36} className="rounded-xl shadow-sm" />
              <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
                Startup<span className="text-red-600">Sathi</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-md">
              Your all-in-one digital growth partner. We build brands, scale operations, and drive results for ambitious startups and local businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><a href="#services" className="hover:text-red-600 transition-colors">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-red-600 transition-colors">Pricing Plans</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2">Instagram ↗</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2">LinkedIn ↗</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors flex items-center gap-2">Twitter ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Startup Sathi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}