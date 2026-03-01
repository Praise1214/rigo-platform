'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import JoinRigoBubbleMenu from "../ui/JoinRigoBubbleMenu"

const navLinks = [
  {href: '/', label: 'Home'},
  { href: '/about', label: 'About' },
  { href: '/initiatives', label: 'Programs' },
  { href: '/impact-stories', label: 'Stories' },
  { href: '/contact', label: 'Contact us' },
  { href: '/team', label: 'Team' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[64px] lg:h-[72px]">
          <Link href="/" className="flex items-center gap-2 min-w-0 -ml-2 sm:-ml-4 lg:-ml-8">
            <Image
              src="/RIGO.png"
              alt="RIGO logo"
              width={102}
              height={102}
              priority
              className="w-[50px] h-[50px] sm:w-[72px] sm:h-[72px] lg:w-[102px] lg:h-[102px]"
            />
            <span className=" sm:inline heading-display text-charcoal text-[16px] lg:text-[20px] tracking-[0.04em] lg:tracking-[0.06em] whitespace-nowrap">
              RISING GENERATION
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 ml-10 bg-charcoal/[0.04] rounded-full px-1.5 py-1.5">
           {navLinks.map((link) => { 
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-[12px] font-bold uppercase tracking-[0.1em] transition-all 
                duration-200 ${
                    isActive
                      ? 'bg-teal text-white'
                      : 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/[0.06]'
                  }
                `}
            >
              {link.label}
            </Link>
              )
})}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/donate"
              className="hidden md:inline-flex btn-pill btn-pill-outline text-[11px] py-2.5 px-5"
            >
              Donate
            </Link>
            <div className="hidden sm:block">
              <JoinRigoBubbleMenu variant="desktop" />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-charcoal/5 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span
                  className={`block h-[1.5px] bg-charcoal rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? 'rotate-45 translate-y-[3.25px]' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-charcoal rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? '-rotate-45 -translate-y-[3.25px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-cream border-t border-charcoal/5">
          <nav className="px-6 py-6 space-y-1">
            {[...navLinks, { href: '/volunteer', label: 'Volunteer' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-charcoal hover:text-teal hover:bg-teal-light/30 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-4">
              <JoinRigoBubbleMenu variant="mobile" onNavigate={() => setMobileOpen(false)} />
              <Link href="/donate" onClick={() => setMobileOpen(false)} className="btn-pill btn-pill-outline text-center">
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
