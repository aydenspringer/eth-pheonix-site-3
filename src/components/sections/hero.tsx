import Image from "next/image"
import { KitForm } from "@/components/shared/kit-form"

const heroContent = {
  headline: (
    <>
      A hackathon, a film festival, and a pitch competition in the desert.
    </>
  ),
  subheadline:
    "ETH Phoenix puts your work in front of the angel network that backed Ethereum, with sponsor bounties, protocol mentors, and AI Film 3. September 25–27, 2026.",
}


function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Atmospheric desert landscape with dramatic sunset lighting over Phoenix, Arizona mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      {/* Content — left-aligned, not centered */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
            September 25–27, 2026 · Phoenix, Arizona
          </p>

          <h1 className="mt-8 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl ">
            {heroContent.headline}
          </h1>

          <p className="mt-8 max-w-lg text-semibold leading-relaxed text-muted-foreground lg:text-lg">
            {heroContent.subheadline}
          </p>

          <div className="mt-10 max-w-md" id="get-early-access">
            <KitForm />
          </div>

          <a
            href="#sponsor"
            className="mt-4 inline-block py-2 text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Become a Sponsor →
          </a>
        </div>
      </div>
    </section>
  )
}

export { Hero }
