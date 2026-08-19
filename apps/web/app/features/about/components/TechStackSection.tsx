import { Code, Wrench, Bot, Globe, Database, Cpu } from 'lucide-react'

const techCards = [
  { icon: Wrench, title: 'AutoCAD & CAD-скрипты', desc: 'Оформление исполнительных схем, динамические блоки, параметрические таблицы и автоматизация штампов.', tags: ['AutoCAD', 'DWG', 'Схемы'] },
  { icon: Bot, title: 'Exon & DOM-автоматизация', desc: 'Пользовательские JS-скрипты для пакетной загрузки объёмов, валидации полей и автозаполнения форм в ИС Exon.', tags: ['JavaScript', 'Exon', 'DOM Scripting'] },
  { icon: Code, title: 'Excel + VBA Макросы', desc: 'Генераторы комплектов АОСР, автоматический пересчёт страничности и сшивка реестров исполнительной документации.', tags: ['Excel', 'VBA', 'Макросы'] },
  { icon: Database, title: 'Power Query & Аналитика', desc: 'Автоматическая подтяжка данных из разрозненных файлов, сведение факта к проекту и отчёты в Power BI.', tags: ['Power Query', 'Power BI', 'ETL'] },
  { icon: Cpu, title: 'AI & OCR Пайплайны', desc: 'Применение моделей компьютерного зрения и LLM для оцифровки однолинейных схем и проверки спецификаций.', tags: ['OCR', 'AI Checks', 'LLM'] },
  { icon: Globe, title: 'Web-инструменты & Платформа', desc: 'Разработка интерактивных таблиц ВОР, калькуляторов объемов и инженерных дашбордов на React + TypeScript.', tags: ['React', 'TypeScript', 'Vite'] },
]

export function TechStackSection() {
  return (
    <section id="techstack" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Инструменты и технологии</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Инженерный и цифровой <span className="font-instrument italic font-normal text-gradient-warm">стек</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Комплекс программного обеспечения, языков сценариев и систем, применяемый для оптимизации процессов ПТО
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCards.map(card => (
          <div key={card.title} className="themed-card p-6 rounded-xl space-y-4 card-lift group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <card.icon size={22} />
              </div>
              <h4 className="text-base font-bold text-foreground leading-snug">{card.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
              {card.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary text-muted-foreground font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
