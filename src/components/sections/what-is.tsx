import Image from "next/image"

function WhatIs() {
  return (
    <section id="what-is" className="surface-elevated bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-heading leading-relaxed text-foreground lg:text-4xl lg:leading-relaxed">
              A three-day festival at the intersection of Ethereum, AI, and film.
              Hackathon, film festival, and pitch competition.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-xl">
              Built in partnership with AI Film 3 and BitAngels. Made for Ethereum developers who want to ship, AI filmmakers who want
              distribution, investors who want qualified deal flow, and newcomers who
              want a clear way in.
            </p>
          </div>

          <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
            <Image
              src="/images/what-is.png"
              alt="Abstract convergence of blockchain, AI, and film"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { WhatIs }
