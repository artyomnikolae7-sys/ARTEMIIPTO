import { useState } from 'react'
import { CheckCircle2, ArrowRight, X, Sparkles, Wrench } from 'lucide-react'
import { CASES } from '../data/casesData'

export function CasesSection() {
  const [activeCaseId, setActiveCaseId] = useState<number | null>(null)

  const activeCase = CASES.find(c => c.id === activeCaseId)

  return (
    <section id="cases" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Оптимизация и Автоматизация</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Прикладные инженерные <span className="font-instrument italic font-normal text-gradient-warm">кейсы</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          7 реальных примеров того, как рутинные задачи ПТО переводятся в алгоритмы и цифровые конвейеры данных
        </p>
      </div>

      {/* Grid of Cases (1 col mobile, 2 cols tablet, 3 cols desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map((c) => (
          <div
            key={c.id}
            onClick={() => setActiveCaseId(c.id)}
            className="themed-card p-6 rounded-xl flex flex-col justify-between space-y-4 card-lift cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded-md bg-primary/10 text-primary border border-primary/20">
                  Кейс {String(c.id).padStart(2, '0')}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                {c.title}
              </h3>

              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                {c.problem}
              </p>
            </div>

            <div className="pt-4 border-t border-border space-y-2">
              <div className="text-[11px] font-mono text-primary font-medium truncate">
                🛠️ {c.tools}
              </div>
              <div className="text-[11px] text-muted-foreground line-clamp-2 italic">
                ✅ {c.result}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog for Active Case */}
      {activeCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="themed-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 relative border-primary/30">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveCaseId(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded-md bg-primary/10 text-primary border border-primary/20">
                Кейс {String(activeCase.id).padStart(2, '0')}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
                {activeCase.title}
              </h3>
            </div>

            {/* Problem */}
            <div className="p-4 rounded-xl bg-secondary/60 border border-border space-y-1.5">
              <h4 className="text-xs font-mono font-bold text-primary uppercase">Проблема и исходная ситуация:</h4>
              <p className="text-xs text-foreground/90 leading-relaxed">{activeCase.problem}</p>
            </div>

            {/* Tools */}
            <div className="p-4 rounded-xl bg-secondary/60 border border-border space-y-1.5">
              <h4 className="text-xs font-mono font-bold text-primary uppercase">Использованный стек:</h4>
              <p className="text-xs text-foreground/90 font-mono">{activeCase.tools}</p>
            </div>

            {/* Work Completed */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-primary uppercase">Что было сделано:</h4>
              <ul className="space-y-2">
                {activeCase.work.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 space-y-1.5">
              <h4 className="text-xs font-mono font-bold text-primary uppercase flex items-center gap-1.5">
                <Sparkles size={14} /> Результат и экономический эффект:
              </h4>
              <p className="text-xs text-foreground font-medium leading-relaxed">{activeCase.result}</p>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
