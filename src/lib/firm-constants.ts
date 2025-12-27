/**
 * Austin Law Chambers - Firm Information Constants
 * Centralized firm details for consistent use across the application
 */

export const FIRM_INFO = {
  name: "Austin Law Chambers",
  legalName: "Austin Law Chambers",
  tagline: "Trusted Legal Partners in Colombo",

  address: {
    street: "109 - 1/1 Hultsdorf St",
    city: "Colombo",
    postalCode: "01200",
    region: "Western Province",
    country: "Sri Lanka",
    countryCode: "LK",
    full: "109 - 1/1 Hultsdorf St, Colombo 01200, Sri Lanka",
  },

  contact: {
    phone: "+94112337090",
    phoneDisplay: "0112 337 090",
    email: "info@alc.lk",
  },

  hours: {
    weekdays: "Monday - Saturday: 8:00 AM - 5:00 PM",
    weekend: "Closed Sunday",
    full: "Monday - Saturday: 8:00 AM - 5:00 PM (Closed Sunday)",
    schema: "Mo-Sa 08:00-17:00", // For schema.org format
  },

  social: {
    googleReviews:
      process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ||
      "https://www.google.com/search?q=Austin+Law+Chambers+Reviews",
  },

  description: {
    short:
      "A reputable legal firm based in Colombo, offering comprehensive legal solutions across corporate law, commercial litigation, and property law.",
    long: "Austin Law Chambers is a leading legal practice based in the heart of Colombo, Sri Lanka. Our firm is comprised of accomplished lawyers, regularly recognized for their integrity and ability to secure results. Over the years, we have carefully constructed a team of powerful advocates and advisors that our clients can trust.",
  },

  practiceAreas: [
    {
      name: "Corporate Law",
      slug: "corporate-law",
      shortDescription: "Comprehensive corporate legal services for businesses",
      description:
        "Austin Law Chambers provides comprehensive corporate law services to businesses across Sri Lanka. Our experienced team guides companies through complex legal matters, from formation to compliance, mergers, and beyond.",
      icon: "Building2", // Lucide icon name
      services: [
        "Company Incorporation and Registration",
        "Corporate Governance and Compliance",
        "Mergers and Acquisitions",
        "Commercial Contracts",
        "Employment Law",
        "Intellectual Property Protection",
      ],
    },
    {
      name: "Commercial Litigation",
      slug: "commercial-litigation",
      shortDescription: "Robust representation in business disputes",
      description:
        "When business disputes arise, Austin Law Chambers provides robust litigation representation in courts across Sri Lanka. Our litigation team has extensive experience resolving complex commercial disputes through negotiation, mediation, arbitration, and court proceedings.",
      icon: "Gavel",
      services: [
        "Contract Disputes",
        "Shareholder and Partnership Disputes",
        "Debt Recovery",
        "Commercial Arbitration",
        "Banking and Finance Litigation",
      ],
    },
    {
      name: "Property Law",
      slug: "property-law",
      shortDescription: "Expert guidance for property transactions",
      description:
        "Austin Law Chambers offers comprehensive property law services for individuals and businesses in Colombo and throughout Sri Lanka. From property purchases and sales to leases and development projects, we provide expert legal guidance.",
      icon: "Home",
      services: [
        "Property Conveyancing",
        "Leases and Tenancies",
        "Property Development",
        "Title Registration",
        "Mortgage and Financing",
        "Property Disputes",
      ],
    },
  ],

  testimonials: [
    {
      name: "Rajesh P.",
      rating: 5,
      text: "Austin Law Chambers handled our company incorporation with exceptional professionalism. The team made the entire process seamless and provided clear guidance every step of the way. Highly recommended for corporate legal services.",
      practiceArea: "Corporate Law",
    },
    {
      name: "Dilini S.",
      rating: 5,
      text: "Excellent service in resolving our commercial property dispute. The lawyers at Austin Law Chambers were knowledgeable, responsive, and achieved a favorable outcome. Very satisfied with their representation.",
      practiceArea: "Commercial Litigation",
    },
    {
      name: "Pradeep M.",
      rating: 5,
      text: "Professional and efficient conveyancing services. Austin Law Chambers handled our property purchase in Colombo with great attention to detail. They explained everything clearly and ensured a smooth transaction.",
      practiceArea: "Property Law",
    },
    {
      name: "Chaminda K.",
      rating: 5,
      text: "Outstanding legal support for our business merger. The team's strategic approach and deep understanding of corporate law made a complex transaction manageable. Truly grateful for their expertise.",
      practiceArea: "Corporate Law",
    },
  ],

  values: [
    {
      name: "Excellence",
      description:
        "We maintain the highest standards in legal practice and client service, constantly refining our expertise to serve our clients better.",
    },
    {
      name: "Integrity",
      description:
        "Honesty and ethical conduct are the foundation of everything we do. We build lasting relationships based on trust and transparency.",
    },
    {
      name: "Client Focus",
      description:
        "Your success is our priority. We listen carefully, understand your unique needs, and deliver solutions tailored to your objectives.",
    },
    {
      name: "Strategic Thinking",
      description:
        "We provide thoughtful, business-minded legal advice that balances legal precision with commercial reality.",
    },
    {
      name: "Results-Driven",
      description:
        "We are committed to achieving the best possible outcomes for our clients, whether in the boardroom or courtroom.",
    },
  ],

  whyChooseUs: [
    {
      title: "Experienced Team",
      description:
        "Our lawyers bring deep knowledge of Sri Lankan law across corporate, litigation, and property matters",
    },
    {
      title: "Proven Track Record",
      description:
        "Consistent success in achieving favorable outcomes for our clients",
    },
    {
      title: "Local Expertise",
      description:
        "Comprehensive understanding of the Colombo legal landscape and regulatory environment",
    },
    {
      title: "Personalized Service",
      description:
        "Every client receives individual attention and customized legal strategies",
    },
    {
      title: "Clear Communication",
      description: "We explain complex legal matters in understandable terms",
    },
    {
      title: "Strategic Approach",
      description:
        "We align our legal advice with your business and personal goals",
    },
  ],
} as const;

// Helper functions
export const getPracticeAreaBySlug = (slug: string) => {
  return FIRM_INFO.practiceAreas.find((area) => area.slug === slug);
};

export const getTestimonialsByPracticeArea = (practiceArea: string) => {
  return FIRM_INFO.testimonials.filter(
    (testimonial) => testimonial.practiceArea === practiceArea
  );
};

// Schema.org structured data
export const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: FIRM_INFO.name,
  description: FIRM_INFO.description.long,
  address: {
    "@type": "PostalAddress",
    streetAddress: FIRM_INFO.address.street,
    addressLocality: FIRM_INFO.address.city,
    addressRegion: FIRM_INFO.address.region,
    postalCode: FIRM_INFO.address.postalCode,
    addressCountry: FIRM_INFO.address.countryCode,
  },
  telephone: FIRM_INFO.contact.phone,
  email: FIRM_INFO.contact.email,
  openingHours: FIRM_INFO.hours.schema,
  areaServed: {
    "@type": "City",
    name: FIRM_INFO.address.city,
  },
  serviceType: FIRM_INFO.practiceAreas.map((area) => area.name),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: FIRM_INFO.testimonials.length.toString(),
  },
});
