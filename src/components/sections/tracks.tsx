"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface Track {
  title: string
  tagline: string
  image: string
  alt: string
  textColor: "light" | "dark"
}

const tracks: Track[] = [
  {
    title: "DeFi &\nRWA",
    tagline: "Lending, stablecoins, and tokenized assets\non Ethereum's financial layer.",
    image: "/images/tracks/defi-rwa.png",
    alt: "Geometric desert rock formations at sunset in red tones",
    textColor: "light",
  },
  {
    title: "Infra &\nL2s",
    tagline: "Rollups, bridges, and the plumbing\nthat makes Ethereum scale.",
    image: "/images/tracks/infa-l2.png",
    alt: "Geometric saguaro cacti in teal desert landscape",
    textColor: "light",
  },
  {
    title: "AI x\nCrypto",
    tagline: "On-chain agents, verifiable inference,\nand decentralized compute.",
    image: "/images/tracks/ai-x-crypto.png",
    alt: "Geometric phoenix rising from desert with Ethereum diamond",
    textColor: "light",
  },
  {
    title: "Privacy &\nCypherpunk",
    tagline: "ZK proofs, encrypted messaging,\nand privacy-preserving protocols.",
    image: "/images/tracks/privacy.png",
    alt: "Geometric crystal formations with Ethereum diamond in purple desert",
    textColor: "light",
  },
  {
    title: "Public Goods\n& DAOs",
    tagline: "Funding mechanisms, governance tools,\nand coordination infrastructure.",
    image: "/images/tracks/public-goods.png",
    alt: "Geometric desert landscape with saguaro cactus in cream and black",
    textColor: "dark",
  },
]

const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const

function TrackCard({ track, className, big = false }: { track: Track | undefined; className?: string; big?: boolean }) {
  if (!track) return null
  const isLight = track.textColor === "light"

  return (
    <div className={`relative overflow-hidden rounded-xl ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={track.image}
          alt={track.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </motion.div>

      <motion.div
        className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-6 lg:p-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <h3
          className={`whitespace-pre-line font-heading text-xl font-bold leading-[0.95] tracking-tight sm:text-3xl lg:text-5xl ${big ? "text-2xl sm:text-4xl lg:text-7xl" : ""} ${isLight ? "text-white" : "text-black"}`}
        >
          {track.title}
        </h3>

        <p
          className={`whitespace-pre-line text-[10px] font-medium italic leading-relaxed sm:text-xs lg:text-sm ${isLight ? "text-white/80" : "text-black/60"}`}
        >
          {track.tagline}
        </p>
      </motion.div>
    </div>
  )
}

function Tracks() {
  const [defi, infra, aiCrypto, privacy, publicGoods] = tracks

  return (
    <section className="surface-elevated bg-background py-24 lg:py-32" id="tracks">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <h2 className="text-4xl text-foreground lg:text-5xl">
          Hackathon tracks
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
          Every project competes for sponsor bounties, protocol mentorship, and
          direct exposure to the BitAngels investor network.
        </p>

        {/* Desktop: 3-col with center spanning 2 rows */}
        <div className="mt-12 hidden gap-3 lg:grid lg:grid-cols-[1fr_1.6fr_1fr] lg:grid-rows-[400px_400px]">
          <TrackCard track={defi} />
          <TrackCard track={aiCrypto} className="lg:row-span-2" big />
          <TrackCard track={infra} />
          <TrackCard track={privacy} />
          <TrackCard track={publicGoods} />
        </div>

        {/* Mobile: 2-col paired grid */}
        <div className="mt-12 grid grid-cols-2 gap-2.5 sm:gap-3 lg:hidden">
          <TrackCard track={defi} className="min-h-[220px] sm:min-h-[280px]" />
          <TrackCard track={infra} className="min-h-[220px] sm:min-h-[280px]" />
          <TrackCard track={aiCrypto} className="col-span-2 min-h-[300px] sm:min-h-[360px]" big />
          <TrackCard track={privacy} className="min-h-[220px] sm:min-h-[280px]" />
          <TrackCard track={publicGoods} className="min-h-[220px] sm:min-h-[280px]" />
        </div>
      </div>
    </section>
  )
}

export { Tracks }
