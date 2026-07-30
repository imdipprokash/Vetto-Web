const sections = [
  {
    title: 'Acceptance of terms',
    content: [
      'By downloading, installing, or using Vetto ("the App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree, do not use the App.',
      'We may update these Terms at any time. Material changes will be communicated by email or in-app notice at least 14 days before taking effect. Continued use after the effective date constitutes acceptance.',
    ],
  },
  {
    title: 'Eligibility',
    content: [
      'You must be at least 13 years old (or 16 in the EEA) to use Vetto.',
      'By using the App, you represent that you have the legal capacity to enter into a binding agreement.',
    ],
  },
  {
    title: 'Account registration',
    content: [
      'You must provide accurate, complete, and up-to-date information when creating an account.',
      'You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.',
      'You must notify us immediately at support@vetto.org if you suspect unauthorised use of your account.',
      'We reserve the right to suspend or terminate accounts that violate these Terms.',
    ],
  },
  {
    title: 'Permitted use',
    content: [
      'You may use Vetto solely for personal, non-commercial purposes — managing health records for pets you own or care for.',
      'You must not use the App to: store illegal content; attempt to breach or test the security of our systems; reverse-engineer, decompile, or disassemble any part of the App; or impersonate another user or entity.',
      'You must not use automated tools (bots, scrapers) to access or extract data from the App.',
    ],
  },
  {
    title: 'Your content',
    content: [
      'You retain ownership of all data and files you upload to Vetto (pet profiles, health records, attachments).',
      'By uploading content, you grant Vetto a limited, non-exclusive licence to store, display, and process that content solely to provide the App\'s functionality.',
      'You are solely responsible for the accuracy of health information you record. Vetto does not verify veterinary data.',
      'You must not upload content that infringes third-party intellectual property rights or contains illegal material.',
    ],
  },
  {
    title: 'Not a veterinary service',
    content: [
      'Vetto is a record-keeping and reminder tool. It does not provide veterinary advice, diagnosis, or treatment recommendations.',
      'Information in the App is not a substitute for professional veterinary consultation. Always seek the advice of a qualified vet for your pet\'s health concerns.',
      'We are not liable for any decisions made on the basis of information recorded in the App.',
    ],
  },
  {
    title: 'Subscriptions and payments',
    content: [
      'Vetto offers a free tier with core features. Premium features, if offered, will be clearly described with pricing before purchase.',
      'Subscriptions are billed through Google Play (Android) and are subject to that platform\'s refund policies.',
      'We reserve the right to modify pricing with at least 30 days\' notice to existing subscribers.',
    ],
  },
  {
    title: 'Intellectual property',
    content: [
      'The Vetto name, logo, design, and all original content created by us are protected by copyright, trademark, and other intellectual property laws.',
      'Nothing in these Terms grants you any right to use our branding or intellectual property without prior written consent.',
    ],
  },
  {
    title: 'Disclaimers',
    content: [
      'The App is provided "as is" and "as available" without warranties of any kind, express or implied.',
      'We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.',
      'To the fullest extent permitted by law, Vetto disclaims all implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    title: 'Limitation of liability',
    content: [
      'To the maximum extent permitted by applicable law, Vetto and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — the App.',
      'Our total liability to you for any claim arising out of or relating to these Terms or the App shall not exceed the amount you paid to us in the 12 months preceding the claim, or £50 (whichever is greater).',
    ],
  },
  {
    title: 'Termination',
    content: [
      'You may delete your account at any time from the Account Settings screen.',
      'We may suspend or terminate your account if you materially breach these Terms, with or without notice depending on severity.',
      'On termination, your right to use the App ceases immediately. Sections that by their nature should survive (intellectual property, disclaimers, limitation of liability) will continue to apply.',
    ],
  },
  {
    title: 'Governing law',
    content: [
      'These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
      'If any provision of these Terms is found unenforceable, the remaining provisions remain in full force.',
    ],
  },
]

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F7FAF7] py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="font-serif text-5xl sm:text-6xl text-gray-900 leading-tight mb-5">Terms of Use</h1>
          <p className="text-gray-400 text-sm">
            Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 28 July 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-gray-500 text-lg leading-relaxed mb-14 pb-14 border-b border-gray-100">
            Please read these Terms of Use carefully before using Vetto. They form a binding agreement between you and Vetto regarding your use of the application and website.
          </p>

          <div className="space-y-12">
            {sections.map(({ title, content }, index) => (
              <div key={title} className="flex gap-8">
                <span className="font-serif text-3xl text-brand-200 leading-none flex-shrink-0 w-8 pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-serif text-2xl text-gray-900 mb-4">{title}</h2>
                  <ul className="space-y-3">
                    {content.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-500 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-brand-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">Questions?</span>
            <h2 className="font-serif text-3xl text-gray-900 mb-4">We're here to help.</h2>
            <p className="text-gray-500 text-sm mb-6">For questions about these Terms, reach out — we aim to respond within 48 hours on business days.</p>
            <a href="mailto:support@vetto.org" className="btn-primary px-8 py-3">
              support@vetto.org
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
