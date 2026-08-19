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
import { ReactLenis } from 'lenis/react'

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
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
    }
    return 'dark'
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
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* ───── Top Sticky Header (Structured Grid) ───── */}
        <header className="sticky top-0 z-50 header-glass border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(''); }} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md font-mono">
                  АН
                </div>
                <div>
                  <h1 className="text-sm sm:text-base font-bold tracking-tight text-foreground leading-none">Артемий Николаев</h1>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider font-semibold">Инженер ПТО / Exon</p>
                </div>
              </a>

              {/* Desktop Nav Strip */}
              <nav className="hidden xl:flex items-center gap-1 bg-secondary/60 p-1 rounded-xl border border-border">
                {NAV_LINKS.slice(0, 11).map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="px-2.5 py-1.5 text-xs font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Header Right: Theme Toggle & Mobile Trigger */}
              <div className="flex items-center gap-3">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary hover:bg-muted text-foreground transition-all cursor-pointer text-xs font-mono shadow-sm"
                  aria-label="Переключить тему оформления"
                  title={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun size={14} className="text-amber-400" />
                      <span className="hidden sm:inline">Светлая</span>
                    </>
                  ) : (
                    <>
                      <Moon size={14} className="text-sky-600" />
                      <span className="hidden sm:inline">Тёмная</span>
                    </>
                  )}
                </button>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="xl:hidden p-2 rounded-lg border border-border bg-secondary text-foreground hover:bg-muted transition-colors cursor-pointer"
                  aria-label="Меню"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <nav className="xl:hidden py-4 border-t border-border space-y-1 bg-background/95 backdrop-blur-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                  {NAV_LINKS.map(link => (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className="flex items-center justify-between px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={12} className="text-muted-foreground/50" />
                    </button>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* ───── Floating Vertical LineNav Indicator ───── */}
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

        {/* ───── Main Single-Page Content in Unified 7xl Grid ───── */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="space-y-24">

            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. About Section */}
            <ScrollReveal delay={0.1}>
              <div className="rule-divider mb-12" />
              <div id="about">
                <AboutSection />
              </div>
            </ScrollReveal>

            {/* 3. Detailed Experience Section */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="experience">
                <ExperienceSection />
              </div>
            </ScrollReveal>

            {/* 4. Interactive Map of 17 Construction Sites */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="map">
                <ProjectsMapSection theme={theme} />
              </div>
            </ScrollReveal>

            {/* 5. Automation Cases */}
            <ScrollReveal delay={0.1}>
              <div className="rule-divider mb-12" />
              <div id="cases">
                <CasesSection />
              </div>
            </ScrollReveal>

            {/* 6. Interactive VOR (Шахматка) Generator & Editor */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="vor">
                <VorSection />
              </div>
            </ScrollReveal>

            {/* 7. Low-Current & Communication Systems */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="systems">
                <SystemsSection />
              </div>
            </ScrollReveal>

            {/* 8. Step-by-Step Approval Workflow */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="workflow">
                <WorkflowSection />
              </div>
            </ScrollReveal>

            {/* 9. Tech Stack & Engineering Tools */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="techstack">
                <TechStackSection />
              </div>
            </ScrollReveal>

            {/* 10. Key PTO Metrics */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="metrics">
                <MetricsSection />
              </div>
            </ScrollReveal>

            {/* 11. Toolkit & Templates */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="toolkit">
                <ToolkitSection />
              </div>
            </ScrollReveal>

            {/* 12. Qualifications & Certifications */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="certifications">
                <CertificationsSection />
              </div>
            </ScrollReveal>

            {/* 13. Career Milestone Timeline */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="timeline">
                <TimelineSection />
              </div>
            </ScrollReveal>

            {/* 14. Contractor Testimonials */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="testimonials">
                <TestimonialsSection />
              </div>
            </ScrollReveal>

            {/* 15. FAQ */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="faq">
                <FaqSection />
              </div>
            </ScrollReveal>

            {/* 16. Exon / Supervision Chat Simulator */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="chat">
                <ChatSection />
              </div>
            </ScrollReveal>

            {/* 17. Contact Section */}
            <ScrollReveal>
              <div className="rule-divider mb-12" />
              <div id="contacts">
                <ContactsSection />
              </div>
            </ScrollReveal>

          </div>
        </main>

        {/* ───── Footer (Structured Grid) ───── */}
        <footer className="border-t border-border footer-bg py-10 mt-24 relative z-10 text-xs text-muted-foreground font-mono">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>&copy; 2026 Николаев Артемий — Инженер ПТО / Exon / Автоматизация ИД</div>
            <div className="flex items-center gap-6">
              <a href="mailto:artyomnikolae7@gmail.com" className="hover:text-foreground transition-colors">Email</a>
              <a href="https://t.me/Amantle_x" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Telegram (@Amantle_x)</a>
              <a href="https://github.com/artyomnikolae7-sys" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </footer>

      </div>
    </ReactLenis>
  )
}
