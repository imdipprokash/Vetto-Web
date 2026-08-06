const sections = [
  {
    title: "Information we collect",
    content: [
      "Account information: When you register, we collect your name, email address, and password (stored as a cryptographic hash). You may optionally sign in with Google or Facebook, in which case we receive only the profile data you permit those services to share.",
      "Pet profile data: Names, species, breed, date of birth, weight, and photographs you add for your pets.",
      "Health records: Vet visit notes, vaccination records, medication schedules, weight logs, and any file attachments (images, PDFs) you upload.",
      "Usage data: Anonymised, aggregated analytics such as feature usage frequency. We do not log individual in-app actions to an identifiable profile.",
      "Device data: Device type, operating system version, and push-notification token (required to send reminders).",
    ],
  },
  {
    title: "How we use your information",
    content: [
      "To provide and improve the Vetto service, including syncing your data across devices.",
      "To send push notifications and email reminders you have configured (vaccination due dates, medication schedules).",
      "To authenticate your identity and maintain session security.",
      "To investigate and fix bugs and performance issues.",
      "We do not use your data for targeted advertising, and we do not sell or rent your data to third parties.",
    ],
  },
  {
    title: "Data sharing",
    content: [
      "Service providers: We use vetted third-party services for cloud storage, push-notification delivery, and analytics. These providers process data solely on our behalf under strict data-processing agreements.",
      "Legal compliance: We may disclose information if required by law, court order, or to protect the rights and safety of our users.",
      "Share links: When you voluntarily share a pet's record via a share link, the recipient can view (but not edit) the data you included. You control what is shared and can revoke links at any time.",
      "We never sell, rent, or trade your personal or pet health data.",
    ],
  },
  {
    title: "Data retention",
    content: [
      "Your data is retained for as long as your account remains active.",
      "If you delete a pet profile, all associated records are permanently deleted within 30 days.",
      "If you delete your account, all your data — including pet profiles, records, and attachments — is permanently deleted within 30 days.",
      "Anonymised, aggregated analytics data may be retained indefinitely.",
    ],
  },
  {
    title: "Security",
    content: [
      "All data is transmitted over TLS (HTTPS). Data at rest is encrypted using industry-standard AES-256 encryption.",
      "Passwords are hashed using a strong, salted algorithm (bcrypt). We never store plaintext passwords.",
      "Access to production systems is restricted to authorised personnel using multi-factor authentication.",
      "Despite our efforts, no system is completely immune to security risks. Please use a strong, unique password and report any suspected vulnerability to support@vettocloud.com.",
    ],
  },
  {
    title: "Your rights",
    content: [
      "Access: You can export a copy of all your data from the app's Account Settings at any time.",
      "Correction: You can edit any information in your account or pet profiles directly in the app.",
      "Deletion: You can delete individual records, pet profiles, or your entire account from Account Settings.",
      "Portability: Exported data is provided in a machine-readable format (JSON/CSV).",
      "If you are in the European Economic Area, you have additional rights under GDPR, including the right to lodge a complaint with your local data protection authority.",
    ],
  },
  {
    title: "Children's privacy",
    content: [
      "Vetto is not directed to children under 13 (or under 16 in the EEA). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us at support@vettocloud.com.",
    ],
  },
  {
    title: "Changes to this policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of material changes by email or by an in-app notice at least 14 days before the change takes effect.",
      "Continued use of Vetto after the effective date constitutes acceptance of the updated policy.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F7FAF7] py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl text-gray-900 leading-tight mb-5">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 28 July
            2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-gray-500 text-lg leading-relaxed mb-14 pb-14 border-b border-gray-100">
            Vetto ("we", "our", "us") is committed to protecting your privacy.
            This Privacy Policy explains what information we collect, how we use
            it, and the choices you have. By using Vetto, you agree to the
            practices described here.
          </p>

          <div className="space-y-12">
            {sections.map(({ title, content }, index) => (
              <div key={title} className="flex gap-8">
                <span className="font-serif text-3xl text-brand-200 leading-none flex-shrink-0 w-8 pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif text-2xl text-gray-900 mb-4">
                    {title}
                  </h2>
                  <ul className="space-y-3">
                    {content.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-500 text-sm leading-relaxed"
                      >
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
            <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">
              Questions?
            </span>
            <h2 className="font-serif text-3xl text-gray-900 mb-4">
              We're here to help.
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              If you have concerns about this policy or how we handle your data,
              reach out — we aim to respond within 48 hours.
            </p>
            <a
              href="mailto:support@vettocloud.com"
              className="btn-primary px-8 py-3"
            >
              support@vettocloud.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
