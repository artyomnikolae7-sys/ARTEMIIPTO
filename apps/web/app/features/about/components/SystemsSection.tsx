import { useState } from 'react'
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react'

const systems = [
  { code: 'ВТСС', name: 'Внутренние телефонные сети связи', description: 'Структурированные кабельные системы (СКС), кроссовое оборудование, этажные распределительные шкафы, кабель-каналы и лотки внутри здания.', progress: 100 },
  { code: 'СВН', name: 'Система видеонаблюдения', description: 'IP-камеры, регистраторы (NVR), коммутаторы PoE, кабельная инфраструктура видеонаблюдения и интеграция с городской системой ЕЦХД.', progress: 100 },
  { code: 'СКД', name: 'Система контроля доступа', description: 'Домофония, считыватели бесконтактных карт, электромагнитные замки, турникеты и контроллеры доступа.', progress: 100 },
  { code: 'ОСО', name: 'Охранно-сигнализационное оборудование', description: 'Охранные извещатели, приёмно-контрольные приборы, тревожные кнопки, защита входных групп и технических помещений.', progress: 95 },
  { code: 'СКТВ', name: 'Система кабельного телевидения', description: 'Коаксиальная и оптическая разводка, домовые усилители, оптические приёмники, абонентские разветвители.', progress: 100 },
  { code: 'ШПД', name: 'Широкополосный доступ в интернет', description: 'Оптоволоконные магистрали FTTH, распределительные муфты, шкафы провайдеров (Ростелеком, МТС, МГТС).', progress: 90 },
  { code: 'АК', name: 'Автоматика и диспетчеризация', description: 'Диспетчеризация инженерных систем, сбор показаний приборов учёта, передача аварийных сигналов в ЕДС.', progress: 85 },
  { code: 'ОЗДС', name: 'Охранно-защитные дератизационные системы', description: 'Электрические барьеры, блоки питания, паспорта, протоколы испытаний и документация по защитным сооружениям ГО.', progress: 100 },
]

export function SystemsSection() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <section id="systems" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Слаботочный комплекс</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Системы связи и <span className="font-instrument italic font-normal text-gradient-warm">автоматизации</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Полный перечень слаботочных и инженерных систем, по которым ведётся и сдаётся исполнительная документация
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Systems List (5 cols) */}
        <div className="lg:col-span-5 space-y-2">
          {systems.map((sys, i) => (
            <button
              key={sys.code}
              onClick={() => setSelected(i)}
              className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl text-left cursor-pointer transition-all ${
                selected === i
                  ? 'themed-card border-primary/40 bg-primary/5 shadow-md'
                  : 'themed-card hover:border-border hover:bg-secondary/40'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 ${
                selected === i ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
              }`}>
                {sys.code.slice(0, 3)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-foreground truncate">{sys.code}</h4>
                <p className="text-xs text-muted-foreground truncate">{sys.name}</p>
              </div>
              <ArrowRight size={14} className={`shrink-0 transition-transform ${selected === i ? 'text-primary translate-x-0.5' : 'text-muted-foreground/50'}`} />
            </button>
          ))}
        </div>

        {/* Detailed System Card (7 cols) */}
        <div className="lg:col-span-7 themed-card p-6 sm:p-8 rounded-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl font-bold font-mono text-primary">
                {systems[selected].code}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-display">{systems[selected].code}</h3>
                <p className="text-xs text-muted-foreground">{systems[selected].name}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {systems[selected].description}
            </p>
            
            {/* Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Процент сдачи ИД</span>
                <span className="font-bold text-primary">{systems[selected].progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                <div 
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${systems[selected].progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <span className="text-xl font-bold font-mono text-foreground block">17</span>
              <span className="text-[10px] text-muted-foreground uppercase font-mono">Объектов</span>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <span className="text-xl font-bold font-mono text-foreground block">500+</span>
              <span className="text-[10px] text-muted-foreground uppercase font-mono">Актов АОСР</span>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <span className="text-xl font-bold font-mono text-emerald-500 block">100%</span>
              <span className="text-[10px] text-muted-foreground uppercase font-mono">Exon сдача</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
