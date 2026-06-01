"use client"

import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const
const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const

function SponsorCta() {
  return (
    <section id="sponsor" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-3xl leading-tight text-foreground lg:text-4xl">
              Put your brand in front of builders, investors, and creators.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Sponsor bounties at the hackathon. Present at the film festival.
              Host a side event. We&apos;ll build a package around what you
              need and not a one-size-fits-all logo placement.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-semibold text-foreground">
                Interested?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out and we&apos;ll send the sponsor deck within 24 hours.
              </p>
              <a
                href="mailto:partners@ethphoenix.com"
                className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                partners@ethphoenix.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { SponsorCta }
