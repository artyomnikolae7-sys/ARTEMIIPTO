import { useState } from 'react'
import { MessageSquare, ShieldCheck, CheckCheck } from 'lucide-react'
import { CHATS } from '../data/chatsData'

export function ChatSection() {
  const [selectedChatId, setSelectedChatId] = useState<number>(1)

  const currentChat = CHATS.find(c => c.id === selectedChatId) || CHATS[0]

  return (
    <section id="chat" className="space-y-10 animate-fade-slide-in">
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Согласования и надзор</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Рабочая переписка и <span className="font-instrument italic font-normal text-gradient-warm">коммуникация</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Примеры реального взаимодействия с Технадзором, ГИПами, Заказчиками и подрядчиками при согласовании замечаний
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 themed-card p-4 sm:p-6 rounded-2xl min-h-[560px]">
        
        {/* Chat Sidebar (4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-2 border-b lg:border-b-0 lg:border-r border-border pb-4 lg:pb-0 lg:pr-4">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
              <MessageSquare size={14} className="text-primary" />
              Диалоги ({CHATS.length})
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono">
              Exon / Telegram
            </span>
          </div>

          <div className="space-y-1.5 overflow-y-auto max-h-[480px] pr-1">
            {CHATS.map(chat => (
              <button
                key={chat.id}
                onClick={() => setSelectedChatId(chat.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${
                  selectedChatId === chat.id
                    ? 'bg-primary/10 border border-primary/30'
                    : 'hover:bg-secondary/60 border border-transparent'
                }`}
              >
                <span className="text-2xl shrink-0">{chat.avatar}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline gap-1">
                    <h4 className="text-xs font-bold text-foreground truncate">{chat.name}</h4>
                    <span className="text-[9px] font-mono text-muted-foreground shrink-0">{chat.date}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">{chat.author} • {chat.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Main Messages Stream (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-4 lg:pl-2">
          
          {/* Active Chat Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentChat.avatar}</span>
              <div>
                <h4 className="text-sm font-bold text-foreground leading-tight">{currentChat.name}</h4>
                <p className="text-xs text-muted-foreground">{currentChat.author} ({currentChat.role})</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-500 font-mono">
              <ShieldCheck size={14} />
              <span>Вопрос решён</span>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="space-y-3.5 flex-1 overflow-y-auto max-h-[380px] p-2">
            {currentChat.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
              >
                <div className="text-[10px] font-mono text-muted-foreground mb-1">
                  {msg.sender === 'me' ? 'Артемий (ПТО)' : `${currentChat.author} (${currentChat.role})`} • {msg.time}
                </div>
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'me'
                      ? 'bg-primary text-primary-foreground rounded-tr-none font-medium'
                      : 'bg-secondary text-foreground rounded-tl-none border border-border'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Footer Note */}
          <div className="p-3 rounded-xl bg-secondary/60 border border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCheck size={14} className="text-primary" />
              Замечание закрыто в системе Exon без задержек сроков
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
