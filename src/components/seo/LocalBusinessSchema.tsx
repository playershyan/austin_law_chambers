'use client'

import { getStructuredData, FIRM_INFO } from '@/lib/firm-constants'

export function LocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alc.lk'

  const schema = {
    ...getStructuredData(),
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/office.jpg`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: FIRM_INFO.address.city,
      },
      {
        '@type': 'Country',
        name: FIRM_INFO.address.country,
      },
    ],
    sameAs: [
      'https://www.facebook.com/austinlawchambers',
      'https://www.linkedin.com/company/austin-law-chambers',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services',
      itemListElement: FIRM_INFO.practiceAreas.map((area) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: area.name,
          description: area.description,
        },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
