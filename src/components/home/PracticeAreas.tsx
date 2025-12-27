import { Section, SectionTitle } from '@/components/ui'
import { Building2, Gavel, Home } from 'lucide-react'
import Link from 'next/link'
import { FIRM_INFO } from '@/lib/firm-constants'

export function PracticeAreas() {
  // Map icon names to actual icon components
  const iconMap = {
    Building2,
    Gavel,
    Home
  }

  const areas = FIRM_INFO.practiceAreas.map(area => ({
    icon: iconMap[area.icon as keyof typeof iconMap],
    title: area.name,
    description: area.shortDescription,
    href: `/practice-areas/${area.slug}`,
  }))

  return (
    <Section>
      <SectionTitle>Our Practice Areas</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area) => {
          const Icon = area.icon
          return (
            <div
              key={area.title}
              className="text-center p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{area.title}</h3>
              <p className="text-text-light mb-4">{area.description}</p>
              <Link href={area.href} className="text-primary font-semibold hover:text-primary-dark">
                Learn More →
              </Link>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
