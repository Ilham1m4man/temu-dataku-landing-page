'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full px-8 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container px-4 py-16 flex flex-col items-center text-center gap-12"
      >
        {/* Text & CTA */}
        <div className="w-full z-10">
          <h3 className="text-xl text-[#1f273d] font-medium mb-4">
            Bosan Belajar Data Science Sendirian?
          </h3>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#21356e] mb-6 leading-tight">
            Dapatkan Bimbingan <br />
            <span className="text-[#63b594]">Mentor Ahli</span> di TemuDataku
          </h1>
          <p className="text-gray-600 mb-8">
            Bergabung dengan komunitas pembelajar Data Science, dapatkan sesi live mentoring,
            dan akses resource eksklusif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-[#63b594] text-white font-semibold rounded-full shadow-lg cursor-pointer hover:bg-[#5aad89] transition">
              Mulai Sekarang
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-[#21356e] text-[#21356e] font-semibold cursor-pointer rounded-full shadow-lg hover:bg-[#21356e] hover:text-white transition">
              Kontak Kami
            </button>
          </div>
        </div>

        {/* Illustration */}
      </motion.div>
    </section>
  )
}
