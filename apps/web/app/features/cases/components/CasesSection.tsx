import { useState } from 'react'
import { CheckCircle2, ArrowRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CASES } from '../data/casesData'

export function CasesSection() {
  const [activeCaseId, setActiveCaseId] = useState<number | null>(null)



  // Pre-defined asymmetrical layout classes for cases
  const gridClasses = [
    "col-span-12 md:col-span-7 lg:col-span-6 h-[280px]", // 1 - ETM
    "col-span-12 md:col-span-5 lg:col-span-5 lg:mt-16 h-[320px]", // 2 - OCR
    "col-span-12 md:col-span-6 lg:col-span-4 h-[240px]", // 3
    "col-span-12 md:col-span-6 lg:col-span-8 h-[340px] lg:-mt-12", // 4
    "col-span-12 md:col-span-8 lg:col-span-7 h-[300px]", // 5
    "col-span-12 md:col-span-4 lg:col-span-4 lg:mt-8 h-[260px]", // 6
    "col-span-12 md:col-span-12 lg:col-span-10 lg:ml-auto h-[320px]" // 7
  ]

  return (
    <section className="space-y-16 relative pt-10">
      <div className="gradient-glow top-[10%] left-[-10%] opacity-40"></div>
      
      <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <span className="text-ring font-mono text-[10px] tracking-widest uppercase font-bold">Оптимизация и Автоматизация</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
          Инженерные <span className="font-instrument italic font-normal text-gradient-red-orange">кейсы</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Практические примеры того, как рутинные строительные процессы превращаются в автоматизированные конвейеры данных.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 relative z-10 max-w-6xl mx-auto px-4">
        {CASES.map((c, idx) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`${gridClasses[idx % gridClasses.length]} relative group cursor-pointer`}
            onClick={() => setActiveCaseId(c.id)}
          >
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:border-primary/50 group-hover:bg-white/10 group-hover:shadow-[0_0_30px_rgba(255,0,34,0.15)] flex flex-col p-8 justify-between">
              
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-ring uppercase tracking-widest font-bold">Кейс {String(c.id).padStart(2, '0')}</span>
                <h3 className="text-2xl font-bold text-white mt-4 font-display leading-tight line-clamp-2 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 line-clamp-3 font-medium">
                  {c.problem}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {c.tools.split(',').slice(0, 2).map((tool, i) => (
                    <span key={i} className="text-[10px] font-mono bg-black/40 border border-white/5 px-3 py-1 rounded-full text-white/70 font-semibold">
                      {tool.trim()}
                    </span>
                  ))}
                  {c.tools.split(',').length > 2 && (
                    <span className="text-[10px] font-mono bg-black/40 border border-white/5 px-2 py-1 rounded-full text-white/50 font-semibold">
                      +{c.tools.split(',').length - 2}
                    </span>
                  )}
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Details Modal */}
      <AnimatePresence>
        {activeCaseId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setActiveCaseId(null)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02] shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-ring uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                    Кейс {String(activeCaseId).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-white/50">Детальный обзор</span>
                </div>
                <button 
                  onClick={() => setActiveCaseId(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                {(() => {
                  const c = CASES[activeCaseId - 1]
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                      
                      {/* Left Column: Story */}
                      <div className="lg:col-span-7 space-y-10">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight">{c.title}</h2>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {c.tools.split(',').map(tool => (
                              <span key={tool} className="text-[10px] font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white font-semibold shadow-sm">
                                {tool.trim()}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Timeline Approach */}
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                          
                          {/* 01 / ПРОБЛЕМА */}
                          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-primary bg-[#0a0a0a] text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            </div>
                            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
                              <h4 className="text-[10px] font-mono font-bold text-ring uppercase tracking-widest mb-2">01 / Проблема</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
                            </div>
                          </div>

                          {/* 02 / ПРОЦЕСС (Work) */}
                          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-[#0a0a0a] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                            </div>
                            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
                              <h4 className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest mb-3">02 / Решение & Процесс</h4>
                              <ul className="space-y-3">
                                {c.work.map((item, index) => (
                                  <li key={index} className="flex gap-3 items-start text-sm text-muted-foreground">
                                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* 03 / РЕЗУЛЬТАТ */}
                          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-emerald-500/50 bg-[#0a0a0a] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            </div>
                            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                              <h4 className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">03 / Результат</h4>
                              <p className="text-sm font-semibold text-white leading-relaxed">{c.result}</p>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Right Column: Visual / Interactive Widget */}
                      <div className="lg:col-span-5 relative">
                        <div className="sticky top-0 p-1">
                          
                          {/* Widget Placeholder */}
                          <div className="aspect-[4/5] rounded-2xl border border-white/10 bg-black/40 overflow-hidden relative flex flex-col">
                            <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                              <span className="ml-2 text-[10px] font-mono text-white/40 uppercase tracking-wider">Engineering Workspace</span>
                            </div>
                            
                            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                              <div className="absolute inset-0 floating-grid opacity-20 pointer-events-none" />
                              
                              <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,0,34,0.3)] z-10">
                                <span className="text-primary font-mono text-xl font-bold">0{activeCaseId}</span>
                              </div>
                              <h4 className="text-lg font-bold text-white mb-2 z-10">Интерактивный артефакт</h4>
                              <p className="text-xs text-muted-foreground z-10">Визуализация данных кейса в разработке.</p>
                              
                              <button className="mt-8 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white/70 hover:bg-white/10 transition-colors z-10">
                                Имитация скрипта →
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  )
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
