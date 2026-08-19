import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react'
import { HeroSection } from './features/about/components/HeroSection'
import { AboutSection } from './features/about/components/AboutSection'
import { ExperienceSection } from './features/about/components/ExperienceSection'
import { CasesSection } from './features/cases/components/CasesSection'
import { ProjectsMapSection } from './features/projects/components/ProjectsMapSection'
import { VorSection } from './features/about/components/VorSection'
import { SystemsSection } from './features/about/components/SystemsSection'
import { WorkflowSection } from './features/about/components/WorkflowSection'
import { TechStackSection } from './features/about/components/TechStackSection'
import { MetricsSection } from './features/about/components/MetricsSection'
import { ToolkitSection } from './features/about/components/ToolkitSection'
import { CertificationsSection } from './features/about/components/CertificationsSection'
import { TimelineSection } from './features/about/components/TimelineSection'
import { TestimonialsSection } from './features/about/components/TestimonialsSection'
import { FaqSection } from './features/about/components/FaqSection'
import { ChatSection } from './features/chats/components/ChatSection'
import { ContactsSection } from './features/about/components/ContactsSection'
import { LineNav } from './components/ui/LineNav'
import { ScrollReveal } from './components/ui/ScrollReveal'

type Theme = 'dark' | 'light'

const NAV_LINKS = [
  { label: 'Обо мне', id: 'about' },
  { label: 'Опыт', id: 'experience' },
  { label: 'Карта', id: 'map' },
  { label: 'Кейсы', id: 'cases' },
  { label: 'ВОР', id: 'vor' },
  { label: 'Системы', id: 'systems' },
  { label: 'Процесс', id: 'workflow' },
  { label: 'Стек', id: 'techstack' },
  { label: 'Метрики', id: 'metrics' },
  { label: 'Шаблоны', id: 'toolkit' },
  { label: 'Квалификация', id: 'certifications' },
  { label: 'Хронология', id: 'timeline' },
  { label: 'Отзывы', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Чат', id: 'chat' },
  { label: 'Контакты', id: 'contacts' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as Theme | null
      if (saved === 'light' || saved === 'dark') return saved
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
      body.className = 'theme-dark'
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      body.className = 'theme-light'
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const scrollTo = (id: string) => {
    const el = id === '' ? document.documentElement : document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-250">

      {/* ───── ElevenLabs Top Nav Bar (Clean, Minimalist 50-60px) ───── */}
      <header className="sticky top-0 z-50 header-glass">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Brand Wordmark */}
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(''); }} className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xs font-mono">
                АН
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-foreground leading-none">Артемий Николаев</span>
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Инженер ПТО / Exon</span>
              </div>
            </a>

            {/* Desktop Nav Strip (Ghost Link Buttons) */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {NAV_LINKS.slice(0, 11).map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="btn-ghost"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Header Right: Theme Switcher & Actions */}
            <div className="flex items-center gap-3">
              
              {/* Theme Toggle (Pill Button) */}
              <button
                onClick={toggleTheme}
                className="btn-pill-outlined text-xs py-1.5 px-3.5 cursor-pointer"
                aria-label="Переключить тему оформления"
                title={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={13} className="text-amber-400" />
                    <span className="hidden sm:inline">Светлая</span>
                  </>
                ) : (
                  <>
                    <Moon size={13} className="text-foreground" />
                    <span className="hidden sm:inline">Тёмная</span>
                  </>
                )}
              </button>

              {/* Primary CTA Pill */}
              <button
                onClick={() => scrollTo('contacts')}
                className="btn-pill-filled hidden sm:inline-flex text-xs py-1.5 px-4 cursor-pointer"
              >
                Связаться
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-foreground cursor-pointer"
                aria-label="Меню"
              >
                {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <nav className="xl:hidden py-4 border-t border-border space-y-1 bg-background">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                {NAV_LINKS.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-card rounded-full transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={12} className="text-muted-foreground/40" />
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* ───── Floating Vertical LineNav ───── */}
      <LineNav
        sections={[
          { id: 'about', label: 'Обо мне' },
          { id: 'experience', label: 'Опыт' },
          { id: 'map', label: 'Карта объектов' },
          { id: 'cases', label: 'Кейсы' },
          { id: 'vor', label: 'ВОР (Шахматка)' },
          { id: 'systems', label: 'Системы' },
          { id: 'workflow', label: 'Процесс' },
          { id: 'techstack', label: 'Стек' },
          { id: 'metrics', label: 'Метрики' },
          { id: 'toolkit', label: 'Шаблоны' },
          { id: 'certifications', label: 'Квалификация' },
          { id: 'timeline', label: 'Хронология' },
          { id: 'testimonials', label: 'Отзывы' },
          { id: 'faq', label: 'Вопросы' },
          { id: 'chat', label: 'Переписка' },
          { id: 'contacts', label: 'Контакты' },
        ]}
      />

      {/* ───── Main Editorial Flow (Max-Width 1280px) ───── */}
      <main className="max-w-[1280px] mx-auto px-6 sm:px-8 py-12">
        <div className="space-y-28">

          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. About Section */}
          <ScrollReveal delay={0.1}>
            <div className="hairline-divider mb-16" />
            <div id="about">
              <AboutSection />
            </div>
          </ScrollReveal>

          {/* 3. Experience Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="experience">
              <ExperienceSection />
            </div>
          </ScrollReveal>

          {/* 4. Interactive Map */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="map">
              <ProjectsMapSection theme={theme} />
            </div>
          </ScrollReveal>

          {/* 5. Cases Section */}
          <ScrollReveal delay={0.1}>
            <div className="hairline-divider mb-16" />
            <div id="cases">
              <CasesSection />
            </div>
          </ScrollReveal>

          {/* 6. Interactive VOR */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="vor">
              <VorSection />
            </div>
          </ScrollReveal>

          {/* 7. Systems Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="systems">
              <SystemsSection />
            </div>
          </ScrollReveal>

          {/* 8. Workflow Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="workflow">
              <WorkflowSection />
            </div>
          </ScrollReveal>

          {/* 9. Tech Stack */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="techstack">
              <TechStackSection />
            </div>
          </ScrollReveal>

          {/* 10. Metrics Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="metrics">
              <MetricsSection />
            </div>
          </ScrollReveal>

          {/* 11. Toolkit Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="toolkit">
              <ToolkitSection />
            </div>
          </ScrollReveal>

          {/* 12. Certifications Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="certifications">
              <CertificationsSection />
            </div>
          </ScrollReveal>

          {/* 13. Timeline Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="timeline">
              <TimelineSection />
            </div>
          </ScrollReveal>

          {/* 14. Testimonials Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="testimonials">
              <TestimonialsSection />
            </div>
          </ScrollReveal>

          {/* 15. FAQ Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="faq">
              <FaqSection />
            </div>
          </ScrollReveal>

          {/* 16. Chat Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="chat">
              <ChatSection />
            </div>
          </ScrollReveal>

          {/* 17. Contact Section */}
          <ScrollReveal>
            <div className="hairline-divider mb-16" />
            <div id="contacts">
              <ContactsSection />
            </div>
          </ScrollReveal>

        </div>
      </main>

      {/* ───── ElevenLabs Footer ───── */}
      <footer className="border-t border-border footer-bg py-10 mt-28 relative z-10 text-xs text-muted-foreground font-mono">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; 2026 Николаев Артемий — Инженер ПТО / Exon / Автоматизация ИД</div>
          <div className="flex items-center gap-6">
            <a href="mailto:artyomnikolae7@gmail.com" className="hover:text-foreground transition-colors">Email</a>
            <a href="https://t.me/Amantle_x" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Telegram (@Amantle_x)</a>
            <a href="https://github.com/artyomnikolae7-sys" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
