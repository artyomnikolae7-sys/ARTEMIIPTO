import { Building, CheckCircle2, MapPin, Mail, Send } from 'lucide-react'

const competencies = [
  'Комплектование и сдача исполнительной документации (ИД) по разделам СС, НСС, ВТСС, СВН, СКД',
  'Ведение и наполнение ведомостей объемов работ (ВОР, шахматки) факт/проект',
  'Загрузка, подписание и ведение замечаний в цифровых ИС: Exon, Sarex',
  'Генерация актов освидетельствования скрытых работ (АОСР) и реестров на VBA',
  'Разработка проектов производства работ (ППР) и технологических карт (ТК)',
  'Входной контроль проектно-сметной документации и согласование изменений с ГИПом',
]

const experienceItems = [
  {
    period: '2023 — н. в.',
    role: 'Ведущий инженер ПТО / Руководитель группы ИД',
    company: 'Генподрядные проекты реновации и коммерческого жилья Москвы',
    desc: 'Полное закрытие исполнительной документации по слаботочным сетям связи на 12 крупных жилых комплексах бизнес- и комфорт-класса. Автоматизация процессов подготовки АОСР и ВОР, взаимодействие с заказчиками (Москапстрой, Мосинжпроект) и надзорными органами.',
    tags: ['Exon', 'СС/НСС', 'VBA генераторы', '12 ЖК'],
  },
  {
    period: '2021 — 2023',
    role: 'Инженер ПТО по слаботочным и наружным сетям',
    company: 'Субподрядные строительно-монтажные организации',
    desc: 'Подготовка разрешительной и исполнительной документации по выносу, перекладке и монтажу кабельных сетей связи (телефонная канализация, оптические муфты, ЗСГО). Согласование более 45 кабельных трасс с городскими службами и ПАО «Ростелеком».',
    tags: ['AutoCAD', 'НСС', 'Ростелеком', 'МГСН'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-2">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold">Профессиональный опыт</span>
        <h2 className="text-3xl sm:text-4xl headline-whisper text-foreground">
          Опыт работы и компетенции
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-normal">
          3+ года в строительной отрасли Москвы: ведение и успешная сдача слаботочных систем связи
        </p>
      </div>

      {/* Top Grid: Profile Card (4 cols) + Competencies Card (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Profile Card */}
        <div className="lg:col-span-4 themed-card p-8 rounded-[20px] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm font-mono">
              ПТО
            </div>
            <div>
              <h3 className="text-lg font-normal text-foreground font-display">Николаев Артемий</h3>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Ведущий инженер ПТО / Exon</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Специалист по закрытию исполнительной документации, автоматизации рутинных расчётов и цифровому согласованию в Exon.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] font-mono border border-border bg-background px-2.5 py-0.5 rounded-full text-foreground">СС (Связь)</span>
              <span className="text-[10px] font-mono border border-border bg-background px-2.5 py-0.5 rounded-full text-foreground">НСС (Наружная)</span>
              <span className="text-[10px] font-mono border border-border bg-background px-2.5 py-0.5 rounded-full text-foreground">ЭОМ</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-2 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-foreground/70 shrink-0" />
              <span>Москва, Россия</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-foreground/70 shrink-0" />
              <a href="mailto:artyomnikolae7@gmail.com" className="hover:underline hover:text-foreground">artyomnikolae7@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Send size={13} className="text-foreground/70 shrink-0" />
              <a href="https://t.me/Amantle_x" target="_blank" rel="noreferrer" className="hover:underline hover:text-foreground">@Amantle_x</a>
            </div>
          </div>
        </div>

        {/* Competencies Grid Card */}
        <div className="lg:col-span-8 themed-card p-8 rounded-[20px] space-y-6">
          <div>
            <h4 className="text-base font-normal text-foreground font-display mb-1">Ключевые инженерные компетенции</h4>
            <p className="text-xs text-muted-foreground">Стандарты оформления, нормативная база МГСН и цифровые инструменты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {competencies.map((item, idx) => (
              <div key={idx} className="flex gap-2.5 items-start p-3 rounded-xl bg-background border border-border">
                <CheckCircle2 size={15} className="text-foreground/80 shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/90 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience History Cards Grid */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">Послужной список</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceItems.map((item, idx) => (
            <div key={idx} className="themed-card p-8 rounded-[20px] space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-0.5 text-[11px] font-mono rounded-full border border-border bg-background text-foreground">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-base font-normal text-foreground leading-snug font-display">{item.role}</h4>
                <p className="text-xs font-mono text-muted-foreground">{item.company}</p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">{item.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-background border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
