"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#262626]"
    >
      {/* Background Glow */}
      {/* <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B6963B]/20 rounded-full blur-3xl"></div> */}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#B6963B]"> Get in Touch</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Have questions or want to book a massage session? Fill out the form below, 
            and our team will reach out to you shortly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="bg-white/95 backdrop-blur-xl 
             border border-[#E6D8A2] shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
             hover:shadow-[0_12px_40px_rgba(182,150,59,0.25)] 
             rounded-3xl p-10 space-y-6 transition-all duration-300"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <Input
      type="text"
      placeholder="Your Name"
      className="rounded-lg border border-gray-300 shadow-inner focus-visible:ring-2 focus-visible:ring-[#B6963B]"
    />
    <Input
      type="email"
      placeholder="Your Email"
      className="rounded-lg border border-gray-300 shadow-inner focus-visible:ring-2 focus-visible:ring-[#B6963B]"
    />
  </div>

  <Input
    type="text"
    placeholder="Subject"
    className="rounded-lg border border-gray-300 shadow-inner focus-visible:ring-2 focus-visible:ring-[#B6963B]"
  />

  <Textarea
    placeholder="Your Message"
    className="min-h-[160px] rounded-lg border border-gray-300 shadow-inner focus-visible:ring-2 focus-visible:ring-[#B6963B]"
  />

  <div className="flex justify-center pt-4">
    <Button
      type="submit"
      className="bg-[#B6963B] hover:bg-[#9D8533] text-white text-lg font-semibold rounded-full px-10 py-6 
                 shadow-lg hover:shadow-[0_10px_25px_rgba(182,150,59,0.35)] transition-all"
    >
      Send Message
    </Button>
  </div>
</motion.form>

      </div>
    </section>
  )
}
