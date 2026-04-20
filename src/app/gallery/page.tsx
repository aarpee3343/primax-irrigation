"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80", caption: "Drip irrigation on grape vineyard — Nashik, Maharashtra", category: "Drip" },
  { src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80", caption: "Sprinkler system in action — Anantapur, Andhra Pradesh", category: "Sprinkler" },
  { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80", caption: "HDPE mainline installation — Jaipur, Rajasthan", category: "Installation" },
  { src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80", caption: "Lush green fields with micro-irrigation — Coimbatore, Tamil Nadu", category: "Impact" },
  { src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80", caption: "Sugarcane drip irrigation project — Kolhapur, Maharashtra", category: "Drip" },
  { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80", caption: "Large-scale pomegranate farm setup — Solapur, Maharashtra", category: "Impact" },
  { src: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80", caption: "Mini sprinkler installation in coconut orchard", category: "Sprinkler" },
  { src: "https://images.unsplash.com/photo-1595351298020-038700609878?w=800&q=80", caption: "Compression fittings assembly at our facility", category: "Installation" },
  { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80", caption: "Fertigation setup with venturi injector", category: "Installation" },
];

const categories = ["All", "Drip", "Sprinkler", "Installation", "Impact"];

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered =
    activeCat === "All"
      ? galleryImages
      : galleryImages.filter((g) => g.category === activeCat);

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
              Gallery & Projects
            </span>
            <h1 className="text-4xl font-extrabold text-navy sm:text-5xl">
              See Our Work in the <span className="gradient-text">Field</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/60">
              Real installations, real results. Browse our project gallery
              featuring farms across India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCat === cat
                    ? "bg-gradient-to-r from-bright-blue to-fresh-green text-white shadow-md shadow-bright-blue/20"
                    : "bg-sky/50 text-navy/60 hover:bg-sky hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-ish grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => setLightboxIdx(i)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-navy/8 shadow-lg shadow-navy/5 cursor-pointer"
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                      <p className="text-sm font-medium text-white">
                        {img.caption}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {lightboxIdx > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx(lightboxIdx - 1);
                }}
                className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            {lightboxIdx < filtered.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx(lightboxIdx + 1);
                }}
                className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].caption}
                width={1200}
                height={800}
                className="w-full rounded-2xl object-cover max-h-[75vh]"
              />
              <p className="mt-3 text-center text-sm text-white/80">
                {filtered[lightboxIdx].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
