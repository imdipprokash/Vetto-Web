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
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
