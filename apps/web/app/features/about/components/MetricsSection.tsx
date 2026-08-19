import { Clock, Target, Zap, TrendingUp, CheckCircle2, XCircle } from 'lucide-react'

const kpis = [
  { label: 'Время подготовки комплекта ОЗДС', before: '3–4 дня', after: '6–8 часов', improvement: '↓ 75%', icon: Clock },
  { label: 'Процент замечаний от технадзора', before: '15–20%', after: '2–3%', improvement: '↓ 85%', icon: Target },
  { label: 'Пакетный ввод объёмов в Exon', before: '2 ч / объект', after: '3 мин', improvement: '↓ 97%', icon: Zap },
  { label: 'Объектов в параллельном ведении', before: '3–5', after: '12–17', improvement: '↑ 240%', icon: TrendingUp },
]

export function MetricsSection() {
  return (
    <section id="metrics" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Эффективность автоматизации</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Ключевые <span className="font-instrument italic font-normal text-gradient-warm">показатели</span> и метрики
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Сравнение трудозатрат до и после внедрения авторских скриптов и шаблонов автоматизации
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="themed-card p-6 rounded-xl space-y-4 card-lift flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <kpi.icon size={18} />
                </div>
                <span className="text-xs font-bold font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  {kpi.improvement}
                </span>
              </div>
              <h4 className="text-sm font-bold text-foreground leading-snug">{kpi.label}</h4>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-border">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-mono">До:</span>
                <span className="flex items-center gap-1 text-red-500 font-medium">
                  <XCircle size={13} /> {kpi.before}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-mono">После:</span>
                <span className="flex items-center gap-1 text-emerald-500 font-bold">
                  <CheckCircle2 size={13} /> {kpi.after}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
