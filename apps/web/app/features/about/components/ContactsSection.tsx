import { useState } from 'react'
import { MapPin, Mail, Send, Check } from 'lucide-react'

export function ContactsSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  return (
    <section className="space-y-8 animate-fade-slide-in relative">
      <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Связаться со мной</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Начать <span className="font-instrument italic font-normal text-gradient-warm">сотрудничество</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Если у вас есть вопросы по сдаче ИД, ведению ВОР на ваших объектах или вы хотите обсудить проект автоматизации ПТО — заполните форму ниже или свяжитесь напрямую.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-4xl mx-auto relative z-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
          <div className="themed-card p-5 rounded-xl space-y-1.5">
            <span className="text-[10px] font-mono text-primary uppercase font-semibold">Локация</span>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin size={16} className="text-primary shrink-0" />
              <span>Москва, Российская Федерация</span>
            </div>
          </div>

          <div className="themed-card p-5 rounded-xl space-y-1.5">
            <span className="text-[10px] font-mono text-primary uppercase font-semibold">Электронная почта</span>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:artyomnikolae7@gmail.com" className="hover:underline hover:text-primary transition-colors">artyomnikolae7@gmail.com</a>
            </div>
          </div>

          <div className="themed-card p-5 rounded-xl space-y-1.5">
            <span className="text-[10px] font-mono text-primary uppercase font-semibold">Telegram</span>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Send size={16} className="text-primary shrink-0" />
              <a href="https://t.me/Amantle_x" target="_blank" rel="noreferrer" className="hover:underline hover:text-primary transition-colors">@Amantle_x</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 themed-card p-6 sm:p-8 rounded-xl">
          <h4 className="text-base font-semibold text-foreground mb-4 font-display">Отправить сообщение</h4>
          
          {formSubmitted ? (
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl text-center space-y-3">
              <Check className="w-10 h-10 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground text-sm">Сообщение отправлено!</h4>
              <p className="text-xs text-muted-foreground">Спасибо за обращение. Я свяжусь с вами в течение рабочего дня.</p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="text-xs text-primary hover:underline mt-2 cursor-pointer font-medium"
              >
                Отправить ещё одно
              </button>
            </div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                setFormSubmitted(true)
              }}
              className="space-y-3.5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-muted-foreground mb-1 font-mono uppercase">Ваше Имя *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Артемий" 
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-muted-foreground mb-1 font-mono uppercase">Email *</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-muted-foreground mb-1 font-mono uppercase">Сообщение *</label>
                <textarea 
                  required 
                  rows={3}
                  placeholder="Здравствуйте, Артемий! Требуется сдать ИД по объекту..." 
                  className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-xs resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-primary text-white font-medium text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 shadow-sm transition-all active:scale-[0.99]"
              >
                <Send size={13} /> Отправить сообщение
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
