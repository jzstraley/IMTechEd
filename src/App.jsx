import './index.css'
import CookieConsent from './CookieConsent'

const apps = [
  {
    name: 'FellowShift',
    tagline: 'Fellowship schedule optimization made simple.',
    description: 'Auto-balanced rotation scheduling, call distribution, and ACGME compliance tracking for cardiology fellowship programs.',
    url: 'https://fellowshift.imteched.com',
    color: 'from-red-500 to-rose-600',
    shadow: 'shadow-red-500/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    pills: ['Auto-Balanced', 'ACGME Compliant', 'Gmail Integration'],
    status: 'Live',
  },
  {
    name: 'DocsRef',
    tagline: 'Medical reference, fast.',
    description: 'A searchable, personal online reference covering internal medicine, cardiology, pharmacology, and more.',
    url: 'https://www.docsref.com',
    color: 'from-amber-500 to-orange-600',
    shadow: 'shadow-amber-500/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    pills: ['Searchable', 'Cardiology', 'Pharmacology'],
    status: 'Live',
  },
  {
    name: 'EvalFlow',
    tagline: 'Rotation evaluations, streamlined.',
    description: 'Clean, simple evaluation forms for rotation feedback and milestone tracking. No more fighting with clunky legacy systems.',
    color: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-500/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    pills: ['Simple Forms', 'Milestone Tracking', 'PDF Export'],
    status: 'Coming Soon',
  },
  {
    name: 'JournalClub',
    tagline: 'Organize journal club, effortlessly.',
    description: 'Schedule presenters, assign articles, and send automated reminders. Keep your journal club running smoothly.',
    color: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    pills: ['Article Tracking', 'Auto-Reminders', 'Presenter Rotation'],
    status: 'Coming Soon',
  },
]

function AppCard({ app }) {
  const isLive = app.status === 'Live'

  return (
    <div className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300 ${app.shadow}`}>
      {/* Status badge */}
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center`}>
          {app.icon}
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          isLive
            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
            : 'bg-white/5 text-gray-500 border border-white/10'
        }`}>
          {app.status}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
      <p className="text-sm text-gray-400 mb-2">{app.tagline}</p>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{app.description}</p>

      {/* Pills */}
      <div className="flex flex-wrap gap-2 mb-5">
        {app.pills.map((pill) => (
          <span key={pill} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
            {pill}
          </span>
        ))}
      </div>

      {/* CTA */}
      {isLive ? (
        <a
          href={app.url}
          className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-br ${app.color} text-white hover:opacity-90 transition-opacity`}
        >
          Open App
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-white/5 text-gray-500 cursor-default">
          In Development
        </span>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col">
      {/* Header */}
      <header className="pt-16 pb-12 px-6 text-center">
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">
          Internal Medicine Technology &amp; Education
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          IM<span className="text-blue-400">Tech</span>Ed
        </h1>
        <p className="text-lg text-gray-400 max-w-lg mx-auto">
          Open-source tools built for training programs — by physicians, for physicians.
        </p>
      </header>

      {/* Apps grid */}
      <main className="flex-1 px-6 pb-20">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>&copy; 2026 IMTechEd</div>
          <div className="text-gray-600">By Austin Straley, DO</div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  )
}
