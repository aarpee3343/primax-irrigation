"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight, Globe } from "lucide-react";
import MadeInIndiaBadge from "./MadeInIndiaBadge";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "Drip Irrigation", href: "/products" },
    { label: "Sprinkler Systems", href: "/products" },
    { label: "HDPE Pipes", href: "/products" },
    { label: "Filters & Fittings", href: "/products" },
  ],
  Support: [
    { label: "Installation Guide", href: "/blog" },
    { label: "Maintenance Tips", href: "/blog" },
    { label: "Government Subsidies", href: "/blog" },
    { label: "FAQ", href: "/contact" },
  ],
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
      <polygon fill="white" points="9.75,15.02 15.5,11.75 9.75,8.48" />
    </svg>
  );
}

const socialLinks = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-navy via-bright-blue-dark to-fresh-green-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-12 sm:flex-row lg:px-8">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to transform your farm?
            </h3>
            <p className="mt-1 text-bright-blue-light/80">
              Get a free consultation and customized irrigation plan today.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-navy shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Primax Irrigation Logo"
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Empowering Indian farmers with precision micro-irrigation
              technology since 2010. Saving water, boosting yields, and building
              a sustainable agricultural future.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-light transition-colors hover:bg-bright-blue hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Made in India Badge */}
            <MadeInIndiaBadge className="mt-6" />
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors hover:text-bright-blue"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 flex flex-wrap gap-6 border-t border-navy-light pt-8 text-sm">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-fresh-green" />
            Pune, Maharashtra, India
          </span>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 hover:text-bright-blue transition-colors"
          >
            <Phone className="h-4 w-4 text-bright-blue" />
            +91 98765 43210
          </a>
          <a
            href="mailto:info@primaxirrigation.com"
            className="inline-flex items-center gap-2 hover:text-bright-blue transition-colors"
          >
            <Mail className="h-4 w-4 text-bright-blue" />
            info@primaxirrigation.com
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-navy-light pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Primax Irrigation Pvt. Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
