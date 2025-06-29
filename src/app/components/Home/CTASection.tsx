'use client';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react'; //  npm i @heroicons/react

export default function CTASection() {
  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  return (
    <section className="relative w-screen isolate overflow-hidden py-20 text-white">
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#1f273d]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease }}
        className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-8 md:px-16 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-emerald-700/40 backdrop-blur-md">
            <CircleCheck className="h-12 w-12 text-emerald-300" />
          </div>

          <div>
            <h2 className="text-xl font-extrabold leading-tight sm:text-3xl">
              Bangun Portofolio dengan Data&nbsp;Science Practice
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              Tersedia berbagai macam studi kasus yang bisa kamu coba &nbsp;dan&nbsp;explore
              untuk&nbsp;membangun&nbsp;portofolio&nbsp;kamu.
            </p>
          </div>
        </div>

        <motion.a
          whileTap={{ scale: 0.95 }}
          href="#"
          className="relative inline-block whitespace-nowrap rounded-lg bg-emerald-500 px-8 py-3 text-center text-base font-semibold text-white shadow-lg transition hover:bg-emerald-600 focus:outline-none"
        >
          Coba Sekarang
          <span
            aria-hidden
            className="absolute inset-0 rounded-lg ring-2 ring-emerald-300/60 transition group-hover:animate-ping"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}