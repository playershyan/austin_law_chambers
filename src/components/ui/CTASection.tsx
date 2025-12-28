import { Button } from '@/components/ui'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { FIRM_INFO } from '@/lib/firm-constants'

interface CTASectionProps {
  headline?: string
  subheading?: string
  phoneNumber?: string
}

export function CTASection({
  headline = 'Need Expert Legal Guidance?',
  subheading = 'Contact us today to discuss your legal matter',
  phoneNumber = FIRM_INFO.contact.phoneDisplay,
}: CTASectionProps) {
  const phoneLink = phoneNumber === FIRM_INFO.contact.phoneDisplay
    ? FIRM_INFO.contact.phone
    : phoneNumber.replace(/[^0-9+]/g, '')

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{headline}</h2>
        <p className="text-xl mb-8 text-white/90">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
          </Link>
          <a href={`tel:${phoneLink}`}>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {phoneNumber}
            </Button>
          </a>
        </div>
        <p className="text-sm text-white/70 mt-6">We respond to inquiries within 24 hours</p>
      </div>
    </section>
  )
}
