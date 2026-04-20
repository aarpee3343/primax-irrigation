"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Droplets,
  Sprout,
  Sun,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  ChevronRight,
  Star,
  Quote,
  Zap,
  Award,
  Leaf,
  Target,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { company } from "@/lib/company";

const heroStats = [
  { value: 50, suffix: "%", label: "Water Saved" },
  { value: 10000, suffix: "+", label: "Farmers Served" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

const whyChoose = [
  {
    icon: Shield,
    title: "Certified Quality",
    desc: "ISI-marked products tested for Indian conditions. Every component meets rigorous quality standards.",
  },
  {
    icon: Users,
    title: "Expert Support",
    desc: "On-field installation guidance and after-sales support from experienced agri-engineers.",
  },
  {
    icon: TrendingUp,
    title: "Higher Yields",
    desc: "Precision water delivery to root zones increases crop yield by 30-50% across all crop types.",
  },
  {
    icon: Zap,
    title: "Easy Installation",
    desc: "Designed for plug-and-play simplicity. No special tools needed for most assemblies.",
  },
  {
    icon: Award,
    title: "Government Subsidy",
    desc: "Our products qualify for PMKSY and state-level micro-irrigation subsidies up to 55%.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "Reduce water waste, lower carbon footprint, and promote sustainable farming practices.",
  },
];

const impactStats = [
  { value: 50000, suffix: "+", label: "Acres Irrigated", icon: Target },
  { value: 10000, suffix: "+", label: "Happy Farmers", icon: Users },
  { value: 500, suffix: " Cr L", label: "Water Saved", icon: Droplets },
  { value: 12, suffix: "+", label: "States Covered", icon: Sun },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen overflow-hidden hero-pattern">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-fresh-green/10 to-bright-blue/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-bright-blue/8 to-fresh-green/5 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-navy/[0.02] blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-sm font-medium text-fresh-green-dark ring-1 ring-fresh-green/20 mb-6">
              <Sprout className="h-4 w-4 text-fresh-green" />
              India&apos;s Trusted Irrigation Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-6xl lg:text-7xl"
          >
            Save Water.{" "}
            <span className="gradient-text">Grow More.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-navy/60 sm:text-xl"
          >
            Premium micro-irrigation systems engineered for Indian farms.
            Drip, sprinkler, and HDPE piping solutions that cut water usage by
            50% and boost your yields season after season.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bright-blue to-bright-blue-dark px-8 py-4 text-base font-semibold text-white shadow-xl shadow-bright-blue/25 transition-all hover:shadow-2xl hover:shadow-bright-blue/35 hover:scale-105 active:scale-100"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white/80 backdrop-blur px-8 py-4 text-base font-semibold text-navy shadow-lg shadow-navy/5 transition-all hover:border-bright-blue/30 hover:text-bright-blue hover:scale-105 active:scale-100"
            >
              Get Free Quote
            </Link>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 sm:gap-12"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-navy sm:text-4xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm font-medium text-navy/50">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="h-10 w-6 rounded-full border-2 border-navy/20 flex items-start justify-center pt-2">
            <div className="h-2 w-1 rounded-full bg-bright-blue" />
          </div>
        </motion.div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="relative py-24 bg-gradient-to-b from-white to-sky/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/10">
                  <Image
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                    alt="Modern irrigation field"
                    width={800}
                    height={600}
                    className="h-[400px] w-full object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 shadow-xl sm:-right-8">
                  <div className="text-3xl font-extrabold text-bright-blue">
                    50%
                  </div>
                  <div className="text-sm font-semibold text-navy">
                    Water Savings
                  </div>
                  <div className="text-xs text-navy/50 mt-1">
                    vs. flood irrigation
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="inline-block rounded-full bg-fresh-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fresh-green-dark">
                About PRIMEX
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                Engineering a{" "}
                <span className="gradient-text">water-secure</span> future
                for Indian agriculture
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/60">
                Since 2010, PRIMEX Irrigation has been at the forefront of
                India&apos;s micro-irrigation revolution. We design, manufacture,
                and distribute world-class drip and sprinkler systems that
                help farmers grow more with less water.
              </p>
              <p className="mt-4 text-navy/60">
                Our products are engineered specifically for Indian soil and
                climate conditions, ensuring reliability even in the harshest
                environments. From smallholder farms to large commercial
                plantations — we have the right solution for every acre.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-bright-blue transition-colors hover:text-bright-blue-dark group"
              >
                Learn our story{" "}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT HIGHLIGHTS ============ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full bg-sky px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bright-blue-dark">
              Our Products
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Precision irrigation for{" "}
              <span className="gradient-text">every crop</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy/60">
              From HDPE mainlines to micro-sprinkler assemblies, our comprehensive
              product range covers every aspect of modern irrigation.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <AnimatedSection key={product.slug} delay={i * 0.1}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-lg shadow-navy/5 transition-all hover:shadow-xl hover:shadow-bright-blue/10 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden bg-sky/30">
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
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border-2 border-bright-blue px-8 py-3.5 text-base font-semibold text-bright-blue transition-all hover:bg-bright-blue hover:text-white hover:scale-105 active:scale-100"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-24 bg-gradient-to-b from-sky/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full bg-fresh-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fresh-green-dark">
              Why PRIMEX
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              The PRIMEX{" "}
              <span className="gradient-text">advantage</span>
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-navy/8 bg-white p-7 shadow-lg shadow-navy/5 transition-all hover:shadow-xl hover:border-bright-blue/20 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-bright-blue to-fresh-green text-white shadow-lg shadow-bright-blue/25 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IMPACT STATS ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80"
            alt="Green farmland"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/88 to-navy-dark/92" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our impact in numbers
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-bright-blue-light/70">
              Transforming Indian agriculture, one field at a time.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-6 text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-bright-blue mb-3" />
                  <div className="text-3xl font-extrabold text-white sm:text-4xl">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-bright-blue-light/70">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Trusted by <span className="gradient-text">farmers</span> across
              India
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-lg shadow-navy/5 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-bright-blue/20 mb-3" />
                  <p className="flex-1 text-sm leading-relaxed text-navy/60">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-navy/8 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-bright-blue to-fresh-green text-sm font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">
                        {t.name}
                      </div>
                      <div className="text-xs text-navy/50">
                        {t.location} • {t.crop}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 bg-gradient-to-b from-white to-sky/30">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-to-br from-navy via-navy-light to-bright-blue-dark p-10 shadow-2xl shadow-navy/30 sm:p-16 relative overflow-hidden">
              {/* Decorative orbs */}
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-bright-blue/15 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-fresh-green/10 blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to modernize your irrigation?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-bright-blue-light/70">
                  Get a free site survey and customized irrigation plan designed
                  by our agri-engineers. Government subsidy guidance included.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-bright-blue to-fresh-green px-8 py-4 text-base font-bold text-white shadow-xl shadow-bright-blue/30 transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    Get Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-100"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
