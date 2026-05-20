"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { PenTool, Share2, Video, TrendingUp, Users, FileText, ShieldCheck, Image as ImageIcon, Target, Code, CreditCard, BookOpen, X, Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';

type PortfolioItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  label: string;
};

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<PortfolioItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const portfolioItems: PortfolioItem[] = [
    { id: 1, type: 'video', src: '/video1.mp4', alt: 'Social Growth', label: 'Social Growth Visualization ✨' },
    { id: 2, type: 'image', src: '/post1.png', alt: 'Digital Audit', label: 'Digital Authority Audit 🔍' },
    { id: 3, type: 'image', src: '/post3.png', alt: 'Branding Concepts', label: 'Creative Branding Concepts 🎨' },
    { id: 4, type: 'image', src: '/post4.png', alt: 'Viral Content', label: 'Viral Content Creation 🦖' },
    { id: 5, type: 'image', src: '/post2.png', alt: 'Integrated Strategy', label: 'Integrated Brand Strategy 🚀' },
    { id: 6, type: 'video', src: '/video2.mp4', alt: 'SEO Dashboard', label: 'SEO & Dashboard Analytics 📈' },
  ];

  const testimonials = [
    { name: "Rahul S.", role: "E-commerce Founder", text: "Startup Sathi entirely transformed our digital presence. Within two months of their growth plan, our Instagram engagement skyrocketed." },
    { name: "Priya M.", role: "Local Business Owner", text: "The brand identity and logo they designed for us was absolutely premium. They understand modern aesthetics better than anyone." },
    { name: "Amit K.", role: "Tech Startup CEO", text: "Highly professional and data-driven. Their video editing and reel strategies gave us the viral push we desperately needed." }
  ];

  const faqs = [
    { question: "Do I have to sign a long-term contract?", answer: "Not at all. We believe in earning your business every single month. All our standard growth and premium plans operate on a flexible, month-to-month basis." },
    { question: "How long does it take to see results?", answer: "While visual branding (logos, website) provides an immediate facelift, organic social media growth and SEO typically take 3 to 6 weeks to show compounding, measurable data improvements." },
    { question: "Can I customize a package?", answer: "Absolutely! The packages above are our most popular, but we can easily mix and match capabilities (like adding a website to the Growth Plan) to create a bespoke blueprint for your exact needs." },
    { question: "Who will be managing my accounts?", answer: "You will be assigned a dedicated account manager from our core team who will handle your daily strategy, ensuring your brand voice remains consistent across all platforms." }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-500 selection:text-white overflow-hidden">
      
      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-100/80 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl cursor-default flex flex-col group border border-slate-200"
            >
              <button 
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-red-50 text-slate-600 hover:text-red-600 p-2.5 rounded-full backdrop-blur-sm shadow-sm transition-colors border border-slate-100"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full flex-grow flex items-center justify-center bg-slate-50 min-h-[50vh] md:min-h-[70vh]">
                {selectedWork.type === 'video' ? (
                  <video autoPlay loop controls className="w-full h-full object-contain max-h-[85vh]">
                    <source src={selectedWork.src} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative w-full h-full min-h-[50vh] md:min-h-[85vh]">
                    <Image src={selectedWork.src} alt={selectedWork.alt} fill className="object-contain" />
                  </div>
                )}
              </div>
              
              <div className="bg-white p-5 border-t border-slate-100 text-center">
                <h4 className="text-slate-900 font-extrabold text-lg">{selectedWork.label}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVIGATION - FROSTED GLASS */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 p-4 sm:px-8 sm:py-5 flex justify-between items-center transition-all"
      >
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Startup Sathi Logo" width={40} height={40} className="rounded-xl shadow-sm" />
            <h1 className="text-2xl font-extrabold tracking-tighter text-slate-900">
              Startup<span className="text-red-600">Sathi</span>
            </h1>
          </div>
          
          {/* UPDATED: Blog link added to desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-red-600 transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a>
            <a href="/blog" className="hover:text-red-600 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>

        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Work With Us
        </a>
      </motion.nav>

      {/* HERO SECTION - ARCHITECT'S GRID */}
      <section className="relative pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
        
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="inline-block border border-red-200 bg-red-50/80 backdrop-blur-sm text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            Marketing Agency ✨
          </motion.div>
          
          <motion.h2 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 bg-white/50 inline-block px-4 rounded-3xl"
          >
            Your All-in-One <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Business Partner</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium bg-white/50 px-4 py-2 rounded-2xl"
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
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="services" className="py-32 bg-white border-y border-slate-200 relative z-10">
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
                <div className="group h-full p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-red-200 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.1)] transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 flex flex-col items-start text-left">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-rose-100 text-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:from-red-600 group-hover:to-rose-500 group-hover:text-white transition-all duration-500">
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
            <a href="https://www.instagram.com/startupsathi.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 font-bold flex items-center gap-2 transition-colors">
              View all on Instagram <span>→</span>
            </a>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id} 
                variants={fadeInUp} 
                onClick={() => setSelectedWork(item)} 
                className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-zoom-in"
              >
                {item.type === 'video' ? (
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                )}
                
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Client Success</h3>
            <p className="text-slate-600">Don't just take our word for it.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((test, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative group hover:shadow-xl transition-shadow duration-300">
                <Quote className="w-10 h-10 text-red-100 absolute top-6 right-6 group-hover:text-red-200 transition-colors duration-300" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />)}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 italic">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{test.name}</h4>
                  <p className="text-sm text-slate-500">{test.role}</p>
                </div>
              </motion.div>
            ))}
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
            <motion.div variants={fadeInUp} className="h-full">
              <motion.div 
                animate={{ x: [0, 8, 0, -8, 0], y: [0, -8, 0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.03, x: 0, y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="p-8 bg-white border border-slate-200 rounded-3xl flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer"
              >
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
            </motion.div>

            {/* Growth Plan */}
            <motion.div variants={fadeInUp} className="h-full md:-translate-y-4">
              <motion.div 
                animate={{ x: [0, -8, 0, 8, 0], y: [0, 8, 0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.03, x: 0, y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="p-8 bg-red-50 border-2 border-red-500 rounded-3xl flex flex-col relative shadow-xl shadow-red-500/10 hover:shadow-2xl hover:shadow-red-500/20 transition-shadow duration-300 h-full cursor-pointer"
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
            </motion.div>

            {/* Premium Plan */}
            <motion.div variants={fadeInUp} className="h-full">
              <motion.div 
                animate={{ x: [0, 8, 0, -8, 0], y: [0, 8, 0, -8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.03, x: 0, y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="p-8 bg-white border border-slate-200 rounded-3xl flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer"
              >
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

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h3>
            <p className="text-slate-600">Everything you need to know before we begin.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-red-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="py-24 px-6 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-white">Ready to Scale?</h3>
            <p className="text-red-100 mb-10 text-lg">
              Let's discuss your business goals and explore how we can help your brand grow digitally.
            </p>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-red-900/50 w-full h-[700px] md:h-[800px] flex justify-center">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScn4Yc_CteEYr-96u5V9JPrG-xrzCfKMWa-ZVECa_Hhl6qAiw/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Startup Sathi Contact Form"
                className="bg-transparent"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-8 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Startup Sathi Logo" width={36} height={36} className="rounded-xl shadow-sm" />
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                Startup<span className="text-red-600">Sathi</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-md">
              Your all-in-one digital growth partner. We build brands, scale operations, and drive results for ambitious startups and local businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-red-400 transition-colors">Pricing Plans</a></li>
              <li><a href="/blog" className="hover:text-red-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact Us</a></li>
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