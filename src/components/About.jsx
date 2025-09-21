"use client"

import { motion } from "framer-motion"
import { Shield, Star, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative bg-black text-gray-300 py-20 px-6">
      {/* Glow Overlay */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B6963B]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#B6963B]"
        >
          About Opulent Touch
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-gray-300"
        >
          At Opulent Touch, we redefine corporate wellness by blending luxury,
          precision, and science-backed strategies. Our programs are not just
          sessions—they are curated experiences that transform productivity,
          resilience, and leadership well-being.
        </motion.p>

        {/* Mission / Vision Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all"
          >
            <Shield className="w-12 h-12 text-[#B6963B] mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-[#B6963B]">Our Mission</h3>
            <p className="mt-4 text-sm leading-relaxed">
              To empower organizations with wellness programs that cultivate
              healthier, happier, and more productive leaders and teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all"
          >
            <Star className="w-12 h-12 text-[#B6963B] mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-[#B6963B]">Our Vision</h3>
            <p className="mt-4 text-sm leading-relaxed">
              To set the gold standard in corporate wellness by integrating
              luxury, mindfulness, and high performance into workplace culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-black/60 border border-[#B6963B]/50 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#B6963B] transition-all"
          >
            <Heart className="w-12 h-12 text-[#B6963B] mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-[#B6963B]">
              Why Choose Us
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Because we deliver more than programs—we deliver experiences that
              inspire transformation and long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
