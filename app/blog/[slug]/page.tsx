"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug;

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
  };

  // Mock database lookup (We will replace this with the Notion Fetcher later)
  const allArticles = [
    {
      title: "10 Proven Strategies to Skyrocket Your Instagram Growth in 2026",
      slug: "10-proven-strategies-instagram-growth",
      category: "Social Media",
      date: "May 18, 2026",
      content: "Instagram's algorithm has completely shifted. If you are still relying on a basic hashtag strategy and random posting times, your organic reach is likely flatlining. In this deep dive, we outline the exact blueprint our agency uses to hack the algorithm, leveraging saveable carousel content, strategic audio trending, and community management. \n\nFirst, you need to understand that the algorithm prioritizes 'Watch Time' and 'Shares' above all other metrics. A simple like doesn't cut it anymore. Your content must be designed to make the user pause, read, and send it to a colleague..."
    },
    {
      title: "Why Your Business Needs a Custom Website (Not Just an Instagram)",
      slug: "why-your-business-needs-custom-website",
      category: "Web Development",
      date: "May 12, 2026",
      content: "Social media is rented land. A sudden algorithm change or an account shadow-ban can wipe out your primary lead source overnight. Building a dedicated web presence is the ultimate key to owning your audience. \n\nA bespoke website serves as your 24/7 digital storefront. It builds immediate credibility, captures high-intent search traffic through SEO, and most importantly, it gives you complete control over the user journey and conversion funnel..."
    },
    {
      title: "The Anatomy of a High-Converting Brand Identity",
      slug: "anatomy-high-converting-brand-identity",
      category: "Branding",
      date: "May 05, 2026",
      content: "Your logo is not your brand. Your brand is the gut feeling a customer gets when they interact with your business. We break down the psychology of color, typography, and messaging that actually converts viewers into paying customers. \n\nConsistency is the secret weapon of the Fortune 500. When your visual identity is cohesive across your website, social media, and packaging, you eliminate cognitive friction. This subconsciously signals to the consumer that your business is stable, premium, and trustworthy..."
    }
  ];

  // Find the specific article that matches the URL slug
  const article = allArticles.find(a => a.slug === slug);

  // If someone types a random URL that doesn't exist, show this
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <Link href="/blog" className="text-red-600 hover:underline font-bold flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-500 selection:text-white">
      
      {/* NAVIGATION - FROSTED GLASS */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 p-4 sm:px-8 sm:py-5 flex justify-between items-center transition-all">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Startup Sathi Logo" width={40} height={40} className="rounded-xl shadow-sm" />
            <h1 className="text-2xl font-extrabold tracking-tighter text-slate-900">
              Startup<span className="text-red-600">Sathi</span>
            </h1>
          </Link>
        </div>
        <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-red-600 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </nav>

      {/* ARTICLE HEADER */}
      <section className="pt-48 pb-16 px-6 max-w-4xl mx-auto border-b border-slate-100">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Link href="/blog" className="md:hidden inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-widest mb-6">
            <Tag className="w-4 h-4" /> {article.category}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-slate-900 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /> {article.date}</div>
            <div className="flex items-center gap-2"><User className="w-5 h-5" /> Startup Sathi Team</div>
          </div>
        </motion.div>
      </section>

      {/* ARTICLE HERO IMAGE (Placeholder) */}
      <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
        <div className="w-full aspect-[21/9] bg-gradient-to-br from-slate-100 to-slate-200 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden flex items-center justify-center">
           <span className="text-slate-400 font-medium">Cover Image</span>
        </div>
      </motion.section>

      {/* ARTICLE CONTENT */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed space-y-6"
        >
          {/* Since we are using simple text for the mockup, we split by new lines to create paragraphs. 
            When we connect Notion, we will use a Markdown parser here! 
          */}
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg">{paragraph}</p>
          ))}
        </motion.div>
      </section>

      {/* CTA FOOTER ALIGNED WITH BLOG */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Need help implementing this?</h3>
          <p className="text-slate-600 mb-8 text-lg">
            Let our expert team handle your digital growth so you can focus on running your business.
          </p>
          <Link href="/#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-red-600/20">
            Book a Strategy Call 🚀
          </Link>
        </div>
      </section>

    </main>
  );
}