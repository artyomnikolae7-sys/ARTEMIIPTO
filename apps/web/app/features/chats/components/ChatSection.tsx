import { useState } from 'react'
import { CHATS } from '../data/chatsData'

export function ChatSection() {
  const [selectedChatId, setSelectedChatId] = useState<number>(1)

  return (
    <section className="space-y-8 animate-fade-slide-in relative">
      <div className="gradient-glow top-[-50px] right-[-50px] opacity-60"></div>
      
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Согласования и коммуникация</span>
        <h2 className="text-4xl font-light text-white tracking-tight font-display">
          Рабочая <span className="font-instrument italic font-normal text-gradient-red-orange">переписка</span> и Exon
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Примеры реального взаимодействия с Технадзором, ГИПами, Заказчиками и подрядчиками при сдаче исполнительной документации и ведении объектов.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-black/20 p-3 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl h-[650px] relative z-10">
        
        {/* Chat Sidebar */}
        <div className="lg:col-span-4 glass-panel rounded-xl flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/5 font-semibold text-xs uppercase tracking-wider font-mono flex items-center justify-between text-white">
            <span>Диалоги ({CHATS.length})</span>
            <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">Exon / Messenger</span>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-white/5 no-scrollbar">
            {CHATS.map(chat => (
              <button
                key={chat.id}
                onClick={() => setSelectedChatId(chat.id)}
                className={`w-full text-left p-4 transition-all flex items-start gap-3 border-l-2 ${selectedChatId === chat.id ? 'bg-white/5 border-l-ring' : 'bg-transparent border-l-transparent hover:bg-white/5'}`}
              >
                <span className="text-2xl leading-none">{chat.avatar}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-xs font-semibold text-white truncate">{chat.name}</h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate">{chat.author} • {chat.role}</p>
                  <span className="inline-block mt-1 text-[9px] text-ring font-mono uppercase tracking-wider">{chat.date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Main Thread View */}
        <div className="lg:col-span-8 glass-panel border-beam-container rounded-xl flex flex-col overflow-hidden">
          <div className="border-beam" />
          {(() => {
            const currentChat = CHATS.find(c => c.id === selectedChatId) || CHATS[0]
            return (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{currentChat.avatar}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{currentChat.name}</h3>
                      <p className="text-xs text-muted-foreground">{currentChat.author} ({currentChat.role})</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-[10px] font-mono rounded-lg bg-primary/10 text-ring border border-primary/20 font-bold uppercase tracking-wider">
                    Статус: {currentChat.status}
                  </span>
                </div>

                {/* Chat Messages Feed */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#0a0a0c] relative">
                  {/* Subtle Chat Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  {currentChat.messages.map((msg, idx) => {
                    const isMe = msg.sender.includes('Николаев')
                    return (
                      <div key={idx} className={`flex relative z-10 ${isMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] sm:max-w-[75%] px-4 py-2.5 shadow-sm text-[13px] sm:text-sm space-y-1 ${isMe ? 'bg-gradient-to-br from-primary to-accent text-white rounded-[20px] rounded-br-[4px] shadow-[0_2px_10px_rgba(255,0,34,0.2)]' : 'bg-[#1c1c1e] text-[#f5f5f7] rounded-[20px] rounded-bl-[4px] border border-white/5'}`}>
                          <div className={`flex items-center gap-3 text-[10px] font-medium opacity-60 mb-0.5 ${isMe ? 'justify-end' : 'justify-start'}`}>
                            {!isMe && <span>{msg.sender}</span>}
                            <span>{msg.time}</span>
                            {isMe && <span>Вы</span>}
                          </div>
                          <p className="leading-snug">{msg.text}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Chat Input Placeholder (iOS Style Frosted Glass) */}
                <div className="p-3 border-t border-white/5 bg-black/60 backdrop-blur-xl flex items-center gap-3 shrink-0">
                  <div className="flex-1 flex items-center bg-[#1c1c1e] rounded-full border border-white/10 px-4 py-2 text-sm shadow-inner transition-all hover:border-white/20">
                    <input
                      type="text"
                      disabled
                      placeholder="Сообщение..."
                      className="flex-1 bg-transparent text-white placeholder-muted-foreground focus:outline-none cursor-not-allowed"
                    />
                  </div>
                  <button disabled className="w-9 h-9 rounded-full bg-primary/20 text-white/50 flex items-center justify-center shrink-0 cursor-not-allowed shadow-inner transition-all hover:bg-primary/30">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </button>
                </div>
              </>
            )
          })()}
        </div>

      </div>
    </section>
  )
}
