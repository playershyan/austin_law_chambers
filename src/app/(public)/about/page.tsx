import { Section, SectionTitle, CTASection } from '@/components/ui'
import { Scale, Users, Award, Lightbulb, Target } from 'lucide-react'
import { FIRM_INFO } from '@/lib/firm-constants'

export const metadata = {
  title: 'About Austin Law Chambers | Leading Law Firm in Colombo',
  description:
    'Learn about Austin Law Chambers, a leading law firm in Colombo, Sri Lanka. Experienced attorneys dedicated to corporate law, commercial litigation, and property law with strategic counsel and client-focused representation.',
}

export default function AboutPage() {
  // Map FIRM_INFO values to components with icons
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Excellence: Award,
    Integrity: Scale,
    'Client Focus': Users,
    'Strategic Thinking': Lightbulb,
    'Results-Driven': Target,
  }

  const values = FIRM_INFO.values.map((value) => ({
    icon: iconMap[value.name as keyof typeof iconMap] || Award,
    title: value.name,
    description: value.description,
  }))

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-white/70">Home &gt; About</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Austin Law Chambers</h1>
          <p className="text-xl text-white/90">Trusted Legal Partners in Colombo</p>
        </div>
      </section>

      {/* Firm Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Who We Are</SectionTitle>
          <div className="prose prose-lg max-w-none text-text-light">
            <p className="mb-6">
              {FIRM_INFO.description.long}
            </p>
            <p className="mb-6">
              We serve a diverse clientele ranging from individuals seeking property law guidance to businesses requiring corporate legal services and litigation representation. Our reputation is built on delivering effective outcomes through strategic legal thinking and client-focused service.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-background-gray p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-text-light">
                  To provide exceptional legal services with a client-first philosophy, delivering clear communication, strategic counsel, and robust representation across all our practice areas.
                </p>
              </div>
              <div className="bg-background-gray p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-text-light">
                  To be Colombo's most trusted law firm, known for exceptional results, client satisfaction, and positive impact in the Sri Lankan legal community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="gray">
        <SectionTitle>Our Core Values</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-text-light">{value.description}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Why Choose Austin Law Chambers</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {FIRM_INFO.whyChooseUs.map((reason) => (
              <div key={reason.title} className="bg-background-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{reason.title}</h3>
                <p className="text-sm text-text-light">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Practice Area Focus */}
      <Section variant="gray">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Our Practice Areas</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {FIRM_INFO.practiceAreas.map((area) => (
              <div key={area.slug} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{area.name}</h3>
                <p className="text-sm text-text-light">{area.shortDescription}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg">
            <p className="text-text-light text-center">
              Austin Law Chambers specializes in three core practice areas: Corporate Law for guiding businesses through formation, compliance, contracts, and transactions; Commercial Litigation for robust representation in business disputes and court proceedings; and Property Law for expert conveyancing and property transaction services.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to Work With Our Team?"
        subheading="Schedule a free consultation to discuss your legal needs"
      />
    </>
  )
}
