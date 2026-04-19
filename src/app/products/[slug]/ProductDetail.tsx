"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Product, products } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-sky/30 pt-24 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy/50">
            <Link href="/" className="hover:text-bright-blue transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-bright-blue transition-colors">
              Products
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy font-medium">{product.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-gradient-to-b from-sky/30 to-white pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start pt-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-xl shadow-navy/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="h-[350px] w-full object-cover sm:h-[450px]"
                />
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-fresh-green/10 px-4 py-1.5 text-xs font-semibold text-fresh-green-dark">
                <Check className="h-3 w-3" /> In Stock • Ready to Ship
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-block rounded-full bg-sky px-3 py-1 text-xs font-semibold text-bright-blue-dark">
                {product.category}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-navy/60">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy/40">
                  Key Features
                </h3>
                <ul className="mt-4 space-y-3">
                  {product.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fresh-green/15">
                        <Check className="h-3 w-3 text-fresh-green-dark" />
                      </div>
                      <span className="text-sm text-navy/70">{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bright-blue to-fresh-green px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-bright-blue/25 transition-all hover:scale-105 hover:shadow-xl"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire Now
                </Link>
                <a
                  href="https://wa.me/919050093007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-fresh-green/30 px-8 py-3.5 text-sm font-semibold text-fresh-green-dark transition-all hover:bg-fresh-green/5 hover:border-fresh-green/50 hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-navy">
              Technical Specifications
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-navy/8">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specs).map(([key, val], i) => (
                    <tr
                      key={key}
                      className={`${i % 2 === 0 ? "bg-sky/20" : "bg-white"}`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-navy/70 w-1/3">
                        {key}
                      </td>
                      <td className="px-6 py-4 text-sm text-navy/60">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-sky/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl font-extrabold text-navy">
                Related Products
              </h2>
            </AnimatedSection>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp, i) => (
                <AnimatedSection key={rp.slug} delay={i * 0.1}>
                  <Link
                    href={`/products/${rp.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-lg shadow-navy/5 transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-44 overflow-hidden bg-sky/20">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-navy group-hover:text-bright-blue transition-colors">
                        {rp.name}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-bright-blue">
                        View Details <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-bright-blue hover:text-bright-blue-dark transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to All Products
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
