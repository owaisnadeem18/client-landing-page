"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Page = () => {
  return (
    <section className="relative py-20 flex items-center justify-center min-h-[calc(100vh-133.5px)] bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B6963B]/10 rounded-full blur-3xl" />

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative  z-10 sm:w-full sm:max-w-md bg-black/60 backdrop-blur-lg border border-[#B6963B]/40 rounded-2xl shadow-lg p-10"
      >
        {/* Co-Branding */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#B6963B]">
            Partner Login
          </h2>
          <p className="mt-2 text-gray-400 text-sm">
            Marriott × Opulent Touch
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl px-4 py-3 bg-black/40 text-gray-200 placeholder-gray-400 border border-[#B6963B]/40 focus:outline-none focus:ring-2 focus:ring-[#B6963B]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl px-4 py-3 bg-black/40 text-gray-200 placeholder-gray-400 border border-[#B6963B]/40 focus:outline-none focus:ring-2 focus:ring-[#B6963B]"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-[#B6963B] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              type="submit"
              size="lg"
              className="w-full relative overflow-hidden rounded-xl px-8 py-3 font-semibold text-black 
                         bg-gradient-to-r from-[#d1b464] via-[#B6963B] to-[#8a6e2f] 
                         shadow-[0_0_25px_rgba(182,150,59,0.6)] 
                         transition-all duration-500 hover:shadow-[0_0_40px_rgba(182,150,59,0.9)]"
            >
              Login
            </Button>
          </motion.div>
        </form>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-gray-400 text-sm">
          Need access?{" "}
          <a href="#contact" className="text-[#B6963B] hover:underline">
            Contact Admin
          </a>
        </p>
      </motion.div>
    </section>
  )
}

export default Page
