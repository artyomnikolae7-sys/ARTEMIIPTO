import { useState, useEffect, useRef } from 'react'
import { 
  MapPin, Phone, Mail, CheckCircle2, Cpu, Briefcase, GraduationCap, Github, Send,
  SlidersHorizontal, Check, ArrowUpRight, Upload, Download, Search, ChevronLeft, 
  ChevronRight, Plus, Trash2, Palette, LayoutGrid
} from 'lucide-react'
import L from 'leaflet'
import * as XLSX from 'xlsx'
import defaultVorData from './data/vor-default.json'

// We define types for our construction objects
interface ConstructionObject {
  id: number
  title: string
  address: string
  contractor: string
  district: string
  coords: [number, number]
  details: string
}

// 17 Objects from resume with coords
const OBJECTS: ConstructionObject[] = [
  {
    id: 1,
    title: 'Многоквартирный дом с подземным гаражом и благоустройством',
    address: 'ул. Гарибальди, земельный участок 22 (зона 2.1) (д. 24, к. 1; д. 22, к. 1, 2, 3)',
    contractor: 'ООО "МОНАРХ"',
    district: 'Юго-Западный АО (Обручевское)',
    coords: [55.6705, 37.5451],
    details: 'Закрытие исполнительной документации по сетям связи (ВТСС, СВН, СКД, ОСО, СКТВ, ШПД) и согласование в системе Exon.'
  },
  {
    id: 2,
    title: 'Многоквартирный дом с подземным гаражом',
    address: 'ул. Гарибальди, земельный участок 26 (участок 2.2) (д. 26, к. 2)',
    contractor: 'ООО "МОНАРХ"',
    district: 'Юго-Западный АО (Обручевское)',
    coords: [55.6698, 37.5463],
    details: 'Ведение исполнительных схем AutoCAD, оформление АОСР и ОЖР.'
  },
  {
    id: 3,
    title: 'Жилой дом с инженерными сетями',
    address: 'Лосевская улица, земельный участок 3А (вблизи д. 3)',
    contractor: 'АО ГК ЕКС',
    district: 'Северо-Восточный АО (Ярославский)',
    coords: [55.8753, 37.7175],
    details: 'Комплектование паспортами/сертификатами, загрузка и ведение ИД по внутренним и наружным системам связи.'
  },
  {
    id: 4,
    title: 'Жилой дом с приспособлением подземной автостоянки под ЗСГО (укрытие)',
    address: 'ул. Газопровод, земельный участок 7 (влд. 7, к. 1)',
    contractor: 'ООО СК КРОНОС',
    district: 'Южный АО (Чертаново Южное)',
    coords: [55.5902, 37.6045],
    details: 'Формирование пакета документов по ОЗДС и СС. Разработка ППР и ТК по наружным сетям.'
  },
  {
    id: 5,
    title: 'Жилой дом с подземной автостоянкой и ЗСГО (укрытие)',
    address: 'Тайнинская улица, земельный участок 16/2 (д. 16, к. 3)',
    contractor: 'ООО "МОСРЕНСТРОЙ-6"',
    district: 'Северо-Восточный АО (Лосиноостровский)',
    coords: [55.8755, 37.6749],
    details: 'Автоматизация контроля объемов выполнения работ факт/проект.'
  },
  {
    id: 6,
    title: 'Жилой дом с подземной автостоянкой (ЗСГО)',
    address: 'Тайнинская улица, земельный участок 16/2 (д. 16, к. 3)',
    contractor: 'ООО "ГСТ"',
    district: 'Северо-Восточный АО (Лосиноостровский)',
    coords: [55.8755, 37.6749],
    details: 'Ведение и сдача комплектов ИД по сетям связи.'
  },
  {
    id: 7,
    title: 'Жилой дом с инженерными сетями и благоустройством',
    address: 'улица 2-я Фрезерная, земельный участок 6 (вл. 6)',
    contractor: 'ООО "ГСТ"',
    district: 'Юго-Восточный АО (Нижегородский)',
    coords: [55.7335, 37.7472],
    details: 'Контроль состава и страничности исполнительной документации.'
  },
  {
    id: 8,
    title: 'Жилой дом с приспособлением автостоянки под ЗСГО',
    address: 'ул. Газопровод, земельный участок 7 (влд. 7, к. 1)',
    contractor: 'ООО "ФЛЭТ И КО"',
    district: 'Южный АО (Чертаново Южное)',
    coords: [55.5902, 37.6045],
    details: 'Сдача комплектов слаботочных систем (ВТСС, СВН, СКТВ, АК, СС).'
  },
  {
    id: 9,
    title: 'Жилой дом с инженерными сетями',
    address: 'Булатниковский пр-д, земельный участок 2В/3 (вл. 2В, к. 3, 4, 5)',
    contractor: 'ООО "АСГ ТЕХНО СТРОЙ"',
    district: 'Южный АО (Бирюлёво Западное)',
    coords: [55.5804, 37.6495],
    details: 'Ведение ИД в Exon, работа с замечаниями технадзора.'
  },
  {
    id: 10,
    title: 'Жилой дом с подземной автостоянкой',
    address: 'улица Гарибальди, земельный участок 17 (зона 1.2) (д. 17, к. 1, 2)',
    contractor: 'ООО "МОНАРХ"',
    district: 'Юго-Западный АО (Черемушки)',
    coords: [55.6738, 37.5435],
    details: 'Формирование и сдача ИД по разделам СС и автоматики.'
  },
  {
    id: 11,
    title: 'Жилой дом с инженерными сетями',
    address: 'Бескудниковский б-р, влд. 52',
    contractor: 'АО "МОСКАПСТРОЙ"',
    district: 'Северный АО (Бескудниковский)',
    coords: [55.8646, 37.5583],
    details: 'Входной контроль проектов, оформление разрешительной документации.'
  },
  {
    id: 12,
    title: 'Жилой дом с инженерными сетями (со сносом)',
    address: 'ул. Новогиреевская, влд. 24А/1, 24А/2 (д. 24а)',
    contractor: 'ООО "ДАРС-РЕНОВАЦИЯ"',
    district: 'Восточный АО (Перово)',
    coords: [55.7538, 37.7981],
    details: 'Подготовка и сдача ИД по наружным и внутренним сетям связи.'
  },
  {
    id: 13,
    title: 'Жилой дом с инженерными сетями',
    address: 'Погонный пр-д, влд. 13',
    contractor: 'ООО "ДАРС-РЕНОВАЦИЯ"',
    district: 'Восточный АО (Богородское)',
    coords: [55.8193, 37.7088],
    details: 'Полный цикл сдачи ИД — от схем до архива.'
  },
  {
    id: 14,
    title: 'Жилой дом с приспособлением подземной автостоянки под ЗСГО (укрытие)',
    address: 'ул. Артековская, земельный участок 7/6 (зона 2.4) (Варшавское шоссе, д. 88; Артековская ул., д. 7 к. 5, 6)',
    contractor: 'ООО "ДАРС-РЕНОВАЦИЯ"',
    district: 'Южный АО (Нагорное)',
    coords: [55.6264, 37.6205],
    details: 'Автоматизация ввода фактических объемов в Exon с использованием JS-скриптов.'
  },
  {
    id: 15,
    title: 'Жилой дом с инженерными сетями и благоустройством',
    address: 'Варшавское шоссе, земельный участок 90/1 (участок 5.1) (д. 90, к. 1; д. 92)',
    contractor: 'ООО "ДАРС-РЕНОВАЦИЯ"',
    district: 'Южный АО (Нагорное)',
    coords: [55.6247, 37.6212],
    details: 'Ведение реестра ИД, формирование АОСР.'
  },
  {
    id: 16,
    title: 'Жилой дом со сносом ветхого жилья',
    address: 'ул. Загорьевская, влд. 2/2 (пос. Загорье, д. 3, 5)',
    contractor: 'ООО "АРС-СТРОЙ"',
    district: 'Южный АО (Бирюлево Восточное)',
    coords: [55.5786, 37.6834],
    details: 'Оформление ИД по слаботочным системам.'
  },
  {
    id: 17,
    title: 'Снос строений, отключение и перекладка инженерных коммуникаций',
    address: 'Варшавское шоссе, д. 143В, корп. А (а также д. 145, к. 3; ул. Газопровод, д. 6Г)',
    contractor: 'ООО СК КРОНОС',
    district: 'Южный АО (Чертаново Южное)',
    coords: [55.5925, 37.6033],
    details: 'Оформление пакетов документов на снос и вынос кабелей связи из зоны застройки.'
  }
]

// 6 Cases from resume
const CASES = [
  {
    id: 1,
    title: 'Расчётная таблица для землекопов',
    problem: 'Постоянные сложности с учётом работ и времени: данные разрознены, ручной контроль, ошибки и потеря прозрачности по объектам.',
    tools: 'Excel (расчёты/структура), Power Query (подтяжка данных из источников), формулы/сводная логика.',
    work: [
      'Собрал единую структуру учёта по 17 объектам.',
      'Подвязал данные из других источников через Power Query, настроил автообновление.',
      'Сделал ежедневный учёт: кто/когда/сколько работал, с возможностью быстро сводить по объектам.'
    ],
    result: 'Убрал ручной "хаос" и сделал прозрачную систему контроля выработки по каждому объекту. Единая таблица снижает ошибки и экономит время руководителя/ПТО на сверках.'
  },
  {
    id: 2,
    title: 'Генератор ИД по ОЗДС (ускорение до 6–8 часов)',
    problem: 'ОЗДС — повторяющийся пакет ИД, который вручную собирался 3–4 дня: много однотипных документов, высокий риск ошибок в данных, составе и страничности.',
    tools: 'Excel (шаблоны/формулы), VBA (кнопка/сборка), логика реестра, автоподсчёт страниц, генерация PDF.',
    work: [
      'Сделал "единый ввод": данные вводятся в одном месте и автоматически подставляются во все документы.',
      'Автоматизировал формирование АОСР и части комплекта по шаблонам.',
      'Добавил блок паспортов/сертификатов: указание в форме → включение в комплект.',
      'Реализовал автопересчёт страниц и корректную логическую пересборку, если документ удалён "из середины".',
      'Сделал формирование PDF полного комплекта одной кнопкой.'
    ],
    result: 'Сборка комплекта стала управляемой, быстрой и стабильной по качеству. Сократил подготовку комплекта ИД по ОЗДС с 3–4 дней до 6–8 часов.'
  },
  {
    id: 3,
    title: 'Сводная по объёмам внутренних сетей (факт/проект)',
    problem: 'Трудно быстро понять "что реально выполнено" по внутренним системам: объёмы разбросаны по ИД/этажам, сложно сравнить с проектом и фиксировать превышения/недобор.',
    tools: 'Excel (структура, сводные, формулы), при необходимости Power Query.',
    work: [
      'Построил таблицу "система → этаж → объём → единицы → факт".',
      'Добавил отдельную колонку проектного объёма.',
      'Настроил сравнение факт/проект с фиксацией отклонений (перерасход/недобор).'
    ],
    result: 'Появилась прозрачность по объёмам в разрезе этажей и систем + контроль отклонений. Быстрый контроль выполнения работ, меньше спорных моментов по объёмам.'
  },
  {
    id: 4,
    title: 'Прототип табеля рабочего времени + аналитика в Power BI',
    problem: 'Нет удобного способа видеть, чем заняты сотрудники, где "время уходит", какие системы закрываются быстрее/медленнее и как это сравнить между объектами.',
    tools: 'Excel (ввод/структура), формулы/автосвод, Power BI (дашборды), выгрузка данных, фильтры.',
    work: [
      'Собрал табель: сотрудник → объект → система → руководитель проекта → часы → комментарий.',
      'Автоматизировал расчёт статистики и подготовку данных для Power BI.',
      'Настроил дашборды: сравнение по объектам/системам/людям, скорость закрытия, фильтры.'
    ],
    result: 'Руководитель видит картину загрузки и эффективности, может принимать решения по распределению задач. Готовая база для управленческой аналитики.'
  },
  {
    id: 5,
    title: 'Таблица расчётов НСС (телефонная канализация) + связка с AutoCAD',
    problem: 'Расчёт объёмов по НСС часто пересчитывается вручную при изменении трассы/параметров. Это долго, легко ошибиться, а изменения в AutoCAD требуют повторной ручной правки.',
    tools: 'Excel (формулы/расчёты/параметры), связка с AutoCAD (обновляемые данные/вставки).',
    work: [
      'Создал таблицу расчётов объёмов для телефонной канализации.',
      'Настроил параметрическую логику: меняются длина/ширина/условия → всё пересчитывается автоматически.',
      'Организовал передачу данных в AutoCAD, чтобы значения обновлялись вместе с расчётом.'
    ],
    result: 'Изменения перестали быть "болью": корректировки делаются быстро и без каскада ошибок. Быстрее пересчёт объёмов и актуализация чертежей.'
  },
  {
    id: 6,
    title: 'Автоматизация загрузки объёмов ИД в Exon',
    problem: 'В Exon объёмы работ приходится вносить вручную: много позиций, повторяющиеся действия, высокий риск ошибок (не тот объём, пропуск строки), отнимает много времени.',
    tools: 'JavaScript (логика автоматизации), Прототип браузерного расширения, XML/Excel.',
    work: [
      'Проанализировал интерфейс Exon и последовательность действий пользователя.',
      'Сформировал структуру данных "позиция → объём → единица измерения" в XML.',
      'Реализовал автозаполнение полей по очереди: скрипт вставляет объём/единицу и кликает "добавить/сохранить".',
      'Заложил устойчивость к типовым сбоям: проверка полей, повтор кликов, контроль применения данных.'
    ],
    result: 'Снял основную рутину с ручного ввода: процесс стал быстрее и предсказуемее, а количество ошибок снизилось.'
// 8 Chat Threads from Exon/Work Messaging
const CHATS = [
  {
    id: 1,
    name: 'Замечания технадзора — Гарибальди 22',
    author: 'Алексей (Технадзор)',
    role: 'Заказчик',
    date: 'Вчера, 14:20',
    avatar: '👨‍💼',
    status: 'Решено',
    messages: [
      { sender: 'Алексей (Технадзор)', time: '14:20', text: 'Артемий, привет! По АОСР №45 на наружку СС в Exon отклонение: нет паспорта на муфту МТОК.' },
      { sender: 'Николаев Артемий', time: '14:35', text: 'Приветствую, Алексей! Паспорт прикрепил в реестре под №112 и переподписал комплект в Exon. Проверь, пожалуйста.' },
      { sender: 'Алексей (Технадзор)', time: '15:10', text: 'Отлично, вижу. Акт согласован и подписан ЭЦП.' }
    ]
  },
  {
    id: 2,
    name: 'Согласование ВОР по слаботочке (ВТСС)',
    author: 'Елена (ГК ЕКС)',
    role: 'Главный инженер',
    date: '25 июля',
    avatar: '👩‍💼',
    status: 'В работе',
    messages: [
      { sender: 'Елена (ГК ЕКС)', time: '10:15', text: 'Артемий, добрый день. По Лосевской 3А разница в объемах кабеля UTP между спецификацией и ВОР.' },
      { sender: 'Николаев Артемий', time: '10:40', text: 'Добрый день! Разница возникла из-за трассировки через подземный паркинг (+180м). Выгрузил шахматку с формулами, проверяем.' }
    ]
  },
  {
    id: 3,
    name: 'ОЗДС Сборка комплекта ИД',
    author: 'Сергей (СК КРОНОС)',
    role: 'Начальник участка',
    date: '22 июля',
    avatar: '👷‍♂️',
    status: 'Решено',
    messages: [
      { sender: 'Сергей (СК КРОНОС)', time: '09:00', text: 'Артемий, сколько дней займет собрать полный пакет ОЗДС по Газопроводу 7?' },
      { sender: 'Николаев Артемий', time: '09:15', text: 'Запустил генератор ИД. Все 24 АОСР и схемы будут готовы и загружены в Exon сегодня к 17:00.' }
    ]
  },
  {
    id: 4,
    name: 'Связка Excel + AutoCAD (НСС)',
    author: 'Игорь (Проектировщик)',
    role: 'ГИП',
    date: '19 июля',
    avatar: '👨‍🔬',
    status: 'Решено',
    messages: [
      { sender: 'Игорь (Проектировщик)', time: '16:00', text: 'Артемий, сместили трассу телефонной канализации на 4 метра. Нужно пересчитать.' },
      { sender: 'Николаев Артемий', time: '16:25', text: 'Принято. Обновил длину в Excel-таблице НСС, данные в чертежах AutoCAD пересчитались автоматически. Готово.' }
    ]
  },
  {
    id: 5,
    name: 'Авто-ввод объемов в Exon (JS)',
    author: 'Дмитрий (МОСРЕНСТРОЙ-6)',
    role: 'Инженер ПТО',
    date: '15 июля',
    avatar: '💻',
    status: 'Выполнено',
    messages: [
      { sender: 'Дмитрий (МОСРЕНСТРОЙ-6)', time: '11:00', text: 'Скрипт авто-заполнения объемов в Exon сработал без единого сбоя. 450 позиций ввелись за 3 минуты!' },
      { sender: 'Николаев Артемий', time: '11:12', text: 'Супер! Главное — корректный XML/Excel на входе. Ручной ввод убран.' }
    ]
  },
  {
    id: 6,
    name: 'Выезд к Технадзору (Тайнинская 16)',
    author: 'Виктор (МОНАРХ)',
    role: 'Зам. дир. по строительству',
    date: '10 июля',
    avatar: '🏗️',
    status: 'Решено',
    messages: [
      { sender: 'Виктор (МОНАРХ)', time: '08:30', text: 'Артемий, сегодня в 14:00 выездная проверка МГСН по слаботочным системам.' },
      { sender: 'Николаев Артемий', time: '08:45', text: 'Планшет с Exon и распечатанные исполнительные схемы AutoCAD со мной. Все разделы готовы.' }
    ]
  },
  {
    id: 7,
    name: 'Снос и перекладка сетей (Варшавское ш.)',
    author: 'Мария (ДАРС-РЕНОВАЦИЯ)',
    role: 'Сметный отдел',
    date: '02 июля',
    avatar: '📊',
    status: 'Решено',
    messages: [
      { sender: 'Мария (ДАРС-РЕНОВАЦИЯ)', time: '13:10', text: 'Нужен точный реестр вынесенных кабелей связи под снос строения 143В.' },
      { sender: 'Николаев Артемий', time: '13:50', text: 'Реестр с актами демонтажа и согласованием с Ростелекомом сформирован и прикреплен.' }
    ]
  },
  {
    id: 8,
    name: 'Корректировка Шахматки (ВОР)',
    author: 'Олег (ФЛЭТ И КО)',
    role: 'Руководитель проекта',
    date: '28 июня',
    avatar: '📁',
    status: 'Решено',
    messages: [
      { sender: 'Олег (ФЛЭТ И КО)', time: '17:00', text: 'Артемий, покажи текущий статус закрытия по этажам на Шахматке.' },
      { sender: 'Николаев Артемий', time: '17:20', text: 'Шахматка обновлена в интерактивной таблице на сайте: 1-12 этажи закрыты на 100%, 13-14 этажи в работе.' }
    ]
  }
]

// Theme configuration
type Theme = 'dark' | 'elevenlabs'

interface VorItem {
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

export default function App() {
  const [selectedObjectId, setSelectedObjectId] = useState<number>(1)
  const [contractorFilter, setContractorFilter] = useState<string>('Все')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<'home' | 'experience' | 'cases' | 'map' | 'chat' | 'contacts' | 'profile' | 'projects' | 'vor'>('home')
  const [activeCaseId, setActiveCaseId] = useState<number | null>(1)
  const [selectedChatId, setSelectedChatId] = useState<number>(1)

  // Theme State
  const [theme, setTheme] = useState<Theme>('dark')
  const [showThemeSelector, setShowThemeSelector] = useState<boolean>(false)

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

  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<L.Map | null>(null)
  const markersRef = useRef<{ [key: number]: L.Marker }>({})

  // Apply selected theme class to body
  useEffect(() => {
    document.body.className = `theme-${theme}`
  }, [theme])

  // Distinct contractors list
  const contractors = ['Все', ...Array.from(new Set(OBJECTS.map(o => o.contractor)))]

  // Filtered objects
  const filteredObjects = OBJECTS.filter(o => {
    const matchesContractor = contractorFilter === 'Все' || o.contractor === contractorFilter
    const matchesSearch = o.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          o.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.contractor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesContractor && matchesSearch
  })

  // Initialize Map
  useEffect(() => {
    if (!mapRef.current) return
    if (leafletMap.current) return
    if (activeTab !== 'map') return

    const moscowCenter: [number, number] = [55.7512, 37.6184]
    const map = L.map(mapRef.current, {
      center: moscowCenter,
      zoom: 10,
      zoomControl: false
    })

    leafletMap.current = map

    L.control.zoom({
      position: 'topright'
    }).addTo(map)

    const tileUrl = theme === 'dark'
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

    L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map)

    const customIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="w-8 h-8 rounded-full bg-amber-500/35 border-2 border-amber-500 flex items-center justify-center animate-pulse">
               <div class="w-3 h-3 rounded-full bg-amber-400"></div>
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
      
      markersRef.current[obj.id] = marker
    })

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove()
        leafletMap.current = null
      }
    }
  }, [activeTab])

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
      html: `<div class="w-10 h-10 rounded-full bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center">
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
  }, [selectedObjectId, activeTab])

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

  const selectedObject = OBJECTS.find(o => o.id === selectedObjectId)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                АН
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-foreground font-display">Николаев Артемий</h1>
                <p className="text-xs text-ring font-mono font-medium">Инженер ПТО / Специалист по исполнительной документации</p>
              </div>
            </div>

            {/* Navigation Tabs (6-tabs structure) */}
            <nav className="flex gap-1 bg-card/85 p-1 rounded-xl border border-border shadow-sm overflow-x-auto">
              <button 
                onClick={() => setActiveTab('home')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === 'home' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveTab('experience')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === 'experience' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Опыт
              </button>
              <button 
                onClick={() => setActiveTab('cases')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === 'cases' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Кейсы
              </button>
              <button 
                onClick={() => setActiveTab('map')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === 'map' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Объекты (Карта)
              </button>
              <button 
                onClick={() => setActiveTab('chat')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === 'chat' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Переписка (Exon)
              </button>
              <button 
                onClick={() => setActiveTab('contacts')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === 'contacts' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Контакты
              </button>
            </nav>

            {/* Theme Selector Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setShowThemeSelector(!showThemeSelector)}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer shadow-sm text-foreground transition-all"
              >
                <Palette size={14} className="text-ring" />
                <span>Тема: {theme === 'dark' ? 'Futuristic Dark' : 'ElevenLabs Cream'}</span>
              </button>

              {showThemeSelector && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-card border border-border p-1.5 shadow-xl z-50">
                  <button
                    onClick={() => { setTheme('dark'); setShowThemeSelector(false); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-all cursor-pointer ${theme === 'dark' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50 text-foreground'}`}
                  >
                    Futuristic Dark (По умолчанию)
                  </button>
                  <button
                    onClick={() => { setTheme('elevenlabs'); setShowThemeSelector(false); }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-all cursor-pointer ${theme === 'elevenlabs' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50 text-foreground'}`}
                  >
                    ElevenLabs (Кремовая светлая)
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ================= HOME TAB ================= */}
        {activeTab === 'home' && (
          <section className="space-y-12">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-12 shadow-lg">
              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-ring text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Открыт к предложениям / Инженер ПТО
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-display leading-tight">
                  Николаев Артемий
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Специалист по подготовке и сдаче исполнительной документации (ИД), ведению ВОР, исполнительных схем в AutoCAD и автоматизации процессов в строительстве. Сдал более 17 крупных объектов в Москве.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button 
                    onClick={() => setActiveTab('map')}
                    className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <MapPin size={16} /> Карта объектов (17)
                  </button>
                  <button 
                    onClick={() => setActiveTab('chat')}
                    className="px-5 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send size={16} /> Переписка / Согласования Exon
                  </button>
                </div>
              </div>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card border border-border p-6 rounded-2xl text-center space-y-1 shadow-sm">
                <span className="text-3xl font-bold text-ring font-mono">17+</span>
                <p className="text-xs text-muted-foreground font-medium">Сданных объектов в МСК</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl text-center space-y-1 shadow-sm">
                <span className="text-3xl font-bold text-ring font-mono">100%</span>
                <p className="text-xs text-muted-foreground font-medium">Закрытие ИД по сетям связи</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl text-center space-y-1 shadow-sm">
                <span className="text-3xl font-bold text-ring font-mono">Exon</span>
                <p className="text-xs text-muted-foreground font-medium">Свободное владение ИС</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl text-center space-y-1 shadow-sm">
                <span className="text-3xl font-bold text-ring font-mono">AutoCAD</span>
                <p className="text-xs text-muted-foreground font-medium">Схемы и чертежи</p>
              </div>
            </div>
          </section>
        )}

        {/* ================= CHAT TAB ================= */}
        {activeTab === 'chat' && (
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Согласования и коммуникация</span>
              <h2 className="text-4xl font-light text-foreground tracking-tight font-display">Рабочая Переписка и Exon</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Примеры реального взаимодействия с Технадзором, ГИПами, Заказчиками и подрядчиками при сдаче исполнительной документации и ведении объектов.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-card/30 p-3 rounded-2xl border border-border backdrop-blur-sm shadow-sm h-[650px]">
              
              {/* Chat Sidebar */}
              <div className="lg:col-span-4 bg-card rounded-xl border border-border flex flex-col overflow-hidden">
                <div className="p-4 border-b border-border bg-muted/20 font-semibold text-sm flex items-center justify-between">
                  <span>Диалоги ({CHATS.length})</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">Exon / Messenger</span>
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-border no-scrollbar">
                  {CHATS.map(chat => (
                    <button
                      key={chat.id}
                      onClick={() => setSelectedChatId(chat.id)}
                      className={`w-full text-left p-4 transition-all flex items-start gap-3 border-l-2 ${selectedChatId === chat.id ? 'bg-primary/5 border-l-primary' : 'bg-transparent border-l-transparent hover:bg-muted/40'}`}
                    >
                      <span className="text-2xl leading-none">{chat.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-xs font-semibold text-foreground truncate">{chat.name}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{chat.author} • {chat.role}</p>
                        <span className="inline-block mt-1 text-[10px] text-ring font-mono">{chat.date}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Main Thread View */}
              <div className="lg:col-span-8 bg-card rounded-xl border border-border flex flex-col overflow-hidden">
                {(() => {
                  const currentChat = CHATS.find(c => c.id === selectedChatId) || CHATS[0]
                  return (
                    <>
                      {/* Chat Header */}
                      <div className="p-4 border-b border-border bg-muted/20 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{currentChat.avatar}</span>
                          <div>
                            <h3 className="text-sm font-bold text-foreground">{currentChat.name}</h3>
                            <p className="text-xs text-muted-foreground">{currentChat.author} ({currentChat.role})</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-ring border border-primary/20 font-semibold font-mono">
                          Статус: {currentChat.status}
                        </span>
                      </div>

                      {/* Chat Messages Feed */}
                      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-background/50">
                        {currentChat.messages.map((msg, idx) => {
                          const isMe = msg.sender.includes('Николаев')
                          return (
                            <div key={idx} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-md p-4 rounded-2xl shadow-sm text-xs space-y-1.5 ${isMe ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card border border-border text-foreground rounded-bl-none'}`}>
                                <div className="flex justify-between items-center gap-4 text-[10px] opacity-75 font-mono">
                                  <span>{msg.sender}</span>
                                  <span>{msg.time}</span>
                                </div>
                                <p className="leading-relaxed text-sm">{msg.text}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Chat Input Placeholder */}
                      <div className="p-4 border-t border-border bg-card flex gap-3">
                        <input
                          type="text"
                          disabled
                          placeholder="Диалог архивирован в рамках отчета портфолио..."
                          className="flex-1 px-4 py-2.5 rounded-xl bg-muted/30 border border-border text-xs text-muted-foreground cursor-not-allowed"
                        />
                        <button disabled className="px-4 py-2.5 rounded-xl bg-primary/50 text-primary-foreground text-xs font-semibold cursor-not-allowed">
                          Отправить
                        </button>
                      </div>
                    </>
                  )
                })()}
              </div>

            </div>
          </section>
        )}

        {/* ================= MAP TAB ================= */}
        {activeTab === 'map' && (
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">География объектов в Москве</span>
              <h2 className="text-4xl font-light text-foreground tracking-tight font-display">Мои Строительные Объекты</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Интерактивная карта проектов, на которых я успешно закрыл исполнительную документацию (ИД). 
                Выберите объект из списка слева для центрирования карты и просмотра деталей.
              </p>
            </div>

            {/* Map Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-card/30 p-3 rounded-2xl border border-border backdrop-blur-sm shadow-sm">
              
              {/* Sidebar List */}
              <div className="lg:col-span-4 flex flex-col h-[600px] bg-card rounded-xl overflow-hidden border border-border shadow-sm">
                
                {/* Search & Filter Header */}
                <div className="p-4 border-b border-border space-y-3 bg-muted/20">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Поиск по адресу, компании..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-3 pr-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors text-sm"
                    />
                  </div>

                  {/* Contractor Filter pills */}
                  <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
                    {contractors.map(c => (
                      <button
                        key={c}
                        onClick={() => setContractorFilter(c)}
                        className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all border ${contractorFilter === c ? 'bg-primary/10 text-ring border-ring/50' : 'bg-background text-muted-foreground border-transparent hover:bg-muted'}`}
                      >
                        {c === 'Все' ? 'Все подрядчики' : c.replace('ООО ', '').replace('АО ', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Objects list scrollable */}
                <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-border p-2 space-y-1">
                  {filteredObjects.length > 0 ? (
                    filteredObjects.map(obj => (
                      <button
                        key={obj.id}
                        onClick={() => setSelectedObjectId(obj.id)}
                        className={`w-full text-left p-3.5 rounded-lg transition-all border ${selectedObjectId === obj.id ? 'bg-primary/5 border-primary/45 shadow-[inset_4px_0_0_rgba(var(--primary),0.8)]' : 'bg-transparent border-transparent hover:bg-muted/50 text-muted-foreground hover:text-foreground'}`}
                      >
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <span className="text-[10px] font-mono text-ring font-bold uppercase">{obj.contractor}</span>
                          <span className="text-[10px] text-muted-foreground font-mono">{obj.district.split(' ')[0]}</span>
                        </div>
                        <h4 className="text-sm font-semibold mb-1 text-foreground line-clamp-1">{obj.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1 flex items-center gap-1">
                          <MapPin size={12} className="text-ring shrink-0" />
                          {obj.address}
                        </p>
                      </button>
                    ))
                  ) : (
                    <div className="p-8 text-center text-muted-foreground text-sm">Объекты не найдены</div>
                  )}
                </div>
              </div>

              {/* Map Canvas */}
              <div className="lg:col-span-8 h-[600px] rounded-xl overflow-hidden relative border border-border shadow-sm">
                <div ref={mapRef} className="w-full h-full z-10" />

                {/* Map Overlay Selected Card Info */}
                {selectedObject && (
                  <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-card/95 backdrop-blur-md p-6 rounded-xl border border-border shadow-2xl z-20">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[11px] font-mono text-ring bg-primary/10 px-2 py-0.5 rounded border border-ring/25 font-bold uppercase tracking-wider">{selectedObject.contractor}</span>
                        <h3 className="text-lg font-bold text-foreground mt-2 leading-snug font-display">{selectedObject.title}</h3>
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border">{selectedObject.district}</span>
                    </div>

                    <div className="space-y-3.5 text-sm text-muted-foreground">
                      <div className="flex gap-2 items-start">
                        <MapPin size={16} className="text-ring shrink-0 mt-0.5" />
                        <span className="text-foreground">{selectedObject.address}</span>
                      </div>
                      <div className="pt-3 border-t border-border text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-ring block mb-1">Специфика / Выполненные задачи:</strong>
                        {selectedObject.details}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ================= TAB VOR ================= */}
        {activeTab === 'vor' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Исполнительная ведомость работ</span>
              <h2 className="text-4xl font-light text-foreground tracking-tight font-display">Таблица ВОР проекта</h2>
              <p className="text-muted-foreground text-base">
                Интерактивная ведомость со всеми объемами работ по проекту из листа **ВОР**. 
                Вы можете редактировать ячейки на лету (двойной клик), фильтровать, а также загружать/выгружать файлы в формате Excel.
              </p>
            </div>

            {/* Table Control Panel */}
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={16} />
                  <input
                    type="text"
                    placeholder="Поиск по наименованию, шифру, ID..."
                    value={vorSearchQuery}
                    onChange={(e) => setVorSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring text-sm"
                  />
                </div>

                {/* Import / Export & Add Buttons */}
                <div className="flex flex-wrap gap-2.5 items-center">
                  
                  {/* Add row */}
                  <button 
                    onClick={handleAddRow}
                    className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <Plus size={14} /> Добавить строку
                  </button>

                  {/* Import Excel */}
                  <label className="flex items-center gap-1.5 px-4 py-2 border border-border bg-background hover:bg-muted/40 text-foreground text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition-all">
                    <Upload size={14} className="text-ring" />
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
                    className="flex items-center gap-1.5 px-4 py-2 border border-border bg-background hover:bg-muted/40 text-foreground text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition-all"
                  >
                    <Download size={14} className="text-ring" /> Экспорт XLSX
                  </button>

                  {/* Column Visibility Trigger */}
                  <div className="relative">
                    <button 
                      onClick={() => setShowColumnDropdown(!showColumnDropdown)}
                      className="flex items-center gap-1.5 px-4 py-2 border border-border bg-background hover:bg-muted/40 text-foreground text-xs font-semibold rounded-lg cursor-pointer shadow-sm transition-all"
                    >
                      <LayoutGrid size={14} className="text-ring" /> Колонки
                    </button>
                    
                    {showColumnDropdown && (
                      <div className="absolute right-0 mt-2 w-48 rounded-xl bg-card border border-border p-2 shadow-xl z-50 text-xs text-foreground space-y-1">
                        {Object.keys(visibleColumns).map((col) => (
                          <label key={col} className="flex items-center gap-2 p-1.5 hover:bg-muted/50 rounded-lg cursor-pointer">
                            <input 
                              type="checkbox"
                              checked={(visibleColumns as any)[col]}
                              onChange={(e) => setVisibleColumns({
                                ...visibleColumns,
                                [col]: e.target.checked
                              })}
                              className="rounded border-border text-ring focus:ring-ring"
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
                    className="w-full px-3 py-1.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-ring"
                  >
                    {uniqueSystems.map(sys => (
                      <option key={sys} value={sys}>{sys}</option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase font-mono tracking-wider">Фильтр по состоянию</label>
                  <select
                    value={vorStatusFilter}
                    onChange={(e) => setVorStatusFilter(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-ring"
                  >
                    {uniqueStatuses.map(st => (
                      <option key={st} value={st}>{st || 'Не указано'}</option>
                    ))}
                  </select>
                </div>

                {/* Supplier Filter */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase font-mono tracking-wider">Фильтр по поставщику</label>
                  <select
                    value={vorSupplierFilter}
                    onChange={(e) => setVorSupplierFilter(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-background border border-border text-foreground text-xs focus:outline-none focus:border-ring"
                  >
                    {uniqueSuppliers.map(sup => (
                      <option key={sup} value={sup}>{sup || 'Не указано'}</option>
                    ))}
                  </select>
                </div>

              </div>
            </div>

            {/* Excel Data Table Canvas */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-muted/30 border-b border-border text-muted-foreground font-mono uppercase tracking-wider text-[10px]">
                      {visibleColumns.id && <th className="p-3 w-16 text-center">ID</th>}
                      {visibleColumns.code && <th className="p-3">Шифр</th>}
                      {visibleColumns.system && <th className="p-3">Система</th>}
                      {visibleColumns.name && <th className="p-3 w-[30%]">Наименование (Дабл-клик для ред.)</th>}
                      {visibleColumns.model && <th className="p-3 w-[20%]">Марка, тип</th>}
                      {visibleColumns.supplier && <th className="p-3">Поставщик</th>}
                      {visibleColumns.qty && <th className="p-3 text-right">Кол-во</th>}
                      {visibleColumns.unit && <th className="p-3">Ед. изм.</th>}
                      {visibleColumns.status && <th className="p-3 text-center">Состояние</th>}
                      {visibleColumns.actions && <th className="p-3 text-center">Удалить</th>}
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
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-1.5 rounded border border-border bg-background text-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-background cursor-pointer"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="px-3 font-mono">Страница <strong>{currentPage}</strong> из {totalPages || 1}</span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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
        )}

        {/* ================= CASES TAB ================= */}
        {activeTab === 'cases' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Оптимизация и Автоматизация</span>
              <h2 className="text-4xl font-light text-foreground tracking-tight font-display">Рабочие Кейсы & Инновации</h2>
              <p className="text-muted-foreground text-lg">
                Практические примеры решения критических проблем сдачи ИД с использованием Excel, VBA и скриптов автоматизации.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Case selector buttons */}
              <div className="space-y-3">
                {CASES.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCaseId(c.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer ${activeCaseId === c.id ? 'bg-primary/5 border-primary shadow text-foreground' : 'bg-card/40 border-border text-muted-foreground hover:text-foreground hover:bg-card/60'}`}
                  >
                    <div className="text-xs font-mono text-ring mb-1 font-bold">КЕЙС 0{c.id}</div>
                    <h3 className="text-base font-bold line-clamp-1">{c.title}</h3>
                  </button>
                ))}
              </div>

              {/* Case details presentation */}
              <div className="lg:col-span-2 bg-card/30 border border-border rounded-2xl p-8 backdrop-blur-sm min-h-[400px] shadow-sm">
                {activeCaseId !== null && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 uppercase tracking-widest font-bold">Кейс {activeCaseId}</span>
                      <h3 className="text-2xl font-extrabold text-foreground mt-3 font-display">{CASES[activeCaseId - 1].title}</h3>
                    </div>

                    {/* Problem */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">Проблема / Вызов</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed bg-red-500/5 border border-red-500/10 p-4 rounded-xl">
                        {CASES[activeCaseId - 1].problem}
                      </p>
                    </div>

                    {/* Tools */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-ring uppercase tracking-wider">Примененный Стек</h4>
                      <div className="flex flex-wrap gap-2">
                        {CASES[activeCaseId - 1].tools.split(',').map(tool => (
                          <span key={tool} className="text-xs font-mono bg-background border border-border px-3 py-1 rounded-lg text-foreground font-semibold">
                            {tool.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Work done */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-ring uppercase tracking-wider">Проделанная работа</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        {CASES[activeCaseId - 1].work.map((item, index) => (
                          <li key={index} className="flex gap-3 items-start">
                            <CheckCircle2 size={16} className="text-ring shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="space-y-2 pt-4 border-t border-border">
                      <h4 className="text-xs font-mono font-bold text-ring uppercase tracking-wider">Результат в цифрах / Эффект</h4>
                      <p className="text-foreground text-sm font-semibold bg-primary/5 border border-primary/10 p-4 rounded-xl">
                        {CASES[activeCaseId - 1].result}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ================= PROFILE TAB ================= */}
        {activeTab === 'profile' && (
          <section className="space-y-12 animate-fade-in">
            {/* Top Grid Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Profile Card */}
              <div className="bg-card/40 border border-border rounded-2xl p-6 space-y-6 text-center md:text-left flex flex-col justify-between backdrop-blur-sm shadow-sm">
                <div className="space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-ring mx-auto md:mx-0 flex items-center justify-center text-4xl shadow-lg shadow-primary/10">
                    👷‍♂️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-display">Николаев Артемий</h3>
                    <p className="text-muted-foreground text-sm">Инженер ПТО / Специалист по исполнительной документации</p>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="text-xs bg-background border border-border text-ring font-mono px-2 py-0.5 rounded font-bold">СС</span>
                    <span className="text-xs bg-background border border-border text-ring font-mono px-2 py-0.5 rounded font-bold">НСС</span>
                    <span className="text-xs bg-background border border-border text-ring font-mono px-2 py-0.5 rounded font-bold">ЭОМ</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border space-y-3.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Phone size={16} className="text-ring" />
                    <span>89154944457</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Mail size={16} className="text-ring" />
                    <span>artyomnikolae7@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Github size={16} className="text-ring" />
                    <span>@Amantle_x (Telegram)</span>
                  </div>
                </div>
              </div>

              {/* Work Profile Details */}
              <div className="md:col-span-2 bg-card/40 border border-border rounded-2xl p-8 space-y-6 backdrop-blur-sm shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2 font-display">
                    <Briefcase size={20} className="text-ring" />
                    Профиль / Опыт работы
                  </h3>
                  <div className="h-1 w-16 bg-ring mt-2 rounded"></div>
                </div>
                
                <p className="text-muted-foreground text-base leading-relaxed">
                  3 года работаю в <strong>Exon</strong> в субподрядной организации: закрываю исполнительную документацию по слаботочным сетям связи и сдаю комплекты.
                  Моя главная ценность — выстраивание качественного процесса и оптимизация рутины, сокращающие количество замечаний от технадзора и повышающие скорость согласования.
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-ring uppercase tracking-widest font-mono">Сильные стороны:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <li className="flex gap-2 items-center">
                      <CheckCircle2 size={16} className="text-ring" />
                      Контроль состава и страничности документов
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle2 size={16} className="text-ring" />
                      Разработка единых шаблонов схем/реестров
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle2 size={16} className="text-ring" />
                      Загрузка ИД в Exon, Sarex
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle2 size={16} className="text-ring" />
                      Разработка ППР и Техкарт по Наружным сетям
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & AI Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard Skills */}
              <div className="bg-card/30 border border-border rounded-2xl p-6 space-y-4 shadow-sm">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 font-display">
                  <SlidersHorizontal size={18} className="text-ring" />
                  Инструменты & Стандартные навыки
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['AutoCAD', 'Excel', 'VBA', 'PowerQuery', 'PowerBI', 'Word', 'Photoshop'].map(skill => (
                    <span key={skill} className="px-3.5 py-1.5 rounded-lg bg-background border border-border text-foreground text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Stack */}
              <div className="bg-card/30 border border-border rounded-2xl p-6 space-y-4 shadow-sm">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 font-display">
                  <Cpu size={18} className="text-ring" />
                  Искусственный Интеллект Stack
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Antigravity', 'Cursor', 'Gemini', 'DeepSeek', 'Grok', 'ChatGPT', 'Copilot'].map(ai => (
                    <span key={ai} className="px-3.5 py-1.5 rounded-lg bg-primary/5 border border-ring/20 text-ring text-sm font-medium">
                      {ai}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-card/40 border border-border rounded-2xl p-8 backdrop-blur-sm shadow-sm">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4 font-display">
                <GraduationCap size={22} className="text-ring" />
                Образование
              </h3>
              <div className="border-l border-border pl-6 space-y-4 relative">
                <div className="absolute w-3 h-3 bg-ring rounded-full -left-[6px] top-1.5 shadow-[0_0_8px_rgba(var(--ring),0.8)]"></div>
                <div>
                  <h4 className="text-base font-bold text-foreground">Московский гуманитарно-технический университет — Московский архитектурно-строительный институт (МГТУ-МАСИ)</h4>
                  <p className="text-muted-foreground text-sm">Высшее образование — бакалавриат</p>
                  <p className="text-muted-foreground text-sm mt-2"><strong>Направление подготовки:</strong> 08.03.01 Строительство (Промышленное и гражданское строительство)</p>
                  <p className="text-xs text-muted-foreground mt-1">Очно-заочная форма. Дата выдачи диплома: 17 января 2026</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= PROJECTS TAB ================= */}
        {activeTab === 'projects' && (
          <section className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-ring font-mono text-xs tracking-widest uppercase font-semibold">Мое Портфолио Разработчика</span>
              <h2 className="text-4xl font-light text-foreground tracking-tight font-display">Репозитории & Разработки</h2>
              <p className="text-muted-foreground text-lg">
                Ссылки и описание моих проектов, интегрированных в данное портфолио.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Project 1 */}
              <div className="bg-card/40 border border-border rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:border-ring/50 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-ring font-bold">REACT / GLSL / WORKER</div>
                  <h3 className="text-xl font-bold text-foreground font-display">nothing-to-watch</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Веб-приложение симуляции фильмов с рендерингом эффектов через Voroforce Shader Engine (WebGL) и оптимизированной работой с потоками.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-6 flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Портфолио-симуляция</span>
                  <a href="#" className="text-xs text-ring flex items-center gap-1 hover:underline font-mono">
                    github.com <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-card/40 border border-border rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:border-ring/50 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-ring font-bold">RAILS / LEAFLET / POSTGRES</div>
                  <h3 className="text-xl font-bold text-foreground font-display">openstreetmap-website</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Локальный клон картографического сервиса OpenStreetMap с кастомными тайлами, структурированной базой данных и API управления объектами.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-6 flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Картография</span>
                  <a href="#" className="text-xs text-ring flex items-center gap-1 hover:underline font-mono">
                    github.com <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-card/40 border border-border rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:border-ring/50 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-ring font-bold">TYPESCRIPT / VECTOR TILES</div>
                  <h3 className="text-xl font-bold text-foreground font-display">vectortile-website</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Инструмент для сборки стилей векторных карт и работы с тайловыми серверами на основе MapLibre / Versatiles стилей.
                  </p>
                </div>
                <div className="pt-6 border-t border-border mt-6 flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Векторные карты</span>
                  <a href="#" className="text-xs text-ring flex items-center gap-1 hover:underline font-mono">
                    github.com <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          </section>
        )}

      </main>

      {/* Footer & Contact Form */}
      <footer className="bg-muted/10 border-t border-border mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground font-display">Связаться со мной</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Если у вас есть вопросы по поводу сдачи исполнительной документации на ваших строительных объектах, 
                требуется автоматизация рутинных процессов или вы хотите пригласить меня в проект, напишите мне на почту или в Telegram.
              </p>
              
              <div className="space-y-3.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-ring" />
                  <span>Москва, Российская Федерация</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-ring" />
                  <span>artyomnikolae7@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github size={16} className="text-ring" />
                  <span>Telegram: @Amantle_x</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-card/60 p-8 rounded-2xl border border-border relative shadow-sm">
              <h4 className="text-lg font-bold text-foreground mb-6 font-display">Отправить сообщение</h4>
              
              {formSubmitted ? (
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl text-center space-y-3">
                  <Check className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-foreground">Сообщение отправлено!</h4>
                  <p className="text-sm text-muted-foreground">Спасибо за обращение. Я свяжусь с вами в ближайшее время.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-ring hover:underline mt-2 cursor-pointer"
                  >
                    Отправить еще одно
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault()
                    setFormSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase font-mono">Ваше Имя *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Артемий" 
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-ring transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase font-mono">Email *</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="you@example.com" 
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-ring transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase font-mono">Сообщение *</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder="Здравствуйте..." 
                      className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-ring transition-colors text-sm resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3 px-4 bg-primary text-primary-foreground font-bold text-sm rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 shadow-lg shadow-primary/10 transition-all"
                  >
                    <Send size={14} /> Отправить
                  </button>
                </form>
              )}
            </div>

          </div>
          
          <div className="pt-12 mt-12 border-t border-border text-center text-xs text-muted-foreground font-mono">
            &copy; 2026 Николаев Артемий. Все права защищены.
          </div>
        </div>
      </footer>

    </div>
  )
}
