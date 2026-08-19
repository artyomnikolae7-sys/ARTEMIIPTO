import { Rocket, CheckCircle, Zap, Mic, GraduationCap } from 'lucide-react'

const iconMap: Record<string, any> = {
  'milestone': Rocket,
  'project': CheckCircle,
  'dev': Zap,
  'event': Mic,
  'education': GraduationCap,
}

const events = [
  { date: 'Авг 2026', title: 'Запуск портфолио-сайта v2.0', desc: 'Полный редизайн с 20 блоками и тёмной/светлой темой', type: 'milestone' },
  { date: 'Июл 2026', title: 'Завершение объекта Артековская 7/6', desc: 'Полная сдача ИД по ВТСС, СВН, СКД. 0 замечаний', type: 'project' },
  { date: 'Июн 2026', title: 'Автоматизация ввода в Exon v2', desc: 'Обновление JS-скрипта: поддержка пакетного ввода', type: 'dev' },
  { date: 'Май 2026', title: 'Выступление на планёрке ПТО', desc: 'Демонстрация VBA-генератора руководству. Одобрено к внедрению', type: 'event' },
  { date: 'Янв 2026', title: 'Получение диплома бакалавра', desc: 'МГТУ-МАСИ, направление 08.03.01 Строительство (ПГС)', type: 'education' },
  { date: 'Дек 2025', title: '15-й сданный объект', desc: 'Юбилейная отметка — 15 объектов с полным закрытием ИД', type: 'milestone' },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="space-y-8 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Хронология</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Ключевые <span className="font-instrument italic font-normal text-gradient-red-orange">события</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {events.map((e, i) => {
          const Icon = iconMap[e.type] || Rocket
          return (
            <div key={i} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                <span className="text-xs font-mono text-ring font-bold uppercase tracking-wider">{e.date}</span>
              </div>

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full themed-card flex items-center justify-center z-10 shadow-lg border-2 border-border">
                <Icon size={18} className="text-primary" />
              </div>

              <div className="flex-1 ml-16 md:ml-0">
                <span className="text-xs font-mono text-ring font-bold uppercase tracking-wider md:hidden">{e.date}</span>
                <div className="themed-card p-5 rounded-xl space-y-2 mt-1 card-lift">
                  <h4 className="text-sm font-bold text-foreground">{e.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
