import { GraduationCap, Shield, PenLine, FileSpreadsheet, Monitor, ClipboardCheck } from 'lucide-react'

const iconMap: Record<string, any> = {
  '🎓': GraduationCap,
  '🦺': Shield,
  '📐': PenLine,
  '📊': FileSpreadsheet,
  '💻': Monitor,
  '📋': ClipboardCheck,
}

const certs = [
  { title: 'Бакалавр ПГС', org: 'МГТУ-МАСИ', year: '2026', desc: '08.03.01 Строительство (Промышленное и гражданское)', iconKey: '🎓' },
  { title: 'Охрана труда', org: 'Курс повышения квалификации', year: '2024', desc: 'Безопасные методы и приёмы работ на строительной площадке', iconKey: '🦺' },
  { title: 'AutoCAD Professional', org: 'Autodesk Certified', year: '2023', desc: '2D/3D проектирование, создание динамических блоков', iconKey: '📐' },
  { title: 'Excel Expert + VBA', org: 'Самостоятельное обучение', year: '2022', desc: 'Макросы, Power Query, Power BI, автоматизация', iconKey: '📊' },
  { title: 'Exon (Электронный документооборот)', org: 'Внутреннее обучение', year: '2023', desc: 'Полный цикл работы в системе электронного согласования ИД', iconKey: '💻' },
  { title: 'Допуск СРО', org: 'Строительная саморегулируемая организация', year: '2021', desc: 'Допуск к работам по подготовке исполнительной документации', iconKey: '📋' },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-8 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Квалификация</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Образование <span className="font-instrument italic font-normal text-gradient-red-orange">&amp; сертификаты</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map(c => {
          const Icon = iconMap[c.iconKey] || GraduationCap
          return (
            <div key={c.title} className="themed-card p-6 rounded-2xl space-y-3 card-lift">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="text-xs font-mono text-ring font-bold">{c.year}</span>
              </div>
              <h4 className="text-sm font-bold text-foreground">{c.title}</h4>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{c.org}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
