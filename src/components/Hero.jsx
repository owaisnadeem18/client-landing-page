import { Button } from "./ui/button"
import { Briefcase, Users, Crown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center"
      style={{ minHeight: "calc(100vh - 133.5px)" }}
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 py-20">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold text-[#B6963B] leading-tight">
          Elevate Workplace Wellness. <br /> Empower Productivity.
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Opulent Touch crafts tailored wellness programs designed exclusively
          for executives and organizations seeking balance, focus, and elevated
          performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button className="bg-[#B6963B] text-black hover:bg-[#d1a94e] text-lg px-6 py-3 rounded-xl">
            Request a Private Consultation
          </Button>
          <a
            href="#packages"
            className="px-6 py-3 border border-[#B6963B] rounded-xl text-lg text-[#B6963B] hover:bg-[#B6963B] hover:text-black transition"
          >
            Explore Packages
          </a>
        </div>

        {/* Packages Section (Cards) */}
        <div
          id="packages"
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left"
        >
          {/* Basic */}
          <div className="bg-black/50 border border-[#B6963B] rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <Briefcase className="w-10 h-10 text-[#B6963B] mb-4" />
            <h3 className="text-xl font-semibold text-[#B6963B]">
              Basic Wellness
            </h3>
            <p className="mt-3 text-gray-300 text-sm">
              Stress relief workshops and monthly wellness sessions to refresh
              your team.
            </p>
          </div>

          {/* Hybrid */}
          <div className="bg-black/50 border border-[#B6963B] rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <Users className="w-10 h-10 text-[#B6963B] mb-4" />
            <h3 className="text-xl font-semibold text-[#B6963B]">
              Hybrid Package
            </h3>
            <p className="mt-3 text-gray-300 text-sm">
              Blend of virtual + on-site programs, fitness plans, and nutrition
              consulting tailored for dynamic teams.
            </p>
          </div>

          {/* Executive */}
          <div className="bg-black/50 border border-[#B6963B] rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <Crown className="w-10 h-10 text-[#B6963B] mb-4" />
            <h3 className="text-xl font-semibold text-[#B6963B]">
              Executive Elite
            </h3>
            <p className="mt-3 text-gray-300 text-sm">
              Exclusive one-on-one executive care, luxury wellness retreats, and
              full corporate health strategy integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
