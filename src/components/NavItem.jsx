"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export function NavItems({ links = [], onClick, variant = "desktop", active }) {
  return (
    <div className={variant === "desktop" ? "flex items-center gap-8" : "flex flex-col space-y-2"}>
      {links.map((link, i) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.45 }}
        >
          <Link
            href={link.href}
            onClick={onClick}
            className={
              // text color changes to gold for active, otherwise normal and gold on hover
              `relative text-sm font-medium transition-colors 
               ${active === link.id ? "text-[#B6963B]" : "text-gray-200 hover:text-[#B6963B]"}
               after:absolute after:left-0 after:h-[2px] after:bg-[#B6963B] after:bottom-[-6px]
               after:transition-all after:duration-300
               ${active === link.id ? "after:w-full" : "after:w-0 hover:after:w-full"}`
            }
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
