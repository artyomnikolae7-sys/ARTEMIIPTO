import { Search, PenTool, FileCheck, Upload, CheckCircle, Zap } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Входной контроль', description: 'Анализ проектной документации (ПД/РД), спецификаций оборудования, кабельных журналов и согласований.' },
  { icon: PenTool, title: 'Исполнительные схемы', description: 'Черчение исполнительных планов в AutoCAD на основе фактической исполнительной геодезической съёмки.' },
  { icon: FileCheck, title: 'Формирование АОСР', description: 'Автоматизированная генерация актов освидетельствования скрытых работ и реестров через VBA-шаблоны.' },
  { icon: Upload, title: 'Загрузка в Exon', description: 'Пакетная загрузка паспортов, сертификатов качества, протоколов измерений и объемов работ в систему Exon.' },
  { icon: CheckCircle, title: 'Подписание ЭЦП', description: 'Устранение замечаний технадзора, прохождение электронного согласования с авторским надзором и заказчиком.' },
  { icon: Zap, title: 'Сдача в архив', description: 'Формирование итогового сшитого комплекта, печать реестров, сквозная нумерация и передача в архив ОКС.' },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Регламент процессов</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Сквозной цикл подготовки и <span className="font-instrument italic font-normal text-gradient-warm">сдачи ИД</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          От получения рабочей документации до финальной сдачи в архив — 6 стандартизированных этапов
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="themed-card p-6 rounded-xl space-y-4 card-lift relative flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <step.icon size={20} />
                </div>
                <span className="text-2xl font-bold font-mono text-primary/30 group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="text-base font-bold text-foreground leading-snug">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
            
            <div className="pt-2">
              <span className="text-[10px] font-mono text-primary uppercase tracking-wider font-semibold">
                Этап {i + 1} из 6
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
