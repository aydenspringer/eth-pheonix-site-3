"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const
const viewport = { once: true, margin: "-5% 0px -5% 0px" } as const

const facts = [
  {
    title: "Crypto-friendly since 2017.",
    description:
      "Arizona recognized blockchain signatures and smart contracts in law before most states had formed a committee to discuss it.",
  },
  {
    title: "Home to the #1 Most Innovative University.",
    description:
      "ASU\u2019s Blockchain Research Lab is three miles from the venue \u2014 and the students who will build the next generation of Web3 are already here.",
  },
  {
    title: "Silicon Desert, not Silicon Valley.",
    description:
      "TSMC ($165B), Intel ($20B), and over 9,000 tech companies are headquartered in the Phoenix metro. The infrastructure is real.",
  },
  {
    title: "Sky Harbor connects to everywhere.",
    description:
      "158+ non-stop destinations, including direct flights from SF, NYC, Austin, and Miami \u2014 and a light rail from the terminal straight to downtown.",
  },
  {
    title: "30% cheaper than coastal cities.",
    description:
      "September is off-peak in Phoenix. Hotels are available, venues are bookable, and your event budget goes further than it would in New York or San Francisco.",
  },
]

function FactItem({ fact, index }: { fact: (typeof facts)[number]; index: number }) {
  return (
    <motion.div
      className="flex gap-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
    >
      <span className="text-sm font-medium tabular-nums text-primary">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="text-base font-semibold text-foreground">
          {fact.title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {fact.description}
        </p>
      </div>
    </motion.div>
  )
}

function WhyPhoenix() {
  return (
    <section id="why-phoenix" className="surface-elevated bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h2
              className="text-5xl leading-tight text-foreground lg:text-[64px] lg:leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease }}
            >
              Why Phoenix?
            </motion.h2>

            <div className="mt-12 space-y-8">
              {facts.map((fact, i) => (
                <FactItem key={i} fact={fact} index={i} />
              ))}
            </div>
          </div>

          <motion.div
            className="overflow-hidden rounded-xl lg:col-span-5"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1, ease }}
          >
            <Image
              src="/images/phoenix-skyline.png"
              alt="Aerial view of Phoenix, Arizona downtown skyline at dusk"
              width={1536}
              height={2048}
              className="w-full rounded-xl"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { WhyPhoenix }
