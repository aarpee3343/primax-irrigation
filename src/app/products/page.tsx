"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Filter } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { products, productCategories } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden hero-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-bright-blue/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-sky px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bright-blue-dark mb-4">
              Our Products
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              Complete Irrigation{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/60">
              Browse our full range of micro-irrigation products — engineered for
              Indian farms, built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & Filter bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-navy/10 bg-sky/30 py-3 pl-10 pr-4 text-sm text-navy placeholder:text-navy/35 focus:outline-none focus:ring-2 focus:ring-bright-blue/30 focus:border-bright-blue/40 transition-all"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-bright-blue to-fresh-green text-white shadow-md shadow-bright-blue/20"
                      : "bg-sky/50 text-navy/60 hover:bg-sky hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="mt-6 text-sm text-navy/40">
            Showing {filtered.length} of {products.length} products
          </p>

          {/* Product Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-lg shadow-navy/5 transition-all hover:shadow-xl hover:shadow-bright-blue/10 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden bg-sky/20">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-fresh-green-dark">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-navy group-hover:text-bright-blue transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-navy/50 line-clamp-2">
                        {product.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-bright-blue">
                        View Details{" "}
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center">
              <Filter className="mx-auto h-12 w-12 text-navy/15" />
              <h3 className="mt-4 text-lg font-bold text-navy">No products found</h3>
              <p className="mt-1 text-navy/50">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
