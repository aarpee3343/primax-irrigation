"use client";

import { motion } from "framer-motion";

export default function MadeInIndiaBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 rounded-2xl bg-white/5 p-3 pr-5 ring-1 ring-white/10"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
        {/* Tricolor bars */}
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/3 w-full bg-[#FF9933]" />
          <div className="h-1/3 w-full bg-white" />
          <div className="h-1/3 w-full bg-[#138808]" />
        </div>
        {/* Ashoka Chakra inspired center */}
        <div className="relative z-10 h-4 w-4 rounded-full border border-navy/20 flex items-center justify-center">
          <div className="h-1 w-1 rounded-full bg-navy/30" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-[1px] bg-navy/10"
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          Proudly
        </div>
        <div className="text-sm font-black tracking-tight text-white">
          MADE IN INDIA
        </div>
      </div>
    </motion.div>
  );
}
