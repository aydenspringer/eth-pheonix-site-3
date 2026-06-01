"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

const ease = [0.16, 1, 0.3, 1] as const

const tiers = [
  { label: "Builder", price: "Free", icon: "⚒️" },
  { label: "Pro", price: "$99", icon: "⛰️" },
  { label: "Patron", price: "$249", icon: "✦" },
] as const

const viewport = { once: true, margin: "-15% 0px -15% 0px" } as const

function TicketsCta() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center overflow-hidden"
    >
      <motion.div className="absolute inset-[-15%_0_0_0]" style={{ y: bgY }}>
        <Image
          src="/images/background-2.png"
          alt="Geometric phoenix rising over Arizona desert at twilight"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/50 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex flex-1 flex-col items-center px-6 pt-20 text-center lg:pt-28">
        <motion.p
          className="font-heading text-sm font-medium uppercase tracking-[0.35em] text-white/90 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          ETHPhoenix
        </motion.p>

        <motion.p
          className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-primary sm:text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          ✦ A Blockchain &amp; Crypto Builder Festival ✦
        </motion.p>

        <motion.h2
          className="mt-8 max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          Rise with us
          <br />
          in September.
        </motion.h2>

        <motion.p
          className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          An ETHDenver-Style Ethereum Buidlathon for the US West Coast
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.7, ease }}
        >
          <Button
            size="lg"
            className="h-14 rounded-full px-10 text-sm font-bold uppercase tracking-wider"
            asChild
          >
            <a href="#get-early-access">
              Claim Your Free Ticket
            </a>
          </Button>

          <a
            href="#get-early-access"
            className="text-xs font-medium uppercase tracking-[0.15em] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Apply to Buidlathon →
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {tiers.map((tier, i) => (
            <span key={tier.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/20">·</span>}
              <span>
                {tier.label}{" "}
                <span className="text-white/70">{tier.price}</span>
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { TicketsCta }
