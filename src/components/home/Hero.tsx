import { Button } from '@/components/ui'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FIRM_INFO } from '@/lib/firm-constants'

export function Hero() {
  return (
    <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.jpg"
          alt="Lady Justice"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
            Expert Legal Services for Corporate, Commercial & Property Matters
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
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
