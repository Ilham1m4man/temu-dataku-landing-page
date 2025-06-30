"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [isHidden, setIsHidden] = useState(true);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = {
      email: fd.get("email"),
      password: fd.get("password"),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      const data = await res.json();
      setError(data?.error ?? "Login failed");
    }
  }

  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      className="w-full max-w-sm rounded-xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/90"
    >
      <div className="px-8 py-10">
        <h1 className="mb-1 text-center text-2xl font-semibold text-slate-800 dark:text-white">
          Welcome back
        </h1>
        <p className="mb-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Sign in to continue your data science journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-[#63b594] focus:ring-2 focus:ring-[#63b594] dark:border-slate-600 dark:text-slate-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isHidden ? "password" : "text"}
                required
                placeholder="••••••••"
                className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-[#63b594] focus:ring-2 focus:ring-[#63b594] dark:border-slate-600 dark:text-slate-100"
              />
              <button
                type="button"
                onClick={() => setIsHidden((s) => !s)}
                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {isHidden ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-rose-600">{error}</p>}

          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="h-10 w-full rounded-md bg-[#63b594] text-sm font-medium text-white shadow transition-colors hover:bg-[#5aad89] disabled:pointer-events-none disabled:opacity-60"
          >
            Log In
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Ini adalah demo login, pakai email: <span className="text-[#63b594] font-bold">example@mail.com</span> dan password: <span className="text-[#63b594] font-bold">1234567890</span>
        </p>
      </div>
    </motion.div>
  );
}
