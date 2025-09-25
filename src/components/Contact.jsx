"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B6963B]/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get in </span>
            <span className="text-[#B6963B]">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions or want to book a session? Fill out the form below,
            and our team will reach out to you shortly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black/60 backdrop-blur-xl 
                     border border-[#B6963B]/40 rounded-2xl p-10 
                     shadow-[0_8px_40px_rgba(0,0,0,0.6)] 
                     hover:shadow-[0_12px_50px_rgba(182,150,59,0.3)] 
                     space-y-6 transition-all duration-300"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Your Name"
              className="rounded-lg bg-black/40 border border-[#B6963B]/30 text-gray-200 
                         placeholder-gray-500 focus-visible:ring-2 focus-visible:ring-[#B6963B]"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="rounded-lg bg-black/40 border border-[#B6963B]/30 text-gray-200 
                         placeholder-gray-500 focus-visible:ring-2 focus-visible:ring-[#B6963B]"
            />
          </div>

          {/* Subject */}
          <Input
            type="text"
            placeholder="Subject"
            className="rounded-lg bg-black/40 border border-[#B6963B]/30 text-gray-200 
                       placeholder-gray-500 focus-visible:ring-2 focus-visible:ring-[#B6963B]"
          />

          {/* Message */}
          <Textarea
            placeholder="Your Message"
            className="min-h-[160px] rounded-lg bg-black/40 border border-[#B6963B]/30 text-gray-200 
                       placeholder-gray-500 focus-visible:ring-2 focus-visible:ring-[#B6963B]"
          />

          {/* Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#d1b464] via-[#B6963B] to-[#8a6e2f] 
                         text-black text-lg font-semibold rounded-full px-10 py-6 
                         shadow-[0_0_25px_rgba(182,150,59,0.4)] 
                         hover:shadow-[0_0_40px_rgba(182,150,59,0.7)] 
                         transition-all"
            >
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
