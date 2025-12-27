import { Section, SectionTitle, CTASection } from '@/components/ui'
import { CheckCircle2 } from 'lucide-react'
import { FIRM_INFO, getPracticeAreaBySlug } from '@/lib/firm-constants'

export const metadata = {
  title: 'Property Law Services in Colombo | Austin Law Chambers',
  description:
    'Expert property law services in Sri Lanka. Conveyancing, leases, property development, title registration, mortgages, and dispute resolution in Colombo.',
}

export default function PropertyLawPage() {
  const practiceArea = getPracticeAreaBySlug('property-law')

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  const services = [
    {
      title: 'Property Conveyancing',
      items: [
        'Purchase and sale of residential and commercial properties',
        'Title searches and due diligence',
        'Transfer of ownership and registration',
      ],
    },
    {
      title: 'Leases and Tenancies',
      items: [
        'Commercial and residential lease agreements',
        'Landlord and tenant disputes',
        'Lease renewals and terminations',
      ],
    },
    {
      title: 'Property Development',
      items: [
        'Development agreements and joint ventures',
        'Land subdivision and approvals',
        'Construction contracts and disputes',
      ],
    },
    {
      title: 'Title Registration',
      items: [
        'Registration under the Registration of Title Act No. 21 of 1998',
        'Rectification of title defects',
        'Adverse possession claims',
      ],
    },
    {
      title: 'Mortgage and Financing',
      items: [
        'Mortgage documentation and registration',
        'Refinancing and discharge of mortgages',
        'Security documentation for lenders',
      ],
    },
    {
      title: 'Property Disputes',
      items: [
        'Boundary disputes and encroachments',
        'Ownership claims and quiet title actions',
        'Partition actions and co-ownership matters',
      ],
    },
  ]

  const whyChooseUs = [
    {
      title: 'Thorough Due Diligence',
      description: 'We identify potential issues before they become problems',
    },
    {
      title: 'Seamless Transactions',
      description: 'Efficient handling of all documentation and registrations',
    },
    {
      title: 'Local Knowledge',
      description: 'Familiarity with Colombo property market and local authorities',
    },
    {
      title: 'Client Protection',
      description: 'Safeguarding your interests throughout the transaction',
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
            Property Law Services in Colombo
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-text-light">
            Austin Law Chambers offers comprehensive property law services for individuals and
            businesses in Colombo and throughout Sri Lanka. From property purchases and sales to
            leases and development projects, we provide expert legal guidance. Our team ensures your
            property transactions are secure, compliant, and properly documented.
          </p>
        </div>

        {/* Services */}
        <SectionTitle>Our Property Law Services</SectionTitle>
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
