'use client'

import Link from 'next/link'
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-gothic)' }}>
            {FIRM_INFO.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <a href={`tel:${FIRM_INFO.contact.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                {FIRM_INFO.contact.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-text hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary" className="w-full mt-4" asChild>
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
