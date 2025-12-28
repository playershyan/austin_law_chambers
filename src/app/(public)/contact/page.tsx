import { Section, SectionTitle } from '@/components/ui'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { LazyGoogleMap } from '@/components/maps'
import { FIRM_INFO } from '@/lib/firm-constants'

export const metadata = {
  title: `Contact Us | ${FIRM_INFO.name} - Colombo Attorneys`,
  description: `Contact ${FIRM_INFO.name} in Colombo for a free consultation. Call ${FIRM_INFO.contact.phoneDisplay} or visit our office at ${FIRM_INFO.address.full}. Available ${FIRM_INFO.hours.full}`,
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: [FIRM_INFO.address.street, `${FIRM_INFO.address.city} ${FIRM_INFO.address.postalCode}, ${FIRM_INFO.address.country}`],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [FIRM_INFO.contact.phoneDisplay, 'Call us during business hours'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [FIRM_INFO.contact.email, 'We respond within 24 hours'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [FIRM_INFO.hours.weekdays, FIRM_INFO.hours.weekend],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4 text-white/70">Home &gt; Contact</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">Schedule your free consultation today</p>
        </div>
      </section>

      {/* Contact Information */}
      <Section>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info) => {
            const Icon = info.icon
            return (
              <div key={info.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-text-light">
                    {detail}
                  </p>
                ))}
              </div>
            )
          })}
        </div>
      </Section>

      {/* Map and Info */}
      <Section variant="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Send Us a Message</h2>
            <p className="text-text-light mb-6">
              Fill out the form below and we'll get back to you within 24 hours. For immediate
              assistance, please call us at {FIRM_INFO.contact.phoneDisplay}.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <ContactForm />
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Visit Our Office</h2>
            <div className="rounded-lg overflow-hidden">
              {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                <LazyGoogleMap
                  center={FIRM_INFO.address.coordinates}
                  zoom={16}
                  mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
                  height="400px"
                  markerTitle={`${FIRM_INFO.name} - Law Office`}
                />
              ) : (
                <div className="w-full h-[400px] flex items-center justify-center text-text-light">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="font-semibold">Google Maps will be displayed here</p>
                    <p className="text-sm mt-2">
                      Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in environment variables
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Get Directions Link */}
            <div className="mt-4">
              <a
                href={`https://www.google.com/maps?q=${FIRM_INFO.address.coordinates.lat},${FIRM_INFO.address.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions in Google Maps
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Contact Us Section */}
      <Section>
        <SectionTitle>Why Choose Our Firm?</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <p className="text-text-light">Practice Areas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <p className="text-text-light">Star Rated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-text-light">Free Consultations</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-text-light mb-6">
              Don't face legal challenges alone. Our experienced attorneys in Colombo are ready to fight for
              your rights and protect your future. Contact us today for your free consultation.
            </p>
            <a
              href={`tel:${FIRM_INFO.contact.phone.replace(/\D/g, '')}`}
              className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-dark transition-colors"
            >
              Call Now: {FIRM_INFO.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
