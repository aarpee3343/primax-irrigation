"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  CheckCircle2,
  Sprout,
  Droplets,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { label: "States Present", value: "12+", icon: Target },
  { label: "Farmers Empowered", value: "10k+", icon: Users },
  { label: "Water Saved (L)", value: "500Cr", icon: Droplets },
  { label: "ISI Certified Products", value: "100%", icon: Award },
];

const timeline = [
  { year: "2010", title: "Foundation", desc: "Primex was founded with a vision to revolutionize micro-irrigation in Pune." },
  { year: "2014", title: "ISI Certification", desc: "Received national quality certifications for our HDPE and drip products." },
  { year: "2018", title: "National Expansion", desc: "Expanded operations to 5 major agricultural states in India." },
  { year: "2023", title: "Innovation Hub", desc: "Launched our smart-irrigation division focusing on IoT and sensor-based systems." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 hero-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-fresh-green/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-mint px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fresh-green-dark mb-4">
              Our Journey
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Rooted in <span className="gradient-text">Innovation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/60">
              Primex Irrigation is dedicated to empowering Indian farmers through
              sustainable, high-efficiency water management solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left" className="rounded-3xl bg-sky/30 p-10 flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-bright-blue/10 mb-6">
                <Target className="h-8 w-8 text-bright-blue" />
              </div>
              <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
              <p className="mt-4 text-navy/60 leading-relaxed">
                To provide every Indian farmer with affordable, durable, and
                highly efficient irrigation systems that maximize crop yield
                while minimizing environmental impact.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" className="rounded-3xl bg-mint/40 p-10 flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-fresh-green/10 mb-6">
                <Eye className="h-8 w-8 text-fresh-green" />
              </div>
              <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
              <p className="mt-4 text-navy/60 leading-relaxed">
                To be the global leader in agri-tech innovation, creating a
                future where water scarcity is no longer a barrier to
                agricultural prosperity and food security.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-sky/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1595351298020-038700609878?w=800&q=80"
                  alt="Manufacturing facility"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl object-cover h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-navy">15+</div>
                  <div className="text-sm text-navy/50 uppercase tracking-wider font-semibold">Years of Trust</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                Why we do what we do
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fresh-green/10 text-fresh-green">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Farmer-Centric Design</h4>
                    <p className="text-sm text-navy/50 mt-1">Every product we make is tested in real Indian field conditions before it reaches you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bright-blue/10 text-bright-blue">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Uncompromising Quality</h4>
                    <p className="text-sm text-navy/50 mt-1">We use premium UV-stabilized polymers to ensure your systems last for decades, not just seasons.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Water Sustainability</h4>
                    <p className="text-sm text-navy/50 mt-1">Our precision systems reduce water wastage by up to 50%, preserving our most precious resource.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Our Growth Story</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-navy/5 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection 
                  key={item.year} 
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 md:text-right">
                    <div className={`md:flex items-center gap-4 ${i % 2 === 0 ? "flex-row-reverse" : ""}`}>
                      <span className="text-4xl font-black text-bright-blue/20">{item.year}</span>
                      <h4 className="text-xl font-bold text-navy">{item.title}</h4>
                    </div>
                    <p className="mt-2 text-navy/50 max-w-md mx-auto md:mx-0">{item.desc}</p>
                  </div>
                  <div className="h-4 w-4 rounded-full bg-bright-blue ring-4 ring-sky z-10" />
                  <div className="flex-1" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
