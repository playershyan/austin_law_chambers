import { Section, SectionTitle, CTASection } from '@/components/ui'
import { CheckCircle2 } from 'lucide-react'
import { FIRM_INFO, getPracticeAreaBySlug } from '@/lib/firm-constants'

export const metadata = {
  title: 'Commercial Litigation Services in Colombo | Austin Law Chambers',
  description:
    'Expert commercial litigation representation in Sri Lanka. Contract disputes, arbitration, debt recovery, and business litigation in Colombo courts.',
}

export default function CommercialLitigationPage() {
  const practiceArea = getPracticeAreaBySlug('commercial-litigation')

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  const services = [
    {
      title: 'Contract Disputes',
      items: [
        'Breach of contract claims',
        'Enforcement of contractual obligations',
        'Dispute resolution and settlement negotiations',
      ],
    },
    {
      title: 'Shareholder and Partnership Disputes',
      items: [
        'Shareholder oppression and minority rights',
        'Partnership dissolution and disputes',
        'Director liability matters',
      ],
    },
    {
      title: 'Debt Recovery',
      items: [
        'Commercial debt collection',
        'Enforcement of judgments',
        'Insolvency and bankruptcy proceedings',
      ],
    },
    {
      title: 'Commercial Arbitration',
      items: [
        'Domestic and international arbitration',
        'Arbitration agreement drafting',
        'Enforcement of arbitral awards',
      ],
    },
    {
      title: 'Banking and Finance Litigation',
      items: [
        'Loan recovery and mortgage enforcement',
        'Banking disputes and securities',
        'Financial regulatory matters',
      ],
    },
  ]

  const whyChooseUs = [
    {
      title: 'Proven Track Record',
      description: 'Successful outcomes in complex commercial disputes',
    },
    {
      title: 'Strategic Litigation',
      description: 'We assess all options and pursue the most effective path',
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Focus on efficient resolution to minimize legal costs',
    },
    {
      title: 'Experienced Advocates',
      description: 'Skilled litigators with courtroom expertise',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <a href="/" className="hover:text-secondary">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/practice-areas" className="hover:text-secondary">
              Practice Areas
            </a>
            <span className="mx-2">/</span>
            <span>{practiceArea.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Commercial Litigation Services in Colombo
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-text-light">
            When business disputes arise, Austin Law Chambers provides robust litigation
            representation in courts across Sri Lanka. Our litigation team has extensive experience
            resolving complex commercial disputes through negotiation, mediation, arbitration, and
            court proceedings. We protect your business interests with strategic and effective
            advocacy.
          </p>
        </div>

        {/* Services */}
        <SectionTitle>Our Commercial Litigation Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <SectionTitle>Why Choose Austin Law Chambers</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-lg font-heading font-bold text-primary mb-2">
                {reason.title}
              </h3>
              <p className="text-text-light text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
