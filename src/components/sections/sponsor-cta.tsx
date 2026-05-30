function SponsorCta() {
  return (
    <section id="sponsor" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
              Partner With Us
            </p>
            <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              Put your brand in front of builders, investors, and creators.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Sponsor bounties at the hackathon. Present at the film festival.
              Host a side event. We&apos;ll build a package around what you
              need and not a one-size-fits-all logo placement.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="font-heading text-sm font-semibold text-foreground">
                Interested?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out and we&apos;ll send the sponsor deck within 24 hours.
              </p>
              <a
                href="mailto:partners@ethphoenix.com"
                className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                partners@ethphoenix.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { SponsorCta }
