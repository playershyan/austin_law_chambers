import { Container, Section } from '@/components/ui'

export const metadata = {
  title: 'Credits & Attributions | Austin Law Chambers',
  description:
    'Credits and attributions for fonts, icons, and resources used on the Austin Law Chambers website.',
}

export default function CreditsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <Container>
          <nav className="text-sm mb-4 text-white/70">Home &gt; Credits</nav>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Credits & Attributions</h1>
          <p className="text-xl text-white/90">
            Acknowledgments for resources used on this website
          </p>
        </Container>
      </section>

      {/* Credits Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <p className="text-text leading-relaxed">
                We are grateful to the creators and contributors of the following resources that help
                make our website functional and visually appealing. All resources are used in
                accordance with their respective licenses.
              </p>
            </section>

            {/* Fonts */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Fonts</h2>
              <div className="bg-background-gray p-6 rounded-lg">
                <p className="text-text leading-relaxed mb-2">
                  <strong>Engravers Old English BT</strong>
                </p>
                <p className="text-text-light text-sm">
                  Fonts made from{' '}
                  <a
                    href="http://www.webfontfree.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Web Font Free
                  </a>{' '}
                  is licensed by{' '}
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    CC BY 4.0
                  </a>
                </p>
              </div>
            </section>

            {/* Icons */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Icons</h2>
              <div className="space-y-4">
                <div className="bg-background-gray p-6 rounded-lg">
                  <p className="text-text leading-relaxed mb-2">
                    <strong>Line Icons</strong>
                  </p>
                  <p className="text-text-light text-sm">
                    <a
                      href="https://www.flaticon.com/free-icons/line"
                      title="line icons"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Line icons created by Roundicons Premium - Flaticon
                    </a>
                  </p>
                </div>

                <div className="bg-background-gray p-6 rounded-lg">
                  <p className="text-text leading-relaxed mb-2">
                    <strong>Hexagon Icons</strong>
                  </p>
                  <p className="text-text-light text-sm">
                    <a
                      href="https://www.flaticon.com/free-icons/hexagon"
                      title="hexagon icons"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Hexagon icons created by PLANBSTUDIO - Flaticon
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                Additional Resources
              </h2>
              <div className="bg-background-gray p-6 rounded-lg">
                <ul className="space-y-3 text-text-light">
                  <li>
                    <strong className="text-text">Google Fonts:</strong> Inter and Montserrat
                    typefaces -{' '}
                    <a
                      href="https://fonts.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Fonts
                    </a>
                  </li>
                  <li>
                    <strong className="text-text">Lucide Icons:</strong> Beautiful & consistent
                    icon toolkit -{' '}
                    <a
                      href="https://lucide.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Lucide
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* License Information */}
            <section className="mb-8">
              <div className="bg-blue-50 border-l-4 border-primary p-6">
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  License Compliance
                </h3>
                <p className="text-sm text-text leading-relaxed">
                  All third-party resources used on this website are properly attributed and used in
                  accordance with their respective licenses. If you believe any attribution is
                  missing or incorrect, please{' '}
                  <a href="/contact" className="text-primary hover:underline font-semibold">
                    contact us
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Development Credit */}
            <section className="mb-8">
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-text-light text-sm">
                  Designed and developed by <strong className="text-text">Holtzman Labs Software</strong>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  )
}
