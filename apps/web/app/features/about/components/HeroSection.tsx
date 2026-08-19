import { ArrowRight } from 'lucide-react'
import { Marquee } from '../../../components/ui/Marquee'
import content from '../../../data/content.json'

export function HeroSection() {
  return (
    <section className="space-y-16 relative py-8 md:py-16 blueprint-grid">

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 hero-stagger">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-medium uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
          Открыт к предложениям
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-display leading-[1.15]">
          Инженер ПТО, превращающий{' '}
          <span className="font-instrument font-normal text-gradient-blue">документацию</span>
          {' '}в структурированные{' '}
          <span className="font-instrument font-normal text-gradient-warm">данные</span>
        </h1>

        {/* Engineering Flow */}
        <div className="py-4 w-full max-w-xl mx-auto hidden md:block">
          <div className="flex items-center justify-between text-xs font-mono text-foreground/60 font-medium tracking-wide relative h-12">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            {['Чертёж', 'Спецификация', 'Данные', 'Проверка', 'ИД'].map((step, i) => (
              <div
                key={step}
                className={`
                  px-3 py-1.5 border rounded-md relative z-10 transition-colors
                  ${i === 4
                    ? 'bg-primary/10 border-primary/30 text-primary font-semibold'
                    : i === 2
                      ? 'bg-accent/10 border-accent/20 text-accent'
                      : 'bg-card border-border hover:border-primary/20 hover:text-foreground'
                  }
                `}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
          {content.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            className="glow-button px-6 py-3 rounded-lg bg-primary text-white font-medium text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            Кейсы автоматизации
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-lg border border-border bg-card hover:bg-secondary text-foreground font-medium text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            Связаться
          </button>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {content.hero.metrics.map((metric, i) => (
          <div key={i} className="themed-card p-6 rounded-xl text-center space-y-1.5 card-lift">
            <span className={`text-3xl md:text-4xl font-bold font-mono tracking-tight block ${i === 0 ? 'text-primary' : i === 1 ? 'text-accent' : 'text-foreground'}`}>
              {metric.value}
            </span>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono font-medium">{metric.label}</p>
            {metric.description && (
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Partners Marquee */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4 pt-4">
        <div className="text-center">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-medium">{content.hero.partners.title}</span>
        </div>
        <Marquee speed={35} className="py-3" gap="1.5rem">
          {content.hero.partners.list.map((partner) => (
            <div
              key={partner}
              className="flex h-10 items-center justify-center rounded-lg border border-border bg-card/50 px-5 text-xs font-mono text-muted-foreground"
            >
              {partner}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
