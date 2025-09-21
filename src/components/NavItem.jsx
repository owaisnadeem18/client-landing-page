"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export function NavItems({ links, onClick, variant = "desktop" }) {
  return (
    <div
      className={
        variant === "desktop"
          ? "flex items-center gap-8"
          : "flex flex-col space-y-2"
      }
    >
      {links.map((link, i) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
        >
          <Link
            href={link.href}
            onClick={onClick}
            className={`relative text-sm font-medium transition-colors
              ${
                variant === "desktop"
                  ? "text-gray-200 hover:text-[#B6963B] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#B6963B] after:transition-all after:duration-500 hover:after:w-full"
                  : "block py-2 text-gray-200 hover:text-[#B6963B]"
              }`}
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
