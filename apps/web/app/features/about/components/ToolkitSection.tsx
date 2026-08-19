import { Eye, FileSpreadsheet, Settings, Calculator, PenLine, Terminal, ClipboardList, CheckSquare } from 'lucide-react'

const iconMap: Record<string, any> = {
  '📊': FileSpreadsheet,
  '⚙️': Settings,
  '📋': ClipboardList,
  '🔢': Calculator,
  '📐': PenLine,
  '💻': Terminal,
  '✅': CheckSquare,
}

const documents = [
  { name: 'Шаблон АОСР (Excel + VBA)', type: 'XLSX', size: '2.4 МБ', category: 'Шаблон', iconKey: '📊' },
  { name: 'Генератор ИД ОЗДС', type: 'XLSM', size: '8.1 МБ', category: 'Инструмент', iconKey: '⚙️' },
  { name: 'Реестр паспортов и сертификатов', type: 'XLSX', size: '1.8 МБ', category: 'Шаблон', iconKey: '📋' },
  { name: 'Расчёт ВОР (телефонная канализация)', type: 'XLSX', size: '3.2 МБ', category: 'Расчёт', iconKey: '🔢' },
  { name: 'Библиотека динамических блоков AutoCAD', type: 'DWG', size: '15.6 МБ', category: 'CAD', iconKey: '📐' },
  { name: 'Скрипт авто-ввода в Exon', type: 'JS', size: '45 КБ', category: 'Скрипт', iconKey: '💻' },
  { name: 'Шаблон ведомости объёмов работ', type: 'XLSX', size: '1.2 МБ', category: 'Шаблон', iconKey: '📊' },
  { name: 'Чек-лист приёмки ИД', type: 'PDF', size: '340 КБ', category: 'Документ', iconKey: '✅' },
]

export function ToolkitSection() {
  return (
    <section id="toolkit" className="space-y-8 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Инструментарий</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Мои <span className="font-instrument italic font-normal text-gradient-red-orange">шаблоны</span> и инструменты
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Разработанные мной шаблоны, скрипты и инструменты для автоматизации ПТО
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {documents.map(doc => {
          const Icon = iconMap[doc.iconKey] || FileSpreadsheet
          return (
            <div key={doc.name} className="themed-card p-5 rounded-xl space-y-3 card-lift group cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="px-2 py-1 text-[9px] font-mono font-bold uppercase rounded bg-primary/10 text-primary border border-primary/20">
                  {doc.type}
                </span>
              </div>
              <h4 className="text-sm font-bold text-foreground leading-tight">{doc.name}</h4>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">{doc.size}</span>
                <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-[10px]">{doc.category}</span>
              </div>
              <button className="w-full py-2 text-xs font-mono uppercase tracking-wider rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2">
                <Eye size={12} /> Подробнее
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
