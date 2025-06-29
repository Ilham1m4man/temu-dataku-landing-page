'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const aboutLinks = [
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Mentoring Data Science', href: '/mentoring' },
  { label: 'Practice Data Science', href: '/practice' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  { title: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { title: 'LinkedIn',  href: 'https://linkedin.com',  icon: Linkedin  },
];

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1d22] w-full text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-3">
        <div className="space-y-6">
          <Image
            src="/images/logo-white.png"
            alt="TemuDataku"
            width={155}
            height={50}
            priority
          />
          <p className="max-w-xs text-sm leading-relaxed">
            Be sure to take a look at our{' '}
            <Link href="/terms" className="text-emerald-400 hover:underline">
              Terms&nbsp;of&nbsp;Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-emerald-400 hover:underline">
              Privacy&nbsp;Policy
            </Link>
            .
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">About</h3>
          <ul className="space-y-3 text-sm">
            {aboutLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition hover:text-emerald-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Social&nbsp;Media
            </h3>
            <div className="flex items-center gap-4">
              {socials.map(({ title, href, icon: Icon }) => (
                <Link
                  key={title}
                  href={href}
                  target="_blank"
                  aria-label={title}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-slate-300 transition hover:bg-emerald-500/20 hover:text-emerald-400"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <a
                  href="tel:+6281234567890"
                  className="transition hover:text-emerald-400"
                >
                  +62&nbsp;812-3456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <a
                  href="mailto:hello@temudataku.id"
                  className="transition hover:text-emerald-400"
                >
                  hello@temudataku.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>
                  Kelurahan Karangbesuki, <br />
                  Kecamatan&nbsp;Sukun, Kota&nbsp;Malang
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-400">
        © {year} TemuDataku • All rights reserved.
      </div>
    </footer>
  );
}