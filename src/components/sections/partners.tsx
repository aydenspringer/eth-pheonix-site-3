"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const
const viewport = { once: true, margin: "-8% 0px -8% 0px" } as const

const confirmedPartners = [
  {
    name: "AI Film 3",
    logo: "/images/logo-aifilm3.png",
    description:
      "The leading AI film festival bringing original AI-made work to audiences: co-producing ETH Phoenix\u2019s film festival track.",
  },
  {
    name: "BitAngels",
    logo: "/images/logo-bitangels.webp",
    description:
      "The world\u2019s first digital currency angel group, founded in 2013, with early bets on Ethereum, ShapeShift, and Storj: running the pitch competition at ETH Phoenix.",
  },
  {
    name: "Stand With Crypto Arizona",
    logo: "/images/logo-standwithcrypto.png",
    description:
      "Arizona\u2019s grassroots crypto advocacy coalition connecting builders and voters across the state.",
  },
  {
    name: "Devils DAO",
    logo: "/images/logo-devilsdao.png",
    description:
      "ASU\u2019s student-led blockchain organization, plugged into the next generation of Ethereum builders coming out of the Valley.",
  },
]

const pendingPartners = [
  {
    name: "ASU Blockchain Research Lab",
    description:
      "Arizona State University\u2019s academic research hub for blockchain applications and Web3 infrastructure, three miles from the venue.",
  },
  {
    name: "Desert Blockchain",
    description:
      "Phoenix\u2019s home-grown blockchain developer community, active since the state\u2019s earliest crypto meetups.",
  },
  {
    name: "Arizona Commerce Authority",
    description:
      "The state agency driving Arizona\u2019s tech economy: including semiconductor investment and crypto-friendly policy.",
  },
]

function PartnerCard({
  partner,
  index,
}: {
  partner: (typeof confirmedPartners)[number]
  index: number
}) {
  return (
    <motion.div
      className="rounded-2xl border border-border bg-card p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
    >
      <div className="mb-4 flex h-12 items-center">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={120}
          height={48}
          className="h-10 w-auto object-contain"
        />
      </div>
      <p className="text-base font-semibold text-foreground">
        {partner.name}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {partner.description}
      </p>
    </motion.div>
  )
}

function Partners() {
  return (
    <section id="partners" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <motion.h2
          className="text-3xl leading-tight text-foreground lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, ease }}
        >
          Our Partners
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {confirmedPartners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} />
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-12">
          <p className="text-sm font-medium text-muted-foreground">
            In conversation
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pendingPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                className="rounded-xl border border-dashed border-border p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease }}
              >
                <p className="text-sm font-semibold text-foreground">
                  {partner.name}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Partners }
