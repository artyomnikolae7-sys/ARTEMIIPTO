import { BarChart3, TrendingUp, Clock, Target, Zap, CheckCircle2, XCircle } from 'lucide-react'

const kpis = [
  { label: 'Среднее время сборки комплекта ИД', before: '3-4 дня', after: '6-8 часов', improvement: '↓ 75%', icon: Clock },
  { label: 'Замечания от технадзора', before: '15-20%', after: '2-3%', improvement: '↓ 85%', icon: Target },
  { label: 'Ручной ввод данных в Exon', before: '2 часа / объект', after: '3 мин', improvement: '↓ 97%', icon: Zap },
  { label: 'Объектов в параллельной работе', before: '3-5', after: '12-17', improvement: '↑ 240%', icon: TrendingUp },
]

const timeline = [
  { month: 'Янв', value: 45 },
  { month: 'Фев', value: 52 },
  { month: 'Мар', value: 67 },
  { month: 'Апр', value: 73 },
  { month: 'Май', value: 81 },
  { month: 'Июн', value: 88 },
  { month: 'Июл', value: 92 },
  { month: 'Авг', value: 96 },
]

export function MetricsSection() {
  return (
    <section id="metrics" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Аналитика</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Метрики <span className="font-instrument italic font-normal text-gradient-red-orange">эффективности</span>
        </h2>
      </div>

      <div className="border-y border-border py-8 px-4 themed-card rounded-2xl relative shadow-xl overflow-hidden">
        {/* KPI Grid with Elegant Borders (metrics-01 inspired) */}
        <div className="relative mb-10">
          <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-r border-border opacity-50 hidden lg:block" />
            <div className="border-r border-border opacity-50 hidden lg:block" />
            <div className="border-r border-border opacity-50 hidden lg:block" />
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
            {kpis.map((kpi, idx) => (
              <div key={kpi.label} className={`flex flex-col gap-3 px-6 ${idx !== 0 ? 'lg:pl-8' : ''} ${idx === 1 || idx === 3 ? 'md:pl-8 md:border-l md:border-border/50 lg:border-none' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <kpi.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-xl font-bold font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">{kpi.improvement}</span>
                </div>
                <dt className="text-sm font-bold text-foreground uppercase tracking-wide leading-snug h-10">{kpi.label}</dt>
                <dd className="flex items-center gap-3 text-sm font-medium mt-auto">
                  <span className="flex items-center gap-1.5 text-red-400/90 bg-red-400/10 px-2 py-1 rounded">
                    <XCircle size={14} /> {kpi.before}
                  </span>
                  <span className="text-muted-foreground font-mono">→</span>
                  <span className="flex items-center gap-1.5 text-emerald-400/90 bg-emerald-400/10 px-2 py-1 rounded">
                    <CheckCircle2 size={14} /> {kpi.after}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Simple Chart */}
        <div className="mt-12 pt-8 border-t border-border/50 px-2 md:px-6 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 size={20} className="text-ring" />
              <h3 className="text-lg font-bold text-foreground font-display">Процент закрытия ИД по месяцам (2025)</h3>
            </div>
            <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-md">8 мес. тренд</span>
          </div>
          
          <div className="flex items-end gap-2 md:gap-4 h-56 relative group">
            <div className="absolute inset-0 border-y border-border/30 pointer-events-none grid grid-rows-4">
              <div className="border-b border-border/10" />
              <div className="border-b border-border/10" />
              <div className="border-b border-border/10" />
              <div />
            </div>
            
            {timeline.map(t => (
              <div key={t.month} className="flex-1 flex flex-col items-center gap-2 relative z-10 group-hover:opacity-60 hover:!opacity-100 transition-opacity duration-300">
                <span className="text-xs font-mono font-bold text-foreground">{t.value}%</span>
                <div 
                  className="w-full max-w-[60px] bg-gradient-to-t from-primary/80 to-ring rounded-t-lg transition-all duration-700 hover:brightness-125 hover:-translate-y-1 relative"
                  style={{ height: `${t.value}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity rounded-t-lg" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{t.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

