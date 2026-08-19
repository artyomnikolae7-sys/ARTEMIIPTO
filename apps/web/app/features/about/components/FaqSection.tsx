import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'Какие разделы ИД вы закрываете?',
    a: 'Специализируюсь на слаботочных сетях связи: СС (ВТСС, СВН, СКД, ОСО, СКТВ, ШПД), НСС (наружные кабельные сети, телефонная канализация), а также ЭОМ при необходимости.'
  },
  {
    q: 'Как быстро можете собрать комплект ОЗДС?',
    a: 'С помощью моего генератора ИД — за 6-8 часов вместо стандартных 3-4 дней. Полный комплект: АОСР, реестр, паспорта/сертификаты, исполнительные схемы.'
  },
  {
    q: 'Работаете ли вы с системой Exon?',
    a: 'Да, свободно владею Exon. Разработал JS-скрипт для автоматического ввода объёмов (450 позиций за 3 минуты). Также работаю с Sarex.'
  },
  {
    q: 'Какие инструменты автоматизации используете?',
    a: 'Excel + VBA для генерации документов, Power Query для сводных данных, AutoCAD для исполнительных схем с параметрической привязкой, JavaScript для автоматизации Exon.'
  },
  {
    q: 'Можете ли выехать на объект для технадзора?',
    a: 'Да, регулярно выезжаю на объекты для проверок МГСН с полным комплектом ИД на планшете (Exon) и распечатанными схемами AutoCAD.'
  },
  {
    q: 'С какими заказчиками работали?',
    a: 'Москапстрой, Мосинжпроект, Департамент строительства Москвы, ПАО «Ростелеком», ПАО «МТС» и ряд крупных субподрядных организаций.'
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="space-y-8 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Вопросы</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Часто <span className="font-instrument italic font-normal text-gradient-red-orange">задаваемые</span> вопросы
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="themed-card rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle size={16} className="text-ring shrink-0" />
                <span className="text-sm font-bold text-foreground">{faq.q}</span>
              </div>
              {open === i ? <ChevronUp size={16} className="text-muted-foreground shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0" />}
            </button>
            {open === i && (
              <div className="px-5 pb-5 pl-12 text-sm text-muted-foreground leading-relaxed animate-fade-slide-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
