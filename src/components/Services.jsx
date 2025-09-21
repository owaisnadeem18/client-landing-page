"use client"
import React from "react"
import { motion } from "framer-motion"
import { HeartPulse, Users, Briefcase } from "lucide-react"

const services = [
  {
    icon: <HeartPulse className="w-10 h-10 text-[#B6963B]" />,
    title: "Wellness Programs",
    description:
      "Tailored sessions designed to reduce stress, enhance vitality, and improve focus for busy professionals.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#B6963B]" />,
    title: "Team Engagement",
    description:
      "Strengthen company culture with group wellness activities that promote unity, motivation, and well-being.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-[#B6963B]" />,
    title: "Executive Care",
    description:
      "Premium 1:1 programs curated for leaders who demand excellence in both performance and health.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-black text-white py-20 px-6 lg:px-12"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-[#B6963B] mb-4">
          Our Services
        </h2>
        <p className="text-gray-300">
          Experience a blend of luxury and wellness, crafted to elevate the
          performance and well-being of your executives and teams.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-center hover:shadow-[0_0_25px_rgba(182,150,59,0.4)] transition"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
