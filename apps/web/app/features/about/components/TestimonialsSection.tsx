import { Star, Quote, UserCircle, Briefcase, HardHat, Monitor } from 'lucide-react'

const avatarIcons: Record<string, any> = {
  'manager': Briefcase,
  'engineer': UserCircle,
  'foreman': HardHat,
  'dev': Monitor,
}

const testimonials = [
  {
    name: 'Алексей Петров',
    role: 'Главный инженер, ООО «МОНАРХ»',
    text: 'Артемий закрыл все разделы слаботочных сетей на Гарибальди 22 без единого замечания от технадзора. Работа чёткая, документация идеальная.',
    rating: 5,
    avatarType: 'manager',
  },
  {
    name: 'Елена Коршунова',
    role: 'Руководитель ПТО, ГК «ЕКС»',
    text: 'Генератор ИД по ОЗДС сэкономил нашему отделу десятки часов. Артемий не просто инженер — он автоматизатор процессов.',
    rating: 5,
    avatarType: 'manager',
  },
  {
    name: 'Сергей Волков',
    role: 'Начальник участка, СК КРОНОС',
    text: 'Сборка комплекта за один день вместо четырёх — это реально. Скрипты Артемия для Exon изменили подход к работе.',
    rating: 5,
    avatarType: 'foreman',
  },
  {
    name: 'Дмитрий Савельев',
    role: 'Инженер ПТО, МОСРЕНСТРОЙ-6',
    text: 'JS-скрипт авто-ввода объёмов в Exon — это бомба. 450 позиций за 3 минуты без ошибок. Раньше тратил на это полдня.',
    rating: 5,
    avatarType: 'dev',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-10 animate-fade-slide-in max-w-screen overflow-hidden">
      <div className="text-center space-y-3">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Отзывы</span>
        <h2 className="text-4xl font-bold text-foreground tracking-tight font-display">
          Что <span className="font-instrument italic font-normal text-gradient-red-orange">говорят</span> коллеги
        </h2>
      </div>

      <div className="border-y border-border py-12 px-4 md:px-8 relative bg-background/50 backdrop-blur-md shadow-xl overflow-hidden rounded-2xl themed-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 relative z-10">
          {testimonials.map((t, idx) => {
            const AvatarIcon = avatarIcons[t.avatarType] || UserCircle
            return (
              <div 
                key={t.name} 
                className={`relative group flex flex-col space-y-4 ${
                  idx === 0 || idx === 1 ? 'md:border-b md:border-border/50 md:pb-8' : ''
                } ${idx % 2 !== 0 ? 'md:border-l md:border-border/50 md:pl-8' : ''}`}
              >
                <Quote size={32} className="absolute top-0 right-0 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-base text-foreground/90 leading-relaxed italic font-serif flex-1">
                  «{t.text}»
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <AvatarIcon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
