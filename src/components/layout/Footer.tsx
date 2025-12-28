import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Star } from 'lucide-react'
import { FIRM_INFO } from '@/lib/firm-constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{FIRM_INFO.name}</h3>
            <p className="text-sm text-gray-300">
              {FIRM_INFO.description.short}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              {FIRM_INFO.practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="hover:text-secondary">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{FIRM_INFO.address.street}</li>
              <li>{FIRM_INFO.address.city} {FIRM_INFO.address.postalCode}, {FIRM_INFO.address.country}</li>
              <li>
                <a href={`tel:${FIRM_INFO.contact.phone}`} className="hover:text-secondary">
                  Phone: {FIRM_INFO.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${FIRM_INFO.contact.email}`} className="hover:text-secondary">
                  Email: {FIRM_INFO.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={FIRM_INFO.social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary inline-flex items-center gap-1"
                >
                  <Star className="w-4 h-4 fill-current" />
                  See our Google Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-sm text-gray-300">
                © {currentYear} {FIRM_INFO.name}. All rights reserved.
              </p>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-300 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-4 space-y-1">
            <p>
              Disclaimer: The information on this website is for general informational purposes only
              and does not constitute legal advice.
            </p>
            <p>
              <Link href="/credits" className="hover:text-secondary underline">
                Credits & Attributions
              </Link>
            </p>
            <p className="text-gray-500">
              Designed and developed by Holtzman Labs Software
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
