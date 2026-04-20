"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import MadeInIndiaBadge from "./MadeInIndiaBadge";
import { company } from "@/lib/company";

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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
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
          <div className="col-span-2">
            <Link
              href="/"
              className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-lg shadow-black/10"
            >
              <Image
                src="/logo.png"
                alt={`${company.brandName} logo`}
                width={280}
                height={113}
                className="h-12 w-auto object-contain sm:h-14"
                sizes="(max-width: 640px) 200px, 240px"
                unoptimized
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              {company.legalName} empowers Indian farmers with precision
              micro-irrigation technology that saves water, boosts yields, and
              supports more sustainable agriculture.
            </p>
            <div className="mt-4 space-y-1 text-xs leading-relaxed text-gray-500">
              <p>{company.legalName}</p>
              <p>CIN: {company.cin}</p>
              <p>{company.registeredAddress}</p>
            </div>

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

            <MadeInIndiaBadge className="mt-6" />
          </div>

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

        <div className="mt-12 grid gap-4 border-t border-navy-light pt-8 text-sm md:grid-cols-3">
          <div className="inline-flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fresh-green" />
            <span>{company.registeredAddress}</span>
          </div>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-bright-blue"
          >
            <Phone className="h-4 w-4 text-bright-blue" />
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-bright-blue"
          >
            <Mail className="h-4 w-4 text-bright-blue" />
            {company.email}
          </a>
        </div>

        <div className="mt-8 border-t border-navy-light pt-8 text-center text-xs text-gray-500">
          <p>
            Copyright {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <a
            href="https://wa.me/919457590000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm font-medium text-bright-blue-light transition-colors hover:text-white"
          >
            Made with love from Rakesh Poonia
          </a>
        </div>
      </div>
    </footer>
  );
}
