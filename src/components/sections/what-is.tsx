import Image from "next/image"

function WhatIs() {
  return (
    <section id="what-is" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              What is ETH Phoenix?
            </p>
            <p className="mt-8 text-xl leading-relaxed text-foreground lg:text-2xl lg:leading-relaxed">
              A three-day festival at the intersection of Ethereum, AI, and film.
              Part hackathon, part film festival, part pitch competition — built in
              partnership with AI Film 3 and BitAngels. Where capital meets
              conviction. Where builders find believers. Where the future gets funded.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Made for Ethereum developers who want to ship, AI filmmakers who want
              distribution, investors who want qualified deal flow, and newcomers who
              want a clear way in.
            </p>
          </div>

          <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
            <Image
              src="/images/what-is.webp"
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
