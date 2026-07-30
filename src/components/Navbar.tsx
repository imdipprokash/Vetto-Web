import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'} border-b border-gray-100`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/icon.png" alt="Vetto logo" className="w-8 h-8 rounded-xl" />
          <span className="text-lg font-bold text-gray-900 tracking-tight">Vetto</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-600' : 'text-gray-500 hover:text-gray-900'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-secondary text-sm py-2 px-5 gap-2"
        >
          <PlayIcon />
          Google Play
        </a>

        <button
          className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 pb-5">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'text-brand-600 bg-brand-50' : 'text-gray-600 hover:text-gray-900'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-secondary w-full mt-4 text-sm gap-2"
          >
            <PlayIcon />
            Google Play
          </a>
        </div>
      )}
    </header>
  )
}

function PlayIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.18.64.24.98.18l13.62-7.86-3.06-3.06-11.54 10.74zM.4 1.08C.15 1.4 0 1.85 0 2.4v19.2c0 .55.15 1 .4 1.32l.07.07 10.76-10.76v-.25L.47 1.01.4 1.08zM21.6 10.46l-3.08-1.78-3.42 3.42 3.42 3.42 3.1-1.79c.88-.51.88-1.34-.02-1.27zM4.16.18L17.78 8.04l-3.06 3.06L3.18.36a1.14 1.14 0 0 1 .98-.18z" />
    </svg>
  )
}
