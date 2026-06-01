import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhatIs } from "@/components/sections/what-is"
import { WhatToExpect } from "@/components/sections/what-to-expect"
import { Tracks } from "@/components/sections/tracks"
import { PersonaCards } from "@/components/sections/persona-cards"
import { Partners } from "@/components/sections/partners"
import { WhyPhoenix } from "@/components/sections/why-phoenix"
import { SponsorCta } from "@/components/sections/sponsor-cta"
import { TicketsCta } from "@/components/sections/tickets-cta"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* <WhatIs /> */}

        <Tracks />

        <WhatToExpect />

        <PersonaCards />

        <Partners />

        <WhyPhoenix />

        <SponsorCta />

        <TicketsCta />
      </main>

      <Footer />
    </>
  )
}
