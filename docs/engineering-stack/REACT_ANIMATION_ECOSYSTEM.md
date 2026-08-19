# ⚡ Архитектура Фронтенда, Анимаций и React-Экосистемы (React & Animation Ecosystem)

> Синтез лучших практик современной веб-разработки на основе анализа **Bulletproof React**, **Motion (Framer Motion)**, **GSAP**, **Lenis**, **Tailwind CSS v4** и ГИС-стека (**Leaflet / MapLibre GL**).

---

## 🏗️ 1. Архитектурный паттерн: Feature-Based (Bulletproof React)

В проекте используется модульная архитектура, где код группируется не по типу файла, а по **бизнес-функционалу (feature)**:

```
apps/web/app/
├── components/           # Общие UI-компоненты (LineNav, HoverCard, Marquee, Meteors, ScrollReveal)
│   └── ui/
├── data/                 # Статические данные (content.json, cctvData.ts, vor-default.json)
├── features/             # Бизнес-модули
│   ├── about/            # Секции: Hero, About, Experience, TechStack, Metrics, Toolkit, Timeline, FAQ
│   ├── cases/            # Инженерные кейсы и модальное окно деталей
│   ├── chats/            # Интерактивная переписка с технадзором и ГИПами
│   ├── projects/         # Интерактивная ГИС-карта объектов Москвы
│   ├── v2/               # Режим Cyber Terminal (HUD)
│   ├── v3/               # Режим GSAP Kinetic Executive Showcase
│   └── v4/               # Режим Anthropic Minimalist Light Paper
├── platform/             # Рабочая платформа инженера (/platform, дашборды, спецификации, документы)
├── themes/               # Токены и темы оформления (ElevenLabs, Kinpaku, Paper)
├── lib/                  # Вспомогательные утилиты (cn, tailwind-merge, clsx)
├── app.tsx               # Корневой компонент сборки и переключатель версий
└── main.tsx              # Точка входа React 19 + HashRouter
```

### Главные архитектурные правила:
1. **Строгая изолированность:** Модуль `features/cases` содержит собственные данные, компоненты и типы, не загрязняя глобальное пространство.
2. **Абсолютные импорты `@/`:** Импорты всегда однозначны и не зависят от глубины вложенности файлов (`@/features/...`, `@/components/...`).
3. **TypeScript Strict Mode:** Все свойства компонентов и структуры данных строго типизированы без использования `any`.

---

## 🎬 2. Иерархия Анимаций: От CSS к WebGL

Анимации распределены по уровням ответственности согласно золотому правилу производительности:

```
[Level 1: CSS Transitions] ──► [Level 2: Motion] ──► [Level 3: GSAP / ScrollTrigger] ──► [Level 4: OGL / WebGL]
```

| Уровень | Инструмент | Сфера применения в проекте |
|---|---|---|
| **Level 1** | **CSS Transitions & Tailwind** | Состояния кнопок, ховеры карточек, переключение тем (`transition-all duration-300`) |
| **Level 2** | **Motion (`framer-motion` / `motion`)** | Появление модальных окон кейсов (`AnimatePresence`), карточки с плавной пружиной (`spring`) |
| **Level 3** | **Lenis + ScrollReveal** | Инерционный плавный скролл (`lerp: 0.1`) и поочередное раскрытие секций портфолио |
| **Level 4** | **OGL / Three.js / Canvas** | Интерактивные фоновые 3D-эффекты (`Background3D`, `Meteors`, `Magnify`) |

---

## 🗺️ 3. ГИС-стек и Картография (Leaflet & MapLibre GL)

Для интерактивной карты 17 московских объектов реализована интеграция с **Leaflet** и кастомными стилями CartoDB Dark/Voyager:
- **Адаптивные тайлы:** Переключение между темной темой (`dark_all`) и светлой картой (`rastertiles/voyager`) в зависимости от выбранного режима.
- **Интерактивные маркеры:** Кастомные HTML-маркеры с пульсацией, подсветкой статуса готовности и привязкой к карточкам справа.
- **Синхронизация фильтров:** Фильтрация по генподрядчикам мгновенно обновляет маркеры на карте без перезагрузки DOM.
