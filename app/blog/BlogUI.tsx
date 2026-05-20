"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

export type Article = {
  id: string | number;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
};

export default function BlogUI({ articles }: { articles: Article[] }) {
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
      
      {/* NAVIGATION - FROSTED GLASS */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 p-4 sm:px-8 sm:py-5 flex justify-between items-center transition-all"
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Startup Sathi Logo" width={40} height={40} className="rounded-xl shadow-sm" />
            <h1 className="text-2xl font-extrabold tracking-tighter text-slate-900">
              Startup<span className="text-red-600">Sathi</span>
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="/#services" className="hover:text-red-600 transition-colors">Services</Link>
            <Link href="/#portfolio" className="hover:text-red-600 transition-colors">Portfolio</Link>
            <Link href="/#pricing" className="hover:text-red-600 transition-colors">Pricing</Link>
            <Link href="/#contact" className="hover:text-red-600 transition-colors">Contact</Link>
          </div>
        </div>

        <Link href="/#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Work With Us
        </Link>
      </motion.nav>

      {/* BLOG HERO SECTION - ARCHITECT'S GRID */}
      <section className="relative pt-48 pb-20 px-6 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
        
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="inline-block border border-red-200 bg-red-50/80 backdrop-blur-sm text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-widest"
          >
            Insights & Strategies
          </motion.div>
          
          <motion.h2 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 bg-white/50 inline-block px-4 rounded-3xl"
          >
            The Startup Sathi <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Blog</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium bg-white/50 px-4 py-2 rounded-2xl"
          >
            Deep dives, marketing trends, and actionable advice to help you architect a dominating digital presence.
          </motion.p>
        </div>
      </section>

      {/* BLOG GRID SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <motion.div variants={fadeInUp} className="group flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                
                {/* Mock Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 z-10" />
                  <span className="text-slate-400 font-medium">Article Image</span>
                  
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-red-600 shadow-sm">
                    {article.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</div>
                    <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> Startup Sathi</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-white">Want to write for us?</h3>
          <p className="text-red-100 mb-10 text-lg">
            We are always looking for fresh perspectives on marketing, branding, and business growth.
          </p>
          <Link href="/#contact" className="inline-block bg-white text-red-600 hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl">
            Submit a Pitch 🚀
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-8 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Startup Sathi Logo" width={36} height={36} className="rounded-xl shadow-sm" />
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                Startup<span className="text-red-500">Sathi</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-md">
              Your all-in-one digital growth partner. We build brands, scale operations, and drive results for ambitious startups and local businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><Link href="/#services" className="hover:text-red-400 transition-colors">Our Services</Link></li>
              <li><Link href="/#pricing" className="hover:text-red-400 transition-colors">Pricing Plans</Link></li>
              <li><Link href="/#contact" className="hover:text-red-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><a href="https://www.instagram.com/startupsathi.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-2">Instagram ↗</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors flex items-center gap-2">LinkedIn ↗</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors flex items-center gap-2">Twitter ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Startup Sathi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}