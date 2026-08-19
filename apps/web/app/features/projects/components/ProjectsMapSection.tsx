import { useState, useEffect, useRef } from 'react'
import { MapPin, Search } from 'lucide-react'
import L from 'leaflet'
import { OBJECTS } from '../data/projectsData'
import { HoverCard } from '../../../components/ui/HoverCard'

interface ProjectsMapSectionProps {
  theme: string
}

// Function to generate stats based on object ID
const getObjectStats = (id: number) => {
  const progressList = [100, 95, 100, 90, 85, 100, 95, 100, 90, 100, 95, 100, 90, 100, 95, 100, 95]
  const aosrList = [45, 24, 60, 32, 18, 55, 30, 48, 22, 50, 28, 65, 36, 70, 40, 52, 34]
  const systemsList = [
    ['ВТСС', 'СВН', 'СКД', 'ОСО', 'СКТВ', 'ШПД'],
    ['АОСР', 'ОЖР'],
    ['ВТСС', 'НСС'],
    ['ОЗДС', 'СС'],
    ['АК', 'ВОР'],
    ['СС'],
    ['ИД', 'АОСР'],
    ['ВТСС', 'СВН', 'СКТВ', 'АК', 'СС'],
    ['ИД', 'Exon'],
    ['СС', 'АК'],
    ['ИД'],
    ['НСС', 'СС'],
    ['ИД', 'АОСР'],
    ['Exon', 'JS'],
    ['ВОР', 'АОСР'],
    ['СС'],
    ['СС', 'НСС']
  ]
  
  const index = (id - 1) % progressList.length
  return {
    progress: progressList[index],
    aosrCount: aosrList[index],
    systems: systemsList[index]
  }
}

export function ProjectsMapSection({ theme }: ProjectsMapSectionProps) {
  const [selectedObjectId, setSelectedObjectId] = useState<number>(1)
  const [contractorFilter, setContractorFilter] = useState<string>('Все')
  const [searchQuery, setSearchQuery] = useState<string>('')
  
  // Custom cursor & tooltip states
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHoveringMap, setIsHoveringMap] = useState(false)
  const [hoveredObject, setHoveredObject] = useState<any | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const mapRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<L.Map | null>(null)
  const markersRef = useRef<{ [key: number]: L.Marker }>({})

  // Distinct contractors list with counts
  const contractorCounts = OBJECTS.reduce((acc, obj) => {
    acc[obj.contractor] = (acc[obj.contractor] || 0) + 1
    return acc
  }, {} as { [key: string]: number })


  // Filtered objects
  const filteredObjects = OBJECTS.filter(o => {
    const matchesContractor = contractorFilter === 'Все' || o.contractor === contractorFilter
    const matchesSearch = o.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          o.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.contractor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesContractor && matchesSearch
  })
  
  const selectedObject = OBJECTS.find(o => o.id === selectedObjectId)

  // Initialize Map
  useEffect(() => {
    if (!mapRef.current) return
    if (leafletMap.current) return

    const moscowCenter: [number, number] = [55.7512, 37.6184]
    const map = L.map(mapRef.current, {
      center: moscowCenter,
      zoom: 10,
      zoomControl: false,
      attributionControl: false // Hide the Leaflet attribution watermark
    })

    leafletMap.current = map

    L.control.zoom({
      position: 'topright'
    }).addTo(map)

    const tileUrl = theme === 'dark'
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

    L.tileLayer(tileUrl, {
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map)

    const customIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="w-8 h-8 rounded-full bg-amber-500/25 border-2 border-amber-500/80 flex items-center justify-center transition-all duration-300">
               <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
             </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    })

    OBJECTS.forEach(obj => {
      const marker = L.marker(obj.coords, { icon: customIcon })
        .addTo(map)
        .on('click', () => {
          setSelectedObjectId(obj.id)
        })
        .on('mouseover', () => {
          setHoveredObject(obj)
          // Translate map latlng to container client pixels
          const pixelPos = map.latLngToContainerPoint(obj.coords)
          setTooltipPos({ x: pixelPos.x, y: pixelPos.y })
        })
        .on('mouseout', () => {
          setHoveredObject(null)
        })
      
      markersRef.current[obj.id] = marker
    })

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove()
        leafletMap.current = null
      }
    }
  }, [theme])

  // Sync Map when selectedObjectId changes
  useEffect(() => {
    if (!leafletMap.current) return

    const selectedObj = OBJECTS.find(o => o.id === selectedObjectId)
    if (!selectedObj) return

    leafletMap.current.setView(selectedObj.coords, 14, {
      animate: true,
      duration: 0.8
    })

    const customIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="w-8 h-8 rounded-full bg-amber-500/25 border-2 border-amber-500/80 flex items-center justify-center">
               <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
             </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    })

    const activeIcon = L.divIcon({
      className: 'custom-div-icon active-marker',
      html: `<div class="w-10 h-10 rounded-full bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
               <div class="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]"></div>
             </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    })

    Object.entries(markersRef.current).forEach(([id, marker]) => {
      if (Number(id) === selectedObjectId) {
        marker.setIcon(activeIcon)
        marker.setZIndexOffset(1000)
      } else {
        marker.setIcon(customIcon)
        marker.setZIndexOffset(0)
      }
    })
  }, [selectedObjectId])

  // Track cursor movement on map for the smooth follower
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mapContainerRef.current) return
    const rect = mapContainerRef.current.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section className="space-y-8 animate-fade-slide-in relative">
      <div className="gradient-glow top-[-50px] right-[-50px] opacity-60"></div>
      
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
        <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">География объектов в Москве</span>
        <h2 className="text-4xl font-light text-foreground tracking-tight font-display">
          Мои строительные <span className="font-instrument italic font-normal text-gradient-red-orange">объекты</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Интерактивная карта проектов, на которых я успешно закрыл исполнительную документацию (ИД). 
          Выберите объект из списка слева для центрирования карты и просмотра деталей.
        </p>
      </div>

      {/* Map Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/5 dark:bg-black/20 p-4 rounded-3xl border border-border backdrop-blur-sm shadow-xl relative z-10">
        
        {/* Sidebar List */}
        <div className="lg:col-span-4 flex flex-col h-[650px] themed-card rounded-2xl overflow-hidden shadow-md">
          
          {/* Search & Filter Header */}
          <div className="p-4 border-b border-border space-y-4 bg-muted/40">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 text-muted-foreground" size={14} />
              <input 
                type="text" 
                placeholder="Поиск по адресу, компании..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring transition-all text-xs shadow-inner"
              />
            </div>

            {/* Interactive Contractor Filter Tags with Badge count */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold tracking-wider">Подрядные организации:</span>
              <div className="flex flex-wrap gap-1.5 max-h-[110px] overflow-y-auto pr-1 no-scrollbar">
                <button
                  onClick={() => setContractorFilter('Все')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all border cursor-pointer flex items-center gap-1.5 ${
                    contractorFilter === 'Все' 
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm font-bold' 
                      : 'bg-background hover:bg-muted text-muted-foreground border-border'
                  }`}
                >
                  Все ({OBJECTS.length})
                </button>
                {Object.entries(contractorCounts).map(([name, count]) => (
                  <button
                    key={name}
                    onClick={() => setContractorFilter(name)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all border cursor-pointer flex items-center gap-1.5 ${
                      contractorFilter === name 
                        ? 'bg-primary text-primary-foreground border-primary shadow-sm font-bold' 
                        : 'bg-background hover:bg-muted text-muted-foreground border-border'
                    }`}
                  >
                    <span>{name.replace('ООО ', '').replace('АО ', '')}</span>
                    <span className={`px-1.5 py-0.2 rounded font-mono text-[9px] ${contractorFilter === name ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Objects list scrollable */}
          <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-border p-2 space-y-1.5 bg-muted/20">
            {filteredObjects.length > 0 ? (
              filteredObjects.map(obj => {
                const stats = getObjectStats(obj.id)
                return (
                  <HoverCard
                    key={obj.id}
                    isActive={selectedObjectId === obj.id}
                    onClick={() => setSelectedObjectId(obj.id)}
                    className="p-3.5"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${selectedObjectId === obj.id ? 'text-white' : 'text-ring'}`}>
                        {obj.contractor}
                      </span>
                      <span className="text-[9px] text-muted-foreground font-mono">{obj.district.split(' ')[0]}</span>
                    </div>
                    <h4 className={`text-xs font-bold mb-1 line-clamp-1 ${selectedObjectId === obj.id ? 'text-white' : 'text-foreground'}`}>
                      {obj.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground line-clamp-1 flex items-center gap-1">
                      <MapPin size={12} className="text-ring shrink-0" />
                      {obj.address}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 h-1.5 bg-muted/20 dark:bg-black/40 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                          style={{ width: `${stats.progress}%` }}
                        />
                      </div>
                      <span className={`text-[9px] font-mono font-bold ${selectedObjectId === obj.id ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {stats.progress}%
                      </span>
                    </div>
                  </HoverCard>
                )
              })
            ) : (
              <div className="p-8 text-center text-muted-foreground text-xs font-mono">Объекты не найдены</div>
            )}
          </div>
        </div>

        {/* Map Canvas Wrapper */}
        <div 
          ref={mapContainerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHoveringMap(true)}
          onMouseLeave={() => {
            setIsHoveringMap(false)
            setHoveredObject(null)
          }}
          className="lg:col-span-8 h-[650px] rounded-2xl overflow-hidden relative border border-border shadow-md select-none"
        >
          <div ref={mapRef} className="w-full h-full z-10" />

          {/* Smooth custom cursor follower */}
          {isHoveringMap && (
            <div 
              className="pointer-events-none absolute w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center z-50 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
                transition: 'left 0.12s cubic-bezier(0.25, 1, 0.5, 1), top 0.12s cubic-bezier(0.25, 1, 0.5, 1)',
                background: 'radial-gradient(circle, rgba(255,0,34,0.06) 0%, transparent 70%)'
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <div className="w-1 h-1 rounded-full bg-primary" />
            </div>
          )}

          {/* Premium Hover Card (Popup) with statistics and indicators */}
          {hoveredObject && (
            <div 
              className="absolute glass-panel p-5 rounded-2xl border border-primary/20 shadow-2xl z-30 pointer-events-none transform -translate-x-1/2 mt-3 animate-fade-slide-in max-w-sm"
              style={{
                left: `${tooltipPos.x}px`,
                top: `${tooltipPos.y - 180}px`,
                transition: 'left 0.15s ease-out, top 0.15s ease-out',
                background: 'rgba(13,13,13,0.92)' // Stays dark for map legibility
              }}
            >
              <div className="space-y-3">
                <div>
                  <span className="text-[8px] font-mono text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded uppercase font-bold bg-emerald-500/5">
                    {hoveredObject.contractor}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1 leading-snug">{hoveredObject.title}</h4>
                </div>

                {/* Statistics & Indicators */}
                <div className="grid grid-cols-2 gap-3 bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="space-y-0.5 text-center">
                    <span className="text-[8px] text-muted-foreground uppercase font-mono block">Прогресс ИД</span>
                    <span className="text-sm font-bold font-mono text-emerald-400">{getObjectStats(hoveredObject.id).progress}%</span>
                  </div>
                  <div className="space-y-0.5 text-center">
                    <span className="text-[8px] text-muted-foreground uppercase font-mono block">Сдано АОСР</span>
                    <span className="text-sm font-bold font-mono text-ring">{getObjectStats(hoveredObject.id).aosrCount} актов</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {getObjectStats(hoveredObject.id).systems.map(sys => (
                    <span key={sys} className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[9px] border border-white/5">
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Map Overlay Selected Card Info */}
          {selectedObject && (
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md glass-panel border-beam-container gradient-border-premium p-6 rounded-2xl shadow-2xl z-20 animate-fade-slide-in">
              <div className="border-beam" />
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[9px] font-mono text-ring bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20 font-bold uppercase tracking-wider">{selectedObject.contractor}</span>
                  <h3 className="text-lg font-bold text-foreground mt-2 leading-snug font-display">{selectedObject.title}</h3>
                </div>
                <span className="text-[9px] font-mono text-muted-foreground bg-muted border border-border px-2 py-1 rounded-lg uppercase tracking-wider font-bold">{selectedObject.district.split(' ')[0]}</span>
              </div>

              <div className="space-y-3.5 text-xs text-muted-foreground font-medium font-sans">
                <div className="flex gap-2 items-start">
                  <MapPin size={14} className="text-ring shrink-0 mt-0.5" />
                  <span className="text-foreground font-sans">{selectedObject.address}</span>
                </div>

                {/* Extended info inside details */}
                <div className="grid grid-cols-3 gap-2 bg-muted/40 p-2.5 rounded-xl border border-border text-center">
                  <div>
                    <span className="text-[8px] uppercase font-mono block text-muted-foreground">Прогресс ИД</span>
                    <span className="text-xs font-bold font-mono text-emerald-500">{getObjectStats(selectedObject.id).progress}%</span>
                  </div>
                  <div>
                    <span className="text-[8px] uppercase font-mono block text-muted-foreground">Закрыто АОСР</span>
                    <span className="text-xs font-bold font-mono text-ring">{getObjectStats(selectedObject.id).aosrCount} шт.</span>
                  </div>
                  <div>
                    <span className="text-[8px] uppercase font-mono block text-muted-foreground">Системы</span>
                    <span className="text-xs font-bold font-mono text-foreground truncate block">{getObjectStats(selectedObject.id).systems[0]} + {getObjectStats(selectedObject.id).systems.length - 1}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border text-[11px] text-muted-foreground leading-relaxed font-sans">
                  <strong className="text-ring block mb-1 uppercase font-mono tracking-wider font-bold">Специфика / Задачи ПТО:</strong>
                  {selectedObject.details}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
