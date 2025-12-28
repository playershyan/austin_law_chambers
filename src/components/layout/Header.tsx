'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui'
import { FIRM_INFO } from '@/lib/firm-constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Practice Areas',
      href: '/practice-areas',
      dropdown: FIRM_INFO.practiceAreas.map(area => ({
        name: area.name,
        href: `/practice-areas/${area.slug}`
      }))
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo & Firm Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/Austin_Law_Chambers_logo-removebg-preview.png"
              alt="Austin Law Chambers Logo"
              width={80}
              height={80}
              className="h-14 w-auto"
              style={{
                filter: 'brightness(0) saturate(100%) invert(68%) sepia(67%) saturate(410%) hue-rotate(4deg) brightness(93%) contrast(88%)'
              }}
            />
            <span className="text-2xl font-bold text-secondary" style={{ fontFamily: '"Engravers Old English BT", "Old English Text MT", "UnifrakturMaguntia", serif' }}>
              {FIRM_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="secondary" size="sm" asChild>
              <a href={`tel:${FIRM_INFO.contact.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                {FIRM_INFO.contact.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-white hover:text-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="secondary" className="w-full mt-4" asChild>
              <a href={`tel:${FIRM_INFO.contact.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                {FIRM_INFO.contact.phoneDisplay}
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
