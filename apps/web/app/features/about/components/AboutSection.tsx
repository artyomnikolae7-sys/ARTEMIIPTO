import { Award, MapPin, Calendar, Building, FileStack, FileCheck2, Wrench } from 'lucide-react'
import content from '../../../data/content.json'

export function AboutSection() {
  const facts = content.about.facts.map(f => {
    let Icon = Building
    if (f.icon === 'FileStack') Icon = FileStack
    if (f.icon === 'FileCheck2') Icon = FileCheck2
    if (f.icon === 'Wrench') Icon = Wrench
    
    return { ...f, icon: Icon }
  })

  return (
    <section id="about" className="space-y-8 animate-fade-slide-in">
      <div className="text-center space-y-2">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">{content.about.sectionTag}</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          {content.about.title.part1}<span className="font-instrument italic font-normal text-gradient-warm">{content.about.title.part2}</span>{content.about.title.part3}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Bio Card */}
        <div className="lg:col-span-3 themed-card p-6 sm:p-8 rounded-xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Building size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground font-display">{content.about.profile.name}</h3>
              <p className="text-xs font-mono text-primary uppercase tracking-wider font-medium">{content.about.profile.role}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {content.about.profile.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-2 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              <span>{content.about.profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar size={14} className="text-primary" />
              <span>{content.about.profile.experience}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Award size={14} className="text-primary" />
              <span>{content.about.profile.education}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {facts.map((f) => (
            <div key={f.label} className="themed-card p-5 rounded-xl text-center space-y-1.5 card-lift">
              <f.icon size={22} strokeWidth={1.5} className="text-primary mx-auto" />
              <span className="text-2xl sm:text-3xl font-bold font-mono text-foreground block">{f.value}</span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono font-medium leading-tight">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
