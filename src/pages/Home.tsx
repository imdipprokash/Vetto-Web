const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "Pet Profiles",
    desc: "Create detailed profiles for all your pets — dogs, cats, birds, rabbits and more — with photos and full health history.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Vet Visit Log",
    desc: "Record every clinic visit with date, vet name, diagnosis notes, and attach photos or PDF reports.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Vaccination Tracker",
    desc: "Stay on top of every vaccine with smart status badges — up-to-date, due soon, or overdue — plus automatic reminders.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Medication Tracker",
    desc: "Manage dosages, frequencies, and schedules. Get push reminders at the right time so no dose is ever missed.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Weight Monitoring",
    desc: "Log weight entries over time and watch trends on a clear line chart to keep your pet's health on track.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Smart Reminders",
    desc: "Never miss a vaccine, medication dose, or vet appointment. Customisable push notifications keep you one step ahead.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your account",
    desc: "Sign up free with email or Google in under a minute.",
  },
  {
    step: "02",
    title: "Add your pets",
    desc: "Build a profile for each pet with photo, breed, and birthday.",
  },
  {
    step: "03",
    title: "Log health records",
    desc: "Track visits, vaccines, meds, and weight from one dashboard.",
  },
  {
    step: "04",
    title: "Get smart reminders",
    desc: "Push notifications ensure nothing slips through the cracks.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#F7FAF7]">
        {/* Subtle background blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-brand-50/60 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="section-label">Now available on Android</span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-gray-900 leading-[1.1] mb-6">
                Your pet's health,
                <br />
                <span className="text-brand-500 italic">always in hand.</span>
              </h1>
              <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
                Vetto is the all-in-one health manager for your furry,
                feathered, and scaly family. Track records, set reminders, and
                share with your vet — effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.vettocloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2.5 py-3.5 px-7 text-base"
                >
                  <PlayIcon />
                  Google Play
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="flex-shrink-0 relative">
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <img
                    src="/icon.png"
                    alt="Vetto App"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-4 py-3 shadow-xl ring-1 ring-black/5 flex items-center gap-3">
                  <span className="text-2xl leading-none">🐾</span>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">
                      Trusted by
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      Pet Owners
                    </p>
                  </div>
                </div>
                {/* Floating badge 2 */}
                <div className="absolute -top-5 -right-6 bg-white rounded-2xl px-4 py-3 shadow-xl ring-1 ring-black/5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">
                      Records
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      Up-to-date
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 bg-white" id="features">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-xl mb-14">
            <span className="section-label">Everything you need</span>
            <h2 className="section-heading">Complete pet health, one app.</h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              From first vaccines to senior care, Vetto covers every chapter of
              your pet's health story.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 bg-[#F7FAF7]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-xl mb-16">
            <span className="section-label">Simple setup</span>
            <h2 className="section-heading">Up and running in minutes.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col">
                <span className="font-serif text-6xl text-brand-200 leading-none mb-4">
                  {step}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section id="download" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="bg-brand-500 rounded-3xl px-8 py-16 md:px-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <span className="text-brand-200 text-xs font-semibold uppercase tracking-widest mb-4 block">
                Free download
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
                Start caring smarter today.
              </h2>
              <p className="text-brand-100 text-lg mb-8 max-w-md">
                Join thousands of pet owners keeping their companions healthy
                and happy. Available now on Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.vettocloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full px-6 py-3.5 text-sm transition-all duration-200 shadow-lg"
                >
                  <PlayIcon />
                  <span>
                    <span className="block text-[10px] font-normal text-gray-500 text-left leading-none">
                      Get it on
                    </span>
                    <span className="block text-sm font-bold leading-tight">
                      Google Play
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/20">
                <img
                  src="/icon.png"
                  alt="Vetto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-gray-400 text-sm">
            Questions?{" "}
            <a
              href="mailto:support@vettocloud.com"
              className="text-brand-600 hover:underline"
            >
              support@vettocloud.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function PlayIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3.18 23.76c.3.18.64.24.98.18l13.62-7.86-3.06-3.06-11.54 10.74zM.4 1.08C.15 1.4 0 1.85 0 2.4v19.2c0 .55.15 1 .4 1.32l.07.07 10.76-10.76v-.25L.47 1.01.4 1.08zM21.6 10.46l-3.08-1.78-3.42 3.42 3.42 3.42 3.1-1.79c.88-.51.88-1.34-.02-1.27zM4.16.18L17.78 8.04l-3.06 3.06L3.18.36a1.14 1.14 0 0 1 .98-.18z" />
    </svg>
  );
}
