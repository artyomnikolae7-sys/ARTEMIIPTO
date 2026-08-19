import { Phone, Mail, Github, Briefcase, CheckCircle2, Clock, SlidersHorizontal, Cpu, GraduationCap } from 'lucide-react'
import { Marquee } from '../../../components/ui/Marquee'

export function ExperienceSection() {
  return (
    <section className="space-y-12 animate-fade-slide-in relative">
      <div className="gradient-glow top-[-50px] right-[-50px] opacity-50"></div>
      
      {/* Top Grid Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* Profile Card */}
        <div className="glass-panel gradient-border-premium p-8 rounded-2xl flex flex-col justify-between shadow-xl">
          <div className="space-y-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-ring mx-auto md:mx-0 flex items-center justify-center text-4xl shadow-lg shadow-primary/20">
              👷‍♂️
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white font-display">Николаев Артемий</h3>
              <p className="text-xs font-mono text-ring uppercase tracking-wider font-bold">Инженер ПТО / Специалист по ИД</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded-lg font-bold">СС (Связь)</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded-lg font-bold">НСС (Наружная)</span>
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded-lg font-bold">ЭОМ (Электрика)</span>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/5 space-y-4 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone size={14} className="text-ring shrink-0" />
              <span>8 (915) 494-44-57</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Mail size={14} className="text-ring shrink-0" />
              <span>artyomnikolae7@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Github size={14} className="text-ring shrink-0" />
              <span>Telegram: @Amantle_x</span>
            </div>
          </div>
        </div>

        {/* Work Profile Details */}
        <div className="md:col-span-2 glass-panel gradient-border-premium p-8 rounded-2xl space-y-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
              <Briefcase size={20} className="text-ring" />
              <span className="font-instrument italic font-normal text-gradient-red-orange">Профиль</span> & Опыт работы
            </h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent mt-2 rounded"></div>
          </div>
          
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-sans font-medium">
            Более 3 лет работаю в субподрядной строительной организации в системе <strong className="text-white">Exon</strong>: осуществляю сборку, проверку и сдачу исполнительной документации по слаботочным сетям связи, а также ведение ведомостей объемов работ (ВОР). 
            Мой фокус — <span className="text-white font-semibold">автоматизация процессов</span> (AutoCAD + Excel), что сокращает время на подготовку актов и минимизирует замечания от технадзора.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h4 className="text-xs font-bold text-ring uppercase tracking-widest font-mono">Профессиональные компетенции:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground font-sans font-medium">
              <li className="flex gap-2.5 items-start">
                <CheckCircle2 size={14} className="text-ring shrink-0 mt-0.5" />
                <span>Контроль состава и страничности документов</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle2 size={14} className="text-ring shrink-0 mt-0.5" />
                <span>Разработка единых шаблонов чертежей и реестров</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle2 size={14} className="text-ring shrink-0 mt-0.5" />
                <span>Загрузка и ведение ИД в ИС Exon, Sarex</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle2 size={14} className="text-ring shrink-0 mt-0.5" />
                <span>Разработка ППР и техкарт по Наружным сетям</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="glass-panel gradient-border-premium p-8 rounded-2xl shadow-xl relative z-10 space-y-8 animate-fade-slide-in">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
            <Clock size={20} className="text-ring" />
            Хронологическая <span className="font-instrument italic font-normal text-gradient-red-orange">биография</span> опыта
          </h3>
          <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent mt-2 rounded"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-36 space-y-12">
          
          {/* Milestone 1 */}
          <div className="relative pl-8 md:pl-12">
            {/* Glowing marker */}
            <div className="absolute w-4 h-4 bg-red-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_12px_#ff0022] border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            {/* Date label for larger screens */}
            <div className="hidden md:block absolute -left-36 top-1 text-right w-28 font-mono text-[10px] text-ring font-bold uppercase tracking-wider">
              2023 &mdash; н. в.
            </div>
            
            {/* Content card */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Старший инженер ПТО / Руководитель группы ИД</h4>
                  <p className="text-xs text-muted-foreground font-mono">Строительство жилых комплексов бизнес- и комфорт-класса (СС, НСС)</p>
                </div>
                <span className="md:hidden text-[9px] font-mono text-ring font-bold uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  2023 &mdash; н. в.
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Управление сдачей исполнительной документации на объектах реновации и коммерческого жилья Москвы. Координация работы смежных отделов, взаимодействие с заказчиками (Москапстрой, Мосинжпроект) и надзорными органами.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                <li>Автоматизировал генерацию актов освидетельствования скрытых работ (АОСР) на VBA;</li>
                <li>Сдал под ключ слаботочные разделы связи (СС) на 12 крупных объектах;</li>
                <li>Курировал ведение и наполнение ВОР и реестров замечаний в цифровой системе **Exon**.</li>
              </ul>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-4 h-4 bg-red-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_12px_#ff0022] border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="hidden md:block absolute -left-36 top-1 text-right w-28 font-mono text-[10px] text-ring font-bold uppercase tracking-wider">
              2021 &mdash; 2023
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Инженер ПТО</h4>
                  <p className="text-xs text-muted-foreground font-mono">Наружные кабельные и инженерные сети связи (НСС)</p>
                </div>
                <span className="md:hidden text-[9px] font-mono text-ring font-bold uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  2021 &mdash; 2023
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Подготовка разрешительной и исполнительной документации по выносу и перекладке сетей связи из пятна застройки. Разработка проектов производства работ (ППР) и технологических карт.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                <li>Согласовал более 45 кабельных трасс с городскими службами и ПАО «Ростелеком»;</li>
                <li>Снизил процент замечаний технадзора по входному контролю материалов на 35%;</li>
                <li>Вел детальные ведомости объемов работ (ВОР) по 17 объектам одновременно.</li>
              </ul>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-4 h-4 bg-red-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_12px_#ff0022] border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="hidden md:block absolute -left-36 top-1 text-right w-28 font-mono text-[10px] text-ring font-bold uppercase tracking-wider">
              2020 &mdash; 2021
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">Помощник инженера ПТО / AutoCAD чертежник</h4>
                  <p className="text-xs text-muted-foreground font-mono">Проектирование и исполнительные схемы</p>
                </div>
                <span className="md:hidden text-[9px] font-mono text-ring font-bold uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  2020 &mdash; 2021
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Черчение исполнительных схем по геодезическим съемкам, оцифровка проектной документации, оформление обложек, реестров и подготовка папок к сдаче в архив.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                <li>Оформил и сдал в архив более 150 комплектов ИД;</li>
                <li>В совершенстве освоил работу в AutoCAD, разработал библиотеку динамических блоков;</li>
                <li>Выполнял рутинную сверку фактических кабельных длин с проектными спецификациями.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Skills & AI Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Standard Skills */}
        <div className="glass-panel gradient-border-premium p-8 rounded-2xl space-y-4 shadow-xl">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
            <SlidersHorizontal size={18} className="text-ring" />
            Инструменты & <span className="font-instrument italic font-normal text-gradient-red-orange">Навыки</span>
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {['AutoCAD', 'Excel', 'VBA', 'PowerQuery', 'PowerBI', 'Word', 'Photoshop'].map(skill => (
              <span key={skill} className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI Stack */}
        <div className="glass-panel gradient-border-premium p-8 rounded-2xl space-y-4 shadow-xl">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
            <Cpu size={18} className="text-ring" />
            Искусственный <span className="font-instrument italic font-normal text-gradient-red-orange">Интеллект</span> Stack
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {['Antigravity', 'Cursor', 'Gemini', 'DeepSeek', 'Grok', 'ChatGPT', 'Copilot'].map(ai => (
              <span key={ai} className="px-3.5 py-2 rounded-xl bg-primary/5 border border-primary/20 text-ring text-xs font-semibold hover:bg-primary/10 transition-colors">
                {ai}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="glass-panel gradient-border-premium p-8 rounded-2xl shadow-xl relative z-10">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6 font-display">
          <GraduationCap size={22} className="text-ring" />
          <span className="font-instrument italic font-normal text-gradient-red-orange">Образование</span>
        </h3>
        <div className="border-l border-white/10 pl-6 space-y-4 relative">
          <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[6px] top-1.5 shadow-[0_0_10px_rgba(255,0,34,0.8)]"></div>
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white font-sans leading-snug">Московский гуманитарно-технический университет — Московский архитектурно-строительный институт (МГТУ-МАСИ)</h4>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-bold">Высшее образование — бакалавриат</p>
            <p className="text-sm text-muted-foreground pt-1"><strong>Направление подготовки:</strong> 08.03.01 Строительство (Промышленное и гражданское строительство)</p>
            <p className="text-xs text-muted-foreground italic">Очно-заочная форма. Диплом выдан 17 января 2026 г.</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="glass-panel gradient-border-premium p-6 rounded-2xl shadow-xl relative z-10 space-y-4">
        <div className="text-center">
          <span className="text-[10px] font-mono text-ring uppercase tracking-widest font-bold">Инструменты &bull; Стандарты &bull; Технологии</span>
        </div>
        <Marquee speed={25} className="py-2" gap="1.5rem">
          {['AutoCAD', 'Excel', 'VBA', 'PowerQuery', 'PowerBI', 'Python', 'SQL', 'Exon', 'Sarex', 'ГОСТ', 'СП', 'ППР', 'АОСР', 'ИД', 'Слаботочные сети', 'СС', 'НСС', 'Волоконно-оптические линии'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono font-semibold"
            >
              {tech}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
