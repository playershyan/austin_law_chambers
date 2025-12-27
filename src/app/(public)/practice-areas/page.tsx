import Link from 'next/link'
import { Container, Section, SectionTitle } from '@/components/ui'
import { ArrowRight } from 'lucide-react'
import { FIRM_INFO } from '@/lib/firm-constants'
import { Building2, Gavel, Home } from 'lucide-react'

export const metadata = {
  title: 'Practice Areas | Austin Law Chambers',
  description:
    'Expert legal services in Colombo, Sri Lanka. Corporate Law, Commercial Litigation, and Property Law. Trusted attorneys serving businesses and individuals.',
}

export default function PracticeAreasPage() {
  // Map icon names to actual icon components
  const iconMap = {
    Building2,
    Gavel,
    Home,
  }

  const practiceAreas = FIRM_INFO.practiceAreas.map((area) => ({
    icon: iconMap[area.icon as keyof typeof iconMap],
    title: area.name,
    slug: area.slug,
    description: area.description,
    services: area.services,
  }))

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <Container>
          <nav className="text-sm mb-4 text-white/70">Home &gt; Practice Areas</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Practice Areas</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive legal services for businesses and individuals in Colombo and throughout
            Sri Lanka
          </p>
        </Container>
      </section>

      {/* Practice Areas Grid */}
      <Section variant="gray">
        <div className="text-center mb-12">
          <SectionTitle>Areas of Legal Expertise</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 border-2 border-primary">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  {area.title}
                </h2>

                {/* Description */}
                <p className="text-text-light mb-6">{area.description}</p>

                {/* Services List */}
                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-3">Services Include:</h3>
                  <ul className="space-y-2">
                    {area.services.slice(0, 4).map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm text-text-light">
                        <span className="text-secondary mr-2">•</span>
                        {service}
                      </li>
                    ))}
                    {area.services.length > 4 && (
                      <li className="text-sm text-text-light italic">
                        And {area.services.length - 4} more...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section variant="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Why Choose Austin Law Chambers?
            </h2>
            <div className="space-y-4">
              {FIRM_INFO.whyChooseUs.slice(0, 4).map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{reason.title}</h3>
                    <p className="text-text-light">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Schedule Your Consultation
            </h3>
            <p className="text-text-light mb-6">
              Ready to discuss your legal matter? Contact us today to speak with one of our
              experienced attorneys.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">📞</span>
                </div>
                <div>
                  <p className="text-sm text-text-light">Call Us</p>
                  <a
                    href={`tel:${FIRM_INFO.contact.phone}`}
                    className="font-bold text-primary hover:underline"
                  >
                    {FIRM_INFO.contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-text-light">Email Us</p>
                  <a
                    href={`mailto:${FIRM_INFO.contact.email}`}
                    className="font-bold text-primary hover:underline"
                  >
                    {FIRM_INFO.contact.email}
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-primary text-white text-center py-3 px-6 rounded-md hover:bg-primary-dark transition-colors font-semibold mt-6"
              >
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
