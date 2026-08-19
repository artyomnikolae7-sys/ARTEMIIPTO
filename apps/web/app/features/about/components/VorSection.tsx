import { useState, useEffect } from 'react'
import * as XLSX from 'xlsx'
import { Search, Plus, Upload, Download, LayoutGrid, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
import defaultVorData from '../../../data/vor-default.json'

export interface VorItem {
  id: any
  num: any
  type: any
  code: any
  system: any
  name: any
  model: any
  factory: any
  supplier: any
  exonName: any
  unit: any
  qty: any
  customerSupply: any
  contract: any
  addendum: any
  specification: any
  submittedLk: any
  exonQty: any
  note: any
  status: any
}

interface VorSectionProps {
  setActiveTab?: (tab: any) => void
}

export function VorSection({ setActiveTab }: VorSectionProps) {
  // VOR Data State
  const [vorData, setVorData] = useState<VorItem[]>(defaultVorData as VorItem[])
  const [vorSearchQuery, setVorSearchQuery] = useState<string>('')
  const [vorSystemFilter, setVorSystemFilter] = useState<string>('Все')
  const [vorStatusFilter, setVorStatusFilter] = useState<string>('Все')
  const [vorSupplierFilter, setVorSupplierFilter] = useState<string>('Все')

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  // Column Visibility State
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    code: true,
    system: true,
    name: true,
    model: true,
    supplier: true,
    qty: true,
    unit: true,
    status: true,
    actions: true
  })
  const [showColumnDropdown, setShowColumnDropdown] = useState<boolean>(false)

  // Inline editing cell tracker
  const [editingCell, setEditingCell] = useState<{ rowIndex: number; fieldName: keyof VorItem } | null>(null)
  const [editValue, setEditValue] = useState<string>('')

  // Filter distinct values for VOR Table
  const uniqueSystems = ['Все', ...Array.from(new Set(vorData.map(item => item.system).filter(Boolean)))]
  const uniqueStatuses = ['Все', ...Array.from(new Set(vorData.map(item => item.status).filter(Boolean)))]
  const uniqueSuppliers = ['Все', ...Array.from(new Set(vorData.map(item => item.supplier).filter(Boolean)))]

  // Filter VOR Data
  const filteredVorData = vorData.filter(item => {
    const matchesSearch = 
      (item.name?.toString() || '').toLowerCase().includes(vorSearchQuery.toLowerCase()) ||
      (item.model?.toString() || '').toLowerCase().includes(vorSearchQuery.toLowerCase()) ||
      (item.code?.toString() || '').toLowerCase().includes(vorSearchQuery.toLowerCase()) ||
      (item.id?.toString() || '').toLowerCase().includes(vorSearchQuery.toLowerCase())
    
    const matchesSystem = vorSystemFilter === 'Все' || item.system === vorSystemFilter
    const matchesStatus = vorStatusFilter === 'Все' || item.status === vorStatusFilter
    const matchesSupplier = vorSupplierFilter === 'Все' || item.supplier === vorSupplierFilter

    return matchesSearch && matchesSystem && matchesStatus && matchesSupplier
  })

  // Pagination slices
  const totalPages = Math.ceil(filteredVorData.length / rowsPerPage)
  const paginatedVorData = filteredVorData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

  // Reset page on filter/search change
  useEffect(() => {
    setCurrentPage(1)
  }, [vorSearchQuery, vorSystemFilter, vorStatusFilter, vorSupplierFilter, rowsPerPage])

  // Excel Import Handler
  const handleImportExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const dataBytes = event.target?.result
        const workbook = XLSX.read(dataBytes, { type: 'binary' })
        
        // Find sheet named 'ВОР' or get first
        const sheetName = workbook.SheetNames.find(name => name.includes('ВОР')) || workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        
        // Read sheet as AOA
        const rawRows = XLSX.utils.sheet_to_json<any[]>(worksheet, { header: 1 })
        
        // Skip title row (index 0) and header row (index 1) -> start from index 2
        const keys: (keyof VorItem)[] = [
          'id', 'num', 'type', 'code', 'system', 'name', 'model', 'factory', 
          'supplier', 'exonName', 'unit', 'qty', 'customerSupply', 'contract', 
          'addendum', 'specification', 'submittedLk', 'exonQty', 'note', 'status'
        ]

        const parsedItems: VorItem[] = []
        for (let r = 2; r < rawRows.length; r++) {
          const row = rawRows[r]
          // Skip if row is mostly empty
          if (!row || (!row[0] && !row[5])) continue

          const item: Partial<VorItem> = {}
          keys.forEach((key, colIndex) => {
            item[key] = row[colIndex] !== undefined ? row[colIndex] : null
          })
          parsedItems.push(item as VorItem)
        }

        if (parsedItems.length > 0) {
          setVorData(parsedItems)
          alert(`Успешно импортировано ${parsedItems.length} строк из листа "${sheetName}"`)
        } else {
          alert('Не найдено корректных строк для импорта.')
        }
      } catch (err) {
        console.error(err)
        alert('Ошибка при импорте Excel файла. Проверьте структуру.')
      }
    }
    reader.readAsBinaryString(file)
  }

  // Excel Export Handler
  const handleExportExcel = () => {
    const headers = [
      'ID', '№ п/п', 'Тип', 'Шифр', 'Система', 'Наименование', 'Марка, тип, опросный лист', 
      'Завод, страна', 'Поставщик', 'Наименование для EXON', 'Ед. изм.', 'Кол-во', 
      'Поставка заказчика', 'Договор', 'Доп. соглашение', 'Спецификация', 
      'Выставлено в ЛК', 'Кол-во EXON', 'Примечание', 'Состояние'
    ]

    const sheetData = [
      ['Ведомость объемов работ (ВОР)'],
      headers,
      ...vorData.map(item => [
        item.id, item.num, item.type, item.code, item.system, item.name, item.model,
        item.factory, item.supplier, item.exonName, item.unit, item.qty,
        item.customerSupply, item.contract, item.addendum, item.specification,
        item.submittedLk, item.exonQty, item.note, item.status
      ])
    ]

    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ВОР')
    XLSX.writeFile(workbook, 'VOR_Table_Export.xlsx')
  }

  // Inline Cell Editing Commits
  const handleCellClick = (rowIndex: number, fieldName: keyof VorItem, value: any) => {
    setEditingCell({ rowIndex, fieldName })
    setEditValue(value !== null && value !== undefined ? value.toString() : '')
  }

  const handleCellSave = (globalRowIndex: number) => {
    if (!editingCell) return
    
    const updated = [...vorData]
    const item = updated[globalRowIndex]
    
    // Parse quantity if it's numeric
    if (editingCell.fieldName === 'qty' || editingCell.fieldName === 'exonQty') {
      const numVal = parseFloat(editValue)
      item[editingCell.fieldName] = isNaN(numVal) ? editValue : numVal
    } else {
      (item as any)[editingCell.fieldName] = editValue
    }

    setVorData(updated)
    setEditingCell(null)
  }

  // Add new row to VOR
  const handleAddRow = () => {
    const newItem: VorItem = {
      id: `NEW.${Date.now().toString().slice(-4)}`,
      num: vorData.length + 1,
      type: 'О',
      code: '',
      system: uniqueSystems[1] || 'Связь',
      name: 'Новый элемент ВОР',
      model: '',
      factory: '',
      supplier: '',
      exonName: '',
      unit: 'шт.',
      qty: 0,
      customerSupply: false,
      contract: '',
      addendum: '',
      specification: '',
      submittedLk: false,
      exonQty: 0,
      note: '',
      status: 'В работе'
    }
    setVorData([newItem, ...vorData])
    setCurrentPage(1)
  }

  // Delete row from VOR
  const handleDeleteRow = (id: any) => {
    if (window.confirm('Вы действительно хотите удалить эту строку ВОР?')) {
      setVorData(vorData.filter(item => item.id !== id))
    }
  }

  return (
    <section id="vor" className="space-y-8 animate-fade-slide-in relative">
      {/* Header info */}
      <div className="text-center space-y-3">
        <span className="text-primary font-mono text-xs tracking-widest uppercase font-semibold">Исполнительная ведомость объемов</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-display">
          Интерактивная <span className="font-instrument italic font-normal text-gradient-warm">ведомость ВОР</span> (Шахматка)
        </h2>
        <p className="text-muted-foreground text-xs leading-relaxed max-w-2xl mx-auto">
          Интерактивная ведомость со всеми объемами работ по проекту из листа <strong>ВОР</strong>. 
          Вы можете редактировать ячейки на лету (двойной клик), фильтровать, а также загружать/выгружать файлы в формате Excel.
        </p>
      </div>

      {/* Table Control Panel */}
      <div className="themed-card p-6 rounded-2xl shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md group">
            <Search className="absolute left-3.5 top-3 text-muted-foreground group-focus-within:text-primary transition-colors" size={14} />
            <input
              type="text"
              placeholder="Поиск по наименованию, шифру, ID..."
              value={vorSearchQuery}
              onChange={(e) => setVorSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs transition-all"
            />
          </div>

          {/* Import / Export & Add Buttons */}
          <div className="flex flex-wrap gap-2.5 items-center">
            
            {/* Add row */}
            <button 
              onClick={handleAddRow}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-lg cursor-pointer hover:brightness-110 shadow-sm transition-all active:scale-95"
            >
              <Plus size={14} /> Добавить строку
            </button>

            {/* Import Excel */}
            <label className="flex items-center gap-1.5 px-4 py-2.5 border border-border bg-secondary hover:bg-muted text-foreground text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition-all active:scale-95">
              <Upload size={14} className="text-primary" />
              <span>Импорт XLSX</span>
              <input 
                type="file" 
                accept=".xlsx, .xls"
                onChange={handleImportExcel}
                className="hidden" 
              />
            </label>

            {/* Export Excel */}
            <button 
              onClick={handleExportExcel}
              className="flex items-center gap-1.5 px-4 py-2.5 border border-border bg-secondary hover:bg-muted text-foreground text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition-all active:scale-95"
            >
              <Download size={14} className="text-primary" /> Экспорт XLSX
            </button>

            {/* Column Visibility Trigger */}
            <div className="relative">
              <button 
                onClick={() => setShowColumnDropdown(!showColumnDropdown)}
                className="flex items-center gap-1.5 px-4 py-2.5 border border-border bg-secondary hover:bg-muted text-foreground text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition-all active:scale-95"
              >
                <LayoutGrid size={14} className="text-primary" /> Колонки
              </button>
              
              {showColumnDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-card border border-border p-2 shadow-xl z-50 text-xs text-foreground space-y-1">
                  {Object.keys(visibleColumns).map((col) => (
                    <label key={col} className="flex items-center gap-2 p-1.5 hover:bg-secondary rounded-lg cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={(visibleColumns as any)[col]}
                        onChange={(e) => setVisibleColumns({
                          ...visibleColumns,
                          [col]: e.target.checked
                        })}
                        className="rounded border-border text-primary focus:ring-primary bg-background"
                      />
                      <span className="capitalize">{col === 'qty' ? 'Кол-во' : col === 'unit' ? 'Ед.изм.' : col === 'model' ? 'Марка/тип' : col === 'name' ? 'Наименование' : col === 'code' ? 'Шифр' : col === 'status' ? 'Состояние' : col === 'actions' ? 'Действия' : col}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Faceted Filters Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
          
          {/* System Filter */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-muted-foreground uppercase font-mono tracking-wider">Фильтр по системе</label>
            <select
              value={vorSystemFilter}
              onChange={(e) => setVorSystemFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
            >
              {uniqueSystems.map(sys => (
                <option key={sys} value={sys} className="bg-card text-foreground">{sys}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-muted-foreground uppercase font-mono tracking-wider">Фильтр по состоянию</label>
            <select
              value={vorStatusFilter}
              onChange={(e) => setVorStatusFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
            >
              {uniqueStatuses.map(st => (
                <option key={st} value={st} className="bg-card text-foreground">{st || 'Не указано'}</option>
              ))}
            </select>
          </div>

          {/* Supplier Filter */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-muted-foreground uppercase font-mono tracking-wider">Фильтр по поставщику</label>
            <select
              value={vorSupplierFilter}
              onChange={(e) => setVorSupplierFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
            >
              {uniqueSuppliers.map(sup => (
                <option key={sup} value={sup} className="bg-card text-foreground">{sup || 'Не указано'}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Excel Data Table Canvas */}
      <div className="glass-panel border-beam-container gradient-border-premium rounded-2xl overflow-hidden shadow-2xl relative z-10">
        <div className="border-beam" />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-muted-foreground font-mono uppercase tracking-wider text-[10px] shadow-sm backdrop-blur-md">
                {visibleColumns.id && <th className="p-4 w-16 text-center font-bold">ID</th>}
                {visibleColumns.code && <th className="p-4 font-bold">Шифр</th>}
                {visibleColumns.system && <th className="p-4 font-bold">Система</th>}
                {visibleColumns.name && <th className="p-4 w-[30%] font-bold">Наименование <span className="text-ring opacity-70 ml-1 text-[8px]">(Дабл-клик)</span></th>}
                {visibleColumns.model && <th className="p-4 w-[20%] font-bold">Марка, тип</th>}
                {visibleColumns.supplier && <th className="p-4 font-bold">Поставщик</th>}
                {visibleColumns.qty && <th className="p-4 text-right font-bold">Кол-во</th>}
                {visibleColumns.unit && <th className="p-4 font-bold">Ед. изм.</th>}
                {visibleColumns.status && <th className="p-4 text-center font-bold">Состояние</th>}
                {visibleColumns.actions && <th className="p-4 text-center font-bold">Удалить</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {paginatedVorData.length > 0 ? (
                paginatedVorData.map((item, localIndex) => {
                  const globalIndex = (currentPage - 1) * rowsPerPage + localIndex
                  return (
                    <tr key={item.id} className="hover:bg-muted/15 transition-colors">
                      
                      {/* ID */}
                      {visibleColumns.id && (
                        <td className="p-3 font-mono text-center text-muted-foreground border-r border-border/40">
                          {item.id}
                        </td>
                      )}

                      {/* Шифр */}
                      {visibleColumns.code && (
                        <td className="p-3 font-mono font-medium max-w-[120px] truncate">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'code' ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-full bg-background border border-ring rounded p-1 text-xs"
                              autoFocus
                            />
                          ) : (
                            <span onDoubleClick={() => handleCellClick(globalIndex, 'code', item.code)} className="cursor-pointer hover:underline block">
                              {item.code || '-'}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Система */}
                      {visibleColumns.system && (
                        <td className="p-3">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'system' ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-full bg-background border border-ring rounded p-1 text-xs"
                              autoFocus
                            />
                          ) : (
                            <span onDoubleClick={() => handleCellClick(globalIndex, 'system', item.system)} className="cursor-pointer hover:underline px-2.5 py-0.5 rounded-full bg-primary/5 text-ring font-medium border border-ring/10">
                              {item.system}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Наименование */}
                      {visibleColumns.name && (
                        <td className="p-3 max-w-[300px]">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'name' ? (
                            <textarea
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-full bg-background border border-ring rounded p-1 text-xs resize-none"
                              rows={2}
                              autoFocus
                            />
                          ) : (
                            <span onDoubleClick={() => handleCellClick(globalIndex, 'name', item.name)} className="cursor-pointer hover:text-ring hover:underline font-medium block leading-normal line-clamp-2">
                              {item.name}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Марка, тип */}
                      {visibleColumns.model && (
                        <td className="p-3 max-w-[200px] text-muted-foreground truncate">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'model' ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-full bg-background border border-ring rounded p-1 text-xs"
                              autoFocus
                            />
                          ) : (
                            <span onDoubleClick={() => handleCellClick(globalIndex, 'model', item.model)} className="cursor-pointer hover:underline block">
                              {item.model || '-'}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Поставщик */}
                      {visibleColumns.supplier && (
                        <td className="p-3 truncate">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'supplier' ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-full bg-background border border-ring rounded p-1 text-xs"
                              autoFocus
                            />
                          ) : (
                            <span onDoubleClick={() => handleCellClick(globalIndex, 'supplier', item.supplier)} className="cursor-pointer hover:underline block">
                              {item.supplier || '-'}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Кол-во */}
                      {visibleColumns.qty && (
                        <td className="p-3 text-right font-mono font-semibold text-foreground">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'qty' ? (
                            <input
                              type="number"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-20 bg-background border border-ring rounded p-1 text-xs text-right"
                              autoFocus
                            />
                          ) : (
                            <span onDoubleClick={() => handleCellClick(globalIndex, 'qty', item.qty)} className="cursor-pointer hover:underline block">
                              {item.qty}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Ед. изм. */}
                      {visibleColumns.unit && (
                        <td className="p-3 text-muted-foreground">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'unit' ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-12 bg-background border border-ring rounded p-1 text-xs"
                              autoFocus
                            />
                          ) : (
                            <span onDoubleClick={() => handleCellClick(globalIndex, 'unit', item.unit)} className="cursor-pointer hover:underline block">
                              {item.unit}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Состояние */}
                      {visibleColumns.status && (
                        <td className="p-3 text-center">
                          {editingCell?.rowIndex === globalIndex && editingCell?.fieldName === 'status' ? (
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => handleCellSave(globalIndex)}
                              onKeyDown={(e) => e.key === 'Enter' && handleCellSave(globalIndex)}
                              className="w-24 bg-background border border-ring rounded p-1 text-xs"
                              autoFocus
                            />
                          ) : (
                            <span 
                              onDoubleClick={() => handleCellClick(globalIndex, 'status', item.status)} 
                              className={`px-2 py-0.5 text-[10px] font-bold rounded-full border cursor-pointer ${
                                item.status === 'В работе' || item.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                item.status === 'Согласовано' || item.status === 'Fulfilled' || item.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                                'bg-slate-500/10 text-slate-400 border-slate-500/20'
                              }`}
                            >
                              {item.status || 'В работе'}
                            </span>
                          )}
                        </td>
                      )}

                      {/* Действия */}
                      {visibleColumns.actions && (
                        <td className="p-3 text-center border-l border-border/40">
                          <button 
                            onClick={() => handleDeleteRow(item.id)}
                            className="text-red-500 hover:text-red-400 p-1 hover:bg-red-500/10 rounded cursor-pointer transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      )}

                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={10} className="p-8 text-center text-muted-foreground text-sm">Таблица ВОР пуста</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Pagination Footer */}
        <div className="p-4 border-t border-border bg-muted/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          
          {/* Showing indicator */}
          <div className="text-muted-foreground font-mono">
            Показано с <strong className="text-foreground">{(currentPage - 1) * rowsPerPage + 1}</strong> по <strong className="text-foreground">{Math.min(currentPage * rowsPerPage, filteredVorData.length)}</strong> из <strong className="text-foreground">{filteredVorData.length}</strong> строк
          </div>

          <div className="flex items-center gap-6">
            {/* Rows per page selector */}
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Строк на странице:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                className="px-2 py-1 rounded bg-background border border-border text-foreground text-xs"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            {/* Navigation controls */}
            <div className="flex gap-1 items-center">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="p-1.5 rounded border border-border bg-background text-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-background cursor-pointer"
              >
                &laquo;
              </button>
              <button
                onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded border border-border bg-background text-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-background cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="px-3 font-mono">Страница <strong>{currentPage}</strong> из {totalPages || 1}</span>
              <button
                onClick={() => setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-1.5 rounded border border-border bg-background text-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-background cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-1.5 rounded border border-border bg-background text-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-background cursor-pointer"
              >
                &raquo;
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
