import { Section, SectionTitle, CTASection } from '@/components/ui'
import { CheckCircle2 } from 'lucide-react'
import { FIRM_INFO, getPracticeAreaBySlug } from '@/lib/firm-constants'

export const metadata = {
  title: 'Corporate Law Services in Colombo | Austin Law Chambers',
  description:
    'Expert corporate law services in Sri Lanka. Company incorporation, M&A, compliance, and commercial contracts. Trusted legal advisors in Colombo.',
}

export default function CorporateLawPage() {
  const practiceArea = getPracticeAreaBySlug('corporate-law')

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  const services = [
    {
      title: 'Company Incorporation and Registration',
      items: [
        'Private limited and public companies registration',
        'eROC (e-Registrar of Companies) online filing',
        'Compliance with Companies Act No. 07 of 2007',
      ],
    },
    {
      title: 'Corporate Governance and Compliance',
      items: [
        'Board governance and director responsibilities',
        'Shareholder agreements and structures',
        'Annual filings and regulatory compliance',
        'Beneficial ownership disclosure (2025 amendments)',
      ],
    },
    {
      title: 'Mergers and Acquisitions',
      items: [
        'Due diligence and transaction structuring',
        'Negotiation and documentation',
        'Post-merger integration support',
      ],
    },
    {
      title: 'Commercial Contracts',
      items: [
        'Contract drafting, review, and negotiation',
        'Supplier and distribution agreements',
        'Service agreements and terms of business',
      ],
    },
    {
      title: 'Employment Law',
      items: [
        'Employment contracts and policies',
        'Termination and redundancy matters',
        'Workplace disputes and compliance',
      ],
    },
    {
      title: 'Intellectual Property Protection',
      items: [
        'Trademark and copyright registration',
        'IP licensing and assignments',
        'IP dispute resolution',
      ],
    },
  ]

  const whyChooseUs = [
    {
      title: 'Business-Focused Approach',
      description: 'Practical legal solutions aligned with commercial realities',
    },
    {
      title: 'Local Expertise',
      description: 'Deep knowledge of Sri Lankan corporate law and regulatory environment',
    },
    {
      title: 'Strategic Counsel',
      description: 'Proactive advice to help your business grow and mitigate risks',
    },
    {
      title: 'Responsive Service',
      description: 'Clear communication and timely responses to your legal needs',
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
            Corporate Law Services in Colombo
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-text-light">
            Austin Law Chambers provides comprehensive corporate law services to businesses across
            Sri Lanka. Our experienced team guides companies through complex legal matters, from
            formation to compliance, mergers, and beyond. We deliver strategic legal solutions
            tailored to your business objectives.
          </p>
        </div>

        {/* Services */}
        <SectionTitle>Our Corporate Law Services</SectionTitle>
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
