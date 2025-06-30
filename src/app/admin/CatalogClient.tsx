'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Filter,
  Heart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react'

type Product = {
  id: string
  name: string
  price: number
  image_url: string
}

const API = process.env.NEXT_PUBLIC_API_URL!

export default function CatalogClient() {
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch(`${API}/products`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : []))
      .then(setProducts)
  }, [])

  async function handleLogout() {
    await fetch(`${API}/logout`, {
      method: 'POST',
      credentials: 'include',
    })
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#21356e] to-[#1f273d] px-4 pb-16 pt-6 text-white">
      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-wide">Product Catalog</h1>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-md bg-[#63b594] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5aad89] active:scale-95"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      <section className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
        {products.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="group relative rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm"
          >
            <button className="absolute right-4 top-4 rounded-full bg-white/10 p-1 text-white opacity-0 transition group-hover:opacity-100">
              <Heart size={16} strokeWidth={1.5} />
            </button>

            <img
              src={p.image_url}
              alt={p.name}
              className="mx-auto h-36 w-auto object-contain"
            />

            <div className="mt-4 flex items-center justify-between rounded-md bg-white/10 px-3 py-2 text-xs">
              <span className="font-medium tracking-wide">{p.name}</span>
              <span className="text-white/70">
                {(p.price / 1000).toLocaleString()}K
              </span>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
