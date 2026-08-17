import { useState } from 'react'

const features = {
  free: [
    '1 pet only',
    'Basic health records',
    'Vaccination tracking',
    'Vet visit log',
    'Weight tracking',
  ],
  pro: [
    'Unlimited pets',
    'Full health records',
    'Vaccination & deworming reminders',
    'Vet visit log & history',
    'Weight & growth charts',
    'Medication reminders',
    'Document & photo storage',
    'Health report export & logs',
    'Priority support',
  ],
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  const monthlyPrice = 4.99
  const yearlyMonthlyPrice = 3.99
  const yearlyTotal = (yearlyMonthlyPrice * 12).toFixed(2)

  return (
    <div className="py-20 px-5 sm:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="section-label">Pricing</span>
        <h1 className="section-heading mb-4">Simple, transparent pricing</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Start free and upgrade when you need more. No hidden fees, cancel anytime.
        </p>

        <div className="inline-flex items-center gap-3 mt-8 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setYearly(false)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              !yearly ? 'bg-white shadow text-gray-900' : 'text-gray-500'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              yearly ? 'bg-white shadow text-gray-900' : 'text-gray-500'
            }`}
          >
            Yearly
            <span className="text-xs bg-brand-500 text-white px-2 py-0.5 rounded-full font-semibold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Free Plan */}
        <div className="feature-card flex flex-col">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Basic</h2>
            <p className="text-gray-500 text-sm">Perfect for getting started</p>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-bold text-gray-900">$0</span>
            <span className="text-gray-400 ml-2">/ forever</span>
          </div>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {features.free.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://play.google.com/store/apps/details?id=com.vettocloud"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full"
          >
            Get Started Free
          </a>
        </div>

        {/* Pro Plan */}
        <div className="relative bg-brand-500 rounded-3xl p-7 flex flex-col text-white overflow-hidden">
          <div className="absolute top-5 right-5">
            <span className="text-xs bg-white text-brand-600 px-3 py-1 rounded-full font-bold uppercase tracking-wide">
              Popular
            </span>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-1">Pro</h2>
            <p className="text-brand-100 text-sm">Everything your pet deserves</p>
          </div>
          <div className="mb-1">
            <span className="text-5xl font-bold">
              ${yearly ? yearlyMonthlyPrice : monthlyPrice}
            </span>
            <span className="text-brand-200 ml-2">/ mo</span>
          </div>
          {yearly && (
            <p className="text-brand-200 text-sm mb-4">
              Billed ${yearlyTotal} / year
            </p>
          )}
          {!yearly && <div className="mb-4" />}
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {features.pro.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-white/90">
                <svg className="w-4 h-4 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://play.google.com/store/apps/details?id=com.vettocloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-brand-600 font-semibold rounded-full px-6 py-3 hover:bg-brand-50 transition-all duration-200 w-full"
          >
            Get Pro
          </a>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        All prices in USD · Secure payment · Cancel anytime
      </p>
    </div>
  )
}
