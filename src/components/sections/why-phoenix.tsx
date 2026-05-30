import Image from "next/image"

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


function WhyPhoenix() {
  return (
    <section
      id="why-phoenix"
      className="bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        {/* Two-column offset layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Why Phoenix, Arizona?
            </p>
            <h2 className="mt-6 text-5xl leading-tight text-foreground lg:text-[64px] lg:leading-[1.05]">
              Why Phoenix?
            </h2>

            <div className="mt-12 space-y-8">
              {facts.map((fact, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-sm font-medium tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {fact.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {fact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Image
              src="/images/phoenix-skyline.png"
              alt="Aerial view of Phoenix, Arizona downtown skyline at dusk"
              width={1536}
              height={2048}
              className="w-full rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export { WhyPhoenix }
