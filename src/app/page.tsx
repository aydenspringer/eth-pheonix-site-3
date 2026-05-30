import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhatIs } from "@/components/sections/what-is"
import { Ecosystem } from "@/components/sections/ecosystem"
import { PersonaCards } from "@/components/sections/persona-cards"
import { WhatToExpect } from "@/components/sections/what-to-expect"
import { Partners } from "@/components/sections/partners"
import { WhyPhoenix } from "@/components/sections/why-phoenix"
import { SponsorCta } from "@/components/sections/sponsor-cta"
import { ClosingCta } from "@/components/sections/closing-cta"
import { Footer } from "@/components/sections/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <WhatIs />

        <Ecosystem />

        <WhatToExpect />
        
        <PersonaCards />


        {/* Full-bleed photo break */}
        <section className="relative min-h-[500px]">
          <Image
            src="/images/photo-break.png"
            alt="Panoramic Arizona desert landscape at golden hour"
            fill
            className="object-cover"
          />
        </section>

        <Partners />

        <WhyPhoenix />

        <SponsorCta />

        <ClosingCta />
      </main>

      <Footer />
    </>
  )
}
