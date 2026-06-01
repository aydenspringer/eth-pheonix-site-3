"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { KitForm } from "@/components/shared/kit-form"

const heroContent = {
  headline: (
    <>
      A hackathon, a film festival, and a pitch competition in the desert.
    </>
  ),
  subheadline:
    "ETH Phoenix puts your work in front of the BitAngels network that backed Ethereum, with sponsor bounties, protocol mentors, and AI Film 3. September 25–27, 2026.",
}

const ease = [0.16, 1, 0.3, 1] as const

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background">
      {/* Full-bleed background with Ken Burns drift */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Image
          src="/images/background-1.png"
          alt="Atmospheric desert landscape with dramatic sunset lighting over Phoenix, Arizona mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 py-24 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <motion.p
            className="text-sm text-white/50"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            September 25–27, 2026 · Phoenix, Arizona
          </motion.p>

          <motion.h1
            className="mt-8 text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg font-medium leading-relaxed text-white/80 lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease }}
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            className="mt-10 max-w-md"
            id="get-early-access"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease }}
          >
            <KitForm />
          </motion.div>

          <motion.a
            href="#sponsor"
            className="mt-4 inline-block py-2 text-[13px] text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.05 }}
          >
            Become a Sponsor →
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export { Hero }
