const stats = [
  { value: "$165B", label: "TSMC investment in Arizona fabs" },
  { value: "$20B", label: "Intel semiconductor expansion" },
  { value: "9,000+", label: "Tech companies in Phoenix metro" },
  { value: "55K+", label: "Stand With Crypto AZ advocates" },
  { value: "#1", label: "Most Innovative University (ASU, 9 years running)" },
  { value: "2017", label: "Year Arizona codified blockchain in law" },
]

function Ecosystem() {
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
          The Ecosystem
        </p>
        <h2 className="mt-6 max-w-2xl font-heading text-3xl font-bold leading-tight text-foreground lg:text-4xl">
          Intel is here. TSMC is here. Ethereum is taking over.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          Phoenix isn&apos;t an emerging tech market — it&apos;s an arrived one.
          Arizona passed blockchain legislation before most states formed a
          committee. The semiconductor supply chain is relocating here. The
          crypto community already has roots.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-bold text-primary lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Ecosystem }
