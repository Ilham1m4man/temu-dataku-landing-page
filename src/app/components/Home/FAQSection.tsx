'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apa yang saya dapatkan setelah mentoring?',
    a: 'Tentu kamu akan mendapatkan penjelasan materi yang belum kamu pahami dari mentor yang ahli dibidangnya.',
  },
  {
    q: 'Apakah saya bisa mentoring secara berkelompok?',
    a: 'Kamu bisa melakukan mentoring berkelompok 3-5 orang ya.',
  },
  {
    q: 'Layanan apa saja yang ada di TemuDataku?',
    a: 'Selain layanan mentoring, terdapat latihan dibidang data science dimana kamu akan diberikan dataset lalu studi kasus untuk pemecahan masalahnya. Dan nantinya ada paket khusus untuk hasil latihan kamu direview oleh mentor.',
  },
  {
    q: 'Data seperti apa yang disediakan oleh TemuDataku?',
    a: 'Dari tim TemuDataku akan menyediakan data yang sesuai dengan latihan dan studi kasus yang diberikan. Contoh ketika nanti diberikan studi kasus yang penyelesaiannya dengan model time series maka akan diberikan juga data yang sesuai dengan time series, begitupun jika studi kasusnya adalah klasifikasi.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (idx: number) =>
    setOpen((prev) => (prev === idx ? null : idx));

  return (
    <section className="bg-transparent w-screen py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-slate-800">
          FAQ
        </h2>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 shadow-md backdrop-blur">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            const answerId = `faq-${idx}-answer`;

            return (
              <div key={idx}>
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left
                             hover:bg-emerald-50/40 focus:outline-none focus-visible:ring
                             sm:px-8"
                >
                  <span
                    className={`text-base font-semibold ${
                      isOpen
                        ? 'text-emerald-600'
                        : 'text-slate-700 hover:text-emerald-600'
                    }`}
                  >
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 flex-none transition-transform ${
                      isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-500'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden bg-white/60"
                    >
                      <div className="px-6 pb-6 pt-1 sm:px-8">
                        <p className="text-slate-600">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}