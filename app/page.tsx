"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { PenTool, Share2, Video, TrendingUp, Users, FileText, ShieldCheck, Image as ImageIcon, Target, Code, CreditCard, BookOpen } from 'lucide-react';

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

  const services = [
    { title: "Logo & Brand Identity", icon: <PenTool className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Social Media Management", icon: <Share2 className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Reels & Video Editing", icon: <Video className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Digital Marketing", icon: <TrendingUp className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Instagram Growth", icon: <Users className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Business Registration", icon: <FileText className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Account Management", icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Creative Post Designing", icon: <ImageIcon className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Paid Ads & Campaigns", icon: <Target className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Website Development", icon: <Code className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Visiting Card Design", icon: <CreditCard className="w-6 h-6 stroke-[1.5]" /> },
    { title: "Menu & Brochure Design", icon: <BookOpen className="w-6 h-6 stroke-[1.5]" /> }
  ];

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
            <a href="#portfolio" className="hover:text-red-600 transition-colors">Portfolio</a>
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
          className="relative z-10 bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl shadow-red-600/20 flex items-center gap-2"
        >
          Let's Talk 🚀
        </motion.a>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="services" className="py-32 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="max-w-3xl mb-20"
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-red-600 mb-3">Capabilities</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Everything you need to scale.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              From foundational branding to high-converting performance marketing, we architect digital experiences that drive measurable growth.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className="h-full">
                <div className="group h-full p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-red-200 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.1)] transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 flex flex-col items-start text-left">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-[1.1rem] font-bold text-slate-900 leading-tight">{service.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section id="portfolio" className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h3 className="text-sm font-bold tracking-widest uppercase text-red-500 mb-3">Our Portfolio</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Proof of Performance.</h2>
            </div>
            <a href="https://instagram.com/startupsaathi" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-bold flex items-center gap-2 transition-colors">
              View all on Instagram <span>→</span>
            </a>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Item 1: Auto-playing Video */}
            <motion.div variants={fadeInUp} className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/video1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  Social Growth Visualization ✨
                </span>
              </div>
            </motion.div>

            {/* Item 2: Static Post */}
            <motion.div variants={fadeInUp} className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer">
              <Image src="/post1.png" alt="Digital Presence Strategy" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  Digital Authority Audit 🔍
                </span>
              </div>
            </motion.div>

            {/* Item 3: Static Post */}
            <motion.div variants={fadeInUp} className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer">
              <Image src="/post3.png" alt="Creative Design Concept" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  Creative Branding Concepts 🎨
                </span>
              </div>
            </motion.div>

            {/* Item 4: Static Post */}
            <motion.div variants={fadeInUp} className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer">
              <Image src="/post4.png" alt="Viral Marketing Content" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  Viral Content Creation 🦖
                </span>
              </div>
            </motion.div>

            {/* Item 5: Static Post */}
            <motion.div variants={fadeInUp} className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer">
              <Image src="/post2.png" alt="Integrated Strategy" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  Integrated Brand Strategy 🚀
                </span>
              </div>
            </motion.div>

            {/* Item 6: Auto-playing Video */}
            <motion.div variants={fadeInUp} className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/video2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                  SEO & Dashboard Analytics 📈
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="w-full">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-20"
          >
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Services & Pricing</h3>
            <p className="text-slate-600">Transparent packages tailored for your growth.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
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

          {/* CUSTOM PACKAGES CALLOUT BANNER */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="p-8 bg-white border border-slate-200 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-left max-w-2xl">
              <h4 className="text-xl font-bold text-slate-900 mb-2">📩 Need a Custom Package?</h4>
              <p className="text-slate-600 leading-relaxed">
                Custom plans are entirely available according to your business requirements. Mix and match any capabilities to build your blueprint—final package pricing depends directly on the specific services chosen.
              </p>
            </div>
            <a href="#contact" className="w-full md:w-auto text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md whitespace-nowrap">
              Customize Your Plan
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-4xl font-bold mb-6 text-slate-900">Ready to Scale?</h3>
          <p className="text-slate-600 mb-10 text-lg">
            Let's discuss your business goals and explore how we can help your brand grow digitally.
          </p>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="bg-white p-8 rounded-3xl border border-slate-200 text-left flex flex-col gap-5 shadow-xl shadow-slate-200/50">
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