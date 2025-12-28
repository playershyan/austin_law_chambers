import { Button } from '@/components/ui'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { FIRM_INFO } from '@/lib/firm-constants'

export function Hero() {
  return (
    <section className="relative bg-primary text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Expert Legal Services for Corporate, Commercial & Property Matters
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Trusted legal partners serving businesses and individuals across Colombo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
            </Link>
            <a href={`tel:${FIRM_INFO.contact.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {FIRM_INFO.contact.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
