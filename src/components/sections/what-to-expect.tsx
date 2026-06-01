"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const
const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const

interface ExpectRowProps {
  number: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

function ExpectRow({ number, title, description, imageSrc, imageAlt, reverse }: ExpectRowProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 lg:gap-16">
      <motion.div
        className={`overflow-hidden rounded-xl ${reverse ? "order-1 lg:order-2 lg:col-span-7" : "lg:col-span-7"}`}
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.9, ease }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1920}
          height={1080}
          className="w-full rounded-xl"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </motion.div>

      <motion.div
        className={reverse ? "order-2 lg:order-1 lg:col-span-5" : "lg:col-span-5"}
        initial={{ opacity: 0, x: reverse ? -32 : 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        <span className="text-sm font-medium tabular-nums text-primary">
          {number}
        </span>
        <h3 className="mt-3 text-5xl text-foreground lg:text-[64px] lg:leading-[1.05]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
          {description}
        </p>
      </motion.div>
    </div>
  )
}

function WhatToExpect() {
  return (
    <section id="what-to-expect" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <h2 className="text-4xl text-foreground lg:text-5xl">
          What to expect
        </h2>

        <div className="mt-20">
          <ExpectRow
            number="01"
            title="Build"
            description="Spend three days deep in a hands-on hackathon: coding against live sponsor bounties, getting mentorship from protocol engineers, and demoing finished work to the people who fund it."
            imageSrc="/images/event-build.png"
            imageAlt="Developers collaborating at a hackathon workspace"
          />

          <div className="border-t border-border" />

          <ExpectRow
            number="02"
            title="Screen"
            description="AI Film 3 brings its festival to Phoenix: original films made with AI tools premiere on the big screen, alongside a creator-led make-a-thon where new work gets made in real time."
            imageSrc="/images/event-screen.png"
            imageAlt="AI film screening in a theater with audience watching"
            reverse
          />

          <div className="border-t border-border" />

          <ExpectRow
            number="03"
            title="Connect"
            description="The BitAngels pitch competition puts early-stage founders in front of the angel network that backed Ethereum."
            imageSrc="/images/event-connect.png"
            imageAlt="Startup pitch competition on stage with investors in audience"
          />
        </div>
      </div>
    </section>
  )
}

export { WhatToExpect }
