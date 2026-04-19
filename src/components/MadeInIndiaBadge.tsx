"use client";

export default function MadeInIndiaBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Minimal geometric badge */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-navy-light to-navy">
        {/* Ashoka Chakra-inspired ring */}
        <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full">
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="url(#badge-gradient)"
            strokeWidth="1.5"
            strokeDasharray="3 2"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9933" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#138808" />
            </linearGradient>
          </defs>
        </svg>
        {/* Tricolor vertical bars */}
        <div className="flex gap-[2px]">
          <div className="h-4 w-[3px] rounded-full bg-[#FF9933]" />
          <div className="h-4 w-[3px] rounded-full bg-white" />
          <div className="h-4 w-[3px] rounded-full bg-[#138808]" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
          Proudly
        </span>
        <span className="text-sm font-bold tracking-wide text-white">
          Made in India
        </span>
      </div>
    </div>
  );
}
