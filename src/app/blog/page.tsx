"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const blogPosts = [
  {
    slug: "drip-vs-sprinkler",
    title: "Drip vs. Sprinkler: Which Irrigation System Is Right for Your Crop?",
    excerpt: "A comprehensive comparison of drip and sprinkler irrigation systems — covering efficiency, cost, suitability, and ROI for different crop types.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    author: "Primax Agri Team",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Guide",
  },
  {
    slug: "government-subsidy-guide",
    title: "Complete Guide to Micro-Irrigation Subsidies Under PMKSY 2026",
    excerpt: "Everything you need to know about applying for government subsidies on drip and sprinkler systems — eligibility, documents, and step-by-step process.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    author: "Primax Support",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Subsidy",
  },
  {
    slug: "maintenance-tips-drip",
    title: "5 Essential Maintenance Tips to Keep Your Drip System Running Perfectly",
    excerpt: "Regular maintenance can double the life of your drip irrigation system. Here are the 5 things every farmer should do every season.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    author: "Primax Agri Team",
    date: "January 20, 2026",
    readTime: "4 min read",
    category: "Maintenance",
  },
  {
    slug: "water-saving-techniques",
    title: "How Micro-Irrigation Saves 50% Water: The Science Behind It",
    excerpt: "Understanding how drip and sprinkler systems deliver water directly to the root zone — and why this matters for India's water future.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
    author: "Primax R&D",
    date: "December 10, 2025",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    slug: "hdpe-pipe-selection",
    title: "How to Choose the Right HDPE Pipe Size for Your Farm",
    excerpt: "A practical guide to selecting the correct HDPE pipe diameter based on your farm size, water source, and crop layout.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    author: "Primax Agri Team",
    date: "November 5, 2025",
    readTime: "5 min read",
    category: "Guide",
  },
  {
    slug: "fertigation-benefits",
    title: "Fertigation 101: How to Feed Your Crops Through Irrigation",
    excerpt: "Learn how fertigation combines fertilization and irrigation for better nutrient uptake, less waste, and higher yields.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    author: "Primax R&D",
    date: "October 18, 2025",
    readTime: "7 min read",
    category: "Technology",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 hero-pattern">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-sky px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bright-blue-dark mb-4">
              Blog & Resources
            </span>
            <h1 className="text-4xl font-extrabold text-navy sm:text-5xl">
              Knowledge <span className="gradient-text">Hub</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/60">
              Expert guides, maintenance tips, and the latest in irrigation
              technology — all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <AnimatedSection>
            <div className="group overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-xl shadow-navy/5 lg:flex">
              <div className="relative h-64 overflow-hidden lg:h-auto lg:w-1/2">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-bright-blue px-3 py-1 text-xs font-semibold text-white">
                  {blogPosts[0].category}
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                <div className="flex items-center gap-4 text-xs text-navy/40">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {blogPosts[0].date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-extrabold text-navy group-hover:text-bright-blue transition-colors sm:text-3xl">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-3 text-navy/55 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-bright-blue">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Rest of posts grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <div className="group h-full overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-lg shadow-navy/5 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-bright-blue-dark">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-xs text-navy/40">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-2 text-base font-bold text-navy group-hover:text-bright-blue transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-navy/50 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-navy/8 pt-3">
                      <span className="inline-flex items-center gap-1 text-xs text-navy/40">
                        <User className="h-3 w-3" /> {post.author}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-bright-blue">
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
