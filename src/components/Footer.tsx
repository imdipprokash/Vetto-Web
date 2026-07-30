import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/icon.png" alt="Vetto" className="w-8 h-8 rounded-xl" />
              <span className="text-white text-base font-bold tracking-tight">Vetto</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Your all-in-one pet health manager. Keep every record organised and every reminder on time.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Navigate</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Use' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:support@vetto.org" className="hover:text-white transition-colors">
                  support@vetto.org
                </a>
              </li>
              <li className="text-xs text-gray-600 leading-relaxed mt-1">
                We typically respond within 24–48 hours on business days.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Vetto. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
            <a
              href="https://www.linkedin.com/company/vetto-org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-[#0A66C2] transition-colors"
              aria-label="Follow Vetto on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
