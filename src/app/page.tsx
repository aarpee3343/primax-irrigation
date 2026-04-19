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
                About Primex
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                Engineering a{" "}
                <span className="gradient-text">water-secure</span> future
                for Indian agriculture
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/60">
                Since 2010, Primex Irrigation has been at the forefront of
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
    </>
  );
}
