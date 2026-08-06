const values = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Pet-first design",
    desc: "Every feature is built around what pet owners actually need — not what looks good in a pitch deck.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Privacy by default",
    desc: "Your pet's health data belongs to you. We never sell it, share it, or use it for advertising.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Simple & intuitive",
    desc: "Logging a vet visit should take seconds, not minutes. We obsess over reducing friction at every step.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "Proactive reminders",
    desc: "We'd rather remind you a day early than let a vaccine lapse or a dose be missed.",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F7FAF7] py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">
            Our mission
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl text-gray-900 leading-tight mb-6">
            Built by pet owners,
            <br />
            <span className="text-brand-500 italic">for pet owners.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
            We're a small team on a mission to make pet healthcare simpler, more
            organised, and less stressful — for owners and vets alike. Currently
            available on Android.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">
            Our story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-10">
            How Vetto began.
          </h2>
          <div className="space-y-5 text-gray-500 text-base leading-relaxed">
            <p>
              Vetto started when our founder tried to recall which vaccines
              their dog Biscuit had received — and couldn't. The records were
              split across three different vet clinics, two PDF emails, and a
              crumpled piece of paper in a kitchen drawer.
            </p>
            <p>
              That moment of frustration became a product. We asked dozens of
              pet owners about their biggest pain points and heard the same
              themes over and over: missed reminders, lost documents, no easy
              way to share records with a new vet, and zero visibility into a
              pet's health history at a glance.
            </p>
            <p>
              Vetto solves all of it. We built a mobile-first app that lets you
              log every vet visit, track every vaccination and medication, and
              monitor weight — all in one place, always accessible, always
              up-to-date.
            </p>
            <p>
              We're still early, we're still learning, and we're deeply grateful
              to every pet owner who has trusted us with their companion's
              health records. We take that trust seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F7FAF7]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-xl mb-14">
            <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">
              Our principles
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-8 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4 block">
            Say hello
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-5">
            We'd love to hear from you.
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
            We read every email personally — whether it's a bug report, a
            feature idea, or just a photo of your pet.
          </p>
          <a
            href="mailto:support@vettocloud.com"
            className="btn-primary text-base px-8 py-3.5"
          >
            support@vettocloud.com
          </a>
        </div>
      </section>
    </div>
  );
}
