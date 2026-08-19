import { ArrowRight, Sparkles } from 'lucide-react'
import { Marquee } from '../../../components/ui/Marquee'
import content from '../../../data/content.json'

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 space-y-16">
      
      {/* Decorative Signature Sphere Accent (Violet Spark #0447ff + Ember Orange #ff4704) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
        <div className="audio-sphere opacity-40 blur-3xl w-72 h-72" />
      </div>

      {/* Main Hero Header */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-card text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
          Инженер ПТО • Цифровизация Exon
        </div>

        {/* Whisper-Weight Headline (Waldenburg/Inter 300, -0.02em tracking) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl headline-whisper text-foreground leading-[1.12]">
          Инженер ПТО, превращающий строительную документацию в{' '}
          <span className="font-light underline decoration-border underline-offset-8">структурированные данные</span>
        </h1>

        {/* Construction Data Pipeline Flow */}
        <div className="py-2 w-full max-w-xl mx-auto hidden md:block">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground relative h-10">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            {['Чертёж', 'Спецификация', 'Данные', 'Проверка', 'ИД'].map((step, i) => (
              <div
                key={step}
                className={`
                  px-3.5 py-1.5 rounded-full border text-xs font-mono relative z-10 transition-all
                  ${i === 4
                    ? 'bg-primary text-primary-foreground border-primary font-medium shadow-sm'
                    : 'bg-card border-border text-foreground hover:border-foreground/30'
                  }
                `}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Body Description */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
          {content.hero.description}
        </p>

        {/* Pill Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          <button
            onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-pill-filled cursor-pointer"
          >
            <span>Кейсы автоматизации</span>
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-pill-outlined cursor-pointer"
          >
            Связаться
          </button>
        </div>
      </div>

      {/* Metrics Cards (Warm Taupe Surface, 20px Radius, No Hard Borders) */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {content.hero.metrics.map((metric, i) => (
          <div key={i} className="themed-card p-6 text-center space-y-1">
            <span className="text-3xl md:text-4xl font-light font-display tracking-tight text-foreground block">
              {metric.value}
            </span>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-mono font-medium">{metric.label}</p>
            {metric.description && (
              <p className="text-xs text-muted-foreground/80 font-normal">{metric.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Trust Partner Logos Marquee (Grayscale, Low-Contrast on Canvas) */}
      <div className="max-w-5xl mx-auto space-y-3 pt-6">
        <div className="text-center">
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-medium">
            {content.hero.partners.title}
          </span>
        </div>
        <Marquee speed={30} className="py-2" gap="1.5rem">
          {content.hero.partners.list.map((partner) => (
            <div
              key={partner}
              className="flex h-9 items-center justify-center rounded-full border border-border bg-card px-5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              {partner}
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  )
}
