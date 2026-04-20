"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Droplets,
  Users,
  Award,
  Leaf,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import Link from "next/link";

const values = [
  {
    icon: Droplets,
    title: "Water Stewardship",
    desc: "Every product we build is designed to minimize water waste and maximize irrigation efficiency for a water-secure future.",
  },
  {
    icon: Users,
    title: "Farmer First",
    desc: "We listen to the farmer. Our designs are rooted in real field challenges — not lab theory.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "ISI-certified manufacturing with rigorous quality control at every stage — from raw material to packaged product.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Eco-conscious materials and processes that protect the environment while boosting agricultural productivity.",
  },
];

const milestones = [
  { year: "2010", title: "Founded", desc: "Started operations with a vision to make precision irrigation accessible to every Indian farmer." },
  { year: "2014", title: "ISI Certification", desc: "Achieved ISI certification for our complete HDPE pipe and drip irrigation product range." },
  { year: "2017", title: "10,000 Acres", desc: "Crossed 10,000 acres of irrigated farmland across Maharashtra and Karnataka." },
  { year: "2020", title: "Pan-India Presence", desc: "Expanded dealer network to 12+ states, becoming a trusted name in Indian micro-irrigation." },
  { year: "2023", title: "50,000 Acres", desc: "Reached milestone of 50,000+ acres irrigated, serving over 10,000 farmer families." },
  { year: "2025", title: "Innovation Hub", desc: "Launched R&D center for next-gen smart irrigation technologies and IoT-enabled systems." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden hero-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-bright-blue/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-fresh-green/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-sky px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bright-blue-dark mb-4">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Rooted in Purpose.{" "}
              <span className="gradient-text">Driven by Innovation.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/60">
              For over 15 years, PRIMEX Irrigation has been engineering
              precision water management solutions that help Indian farmers
              thrive — sustainably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/10">
                  <Image
                    src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
                    alt="Irrigation field"
                    width={800}
                    height={600}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-xl">
                  <div className="text-2xl font-extrabold text-bright-blue">15+</div>
                  <div className="text-xs font-semibold text-navy">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <span className="inline-block rounded-full bg-fresh-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fresh-green-dark">
                Our Story
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                From a small workshop to India&apos;s trusted irrigation partner
              </h2>
              <p className="mt-5 text-navy/60 leading-relaxed">
                PRIMEX Irrigation was born from a simple observation: Indian
                farmers were losing up to 60% of their irrigation water to
                inefficient flood methods. Founded in 2010, we set out
                to make world-class micro-irrigation accessible, affordable, and
                reliable for every farm size.
              </p>
              <p className="mt-4 text-navy/60 leading-relaxed">
                Today, with a state-of-the-art manufacturing facility, a network
                spanning 12+ states, and over 10,000 satisfied farmers, we
                continue to push the boundaries of what&apos;s possible in
                precision agriculture.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-sky/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0}>
              <div className="h-full rounded-2xl border border-navy/8 bg-white p-8 shadow-lg shadow-navy/5 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-bright-blue to-bright-blue-dark text-white shadow-lg shadow-bright-blue/25">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-navy">Our Vision</h3>
                <p className="mt-4 text-navy/60 leading-relaxed">
                  To be India&apos;s most trusted and innovative micro-irrigation
                  company — enabling every farmer to achieve maximum yield with
                  minimum water, creating a water-secure and food-secure nation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <div className="h-full rounded-2xl border border-navy/8 bg-white p-8 shadow-lg shadow-navy/5 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-fresh-green to-fresh-green-dark text-white shadow-lg shadow-fresh-green/25">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-navy">Our Mission</h3>
                <p className="mt-4 text-navy/60 leading-relaxed">
                  To design, manufacture, and deliver world-class irrigation
                  products specifically engineered for Indian conditions —
                  backed by expert guidance, government subsidy support, and
                  lifelong after-sales care.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full bg-fresh-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fresh-green-dark">
              Core Values
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
              What we <span className="gradient-text">stand for</span>
            </h2>
          </AnimatedSection>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-navy/8 bg-white p-6 shadow-lg shadow-navy/5 transition-all hover:shadow-xl hover:border-bright-blue/20 hover:-translate-y-1 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-bright-blue to-fresh-green text-white shadow-md shadow-bright-blue/20 group-hover:scale-110 transition-transform">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-sky/20 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block rounded-full bg-sky px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bright-blue-dark">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
              Key <span className="gradient-text">milestones</span>
            </h2>
          </AnimatedSection>
          <div className="relative mt-14">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-bright-blue/40 via-fresh-green/30 to-transparent sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection
                  key={m.year}
                  delay={i * 0.08}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      i % 2 === 0
                        ? "sm:flex-row"
                        : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-bright-blue ring-4 ring-sky sm:left-1/2" />
                    {/* Content */}
                    <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <span className="text-sm font-bold text-bright-blue">{m.year}</span>
                      <h3 className="mt-1 text-lg font-bold text-navy">{m.title}</h3>
                      <p className="mt-1 text-sm text-navy/55">{m.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80"
            alt="Farm background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 to-navy-dark/92" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: 15, suffix: "+", label: "Years" },
              { value: 10000, suffix: "+", label: "Farmers" },
              { value: 50000, suffix: "+", label: "Acres" },
              { value: 12, suffix: "+", label: "States" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-white sm:text-4xl">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-bright-blue-light/70">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Let&apos;s grow together
            </h2>
            <p className="mt-4 text-navy/60">
              Whether you&apos;re a smallholder farmer or a commercial
              agri-business, we have the right irrigation solution for you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bright-blue to-fresh-green px-8 py-4 text-base font-bold text-white shadow-xl shadow-bright-blue/25 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
