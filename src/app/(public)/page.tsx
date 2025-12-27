import { Hero } from '@/components/home/Hero'
import { PracticeAreas } from '@/components/home/PracticeAreas'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { BlogPreview } from '@/components/home/BlogPreview'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'Austin Law Chambers | Corporate, Litigation & Property Law in Colombo',
  description:
    'Trusted Colombo law firm specializing in corporate law, commercial litigation, and property law. Expert legal services across Sri Lanka. Call 0112 337 090.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  )
}
