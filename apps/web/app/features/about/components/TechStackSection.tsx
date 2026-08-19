import { Code, Wrench, Bot, Globe, Database, Brain } from 'lucide-react'

const techCards = [
  { icon: Code, title: 'VBA Макросы', desc: 'Генераторы документов, автоматизация шаблонов Excel', tags: ['Excel', 'VBA', 'Макрос'] },
  { icon: Bot, title: 'JS Автоматизация', desc: 'Скрипты для Exon: авто-ввод объёмов, парсинг данных', tags: ['JavaScript', 'Exon', 'DOM'] },
  { icon: Database, title: 'Power Query', desc: 'Подтяжка данных из разных источников, ETL-процессы', tags: ['Excel', 'PowerQuery', 'ETL'] },
  { icon: Brain, title: 'AI-ассистент', desc: 'Использование ИИ для проверки документации и генерации', tags: ['Gemini', 'ChatGPT', 'Cursor'] },
  { icon: Wrench, title: 'AutoCAD Scripting', desc: 'Динамические блоки, автоматические штампы, параметрика', tags: ['AutoCAD', 'LISP', 'DWG'] },
  { icon: Globe, title: 'Web-портфолио', desc: 'Сайт на React + Vite с интерактивными демо', tags: ['React', 'TypeScript', 'Vite'] },
]

export function TechStackSection() {
  return (
    <section id="techstack" className="space-y-8 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Технологии</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Tech <span className="font-instrument italic font-normal text-gradient-red-orange">Stack</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Технологический стек, который я использую для автоматизации строительного документооборота
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCards.map(card => (
          <div key={card.title} className="themed-card p-6 rounded-2xl space-y-4 card-lift group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-ring/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <card.icon size={22} className="text-primary" />
            </div>
            <h4 className="text-base font-bold text-foreground">{card.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-[9px] font-mono font-bold uppercase rounded bg-muted text-muted-foreground">
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
