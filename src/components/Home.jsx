"use client"

import React from 'react'
import { Button } from "./ui/button"
import { Briefcase, Users, Crown } from "lucide-react"
import { motion } from "framer-motion"
import Link from 'next/link'

const Home = () => {
  return (
    
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 133.5px)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/85" />

      {/* Glow Overlay */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B6963B]/10 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl px-6 py-20"
      >
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#B6963B] leading-tight tracking-wide">
          Elevate Workplace Wellness. <br /> Empower Productivity.
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Opulent Touch curates bespoke wellness programs designed exclusively
          for executives and organizations. A balance of luxury, focus, and
          elevated performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }}>
  <Button
    size="sm"
    onClick={() => {
      const section = document.getElementById("contact")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        // Agar URL hash bhi dikhana ho toh:
        window.history.pushState(null, "", "#contact")
      }
    }}
    className="ml-2 bg-[#B6963B] text-black hover:bg-[#d1a94e] rounded-xl shadow-md hover:shadow-lg transition"
  >
    Request Private Consultation
  </Button>
</motion.div>
          <Link
            href="#packages"
            className="px-4 py-2 border border-[#B6963B] rounded-2xl text-lg text-[#B6963B] hover:bg-[#B6963B] hover:text-black transition-all shadow-md hover:shadow-xl"
          >
            Explore Packages
          </Link>
        </div>

        {/* Packages Section */}
        <motion.div
          id="packages"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-left"
        >
          {/* Basic */}
          <div className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-10 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all duration-300">
            <Briefcase className="w-12 h-12 text-[#B6963B] mb-6" />
            <h3 className="text-2xl font-semibold text-[#B6963B]">
              Basic Wellness
            </h3>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Stress-relief workshops and monthly wellness sessions for a
              refreshed, motivated team.
            </p>
          </div>

          {/* Hybrid */}
          <div className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-10 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all duration-300">
            <Users className="w-12 h-12 text-[#B6963B] mb-6" />
            <h3 className="text-2xl font-semibold text-[#B6963B]">
              Hybrid Package
            </h3>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              A blend of virtual & on-site programs, fitness plans, and
              nutrition consulting tailored for dynamic teams.
            </p>
          </div>

          {/* Executive */}
          <div className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-10 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all duration-300">
            <Crown className="w-12 h-12 text-[#B6963B] mb-6" />
            <h3 className="text-2xl font-semibold text-[#B6963B]">
              Executive Elite
            </h3>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Exclusive one-on-one care, luxury wellness retreats, and complete
              corporate health strategy integration.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
