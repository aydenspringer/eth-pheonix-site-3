function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-12 lg:py-16">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-lg tracking-tight text-foreground">
              ETH PHOENIX
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Built in Phoenix, AZ. September 25–27, 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://x.com/ETHPhoenix"
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter
            </a>
            <a
              href="https://instagram.com/ETHPhoenix"
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 ETH Phoenix. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="mailto:partners@ethphoenix.com"
              className="py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Partner With Us
            </a>
            <a
              href="mailto:speakers@ethphoenix.com"
              className="py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Speak at ETH Phoenix
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
