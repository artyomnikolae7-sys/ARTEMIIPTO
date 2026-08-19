import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const systems = [
  { code: 'ВТСС', name: 'Внутренние телефонные сети связи', description: 'Структурированные кабельные системы внутри здания', color: '#ff0022', progress: 100 },
  { code: 'СВН', name: 'Система видеонаблюдения', description: 'Камеры, видеорегистраторы, кабельная инфраструктура CCTV', color: '#ff4e00', progress: 100 },
  { code: 'СКД', name: 'Система контроля доступа', description: 'Домофоны, считыватели, контроллеры, замки', color: '#ff7d4e', progress: 100 },
  { code: 'ОСО', name: 'Охранно-пожарная сигнализация', description: 'Датчики, извещатели, приёмно-контрольные приборы', color: '#ff9a76', progress: 95 },
  { code: 'СКТВ', name: 'Система кабельного телевидения', description: 'Коаксиальная разводка, усилители, сплиттеры', color: '#ffb89e', progress: 100 },
  { code: 'ШПД', name: 'Широкополосный доступ', description: 'Интернет-инфраструктура, оптоволокно FTTH', color: '#ffd6c7', progress: 90 },
  { code: 'АК', name: 'Автоматика и контроль', description: 'Системы диспетчеризации, управления инженерией', color: '#e0e0e0', progress: 85 },
  { code: 'ОЗДС', name: 'Ограждающие и защитные конструкции', description: 'Сдаточная документация по ЗСГО/укрытиям', color: '#c0c0c0', progress: 100 },
]

export function SystemsSection() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <section id="systems" className="space-y-8 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Системы</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Слаботочные <span className="font-instrument italic font-normal text-gradient-red-orange">системы</span> связи
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Полный перечень систем, по которым я закрываю исполнительную документацию
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* List */}
        <div className="lg:col-span-5 space-y-2">
          {systems.map((sys, i) => (
            <button
              key={sys.code}
              onClick={() => setSelected(i)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl text-left cursor-pointer transition-all ${
                selected === i
                  ? 'themed-card shadow-lg border-primary/30'
                  : 'hover:bg-muted/30'
              }`}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold font-mono text-white shrink-0" style={{ background: sys.color }}>
                {sys.code.slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-foreground truncate">{sys.code}</h4>
                <p className="text-xs text-muted-foreground truncate">{sys.name}</p>
              </div>
              <ArrowRight size={14} className={`shrink-0 transition-transform ${selected === i ? 'text-primary' : 'text-muted-foreground'}`} />
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="lg:col-span-7 themed-card p-8 rounded-2xl space-y-6 sticky top-24">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold font-mono text-white" style={{ background: systems[selected].color }}>
              {systems[selected].code}
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-display">{systems[selected].code}</h3>
              <p className="text-xs text-muted-foreground">{systems[selected].name}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{systems[selected].description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-mono">Закрытие ИД</span>
              <span className="font-bold text-foreground">{systems[selected].progress}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${systems[selected].progress}%`, background: systems[selected].color }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <span className="text-lg font-bold font-mono text-foreground block">17</span>
              <span className="text-[9px] text-muted-foreground uppercase font-mono">Объектов</span>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <span className="text-lg font-bold font-mono text-foreground block">500+</span>
              <span className="text-[9px] text-muted-foreground uppercase font-mono">АОСР</span>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <span className="text-lg font-bold font-mono text-foreground block">2%</span>
              <span className="text-[9px] text-muted-foreground uppercase font-mono">Замечания</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
