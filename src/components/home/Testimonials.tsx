import { Section, SectionTitle, Button } from '@/components/ui'
import { Star, ExternalLink } from 'lucide-react'
import { FIRM_INFO } from '@/lib/firm-constants'

export function Testimonials() {
  const testimonials = FIRM_INFO.testimonials.map(t => ({
    name: t.name,
    area: t.practiceArea,
    rating: t.rating,
    quote: t.text
  }))

  return (
    <Section>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <p className="text-center text-text-light mb-12">Our clients speak out</p>

      {/* Mobile: Horizontal scrollable, Desktop: Grid */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-x-visible pb-4 px-4 md:px-0 md:pb-0 -mx-4 md:mx-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-auto md:flex-shrink snap-start bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-text mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-text-light">{testimonial.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a href={FIRM_INFO.social.googleReviews} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            See More Reviews on Google
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </Section>
  )
}
