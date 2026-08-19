import { Building, CheckCircle2, MapPin, Calendar, Award, Phone, Mail, Send } from 'lucide-react'

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
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Профессиональный опыт</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Опыт работы и <span className="font-instrument italic font-normal text-gradient-warm">компетенции</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          3+ года в строительной отрасли Москвы: ведение и успешная сдача слаботочных систем связи
        </p>
      </div>

      {/* Top Grid: Profile Card (4 cols) + Competencies Card (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Profile Card */}
        <div className="lg:col-span-4 themed-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Building size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-display">Николаев Артемий</h3>
              <p className="text-xs font-mono text-primary uppercase tracking-wider font-semibold">Ведущий инженер ПТО / Exon</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Специалист по закрытию исполнительной документации, автоматизации рутинных расчётов и цифровому согласованию в Exon.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] font-mono bg-secondary px-2.5 py-1 rounded-md text-foreground font-medium">СС (Связь)</span>
              <span className="text-[10px] font-mono bg-secondary px-2.5 py-1 rounded-md text-foreground font-medium">НСС (Наружная)</span>
              <span className="text-[10px] font-mono bg-secondary px-2.5 py-1 rounded-md text-foreground font-medium">ЭОМ</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-2.5 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2.5">
              <MapPin size={14} className="text-primary shrink-0" />
              <span>Москва, Россия</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={14} className="text-primary shrink-0" />
              <a href="mailto:artyomnikolae7@gmail.com" className="hover:underline hover:text-primary">artyomnikolae7@gmail.com</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Send size={14} className="text-primary shrink-0" />
              <a href="https://t.me/Amantle_x" target="_blank" rel="noreferrer" className="hover:underline hover:text-primary">@Amantle_x</a>
            </div>
          </div>
        </div>

        {/* Competencies Grid Card */}
        <div className="lg:col-span-8 themed-card p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-base font-bold text-foreground font-display mb-1">Ключевые инженерные компетенции</h4>
            <p className="text-xs text-muted-foreground">Стандарты оформления, нормативная база МГСН и цифровые инструменты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {competencies.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start p-3 rounded-lg bg-secondary/50 border border-border/50">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/90 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience History Cards Grid */}
      <div className="space-y-4">
        <h4 className="text-sm font-mono text-primary uppercase tracking-wider font-semibold">Послужной список</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceItems.map((item, idx) => (
            <div key={idx} className="themed-card p-6 sm:p-7 space-y-4 card-lift flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-base font-bold text-foreground leading-snug">{item.role}</h4>
                <p className="text-xs font-mono text-muted-foreground">{item.company}</p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">{item.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary text-muted-foreground">
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
