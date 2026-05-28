import Image from "next/image"

const confirmedPartners = [
  {
    name: "AI Film 3",
    logo: "/images/logo-aifilm3.png",
    description:
      "The leading AI film festival bringing original AI-made work to real audiences — and co-producing ETH Phoenix\u2019s film festival track.",
  },
  {
    name: "BitAngels",
    logo: "/images/logo-bitangels.webp",
    description:
      "The world\u2019s first digital currency angel group, founded in 2013, with early bets on Ethereum, ShapeShift, and Storj — running the pitch competition at ETH Phoenix.",
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
      "The state agency driving Arizona\u2019s tech economy — including semiconductor investment and crypto-friendly policy.",
  },
]

function Partners() {
  return (
    <section id="partners" className="surface-light bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
          Built With
        </p>
        <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-foreground lg:text-4xl">
          Our Partners
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {confirmedPartners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-12 items-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain brightness-0 dark:brightness-100 dark:invert-0"
                />
              </div>
              <p className="font-heading text-base font-semibold text-foreground">
                {partner.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-12">
          <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            In Conversation
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pendingPartners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl border border-dashed border-border p-6"
              >
                <p className="font-heading text-sm font-semibold text-foreground">
                  {partner.name}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Partners }
