'use client'

import { motion, Variants } from 'motion/react';
import Image from 'next/image';

const cards = [
  {
    src: '/images/image.jpg',
    label: '1 on 1 Session dengan mentor',
  },
  {
    src: '/images/image-2.jpg',
    label: 'Akselerasi Impian',
  },
  {
    src: '/images/image-3.jpg',
    label: 'Perdalam latihan dengan ulasan dari mentor',
  },
  {
    src: '/images/image-4.jpg',
    label: 'Harga terjangkau',
  },
];

export default function BenefitSection() {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const textSide: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 lg:mb-0"
      >
        {cards.map((c, i) => (
          <motion.div
            key={i}
            variants={card}
            className={`relative ${i % 2 == 0 ? "translate-0 sm:-translate-y-12" : "translate-0 sm:translate-y-12"} group h-56 overflow-hidden rounded-xl shadow-lg lg:h-64`}
          >
            <Image
              src={c.src}
              alt={c.label}
              fill
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="object-cover"
              quality={75}           
              priority={i === 0}    
            />
            <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-all duration-300" />
            <p className="absolute inset-x-0 bottom-4 mx-auto w-10/12 text-center text-white text-sm md:text-lg font-medium leading-snug group-hover:translate-y-40 transition-all duration-300">
              {c.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={textSide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col"
      >
        <h2 className="text-3xl/tight font-bold text-[#21356e]">
          Belajar lebih efektif &amp; latihan langsung dari ahlinya
        </h2>

        <div className="mt-8 flex items-start gap-4">
          <div className="relative">
          <span className="text-8xl font-extrabold text-[#63b594]/30 leading-none select-none">1</span>
          <span className="text-4xl font-semibold text-[#21356e]/60 leading-none select-none">#</span>
          </div>
          <div>
            <span className="tracking-widest text-sm font-semibold text-slate-600">
              Temu&nbsp;Dataku
            </span>
            <h3 className="text-[#21356e] text-xl lg:text-2xl font-extrabold mt-1">
              Terbaik dalam Mentoring Data Science
            </h3>
          </div>
        </div>

        <p className="mt-6 text-slate-600 max-w-xl">
          Dapatkan bimbingan dari mentor untuk menjawab keraguan mu dalam belajar data science.
          Khusus untuk kamu yang belajar otodidak, kami memberikan akses 1 on 1 maupun kelompok
          untuk mentoring, tentu dengan harga yang lebih terjangkau daripada bootcamp.
        </p>

        <button className="mt-10 w-40 rounded-xl font-semibold border-2 border-[#63b594] py-2 text-[#63b594] transition hover:bg-[#63b594] hover:text-white">
          view more
        </button>
      </motion.div>
    </section>
  );
}