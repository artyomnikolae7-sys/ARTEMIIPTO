import { Zap, FileCheck, Upload, CheckCircle, Search, PenTool } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Входной контроль', description: 'Проверка проектной документации, спецификаций, согласований', color: '#ff0022' },
  { icon: PenTool, title: 'Исполнительные схемы', description: 'Черчение в AutoCAD по данным геодезии и фактического монтажа', color: '#ff2200' },
  { icon: FileCheck, title: 'Формирование АОСР', description: 'Генерация актов освидетельствования через VBA-шаблоны', color: '#ff4400' },
  { icon: Upload, title: 'Загрузка в Exon', description: 'Автозагрузка документов и объёмов JS-скриптом', color: '#ff6600' },
  { icon: CheckCircle, title: 'Согласование', description: 'Подпись технадзором и заказчиком в системе Exon (ЭЦП)', color: '#ff8800' },
  { icon: Zap, title: 'Сдача в архив', description: 'Комплектование, нумерация, формирование реестра, сдача', color: '#ffaa00' },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Процесс</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Как я <span className="font-instrument italic font-normal text-gradient-red-orange">работаю</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          От получения проекта до сдачи полного комплекта ИД в архив — 6 шагов
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="themed-card p-6 rounded-2xl space-y-4 card-lift relative group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ background: step.color }}>
                <step.icon size={20} />
              </div>
              <span className="text-4xl font-bold font-mono text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h4 className="text-base font-bold text-foreground">{step.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
