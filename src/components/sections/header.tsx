"use client"

import { useCallback, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#what-to-expect", label: "Expect" },
  { href: "#tracks", label: "Tracks" },
  { href: "#why-phoenix", label: "Why Phoenix" },
] as const

function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openMenu = useCallback(() => {
    dialogRef.current?.showModal()
  }, [])

  const closeMenu = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg tracking-tight text-white"
        >
          ETH PHOENIX
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-[13px] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            className="hidden h-10 rounded-full px-5 text-xs font-medium uppercase tracking-wider sm:inline-flex"
            asChild
          >
            <a href="#get-early-access">Get Early Access</a>
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:text-white md:hidden"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-0 h-dvh w-full max-w-none border-none bg-[oklch(0.12_0.01_55)] p-0 text-white backdrop:bg-black/60 open:flex open:flex-col"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu()
        }}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-heading text-lg tracking-tight">ETH PHOENIX</span>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-6 pt-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-lg text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="px-6 pb-8">
          <Button
            className="h-12 w-full rounded-full text-sm font-medium uppercase tracking-wider"
            asChild
          >
            <a href="#get-early-access" onClick={closeMenu}>Get Early Access</a>
          </Button>
        </div>
      </dialog>
    </header>
  )
}

export { Header }
