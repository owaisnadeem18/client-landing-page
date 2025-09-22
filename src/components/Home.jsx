"use client"

import React from "react"
import { Button } from "./ui/button"
import { Briefcase, Users, Crown, Handshake } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

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
          {/* Primary Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              size="lg"
              onClick={() => {
                const section = document.getElementById("contact")
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" })
                  window.history.pushState(null, "", "#contact")
                }
              }}
              className="relative flex items-center gap-2 overflow-hidden rounded-2xl px-8 py-3 font-semibold text-black 
                         bg-gradient-to-r from-[#d1b464] via-[#B6963B] to-[#8a6e2f] 
                         shadow-[0_0_25px_rgba(182,150,59,0.6)] 
                         transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(182,150,59,0.9)]"
            >
              <Handshake className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Request Private Consultation</span>
              {/* Shine Animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               translate-x-[-100%] hover:translate-x-[100%] 
                               transition-transform duration-700" />
            </Button>
          </motion.div>

          {/* Secondary Button */}
          <Link
            href="#packages"
            className="relative px-8 py-3 rounded-2xl font-medium text-[#B6963B] border border-[#B6963B] 
                       bg-black/20 backdrop-blur-md shadow-md 
                       hover:bg-[#B6963B] hover:text-black 
                       hover:shadow-[0_0_25px_rgba(182,150,59,0.7)] 
                       transition-all duration-500"
          >
            Explore Packages →
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
            <h3 className="text-2xl font-semibold text-[#B6963B]">Basic Wellness</h3>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Stress-relief workshops and monthly wellness sessions for a
              refreshed, motivated team.
            </p>
          </div>

          {/* Hybrid */}
          <div className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-10 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all duration-300">
            <Users className="w-12 h-12 text-[#B6963B] mb-6" />
            <h3 className="text-2xl font-semibold text-[#B6963B]">Hybrid Package</h3>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              A blend of virtual & on-site programs, fitness plans, and nutrition
              consulting tailored for dynamic teams.
            </p>
          </div>

          {/* Executive */}
          <div className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-10 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all duration-300">
            <Crown className="w-12 h-12 text-[#B6963B] mb-6" />
            <h3 className="text-2xl font-semibold text-[#B6963B]">Executive Elite</h3>
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
