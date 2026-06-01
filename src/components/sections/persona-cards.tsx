"use client"

import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const
const viewport = { once: true, margin: "-8% 0px -8% 0px" } as const

function PersonaCards() {
  return (
    <section className="surface-elevated bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <motion.h2
          className="text-4xl text-foreground lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, ease }}
        >
          Whether you write code, make films, fund projects, or just got curious
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Builders — primary bg, inverted text, the main audience */}
          <motion.div
            className="rounded-2xl bg-primary p-8 md:col-span-7 lg:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
          >
            <h3 className="font-heading text-2xl font-bold leading-snug text-primary-foreground lg:text-3xl">
              Ship projects, win bounties, get funded.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 lg:text-base">
              Compete in a hands-on hackathon with sponsor bounties, workshops on L2s, AI agents, and smart contracts, and a direct line to investors looking for their next bet.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
              Builders
            </p>
          </motion.div>

          {/* Creators — top accent border, film-track visual cue */}
          <motion.div
            className="rounded-2xl border border-border bg-card p-8 md:col-span-5 lg:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.08, ease }}
          >
            <p className="text-sm font-semibold text-primary">Creators</p>
            <h3 className="mt-3 text-lg leading-snug text-card-foreground lg:text-xl">
              Screen your work. Join the create-a-thon.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Submit your AI film to the AI Film 3 festival, get it in front of a real audience, and spend three days making new work alongside artists and toolmakers at the frontier.
            </p>
          </motion.div>

          {/* Investors — no border, subtle bg, premium feel */}
          <motion.div
            className="rounded-2xl bg-muted p-8 md:col-span-5 lg:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            <p className="text-sm font-semibold text-primary">Investors</p>
            <h3 className="mt-3 text-lg leading-snug text-foreground lg:text-xl">
              BitAngels pitches. Curated deal flow.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Access a structured pitch competition vetted by the BitAngels network: the same angel group that backed Ethereum and ShapeShift early, plus a VIP investor track built for serious deal-making.
            </p>
          </motion.div>

          {/* Newcomers — dashed border, open/inviting */}
          <motion.div
            className="rounded-2xl border border-dashed border-border p-8 md:col-span-7 lg:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.24, ease }}
          >
            <p className="text-sm font-semibold text-primary">Newcomers</p>
            <h3 className="mt-3 text-lg leading-snug text-foreground lg:text-xl">
              No jargon. No gatekeeping. Start here.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              ETH Phoenix has a dedicated newcomer track with mentorship pairing, plain-English workshops, and a free entry tier, so you can show up curious and leave with real context.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { PersonaCards }
