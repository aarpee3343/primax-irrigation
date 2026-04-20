"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@primaxirrigation.com",
    href: "mailto:info@primaxirrigation.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Pune, Maharashtra, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat, 9 AM – 6 PM IST",
    href: "#",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 hero-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-bright-blue/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-sky px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bright-blue-dark mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl font-extrabold text-navy sm:text-5xl">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-navy/60">
              Have a question, need a quote, or want a free site survey?
              We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="rounded-2xl bg-gradient-to-br from-navy via-navy-light to-bright-blue-dark p-8 text-white relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-bright-blue/10 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fresh-green/10 blur-3xl" />

                  <div className="relative">
                    <h3 className="text-xl font-bold">Get in touch</h3>
                    <p className="mt-2 text-sm text-bright-blue-light/60">
                      Reach out via any channel — our team responds within 2 hours on business days.
                    </p>

                    <div className="mt-8 space-y-6">
                      {contactInfo.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="flex items-start gap-4 group"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                            <c.icon className="h-5 w-5 text-bright-blue-light" />
                          </div>
                          <div>
                            <div className="text-xs font-medium uppercase tracking-wider text-white/50">
                              {c.label}
                            </div>
                            <div className="mt-0.5 text-sm font-medium text-white group-hover:text-bright-blue-light transition-colors">
                              {c.value}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105 hover:shadow-xl"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right" delay={0.15}>
                <div className="rounded-2xl border border-navy/8 bg-white p-8 shadow-lg shadow-navy/5">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-fresh-green/10">
                        <CheckCircle2 className="h-8 w-8 text-fresh-green" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-navy">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-navy/55">
                        Thank you for reaching out. Our team will get back to
                        you within 2 business hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm font-semibold text-bright-blue hover:text-bright-blue-dark transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-navy">
                        Send us a message
                      </h3>
                      <p className="mt-1 text-sm text-navy/50">
                        Fill the form below and we&apos;ll get back to you shortly.
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        className="mt-6 space-y-5"
                      >
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium text-navy/70 mb-1.5">
                              Full Name *
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="John Doe"
                              className="w-full rounded-xl border border-navy/10 bg-sky/20 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-navy/70 mb-1.5">
                              Phone Number *
                            </label>
                            <input
                              required
                              type="tel"
                              placeholder="+91 00000 00000"
                              className="w-full rounded-xl border border-navy/10 bg-sky/20 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy/70 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full rounded-xl border border-navy/10 bg-sky/20 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy/70 mb-1.5">
                            Message *
                          </label>
                          <textarea
                            required
                            rows={4}
                            placeholder="How can we help you?"
                            className="w-full rounded-xl border border-navy/10 bg-sky/20 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-bright-blue/30 transition-all resize-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-bright-blue to-fresh-green py-4 text-sm font-bold text-white shadow-lg shadow-bright-blue/25 transition-all hover:scale-[1.02] active:scale-100"
                        >
                          <Send className="h-4 w-4" />
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
