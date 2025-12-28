import type { Metadata } from 'next'
import { Inter, Montserrat, UnifrakturMaguntia } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { GoogleMapsScript } from '@/components/maps/GoogleMapsScript'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

const unifrakturMaguntia = UnifrakturMaguntia({
  variable: '--font-gothic',
  subsets: ['latin'],
  weight: '400',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alc.lk'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Austin Law Chambers | Colombo Attorneys & Legal Services',
    template: '%s | Austin Law Chambers',
  },
  description:
    'Austin Law Chambers is a leading legal firm in Colombo, Sri Lanka specializing in Corporate Law, Commercial Litigation, and Property Law. Expert legal solutions for businesses and individuals.',
  keywords: [
    'Colombo attorneys',
    'Sri Lanka lawyers',
    'corporate law',
    'commercial litigation',
    'property law',
    'legal services Sri Lanka',
    'Colombo legal services',
  ],
  authors: [{ name: 'Austin Law Chambers' }],
  creator: 'Austin Law Chambers',
  publisher: 'Austin Law Chambers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Austin Law Chambers',
    title: 'Austin Law Chambers | Colombo Attorneys & Legal Services',
    description:
      'Austin Law Chambers is a leading legal firm in Colombo, Sri Lanka specializing in Corporate Law, Commercial Litigation, and Property Law. Expert legal solutions for businesses and individuals.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Austin Law Chambers - Colombo Legal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin Law Chambers | Colombo Attorneys & Legal Services',
    description:
      'Austin Law Chambers is a leading legal firm in Colombo, Sri Lanka specializing in Corporate Law, Commercial Litigation, and Property Law.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${unifrakturMaguntia.variable} font-sans antialiased`}>
        {googleMapsApiKey && <GoogleMapsScript apiKey={googleMapsApiKey} />}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
