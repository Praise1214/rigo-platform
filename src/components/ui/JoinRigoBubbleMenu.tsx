'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

const MENU_ITEMS = [
  {
    label: 'Become a Member',
    href: '/membership',
    ariaLabel: 'Become a Member',
    rotation: -4,
  },
  {
    label: 'Volunteer',
    href: '/volunteer',
    ariaLabel: 'Volunteer with RIGO',
    rotation: 3,
  },
]

interface JoinRigoBubbleMenuProps {
  /** Render the inline (mobile) variant instead of the popover */
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export default function JoinRigoBubbleMenu({
  variant = 'desktop',
  onNavigate,
}: JoinRigoBubbleMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([])
  const pathname = usePathname()

  // Close on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  // Close on outside click (desktop only)
  useEffect(() => {
    if (!isOpen || variant !== 'desktop') return
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    // delay so the toggle click doesn't immediately close
    const id = setTimeout(() => document.addEventListener('click', onClick), 0)
    return () => {
      clearTimeout(id)
      document.removeEventListener('click', onClick)
    }
  }, [isOpen, variant])

  // GSAP animation
  useEffect(() => {
    const bubbles = bubblesRef.current.filter(Boolean) as HTMLAnchorElement[]
    if (!bubbles.length) return

    if (isOpen) {
      gsap.killTweensOf(bubbles)
      gsap.set(bubbles, { scale: 0, opacity: 0, y: -8 })
      bubbles.forEach((el, i) => {
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: i * 0.1,
          ease: 'back.out(2.5)',
        })
      })
    } else {
      gsap.killTweensOf(bubbles)
      gsap.to(bubbles, {
        scale: 0,
        opacity: 0,
        y: -8,
        duration: 0.2,
        ease: 'power2.in',
        stagger: 0.04,
      })
    }
  }, [isOpen])

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleItemClick = useCallback(() => {
    setIsOpen(false)
    onNavigate?.()
  }, [onNavigate])

  // ── Mobile inline variant ──
  if (variant === 'mobile') {
    return (
      <div ref={containerRef}>
        <button
          type="button"
          onClick={handleToggle}
          className="btn-pill btn-pill-primary text-center w-full flex items-center justify-center gap-2"
          aria-expanded={isOpen}
          aria-controls="join-rigo-mobile-menu"
        >
          Join Us
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          id="join-rigo-mobile-menu"
          role="menu"
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={handleItemClick}
                className="btn-pill bg-teal/10 text-teal hover:bg-teal hover:text-white text-center text-sm transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Desktop popover variant ──
  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className={`inline-flex items-center gap-1.5 btn-pill text-[11px] py-2.5 px-5 transition-all duration-200 ${
          isOpen
            ? 'bg-charcoal text-white'
            : 'btn-pill-primary'
        }`}
        aria-expanded={isOpen}
        aria-controls="join-rigo-desktop-menu"
        aria-haspopup="true"
      >
        Join RIGO
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Popover dropdown */}
      <div
        id="join-rigo-desktop-menu"
        role="menu"
        aria-label="Join RIGO options"
        className={`absolute right-0 top-full mt-3 flex flex-col gap-2 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ minWidth: '200px' }}
      >
        {MENU_ITEMS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            onClick={handleItemClick}
            ref={(el) => { bubblesRef.current[i] = el }}
            className="block px-6 py-3 rounded-full bg-white text-charcoal text-[12px] font-bold uppercase tracking-[0.08em] text-center shadow-[0_4px_20px_rgba(0,0,0,0.10)] hover:bg-teal hover:text-white hover:shadow-[0_8px_30px_rgba(28,142,156,0.25)] transition-all duration-200 whitespace-nowrap will-change-transform"
            style={{
              transform: `rotate(${item.rotation}deg)`,
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
