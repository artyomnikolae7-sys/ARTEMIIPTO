import { useState } from 'react'
import { HeroSection } from './features/about/components/HeroSection'
import { AboutSection } from './features/about/components/AboutSection'
import { ExperienceSection } from './features/about/components/ExperienceSection'
import { CasesSection } from './features/cases/components/CasesSection'
import { ProjectsMapSection } from './features/projects/components/ProjectsMapSection'
import { TechStackSection } from './features/about/components/TechStackSection'
import { MetricsSection } from './features/about/components/MetricsSection'
import { ContactsSection } from './features/about/components/ContactsSection'
import { ScrollReveal } from './components/ui/ScrollReveal'
import { ReactLenis } from 'lenis/react'

const NAV_LINKS = [
  { label: 'Обо мне', id: 'about' },
  { label: 'Опыт', id: 'experience' },
  { label: 'Карта', id: 'map' },
  { label: 'Кейсы', id: 'cases' },
  { label: 'Контакты', id: 'contacts' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = id === '' ? document.documentElement : document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="min-h-screen bg-background text-foreground">

        {/* ───── Header ───── */}
        <header className="sticky top-0 z-50 header-glass border-b border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex justify-between items-center h-14">

              {/* Logo */}
              <a href="#" onClick={() => scrollTo('')} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-semibold text-xs font-mono tracking-tight">
                  АН
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-sm font-semibold tracking-tight text-foreground leading-none">Артемий Николаев</h1>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Инженер ПТО</p>
                </div>
              </a>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="px-3 py-1.5 text-[13px] font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
                aria-label="Меню"
              >
                <span className={`block w-5 h-[1.5px] bg-foreground transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-foreground transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-foreground transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
              </button>
            </div>

            {/* Mobile nav dropdown */}
            {mobileMenuOpen && (
              <nav className="md:hidden pb-4 pt-2 border-t border-border space-y-1">
                {NAV_LINKS.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] rounded-md transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            )}
          </div>
        </header>

        {/* ───── Main Content ───── */}
        <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="space-y-28">

            {/* Hero */}
            <HeroSection />

            {/* About */}
            <ScrollReveal delay={0.1}>
              <div className="rule-divider mb-16" />
              <div id="about">
                <AboutSection />
              </div>
            </ScrollReveal>

            {/* Experience */}
            <ScrollReveal>
              <div className="rule-divider mb-16" />
              <div id="experience">
                <ExperienceSection />
              </div>
            </ScrollReveal>

            {/* Interactive Map */}
            <ScrollReveal>
              <div className="rule-divider mb-16" />
              <div id="map">
                <ProjectsMapSection theme="dark" />
              </div>
            </ScrollReveal>

            {/* Cases */}
            <ScrollReveal delay={0.1}>
              <div className="rule-divider mb-16" />
              <div id="cases">
                <CasesSection />
              </div>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal>
              <div className="rule-divider mb-16" />
              <div id="techstack">
                <TechStackSection />
              </div>
            </ScrollReveal>

            {/* Metrics */}
            <ScrollReveal>
              <div className="rule-divider mb-16" />
              <div id="metrics">
                <MetricsSection />
              </div>
            </ScrollReveal>

            {/* Contacts */}
            <ScrollReveal>
              <div className="rule-divider mb-16" />
              <div id="contacts">
                <ContactsSection />
              </div>
            </ScrollReveal>
          </div>
        </main>

        {/* ───── Footer ───── */}
        <footer className="border-t border-border footer-bg py-8 mt-20 text-xs text-muted-foreground font-mono">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>© 2026 Николаев Артемий</div>
            <div className="flex gap-6">
              <a href="mailto:artyomnikolae7@gmail.com" className="hover:text-foreground transition-colors">Email</a>
              <a href="https://t.me/Amantle_x" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
              <a href="https://github.com/artyomnikolae7-sys" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  )
}
