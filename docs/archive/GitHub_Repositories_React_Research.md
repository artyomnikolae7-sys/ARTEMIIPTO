# GitHub репозитории для React

**User:**

омоги найти для разработки сайов полезные гитхаб репозитории с анимациями на react next js я н особо понимаю во всем этом фронтэнд бэкэнд, можешь заодно ещё укащать на расширения к next js или react хочу понять вообще принцип и как использовать

---

**Assistant:**

Да. Если ты пока не очень понимаешь разделение **frontend / backend / React / Next.js / библиотеки**, я бы не начинал с десятков репозиториев. Лучше сначала собрать правильную картину: **что за что отвечает**, а потом уже взять 8–10 GitHub-проектов как «конструктор».

Для твоей задачи — **современные сайты, красивые анимации, интерактив, 3D, портфолио инженера/дизайнера, landing pages** — стек я бы строил примерно так:

**Next.js → React → Tailwind → shadcn/ui → Motion → GSAP → Lenis → Three.js/R3F**

---

# 1. Сначала главное: что вообще есть что

Упрощённо:

```text
                 ТВОЙ САЙТ
                     │
             ┌───────┴───────┐
             │               │
          FRONTEND         BACKEND
             │               │
       то, что видит      серверная
       пользователь       логика / БД
             │
      ┌──────┼───────┐
      │      │       │
    React  CSS    JavaScript
      │
    Next.js
      │
 ┌────┴───────────────┐
 │                    │
страницы           серверные
компоненты         функции/API
 │
 ├── Motion
 ├── GSAP
 ├── Three.js
 ├── Lenis
 ├── shadcn/ui
 └── React Bits
```

### React

**React — способ строить интерфейс из компонентов.**

Например:

```text
Сайт
 ├── Header
 ├── Hero
 ├── About
 ├── Projects
 │    ├── ProjectCard
 │    ├── ProjectCard
 │    └── ProjectCard
 └── Footer
```

Каждый элемент можно сделать отдельным React-компонентом.

---

### Next.js

**Next.js — фреймворк поверх React.**

Он добавляет:

- маршрутизацию;
- серверный рендеринг;
- Server Components;
- API/server functions;
- работу с изображениями;
- оптимизацию;
- metadata/SEO;
- структуру проекта;
- deployment.

Современный Next.js использует **App Router**, где страницы и layouts организуются через файловую структуру. citeturn0search0turn0search2

То есть:

```text
React
   ↓
Next.js
   ↓
готовое приложение
```

---

# 2. Самое важное для тебя — не путать библиотеки

Например:

### Next.js

Отвечает примерно за:

> «Как устроен сайт целиком?»

### React

Отвечает:

> «Как устроены компоненты интерфейса?»

### Motion

Отвечает:

> «Как красиво анимировать эти компоненты?»

### GSAP

Отвечает:

> «Как делать сложные последовательные и scroll-based анимации?»

### Lenis

Отвечает:

> «Как сделать плавный scroll и связать его с анимациями?»

### Three.js

Отвечает:

> «Как сделать 3D/WebGL?»

### React Three Fiber

Отвечает:

> «Как использовать Three.js внутри React?»

### Tailwind

Отвечает:

> «Как быстро писать CSS?»

### shadcn/ui

Отвечает:

> «Как получить готовые UI-компоненты, которые можно редактировать?»

---

# 3. Репозиторий №1 — React Bits

Это **обязательно сохрани**.

urlReact Bits — GitHubhttps://github.com/DavidHDev/react-bits

Это огромная коллекция готовых анимированных React-компонентов.

Сейчас там уже **140+ компонентов**: text animations, backgrounds, UI, интерактивные эффекты и т.д. Код можно брать и модифицировать. citeturn1search3turn1search5

Например, условно:

```text
React Bits
│
├── Text animations
│   ├── BlurText
│   ├── SplitText
│   ├── DecryptedText
│   └── ...
│
├── Backgrounds
│   ├── Aurora
│   ├── Particles
│   ├── Grid
│   └── ...
│
├── Components
│   ├── Cards
│   ├── Buttons
│   ├── Hover effects
│   └── ...
│
└── 3D / interactive
```

Особенно полезно тебе для **сайта-портфолио**.

---

# 4. Motion — начать изучение анимаций именно с него

urlMotion for React — документацияhttps://motion.dev/docs/react

Раньше библиотека была широко известна как **Framer Motion**, сейчас основной пакет называется `motion`.

Установка:

```bash
npm install motion
```

Использование:

```tsx
import { motion } from "motion/react";

export default function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Hello
    </motion.div>
  );
}
```

И всё.

Получается:

```text
обычный div
      ↓
motion.div
      ↓
можно анимировать
```

Motion поддерживает hover, tap, drag, scroll, layout transitions, SVG и т.д. citeturn0search1turn0search9

Например:

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Нажми
</motion.button>
```

Это уже интерактивная кнопка.

---

# 5. GSAP — когда хочется «вау»

urlGSAP — GitHubhttps://github.com/greensock/GSAP

GSAP — гораздо более мощный инструмент для сложных анимационных сцен.

Он умеет:

- timeline;
- scroll animation;
- SVG;
- morphing;
- motion paths;
- сложные последовательности;
- WebGL;
- React;
- responsive animation.

Особенно интересен:

**ScrollTrigger**

Например:

```text
пользователь скроллит
       ↓
заголовок уменьшается
       ↓
картинка увеличивается
       ↓
текст появляется
       ↓
карточки разъезжаются
       ↓
следующая секция
```

GSAP предоставляет `@gsap/react` с `useGSAP()` для интеграции с React. citeturn1search4

---

# 6. Lenis — плавный scroll

urlLenis — GitHubhttps://github.com/darkroomengineering/lenis

Это очень интересная штука для **premium-looking сайтов**.

Lenis делает плавный scroll и хорошо сочетается с:

```text
Lenis
   +
GSAP
   +
ScrollTrigger
```

Например:

```text
SCROLL
  ↓
Lenis
  ↓
плавное значение scroll
  ↓
GSAP
  ↓
анимация элементов
```

Есть отдельная React-интеграция:

```tsx
import { ReactLenis } from "lenis/react";
```

и `useLenis`. citeturn1search10

---

# 7. Three.js + React Three Fiber

Вот здесь начинается уже **3D/WebGL**.

urlReact Three Fiber — GitHubhttps://github.com/pmndrs/react-three-fiber

Three.js:

```text
JavaScript
      ↓
Three.js
      ↓
3D сцена
```

React Three Fiber:

```text
React
  +
Three.js
  ↓
React Three Fiber
```

То есть вместо:

```javascript
new THREE.Mesh(...)
```

можно мыслить React-компонентами:

```jsx
<mesh>
  <boxGeometry />
  <meshStandardMaterial />
</mesh>
```

R3F официально позиционируется как React renderer для Three.js; экосистема включает `drei`, postprocessing, physics и другие инструменты. citeturn1search0

---

# 8. Обязательно посмотри Drei

urlReact Three Drei — GitHubhttps://github.com/pmndrs/drei

Если Three.js — это условно:

> «движок»

то Drei:

> «набор готовых инструментов для этого движка».

Например:

```text
Three.js
   │
   └── React Three Fiber
           │
           └── Drei
                ├── Camera
                ├── Environment
                ├── Controls
                ├── Text
                ├── Models
                └── Effects
```

Без Drei многие вещи пришлось бы писать самостоятельно.

---

# 9. React Spring

urlReact Spring — GitHubhttps://github.com/pmndrs/react-spring

Ещё одна animation library.

Она особенно интересна, если нравятся **физические spring-анимации**.

Например:

```text
элемент
   ↓
ускорение
   ↓
перелёт
   ↓
отскок
   ↓
стабилизация
```

Она поддерживает React DOM и React Three Fiber. citeturn1search2

Но **тебе пока её изучать не обязательно**.

Сначала Motion.

---

# 10. Ещё один очень интересный репозиторий — shadcn/ui

urlshadcn/ui — официальный сайтhttps://ui.shadcn.com/

Здесь важный концептуальный момент.

Это не совсем обычная библиотека:

```text
npm install library
```

и всё.

shadcn позволяет добавлять исходный код компонентов в **свой проект**, после чего ты можешь его изменять.

Например:

```text
Button
Dialog
Card
Dropdown
Tabs
Accordion
Navigation
Tooltip
...
```

И потом:

```text
shadcn Button
      ↓
твой проект
      ↓
ты можешь изменить код
      ↓
полностью свой дизайн
```

Это очень хороший подход для тебя, если ты хочешь **понимать код, а не просто подключать чёрные ящики**.

---

# 11. Ещё несколько репозиториев, которые я бы сохранил

### Aceternity UI

urlAceternity UI — GitHubhttps://github.com/aceternity/ui

Очень много эффектных компонентов:

- cards;
- spotlight;
- background;
- text effects;
- hover;
- gradients;
- scroll effects.

Хорош для изучения того, **как делают современные landing pages**.

---

### Magic UI

urlMagic UI — GitHubhttps://github.com/magicuidesign/magicui

Похожая концепция:

```text
готовый компонент
       ↓
копируешь
       ↓
адаптируешь
       ↓
получаешь свой UI
```

Особенно хорош для SaaS/tech/AI-style сайтов.

---

### React Icons

urlReact Icons — GitHubhttps://github.com/react-icons/react-icons

Чтобы не искать SVG-иконки вручную.

---

### Lucide

urlLucide — GitHubhttps://github.com/lucide-icons/lucide

Очень хороший современный набор SVG-иконок для интерфейсов.

---

# 12. И вот как всё это реально соединяется

Допустим, мы делаем твой сайт-портфолио.

### Структура

```text
NEXT.JS
│
├── Header
│    └── React
│
├── Hero
│    ├── React
│    ├── Motion
│    └── Three.js
│
├── About
│    └── React
│
├── Projects
│    ├── shadcn/ui
│    ├── React Bits
│    └── Motion
│
├── Experience
│    └── GSAP
│
├── 3D section
│    ├── Three.js
│    ├── React Three Fiber
│    └── Drei
│
└── Footer
```

А поверх всего:

```text
                    NEXT.JS
                       │
                 ┌─────┴─────┐
                 │           │
               React       Tailwind
                 │
       ┌─────────┼──────────┐
       │         │          │
     Motion     GSAP      React Bits
       │         │          │
       └─────────┼──────────┘
                 │
               Lenis
                 │
          ┌──────┴───────┐
          │              │
       Three.js         R3F
                         │
                       Drei
```

---

# 13. Но есть важная вещь: не надо устанавливать всё

Я бы **не делал**:

```bash
npm install
motion
gsap
react-spring
three
lenis
...
```

просто потому что они существуют.

Начальный стек:

```text
Next.js
React
TypeScript
Tailwind
shadcn/ui
Motion
```

И всё.

Потом:

```text
+ Lenis
```

если нужен smooth scroll.

Потом:

```text
+ GSAP
```

если Motion уже не хватает.

Потом:

```text
+ Three.js
+ React Three Fiber
+ Drei
```

если появляется 3D.

---

# 14. Самая полезная схема обучения для тебя

Я бы вообще не учил это как отдельные технологии.

Учил бы **через создание сайта**.

### Этап 1 — понять React

```text
Component
Props
State
Events
Hooks
```

Тебе не нужен сразу весь React.

---

### Этап 2 — Next.js

Понять:

```text
app/
│
├── page.tsx
├── layout.tsx
│
├── about/
│   └── page.tsx
│
└── projects/
    └── page.tsx
```

То есть:

```text
app/page.tsx
      ↓
      /
      
app/about/page.tsx
      ↓
      /about

app/projects/page.tsx
      ↓
      /projects
```

Это одна из ключевых концепций Next.js App Router. citeturn0search2

---

# 15. Потом разобраться с Client / Server

Вот это место сначала выглядит страшно.

В Next.js компоненты по умолчанию являются **Server Components**. Для интерактивных компонентов используется Client Component. citeturn0search2turn0search5

Например:

```tsx
export default function Page() {
  return <h1>Hello</h1>
}
```

может быть серверным компонентом.

А если нужен:

```text
onClick
useState
useEffect
Motion
WebGL
browser API
```

обычно появляется:

```tsx
"use client";
```

То есть:

```text
SERVER
   │
   ├── данные
   ├── SEO
   ├── страницы
   └── структура
       
CLIENT
   │
   ├── кнопки
   ├── анимации
   ├── интерактив
   ├── 3D
   └── состояние
```

Это **очень важная концепция Next.js**.

---

# 16. Что означает «расширение для Next.js»

Здесь тоже легко запутаться.

Есть несколько разных вещей.

### ① Library

Например:

```text
motion
gsap
lenis
three
```

Ты устанавливаешь:

```bash
npm install motion
```

---

### ② Component library

Например:

```text
shadcn
React Bits
Aceternity
Magic UI
```

Берёшь готовые компоненты.

---

### ③ Framework

```text
Next.js
```

Это уже основа приложения.

---

### ④ Runtime / language

```text
JavaScript
TypeScript
```

---

### ⑤ CSS framework

```text
Tailwind CSS
```

---

# 17. А вот GitHub-репозитории тебе лучше изучать не как «скачать проект»

Это очень важный навык.

Допустим, нашёл:

```text
React Bits
```

Не надо:

> скачать весь GitHub → запустить → надеяться, что работает.

Лучше:

```text
1. Открыл компонент
       ↓
2. Посмотрел demo
       ↓
3. Открыл исходник
       ↓
4. Посмотрел package imports
       ↓
5. Понял зависимости
       ↓
6. Скопировал компонент
       ↓
7. Изменил его
```

Так ты постепенно начнёшь читать frontend-код.

---

# 18. Что я бы рекомендовал именно тебе

С учётом того, что ты хочешь делать **визуально сильные сайты**, а не становиться backend-разработчиком, твой первый roadmap был бы таким:

```text
                    WEB
                     │
                     ▼
                 JavaScript
                     │
                     ▼
                   React
                     │
                     ▼
                  Next.js
                     │
              ┌──────┴──────┐
              ▼             ▼
           Tailwind      Components
                            │
                 ┌──────────┼─────────┐
                 ▼          ▼         ▼
              shadcn    React Bits  Aceternity
                 │
                 ▼
              Motion
                 │
                 ▼
               GSAP
                 │
                 ▼
               Lenis
                 │
                 ▼
              Three.js
                 │
                 ▼
          React Three Fiber
                 │
                 ▼
                Drei
```

И **не надо проходить это годами**.

Можно сделать один учебный проект и в процессе разобраться.

---

# 19. Конкретно с чего начать

Я бы сделал тебе такой первый проект:

### `ENGINEER PORTFOLIO`

```text
/
├── Hero
│
├── About
│
├── Skills
│
├── Projects
│
├── Project/[slug]
│
├── Experience
│
└── Contact
```

И постепенно:

### Версия 1

```text
Next.js
React
Tailwind
```

↓

### Версия 2

```text
+ shadcn
```

↓

### Версия 3

```text
+ Motion
```

↓

### Версия 4

```text
+ React Bits
```

↓

### Версия 5

```text
+ Lenis
+ GSAP
```

↓

### Версия 6

```text
+ Three.js
+ React Three Fiber
+ Drei
```

Так ты увидишь **зачем существует каждая технология**, вместо того чтобы просто запоминать названия.

---

## Мой минимальный список GitHub для закладок

| Репозиторий | Зачем |
|---|---|
| urlReact Bitshttps://github.com/DavidHDev/react-bits | готовые анимации и компоненты |
| urlAceternity UIhttps://github.com/aceternity/ui | эффектные UI/landing effects |
| urlMagic UIhttps://github.com/magicuidesign/magicui | современные UI-компоненты |
| urlGSAPhttps://github.com/greensock/GSAP | сложные анимации |
| urlLenishttps://github.com/darkroomengineering/lenis | smooth scroll |
| urlReact Three Fiberhttps://github.com/pmndrs/react-three-fiber | React + 3D |
| urlReact Springhttps://github.com/pmndrs/react-spring | physics/spring animation |
| urlshadcn/uihttps://ui.shadcn.com/ | базовые UI-компоненты |
| urlLucidehttps://github.com/lucide-icons/lucide | SVG-иконки |
| urlMotionhttps://motion.dev/docs/react | основной инструмент анимации React |

И отдельно сохрани **официальный Next.js Getting Started** — текущий Next.js по умолчанию при создании нового приложения использует App Router, TypeScript, Tailwind, ESLint и Turbopack; актуальные требования включают Node.js 20.9+. citeturn0search4

**Я бы на твоём месте сейчас вообще не лез в backend.** Для первых красивых сайтов тебе достаточно разобраться в связке:

> **HTML/CSS → JavaScript → React → Next.js → Tailwind → компоненты → Motion → GSAP → 3D.**

А backend подключать уже тогда, когда появится реальная необходимость: авторизация, база данных, формы с сохранением данных, CMS, личный кабинет и т.п.

---

**User:**

react компоненты найди мне большие библиотеки с готовыми компонентами 

---

**Assistant:**

Да. Если именно **большие библиотеки готовых React-компонентов**, а не только анимации, то список существенно шире. Я бы разделил их на 3 класса: **готовый UI**, **headless-примитивы**, **креативные/анимированные компоненты**.

## 1. Большие универсальные библиотеки

| Библиотека | Масштаб | Лучше всего для |
|---|---|---|
| **MUI** | ⭐⭐⭐⭐⭐ | большие приложения, админки, dashboards |
| **Ant Design** | ⭐⭐⭐⭐⭐ | enterprise, таблицы, формы, CRM |
| **Mantine** | ⭐⭐⭐⭐⭐ | практически всё |
| **Chakra UI** | ⭐⭐⭐⭐ | быстрые современные приложения |
| **PrimeReact** | ⭐⭐⭐⭐⭐ | огромное количество готовых widgets |
| **HeroUI** | ⭐⭐⭐⭐ | современные красивые интерфейсы |
| **NextUI / HeroUI ecosystem** | ⭐⭐⭐⭐ | Next.js + современный UI |
| **Fluent UI** | ⭐⭐⭐⭐⭐ | Microsoft-style приложения |

### urlMUI — Material UIhttps://github.com/mui/material-ui

Одна из самых больших React UI-библиотек.

Есть:

- Button
- Card
- Dialog
- Drawer
- Menu
- Tabs
- Accordion
- Table
- Date Picker
- Data Grid
- Form elements
- Navigation
- Grid
- Snackbar
- Progress
- Tooltip
- и многое другое.

**Но:** визуально она сильно ассоциируется с Material Design. Для твоих красивых портфолио я бы не ставил её на первое место.

---

### urlAnt Designhttps://github.com/ant-design/ant-design

Очень большая экосистема.

Особенно сильна в:

```text
Tables
Forms
DatePicker
Select
Upload
Tree
Calendar
Charts / dashboards ecosystem
```

Если когда-нибудь будешь делать:

> систему ПТО / управление документацией / спецификациями / объектами

Ant Design становится очень интересным вариантом.

---

### urlMantinehttps://github.com/mantinedev/mantine

Вот эту я бы **обязательно изучил**.

Mantine — не просто набор кнопок. Там есть большая экосистема компонентов, hooks и utilities. В современных обсуждениях React-разработчики часто выделяют её именно за широту компонентов и удобство кастомизации. citeturn0reddit46turn0search5

Например:

```text
Button
Card
Modal
Drawer
Tabs
Accordion
Carousel
DatePicker
Calendar
DataTable
Notifications
RichTextEditor
Dropzone
Charts
Navbar
Pagination
Stepper
Timeline
Tree
```

Плюс:

```text
useDebouncedValue()
useDisclosure()
useForm()
useHotkeys()
useMediaQuery()
useLocalStorage()
...
```

То есть Mantine — уже почти **toolbox для всего frontend**.

---

### urlPrimeReacthttps://github.com/primefaces/primereact

А вот это настоящий **монстр по количеству готовых компонентов**.

Особенно:

```text
DataTable
TreeTable
Tree
Timeline
Galleria
Carousel
FileUpload
Calendar
DatePicker
Charts
Dialogs
Menus
Steps
OrganizationChart
Terminal
Editor
```

Если задача:

> «Мне нужен максимально широкий набор готовых UI-компонентов»

PrimeReact стоит смотреть одним из первых.

---

## 2. Но для твоих сайтов я бы смотрел совсем в другую сторону

Тебе не нужен условный:

> «корпоративный Material Design сайт».

Ты хочешь:

- красивые landing pages;
- portfolio;
- интерактив;
- анимации;
- 3D;
- необычные cards;
- effects;
- scroll animation;
- WebGL;
- современные hero sections.

Поэтому здесь намного интереснее следующие библиотеки.

---

# 3. React Bits

urlReact Bits GitHubhttps://github.com/DavidHDev/react-bits

Это прямо **в твою задачу**.

Сейчас проект заявляет **140+ компонентов**, включая backgrounds, text effects, animations и UI patterns. Есть варианты JS/TS + CSS/Tailwind. citeturn0search1turn0search2

Например:

```text
Aurora
Particles
Spotlight
BlurText
ShinyText
DecryptedText
MagicRings
PixelTrail
SplashCursor
Magnet
Tilt
Dock
InfiniteScroll
```

Именно здесь я бы искал компоненты для:

> **«Сделать сайт визуально дорогим»**

---

# 4. Aceternity UI

urlAceternity UI GitHubhttps://github.com/aceternity/ui

Очень много:

```text
Cards
Backgrounds
Buttons
Text
Navigation
Hover effects
3D effects
Scroll effects
Glowing effects
```

Типичный Aceternity:

```text
┌──────────────────────────────┐
│                              │
│      AMAZING PRODUCT         │
│                              │
│    ✦ ✦ ✦ animated ✦ ✦       │
│                              │
│        [ Explore ]           │
│                              │
└──────────────────────────────┘
```

Это скорее **visual component library**, чем обычная UI-библиотека.

---

# 5. Magic UI

urlMagic UI GitHubhttps://github.com/magicuidesign/magicui

Очень похожая категория:

```text
Magic UI
   │
   ├── Animated text
   ├── Buttons
   ├── Cards
   ├── Marquee
   ├── Bento grids
   ├── Borders
   ├── Backgrounds
   ├── Charts
   └── Special effects
```

Очень удобно для:

**SaaS / AI / startup / portfolio / tech websites.**

---

# 6. shadcn/ui

urlshadcn/ui GitHubhttps://github.com/shadcn-ui/ui

Здесь принцип отличается.

Это не:

```text
npm install some-library
```

в классическом понимании.

Ты добавляешь **исходник компонента в свой проект** и дальше владеешь этим кодом.

Например:

```text
components/
│
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   └── tabs.tsx
```

И можешь менять его как хочешь.

Это одна из причин, почему shadcn особенно хорошо сочетается с Next.js/Tailwind. Современные обзоры React-экосистемы также выделяют именно этот подход как один из основных вариантов для новых Next.js-проектов. citeturn0search5

---

# 7. Radix UI

urlRadix UI GitHubhttps://github.com/radix-ui/primitives

Вот здесь начинается другая философия.

Radix предоставляет **доступные функциональные primitives**, а внешний вид ты строишь сам.

Например:

```text
Dialog
Dropdown Menu
Popover
Tooltip
Tabs
Accordion
Context Menu
Navigation Menu
Select
Slider
Switch
Toast
Toggle
```

Radix официально описывает primitives как open-source библиотеку доступных компонентов для построения собственных design systems. citeturn0search3

И очень важный момент:

```text
shadcn/ui
      ↓
использует Radix primitives
      ↓
добавляет стили
```

Поэтому если будешь изучать shadcn — постепенно начнёшь встречать Radix.

---

# 8. React Aria

urlReact Ariahttps://github.com/adobe/react-spectrum/tree/main/packages/react-aria

Проект Adobe.

Это скорее:

> **accessibility + interaction primitives**

чем визуальная библиотека.

Полезна для:

```text
Dropdown
Select
ComboBox
DatePicker
Calendar
Modal
Tooltip
Tabs
Table
Tree
```

То есть тебе не дают обязательно «красивую кнопку».

Тебе дают **правильно работающий компонент**, который ты потом стилизуешь.

---

# 9. HeroUI

urlHeroUI GitHubhttps://github.com/heroui-inc/heroui

Очень интересный вариант для современных сайтов.

Условно:

```text
shadcn
   +
modern design
   +
animations
   +
React Aria
```

Особенно стоит посмотреть, если хочется:

- современный dark UI;
- красивые cards;
- modal;
- navbar;
- dropdown;
- inputs;
- tabs;
- tables.

---

# 10. Headless UI

urlHeadless UI GitHubhttps://github.com/tailwindlabs/headlessui

От Tailwind Labs.

Очень хорошая идея для понимания:

```text
логика компонента
       ≠
визуальный дизайн
```

Например:

```text
Headless UI
    ↓
Dialog
    ↓
ты сам решаешь,
как он выглядит
```

Это полезно, когда ты уже начинаешь создавать собственный дизайн.

---

# 11. Ark UI

urlArk UI GitHubhttps://github.com/chakra-ui/ark

Ещё одна мощная headless-библиотека.

Интересна тем, что компоненты ориентированы на:

- accessibility;
- state machines;
- сложные interactions;
- framework flexibility.

Её уже имеет смысл смотреть после Radix/shadcn.

---

# 12. А теперь самое интересное — библиотеки, которые я бы собрал тебе

Не надо устанавливать все 10.

Я бы разделил их так:

### 🟢 База интерфейса

**Mantine**

или

**shadcn/ui**

---

### 🔵 Креатив

**React Bits**

+

**Aceternity UI**

+

**Magic UI**

---

### 🟣 Сложные интерактивные элементы

**Radix UI**

или

**React Aria**

---

### 🟠 Enterprise / большие приложения

**MUI**

**Ant Design**

**PrimeReact**

---

### 🔴 3D

**React Three Fiber**

+

**Drei**

---

# 13. И вот мой личный рейтинг именно для твоей задачи

Если цель:

> **«Я хочу делать современные красивые сайты, но пока плохо разбираюсь во frontend»**

то я бы поставил:

### 1. 🥇 React Bits

Для визуальных эффектов.

citeturn0search0

### 2. 🥈 shadcn/ui

Для базовой архитектуры UI.

### 3. 🥉 Mantine

Если хочется **огромную готовую систему компонентов**.

### 4. Aceternity UI

Для wow-эффектов.

### 5. Magic UI

Для современных SaaS/AI интерфейсов.

### 6. HeroUI

Для красивого готового UI.

### 7. Radix

Для понимания фундаментальных UI primitives.

### 8. PrimeReact

Если нужно **очень много готовых сложных компонентов**.

### 9. MUI

Если пойдёшь в большие приложения.

### 10. Ant Design

Если будешь делать enterprise/CRM/системы.

---

## И есть ещё один важный момент

Я бы не смешивал в одном проекте:

```text
MUI
+
Mantine
+
Ant Design
+
PrimeReact
+
shadcn
+
HeroUI
```

Это примерно как собрать автомобиль из деталей пяти разных автомобилей.

А вот такое сочетание вполне разумно:

```text
Next.js
   │
   ├── Tailwind
   │
   ├── shadcn/ui       ← базовые UI
   │
   ├── React Bits      ← visual effects
   │
   ├── Motion          ← animation
   │
   ├── GSAP            ← complex animation
   │
   └── R3F             ← 3D
```

**Вот эту комбинацию я бы рекомендовал тебе изучать.**

Если хочешь именно **максимально большой каталог**, то я могу следующим сообщением собрать тебе **30–50 GitHub-репозиториев именно с React/Next.js компонентами**, разложив их по категориям: **Cards / Buttons / Navbar / Hero / Forms / Tables / Dashboard / 3D / WebGL / Cursor / Backgrounds / Text animations / Scroll / Bento / Charts / Full templates** — и отдельно отметить ⭐ какие реально стоит брать в проекты, а какие только посмотреть для вдохновения.

---

**User:**

супер смотри  я делаю сайт но у меня сложности с тем чтобы вообще  я забыл хахахха что хотел

а вспомнил как должны выглядеть профессиональные удобные репозитории структура папопк как должны быть расположены компоненты сайта код анимации стили и прочее, чтобы с этим было удобно работать поищи пожалуйста самые популярные гитхаб основы основ скажем так лучшие практики разработки сайтов и в целом фронтэнд и бэкэнд сайтов, приложений

---

**Assistant:**

Да, теперь понял задачу. Ты ищешь не очередную библиотеку компонентов, а **«эталоны устройства нормального проекта»** — чтобы открыть GitHub и посмотреть:

- где лежат страницы;
- где компоненты;
- где анимации;
- где стили;
- где API;
- где типы;
- где хуки;
- где изображения;
- где конфигурация;
- как frontend общается с backend;
- где тесты;
- как организован production-проект.

Я посмотрел актуальные репозитории и документацию. И здесь есть несколько действительно полезных **«учебных эталонов»**.

---

# 1. 🥇 Bulletproof React — начать именно отсюда

urlBulletproof React — GitHubhttps://github.com/alan2207/bulletproof-react

Если тебе нужно понять **как профессионально организовать React-проект**, это, пожалуй, один из самых полезных репозиториев.

В нём специально показывается архитектура масштабируемого React-приложения.

Особенно интересны:

```text
src/
├── app/
├── assets/
├── components/
├── config/
├── features/
├── hooks/
├── lib/
├── routes/
├── stores/
├── testing/
├── types/
└── utils/
```

Главная идея:

> **код группируется не только по типу файла, но и по бизнес-функциональности.**

Например:

```text
features/
└── projects/
    ├── api/
    ├── components/
    ├── hooks/
    ├── types/
    └── index.ts
```

А не огромная помойка:

```text
components/
    Button.tsx
    Project.tsx
    ProjectCard.tsx
    ProjectModal.tsx
    ProjectForm.tsx
    ProjectAPI.ts
    ProjectHook.ts
    ...
```

В актуальной версии проекта отдельно подчёркиваются TypeScript strict mode, абсолютные импорты `@/`, ESLint/Prettier, kebab-case для файлов/директорий и правила зависимости между features. citeturn0search6

**Это я бы изучал первым.**

---

# 2. 🥈 Next.js — официальный репозиторий с примерами

urlNext.js Examples — GitHubhttps://github.com/vercel/next.js/tree/canary/examples

Это уже не «архитектурная книга», а **огромная коллекция реальных примеров Next.js**.

Там можно посмотреть:

```text
authentication
API
database
CMS
middleware
routing
images
i18n
MDX
Prisma
Tailwind
TypeScript
testing
deployment
```

То есть когда ты не понимаешь:

> «А как вообще это принято делать в Next.js?»

ищешь соответствующий example.

---

# 3. 🥉 Next.js официальные шаблоны

urlVercel Next.js Templateshttps://vercel.com/templates/next.js

Здесь уже интереснее смотреть **полноценные сайты**, а не отдельные компоненты.

Например можно изучать:

```text
Landing page
Portfolio
SaaS
Blog
Dashboard
AI application
E-commerce
CMS
```

И смотреть:

```text
как устроен проект
       ↓
как устроены страницы
       ↓
как сделаны компоненты
       ↓
как подключается БД
       ↓
как реализована авторизация
```

---

# 4. Очень важный — T3 Stack

urlcreate-t3-app — GitHubhttps://github.com/t3-oss/create-t3-app

Это уже следующий уровень.

T3 показывает современный TypeScript full-stack подход вокруг:

```text
Next.js
TypeScript
tRPC
Prisma
Tailwind
```

И самое полезное здесь — увидеть, **как frontend и backend начинают превращаться в единую систему**.

---

# 5. Полный Full-Stack эталон — FastAPI Template

urlFull Stack FastAPI Template — GitHubhttps://github.com/fastapi/full-stack-fastapi-template

Вот это я очень рекомендую тебе посмотреть именно для понимания:

> **«Что происходит, когда сайт становится настоящим приложением?»**

Там есть:

```text
frontend
backend
database
API
authentication
Docker
testing
CI/CD
deployment
```

Официальный стек сейчас включает FastAPI + SQLModel + PostgreSQL + React + TypeScript + Tailwind + shadcn/ui + Playwright + Docker Compose + GitHub Actions. citeturn0search2

Причём frontend реально разделён:

```text
frontend/
└── src/
    ├── assets/
    ├── client/
    ├── components/
    ├── hooks/
    └── routes/
```

а backend отдельно. citeturn0search0

Это уже хороший пример **full-stack repository**.

---

# 6. Nx — если хочешь понять большие проекты

urlNx — GitHubhttps://github.com/nrwl/nx

Здесь начинается понятие **monorepo**.

Например:

```text
my-company/
│
├── apps/
│   ├── web/
│   ├── admin/
│   └── api/
│
├── packages/
│   ├── ui/
│   ├── config/
│   ├── database/
│   └── types/
│
└── ...
```

Это уже используется, когда у компании несколько приложений.

Например:

```text
web
admin
mobile
api
design-system
```

и они используют общий код.

Для твоего текущего сайта **это пока избыточно**, но посмотреть полезно.

---

# 7. Turborepo — ещё один эталон monorepo

urlTurborepo — GitHubhttps://github.com/vercel/turborepo

Похожая идея:

```text
apps/
packages/
```

Например:

```text
apps/
├── web/
├── docs/
└── admin/

packages/
├── ui/
├── eslint-config/
├── tsconfig/
└── database/
```

Это полезно понимать на будущее.

---

# 8. shadcn/ui — очень хороший пример организации компонентов

urlshadcn/ui — GitHubhttps://github.com/shadcn-ui/ui

Для тебя особенно интересна структура:

```text
components/
└── ui/
    ├── button.tsx
    ├── card.tsx
    ├── dialog.tsx
    ├── dropdown-menu.tsx
    ├── input.tsx
    ├── select.tsx
    └── ...
```

И принцип:

```text
UI component
     ↓
не знает ничего о конкретной странице
     ↓
может использоваться где угодно
```

Это очень важный принцип.

---

# 9. React TypeScript Style Guide

urlReact + TypeScript Style Guidehttps://react-typescript-style-guide.com/

Это уже не конкретное приложение, а **гайд по организации React + TypeScript**.

Там отдельно рассматриваются:

- folder structure;
- component structure;
- functions;
- utilities;
- types;
- GraphQL;
- feature flags;
- documentation.

citeturn0search4

---

# 10. А теперь самое интересное: как я бы организовал ТВОЙ сайт

Не надо копировать Bulletproof React один-в-один.

Для твоего сайта-портфолио я бы сделал значительно проще.

```text
my-portfolio/
│
├── app/
│   │
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── contact/
│       └── page.tsx
│
├── components/
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   │
│   └── animations/
│       ├── FadeIn.tsx
│       ├── Reveal.tsx
│       ├── Magnetic.tsx
│       └── TextReveal.tsx
│
├── features/
│   │
│   └── projects/
│       ├── components/
│       ├── data/
│       ├── hooks/
│       ├── types.ts
│       └── utils.ts
│
├── lib/
│   ├── utils.ts
│   ├── animations.ts
│   └── constants.ts
│
├── hooks/
│   ├── useMediaQuery.ts
│   └── useScroll.ts
│
├── data/
│   ├── projects.ts
│   └── experience.ts
│
├── public/
│   ├── images/
│   ├── videos/
│   ├── models/
│   └── fonts/
│
├── styles/
│   └── ...
│
├── types/
│   └── ...
│
├── tests/
│
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── package.json
└── README.md
```

Вот это уже **очень хороший баланс** между простотой и профессиональной архитектурой.

---

# 11. Анимации я бы НЕ складывал в одну огромную папку

Вот это важный момент.

Плохой вариант:

```text
animations/
├── animation1.ts
├── animation2.ts
├── animation3.ts
├── animation4.ts
├── animation5.ts
├── animation6.ts
└── ...
```

Через несколько месяцев ты не будешь понимать, что где используется.

Лучше разделять:

```text
components/
│
├── animations/
│   ├── FadeIn.tsx
│   ├── Reveal.tsx
│   └── Magnetic.tsx
│
└── sections/
    ├── Hero/
    │   ├── Hero.tsx
    │   ├── HeroAnimation.tsx
    │   └── Hero.module.css
    │
    └── Projects/
        ├── Projects.tsx
        ├── ProjectCard.tsx
        └── ProjectsAnimation.tsx
```

То есть **анимация, относящаяся только к Hero, живёт рядом с Hero.**

Это называется **colocation** — связанные вещи находятся рядом. В Bulletproof React это прямо сформулировано как архитектурный принцип. citeturn0search6

---

# 12. А где тогда хранить GSAP?

Например:

```text
lib/
└── animations/
    ├── gsap.ts
    ├── easing.ts
    └── presets.ts
```

А конкретная анимация:

```text
components/
└── sections/
    └── Hero/
        ├── Hero.tsx
        └── HeroAnimation.tsx
```

Получается:

```text
lib/animations
       │
       │ общие инструменты
       ▼
HeroAnimation
       │
       ▼
Hero
```

---

# 13. А Three.js?

Если у тебя 3D:

```text
components/
└── three/
    │
    ├── Scene.tsx
    ├── Camera.tsx
    ├── Lights.tsx
    │
    ├── models/
    │   ├── Building.tsx
    │   ├── Crane.tsx
    │   └── Equipment.tsx
    │
    └── effects/
        ├── Particles.tsx
        └── PostProcessing.tsx
```

Или если 3D относится только к конкретному разделу:

```text
sections/
└── Hero/
    ├── Hero.tsx
    ├── HeroScene.tsx
    └── hero-3d/
        ├── Model.tsx
        └── Lights.tsx
```

---

# 14. Где API?

Если сайт пока простой:

```text
lib/
└── api/
    ├── projects.ts
    ├── contact.ts
    └── user.ts
```

Если Next.js App Router использует Route Handlers:

```text
app/
└── api/
    ├── contact/
    │   └── route.ts
    │
    └── projects/
        └── route.ts
```

Получается:

```text
Frontend
   │
   │ POST /api/contact
   ▼
Next.js Route Handler
   │
   ▼
Database / external API
```

---

# 15. А если появляется настоящий backend

Тогда я бы уже разделял:

```text
project/
│
├── frontend/
│   └── Next.js
│
├── backend/
│   └── FastAPI
│
├── database/
│
├── docker/
│
├── scripts/
│
└── README.md
```

Например:

```text
frontend/
├── app/
├── components/
├── features/
├── lib/
└── public/

backend/
├── app/
│   ├── api/
│   ├── core/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── main.py
│
├── tests/
└── alembic/

database/
└── ...
```

И здесь как раз **Full Stack FastAPI Template** очень полезен для изучения. В нём frontend и backend разделены, есть generated API client, тестирование, Docker и CI/CD. citeturn0search0turn0search2

---

# 16. Главное правило, которое тебе сейчас нужно запомнить

Не:

> «Куда положить этот файл?»

А:

> **«К какой ответственности относится этот код?»**

Например:

### `Button.tsx`

```text
components/ui/
```

Потому что это общий UI.

### `ProjectCard.tsx`

```text
features/projects/components/
```

Потому что это часть функциональности проектов.

### `useProjects.ts`

```text
features/projects/hooks/
```

Потому что hook относится к проектам.

### `formatDate.ts`

```text
lib/
```

если используется в разных местах.

### `HeroAnimation.tsx`

```text
components/sections/Hero/
```

потому что относится к Hero.

### `route.ts`

```text
app/api/contact/
```

потому что это endpoint.

---

# 17. И ещё одно: не делай архитектуру слишком сложной

Это одна из главных ловушек.

Не нужно начинать портфолио с:

```text
DDD
Clean Architecture
Hexagonal Architecture
CQRS
Event Bus
Repository Pattern
Dependency Injection
Microservices
```

для сайта из 5 страниц.

Это будет архитектура **ради архитектуры**.

Bulletproof React полезен не потому, что надо скопировать его целиком, а потому что он показывает принципы: строгие границы, feature-based организацию, colocation, единый стиль и контролируемые зависимости. citeturn0search6

---

# 18. Мой набор «основ основ», который я бы тебе рекомендовал изучать

### 🟥 Уровень 1 — структура

urlBulletproof Reacthttps://github.com/alan2207/bulletproof-react

**Изучить:**

```text
components
features
hooks
lib
routes
types
testing
```

---

### 🟧 Уровень 2 — Next.js

urlNext.jshttps://github.com/vercel/next.js

**Изучить:**

```text
app/
layout
page
route
loading
error
dynamic routes
server/client components
```

---

### 🟨 Уровень 3 — UI

urlshadcn/uihttps://github.com/shadcn-ui/ui

**Изучить:**

```text
components/ui
composition
variants
accessibility
Tailwind
```

---

### 🟩 Уровень 4 — полный frontend/backend

urlFull Stack FastAPI Templatehttps://github.com/fastapi/full-stack-fastapi-template

**Изучить:**

```text
frontend
backend
API
database
auth
Docker
tests
CI/CD
```

---

### 🟦 Уровень 5 — масштабирование

urlTurborepohttps://github.com/vercel/turborepo

и

urlNxhttps://github.com/nrwl/nx

**Изучить:**

```text
monorepo
apps
packages
shared code
build pipeline
```

---

# 19. И я бы сделал тебе ещё одну вещь

Поскольку ты сейчас **не столько хочешь стать frontend-разработчиком, сколько научиться нормально собирать свои сайты**, я бы не отправлял тебя читать документацию по каждому репозиторию.

Я могу собрать тебе следующий **«Frontend/Fullstack GitHub Atlas»**:

```text
                    WEB DEVELOPMENT
                          │
          ┌───────────────┴───────────────┐
          │                               │
       FRONTEND                         BACKEND
          │                               │
    ┌─────┼──────┐                  ┌─────┼─────┐
    │     │      │                  │     │     │
  React Next   CSS                 API   DB    Auth
    │     │      │                  │     │     │
    │     │   Tailwind            FastAPI PostgreSQL
    │     │
    ├─────┼───────────────────────────────────┐
    │     │                                   │
Components Animation                       Testing
    │     │                                   │
    │     ├── Motion                           │
    │     ├── GSAP                             │
    │     ├── Lenis                            │
    │     └── R3F                              │
    │                                          │
    └── Architecture ── CI/CD ── Docker ──────┘
```

И для **каждой ветки** дать тебе по **3–5 реально сильных GitHub-репозиториев**, причём с пометками:

- ⭐ **изучить обязательно**
- 🔥 **можно брать код**
- 👀 **посмотреть архитектуру**
- 🎨 **для дизайна**
- ⚙️ **для production**
- 🧠 **для обучения**
- 🚫 **не нужно тебе сейчас**

Плюс отдельно показать **одну идеальную структуру именно твоего Next.js-проекта** — от `app/` до `components/animations/`, `features/`, `lib/`, `public/`, API, БД, тестов и `.env`, чтобы ты мог использовать её как **шаблон для всех будущих сайтов**. Это будет полезнее, чем просто список GitHub-ссылок.

---

**User:**

не лумаю что это удет хорошей идеей ведбь ты не сможешь изучить все эти документации и ресурсы и затем подобрать и собрать воедино всю информацию, детальную и подробную
чтчобы потом мои проеты сайты стали качественнее

---

**Assistant:**

Да, твоя претензия справедлива. Если задача — **сделать действительно качественную основу для будущих проектов**, простой список репозиториев будет недостаточен.

Но есть важное различие: мне не нужно пытаться «прочитать весь GitHub». Правильнее сделать **исследование архитектурных практик**, где источники имеют разный вес, а затем свести их в одну систему.

Я бы построил это так.

### Что именно нужно исследовать

**1. Архитектура приложения**

- Next.js App Router
- React architecture
- Server / Client Components
- feature-based architecture
- component architecture
- colocated code
- dependency boundaries
- naming conventions
- imports
- reusable vs local components

Основные источники: официальные материалы Next.js и React + Bulletproof React как практический reference.

**2. Структура файлов**

Нужно не просто сказать:

```text
components/
hooks/
lib/
```

а определить:

> **что именно должно попадать в каждую директорию, а что туда класть нельзя.**

Например, отдельно разобрать:

```text
app/
components/
features/
lib/
hooks/
services/
types/
utils/
config/
public/
styles/
tests/
```

и определить границы ответственности.

---

**3. UI architecture**

Здесь уже исследовать:

- shadcn/ui
- Radix
- React Aria
- Mantine
- MUI
- HeroUI
- другие сильные системы

И ответить на вопрос:

> Когда использовать готовый компонент, когда primitive, когда собственный компонент?

Это очень важнее, чем просто собрать 20 библиотек.

---

**4. Animation architecture**

Отдельно:

```text
CSS
↓
CSS transitions
↓
Motion
↓
GSAP
↓
ScrollTrigger
↓
Lenis
↓
Three.js
↓
React Three Fiber
```

И главное — **не просто как их подключать, а где хранить код анимации**.

Например:

```text
Hero/
├── Hero.tsx
├── HeroContent.tsx
├── HeroVisual.tsx
└── HeroAnimation.ts
```

против:

```text
animations/
├── hero.ts
├── cards.ts
├── navbar.ts
└── random-animation.ts
```

И определить, какой вариант лучше в каких случаях.

---

**5. Data / backend architecture**

Разобрать:

```text
Server Actions
Route Handlers
REST API
tRPC
ORM
PostgreSQL
authentication
validation
```

и главное:

```text
UI
 ↓
server action / API
 ↓
service
 ↓
database
```

а не:

```text
Button
 ↓
SQL
```

---

**6. TypeScript**

Это отдельный фундамент:

```text
types
interfaces
generics
schemas
API types
Zod
type inference
```

и как не получить проект, где TypeScript формально есть, но архитектура всё равно слабая.

---

**7. CSS / styling**

Сравнить:

```text
Tailwind
CSS Modules
global CSS
CSS variables
design tokens
```

и определить, например:

```text
globals.css
↓
design tokens

Tailwind
↓
layout / utility styling

component
↓
локальные состояния

CSS Module
↓
когда действительно нужен сложный CSS
```

---

**8. Production engineering**

Вот этого в большинстве «гайдов для новичков» как раз не хватает:

- ESLint
- Prettier
- TypeScript strict
- Husky / lint-staged
- testing
- Playwright
- Vitest
- error handling
- logging
- environment variables
- security
- accessibility
- performance
- SEO
- image optimization
- caching
- CI/CD
- Docker
- deployment

---

# И самое главное — не копировать архитектуру одного проекта

Например:

**Bulletproof React** хорош для понимания архитектуры React.

Но это не значит:

> «Вот идеальная структура любого сайта».

**Next.js examples** показывают паттерны Next.js.

**shadcn** показывает организацию UI.

**Turborepo** показывает monorepo.

**Full Stack FastAPI** показывает full-stack.

У каждого свой scope.

Поэтому нужно сделать **синтез**, а не копирование.

---

# Я бы в итоге вывел не «Atlas», а конкретный стандарт

Например, для твоих будущих сайтов:

```text
project/
│
├── app/                    # маршруты Next.js
│
├── components/
│   ├── ui/                 # универсальные UI primitives
│   ├── layout/             # Header, Footer...
│   └── sections/           # Hero, About, Projects...
│
├── features/               # бизнес-функциональность
│   └── projects/
│
├── lib/
│   ├── api/
│   ├── animations/
│   ├── db/
│   └── utils/
│
├── hooks/
│
├── services/
│
├── types/
│
├── config/
│
├── data/
│
├── public/
│   ├── images/
│   ├── fonts/
│   ├── models/
│   └── videos/
│
├── tests/
│
└── ...
```

Но напротив **каждой директории** будет правило:

> **назначение → что разрешено → что запрещено → пример → когда создавать → когда НЕ создавать.**

Вот тогда это действительно становится рабочей архитектурной системой.

---

## И ещё один принципиальный момент

Я бы **не ограничивался GitHub**.

Для такого исследования приоритет должен быть примерно:

**официальная документация → официальные engineering guides → реальные production repositories → сильные community guides → GitHub discussions/Reddit → статьи.**

Например, для Next.js сначала официальная документация, а уже потом сторонние статьи.

Для React — React docs.

Для TypeScript — TypeScript handbook.

Для accessibility — WAI-ARIA / WCAG.

Для GitHub workflows — GitHub docs.

Для deployment — Vercel/Cloudflare/AWS и т.д.

А GitHub нужен прежде всего, чтобы увидеть:

> **как эти принципы реально реализованы в коде.**

---

# Поэтому да — задача намного серьёзнее

И я бы сформулировал конечную цель не как:

> «найти лучшие GitHub repositories».

А как:

> **создать для тебя практический стандарт разработки современных сайтов на Next.js/React, основанный на официальных рекомендациях и проверенных production-паттернах.**

Причём он должен отвечать на конкретные вопросы:

```text
Куда положить этот компонент?
Куда положить animation?
Где должен жить API?
Когда создавать feature?
Когда создавать hook?
Когда делать компонент reusable?
Когда НЕ делать reusable?
Server или Client Component?
Где хранить тип?
Где хранить данные?
Как организовать Three.js?
Как организовать GSAP?
Как подключать UI-библиотеки?
Как не превратить проект в помойку?
Как сделать проект масштабируемым?
Как подготовить его к production?
```

И **только после этого** имеет смысл выбрать стек:

```text
Next.js
React
TypeScript
Tailwind
shadcn
Motion
GSAP
Lenis
R3F
Zod
...
```

а не наоборот.

Если делать это, я бы действительно провёл **веб-исследование по первоисточникам и реальным репозиториям**, а затем собрал из результатов не энциклопедию, а **единый архитектурный blueprint**, который можно использовать как шаблон при создании каждого нового сайта.

---

**User:**

окей давай сделаем это

---

**Assistant:**

Да. Тогда делаем это как **исследовательский проект**, а не как подборку ссылок.

Я уже начал с первоисточников. И есть важный результат: первоначальная идея «сделать одну идеальную структуру» требует корректировки. У самого Next.js в официальном учебном проекте структура проще — `app`, `app/lib`, `app/ui`, `public`, конфигурация; при этом Next.js прямо допускает разные варианты организации проекта. citeturn0search14turn0search15

А Bulletproof React, наоборот, предлагает более строгую **feature-based architecture**: `app`, `components`, `config`, `features`, `hooks`, `lib`, `testing`, `types`, `utils`, причём каждая feature может быть самодостаточной. Причём репозиторий сейчас содержит отдельные реализации для Vite и Next.js App Router. citeturn0search4

То есть наша задача — **не выбрать одного победителя**, а понять, когда применять какой уровень архитектуры.

---

# Предлагаю сделать это в 6 этапов

## Этап 1. Архитектурный фундамент

Исследуем:

- Next.js App Router
- React architecture
- Server Components
- Client Components
- routing
- layouts
- loading/error boundaries
- colocating files
- feature-based architecture
- component-based architecture
- dependency boundaries

Результат:

### `01_ARCHITECTURE.md`

В нём будет:

```text
Как устроен Next.js проект
│
├── app
├── components
├── features
├── lib
├── hooks
├── services
├── types
├── config
├── public
└── tests
```

Но **каждая папка будет разобрана по правилам**:

| Папка | Назначение | Можно | Нельзя |
|---|---|---|---|
| `app/` | routing/application composition | pages, layouts, route handlers | случайные reusable components |
| `components/ui/` | generic UI | Button, Dialog | бизнес-логику |
| `features/` | domain functionality | projects, auth | unrelated utilities |
| `lib/` | infrastructure/helpers | API clients, config | page-specific UI |
| `hooks/` | shared hooks | useMediaQuery | arbitrary functions |

И отдельно рассмотрим, **когда вообще не нужно создавать `features/`, `services/`, `config/` и т.д.**

Это принципиально.

---

# Этап 2. Component Architecture

Здесь будем разбирать компоненты на уровни.

Я предлагаю такую модель:

```text
                    COMPONENTS
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       PRIMITIVES      UI            DOMAIN
          │              │              │
       Button          Card        ProjectCard
       Input           Dialog      ProjectFilter
       Badge            Tabs       ProjectTimeline
          │              │              │
          └──────────────┼──────────────┘
                         │
                       PAGE
```

И ответим на самый неприятный вопрос:

> **Когда компонент достаточно сложный, чтобы вынести его в отдельный файл?**

Например:

```tsx
<ProjectCard />
```

или:

```tsx
<div>
   ...
</div>
```

Когда использовать:

```text
components/ui
```

когда:

```text
components/sections
```

а когда:

```text
features/projects/components
```

---

# Этап 3. Styling + Design System

Здесь исследуем:

- Tailwind
- CSS Modules
- global CSS
- CSS variables
- design tokens
- typography
- spacing
- colors
- responsive design
- dark mode
- accessibility

И построим:

```text
Design System
│
├── Colors
├── Typography
├── Spacing
├── Radius
├── Shadows
├── Breakpoints
├── Motion
└── Components
```

Это позволит не делать:

```text
bg-[#121212]
```

в 200 местах проекта.

А использовать систему:

```text
background
foreground
muted
primary
border
card
accent
```

и менять дизайн централизованно.

---

# Этап 4. Animation Architecture

Вот это для тебя будет особенно полезно.

Мы исследуем отдельно:

### CSS

Для:

```text
hover
transition
simple transform
fade
```

### Motion

Для:

```text
component animation
layout animation
presence
gestures
```

### GSAP

Для:

```text
timeline
complex sequences
scroll-driven animation
ScrollTrigger
```

### Lenis

Для:

```text
smooth scrolling
```

### Three.js / R3F

Для:

```text
3D
WebGL
interactive scenes
```

И выработаем правило:

> **не использовать GSAP там, где достаточно CSS.**

Это одна из вещей, которые реально делают проекты качественнее.

---

# Этап 5. Data / Backend / Infrastructure

Здесь уже:

```text
Frontend
    │
    ├── Server Component
    │
    ├── Client Component
    │
    └── Server Action / Route Handler
                │
                ▼
             Service
                │
                ▼
             Database
```

Будем отдельно разбирать:

- REST;
- Route Handlers;
- Server Actions;
- API clients;
- validation;
- Zod;
- ORM;
- PostgreSQL;
- authentication;
- authorization;
- caching;
- error handling;
- environment variables.

И главное — **где заканчивается UI и начинается application logic**.

---

# Этап 6. Production

Здесь уже:

```text
Code
 ↓
Lint
 ↓
Typecheck
 ↓
Unit tests
 ↓
E2E tests
 ↓
Build
 ↓
CI
 ↓
Deploy
```

Разберём:

- ESLint
- Prettier / Biome
- TypeScript strict
- Vitest
- Playwright
- GitHub Actions
- Docker
- environment management
- logging
- monitoring
- security
- performance
- SEO
- accessibility

---

# Но я хочу добавить ещё один слой

## «Как не надо делать»

Это будет очень полезно.

Например:

### ❌ Плохая структура

```text
components/
├── Header.tsx
├── HeaderAnimation.tsx
├── HeaderUtils.ts
├── HeaderData.ts
├── HeaderTypes.ts
├── HeaderHook.ts
├── Project.tsx
├── Project2.tsx
├── ProjectCardFinal.tsx
├── ProjectCardFinal2.tsx
└── ...
```

### Почему плохо

Потому что структура отражает **тип файлов**, а не архитектуру приложения.

---

### ❌ Другой вариант

```text
utils/
    everything.ts
```

или:

```text
hooks/
    useEverything.ts
```

Это просто «мусорные контейнеры».

---

### ❌ И ещё

```text
animations/
    hero.ts
    projects.ts
    navbar.ts
```

если каждая анимация используется только внутри соответствующего компонента.

Лучше:

```text
Hero/
├── Hero.tsx
└── HeroAnimation.ts
```

---

# Очень важный источник, который я сейчас обнаружил

У актуального shadcn/ui есть интересная архитектурная идея, которая нам пригодится.

Они прямо подчёркивают:

> это не обычная component library.

Компоненты **копируются в проект**, после чего разработчик владеет их исходным кодом и может его изменять. citeturn0search0turn0search6

И сейчас shadcn уже поддерживает выбор между **Radix и Base UI**, сохраняя единый API поверх разных primitives. citeturn0search2

Это хороший пример принципа:

```text
            DESIGN SYSTEM
                  │
          ┌───────┴───────┐
          │               │
       behavior         styling
          │               │
       primitive       component
```

Именно такие архитектурные идеи мы будем вытаскивать из источников, а не просто копировать папки.

---

# Более того, shadcn сейчас фактически превращается в интересный источник архитектурных паттернов

У них уже есть:

```text
components
blocks
registries
design tokens
themes
headless components
project conventions
testing setup
CI workflows
```

А registry может распространять не только React-компоненты, но и:

```text
components
hooks
utilities
design tokens
templates
testing config
CI
project conventions
AGENTS.md
```

Причём официальная документация отдельно рекомендует проверять сторонний код перед установкой и позволяет делать `--dry-run`, `--diff` и использовать pinned commits. citeturn0search7turn0search10

Это уже непосредственно связано с твоим подходом к AI-assisted development.

---

# Поэтому конечный результат предлагаю сделать таким

Не огромная теория на 300 страниц.

А **практический стандарт проекта**:

```text
WEB DEVELOPMENT STANDARD
│
├── 00 — Principles
│
├── 01 — Project Architecture
│
├── 02 — Folder Structure
│
├── 03 — React Components
│
├── 04 — Next.js
│
├── 05 — TypeScript
│
├── 06 — Styling
│
├── 07 — Design System
│
├── 08 — Animation
│
├── 09 — 3D / WebGL
│
├── 10 — Data & API
│
├── 11 — Backend
│
├── 12 — Database
│
├── 13 — Authentication
│
├── 14 — Testing
│
├── 15 — Performance
│
├── 16 — Accessibility
│
├── 17 — SEO
│
├── 18 — Security
│
├── 19 — Git
│
├── 20 — CI/CD
│
└── 21 — Production Checklist
```

И самое главное — в конце:

```text
STARTER TEMPLATE
```

который можно использовать для нового проекта.

---

# Как будем принимать архитектурные решения

Для каждого спорного вопроса будем использовать примерно такую шкалу:

### 🟢 Official

Рекомендовано самим React / Next.js / TypeScript / W3C и т.д.

### 🔵 Production-proven

Используется в сильных production-проектах.

### 🟡 Opinionated

Хороший подход, но это не универсальное правило.

### 🟠 Trade-off

Есть несколько равноправных решений.

### 🔴 Avoid

Паттерн, который обычно создаёт технический долг.

Это намного полезнее, чем писать:

> «правильная структура — вот такая».

Потому что **универсально правильной структуры не существует**.

---

# И ещё один принцип

Не будем делать архитектуру «на вырост».

Например:

### Сайт-портфолио

```text
app/
components/
lib/
public/
```

может быть абсолютно достаточным.

### SaaS

```text
app/
components/
features/
lib/
services/
types/
```

уже оправдан.

### Большая платформа

```text
apps/
packages/
services/
infrastructure/
```

может потребовать monorepo.

То есть мы получим **3 уровня сложности**:

```text
LEVEL 1
Personal / Landing / Portfolio

LEVEL 2
SaaS / Dashboard / Application

LEVEL 3
Large product / Monorepo / Full-stack
```

И это, на мой взгляд, будет намного полезнее твоей первоначальной идеи.

---

## Первый вывод уже сейчас

После первичного сравнения источников я бы **не стал брать Bulletproof React как готовый шаблон**.

Я бы взял:

**Next.js** → фундамент и conventions. citeturn0search14turn0search15

**Bulletproof React** → feature architecture и масштабирование. citeturn0search4

**shadcn/ui** → component composition, open-code design system и современные UI primitives. citeturn0search0turn0search2

А затем уже добавил бы отдельные стандарты для animation, data, testing, accessibility, performance и deployment.

**Это и будет наша база.**

Следующим шагом я бы начал именно с **«01 — Project Architecture + Folder Structure»** и уже не поверхностно: сравнил бы несколько реальных архитектур, официальные рекомендации Next.js/React и production-подходы, после чего вывел конкретную структуру для твоих сайтов с объяснением **каждой папки, файла и границы ответственности**.

---

**User:**

гитхаб pages я размещаю там свой сайт поэтому хотел бы найди самую поплуярную нужную и полезную документацию для работы с ним b cdjbv ghjtrnjv

---

**Assistant:**

Да. Если ты размещаешь сайт именно на **GitHub Pages**, то я бы не смешивал это с общей документацией по frontend. Здесь есть отдельный набор вещей, которые тебе реально нужны: **GitHub Pages → Git → GitHub Actions → Next.js/static export → домен → deployment**.

Есть важный нюанс: если сайт на **Next.js**, GitHub Pages требует учитывать, что Pages — это статический хостинг. Поэтому Next.js-проект должен быть настроен на статический export, если ты хочешь размещать его непосредственно на Pages.

Я бы собрал тебе такой набор.

## 1. 🥇 GitHub Pages — главная документация

urlGitHub Pages Documentationhttps://docs.github.com/en/pages

Это твоя основная документация.

Из неё тебе нужны прежде всего разделы:

```text
GitHub Pages
├── What is GitHub Pages?
├── Creating a GitHub Pages site
├── Configuring a publishing source
├── Custom domains
├── HTTPS
└── GitHub Actions
```

GitHub Pages может публиковать сайт из определённой ветки/директории либо через GitHub Actions.

---

# 2. GitHub Pages + GitHub Actions

Это тебе **обязательно нужно изучить**.

urlGitHub Actions Documentationhttps://docs.github.com/en/actions

И отдельно:

urlDeploying to GitHub Pages using a GitHub Actions workflowhttps://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

Смысл примерно такой:

```text
ты
 ↓
git push
 ↓
GitHub repository
 ↓
GitHub Actions
 ↓
npm install
 ↓
npm run build
 ↓
deploy
 ↓
GitHub Pages
```

То есть тебе больше не нужно вручную загружать собранный сайт.

---

# 3. Next.js + GitHub Pages

Вот это для тебя **самое важное**.

urlNext.js Static Exportshttps://nextjs.org/docs/app/building-your-application/deploying/static-exports

Next.js умеет генерировать полностью статический сайт:

```text
Next.js
   ↓
next build
   ↓
HTML / CSS / JS
   ↓
GitHub Pages
```

В `next.config` используется:

```js
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

После сборки Next.js создаёт:

```text
out/
├── index.html
├── _next/
├── images/
└── ...
```

И именно содержимое `out/` можно публиковать как статический сайт.

---

# 4. Очень важный момент — `basePath`

Если твой репозиторий называется:

```text
my-portfolio
```

и сайт открывается как:

```text
username.github.io/my-portfolio/
```

то Next.js должен знать, что приложение находится **не в корне домена**.

Например:

```js
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
};
```

Это одна из самых частых причин, почему после деплоя:

> HTML открылся, а CSS/JS/images не работают.

Потому что браузер ищет:

```text
/_next/...
```

вместо:

```text
/my-portfolio/_next/...
```

---

# 5. Если у тебя `username.github.io`

Это ещё проще.

Если repository:

```text
username.github.io
```

то сайт:

```text
https://username.github.io
```

И `basePath` обычно не нужен.

Получается:

```text
GitHub
│
└── username.github.io
       │
       └── Next.js
              ↓
          static export
              ↓
        GitHub Pages
```

---

# 6. GitHub Actions workflow

Для Next.js тебе понадобится примерно такая архитектура:

```text
.github/
└── workflows/
    └── deploy.yml
```

И workflow делает:

```text
checkout
   ↓
setup Node
   ↓
npm ci
   ↓
npm run build
   ↓
upload artifact
   ↓
deploy to GitHub Pages
```

То есть `.github/workflows/` — это не случайная папка.

Это **CI/CD конфигурация проекта**.

---

# 7. Git — тебе нужен не весь Git

Не нужно сейчас пытаться изучить Git целиком.

Для работы с сайтами тебе в первую очередь:

```text
git clone
git status
git add
git commit
git push
git pull
git branch
git switch
git merge
git log
```

Официальная документация:

urlGit Documentationhttps://git-scm.com/doc

А GitHub-версия для новичков:

urlGitHub Git Guideshttps://github.com/git-guides

---

# 8. GitHub Repository

Очень полезно понять структуру самого repository.

```text
repository
│
├── .github/
│   └── workflows/
│
├── app/
├── components/
├── public/
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── README.md
└── .gitignore
```

GitHub при этом хранит:

```text
код
↓
историю изменений
↓
issues
↓
pull requests
↓
actions
↓
releases
```

Это уже твоя **система управления проектом**, а не просто «место, куда я загрузил сайт».

---

# 9. GitHub README

urlAbout READMEshttps://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes

Я бы для каждого серьёзного проекта делал:

```text
README.md

# Project Name

## Overview

## Features

## Tech Stack

## Installation

## Development

## Build

## Deployment

## Environment Variables

## Project Structure

## Screenshots

## License
```

Это особенно полезно, если ты потом показываешь GitHub работодателю/заказчику.

---

# 10. Custom Domain

Если ты захочешь:

```text
myname.ru
```

вместо:

```text
username.github.io
```

тебе понадобится:

urlManaging a custom domain for your GitHub Pages sitehttps://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Схема:

```text
your-domain.ru
       ↓
DNS
       ↓
GitHub Pages
       ↓
your repository
```

И GitHub Pages поддерживает HTTPS.

---

# 11. GitHub Pages + статические изображения

Для твоих сайтов это тоже важно.

Например:

```text
public/
├── images/
│   ├── projects/
│   ├── avatar/
│   └── backgrounds/
│
├── models/
├── videos/
└── fonts/
```

В Next.js:

```tsx
<Image
  src="/images/projects/project-1.webp"
  alt="Project"
/>
```

Но при GitHub Pages + `basePath` нужно учитывать путь к asset'ам.

Это особенно важно для:

- images;
- fonts;
- videos;
- GLB/GLTF;
- textures;
- JSON;
- SVG.

---

# 12. Если ты используешь Three.js / React Three Fiber

Здесь GitHub Pages тоже отлично подходит для **статической демонстрации**.

Например:

```text
public/
└── models/
    ├── building.glb
    └── crane.glb
```

и:

```text
public/
└── textures/
    ├── metal.webp
    └── concrete.webp
```

Но нужно правильно учитывать `basePath`, особенно если репозиторий не называется `username.github.io`.

---

# 13. Что GitHub Pages НЕ умеет

Вот это нужно запомнить.

GitHub Pages — это прежде всего:

> **static hosting**

Поэтому ты не можешь рассчитывать на обычный постоянно работающий backend:

```text
Next.js server
Express
FastAPI
Node server
Python server
```

который будет постоянно работать на GitHub Pages.

Например:

```text
❌ Next.js SSR
❌ Next.js API server
❌ Express backend
❌ FastAPI backend
❌ PostgreSQL server
```

Но:

```text
✅ React
✅ Next.js static export
✅ HTML
✅ CSS
✅ JS
✅ images
✅ WebGL
✅ Three.js
✅ React Three Fiber
✅ client-side API requests
```

работают.

---

# 14. Для твоего случая я бы использовал такой стек

```text
                     GitHub
                        │
                 Git repository
                        │
                        ▼
                  GitHub Actions
                        │
                        ▼
                     Next.js
                        │
                 static export
                        │
                        ▼
                  GitHub Pages
                        │
             ┌──────────┴──────────┐
             │                     │
          Browser              External API
```

Frontend:

```text
Next.js
React
TypeScript
Tailwind
shadcn/ui
Motion
GSAP
React Three Fiber
```

Hosting:

```text
GitHub
GitHub Actions
GitHub Pages
```

---

# 15. А вот эту документацию я бы сохранил в закладки

### Обязательные

urlGitHub Pageshttps://docs.github.com/en/pages

urlGitHub Actionshttps://docs.github.com/en/actions

urlNext.js Static Exportshttps://nextjs.org/docs/app/building-your-application/deploying/static-exports

urlGit Documentationhttps://git-scm.com/doc

urlGitHub Docshttps://docs.github.com/

### Когда понадобится

urlGitHub Pages Custom Domainshttps://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

urlGitHub Actions Workflowshttps://docs.github.com/en/actions/using-workflows

urlNext.js Configurationhttps://nextjs.org/docs/app/api-reference/config/next-config-js

---

## Но есть ещё более полезная вещь

У тебя сейчас получается связка:

**GitHub → Next.js → React → компоненты → анимации → GitHub Pages.**

И здесь я бы сделал тебе **не просто список документации, а карту рабочего процесса**:

```text
Я создал новый сайт
        ↓
Создал GitHub repository
        ↓
Создал Next.js проект
        ↓
Настроил структуру
        ↓
Подключил UI
        ↓
Подключил animations
        ↓
Добавил assets
        ↓
git commit
        ↓
git push
        ↓
GitHub Actions
        ↓
build
        ↓
GitHub Pages
        ↓
готовый сайт
```

И отдельно разобрал бы **что происходит на каждом этапе и какие файлы за это отвечают**. Это даст тебе понимание системы, а не набор команд для копирования.

---

**User:**

вот мой сатй ты можешь прочесть отсюда всё

[https://artyomnikolae7-sys.github.io/ARTEMIIPTO/](https://artyomnikolae7-sys.github.io/ARTEMIIPTO/)

там много бреда я не знаю но очень стремно такое работтодателям показывать пожэтому нужно улучшить ео сточки подачи дизанйа и надписей, да и в целм хочу разнообразить сайт как информацией так и представлением разных блоков

---

**Assistant:**

Да. И здесь я бы **не начинал с переписывания сайта вслепую**.

Я попробовал открыть именно твою GitHub Pages-страницу и найти связанный репозиторий, но веб-доступ к странице сейчас не отдаёт мне её содержимое, а поиск по названию не нашёл твой репозиторий. Поэтому я не буду делать вид, что уже провёл визуальный аудит сайта.

Но задачу я понял правильно: тебе нужен не просто «красивый сайт», а **сайт инженера ПТО, который не стыдно отправить работодателю** и который одновременно показывает твои реальные навыки.

### Я бы переделывал его по четырём направлениям

**1. Позиционирование**

С первых 5 секунд должно быть понятно:

> **Артемий — инженер ПТО / специалист по исполнительной документации**

а не:

> «Вот мой сайт, посмотрите, что я умею делать во frontend».

Технологии должны быть вторичными.

---

**2. Контент**

Я бы существенно усилил содержание:

```text
Hero
 ↓
Кто я + специализация
 ↓
Что я делаю
 ↓
Мои компетенции
 ↓
Реальные рабочие процессы
 ↓
Кейсы
 ↓
Исполнительная документация
 ↓
Работа с РД / ПД
 ↓
Exon / Excel / Power Query / автоматизация
 ↓
Примеры документов
 ↓
Процесс работы
 ↓
Инструменты
 ↓
Опыт
 ↓
Контакты
```

То есть не просто:

> «Навыки: Excel, AutoCAD, Exon...»

а показывать **что именно ты делаешь с этими инструментами**.

Например:

### Исполнительная документация

**Результат:** подготовка и сдача комплекта ИД.

```text
Рабочая документация
        ↓
Извлечение спецификаций
        ↓
Сводная ведомость
        ↓
Сопоставление РД / ПД
        ↓
Поиск расхождений
        ↓
Формирование комплекта
        ↓
Проверка
        ↓
Сдача в Exon
```

Это уже выглядит как **профессиональная деятельность**, а не перечень навыков.

---

# 3. Дизайн

Я бы не делал типичный:

> «сайт инженера с серым фоном, аватаркой и 15 карточками».

У тебя есть очень сильная возможность сделать **engineering / technical portfolio**.

Например визуальный язык:

```text
ENGINEERING
DOCUMENTATION
DATA
AUTOMATION
```

с сочетанием:

- строгой сетки;
- технической типографики;
- чертежных мотивов;
- координат;
- номеров документов;
- таблиц;
- схем;
- акцентной графики;
- минимальной, но качественной анимации.

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["modern engineering portfolio website design","architect portfolio website brutalist grid","technical dashboard web design dark","engineering documentation interface design"]}

При этом **не надо превращать сайт в AutoCAD**. Он должен выглядеть современно, а не как корпоративный портал 2012 года.

---

# 4. Представление твоей работы

Вот здесь я вижу самый большой потенциал.

Например, вместо обычной карточки:

> **Excel**  
> Работа с таблицами

сделать интерактивный блок:

### DATA → DOCUMENTATION

```text
РД
│
├── Спецификация
│
├── Объёмы
│
└── Позиции
       ↓
   обработка
       ↓
┌─────────────────────┐
│ Сводная таблица      │
│ 1 284 позиции        │
│ 37 разделов          │
│ 12 проверок          │
└─────────────────────┘
       ↓
   ИД / Exon
```

И рядом кнопка:

**[Посмотреть процесс]**

Открывается интерактивный case study.

---

# Что мне нужно от тебя для нормального аудита

Самый полезный вариант — **дать мне исходники репозитория**, а не только URL опубликованного сайта.

Тогда я смогу разобрать:

```text
структуру проекта
↓
компоненты
↓
страницы
↓
стили
↓
анимации
↓
данные
↓
assets
↓
дублирование
↓
плохие UX-решения
↓
контент
↓
архитектуру
```

и уже конкретно сказать:

> **этот файл оставить → этот удалить → этот компонент переработать → этот блок объединить → здесь добавить case study → здесь изменить текст → здесь нужна анимация → здесь анимация мешает.**

Если репозиторий **public**, просто пришли **ссылку именно на GitHub repository**, например:

`github.com/artyomnikolae7-sys/ARTEMIIPTO`

Если он private — можешь загрузить сюда ZIP проекта.

Тогда я смогу сделать **полный аудит текущего сайта**, а не давать абстрактные рекомендации.

---

**User:**

ну вот я скопировал с сайта

тескт 



Артемий Николаев
Инженер ПТО / Сдача ИД

Сдача ИД • Автоматизация ПТО
Сдаю исполнительную
документацию без замечаний
Николаев Артемий — Инженер ПТО со стажем более 3 лет. Специализируюсь на закрытии разделов связи (СС, НСС) и автоматизации рутины. Сдал 17 крупных объектов в Москве с помощью скриптов и AutoCAD.

Карта объектов (17)
Согласования Exon
Мой опыт & Стек
17+
Сданных объектов

Жилые комплексы в МСК

100%
Закрытие ИД

Слаботочные сети связи

Exon
Свободное владение

Согласование без задержек

AutoCAD
Схемы и скрипты

Интерактивный ВОР →
Компании и Подрядчики на моих проектах
ООО "МОНАРХ"
АО "МСУ-1"
ГК "ЕКС"
ООО "ГСТ"
ООО "МОСРЕНСТРОЙ-6"
Мосинжпроект
Москапстрой
ПАО "Ростелеком"
ПАО "МТС"
Департамент строительства Москвы
ООО "МОНАРХ"
АО "МСУ-1"
ГК "ЕКС"
ООО "ГСТ"
ООО "МОСРЕНСТРОЙ-6"
Мосинжпроект
Москапстрой
ПАО "Ростелеком"
ПАО "МТС"
Департамент строительства Москвы
Обо мне
Кто стоит за проектами
Николаев Артемий
Инженер ПТО / Руководитель группы ИД

Более 3 лет работаю в строительных организациях Москвы. Специализируюсь на закрытии исполнительной документации по слаботочным сетям связи (СС, НСС). Разрабатываю инструменты автоматизации: VBA-генераторы, JS-скрипты для Exon, параметрические расчёты в Excel с привязкой к AutoCAD.

Москва, Россия
С 2020 года в отрасли
Бакалавр ПГС (МГТУ-МАСИ)
17+
Сданных объектов

150+
Комплектов ИД

500+
АОСР автоматизировано

3+
Лет опыта

Процесс
Как я работаю
От получения проекта до сдачи полного комплекта ИД в архив — 6 шагов

01
Входной контроль
Проверка проектной документации, спецификаций, согласований

02
Исполнительные схемы
Черчение в AutoCAD по данным геодезии и фактического монтажа

03
Формирование АОСР
Генерация актов освидетельствования через VBA-шаблоны

04
Загрузка в Exon
Автозагрузка документов и объёмов JS-скриптом

05
Согласование
Подпись технадзором и заказчиком в системе Exon (ЭЦП)

06
Сдача в архив
Комплектование, нумерация, формирование реестра, сдача

Оптимизация и Автоматизация
Рабочие кейсы & Инновации
Практические примеры решения критических проблем сдачи ИД с использованием Excel, VBA и скриптов автоматизации.

Кейс 01
Расчётная таблица для землекопов
Кейс 02
Генератор ИД по ОЗДС (ускорение до 6–8 часов)
Кейс 03
Сводная по объёмам внутренних сетей (факт/проект)
Кейс 04
Прототип табеля рабочего времени + аналитика в Power BI
Кейс 05
Таблица расчётов НСС (телефонная канализация) + связка с AutoCAD
Кейс 06
Автоматизация загрузки объёмов ИД в Exon
Кейс 01
Расчётная таблица для землекопов
Проблема / Вызов
Постоянные сложности с учётом работ и времени: данные разрознены, ручной контроль, ошибки и потеря прозрачности по объектам.

Примененный Стек
Excel (расчёты/структура)
Power Query (подтяжка данных из источников)
формулы/сводная логика.
Проделанная работа
Собрал единую структуру учёта по 17 объектам.
Подвязал данные из других источников через Power Query, настроил автообновление.
Сделал ежедневный учёт: кто/когда/сколько работал, с возможностью быстро сводить по объектам.
Результат в цифрах / Эффект
Убрал ручной "хаос" и сделал прозрачную систему контроля выработки по каждому объекту. Единая таблица снижает ошибки и экономит время руководителя/ПТО на сверках.

Интерактивный пример
Ведомость выработки — 17 объектов
ФИО	Объект	Смены	Тариф ₽	Итого ₽
Иванов П.С.	Гарибальди 22	22	3 500	77 000
Петров А.В.	Тайнинская 16/2	18	3 200	57 600
Сидоров К.М.	2-я Фрезерная 6	25	3 800	95 000
Козлов Д.А.	Газопровод 7	20	3 500	70 000
Морозов И.Л.	Большая Очаковская	15	3 200	48 000
Итого по выборке:	347 600 ₽
Системы
Слаботочные системы связи
Полный перечень систем, по которым я закрываю исполнительную документацию

ВТ
ВТСС
Внутренние телефонные сети связи

СВ
СВН
Система видеонаблюдения

СК
СКД
Система контроля доступа

ОС
ОСО
Охранно-пожарная сигнализация

СК
СКТВ
Система кабельного телевидения

ШП
ШПД
Широкополосный доступ

АК
АК
Автоматика и контроль

ОЗ
ОЗДС
Ограждающие и защитные конструкции

ВТСС
ВТСС
Внутренние телефонные сети связи

Структурированные кабельные системы внутри здания

Закрытие ИД
100%
17
Объектов
500+
АОСР
2%
Замечания
Исполнительная ведомость работ
Интерактивная ведомость ВОР
Интерактивная ведомость со всеми объемами работ по проекту из листа **ВОР**. Вы можете редактировать ячейки на лету (двойной клик), фильтровать, а также загружать/выгружать файлы в формате Excel.

"Лифт-Комплекс ДС"
1
шт.
ОРИГИНАЛ НЕ СОБРАН
01.02
НК-750.28-02-АВТ Автоматизация вертикального транспорта
Приборы и средства диспетчеризации лифтового комплекса

- Моноблок 23.8" - Intel Intel Core i5-12400, 6x2.5 ГГц, IPS, Full HD (1920x1080), 16 ГБ DDR4, SSD 500 ГБ;
  DEXP AIO-MC B037
  "DEXP"
  1
  шт.
  ОРИГИНАЛ НЕ СОБРАН
  01.03
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
- Колонки 2.0 DEXP R800 совокупной мощностью 5 Вт.;
  DEXP R800
  "DEXP"
  1
  шт.
  ОРИГИНАЛ НЕ СОБРАН
  01.04
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
- Микрофон DEXP U510 черный, проводной, настольный;
  DEXP U510 черный
  "DEXP"
  1
  шт.
  ОРИГИНАЛ НЕ СОБРАН
  01.05
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
- ИБП DEXP CEE-E 650VA, линейно-интерактивный, 650 ВА, 390 Вт.
  DEXP CEE-E 650VA
  "DEXP"
  1
  шт.
  ОРИГИНАЛ НЕ СОБРАН
  01.06
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
  Дистрибутив ПО для лифтового комплекса "Обь".
  LKDSDrv.mci
  "Лифт-Комплекс ДС"
  1
  шт.
  ОРИГИНАЛ НЕ СОБРАН
  01.07
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
  Лифтовой блок версии 7.2 "iAStar".
  ЛНГС.465213.270-48
  "Лифт-Комплекс ДС"
  8
  ком.п.
  ОРИГИНАЛ НЕ СОБРАН
  01.08
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
  Устройство переговорное 7.2.
  ЛНГС.465213.270.500-02
  "Лифт-Комплекс ДС"
  8
  ком.п.
  ОРИГИНАЛ НЕ СОБРАН
  01.09
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
  Модуль переговорной связи.
  ЛНГС.465213.099.400-05
  "Лифт-Комплекс ДС"
  8
  шт.
  ОРИГИНАЛ НЕ СОБРАН
  01.10
  НК-750.28-02-АВТ Автоматизация вертикального транспорта
  Приборы и средства диспетчеризации лифтового комплекса
  Переговорное устройство ПУЭП-Н.
  ЛНГС.465213.300.300
  "Лифт-Комплекс ДС"
  3
  шт.
  ОРИГИНАЛ НЕ СОБРАН
  Показано с 1 по 10 из 1517 строк
  Строк на странице:

10
«

Страница 1 из 152

»
Технологии
Tech Stack
Технологический стек, который я использую для автоматизации строительного документооборота

VBA Макросы
Генераторы документов, автоматизация шаблонов Excel

Excel
VBA
Макрос
JS Автоматизация
Скрипты для Exon: авто-ввод объёмов, парсинг данных

JavaScript
Exon
DOM
Power Query
Подтяжка данных из разных источников, ETL-процессы

Excel
PowerQuery
ETL
AI-ассистент
Использование ИИ для проверки документации и генерации

Gemini
ChatGPT
Cursor
AutoCAD Scripting
Динамические блоки, автоматические штампы, параметрика

AutoCAD
LISP
DWG
Web-портфолио
Сайт на React + Vite с интерактивными демо

React
TypeScript
Vite
Аналитика
Метрики эффективности
↓ 75%
Среднее время сборки комплекта ИД
3-4 дня
→
6-8 часов
↓ 85%
Замечания от технадзора
15-20%
→
2-3%
↓ 97%
Ручной ввод данных в Exon
2 часа / объект
→
3 мин
↑ 240%
Объектов в параллельной работе
3-5
→
12-17
Процент закрытия ИД по месяцам (2025)
8 мес. тренд
45%
Янв
52%
Фев
67%
Мар
73%
Апр
81%
Май
88%
Июн
92%
Июл
96%
Авг
👷‍♂️
Николаев Артемий
Инженер ПТО / Специалист по ИД

СС (Связь)
НСС (Наружная)
ЭОМ (Электрика)
8 (915) 494-44-57
[artyomnikolae7@gmail.com](mailto\:artyomnikolae7@gmail.com)
Telegram: @Amantle\_x
Профиль
& Опыт работы
Более 3 лет работаю в субподрядной строительной организации в системе Exon: осуществляю сборку, проверку и сдачу исполнительной документации по слаботочным сетям связи, а также ведение ведомостей объемов работ (ВОР). Мой фокус — автоматизация процессов (AutoCAD + Excel), что сокращает время на подготовку актов и минимизирует замечания от технадзора.

Профессиональные компетенции:
Контроль состава и страничности документов
Разработка единых шаблонов чертежей и реестров
Загрузка и ведение ИД в ИС Exon, Sarex
Разработка ППР и техкарт по Наружным сетям
Хронологическая
биография
опыта
2023 — н. в.
Старший инженер ПТО / Руководитель группы ИД
Строительство жилых комплексов бизнес- и комфорт-класса (СС, НСС)

Управление сдачей исполнительной документации на объектах реновации и коммерческого жилья Москвы. Координация работы смежных отделов, взаимодействие с заказчиками (Москапстрой, Мосинжпроект) и надзорными органами.

Автоматизировал генерацию актов освидетельствования скрытых работ (АОСР) на VBA;
Сдал под ключ слаботочные разделы связи (СС) на 12 крупных объектах;
Курировал ведение и наполнение ВОР и реестров замечаний в цифровой системе **Exon**.
2021 — 2023
Инженер ПТО
Наружные кабельные и инженерные сети связи (НСС)

Подготовка разрешительной и исполнительной документации по выносу и перекладке сетей связи из пятна застройки. Разработка проектов производства работ (ППР) и технологических карт.

Согласовал более 45 кабельных трасс с городскими службами и ПАО «Ростелеком»;
Снизил процент замечаний технадзора по входному контролю материалов на 35%;
Вел детальные ведомости объемов работ (ВОР) по 17 объектам одновременно.
2020 — 2021
Помощник инженера ПТО / AutoCAD чертежник
Проектирование и исполнительные схемы

Черчение исполнительных схем по геодезическим съемкам, оцифровка проектной документации, оформление обложек, реестров и подготовка папок к сдаче в архив.

Оформил и сдал в архив более 150 комплектов ИД;
В совершенстве освоил работу в AutoCAD, разработал библиотеку динамических блоков;
Выполнял рутинную сверку фактических кабельных длин с проектными спецификациями.
Инструменты &
Навыки
AutoCAD
Excel
VBA
PowerQuery
PowerBI
Word
Photoshop
Искусственный
Интеллект
Stack
Antigravity
Cursor
Gemini
DeepSeek
Grok
ChatGPT
Copilot
Образование
Московский гуманитарно-технический университет — Московский архитектурно-строительный институт (МГТУ-МАСИ)
Высшее образование — бакалавриат

Направление подготовки: 08.03.01 Строительство (Промышленное и гражданское строительство)

Очно-заочная форма. Диплом выдан 17 января 2026 г.

Инструменты • Стандарты • Технологии
AutoCAD
Excel
VBA
PowerQuery
PowerBI
Python
SQL
Exon
Sarex
ГОСТ
СП
ППР
АОСР
ИД
Слаботочные сети
СС
НСС
Волоконно-оптические линии
AutoCAD
Excel
VBA
PowerQuery
PowerBI
Python
SQL
Exon
Sarex
ГОСТ
СП
ППР
АОСР
ИД
Слаботочные сети
СС
НСС
Волоконно-оптические линии



Нормативная база
Стандарты & ГОСТ
Полный перечень нормативных документов, которыми руководствуюсь при подготовке ИД

Все
СП
ГОСТ
РД
СП
СП 76.13330.2016
Электротехнические устройства

СП
СП 77.13330.2016
Системы автоматизации

ГОСТ
ГОСТ 21.613-2014
Силовое электрооборудование

ГОСТ
ГОСТ 34.201-89
Виды и комплектность документов

СП
СП 48.13330.2019
Организация строительства

РД
РД 45.120-2000
Нормы технологического проектирования

ГОСТ
ГОСТ Р 21.1101-2013
Основные требования к ПД и РД

СП
СП 134.13330.2022
Системы электросвязи зданий

Инструментарий
Мои шаблоны и инструменты
Разработанные мной шаблоны, скрипты и инструменты для автоматизации ПТО

XLSX
Шаблон АОСР (Excel + VBA)
2.4 МБ
Шаблон
Подробнее
XLSM
Генератор ИД ОЗДС
8.1 МБ
Инструмент
Подробнее
XLSX
Реестр паспортов и сертификатов
1.8 МБ
Шаблон
Подробнее
XLSX
Расчёт ВОР (телефонная канализация)
3.2 МБ
Расчёт
Подробнее
DWG
Библиотека динамических блоков AutoCAD
15.6 МБ
CAD
Подробнее
JS
Скрипт авто-ввода в Exon
45 КБ
Скрипт
Подробнее
XLSX
Шаблон ведомости объёмов работ
1.2 МБ
Шаблон
Подробнее
PDF
Чек-лист приёмки ИД
340 КБ
Документ
Подробнее
Квалификация
Образование & сертификаты
2026
Бакалавр ПГС
МГТУ-МАСИ

08.03.01 Строительство (Промышленное и гражданское)

2024
Охрана труда
Курс повышения квалификации

Безопасные методы и приёмы работ на строительной площадке

2023
AutoCAD Professional
Autodesk Certified

2D/3D проектирование, создание динамических блоков

2022
Excel Expert + VBA
Самостоятельное обучение

Макросы, Power Query, Power BI, автоматизация

2023
Exon (Электронный документооборот)
Внутреннее обучение

Полный цикл работы в системе электронного согласования ИД

2021
Допуск СРО
Строительная саморегулируемая организация

Допуск к работам по подготовке исполнительной документации

Timescale Хронология
Профессиональный путь развития
Интерактивная шкала времени с отсчетом стажа (Опыт / Годы) и ключевыми вехами автоматизации ПТО.

Стаж работы
Календарный год
Достижение / Веха
+0 года стажа
2020
Старт карьеры в ПТО
Помощник инженера ПТО
Начало работы в строительной отрасли Москвы. Разработка исполнительных схем в AutoCAD.

+1 год стажа
2021
Первый крупный проект по СС
Инженер ПТО
Полное сопровождение исполнительной документации по объекту жилого дома на Гарибальди.

+2 года стажа
2022
Внедрение автоматизации Excel + VBA
Инженер ПТО / Автоматизатор
Создан «Генератор ИД по ОЗДС», сокративший время сборки актов с 4 дней до 6 часов.

+3 года стажа
2023
Переход на систему Exon
Старший инженер ПТО
Разработан JS-скрипт автозаполнения объемов в Exon (450 позиций за 3 минуты).

+4 года стажа
2024
Руководитель группы ИД
Руководитель группы ПТО
Параллельное ведение 12+ объектов строительства в Москве без единого замечания технадзора.

+5 лет стажа
2025
Оптимизация ВОР и Шахматок
Ведущий эксперт ПТО
Создан единый комплекс сводного учета объемов ВОР с автоматическим сопоставлением факт/проект.

+6 лет стажа
2026
Диплом ПГС и Запуск OSINT Портфолио
Бакалавр ПГС / Разработчик
Успешная защита диплома в МГТУ-МАСИ. Выпуск интерактивного OSINT-портфолио v3.0.

Партнёры
Компании & заказчики
ООО "МОНАРХ"
Генподрядчик
4 проектов
АО ГК "ЕКС"
Генподрядчик
2 проектов
ООО "ГСТ"
Субподрядчик
3 проектов
ООО "МОСРЕНСТРОЙ-6"
Субподрядчик
2 проектов
СК КРОНОС
Субподрядчик
2 проектов
ДАРС-РЕНОВАЦИЯ
Субподрядчик
3 проектов
АО "МОСКАПСТРОЙ"
Заказчик
1 проектов
Мосинжпроект
Заказчик
5 проектов
ПАО "Ростелеком"
Провайдер
8 проектов
ПАО "МТС"
Провайдер
3 проектов
Деп. строительства Москвы
Гос. орган
12 проектов
ФЛЭТ И КО
Субподрядчик
1 проектов
Отзывы
Что говорят коллеги
«Артемий закрыл все разделы слаботочных сетей на Гарибальди 22 без единого замечания от технадзора. Работа чёткая, документация идеальная.»

Алексей Петров
Главный инженер, ООО «МОНАРХ»

«Генератор ИД по ОЗДС сэкономил нашему отделу десятки часов. Артемий не просто инженер — он автоматизатор процессов.»

Елена Коршунова
Руководитель ПТО, ГК «ЕКС»

«Сборка комплекта за один день вместо четырёх — это реально. Скрипты Артемия для Exon изменили подход к работе.»

Сергей Волков
Начальник участка, СК КРОНОС

«JS-скрипт авто-ввода объёмов в Exon — это бомба. 450 позиций за 3 минуты без ошибок. Раньше тратил на это полдня.»

Дмитрий Савельев
Инженер ПТО, МОСРЕНСТРОЙ-6

Планы
Цели & амбиции
В процессе
Полная цифровизация ИД
Переход к 100% электронному документообороту на всех объектах

Прогресс
65%
Близко
Нулевые замечания
Достижение 0% замечаний от технадзора на всех объектах одновременно

Прогресс
85%
Планируется
Открытые шаблоны
Публикация библиотеки шаблонов АОСР и ВОР в открытый доступ

Прогресс
30%
В процессе
25 объектов
Расширение портфолио до 25 сданных объектов в Москве

Прогресс
68%
Вопросы
Часто задаваемые вопросы

Какие разделы ИД вы закрываете?

Как быстро можете собрать комплект ОЗДС?

Работаете ли вы с системой Exon?

Какие инструменты автоматизации используете?

Можете ли выехать на объект для технадзора?

С какими заказчиками работали?
Согласования и коммуникация
Рабочая переписка и Exon
Примеры реального взаимодействия с Технадзором, ГИПами, Заказчиками и подрядчиками при сдаче исполнительной документации и ведении объектов.

Диалоги (8)
Exon / Messenger

👨‍💼
Замечания технадзора — Гарибальди 22
Алексей (Технадзор) • Заказчик

Вчера, 14:20

👩‍💼
Согласование ВОР по слаботочке (ВТСС)
Елена (ГК ЕКС) • Главный инженер

25 июля

👷‍♂️
ОЗДС Сборка комплекта ИД
Сергей (СК КРОНОС) • Начальник участка

22 июля

👨‍🔬
Связка Excel + AutoCAD (НСС)
Игорь (Проектировщик) • ГИП

19 июля

💻
Авто-ввод объемов в Exon (JS)
Дмитрий (МОСРЕНСТРОЙ-6) • Инженер ПТО

15 июля

🏗️
Выезд к Технадзору (Тайнинская 16)
Виктор (МОНАРХ) • Зам. дир. по строительству

10 июля

📊
Снос и перекладка сетей (Варшавское ш.)
Мария (ДАРС-РЕНОВАЦИЯ) • Сметный отдел

02 июля

📁
Корректировка Шахматки (ВОР)
Олег (ФЛЭТ И КО) • Руководитель проекта

28 июня
👨‍💼
Замечания технадзора — Гарибальди 22
Алексей (Технадзор) (Заказчик)

Статус: Решено
Алексей (Технадзор)
14:20
Артемий, привет! По АОСР №45 на наружку СС в Exon отклонение: нет паспорта на муфту МТОК.

14:35
Вы
Приветствую, Алексей! Паспорт прикрепил в реестре под №112 и переподписал комплект в Exon. Проверь, пожалуйста.

Алексей (Технадзор)
15:10
Отлично, вижу. Акт согласован и подписан ЭЦП.

Сообщение...

Связаться со мной
Начать сотрудничество
Если у вас есть вопросы по сдаче ИД, ведению ВОР на ваших объектах или вы хотите обсудить проект автоматизации ПТО — заполните форму ниже или свяжитесь напрямую.

Локация
Москва, Российская Федерация
Электронная почта
[artyomnikolae7@gmail.com](mailto\:artyomnikolae7@gmail.com)
Telegram / Связь
@Amantle\_x
Отправить сообщение
Ваше Имя \*
Артемий
Email \*
[you@example.com](mailto\:you@example.com)
Сообщение \*

---

**Assistant:**

Теперь материала достаточно, чтобы сделать **нормальный контент-аудит**. И да: проблема сайта не в том, что на нём мало информации. Наоборот — **информации слишком много, она повторяется, местами выглядит как маркетинговая легенда и местами противоречит сама себе**.

Если такой сайт показывать работодателю, я бы не пытался «добавить ещё блоков». Я бы сначала **сильно сократил и перестроил подачу**, а уже потом добавлял интерактивность.

## Главный диагноз

Сейчас сайт пытается одновременно быть:

1. резюме;
2. портфолио;
3. CRM/дашбордом;
4. демонстрацией frontend;
5. базой нормативных документов;
6. каталогом инструментов;
7. кейс-стади;
8. сайтом услуг;
9. личным брендом;
10. доказательством опыта.

В результате возникает ощущение:

> **«Посмотрите, сколько всего я умею»**

вместо:

> **«Вот специалист ПТО. Вот чем он занимается. Вот какие задачи решает. Вот конкретные доказательства его компетенций».**

Для работодателя второе значительно сильнее.

---

# 1. Самая большая проблема — недоверие к цифрам

Вот это я бы исправил **до дизайна**.

У тебя одновременно встречается:

> Более 3 лет

и:

> С 2020 года в отрасли

и timeline:

> 2020 → 2026

То есть потенциально **6 лет**, а не 3+.

Дальше:

> 17+ сданных объектов

> 150+ комплектов ИД

> 500+ АОСР

> 100% закрытие ИД

> 2% замечания

> 0% замечаний

> «без единого замечания»

> 12–17 объектов одновременно

> 45 кабельных трасс

> 450 позиций за 3 минуты

Само по себе наличие цифр — хорошо.

Но когда их **слишком много и они не согласованы между собой**, появляется обратный эффект:

**«Это реальные показатели или их придумали для сайта?»**

Особенно опасный блок:

> «Отзывы»

с конкретными людьми:

> Алексей Петров  
> Главный инженер, ООО «МОНАРХ»

> Елена Коршунова  
> Руководитель ПТО, ГК «ЕКС»

и т.д.

Если это не реальные публично разрешённые отзывы конкретных людей, **я бы этот блок полностью убрал**.

То же относится к «диалогам» с технадзором.

Скриноподобная переписка:

> «Артемий, привет! По АОСР №45...»

выглядит как реальная внутренняя переписка. Для работодателя это может вызвать больше вопросов, чем доверия.

### Лучше:

**«Типовой сценарий согласования»**

и явно показать его как реконструированный пример:

```text
Замечание
    ↓
Проверка документа
    ↓
Поиск основания
    ↓
Исправление
    ↓
Повторная подача
    ↓
Согласование
```

Так ты демонстрируешь компетенцию, не создавая впечатления, что публикуешь чужую переписку.

---

# 2. Главный экран я бы полностью переписал

Сейчас:

> **Артемий Николаев**  
> Инженер ПТО / Сдача ИД

> Сдача ИД • Автоматизация ПТО

> **Сдаю исполнительную документацию без замечаний**

Последняя фраза слишком рекламная.

Я бы сделал гораздо профессиональнее:

# Артемий Николаев

### Инженер ПТО · Исполнительная документация · Автоматизация процессов

**Сборка, проверка и сдача ИД по слаботочным сетям.  
Автоматизация рутинных операций через Excel/VBA, Power Query, AutoCAD и JavaScript.**

И ниже:

```text
СС / НСС
Исполнительная документация
ВОР
Exon
AutoCAD
Excel / VBA
```

И две кнопки:

**Посмотреть опыт**

**Посмотреть рабочие кейсы**

---

# 3. «Сдача ИД без замечаний» надо убрать

Не потому что звучит плохо.

А потому что **никто профессионально не обещает ноль замечаний**.

У тебя же дальше написано:

> Замечания технадзора: 2–3%

То есть сайт сам себе противоречит.

Лучше:

> **Системная подготовка ИД с контролем состава, объёмов и замечаний**

или:

> **Фокус: качественная подготовка и сдача исполнительной документации**

Это звучит гораздо взрослее.

---

# 4. Блок «17+ объектов» нужно превратить в доказательство

Сейчас:

```text
17+
Сданных объектов
```

Это просто число.

Намного интереснее:

# Опыт в цифрах

```text
17+
объектов

150+
комплектов ИД

500+
АОСР

СС / НСС
основная специализация

Exon
электронное согласование

Excel + VBA + JS
автоматизация
```

Но **оставлять только те цифры, которые ты реально можешь подтвердить**.

---

# 5. Компании — сейчас выглядит как попытка впечатлить

Секция:

> Компании и подрядчики на моих проектах

и длинный список:

> МОНАРХ  
> МСУ-1  
> ЕКС  
> ГСТ  
> МОСРЕНСТРОЙ-6  
> Мосинжпроект  
> Москапстрой  
> Ростелеком  
> МТС  
> ...

Проблема не в самих компаниях.

Проблема в том, что непонятно:

> **в каком качестве ты с ними взаимодействовал?**

Например:

```text
МОСКАПСТРОЙ
Заказчик

Мосинжпроект
Технический заказчик

Ростелеком
Согласование сетей связи

МОНАРХ
Генподрядчик

...
```

И добавить короткую оговорку:

> Компании указаны в контексте проектов, в которых я участвовал; это не означает прямого трудоустройства или контрактных отношений с каждой организацией.

Это сильно повышает аккуратность.

---

# 6. «Обо мне» надо радикально сократить

Сейчас информация об Артемии повторяется много раз:

- Hero;
- «Обо мне»;
- профиль;
- footer;
- timeline;
- квалификация;
- skills.

Получается примерно:

> Артемий Николаев — инженер ПТО...

несколько раз.

### Я бы сделал один сильный блок:

# Профиль

**Инженер ПТО с опытом подготовки и сдачи исполнительной документации по строительным объектам Москвы.**

Основная специализация:

- СС;
- НСС;
- исполнительные схемы;
- АОСР;
- ВОР;
- реестры;
- Exon;
- взаимодействие с техническим заказчиком и технадзором.

Отдельное направление — **автоматизация ПТО**:

> Excel / VBA → Power Query → AutoCAD → JavaScript → AI-инструменты.

И всё.

---

# 7. Самый сильный блок твоего сайта — на самом деле «Как я работаю»

Вот это нужно **сделать центральной частью сайта**.

Твой текущий процесс:

```text
01 Входной контроль
02 Исполнительные схемы
03 Формирование АОСР
04 Загрузка в Exon
05 Согласование
06 Сдача в архив
```

Это отлично.

Но сейчас это просто шесть карточек.

Я бы сделал из этого **интерактивный pipeline**:

```text
РАБОЧАЯ ДОКУМЕНТАЦИЯ
          ↓
   Входной контроль
          ↓
      СПЕЦИФИКАЦИИ
          ↓
       ОБЪЁМЫ
          ↓
  ИСПОЛНИТЕЛЬНЫЕ СХЕМЫ
          ↓
         АОСР
          ↓
        ВОР
          ↓
        EXON
          ↓
    СОГЛАСОВАНИЕ
          ↓
      АРХИВ ИД
```

При клике на каждый этап раскрывается:

- что проверяется;
- какие документы участвуют;
- какие инструменты используются;
- типовые ошибки;
- результат.

**Вот это уже настоящее портфолио инженера ПТО.**

---

# 8. Автоматизацию нужно сделать вторым главным направлением

Вот здесь у тебя реально есть уникальность.

Обычный инженер ПТО пишет:

> Excel  
> AutoCAD  
> Exon

А у тебя есть:

> **инженер + автоматизация процессов.**

Это намного интереснее.

Я бы сделал раздел:

# ПТО × Автоматизация

И четыре больших кейса:

### 01 — Excel / VBA

**Генерация исполнительной документации**

```text
Входные данные
     ↓
Excel
     ↓
VBA
     ↓
АОСР / реестр / комплект
```

### 02 — Power Query

**Сведение данных из нескольких источников**

```text
РД
ВОР
спецификация
факт
     ↓
Power Query
     ↓
единая модель
```

### 03 — AutoCAD

**Параметрические исполнительные схемы**

```text
исходные данные
      ↓
AutoCAD
      ↓
динамические блоки
      ↓
исполнительная схема
```

### 04 — Exon

**Автоматизация ввода объёмов**

```text
таблица
   ↓
обработка
   ↓
JavaScript
   ↓
Exon
```

Вот это уже очень сильное позиционирование.

---

# 9. Кейс с «землекопами» я бы переименовал

> **Расчётная таблица для землекопов**

Для профессионального сайта звучит бытово.

Например:

### Автоматизация учёта выработки по объектам

**Проблема**

Разрозненные данные по работникам, сменам, объектам и выработке.

**Решение**

Excel + Power Query + автоматическое обновление.

**Результат**

Единая система учёта по нескольким объектам.

Это намного лучше.

---

# 10. ВОР — хороший интерактивный блок, но сейчас он перегружен

1517 строк таблицы — это **демонстрация технологии**, а не контента сайта.

Работодателю не нужно листать:

> Страница 1 из 152

Я бы сделал:

# Интерактивная ВОР

Слева:

```text
Фильтры
Раздел
Система
Документ
Статус
```

Справа:

```text
1 517 позиций

[Наименование]
[Шифр]
[Ед.]
[Количество]
[Статус]
```

И сверху 3–4 KPI:

```text
1 517 позиций
24 раздела
328 документов
17 объектов
```

А под таблицей:

> **Демонстрационные данные**

Это критически важно, если данные не должны раскрывать реальные проекты.

---

# 11. Блок «Технологии» сейчас слишком большой

У тебя:

> VBA  
> Excel  
> JavaScript  
> Power Query  
> AI  
> AutoCAD  
> React  
> TypeScript  
> Vite  
> Python  
> SQL  
> ...

Получается ощущение:

> **«Я умею всё».**

А это снижает специализацию.

Я бы разделил:

## Основной рабочий стек

```text
Excel
VBA
Power Query
AutoCAD
Exon
Sarex
```

## Автоматизация

```text
JavaScript
Python
SQL
AI
```

## Дополнительные инструменты

```text
Power BI
Word
Photoshop
```

## Web

```text
React
TypeScript
Next.js
GitHub
```

Причём Web явно обозначить:

> **Инструменты для разработки собственных рабочих интерфейсов и автоматизации.**

Тогда работодатель не думает:

> «Он инженер ПТО или frontend-разработчик?»

---

# 12. «Нормативная база» не должна быть огромным каталогом

Сейчас это выглядит как:

> Я знаю много ГОСТов.

Лучше:

# Нормативная база

```text
СП
ГОСТ
РД
```

И показать **8–12 наиболее релевантных документов**, а не делать библиотеку.

Например:

> СП 48.13330 — Организация строительства

> ГОСТ Р 21.1101 — Основные требования к проектной и рабочей документации

и т.д.

А дальше:

**[Открыть нормативную базу]**

---

# 13. Timeline тоже хороший, но сейчас он рассказывает слишком много

Сейчас:

2020 → 2021 → 2022 → 2023 → 2024 → 2025 → 2026

И практически каждый год снабжён громким достижением.

Я бы оставил:

```text
2020
Старт в ПТО
      ↓
2021
Исполнительные схемы / НСС
      ↓
2022
Excel + VBA
      ↓
2023
Exon + автоматизация
      ↓
2024
Руководство группой ИД
      ↓
2025
Автоматизация ВОР
      ↓
2026
Бакалавриат ПГС
```

Но **не писать неподтверждаемые суперлативы** вроде:

> «без единого замечания технадзора».

---

# 14. «Планы» я бы вообще убрал

Вот этот блок:

> Нулевые замечания  
> 25 объектов  
> 100% электронный документооборот

не помогает получить работу.

Работодатель хочет понять:

> **что ты умеешь сейчас?**

а не:

> какие KPI ты себе поставил.

Вместо этого можно сделать:

# Сейчас развиваю

```text
01
Автоматизация ПТО

02
Систематизация ИД

03
Инструменты контроля ВОР

04
Интеграция AI в рутинные процессы
```

---

# 15. «Отзывы» — удалить или доказать

Это один из самых рискованных блоков.

Если отзывы реальные:

- согласовать публикацию;
- использовать настоящие имена;
- желательно должность + компания;
- можно добавить LinkedIn/Telegram/иной подтверждаемый профиль, если уместно.

Если это **примеры того, что могли бы сказать коллеги**, их нельзя выдавать за реальные отзывы.

В текущем виде я бы **удалил весь раздел**.

---

# 16. «Согласования и коммуникация» — переделать

Не нужны:

> Алексей  
> Елена  
> Сергей  
> Дмитрий

и псевдопереписки.

Сделай:

# Как решаются замечания

### Пример сценария

**Замечание**

> Не приложен паспорт на материал.

↓

**Проверка**

Проверка позиции по реестру материалов.

↓

**Поиск документа**

Сопоставление с сертификатом / паспортом.

↓

**Исправление**

Добавление документа в комплект.

↓

**Повторная подача**

Обновление комплекта в Exon.

↓

**Результат**

Документ согласован.

Это **показывает твой рабочий алгоритм**, а не чужие сообщения.

---

# 17. Самая большая структурная проблема — повторение

У тебя несколько раз появляются:

```text
СС
НСС
Exon
AutoCAD
Excel
VBA
17 объектов
500 АОСР
150 комплектов
```

Это надо сократить.

Сайт должен иметь **нарратив**:

```text
КТО Я
   ↓
ЧТО Я ДЕЛАЮ
   ↓
КАК Я ЭТО ДЕЛАЮ
   ↓
КАКИЕ ПРОБЛЕМЫ РЕШАЮ
   ↓
ДОКАЗАТЕЛЬСТВА
   ↓
ИНСТРУМЕНТЫ
   ↓
ОПЫТ
   ↓
КОНТАКТ
```

---

# Я бы построил новую версию вот так

## 01 — HERO

```text
Артемий Николаев

Инженер ПТО
Исполнительная документация · СС / НСС · Автоматизация

Сборка, проверка и сдача ИД.
Автоматизация рутинных операций через Excel, AutoCAD и JavaScript.

[Опыт] [Кейсы]
```

---

## 02 — QUICK FACTS

```text
3+ / 6 лет* опыта
17+ объектов
150+ комплектов
500+ АОСР
```

\* здесь сначала нужно определить реальный стаж.

---

## 03 — SPECIALIZATION

### Чем занимаюсь

**Исполнительная документация**

СС / НСС / исполнительные схемы / АОСР / ВОР / реестры

**Цифровое согласование**

Exon / Sarex / взаимодействие с технадзором

**Автоматизация**

Excel / VBA / Power Query / AutoCAD / JS

---

## 04 — WORKFLOW

Большая интерактивная схема:

```text
РД → ВОР → Факт → ИД → Exon → Согласование → Архив
```

---

# 05 — CASE STUDIES

Не 8 маленьких карточек.

**4–5 действительно сильных кейсов.**

Например:

### Автоматизация генерации ИД

Проблема → решение → инструменты → результат.

### Автозагрузка объёмов в Exon

### Сопоставление факт / проект

### Автоматизация ВОР

### AutoCAD + Excel

---

# 06 — INTERACTIVE LAB

Вот здесь можно оставить твою любовь к frontend.

### ВОР

Интерактивная таблица.

### АОСР Generator

Условный интерфейс:

```text
Количество актов: 47
Статус: готово
Ошибок: 0
```

### Excel / Power Query

Интерактивная демонстрация преобразования данных.

### Exon

Демонстрация workflow.

Это будет очень эффектно, но при этом **не разрушит инженерное позиционирование**.

---

# 07 — EXPERIENCE

Классическое резюме:

```text
2023 — сейчас
Старший инженер ПТО

2021 — 2023
Инженер ПТО

2020 — 2021
Помощник инженера ПТО
```

Кратко.

---

# 08 — EDUCATION

МГТУ-МАСИ

ПГС

Диплом — 17.01.2026

---

# 09 — TOOLS

Сделать не «100 технологий», а:

```text
CORE
Excel
AutoCAD
Exon
VBA
Power Query

AUTOMATION
JavaScript
Python
SQL
AI

WEB
React
TypeScript
Next.js
GitHub
```

---

# 10 — DOCUMENTATION

Небольшой раздел:

```text
СП
ГОСТ
РД
ППР
АОСР
ИД
```

---

# 11 — CONTACT

Очень простой.

> **Ищете инженера ПТО с опытом автоматизации процессов?**

**Артемий Николаев**

Email  
Telegram  
Резюме PDF

---

# А теперь самое интересное — визуальный стиль

Я бы **не делал сайт похожим на резюме**.

Тебе гораздо больше подходит концепция:

# **Engineering Control Room**

Не буквально промышленный интерфейс, а визуальный язык инженерной системы.

Например:

```text
┌──────────────────────────────────────────────┐
│ ARTEMII PTO                         2026.08 │
│                                              │
│ ENGINEERING                                  │
│ DOCUMENTATION                                │
│ AUTOMATION                                   │
│                                              │
│ [ VIEW CASES ]                               │
└──────────────────────────────────────────────┘
```

Использовать:

- крупную типографику;
- тонкую сетку;
- моноширинные подписи;
- номера секций `01 / 02 / 03`;
- технические метаданные;
- чертежные линии;
- аккуратные таблицы;
- restrained motion;
- небольшое количество акцентного цвета.

И **никакого визуального перегруза**.

---

# И я бы обязательно добавил «живые» инженерные блоки

Например:

### DOCUMENT FLOW

```text
РД
↓
Спецификация
↓
ВОР
↓
Факт
↓
АОСР
↓
Исполнительная схема
↓
Exon
↓
Согласовано
```

### DATA FLOW

```text
Excel
  ↘
Power Query → Сводная модель → ВОР
  ↗
AutoCAD
```

### AUTOMATION

```text
INPUT
1 517 позиций

PROCESS
Excel → Power Query → JS

OUTPUT
готовый набор данных
```

Это даст сайту **собственную визуальную идентичность**.

---

# И ещё один важный момент

Твой сайт сейчас очень сильно пытается доказать:

> **«Я очень крутой специалист».**

Я бы поменял это на:

> **«Вот реальные задачи, которые я умею решать. Вот как я их решаю. Вот инструменты. Вот результаты».**

Это значительно убедительнее.

---

## Мой приоритет исправлений

| Приоритет | Что делать |
|---|---|
| 🔴 1 | Проверить и привести в соответствие все цифры |
| 🔴 2 | Удалить сомнительные отзывы/переписки |
| 🔴 3 | Убрать повторяющийся контент |
| 🔴 4 | Переписать Hero |
| 🔴 5 | Перестроить навигацию |
| 🟠 6 | Пересобрать кейсы |
| 🟠 7 | Сделать Workflow интерактивным |
| 🟠 8 | Переработать ВОР |
| 🟡 9 | Упростить технологии |
| 🟡 10 | Добавить Engineering visual language |
| 🟢 11 | Добавить animation |
| 🟢 12 | Добавить 3D / WebGL, только если оно усиливает историю |

**Последний пункт особенно важен:** я бы пока не добавлял Three.js просто ради «вау». У тебя уже есть намного более редкий материал — **реальные инженерные процессы, документация, ВОР, автоматизация, Excel/AutoCAD/Exon**. Именно это можно превратить в визуально очень сильный сайт.

И отдельно: **не нужно выбрасывать 70–80% существующего сайта**. Большая часть материала хорошая как исходная база. Проблема сейчас преимущественно в **иерархии, доверии к данным, повторении и способе представления**.

Если делать следующую версию, я бы целился не в «больше блоков», а примерно в **10–12 очень разных по визуальной подаче секций**, где каждая отвечает на один вопрос работодателя.

---

**User:**

«Это реальные показатели или их придумали для сайта?»   это сделал всё ии, на основе моих резюме, но как будето бы он написал о своему всё



Николаев Артемий
Владимирович
Мужчина, 25 лет, родился 8 августа 2000
+7 (915) 4944457 — предпочитаемый способ связи
[artyomnikolae7@gmail.com](mailto\:artyomnikolae7@gmail.com)
telegram: @Amantle\_x
Сайт резюме: amantle.resume.ru
Проживает: Люберцы (Московская область)
Гражданство: Россия, есть разрешение на работу: Россия
Готов работать удалённо: Москва, готов к редким командировкам
Желаемая должность и зарплата
Инженер ПТО
Специализации:
— Инженер ПТО, инженер-сметчик
Тип занятости: полная занятость, частичная занятость, проектная
работа/разовое задание
Формат работы: удалённо
Желательное время в пути до работы: не имеет значения
180 000 ₽ на руки
Опыт работы — 4 года 9 месяцев
Март 2026 —
настоящее время
6 месяцев
Хго Инжиниринг
[www.hgoengineering.ru](http://www.hgoengineering.ru)
Инженер ПТО
Оптимизация и автоматизация документооборота ПТО с помощью ИИ (OpenAI Codex +
Gemini+Antigravity+NotebookLM)

- Разработал автоматизированный пайплайн для обработки неструктурированных сканов
  строительной документации (паспорта, сертификаты, отказные письма).
- Спроектировал сложную архитектуру промптов с встроенными блоками защиты от ошибок
  (Anti-Error Blocks) для 100% точного извлечения данных и привязки к проектной
  спецификации.
- Масштабировал процесс до пакетной обработки: система способна обрабатывать и
  переименовывать по 300 файлов за один запуск.
- Результат: Сократил трудозатраты на обработку документов в десятки раз. Сэкономил более 10
  часов ручного труда на каждые 300 файлов (ранее ручная обработка одного документа
  занимала 2 минуты), полностью исключив человеческий фактор.
  Обновленный развернутый кейс (Формат STAR)
  Проект: AI-пайплайн для потоковой обработки технической документации
- Ситуация (Situation): Входящая документация поступала в виде хаотичных мульти-сканов.
  Ручной разбор, чтение, сопоставление со спецификацией и переименование занимали 2
  минуты на каждый документ. На партию из 300 документов уходило около 10 часов
  непрерывной монотонной работы.
- Задача (Task): Полностью автоматизировать цикл потоковой обработки больших массивов
  данных: от сырого скана до готовых PDF-файлов, строго привязанных к спецификации проекта.
- Действия (Action):
- Препроцессинг (OpenAI Codex): Настроил автоматическое разделение слипшихся документов
  Резюме обновлено 5 августа 2026 в 08:39
  на отдельные файлы и выравнивание ориентации страниц.
- Извлечение данных (Gemini+NotebookLM): Внедрил глубоко структурированный промпт с
  жесткими правилами парсинга (поиск дат, номеров) и защитой от галлюцинаций. Настроил
  автоматический мэтчинг извлеченных данных с эталонной спецификацией.
- Масштабирование: Настроил пайплайн на бесперебойную пакетную обработку до 300 файлов
  за один прогон без зависаний и потерь данных.
- Постпроцессинг (Antigravity): Реализовал скрипт валидации сгенерированной таблицы и
  пакетного переименования файлов по заданному стандарту.
- Результат (Result): \* Автоматизирована обработка партий по 300 файлов за один прогон.
- Время на рутинную работу сокращено на 95% (с 10 часов ручного труда до быстрого запуска
  скрипта).
- Внедрен масштабируемый, бесплатный инструмент, исключающий опечатки и неверную
  привязку к позициям.
  Февраль 2023 —
  Февраль 2026
  3 года 1 месяц
  ООО Сател
  Инженер ПТО НСС и СС
  ООО «Сател» — инженер ПТО / специалист по исполнительной документации (СС, НСС)
  В ООО «Сател» я вел исполнительную документацию по сетям связи в двух направлениях:
  внутренние сети связи (раздел СС) и наружные сети связи (раздел НСС). Моя задача — доводить
  комплекты ИД до согласования и подписания: от проверки исходных материалов и расчётов
  объёмов до загрузки, ведения журналов, формирования актов и контроля статусов в Exon.
  Работал параллельно по нескольким объектам, устранял замечания и доводил комплекты до
  финальной сдачи.
  Раздел СС — внутренние сети связи
  По СС исполнительные схемы и часть документации готовил подрядчик. Я принимал
  материалы, проверял и доводил до состояния, когда комплект можно запускать в согласование.
  Сверял соответствие проекту и РД, сопоставлял с фактом и кабельными журналами,
  контролировал состав, нумерацию и единообразие оформления. Замечания фиксировал и
  закрывал: возвращал на корректировку или исправлял сам — в зависимости от сроков и
  критичности.
  Чтобы контролировать объёмы и не ловить ошибки на финальном этапе, я разработал сводную
  таблицу в Excel с логикой “позиция сметы → объёмы по РД → фактические объёмы по ИД”, с
  разбивкой по этажам. Настроил условное форматирование: при превышении факта над сметой
  и при расхождениях с РД строки подсвечивались. Это позволяло заранее видеть, где появляется
  перерасход или недобор, и корректировать комплект до согласования.
  После проверки и сверок я полностью сопровождал ИД в Exon по системам объекта. Загружал
  исполнительные схемы, комплектовал паспорта и сертификаты, вел ЖВК, формировал
  перечни, создавал и вел ОЖР, формировал АОСР на основе записей ОЖР, запускал
  согласование, контролировал статусы, отрабатывал замечания и доводил до подписания.
  По объектам СС закрывал полный набор систем (в среднем около 16 систем на объект) и вел
  несколько объектов параллельно. По объекту Новогиреевская ул., д. 24А
  заказчик/генподрядчик — ООО «ДАРС-РЕНОВАЦИЯ»; по нему шло регулярное помесячное
  закрытие объёмов с последующим согласованием и подписанием. По объекту Погонный пр-д,
  влд. 13 заказчик/генподрядчик — ООО «ДАРС-РЕНОВАЦИЯ»; на фоне роста параллельной
  нагрузки по НСС и перехода Exon на контур СУИД согласование замедлялось, поэтому объект
  закрывался разовым пакетом. Комплект довёл до подписания: вопросы от заказчика
  отрабатывал, ошибки исправлял, финальные версии актуализировал. Параллельно вел объект
  2-й Лихачевский, где закрывал полный комплект по СС в Exon тем же циклом: ЖВК, ОЖР, АОСР,
  комплектование и согласование.
  Николаев Артемий • Резюме обновлено 5 августа 2026 в 08:39
  В работе по СС использовал AutoCAD (проверка и корректировка ИС), Exon (ведение ИД и
  согласования), Excel (контроль объёмов и расхождений), Word и PDF-контур (оформление и
  проверка комплектности). При необходимости применял Photoshop для подготовки и правки
  графических материалов.
  Раздел НСС — наружные сети связи (короче)
  По НСС я готовил исполнительную документацию по телефонной канализации и земляным
  работам: траншеи и котлованы под колодцы, песчаное основание, обратная засыпка, монтаж
  колодцев, прокладка труб, цементация и гидроизоляция вводов, восстановление
  благоустройства (асфальт/тротуар/газон). Для точности расчётов использовал профиль с
  геодезическими отметками КГС и данные контрольно-геодезической съёмки, чтобы считать
  глубину траншеи по фактическому профилю, а не по типовым значениям из ПОС.
  Отдельно сопровождал сдачу ИД операторам связи: собирал комплект под требования
  конкретного оператора, согласовывал с подписантами дистанционно, устранял замечания и
  организовывал очное подписание. Работал с контурами МГТС, Ростелеком, МТС, Вымпелком
  (Билайн), 2КОМ и КПМПТЦ.
  Автоматизация и улучшение процессов
  Я системно убирал ручные операции и ускорял подготовку ИД. В Excel сделал
  параметрическую таблицу для расчётов по НСС: ввод длины трассы и разбивки по покрытиям
  (асфальт/тротуар/газон) — быстрый пересчёт объёмов по видам работ. Для СС разработал
  “шахматку” объёмов по этажам с подсветкой превышений/недобора, чтобы заранее ловить
  расхождения между сметой, РД и фактом.
  Дополнительно ускорил загрузку фактических объёмов в Exon: готовил данные в Excel и
  выгружал в структурированный формат (CSV) для пакетного переноса значений, что
  сокращало время загрузки и снижало количество ошибок при внесении объёмов. Также
  развивал прототип автоматизации ввода объёмов через структурированные файлы (XML) и
  сценарии, чтобы ускорять рутинные операции и стабилизировать качество данных.
- Организация и ведение документооборота
- Предоставление отчетности руководству
- CRM система Projecto, в течении 1 недели разобрался в программе и обучал всех сотрудников
  пользоваться системой, разрабатывал шаблоны для отчётности, и визуального отображения
  состояния ИД на какой стадии находится система
  Август 2022 —
  Январь 2023
  6 месяцев
  ТОВК
  Инженер ПТО ЭОМ/АТМ/УУТЭ ИТП
  Подготовка Исполнительных схемпо разделам ЭОМ,АТМ,УУТЭ в ИТП, уточнение объёмов
  выполненных работ на объектах, фактической прокладки и последующей отрисовки
  прокладки трасс на Исполнительных схемах
  Май 2022 —
  Август 2022
  4 месяца
  АРС Строй
  Инженер ПТО ЭОМ/СС
  📄Ведение исполнительной-документации📃
  ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
  ➡️Ведомость объёма работ
  ➡️Акт освидетельствования скрытых/выполненых работ
  ➡️Работа с паспортами и сертификатами
  ➡️Ведение журналов входного контроля, общих работ
  Николаев Артемий • Резюме обновлено 5 августа 2026 в 08:39
  Владение программами:
  ➡️AutoCAD
  ➡️Photoshop
  ➡️Microsoft Word, Excel
  Декабрь 2021 —
  Май 2022
  6 месяцев
  Группа компаний ПИК
  pik-group.com
  Строительство, недвижимость, эксплуатация, проектирование
  • Строительство жилищное
  • Строительство коммерческих объектов (торговые площади, офисные здания)
  Техник ПТО/ помощник инженера ПТО
  В обязанности входят:
- фото отчеты проделанных работ, журнал общих работ;
- реестр материалов и оборудования, предоставляемых для выполнения
  работ;
- накладные (товарные, транспортные,товарно-транспортные);
- введение таблицы учёта вывоза грунта и отходов со строительной площадки
- сбор и сканирование паспортов, сертификатов на продукцию
- акты выполненных работ
  Владение программами:
- AutoCAD 2022 (2D);
- Microsoft Excel,Word;
- Google Таблицы, Документы;
- Небольшой опыт с работой в Adobe Photoshop, Illustrator.
  Образование
  Уровень Среднее образование
  Повышение квалификации, курсы
  2026 Системное взаимодействие с ИИ и промпт-инжиниринг
  AI Fluency: Framework & Foundations
  Anthropic, Интеграция и эффективное использование генеративного ИИ
  2026 Основы Claude Claude 101
  Anthropic, Базовые знания работы с Claude
  2019 Актёрское мастерство (5 месяцев)
  Оранжевое небо
  2018 Флорист
  Коломенский аграрный колледж
  Навыки
  Знание языков Русский — Родной
  Английский — A1 — Начальный
  Навыки
  Николаев Артемий • Резюме обновлено 5 августа 2026 в 08:39
  Внутренние коммуникации Пространственное мышление
  Представление информации Аналитическое мышление
  Организация рабочего времени Мотивация Сдержанность
  Пунктуальность Дисциплина Бумажный документооборот
  Тендерное сопровождение MS Excel MS Word Adobe Photoshop 2025
  MS Excel VBA MS Excel Power Query MS PowerBI AI ChatGPT AI Gemini
  AI DeepSeek AI KIMI AI Grok AI Antigravity AI Cursor
  Дополнительная информация
  Обо мне Я инженер ПТО / специалист по исполнительной документации по сетям связи (СС/НСС). Веду
  ИД принимаю материалы от подрядчика, проверяю соответствие проекту, РД и факту, довожу
  комплект до состояния «можно согласовывать», загружаю документы в Exon, сопровождаю
  согласование, закрываю замечания и довожу до подписания.
  Работаю через процесс и качество. Сначала фиксирую структуру комплекта: состав документов,
  нумерацию, страничность, единый стиль оформления. Дальше убираю слабые места: ручной
  ввод, дублирование данных, расхождения между сметой, проектом и фактом. Для меня
  аккуратность в ИД — это практичный инструмент: меньше ошибок → меньше замечаний →
  быстрее согласование → стабильная сдача.
  По СС контролирую объёмы не “в целом”, а по этажам и позициям. Для этого делал
  Excel-инструменты: сводную таблицу-«шахматку», где видно ПСД/РД/факт и сразу
  подсвечиваются превышения и недобор. Это помогает ловить проблемы до согласования, а не
  после возврата комплекта. В Exon веду полный цикл: ЖВК, ОЖР, формирование АОСР из
  записей, перечни, комплектование паспортами и сертификатами, контроль статусов и версий,
  повторные согласования при изменениях.
  По НСС работаю с расчётами и привязкой к факту: траншеи, котлованы под колодцы,
  основания, обратная засыпка, монтаж колодцев, прокладка труб, гидроизоляция,
  восстановление благоустройства. Для точности использую профили с геодезическими
  отметками и КГС-съёмку, чтобы считать глубины траншеи и объёмы по реальному профилю, а
  не по типовым значениям. Также есть опыт согласования и подписания комплектов с
  операторами связи: собираю комплект под требования оператора, отрабатываю замечания,
  организую подписание.
  Отдельно развиваю автоматизацию в рамках задач ПТО. Я не просто “делаю таблички”, а строю
  инструменты, которые снимают рутину и уменьшают ошибки. Автоматизировал сборку ИД по
  ОЗДС: единый ввод данных, автоподстановка, пересчёт страницности и сборка PDF — это
  сократило подготовку комплекта с 3–4 дней до 6–8 часов. Ускорял загрузку фактических
  объёмов в Exon за счёт подготовки структурированных наборов данных и сценариев
  автозаполнения, чтобы не забивать объёмы вручную и не ловить ошибки на строках.
  Использую Excel (advanced), Power Query, VBA, Power BI, AutoCAD, Photoshop; AI-инструменты
  применяю как ускоритель для черновиков и структурирования данных, но финальное
  качество и соответствие требованиям всегда проверяю сам.
  Николаев Артемий • Резюме обновлено 5 августа 2026 в 08:39



и второе 

это скорее только в сателе так как опыт у меня в основном складыаеться из работы в этой компании



Вот полный и дословный текст из документа без сокращений:

---

# НИКОЛАЕВ АРТЕМИЙ

### ИНЖЕНЕР ПТО / СПЕЦИАЛИСТ ПО ИСПОЛНИТЕЛЬНОЙ ДОКУМЕНТАЦИИ (СС/НСС/ЭОМ)

- 24 года
- МОСКВА, РФ
- 8 915 494 44 57
- [artyomnikolae7@gmail.com](mailto\:artyomnikolae7@gmail.com)
- @Amantle\_x
- QR: Telegram

---

### ПРОФИЛЬ

ИНЖЕНЕР ПТО ПО ИСПОЛНИТЕЛЬНОЙ ДОКУМЕНТАЦИИ.
3 ГОДА РАБОТАЮ В EXON В СУБПОДРЯДНОЙ ОРГАНИЗАЦИИ: ЗАКРЫВАЮ ИД ПО СЕТЯМ СВЯЗИ И СДАЮ КОМПЛЕКТЫ.

ВЕДЕНИЕ ИД: ИСПОЛНИТЕЛЬНЫЕ СХЕМЫ AUTOCAD, АОСР, ОЖР, ПЕРЕЧНИ РАБОТ (СП/ГОСТ/ПУЭ), КОМПЛЕКТОВАНИЕ ПАСПОРТАМИ/СЕРТИФИКАТАМИ, ЗАГРУЗКА И СОГЛАСОВАНИЕ В EXON, РАБОТА С ЗАМЕЧАНИЯМИ И ПОВТОРНЫЕ СОГЛАСОВАНИЯ.

РАЗРАБОТКА ПРОЕКТА ПРОИЗВОДСТВА РАБОТ И ТЕХНОЛОГИЧЕСКИХ КАРТ ПО НАРУЖНЫМ СЕТЯМ СВЯЗИ.

ЕСТЬ ОПЫТ ЗАГРУЗКИ ИД В SAREX.

СИЛЬНАЯ СТОРОНА — СТРУКТУРА И КАЧЕСТВО: КОНТРОЛЬ СОСТАВА И СТРАНИЧНОСТИ, ЕДИНЫЕ ШАБЛОНЫ И АККУРАТНАЯ ВЕРСТКА, ЧТОБЫ КОМПЛЕКТЫ ПРОХОДИЛИ ПРОВЕРКУ БЫСТРЕЕ И С МИНИМУМОМ ЗАМЕЧАНИЙ.

---

### СИСТЕМЫ

- **ПОЖАРНАЯ ЧАСТЬ:** СПА1, ОСО, СПАЗ
- **ДИСПЕТЧЕРИЗАЦИЯ:** АСДКИУ, АСКУВТ, АСУОД, СС.ОДС, СС.ЦИН
- **БЕЗОПАСНОСТЬ:** CBH, СКД, ВТСС, ОЗДС
- **ВИДЕОНАБЛЮДЕНИЕ**
- **УЧЁТ РЕСУРСОВ:** АСКУВТ, АИИСКУЭ
- **СВЯЗЬ / ИНТЕРНЕТ:** ШПД, СКТВ
- **АВТОМАТИКА:** АК

---

### СТАНДАРТНЫЕ НАВЫКИ И ИНСТРУМЕНТЫ

AutoCAD | Photoshop | Word | Excel | VBA | PowerQuery | PowerBI

### ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ

ChatGPT | Gemini | DeepSeek | Grok | Copilot | Antigravity | Cursor

---

# ОБЪЕКТЫ И ГЕНПОДРЯДЧИКИ

1. **Заказчик (Генеральный подрядчик): АО "МОСКАПСТРОЙ"**
   Жилой дом с инженерными сетями и благоустройством территории по адресу: г. Москва, район Бескудниковский, кв. 8,9, корпус 20 (Северный административный округ).
2. **Заказчик (Генеральный подрядчик): ООО "ДАРС-РЕНОВАЦИЯ"**
   Жилой дом с инженерными сетями и благоустройством территории (со сносом нежилого здания по адресу: ул. Новогиреевская, д. 24А) по адресу: г. Москва, внутригородское муниципальное образование Новогиреево, ул. Новогиреевская, вл. 24А (Восточный административный округ).
3. **Заказчик (Генеральный подрядчик): ООО "ДАРС-РЕНОВАЦИЯ"**
   Жилой дом с инженерными сетями и благоустройством территории по адресу: г. Москва, район Перово, 2-й проезд Перова Поля, вл. 2 (Восточный административный округ).
4. **Заказчик (Генеральный подрядчик): ООО "ДАРС-РЕНОВАЦИЯ"**
   Жилой дом с приспособлением подземной автостоянки под защитное сооружение гражданской обороны — «Укрытие» (УЗС), с инженерными сетями и благоустройством территории (со сносом многоквартирных жилых домов по адресам: Варшавское шоссе, д. 143, корп. 1, д. 143, корп. 2, д. 143, корп. 3, д. 143, корп. 4) по адресу: г. Москва, внутригородское муниципальное образование Нагорное, улица Артековская, земельный участок 7 (Южный административный округ).
5. **Заказчик (Генеральный подрядчик): ООО "ДАРС-РЕНОВАЦИЯ"**
   Жилой дом с инженерными сетями и благоустройством территории (со сносом объектов по адресам: Варшавское шоссе, д. 143, корп. 1, д. 143, корп. 2) по адресу: г. Москва, внутригородское муниципальное образование Нагорное, Варшавское шоссе, земельный участок 143/1 (участок 1.1) (Южный административный округ).
6. **Заказчик (Генеральный подрядчик): ООО "АРС-СТРОЙ"**
   Жилой дом с инженерными сетями и благоустройством территории (со сносом многоквартирных жилых домов по адресу: пос. Загорье, д. 3, д. 5) по адресу: г. Москва, район Бирюлево Восточное, ул. Загорьевская, вл. 3 (Южный административный округ).
7. **Заказчик (Генеральный подрядчик): ООО "СК КРОНОС"**
   Жилой дом с приспособлением подземной автостоянки под защитное сооружение гражданской обороны — «Укрытие» (УЗС), с инженерными сетями и благоустройством территории (со сносом жилого дома по адресу: ул. Газопровод, д. 7, корп. 1) по адресу: г. Москва, внутригородское муниципальное образование Чертаново Южное, ул. Газопровод, земельный участок 7 (участок 1.1) (Южный административный округ).
8. **Заказчик (Генеральный подрядчик): ООО "МОСРЕНСТРОЙ-6"**
   Жилой дом с приспособлением подземной автостоянки под защитное сооружение гражданской обороны — «Укрытие» (УЗС), с инженерными сетями и благоустройством территории (со сносом нежилого здания по адресу: Тайнинская улица, д. 16, корп. 3) по адресу: г. Москва, внутригородское муниципальное образование муниципальный округ Лосиноостровский, земельный участок 16/2 (Тайнинская улица, земельный участок 16/2) (Северо-Восточный административный округ).
9. **Заказчик (Генеральный подрядчик): ООО "ГСТ"**
   Жилой дом с приспособлением подземной автостоянки под защитное сооружение гражданской обороны — «Укрытие» (УЗС), с инженерными сетями и благоустройством территории (со сносом нежилого здания по адресу: Тайнинская улица, д. 16, корп. 3) по адресу: г. Москва, внутригородское муниципальное образование муниципальный округ Лосиноостровский, земельный участок 16/3 (Тайнинская улица, земельный участок 16/3) (Северо-Восточный административный округ).
10. **Заказчик (Генеральный подрядчик): ООО "ГСТ"**
    Жилой дом с инженерными сетями и благоустройством территории (со сносом жилого дома по адресу: г. Москва, ул. 3-я Фрезерная, д. 6) по адресу: г. Москва, район Нижегородский, улица 3-я Фрезерная, земельный участок 6 (Фрезерная 6) (Юго-Восточный административный округ).
11. **Заказчик (Генеральный подрядчик): ООО "ФЛЭТ И КО"**
    Жилой дом с приспособлением подземной автостоянки под защитное сооружение гражданской обороны — «Укрытие» (УЗС), с инженерными сетями и благоустройством территории (со сносом жилого дома по адресу: ул. Газопровод, д. 7, корп. 1) по адресу: г. Москва, внутригородское муниципальное образование Чертаново Южное, ул. Газопровод, земельный участок 7 (участок 1.1) (Южный административный округ).
12. **Заказчик (Генеральный подрядчик): ООО "МОНАРХ"**
    Жилой дом с подземной автостоянкой, инженерными сетями и благоустройством территории (со сносом жилого дома по адресам: ул. Гарибальди, д. 22, корп. 2, ул. Гарибальди, д. 22, корп. 3) по адресу: г. Москва, внутригородское муниципальное образование Обручевское, улица Гарибальди, земельный участок 22 (Юго-Западный административный округ).
13. **Заказчик (Генеральный подрядчик): ООО "МОНАРХ"**
    Многоквартирный жилой дом с подземным гаражом, с инженерными сетями и благоустройством территории (со сносом жилых и нежилых зданий по адресам: улица Гарибальди, дом 24, корпус 1; улица Гарибальди, дом 24, корпус 2; улица Гарибальди, дом 22, корпус 1; улица Гарибальди, дом 22, корпус 2; складской объект, улица Гарибальди, дом 24, корпус 1, строение 2) по адресу: г. Москва, внутригородское муниципальное образование Обручевское, улица Гарибальди, земельный участок 22/1 (Юго-Западный административный округ).
14. **Заказчик (Генеральный подрядчик): ООО "МОНАРХ"**
    Многоквартирный жилой дом с подземным гаражом, с инженерными сетями и благоустройством территории (со сносом жилого здания по адресу: улица Гарибальди, дом 20, корпус 1) по адресу: г. Москва, внутригородское муниципальное образование Обручевское, улица Гарибальди, земельный участок 20/1 (участок 3.1) (Юго-Западный административный округ).
15. **Заказчик (Генеральный подрядчик): АО "ТК "ЕКС"**
    Жилой дом с инженерными сетями и благоустройством территории по адресу: г. Москва, район Ярославский, Поселковая улица, земельный участок 3А (Поселковая улица, вл. 3) (Северо-Восточный административный округ).
16. **Заказчик (Генеральный подрядчик): ООО "СК КРОНОС"**
    Снос существующих строений, извлечение и перекладка инженерных коммуникаций сносимых зданий, расположенных по адресам: г. Москва, Варшавское шоссе, д. 143, корп. 1, Варшавское шоссе, д. 143, корп. 2, Варшавское шоссе, д. 143, корп. 3, д. 143, корп. 4, район Чертаново Южное (Южный административный округ).
17. **Заказчик (Генеральный подрядчик): ООО "АСГ ТЕХНО СТРОЙ"**
    Жилой дом с инженерными сетями и благоустройством территории (со сносом жилых домов по адресам: Булатниковский пр-д, д. 2В, корп. 1, Булатниковский пр-д, д. 2В, корп. 2, Булатниковский пр-д, д. 2В, корп. 3) по адресу: г. Москва, внутригородское муниципальное образование Бирюлево Западное, Булатниковский пр-д, земельный участок 2В (Булатниковский пр-д, вл. 2В, корп. 1, 2, 3) (Южный административный округ).

---

# О СЕБЕ / ПОДХОД К РАБОТЕ

Я ВЫСТРАИВАЮ РАБОТУ ЧЕРЕЗ ПРОЦЕСС И КОНТРОЛЬ КАЧЕСТВА: ФИКСИРУЮ СТРУКТУРУ КОМПЛЕКТА ИД И УБИРАЮ СЛАБЫЕ МЕСТА — РУЧНОЙ ВВОД, ДУБЛИРОВАНИЕ, РАЗНОБОЙ ШАБЛОНОВ, ОШИБКИ В СОСТАВЕ/НУМЕРАЦИИ/СТРАНИЧНОСТИ.

ДЛЯ МЕНЯ АККУРАТНОСТЬ В ИД — ЭТО ИНСТРУМЕНТ:
МЕНЬШЕ ЗАМЕЧАНИЙ → БЫСТРЕЕ СОГЛАСОВАНИЕ → СТАБИЛЬНАЯ СДАЧА.

В РАБОТЕ ВАЖНЫ ЕДИНЫЕ СТАНДАРТЫ ОФОРМЛЕНИЯ, КОРРЕКТНЫЙ СОСТАВ ДОКУМЕНТОВ И ПРОЗРАЧНЫЙ УПРАВЛЯЕМЫЙ ЦИКЛ:
СХЕМЫ → АОСР → ОЖР → ПАСПОРТА/СЕРТИФИКАТЫ → СОГЛАСОВАНИЕ → АРХИВ.

РУТИНУ СИСТЕМНО АВТОМАТИЗИРУЮ: EXCEL (ADVANCED), VBA, POWER QUERY, ПРИ НЕОБХОДИМОСТИ — POWER BI ДЛЯ АНАЛИТИКИ. ИСПОЛЬЗУЮ AI-ИНСТРУМЕНТЫ И СЦЕНАРНУЮ АВТОМАТИЗАЦИЮ.
МНЕ ПОДХОДЯТ КОМАНДЫ, ГДЕ ЦЕНЯТ СИСТЕМНОСТЬ И УЛУЧШЕНИЕ ПРОЦЕССОВ.

ДЛЯ ПРОДУКТИВНОЙ РАБОТЫ ТАКЖЕ ВАЖНО КОМФОРТНОЕ РАБОЧЕЕ МЕСТО:
2 ОДИНАКОВЫХ IPS-МОНИТОРА 24" (1920×1080)
ПК УРОВНЯ INTEL CORE I5 / I7 11TH GEN, 16–32 ГБ ОЗУ, ВИДЕОКАРТА НЕ НИЖЕ NVIDIA GEFORCE GTX 1630, И УДОБНОЕ ОФИСНОЕ КРЕСЛО.

---

# ОБРАЗОВАНИЕ

АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ВЫСШЕГО ОБРАЗОВАНИЯ «МОСКОВСКИЙ ГУМАНИТАРНО-ТЕХНОЛОГИЧЕСКИЙ УНИВЕРСИТЕТ — МОСКОВСКИЙ АРХИТЕКТУРНО-СТРОИТЕЛЬНЫЙ ИНСТИТУТ (МГТУ-МАСИ)», Г. МОСКВА

ВЫСШЕЕ ОБРАЗОВАНИЕ — БАКАЛАВРИАТ
НАПРАВЛЕНИЕ ПОДГОТОВКИ: 08.03.01 СТРОИТЕЛЬСТВО
ПРОФИЛЬ (НАПРАВЛЕННОСТЬ ПРОГРАММЫ): ПРОМЫШЛЕННОЕ И ГРАЖДАНСКОЕ СТРОИТЕЛЬСТВО
КВАЛИФИКАЦИЯ: БАКАЛАВР
ФОРМА ОБУЧЕНИЯ: ОЧНО-ЗАОЧНАЯ

ДАТА ВЫДАЧИ ДИПЛОМА: 17 ЯНВАРЯ 2026

---

# КЕЙСЫ

### КЕЙС 1

**Расчётная таблица для землекопов**

- **Проблема:**
  Постоянные сложности с учётом работ и времени: данные разрознены, ручной контроль, ошибки и потеря прозрачности по объектам.
- **Инструменты:**
  Excel (расчёты/структура), Power Query (подтяжка данных из источников), формулы/сводная логика.
- **Какая работа проделана:**
  • Собрал единую структуру учёта по 17 объектам.
  • Подвязал данные из других источников через Power Query, настроил обновление.
  • Сделал ежедневный учёт: кто/когда/сколько работал, с возможностью быстро сводить по объектам.
- **Чего получилось добиться:**
  Убрал ручной "хаос" и сделал прозрачную систему контроля выработки по каждому объекту.
- **Результат:**
  Единая таблица, которая быстро обновляется, снижает ошибки и экономит время руководителя/ПТО на сверках.

---

### КЕЙС 2

**Генератор ИД по ОЗДС (ускорение до 6-8 часов)**

- **Проблема:**
  ОЗДС — повторяющийся пакет ИД, который вручную собирался 3-4 дня: много однотипных документов, высокий риск ошибок в данных, составе и страничности.
- **Инструменты:**
  Excel (шаблоны/формулы), VBA (кнопка/сборка), логика реестра, автоподсчёт страниц, генерация PDF.
- **Какая работа проделана:**
  • Сделал "единый ввод": данные вводятся в одном месте и автоматически подставляются во все документы.
  • Автоматизировал формирование АОСР и части комплекта по шаблонам.
  • Добавил блок паспортов/сертификатов: указание в форме → включение в комплект.
  • Реализовал автопересчёт страниц и корректную логическую пересборку, если документ удалён "из середины".
  • Сделал формирование PDF полного комплекта одной кнопкой.
- **Чего получилось добиться:**
  Сборка комплекта стала управляемой, быстрой и стабильной по качеству (структура/нумерация/страницы).
- **Результат:**
  Сократил подготовку комплекта ИД по ОЗДС с 3-4 дней до 6-8 часов, снизил ручные ошибки и ускорил сдачу.

---

### КЕЙС 3

**Сводная по объёмам внутренних сетей (факт/проект)**

- **Проблема:**
  Трудно быстро понять "что реально выполнено" по внутренним системам: объёмы разбросаны по ИД/этажам, сложно сравнить с проектом и фиксировать превышения/недобор.
- **Инструменты:**
  Excel (структура, сводные, формулы), при необходимости Power Query (если источники обновляются).
- **Какая работа проделана:**
  • Построил таблицу "система → этаж → объём → единицы → факт".
  • Добавил отдельную колонку проектного объёма.
  • Настроил сравнение факт/проект с фиксацией отклонений (перерасход/недобор).
  • Сделал формат, удобный для контроля и передачи руководителю/ПТО.
- **Чего получилось добиться:**
  Появилась прозрачность по объёмам в разрезе этажей и систем + контроль отклонений.
- **Результат:**
  Быстрый контроль выполнения работ, меньше спорных моментов по объёмам и проще закрывать ИД/объёмы.

---

### КЕЙС 4

**Прототип табеля рабочего времени + аналитика в Power BI**

- **Проблема:**
  Нет удобного способа видеть, чем заняты сотрудники, где "время уходит", какие системы закрываются быстрее/медленнее и как это сравнить между объектами.
- **Инструменты:**
  Excel (ввод/структура), формулы/автосвод, Power BI (дашборды), выгрузка данных, фильтры.
- **Какая работа проделана:**
  • Собрал табель: сотрудник → объект → система → руководитель проекта → часы → комментарий/работы.
  • Автоматизировал расчёт статистики и подготовку данных для Power BI.
  • Настроил дашборды: сравнение по объектам/системам/людям, скорость закрытия, фильтры.
- **Чего получилось добиться:**
  Руководитель видит картину загрузки и эффективности, можно принимать решения по распределению задач.
- **Результат:**
  Готовая база для управленческой аналитики и презентаций: "кто, куда и сколько времени", плюс сравнение скорости закрытия систем.

---

### КЕЙС 5

**Таблица расчётов НСС (телефонная канализация) + связка с AutoCAD**

- **Проблема:**
  Расчёт объёмов по НСС часто пересчитывается вручную при изменении трассы/параметров. Это долго, легко ошибиться, а изменения в AutoCAD требуют повторной ручной правки.
- **Инструменты:**
  Excel (формулы/расчёты/параметры), связка с AutoCAD (обновляемые данные/вставки).
- **Какая работа проделана:**
  • Создал таблицу расчётов объёмов для телефонной канализации.
  • Настроил параметрическую логику: меняются длина/ширина/условия → всё пересчитывается автоматически.
  • Организовал передачу данных в AutoCAD, чтобы значения обновлялись вместе с расчётом.
- **Чего получилось добиться:**
  Изменения перестали быть "болью": корректировки делаются быстро и без каскада ошибок.
- **Результат:**
  Быстрее пересчёт объёмов и актуализация чертежей, меньше ручной работы и стабильнее качество схем/ИД.

---

### КЕЙС 6

**Автоматизация загрузки объёмов Исполнительных схем в Exon**

- **Проблема:**
  В Exon объёмы работ часто приходится вносить вручную: много позиций, повторяющиеся действия, высокий риск ошибок (не тот объём/единица, пропуск строки), плюс это отнимает много времени при закрытии объёмов и подготовке ИД.
- **Инструменты:**
  JavaScript (логика автоматизации), прототип браузерного расширения / скрипт для браузера, входные данные в структурированном виде (XML, при необходимости выгрузка/подготовка из Excel).
- **Какая работа проделана:**
  • Проанализировал интерфейс Exon и последовательность действий пользователя при добавлении фактического объёма.
  • Сформировал структуру данных: "позиция → объём → единица измерения" в виде XML, чтобы можно было быстро готовить наборы на разные объекты/системы.
  • Реализовал автозаполнение полей по очереди: скрипт проходит по позициям, вставляет объём/единицу и выполняет нужные клики (добавить/сохранить) для каждой строки.
  • Заложил устойчивость к типовым сбоям: проверка наличия поля/кнопки, повтор клика, переход к следующей позиции, контроль того, что данные реально применились.
- **Чего получилось добиться:**
  Снял основную рутину с ручного ввода: процесс стал быстрее и предсказуемее, а количество ошибок "человеческого фактора" снизилось (пропуски, неверные значения, путаница единиц).
- **Результат:**
  Рабочий прототип автоматизации, который ускоряет загрузку фактических объёмов в Exon и даёт основу для развития в полноценное расширение (наборы объёмов по объектам/системам, повторное применение, логирование ошибок).

---

**Assistant:**

Да. Теперь картина стала гораздо яснее, и это **существенно меняет мой предыдущий аудит**.

Главная проблема действительно не в том, что у тебя «выдуманные достижения». Проблема в том, что ИИ **смешал реальные факты из резюме, сделал выводы и превратил их в маркетинговые утверждения**, причём иногда уже вышел за границы того, что можно подтвердить.

И это очень хорошо исправляется.

## Что у тебя на самом деле сильного

У тебя есть вполне убедительная профессиональная история:

**2021 → сейчас: около 4 лет 9 месяцев опыта** на август 2026 года.

При этом:

- **Сател — около 3 лет** и это действительно основной массив профессионального опыта;
- специализация — **ИД по СС/НСС**, а не абстрактный «инженер ПТО по всему»;
- есть реальная работа с **Exon**;
- есть реальная работа с **AutoCAD**;
- есть **Excel / VBA / Power Query / Power BI**;
- есть конкретные рабочие автоматизации;
- есть **17 объектов**, перечисленных в документе;
- есть реальные кейсы по автоматизации;
- с марта 2026 года появился ещё один интересный слой — **AI и автоматизация обработки строительной документации**.

Вот это уже хороший профиль.

Но сайт сейчас делает из него нечто вроде:

> «Я руководитель группы, автоматизатор, frontend-разработчик, AI engineer, специалист по всему ПТО, закрыл 17 объектов без замечаний, сделал 500 АОСР и изменил строительную отрасль».

Именно это я бы убрал.

---

# 1. Теперь понятно, откуда взялись «17 объектов»

Это важное уточнение.

**17 объектов — реальная цифра**, потому что у тебя действительно есть отдельный список из 17 объектов.

Но на сайте написано:

> **17+ сданных объектов**

Это уже немного другое утверждение.

Потому что в исходном документе указано:

> 17 объектов и генподрядчиков/заказчиков, с которыми ты работал.

А это не автоматически означает:

> «17 объектов полностью сданы мной под ключ».

Поэтому я бы написал:

### Вариант 1 — безопасный

> **17 объектов в опыте работы**

### Вариант 2 — если действительно все 17 были закрыты тобой

> **17 объектов с опытом ведения ИД**

### Вариант 3 — наиболее сильный, но только при подтверждении

> **Участвовал в подготовке и сдаче ИД по 17 объектам**

Так ты не теряешь цифру, но не создаёшь лишнего обещания.

---

# 2. С «3+ лет» сайт сейчас вообще устарел

Судя по твоему актуальному резюме:

- декабрь 2021 — первая указанная работа;
- март 2026 — текущая работа;
- август 2026 — сегодня.

Это около **4 лет 9 месяцев**.

Поэтому:

> «Более 3 лет»

уже неактуально.

Но я бы даже не писал:

> **5 лет опыта**

Потому что лучше быть немного консервативным.

Например:

> **4+ года в ПТО**

или:

> **4 года 9 месяцев профессионального опыта**

На сайте можно просто:

> **4+ года в ПТО**

---

# 3. А вот «с 2020 года в отрасли» надо убрать

Вот здесь ИИ действительно **додумал**.

В актуальном резюме:

> Декабрь 2021 — ПИК — техник ПТО / помощник инженера ПТО.

То есть по предоставленным тобой данным профессиональная история начинается в **декабре 2021**, а не в 2020.

В старом сайте:

> 2020 — старт карьеры в ПТО

Это сейчас не подтверждается.

Это один из примеров, где ИИ сделал очень типичную ошибку:

**он увидел последовательность и достроил красивую биографию.**

Такое на профессиональном сайте лучше не оставлять.

---

# 4. Вот где ИИ уже реально «перехайпил» тебя

Я бы провёл по твоему текущему сайту красную линию.

### Убрать / изменить:

> **«Сдаю исполнительную документацию без замечаний»**

Нет подтверждения абсолюту.

---

> **«100% Закрытие ИД»**

Неясно, что именно означает 100%.

---

> **«2% замечания»**

Можно использовать, **если у тебя действительно есть исходные данные**, из которых этот показатель посчитан.

Иначе убрать.

---

> **«0% замечаний»**

Убрать.

---

> **«Параллельное ведение 12+ объектов строительства без единого замечания технадзора»**

Убрать абсолютное утверждение.

Можно:

> **Параллельно вел несколько объектов и контролировал комплектность, объёмы и замечания ИД.**

---

> **«500+ АОСР»**

Вот это потенциально реальная цифра, но нужно понимать, откуда она взялась.

Если ты реально сформировал/проверил больше 500 АОСР за весь период — оставить.

Если это оценка ИИ из количества объектов и систем — убрать.

---

# 5. А вот некоторые цифры у тебя очень хорошие и их стоит сохранить

### 3–4 дня → 6–8 часов

Это хороший кейс.

Причём он **прямо есть в исходном резюме**:

> автоматизация сборки ИД по ОЗДС.

Оставляем.

---

### 300 файлов → около 10 часов ручной обработки

Тоже есть в свежем резюме.

И это вообще сейчас может стать **одним из главных кейсов сайта**, потому что это уже другой уровень автоматизации.

---

### 450 позиций → автоматизация ввода в Exon

У тебя есть такое описание в кейсе.

Это сильный материал.

Но я бы не писал:

> **«450 позиций за 3 минуты»**

если это не измеренный стабильный результат.

Лучше:

> **Автоматизация массового ввода объёмов в Exon**

и внутри:

> Прототип позволяет обрабатывать большие наборы позиций без последовательного ручного ввода.

Если 450/3 минуты реально измерено — тогда можно дать конкретную цифру.

---

# 6. И вот это я бы теперь добавил на сайт обязательно

## Твой текущий опыт в Хго Инжиниринг

Это сейчас **вообще потеряно** в текущей версии сайта.

А ведь у тебя появляется очень сильное новое направление:

### AI + ПТО + обработка документов

Ты написал:

> паспорта  
> сертификаты  
> отказные письма  
> сканы  
> извлечение данных  
> сопоставление со спецификацией  
> массовая обработка  
> переименование  
> validation

Это **не надо превращать в «AI engineer»**.

Но это очень хорошее продолжение твоего позиционирования:

> **Инженер ПТО, который умеет автоматизировать документооборот.**

И это гораздо интереснее, чем просто:

> Excel / AutoCAD / Exon.

---

# 7. Фактически у тебя уже вырисовывается отличная профессиональная формула

Я бы сформулировал её так:

### Инженер ПТО → ИД → автоматизация

То есть:

```text
СТРОИТЕЛЬСТВО
       ↓
     ПТО
       ↓
Исполнительная
документация
       ↓
СС / НСС
       ↓
ЦИФРОВИЗАЦИЯ
       ↓
Excel / VBA / Power Query
       ↓
Exon / JS
       ↓
AI / обработка документов
```

Вот это **очень хорошая история для работодателя**.

---

# 8. Причём Сател действительно должен быть центральным кейсом

Ты абсолютно правильно сказал:

> «это скорее только в Сателе так как опыт у меня в основном складывается из работы в этой компании»

Именно так сайт и должен это показывать.

Не:

> «Работал на 17 объектах различных компаний»

а:

### Основной профессиональный опыт

**ООО «Сател» — Инженер ПТО / ИД СС и НСС**

**2023–2026**

И дальше:

```text
СС
НСС
Exon
ВОР
АОСР
ОЖР
Паспорта / сертификаты
AutoCAD
Excel
Автоматизация
```

А затем:

### Отдельные объекты

17 объектов.

Тогда становится понятно:

> это не 17 компаний и 17 должностей.

Это **один основной период работы и проекты внутри него**.

---

# 9. Вот как я бы теперь пересобрал твою профессиональную историю

Не так:

```text
Я работал в ПИК
потом АРС
потом ТОВК
потом Сател
потом Хго
```

А так:

```text
                 АРТЕМИЙ
                  НИКОЛАЕВ
                     │
              ИНЖЕНЕР ПТО
                     │
         ┌───────────┴───────────┐
         │                       │
       ИД СС                    ИД НСС
         │                       │
     Exon / ВОР             расчёты / схемы
         │                       │
         └───────────┬───────────┘
                     │
                АВТОМАТИЗАЦИЯ
                     │
        ┌────────────┼────────────┐
        │            │            │
      Excel         VBA          JS
        │            │            │
   Power Query     AutoCAD      Exon
                     │
                     ▼
                    AI
```

Это гораздо сильнее обычного хронологического резюме.

---

# 10. Сайт должен показывать два уровня твоей карьеры

Это я считаю сейчас главным изменением.

## Направление №1

### Инженер ПТО / ИД

Твои реальные строительные компетенции:

- СС;
- НСС;
- ЭОМ — как дополнительный опыт;
- исполнительные схемы;
- АОСР;
- ОЖР;
- ВОР;
- паспорта/сертификаты;
- Exon;
- Sarex;
- ППР;
- технологические карты;
- взаимодействие с заказчиком/генподрядчиком/операторами.

## Направление №2

### Автоматизация ПТО

- Excel;
- VBA;
- Power Query;
- Power BI;
- AutoCAD automation;
- JavaScript;
- структурированные данные;
- AI;
- обработка документов.

Вот это **два столпа сайта**.

---

# 11. А вот frontend я бы вообще убрал из основного позиционирования

Это интересный момент.

У тебя сайт сам построен на:

> React / TypeScript / Vite

Но работодателю на должность инженера ПТО это **не должно быть одной из центральных компетенций**.

Можно оставить в конце:

### Дополнительно

> Создаю собственные web-инструменты для визуализации и автоматизации рабочих процессов.

Вот и всё.

Так React становится **доказательством твоей инициативности и цифровой грамотности**, а не создаёт вопрос:

> «Он инженер ПТО или хочет стать frontend-разработчиком?»

---

# 12. Отдельно: блок AI сейчас можно сделать намного умнее

Сейчас:

> ChatGPT  
> Gemini  
> DeepSeek  
> Grok  
> Copilot  
> Antigravity  
> Cursor

Это выглядит как **AI-коллекционирование**.

Работодателю от этого мало пользы.

Гораздо лучше:

### AI в рабочих процессах

**Обработка технической документации**

> Разработка пайплайнов для извлечения данных из сканов паспортов, сертификатов и сопроводительной документации с последующим сопоставлением с проектными спецификациями.

И ниже:

```text
OpenAI
Gemini
NotebookLM
Codex
Cursor / Antigravity
```

Так AI становится **инструментом решения задачи**, а не списком модных названий.

---

# 13. Ещё одна важная вещь — твоя история с ПИК / АРС / ТОВК

Не надо их выбрасывать.

Они показывают **эволюцию**.

Например:

```text
2021
Техник / помощник ПТО
↓
2022
Инженер ПТО
↓
2022–2023
ЭОМ / АТМ / УУТЭ / СС
↓
2023–2026
СС / НСС
↓
2026
AI + автоматизация документооборота
```

И получается очень хорошая линия:

> **от исполнительной документации → к систематизации → к автоматизации.**

Вот это уже история развития специалиста.

---

# 14. И знаешь что? Твой сайт сейчас рассказывает не ту историю

Сейчас он рассказывает:

> **«Посмотрите, сколько у меня всего».**

А на основе твоего реального резюме можно рассказать намного интереснее:

> **«Я пришёл в ПТО с работы с документацией и AutoCAD, постепенно перешёл к полноценному ведению ИД по СС/НСС, затем начал автоматизировать рутинные процессы, а сейчас применяю AI и программные инструменты для обработки технической документации».**

Это уже **карьерная траектория**.

---

# 15. И я бы теперь сделал сайт примерно таким

```text
01
HERO
Инженер ПТО
ИД / СС / НСС / Автоматизация

02
PROFILE
Кто я и чем занимаюсь

03
EXPERTISE
Что именно умею

04
WORKFLOW
Как проходит закрытие ИД

05
SATEL
Главный опыт
2023–2026

06
PROJECTS
17 объектов

07
CASE STUDIES
6 реальных кейсов автоматизации

08
AI DOCUMENT PIPELINE
Текущий опыт 2026

09
TOOLS
Excel / VBA / AutoCAD / Exon / JS / AI

10
EXPERIENCE
Хронология

11
EDUCATION
ПГС / МГТУ-МАСИ

12
CONTACT
Связь / резюме
```

И всё.

Не 25 секций.

---

## И ещё одна важная мысль

Тебе **не нужно стыдиться старого сайта**.

На самом деле исходные данные у тебя намного лучше, чем то, что из них сделал ИИ.

ИИ сделал из нормального инженерного профиля **перегруженный псевдо-portfolio landing page**.

А задача следующей версии — не придумать тебе крутой образ, а сделать наоборот:

> **убрать всё, что ИИ добавил ради эффекта, и очень хорошо показать то, что ты действительно делал.**

И тогда сайт станет **намного убедительнее**.

Причём я бы теперь сохранил абсолютно всё подтверждаемое из твоего резюме и второго документа, а затем провёл по каждому факту три статуса:

**✅ подтверждено твоими материалами**  
**⚠️ можно использовать только с уточнением формулировки**  
**❌ убрать как AI-интерпретацию / неподтверждённый факт**

После этого уже имеет смысл переписывать контент и дизайн.

---

**User:**

супер!!!!!!!!!

хотел бы ополнить свои кейсы и уточнить детали, думаю это поможет я хочу сделать блок с кейчасми и попробовать их визуализировать к примеру для того чтобы визуально человек увидел работу чего либо я сделаю видео и нужен bento grid или подобное чтобы работодатели могли посмотреть на работу моих инструментов

начну с недавнего работы с помощью эксель

power qwery

let
// 1. ОПРЕДЕЛЯЕМ ФУНКЦИЮ
fnProcessSystem = (SourceTable as table, FactsTable as table, SystemName as text) =>
let
// Группируем ТОЛЬКО по наименованию
\#"Сгруппированные строки" = Table.Group(SourceTable, {"Наименование и техническая характеристика"},
{
{"Количество", each List.Sum([#"Количество"]), type number},
{"AllData", each \_, type table}
}),

```
    // ДОБАВЛЯЕМ СТОЛБЦЫ ПОСЛЕ ГРУППИРОВКИ (восстанавливаем структуру)
    #"Добавление столбцов после группировки" = Table.AddColumn(#"Сгруппированные строки", "Восстановленные данные", each 
        [
            SN = Text.Combine(List.Distinct(List.Transform([AllData][SN], each Text.From(_))), ", "),
            Unit = List.First([AllData][#"Ед. изм"]),
            Section = List.First([AllData][#"Раздел "])
        ]),
    #"Развертка данных" = Table.ExpandRecordColumn(#"Добавление столбцов после группировки", "Восстановленные данные", {"SN", "Unit", "Section"}, {"SN", "Ед. изм", "Раздел "}),
    #"Удаление AllData" = Table.RemoveColumns(#"Развертка данных", {"AllData"}),
    
    // Индикаторы дублей
    #"Добавлен Счётчик SN" = Table.AddColumn(#"Удаление AllData", "Кол-во SN", each List.Count(Text.Split([SN], ", "))),
    #"Добавлен Статус Дубля" = Table.AddColumn(#"Добавлен Счётчик SN", "Контроль дублей", each if [#"Кол-во SN"] > 1 then "ПРОВЕРИТЬ" else "ОК"),
    
    // Подготовка к соединению
    #"Тип 1" = Table.TransformColumnTypes(#"Добавлен Статус Дубля", {{"Наименование и техническая характеристика", type text}}),
    #"Тип 2" = Table.TransformColumnTypes(FactsTable, {{"Наименование и техническая характеристика", type text}}),

    // Изолированное Fuzzy Join внутри системы
    Источник = Table.FuzzyNestedJoin(#"Тип 1", {"Наименование и техническая характеристика"}, #"Тип 2", {"Наименование и техническая характеристика"}, "ВтораяТаблица", JoinKind.FullOuter, [IgnoreCase=true, IgnoreSpace=true, Threshold=0.995]),
    
    // Развертка и расчеты
    #"Развернутый элемент" = Table.ExpandTableColumn(Источник, "ВтораяТаблица", {"Наименование и техническая характеристика", "Ед. изм", "Стало"}, {"Наименование (из Объемов)", "Ед. изм (из Объемов)", "Стало"}),
    #"Добавлен пользовательский объект" = Table.AddColumn(#"Развернутый элемент", "Разница", each (if [Количество] = null then 0 else [Количество]) - (if [Стало] = null then 0 else [Стало])),
    #"Добавлен пользовательский объект1" = Table.AddColumn(#"Добавлен пользовательский объект", "Статус", each if [Разница] = 0 then "Закрыто" else if [Разница] > 0 then "Превышение объемов" else "Не смонтировано"),
    #"Добавлен столбец Системы" = Table.AddColumn(#"Добавлен пользовательский объект1", "Система", each SystemName),
    
    // Финальный порядок колонок
    #"Упорядоченные столбцы" = Table.ReorderColumns(#"Добавлен столбец Системы", {"Система", "Контроль дублей", "Кол-во SN", "SN", "Раздел ", "Наименование и техническая характеристика", "Ед. изм", "Количество", "Стало", "Разница", "Статус"})
in
    #"Упорядоченные столбцы",

// 2. ВЫЗОВ ДЛЯ ВСЕХ СИСТЕМ
СписокСистем = {
    fnProcessSystem(ЭМ1_1, #"ЭМ1_1 (2)", "ЭМ1.1"),
    fnProcessSystem(ЭМ1_2, #"ЭМ1_2 (2)", "ЭМ1.2"),
    fnProcessSystem(ЭМ1_3, #"ЭМ1_3 (2)", "ЭМ1.3"),
    fnProcessSystem(ЭО, #"ЭО (2)", "ЭО"),
    fnProcessSystem(СКС, #"СКС (2)", "СКС"),
    fnProcessSystem(СОТ, #"СОТ (2)", "СОТ"),
    fnProcessSystem(АВТ, #"АВТ (2)", "АВТ"),
    fnProcessSystem(АОВ, #"АОВ (2)", "АОВ"),
    fnProcessSystem(АПС, #"АПС (2)", "АПС"),
    fnProcessSystem(АСУПР, #"АСУПР (2)", "АСУПР"),
    fnProcessSystem(ДСП, #"ДСП (2)", "ДСП"),
    fnProcessSystem(КЛ, #"КЛ (2)", "КЛ"),
    fnProcessSystem(МГН, #"МГН (2)", "МГН"),
    fnProcessSystem(ОЗДС, #"ОЗДС (2)", "ОЗДС"),
    fnProcessSystem(ПТ, #"ПТ (2)", "ПТ"),
    fnProcessSystem(РФ, #"РФ (2)", "РФ"),
    fnProcessSystem(СКУД_ОС, #"СКУД_ОС (2)", "СКУД_ОС"),
    fnProcessSystem(СОУЭ, #"СОУЭ (2)", "СОУЭ"),
    fnProcessSystem(СПА, #"СПА (2)", "СПА"),
    fnProcessSystem(ЭМ2, #"ЭМ2 (2)", "ЭМ2")
},

// 3. ОБЪЕДИНЕНИЕ
ОбщаяТаблица = Table.Combine(СписокСистем),
#"Переупорядоченные столбцы" = Table.ReorderColumns(ОбщаяТаблица,{"Система", "Контроль дублей", "Кол-во SN", "SN", "Раздел ", "Наименование и техническая характеристика", "Ед. изм", "Количество", "Наименование (из Объемов)", "Ед. изм (из Объемов)", "Стало", "Разница", "Статус"})
```

in
\#"Переупорядоченные столбцы"



это сводная таблица поиск коллизий между рабоче и проектной документацией

я попробую закинуть тебе таблицу, и я хочу её отобразить на сайте как-нибудь, скорее как элемент таблица, 

 1162 позиции получилось это объект из хго инжиниринг работа была на объекте строитльсва Детско-взрослая поликлиника на 750 посещений в смену с 

детским и взрослым травмпунктами, женской консультацией и

стоматологией, р-н Некрасовка




---

**Assistant:**

Да, это уже гораздо сильнее. Здесь есть не просто «таблица Excel», а полноценный инженерный кейс: **сведение данных, нормализация, fuzzy-сопоставление и автоматический контроль расхождений по 20 системам**.

---

**Assistant:**

Именно такие кейсы нам и нужны для новой версии сайта. Этот уже можно превратить не в обычную карточку «Excel + Power Query», а в **интерактивный инженерный кейс**, где человек буквально видит, какую проблему ты решал.

## Я бы сохранил этот кейс как отдельный flagship case

### Рабочее название

**Контроль объёмов и поиск расхождений между РД и фактом**

Подзаголовок:

> Power Query-сводка по 20 инженерным системам с автоматическим сопоставлением позиций, контролем дублей и выявлением расхождений в объёмах.

И сразу факты:

```text
1 162 позиции
20 систем
Power Query
Fuzzy matching
Контроль дублей
Факт ↔ РД
```

Объект:

> **Детско-взрослая поликлиника на 750 посещений в смену  
> с детским и взрослым травмпунктами, женской консультацией и стоматологией, район Некрасовка**

Компания/период:

> **ХГО Инжиниринг · 2026**

Это уже выглядит как настоящий профессиональный кейс.

---

# Что на самом деле делает твой код

И вот здесь очень важно: **не надо показывать работодателю весь M-код сразу**.

Сам код довольно хорошо раскрывает логику твоей работы.

По сути у тебя pipeline:

```text
РАБОЧАЯ ДОКУМЕНТАЦИЯ
        │
        ├── ЭМ1.1
        ├── ЭМ1.2
        ├── ЭМ1.3
        ├── ЭО
        ├── СКС
        ├── СОТ
        ├── АВТ
        ├── АОВ
        ├── АПС
        ├── АСУПР
        ├── ДСП
        ├── КЛ
        ├── МГН
        ├── ОЗДС
        ├── ПТ
        ├── РФ
        ├── СКУД_ОС
        ├── СОУЭ
        ├── СПА
        ├── ЭМ2
        └── ...
                ↓
          НОРМАЛИЗАЦИЯ
                ↓
        ГРУППИРОВКА ПО ПОЗИЦИЯМ
                ↓
          КОНТРОЛЬ ДУБЛЕЙ
                ↓
       FUZZY СОПОСТАВЛЕНИЕ
                ↓
      РД ↔ ФАКТИЧЕСКИЕ ОБЪЁМЫ
                ↓
           РАСЧЁТ РАЗНИЦЫ
                ↓
            СТАТУС
```

И это уже совсем другой уровень описания, чем:

> «Сделал сводную таблицу в Excel».

---

# Особенно интересен вот этот момент

Ты используешь:

```text
Table.FuzzyNestedJoin
Threshold = 0.995
IgnoreCase = true
IgnoreSpace = true
```

То есть сопоставление не строится исключительно на тупом:

> `строка A = строка B`

А есть **fuzzy matching** с очень высоким порогом совпадения.

Для технической аудитории это отличный момент.

На сайте можно показать маленькую визуализацию:

```text
РД
"Кабель ВВГнг-LS 5x16"

        ↕ 99.5%+

Факт
"Кабель ВВГнг-LS 5 × 16"
```

↓

**Совпадение найдено**

И рядом:

> Нормализуется не только значение, но и контекст позиции.

Это уже показывает не просто знание Excel, а **понимание структуры данных и автоматизации контроля**.

---

# А контроль дублей вообще нужно вынести отдельно

У тебя есть:

```text
Кол-во SN
Контроль дублей
```

И логика:

```text
1 SN → ОК
>1 SN → ПРОВЕРИТЬ
```

Это прекрасный маленький визуальный блок.

Например:

### Контроль уникальности

```text
SN 00124
Наименование
Кабель ...

Найдено:
3 совпадающих SN

⚠ ПРОВЕРИТЬ
```

А рядом:

```text
SN 00125
1 совпадение

✓ ОК
```

Это очень наглядно показывает **контроль качества данных**.

---

# И ещё сильнее — твой финальный статус

Ты вычисляешь:

```text
Разница = Количество - Стало
```

и затем:

```text
Разница = 0
    ↓
ЗАКРЫТО

Разница > 0
    ↓
ПРЕВЫШЕНИЕ ОБЪЁМОВ

Разница < 0
    ↓
НЕ СМОНТИРОВАНО
```

Вот это **прямо готовый UI-компонент для сайта**.

---

# Я бы вообще сделал этот кейс интерактивным

Не просто:

> Кейс 01 → текст.

А:

```text
┌──────────────────────────────────────────────────┐
│  КЕЙС 01                                         │
│                                                  │
│  КОНТРОЛЬ ОБЪЁМОВ РД ↔ ФАКТ                    │
│                                                  │
│  1 162 позиции   20 систем   Power Query         │
│                                                  │
│  [Открыть демонстрацию]                          │
└──────────────────────────────────────────────────┘
```

После клика:

---

## 01. Задача

```text
Несколько источников
        ↓
разные названия
        ↓
дубликаты
        ↓
разные объёмы
        ↓
сложно проверить вручную
```

---

## 02. Что сделал

Большая горизонтальная схема:

```text
РД
 │
 ▼
20 исходных таблиц
 │
 ▼
fnProcessSystem()
 │
 ├── Group
 ├── Sum
 ├── Normalize
 ├── Duplicate check
 └── Fuzzy Join
 │
 ▼
Единая таблица
 │
 ▼
1162 позиции
```

---

## 03. Интерактивная таблица

Вот тут твоя идея с таблицей — **очень правильная**.

Я бы не пытался выводить все 1162 строки сразу.

Показываем:

```text
1 162 позиции
20 систем

Фильтр: [Все системы ▼]
Статус: [Все ▼]
Поиск: [____________]

┌────────┬───────────────┬────────┬────────┬────────────┐
│ Система│ Позиция       │ РД     │ Факт   │ Статус     │
├────────┼───────────────┼────────┼────────┼────────────┤
│ ЭМ1.1  │ Кабель ...    │ 120    │ 120    │ ✓ Закрыто  │
│ ЭО     │ Кабель ...    │ 80     │ 72     │ ⚠ Остаток  │
│ СОТ    │ Кабель ...    │ 35     │ 41     │ ! Превышен │
│ СКС    │ ...           │ ...    │ ...    │ ...        │
└────────┴───────────────┴────────┴────────┴────────────┘
```

При клике на строку раскрывается:

```text
Наименование в РД
↓
Найденное совпадение
↓
SN
↓
Ед. изм.
↓
Количество
↓
Факт
↓
Разница
↓
Статус
```

Это будет гораздо сильнее любого видео.

---

# А видео я бы использовал в другом месте

Ты написал очень правильную вещь:

> «для того чтобы визуально человек увидел работу чего-либо я сделаю видео»

Да.

Но видео не должно заменять интерфейс.

### Идеальный вариант:

```text
        CASE STUDY
             │
      ┌──────┴──────┐
      │             │
   VIDEO         INTERACTIVE
      │             │
  показать        дать
  процесс        попробовать
```

Например:

### Видео 30–60 секунд

Запись экрана:

```text
исходные файлы
     ↓
Power Query
     ↓
refresh
     ↓
1162 строки
     ↓
фильтр
     ↓
расхождения
```

А ниже:

### Попробовать самому

Интерактивная таблица с **обезличенным demo dataset**.

Это идеальная связка.

---

# Bento Grid здесь тоже отлично подходит

Причём я бы не делал одинаковые карточки.

Например:

```text
┌───────────────────────────┬────────────────┐
│                           │                │
│   1 162                   │   20           │
│   позиции                 │   систем       │
│                           │                │
├───────────────────────────┼────────────────┤
│                           │                │
│   WORKFLOW                │  MATCHING      │
│                           │                │
│   РД → Факт → Статус      │  99.5%         │
│                           │  threshold     │
├───────────────────────────┴────────────────┤
│                                             │
│        INTERACTIVE DATA TABLE              │
│                                             │
│        1 162 positions                     │
│                                             │
├───────────────────────────┬─────────────────┤
│                           │                 │
│       VIDEO               │  RESULT         │
│       ▶ 0:47              │  Контроль       │
│                           │  расхождений    │
└───────────────────────────┴─────────────────┘
```

Вот это уже будет выглядеть как **case study технологического специалиста**, а не как резюме инженера.

---

# Но самое важное — честно показать, что ты делал

Я бы написал описание примерно так:

> **Задача:** свести данные из нескольких таблиц рабочей документации и сопоставить их с фактическими объёмами.
>
> **Что сделал:** разработал функцию Power Query для обработки отдельных систем, нормализации данных, группировки позиций, контроля дублей и fuzzy-сопоставления с таблицей фактических объёмов. После обработки данные объединяются в единую таблицу с расчётом отклонений и автоматической классификацией статуса.
>
> **Результат:** сформирована единая контрольная таблица по 20 системам и 1 162 позициям, позволяющая быстро находить расхождения между проектными и фактическими объёмами.

Это гораздо сильнее, чем:

> «Создал сводную таблицу».

---

# И я бы добавил отдельную маленькую секцию

## Что здесь автоматизировано?

```text
✓ Объединение систем
✓ Группировка позиций
✓ Суммирование объёмов
✓ Контроль дублей
✓ Fuzzy matching
✓ Сопоставление РД / факта
✓ Расчёт отклонений
✓ Классификация статусов
✓ Единый результат
```

Работодатель может буквально пробежать глазами за 5 секунд и понять ценность.

---

# Есть ещё один очень важный момент

**Не показывай настоящий Excel-файл целиком**, если там есть:

- названия проекта;
- реальные объёмы;
- подрядчики;
- номера документов;
- внутренние данные;
- коммерческая информация.

Для сайта лучше сделать:

### Demo Dataset

> **Данные обезличены; структура и логика обработки сохранены.**

Это одновременно выглядит профессионально и показывает, что ты понимаешь конфиденциальность рабочего проекта.

---

# Теперь с таблицей будет совсем интересно

Ты пишешь:

> «я попробую закинуть тебе таблицу»

**Закидывай её.**

Лучше исходный `.xlsx` / `.xlsm`, либо CSV, либо экспорт результата Power Query.

Когда ты её загрузишь, я смогу уже не гадать, а разобрать **саму структуру 1162 позиций** и предложить конкретный дизайн интерактивного блока:

```text
что выводить в таблице
какие фильтры
какие KPI
какие статусы
какие графики
что показывать по клику
что вынести в видео
что скрыть
что обезличить
```

И главное — мы сможем сделать этот кейс **первым эталоном**, а потом по той же системе оформить остальные твои кейсы: **ОЗДС/VBA → Exon/JS → НСС/AutoCAD → AI-пайплайн → ВОР → Power BI**.

---

**User:**

у меня ещё дополнение к этой таблице коллизии объемов из сецфикации п и Рабочая документация



|     |
| --- |

| ПРОВЕРКА     СИСТЕМ |
| ------------------- |

| СОТ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| Закрыто<br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 85,7%         |
| Не смонтировано                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 5,5%          |
| Превышение объемов                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 8,8%          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 100,0%        |
| Осталось закрыть позиций                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 13            |
| Всего позиций                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 91            |
| Смонтированные объемы от Хакана                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 86            |
| Актуальные объемы от Тимура                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 85            |
| Индекс нестыковки (текстового   расхождения)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **8,8%**      |
| Процент позиций, требующих   проверки дублей                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **24,2%**     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |               |
| Процент   абсолютно «чистых» позиций (где статус «Закрыто» и по дублям «ОК»):                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 63,7%         |
| Не смонтировано в штуках (шт)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **1863**      |
| Не смонтировано кабеля / труб   (м / пм)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | **100**       |
| Не смонтировано (комп. /   комплект)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **2**         |
| Не смонтировано  строительной химии (кг)<br><br>=ЕСЛИ(И(ОБН\_СВОДНАЯ\_ОБЩАЯ[[#Заголовки];[Система]]<>""; $T$3<> ""); СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Статус]; "Закрыто") / СЧЁТЕСЛИ(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3); "")<br><br>=ЕСЛИ(И(ОБН\_СВОДНАЯ\_ОБЩАЯ[[#Заголовки];[Система]]<>""; $T$3<> ""); СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Статус]; "Не смонтировано") / СЧЁТЕСЛИ(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3); "")<br><br>=ЕСЛИ(И(ОБН\_СВОДНАЯ\_ОБЩАЯ[[#Заголовки];[Система]]<>""; $T$3<> ""); СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Статус]; "Превышение объемов") / СЧЁТЕСЛИ(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3); "")<br><br>=СУММ(T4\:T6)<br><br>=СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Статус]; "<>Закрыто")<br><br>=СЧЁТЕСЛИ(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3)<br><br>=СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Наименование и техническая характеристика]; "<>")<br><br>=СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Наименование (из Объемов)]; "<>")<br><br>=ЕСЛИОШИБКА(СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Статус]; "Превышение объемов") / СЧЁТЕСЛИ(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3); 0)<br><br>=ЕСЛИОШИБКА(СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Контроль дублей]; "ПРОВЕРИТЬ") / СЧЁТЕСЛИ(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3); 0)<br><br>=ЕСЛИОШИБКА(СЧЁТЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Статус]; "Закрыто"; ОБН\_СВОДНАЯ\_ОБЩАЯ[Контроль дублей]; "ОК") / СЧЁТЕСЛИ(ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3); 0)<br><br>=СУММЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ">0"; ОБН\_СВОДНАЯ\_ОБЩАЯ[Ед. изм]; "шт\*")<br><br>=СУММЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ">0"; ОБН\_СВОДНАЯ\_ОБЩАЯ[Ед. изм]; "м") + СУММЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ">0"; ОБН\_СВОДНАЯ\_ОБЩАЯ[Ед. изм]; "пм") | **0**<br><br> |



\=СУММЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ">0"; ОБН\_СВОДНАЯ\_ОБЩАЯ[Ед. изм]; "комп\*")



\=СУММЕСЛИМН(ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ОБН\_СВОДНАЯ\_ОБЩАЯ[Система]; $T$3; ОБН\_СВОДНАЯ\_ОБЩАЯ[Разница]; ">0"; ОБН\_СВОДНАЯ\_ОБЩАЯ[Ед. изм]; "кг")



вот такая табличка по каждой системе

---

**Assistant:**

Да. Вот теперь кейс становится **намного сильнее**, потому что у тебя есть не только итоговая таблица на 1 162 позиции, но и **аналитический слой над ней** — контроль состояния каждой системы.

Это уже можно показывать как небольшой **Data / Engineering Dashboard**, встроенный в портфолио.

Причём я бы не показывал формулы Excel на первом уровне. Формулы можно спрятать в «Как это работает», а работодателю сначала показать **результат системы контроля**.

---

# Как я теперь вижу этот кейс

У тебя фактически есть три слоя:

```text
┌────────────────────────────────────────────┐
│ 1. ИСТОЧНИКИ                               │
│                                            │
│ Спецификация П / РД / фактические объёмы  │
└─────────────────────┬──────────────────────┘
                      ↓
┌────────────────────────────────────────────┐
│ 2. ОБРАБОТКА                               │
│                                            │
│ Power Query                               │
│ • группировка                             │
│ • объединение                             │
│ • Fuzzy Join                               │
│ • контроль дублей                          │
│ • расчёт отклонений                        │
└─────────────────────┬──────────────────────┘
                      ↓
┌────────────────────────────────────────────┐
│ 3. КОНТРОЛЬ                               │
│                                            │
│ система → статус → расхождение → объём    │
└────────────────────────────────────────────┘
```

И вот **третий слой** теперь можно превратить в красивый dashboard.

---

# Самое сильное в твоём примере — не 85,7%

А то, что система отвечает на несколько разных вопросов одновременно.

Для СОТ:

### Состояние позиций

**91 позиция**

```text
85,7%   Закрыто
5,5%    Не смонтировано
8,8%    Превышение объёмов
```

### Качество данных

```text
24,2%
позиций требуют проверки дублей
```

### Полностью чистые позиции

```text
63,7%
Закрыто + дубль = ОК
```

### Остаток работы

```text
13
позиций требуют внимания
```

### Расхождение по объёму

```text
1 863 шт.
100 м / пм
2 комп.
```

Это уже **не Excel-таблица**.

Это система контроля.

---

# Я бы именно так и сформулировал кейс

## Контроль объёмов РД и фактического монтажа

**Power Query · 20 инженерных систем · 1 162 позиции**

> Создал сводную модель для сопоставления проектных/рабочих объёмов с актуальными фактическими данными. Система группирует позиции, выявляет потенциальные дубли, выполняет fuzzy-сопоставление наименований и автоматически классифицирует расхождения по каждой инженерной системе.

Это существенно сильнее:

> «Сделал сводную таблицу в Excel».

---

# А визуально я бы сделал вот такой Bento Grid

### Первый экран кейса

```text
┌──────────────────────────────┬───────────────────────┐
│                              │                       │
│       КОНТРОЛЬ ОБЪЁМОВ       │       1 162           │
│                              │       ПОЗИЦИИ         │
│       РД ↔ ФАКТ              │                       │
│                              ├───────────────────────┤
│       Power Query            │       20              │
│       Fuzzy Join             │       СИСТЕМ           │
│       Excel                  │                       │
├──────────────────────────────┴───────────────────────┤
│                                                        │
│                 СТАТУС ПОЗИЦИЙ                         │
│                                                        │
│  ███████████████████████░░░░░░░░░░░░░░░░             │
│  85.7% закрыто | 5.5% не смонтировано | 8.8% превышение│
│                                                        │
├───────────────────────────┬────────────────────────────┤
│                           │                            │
│   КАЧЕСТВО ДАННЫХ         │     ОСТАТОК                │
│                           │                            │
│   63.7%                    │     13                     │
│   полностью чистых        │     позиций                │
│                           │                            │
│   24.2%                    │     требуют проверки      │
│   проверка дублей         │                            │
└───────────────────────────┴────────────────────────────┘
```

Это уже очень похоже на профессиональный analytical product.

---

# А затем — визуализация логики

Вот это вообще обязательно.

## Что происходит с одной позицией

Например:

```text
СПЕЦИФИКАЦИЯ
Кабель ...
      │
      ├─────────────────────┐
      │                     │
      ▼                     ▼
Рабочая документация    Факт
      │                     │
      ▼                     ▼
Нормализация           Актуальный объём
      │                     │
      └──────────┬──────────┘
                 ↓
           Fuzzy matching
                 ↓
          Сопоставленная
              позиция
                 ↓
        Количество − Факт
                 ↓
      ┌──────────┼──────────┐
      ↓          ↓          ↓
   Закрыто    Остаток    Превышение
```

И тут можно показать **одну реальную строку** из обезличенного набора.

---

# Ещё интереснее — «Карточка системы»

Ты говоришь:

> «вот такая таблица по каждой системе»

Это значит, что на сайте можно сделать **System Explorer**.

Например:

```text
┌─────────────────────────────────────────────┐
│ СОТ                                  91 позиция │
├─────────────────────────────────────────────┤
│                                             │
│ Закрыто                 85.7%                │
│ ████████████████████████████████            │
│                                             │
│ Не смонтировано          5.5%               │
│ ███                                         │
│                                             │
│ Превышение               8.8%               │
│ █████                                       │
│                                             │
├─────────────────────────────────────────────┤
│ Осталось закрыть                  13         │
│ Проверка дублей                 24.2%        │
│ Чистые позиции                 63.7%         │
├─────────────────────────────────────────────┤
│ Расхождения                                │
│                                             │
│ 1 863 шт.   100 м   2 комп.                │
└─────────────────────────────────────────────┘
```

А выше переключатель:

```text
[ СОТ ] [ ЭМ1.1 ] [ ЭМ1.2 ] [ СКС ] [ ОЗДС ] ...
```

Вот это уже очень хороший interactive block.

---

# И ещё одна идея — карта системы

Поскольку у тебя около 20 систем, можно сделать:

```text
20 СИСТЕМ

ЭМ1.1   94%
ЭМ1.2   91%
ЭМ1.3   88%
ЭО      96%
СКС     83%
СОТ     86%
АВТ     92%
...
```

В виде горизонтальных bar charts.

И при выборе:

> СОТ

весь dashboard перестраивается под СОТ.

Это очень хорошая демонстрация того, что твоя модель **масштабируется на множество систем**, а не является ручной таблицей.

---

# Теперь про твои показатели

Здесь есть очень важная деталь.

У тебя в Power Query:

```text
Разница = Количество - Стало
```

и затем:

```text
if Разница = 0
    → Закрыто

else if Разница > 0
    → Превышение объемов

else
    → Не смонтировано
```

То есть знак `Разница` имеет конкретный смысл.

На сайте это **нужно объяснить**, иначе человек увидит:

> «Разница −150»

и не поймёт, хорошо это или плохо.

Я бы сделал маленькую легенду:

```text
Разница = РД − Факт

0        → Закрыто
> 0      → Требует проверки / превышение
< 0      → Не смонтировано
```

Но здесь я бы **обязательно перепроверил твою бизнес-логику**, потому что в разговорном описании «превышение объёмов» и «не смонтировано» могут трактоваться иначе в зависимости от того, что именно лежит в `Количество` и `Стало`.

Особенно потому, что у тебя ниже формулы считают положительную `Разница` как «не смонтировано в штуках». Судя по приведённой таблице, тут есть место, которое стоит проверить перед публикацией.

Это хороший пример, почему мы не должны просто переносить Excel-логику на сайт.

---

# Отдельно я бы сделал блок «Контроль качества данных»

Потому что это одна из самых интересных вещей в твоём решении.

Ты проверяешь не только объёмы.

Ты проверяешь:

### 1. Дубли

```text
24.2%
позиции требуют проверки
```

### 2. Текстовые расхождения

```text
8.8%
индекс нестыковки
```

### 3. Чистые записи

```text
63.7%
закрыто + дубль ОК
```

То есть твоя система отвечает сразу за:

> **completeness + consistency + quantity control**

Это уже язык data quality.

---

# И именно это я бы показал работодателю

Например:

## Что автоматизировано

```text
01  Сведение 20 систем
02  Группировка позиций
03  Контроль дублей
04  Fuzzy matching
05  Сопоставление РД и факта
06  Расчёт отклонений
07  Автоматическая классификация
08  Сводная аналитика по системам
```

И ниже:

> **Вместо ручной проверки отдельных таблиц — единая модель контроля.**

Это очень сильная фраза для кейса.

---

# Видео я бы сделал именно для этого кейса

Причём **не презентационное видео**, а короткий screen recording.

### 45–60 секунд

```text
0–05 сек
Исходные таблицы

05–12
Power Query

12–20
Функция обработки систем

20–28
Fuzzy Join

28–36
Получаем 1 162 позиции

36–45
Фильтр:
"Превышение объёмов"

45–52
Фильтр:
"Проверить"

52–60
Dashboard
20 систем
```

Без голоса.

Только cursor + аккуратные подсветки + подписи.

На сайте рядом:

**▶ Смотреть процесс**

---

# И здесь как раз можно сделать очень хороший Bento Case Study

Полный кейс:

```text
┌───────────────────────────────────────────────┐
│                                               │
│  01 / VOLUME CONTROL                          │
│                                               │
│  Контроль объёмов РД ↔ факт                   │
│                                               │
│  Некрасовка · ХГО Инжиниринг · 2026          │
│                                               │
└───────────────────────────────────────────────┘


┌──────────────────────┬────────────────────────┐
│ 1 162                │ 20                     │
│ позиций              │ систем                 │
├──────────────────────┼────────────────────────┤
│ 63.7%                │ 24.2%                  │
│ чистых               │ проверка дублей        │
└──────────────────────┴────────────────────────┘


┌───────────────────────────────────────────────┐
│                                               │
│             PROCESS PIPELINE                  │
│                                               │
│ РД → Power Query → Fuzzy Join → Контроль     │
│                                               │
└───────────────────────────────────────────────┘


┌────────────────────────────┬──────────────────┐
│                            │                  │
│      LIVE TABLE            │     VIDEO        │
│                            │                  │
│     1 162 позиции          │      ▶ 0:52      │
│                            │                  │
└────────────────────────────┴──────────────────┘


┌───────────────────────────────────────────────┐
│                                               │
│         SYSTEM EXPLORER                      │
│                                               │
│ СОТ  ████████████████ 85.7%                   │
│ СКС  █████████████████ 91%                   │
│ ОЗДС ██████████████ 78%                       │
│ ...                                           │
│                                               │
└───────────────────────────────────────────────┘


┌──────────────────────────┬────────────────────┐
│                          │                    │
│ DATA QUALITY             │ RESULT             │
│                          │                    │
│ Duplicate checks         │ Меньше ручных      │
│ Text matching            │ сверок             │
│ Status detection         │ Быстрее поиск      │
│ Variance calculation     │ расхождений        │
│                          │                    │
└──────────────────────────┴────────────────────┘
```

---

# И ещё важнее: этот кейс может стать шаблоном для всех остальных

Вот теперь у нас появляется **единая система представления кейсов**.

Каждый кейс будет состоять из:

```text
PROBLEM
Что было сложно?

↓

PROCESS
Что ты сделал?

↓

TOOL
Чем сделал?

↓

VISUALIZATION
Как работает?

↓

RESULT
Что получилось?

↓

EVIDENCE
Что можно посмотреть?
```

Например:

### Excel/VBA ОЗДС

**Видео + интерактивный генератор**

### Exon/JS

**Видео + симулятор ввода**

### НСС/AutoCAD

**чертёж + схема расчёта + интерактивные параметры**

### AI pipeline

**300 документов → extraction → matching → validation**

### Power BI

**dashboard**

И сайт перестаёт быть резюме.

Он превращается в:

> **портфолио реальных инженерных решений.**

Это, на мой взгляд, гораздо сильнее.

---

## И теперь я бы действительно хотел увидеть сам файл

Потому что следующий шаг уже можно сделать практически, а не концептуально.

**Загрузи Excel с этой таблицей/сводной**, желательно исходный файл или экспорт результата Power Query. Тогда я смогу разобраться в реальных колонках, системах, статусах и распределении 1 162 позиций и предложить тебе **конкретный wireframe этого кейса — что именно показывать в каждом Bento-блоке и какие данные брать из Excel для интерактивной версии**.

---

**User:**

следующее для удобной работы так же у меня есть шахматка таблица с объеами и статусами, изначально я делал сначало её, а потом таблицу предыдущую сравнение п и рд, а сейчас понял, что сначала нужно сгруппировать даннеы чтобы убрать повторы и суммировать их в одну позициию внутри одной сиситемы и затем уже приступать к шахматке, хочу реализовать в дальнейшем такую последовательность даннеы из СРАВНЕНИЕ будут автоматически обновляться и затем шахматка ак же на основе этих данных будет пополняться и обновляться автоматически



вот сама струк руа шахматки







| **ID**    | **№ ПОЗИЦИИ ВНУТРИ СИСТЕМЫ** | **СИСТЕМА** | **ШИФР ПРОЕКТА**                                                                                       | **ТИП МАТЕРИАЛОВ**                                                                   | НАИМЕНОВАНИЕ И ТЕХНИЧЕСКАЯ ХАРАКТЕРИСТИКА                                                                                                                                 | ТИП, МАРКА, ОБОЗНАЧЕНИЕ ДОКУМЕНТА, ОПРОСНОГО ЛИСТА | КОД ОБОРУДОВАНИЯ, ИЗДЕЛИЯ, МАТЕРИАЛА | ЗАВОД ИЗГОТОВИТЕЛЬ<br>     РАБОЧАЯ ДОКУМЕНТАЦИЯ | НАЗВАНИЕ ПОЗИЦИИ В EXON                                                                                                                                                     | ЕД. ИЗМ | КОЛ-ВО ПО РД | НЕ НУЖЕН ОРИГИНАЛ | **КОЛ\_ВО ОРИГИНАЛОВ** | **НЕДОБОР ОРИГИНАЛОВ** | **СОБРАНЫ  ОРИГИНАЛЫ** | **СОБРАНО В ПАПКУ НА ПК** | **ЗАГРУЖЕНО В EXON ЖВК** | **ПЕРЕЧЕНЬ РАБОТ** | **ОБЩИЙ ЖУРНАЛ РАБОТ ОЖР** | **ИСПОЛНИТЕЛЬНАЯ СХЕМА** | **АКТ СКРЫТЫХ РАБОТ АОСР** | **СФОРМИРОВАННЫЙ КОМПЛЕКТ** | **ОСТАТОК ПО ИД** |
| --------- | ---------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------ | ----------------- | ---------------------- | ---------------------- | ---------------------- | ------------------------- | ------------------------ | ------------------ | -------------------------- | ------------------------ | -------------------------- | --------------------------- | ----------------- |
| **16.01** | **1**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Неттоп Intel Core i7 14700T, DDR5 16ГБ,   512ГБ(SSD), Intel UHD Graphics 770, без операционной системы, черный,   клавиатура, мышь ThinkCentre Tiny M70q-5                |                                                    |                                      |                                                 | Неттоп Intel Core i7 14700T,   DDR5 16ГБ, 512ГБ(SSD), Intel UHD Graphics 770, без операционной системы,   черный, клавиатура, мышь ThinkCentre Tiny M70q-5                  | шт      | 5            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **5**             |
| **16.02** | **2**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Монитор 27", 2560x1440 ELA5812EU                                                                                                                                          |                                                    |                                      |                                                 | Монитор 27", 2560x1440   ELA5812EU                                                                                                                                          | шт      | 6            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **6**             |
| **16.03** | **3**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Операционная система Astra Linux                                                                                                                                          |                                                    |                                      |                                                 | Операционная система Astra   Linux                                                                                                                                          | шт      | 5            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **5**             |
| **16.04** | **4**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Ключ HASP Pro (FireSec-Pro прот. R3)                                                                                                                                      |                                                    |                                      |                                                 | Ключ HASP Pro (FireSec-Pro   прот. R3)                                                                                                                                      | шт      | 1            | ЛОЖЬ              | ** **                  | ОРИГИНАЛ НЕ СОБРАН     | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **1**             |
| **16.05** | **5**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | РТ0020.006.002 \| ИБП со встроенными   батареями, 2кВА РТ0020.006.002 \| Pitton                                                                                           |                                                    |                                      |                                                 | РТ0020.006.002 \| ИБП со   встроенными батареями, 2кВА РТ0020.006.002 \| Pitton                                                                                             | шт      | 5            | ЛОЖЬ              | **1**                  | **-4**                 | **ИСТИНА**             | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **5**             |
| **16.06** | **6**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | ОР0002.002 \|Опоры вертикальной установки \|   Pitton                                                                                                                     |                                                    |                                      |                                                 | ОР0002.002 \|Опоры   вертикальной установки \| Pitton                                                                                                                       | шт      | 5            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **5**             |
| **16.07** | **7**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | ОР0002.003 \| Расширитель опор вертикальной   установки \| Pitton                                                                                                         |                                                    |                                      |                                                 | ОР0002.003 \| Расширитель опор   вертикальной установки \| Pitton                                                                                                           | шт      | 5            | ЛОЖЬ              | ** **                  | ОРИГИНАЛ НЕ СОБРАН     | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **5**             |
| **16.08** | **8**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Прибор приемно-контрольный и управления   охранно-пожарный адресный R3-Рубеж-2ОП                                                                                          |                                                    |                                      |                                                 | Прибор приемно-контрольный и   управления охранно-пожарный адресный R3-Рубеж-2ОП                                                                                            | шт      | 3            | ЛОЖЬ              | **3**                  | УКОМПЛЕКТОВАНО         | **ИСТИНА**             | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **3**             |
| **16.09** | **9**                        | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Блок индикации и управления R3-Рубеж-БИУ                                                                                                                                  |                                                    |                                      |                                                 | Блок индикации и управления   R3-Рубеж-БИУ                                                                                                                                  | шт      | 1            | ЛОЖЬ              | **1**                  | **УКОМПЛЕКТОВАНО**     | **ИСТИНА**             | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **1**             |
| **16.10** | **10**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Модуль сопряжения преобразователь интерфейса   R3-МС-Е                                                                                                                    |                                                    |                                      |                                                 | Модуль сопряжения   преобразователь интерфейса R3-МС-Е                                                                                                                      | шт      | 1            | ЛОЖЬ              | ** **                  | ОРИГИНАЛ НЕ СОБРАН     | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **1**             |
| **16.11** | **11**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Извещатель охранный поверхностный звуковой   адресный ИО 32920-2                                                                                                          |                                                    |                                      |                                                 | Извещатель охранный   поверхностный звуковой адресный ИО 32920-2                                                                                                            | шт      | 81           | ЛОЖЬ              | **81**                 | УКОМПЛЕКТОВАНО         | **ИСТИНА**             | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **81**            |
| **16.12** | **12**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Извещатель охранный поверхностный   оптико-электронный адресный ИО 30920-2                                                                                                |                                                    |                                      |                                                 | Извещатель охранный   поверхностный оптико-электронный адресный ИО 30920-2                                                                                                  | шт      | 166          | ЛОЖЬ              | **166**                | **УКОМПЛЕКТОВАНО**     | **ИСТИНА**             | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **166**           |
| **16.13** | **13**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Поворотно-наклонный кронштейн UBL-1115                                                                                                                                    |                                                    |                                      |                                                 | Поворотно-наклонный кронштейн   UBL-1115                                                                                                                                    | шт      | 204          | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **204**           |
| **16.14** | **14**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Извещатель охранный точечный   магнитоконтактный, белый ИО 102-39 исп. 00                                                                                                 |                                                    |                                      |                                                 | Извещатель охранный точечный   магнитоконтактный, белый ИО 102-39 исп. 00                                                                                                   | шт      | 242          | ЛОЖЬ              | ** **                  | ОРИГИНАЛ НЕ СОБРАН     | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **242**           |
| **16.15** | **15**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Извещатель охранный объемный   оптико-электронный пассивный адресный ИО 40920-2                                                                                           |                                                    |                                      |                                                 | Извещатель охранный объемный   оптико-электронный пассивный адресный ИО 40920-2                                                                                             | шт      | 38           | ЛОЖЬ              | **37**                 | **-1**                 | **ИСТИНА**             | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **38**            |
| **16.16** | **16**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Извещатель охранный магнитоуправляемый   адресный ИО 10220-2                                                                                                              |                                                    |                                      |                                                 | Извещатель охранный   магнитоуправляемый адресный ИО 10220-2                                                                                                                | шт      | 118          | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **118**           |
| **16.17** | **17**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Адресная метка АМ-1-R3                                                                                                                                                    |                                                    |                                      |                                                 | Адресная метка АМ-1-R3                                                                                                                                                      | шт      | 226          | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **226**           |
| **16.18** | **18**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Кнопка выхода сенсорная ST-EX020LSM-BK                                                                                                                                    |                                                    |                                      |                                                 | Кнопка выхода сенсорная   ST-EX020LSM-BK                                                                                                                                    | шт      | 30           | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **30**            |
| **16.19** | **19**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Изолятор шлейфа ИЗ-1-R3                                                                                                                                                   |                                                    |                                      |                                                 | Изолятор шлейфа ИЗ-1-R3                                                                                                                                                     | шт      | 12           | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **12**            |
| **16.20** | **20**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Источник вторичного электропитания   резервированный ИВЭПР 12/5 2х40-Р БР                                                                                                 |                                                    |                                      |                                                 | Источник вторичного   электропитания резервированный ИВЭПР 12/5 2х40-Р БР                                                                                                   | шт      | 1            | ЛОЖЬ              | ** **                  | ОРИГИНАЛ НЕ СОБРАН     | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **1**             |
| **16.21** | **21**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Аккумуляторная батарея 40 Ач PTK-BATTERY   12-40Ah                                                                                                                        |                                                    |                                      |                                                 | Аккумуляторная батарея 40 Ач   PTK-BATTERY 12-40Ah                                                                                                                          | шт      | 2            | ЛОЖЬ              | **1**                  | **-1**                 | **ИСТИНА**             | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.22** | **22**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Бокс резервного электропитания БР12 исп. 2х40                                                                                                                             |                                                    |                                      |                                                 | Бокс резервного   электропитания БР12 исп. 2х40                                                                                                                             | шт      | 1            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **1**             |
| **16.23** | **23**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Аккумуляторная батарея 26 Ач PTK-BATTERY   12-26Ah                                                                                                                        |                                                    |                                      |                                                 | Аккумуляторная батарея 26 Ач   PTK-BATTERY 12-26Ah                                                                                                                          | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.24** | **24**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | AccordTec ББП-50 исп. 1 ИБП 12 В, выходной   ток 5А навесной                                                                                                              |                                                    |                                      |                                                 | AccordTec ББП-50 исп. 1 ИБП   12 В, выходной ток 5А навесной                                                                                                                | шт      | 9            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **9**             |
| **16.25** | **25**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Многофункциональный модуль Laurent-2                                                                                                                                      |                                                    |                                      |                                                 | Многофункциональный модуль   Laurent-2                                                                                                                                      | шт      | 9            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **9**             |
| **16.26** | **26**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Аккумуляторная батарея 7 Ач PTK-BATTERY   12-7Ah (или аналог)                                                                                                             |                                                    |                                      |                                                 | Аккумуляторная батарея 7 Ач   PTK-BATTERY 12-7Ah (или аналог)                                                                                                               | шт      | 9            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **9**             |
| **16.27** | **27**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Корпус KBox-100                                                                                                                                                           |                                                    |                                      |                                                 | Корпус KBox-100                                                                                                                                                             | шт      | 9            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **9**             |
| **16.28** | **28**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Коробка коммутационная для 5х2 проводов                                                                                                                                   |                                                    |                                      |                                                 | Коробка коммутационная для   5х2 проводов                                                                                                                                   | шт      | 85           | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **85**            |
| **16.29** | **29**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация**                                                            | Прибор приемно-контрольный Юпитер-2444                                                                                                                                    |                                                    |                                      |                                                 | Прибор приемно-контрольный   Юпитер-2444                                                                                                                                    | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.30** | **30**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Клавиатура Юпитер-6136                                                                                                                                                    |                                                    |                                      |                                                 | Клавиатура Юпитер-6136                                                                                                                                                      | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.31** | **31**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Расширитель на 8 зон  Юпитер-3812                                                                                                                                         |                                                    |                                      |                                                 | Расширитель на 8 зон  Юпитер-3812                                                                                                                                           | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.32** | **32**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Расширитель на 4 реле  Юпитер-3214                                                                                                                                        |                                                    |                                      |                                                 | Расширитель на 4 реле  Юпитер-3214                                                                                                                                          | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.33** | **33**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Извещатель охранный магнитоконтактный ИО   102-20 Б3П В                                                                                                                   |                                                    |                                      |                                                 | Извещатель охранный   магнитоконтактный ИО 102-20 Б3П В                                                                                                                     | шт      | 4            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **4**             |
| **16.34** | **34**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Извещатель охранный магнитоконтактный ИО   102-14                                                                                                                         |                                                    |                                      |                                                 | Извещатель охранный   магнитоконтактный ИО 102-14                                                                                                                           | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.35** | **35**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Извещатель охранный оптико-электронный   объемный Фотон-9                                                                                                                 |                                                    |                                      |                                                 | Извещатель охранный   оптико-электронный объемный Фотон-9                                                                                                                   | шт      | 4            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **4**             |
| **16.36** | **36**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Извещатель охранный оптико-электронный   поверхностный Фотон-Ш                                                                                                            |                                                    |                                      |                                                 | Извещатель охранный   оптико-электронный поверхностный Фотон-Ш                                                                                                              | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.37** | **37**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Извещатель охранный ручной точечный   электроконтактный КНФ-1М                                                                                                            |                                                    |                                      |                                                 | Извещатель охранный ручной   точечный электроконтактный КНФ-1М                                                                                                              | шт      | 2            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.38** | **38**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Оповещатель охранно-пожарный комбинированный   адресный ОПОП 124-R3                                                                                                       |                                                    |                                      |                                                 | Оповещатель охранно-пожарный   комбинированный адресный ОПОП 124-R3                                                                                                         | шт      | 2            | ЛОЖЬ              | ** **                  | ОРИГИНАЛ НЕ СОБРАН     | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **2**             |
| **16.39** | **39**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Источник резервированного питания / ИВЭПР   12/1,5 1х7-Р / Рубеж                                                                                                          |                                                    |                                      |                                                 | Источник резервированного   питания / ИВЭПР 12/1,5 1х7-Р / Рубеж                                                                                                            | шт      | 3            | ЛОЖЬ              | **2**                  | **-1**                 | **ИСТИНА**             | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **3**             |
| **16.40** | **40**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Аккумуляторная батарея 12В, 7Ач / PTK-BATTERY   12-7Ah / ПожТехКабель                                                                                                     |                                                    |                                      |                                                 | Аккумуляторная батарея 12В,   7Ач / PTK-BATTERY 12-7Ah / ПожТехКабель                                                                                                       | шт      | 3            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **3**             |
| **16.41** | **41**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Охранная сигнализация. Комплект оборудования   для помещений хранения наркотиков** | Контроллер охранно-пожарный (16 сигнальных   входов) Приток-А-КОП-05                                                                                                      |                                                    |                                      |                                                 | Контроллер охранно-пожарный   (16 сигнальных входов) Приток-А-КОП-05                                                                                                        | шт      | 1            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **1**             |
| **16.42** | **42**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Тревожная сигнализация**                                                           | Устройство беспроводной охранной сигнализации   (РПД Астра-Р (РПД) -Устройство беспроводной охранной сигнализации (РПД   Астра-Р (РПД) - 2шт + РПУ Астра-Р (РПУ)) Астра-Р |                                                    |                                      |                                                 | Устройство беспроводной   охранной сигнализации (РПД Астра-Р (РПД) -Устройство беспроводной охранной   сигнализации (РПД Астра-Р (РПД) - 2шт + РПУ Астра-Р (РПУ)) Астра-Р   | шт      | 5            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **5**             |
| **16.43** | **43**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Тревожная сигнализация**                                                           | Извещатель охранный ручной точечный   электроконтактный Астра-321Т                                                                                                        |                                                    |                                      |                                                 | Извещатель охранный ручной   точечный электроконтактный Астра-321Т                                                                                                          | шт      | 5            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **5**             |
| **16.44** | **44**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Тревожная сигнализация**                                                           | Источник вторичного электропитания   резервированный ИВЭПР 12/2 2х7-Р БР                                                                                                  |                                                    |                                      |                                                 | Источник вторичного   электропитания резервированный ИВЭПР 12/2 2х7-Р БР                                                                                                    | шт      | 4            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **4**             |
| **16.45** | **45**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Тревожная сигнализация**                                                           | Аккумуляторная батарея 7 Ач PTK-BATTERY   12-7Ah                                                                                                                          |                                                    |                                      |                                                 | Аккумуляторная батарея 7 Ач   PTK-BATTERY 12-7Ah                                                                                                                            | шт      | 8            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **8**             |
| **16.46** | **46**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Тревожная сигнализация**                                                           | Монитор IP видеодомофона DS-KH6320-LE1(B)                                                                                                                                 |                                                    |                                      |                                                 | Монитор IP видеодомофона   DS-KH6320-LE1(B)                                                                                                                                 | шт      | 6            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ИСТИНА**                | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **6**             |
| **16.47** | **47**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Домофония**                                                                        | Козырек для вызывной панели / DS-KABV6113-RS   / Hikvision                                                                                                                |                                                    |                                      |                                                 | Козырек для вызывной панели /   DS-KABV6113-RS / Hikvision                                                                                                                  | шт      | 6            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **6**             |
| **16.48** | **48**                       | **СКУД**    | **НК-750/28-02-СКУД Система контроля и управления доступом.   Система охранно-тревожной сигнализации** | **Домофония**                                                                        | Стойка для считывателя VIZIT ST10-1 (ral   7016) \| VIZIT ST10-1                                                                                                          |                                                    |                                      |                                                 | Стойка для считывателя VIZIT   ST10-1 (ral 7016) \| VIZIT ST10-1                                                                                                            | шт      | 1            | ЛОЖЬ              | ** **                  | **ОРИГИНАЛ НЕ СОБРАН** | **ЛОЖЬ**               | **ЛОЖЬ**                  | **ЛОЖЬ**                 | **ЛОЖЬ**           | **ЛОЖЬ**                   | **ЛОЖЬ**                 | **ЛОЖЬ**                   | **ЛОЖЬ**                    | **1**<br><br>     |

---

**Assistant:**

Да. Вот это уже, на мой взгляд, **самое важное архитектурное открытие во всей твоей системе**.

Ты фактически пришёл к тому, что у тебя должна быть не просто «шахматка + таблица сравнения», а **единая цепочка обработки данных с одним источником истины**.

Сейчас у тебя логика исторически выросла так:

```text
РД / ПД
   ↓
Шахматка
   ↓
Сравнение П ↔ РД
```

Но правильнее сделать:

```text
ПД / РД / исходные таблицы
          ↓
     НОРМАЛИЗАЦИЯ
          ↓
  ЕДИНАЯ МОДЕЛЬ ПОЗИЦИЙ
          ↓
  ┌───────┴────────┐
  ↓                ↓
СРАВНЕНИЕ        ШАХМАТКА
П ↔ РД ↔ ФАКТ    ИД / статус
```

И тогда **шахматка перестаёт быть самостоятельной базой данных**.

Она становится представлением над твоей основной моделью.

---

# Я бы вообще разделил систему на 4 слоя

## 1. SOURCE — исходные данные

Это всё, что приходит извне:

```text
ПД
РД
ВОР
Спецификации
Объёмы
Exon
Excel-файлы
CSV
```

Например:

```text
source/
├── project/
├── working/
├── volumes/
└── exon/
```

Ничего здесь не «исправляем руками».

---

# 2. MASTER — нормализованная модель

Вот **сюда я бы перенёс твою новую логику**.

Ты сам уже заметил:

> сначала нужно сгруппировать данные, убрать повторы и суммировать их в одну позицию внутри одной системы.

Да.

Например, исходные данные:

```text
СКУД
Кабель X
10 шт.

СКУД
Кабель X
20 шт.

СКУД
Кабель X
15 шт.
```

становятся:

```text
СКУД
Кабель X
45 шт.
```

Но здесь важно не потерять происхождение.

Поэтому я бы хранил не просто:

```text
Система
Наименование
Количество
```

а:

```text
ID
SystemID
PositionKey
Name
Unit
ProjectQty
WorkingQty
FactQty
SourceDocuments
SN
```

То есть **одна canonical position**.

---

# 3. CONTROL — контроль и сравнения

А уже из нормализованной модели строятся твои аналитические представления:

```text
master_position
       │
       ├── П ↔ РД
       │
       ├── РД ↔ факт
       │
       ├── контроль дублей
       │
       └── отклонения
```

Здесь получается твоя нынешняя таблица:

### «Сравнение»

```text
Система
SN
РД
Факт
Разница
Статус
Контроль дублей
```

Но теперь она **не является исходным источником**.

Она рассчитывается.

---

# 4. TRACKING — шахматка ИД

И только после этого:

```text
MASTER
   ↓
CONTROL
   ↓
TRACKING
```

получается шахматка.

То есть:

> **Шахматка — это не база материалов.  
> Шахматка — это рабочая панель контроля ИД.**

И вот это очень важное разделение.

---

# Твоя шахматка на самом деле содержит два разных типа данных

Сейчас у тебя в одной таблице перемешаны:

### A. Атрибуты позиции

```text
ID
№ позиции
Система
Шифр проекта
Тип материала
Наименование
Код
Производитель
Exon
Ед. изм.
Количество по РД
```

и:

### B. Состояние исполнительной документации

```text
Не нужен оригинал
Количество оригиналов
Недобор оригиналов
Собраны оригиналы
Собрано в папку
Загружено в Exon
Перечень работ
ОЖР
Исполнительная схема
АОСР
Сформированный комплект
Остаток по ИД
```

Это очень полезное разделение.

Я бы сделал:

```text
POSITION MASTER
+
DOCUMENTATION STATUS
```

---

# То есть логически у тебя должно быть две таблицы

## `positions`

```text
ID
System
PositionNo
ProjectCode
MaterialType
Name
DocumentType
MaterialCode
Manufacturer
ExonName
Unit
RDQty
```

А отдельно:

## `documentation_status`

```text
PositionID

OriginalNotRequired
OriginalQty
OriginalShortage
OriginalsCollected
PackedLocally
UploadedToExon

WorkList
OJR
AsBuiltScheme
AOSR
PackageReady

RemainingQty
```

Это уже гораздо более профессиональная структура данных.

---

# Почему это тебе даст огромный выигрыш

Представь:

сегодня в РД:

```text
СКУД / Позиция A / 100 шт.
```

завтра РД поменялось:

```text
СКУД / Позиция A / 120 шт.
```

При текущей логике шахматку приходится обновлять.

При правильной архитектуре:

```text
SOURCE РД
    ↓
NORMALIZE
    ↓
MASTER POSITION
    ↓
COMPARISON
    ↓
CHESSBOARD
```

обновляется **один источник**, а всё остальное пересчитывается.

---

# А ещё лучше — у каждой позиции должен быть стабильный ключ

Это очень важная вещь.

Сейчас у тебя:

> `16.01`, `16.02`, `16.03`

Это скорее **человеческий номер позиции**, чем настоящий database key.

Я бы разделил:

```text
ID
```

и

```text
№ позиции внутри системы
```

Например:

```text
ID: POS-8F31A2
PositionNo: 16.01
System: СКУД
```

Почему?

Потому что `16.01` может измениться при пересортировке.

А:

```text
POS-8F31A2
```

остаётся идентификатором конкретной записи.

---

# Но здесь есть ещё более важный вопрос

Что является **одной позицией**?

Это сейчас надо определить очень чётко.

Например:

```text
СКУД
Кабель UTP
100 м
```

и:

```text
СКУД
Кабель UTP
150 м
```

Это одна позиция или две?

А если:

```text
СКУД
Кабель UTP Cat.6
```

и:

```text
СКУД
Кабель UTP Cat 6
```

это одна позиция?

А:

```text
Рубеж ИО 102-39
```

и:

```text
ИО-102-39
```

?

Вот здесь как раз появляется твой **Fuzzy Matching**, нормализация и ключи.

То есть у тебя на самом деле возникает маленькая **система управления мастер-данными (master data)**.

И это намного интереснее, чем просто Excel.

---

# Я бы построил конечный pipeline так

```text
                         ИСХОДНЫЕ ДАННЫЕ
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
             ПД               РД              ФАКТ
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                        PREPROCESSING
                               │
                      очистка / типы / trim
                               │
                               ▼
                       NORMALIZATION
                               │
                 группировка / объединение
                               │
                               ▼
                      MASTER POSITIONS
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
             П ↔ РД         РД ↔ ФАКТ     DUPLICATES
                │              │              │
                └──────────────┼──────────────┘
                               ▼
                         CONTROL MODEL
                               │
                 ┌─────────────┴────────────┐
                 │                          │
                 ▼                          ▼
             СРАВНЕНИЕ                    ШАХМАТКА
                                            │
                                            ▼
                                     СТАТУС ИД
                                            │
                        ┌───────────────────┼────────────┐
                        │                   │            │
                       ЖВК                 ОЖР         АОСР
                        │                   │            │
                        ▼                   ▼            ▼
                     EXON               СХЕМЫ       КОМПЛЕКТ
```

Вот это уже **система**, а не набор Excel-файлов.

---

# И самое интересное: твоя шахматка после этого становится невероятно полезной

Например, работодатель открывает сайт.

Он видит:

## Контроль исполнительной документации

```text
1 162 позиции
20 систем
```

↓

Выбирает:

**СКУД**

↓

Получает:

```text
45 позиций

Оригиналы
████████████░░ 73%

ЖВК
██████████████ 92%

ОЖР
██████████░░░░ 67%

Исполнительные схемы
████████░░░░░░ 54%

АОСР
███████░░░░░░░ 48%

Комплектование
██████████░░░░ 71%
```

↓

Нажимает:

**«Позиции с остатком»**

↓

Получает:

```text
16.14
ИО 102-39
242 шт.

Оригиналы: не собраны
Схема: нет
АОСР: нет
Комплект: не готов
```

Вот это уже **визуальный аналог твоей реальной рабочей деятельности**.

---

# Поэтому я бы сделал два разных интерактивных кейса

И это очень важно.

## Кейс A

### Контроль объёмов

```text
ПД / РД / Факт
        ↓
Power Query
        ↓
Fuzzy Matching
        ↓
1 162 позиции
        ↓
расхождения
```

Это показывает:

**аналитику + автоматизацию + работу с данными.**

---

## Кейс B

### Шахматка исполнительной документации

```text
позиции
   ↓
статусы ИД
   ↓
ЖВК / ОЖР / АОСР / схемы / Exon
   ↓
контроль готовности комплекта
```

Это показывает:

**профессиональную работу инженера ПТО.**

---

# И затем можно показать связь между ними

Вот это вообще будет отличительной фишкой сайта:

```text
          КОЛИЧЕСТВА
              │
              ▼
        MASTER DATA
              │
      ┌───────┴────────┐
      ▼                ▼
 СРАВНЕНИЕ          ШАХМАТКА
 П ↔ РД ↔ ФАКТ      СТАТУС ИД
      │                │
      │                ├── Оригиналы
      │                ├── ЖВК
      │                ├── ОЖР
      │                ├── Схемы
      │                ├── АОСР
      │                └── Комплект
      │
      └────────┬─────────┘
               ▼
         КОНТРОЛЬ СДАЧИ
```

И на сайте можно сделать буквально:

**«От спецификации до готового комплекта ИД»**

с анимацией прохождения данных через эти этапы.

Вот это уже будет **очень сильный портфолио-кейс**, потому что человек увидит не только таблицу, но и твоё **мышление как инженера**:

> исходные данные → структурирование → контроль → исполнительная документация → сдача.

---

# Но я бы сейчас не стал сразу писать код для сайта

Сначала нужно **закрепить модель данных**.

У нас уже есть:

1. твоя `СРАВНЕНИЕ`;
2. твоя `ШАХМАТКА`;
3. Power Query функция;
4. 1 162 позиции;
5. статусы;
6. 20 систем;
7. признаки дублей;
8. связь ПД/РД/факта.

Следующий правильный шаг — построить **одну каноническую схему данных**, из которой потом автоматически будут строиться и `СРАВНЕНИЕ`, и `ШАХМАТКА`.

И я бы сделал это прямо на твоих реальных колонках, а не на абстрактном примере.

**Загрузи сам файл шахматки и, желательно, файл/результат `СРАВНЕНИЕ`.** Тогда я смогу сопоставить их поле к полю и предложить конкретную модель:

```text
SOURCE → MASTER → CONTROL → ID TRACKING
```

с указанием **какие твои нынешние столбцы оставить, какие объединить, какие вычислять, какие вынести в отдельную таблицу и какие поля использовать как ключи**.

---

**User:**

вот формулы

\=ТЕКСТ(ОКРУГЛ(СУММ(1/СЧЁТЕСЛИ($C$3\:C3; $C$3\:C3)); 0); "00") & "." & ТЕКСТ(СЧЁТЕСЛИ($C$3\:C3; C3); "00")



\=СЧЁТЕСЛИ($C$3\:C3; C3)



АВТ

это удобная система для нумарации документов внутри системы и уникальный ID каддлой позиции, он поомгает удобнее отслеживать всё



| **01.01** |  **1**  | **АВТ**  |
| --------- | ------- | -------- |
| **01.02** |  **2**  |  **АВТ** |
| **01.03** |  **3**  | **АВТ**  |
| **01.04** |  **4**  |  **АВТ** |

---

**Assistant:**

Да. Теперь стало понятно, что `01.01` у тебя — не просто красивый номер, а **человеко-читаемый составной идентификатор позиции**, где:

- `01` — номер системы в порядке появления;
- `01` — порядковый номер позиции внутри этой системы.

То есть:

```text
01.01 → первая система, первая позиция
01.02 → первая система, вторая позиция
01.03 → первая система, третья позиция

02.01 → вторая система, первая позиция
02.02 → вторая система, вторая позиция

03.01 → третья система, первая позиция
...
```

Это очень полезная концепция для твоей шахматки.

Но я бы разделил **два понятия**, которые сейчас у тебя объединены.

## 1. `ID` — технический идентификатор

Нужен самой системе:

```text
position_id
```

Он должен быть стабильным и не зависеть от сортировки таблицы.

Например:

```text
POS-a8f31c
POS-b1942d
POS-c731ef
```

Или просто числовой ID:

```text
125
126
127
```

---

## 2. `01.01` — рабочий номер позиции

А вот это оставить обязательно:

```text
№ позиции
01.01
01.02
01.03
```

Это **операционный номер**, удобный человеку.

То есть:

```text
ID            = POS-8F31A2
PositionNo    = 01.03
System        = АВТ
Name          = ...
```

Получается:

> **ID нужен данным, `01.03` нужен инженеру.**

Это значительно надёжнее.

---

# Твои текущие формулы

Первая:

```excel
=ТЕКСТ(
    ОКРУГЛ(
        СУММ(1/СЧЁТЕСЛИ($C$3:C3;$C$3:C3));
        0
    );
    "00"
) & "." &
ТЕКСТ(
    СЧЁТЕСЛИ($C$3:C3;C3);
    "00"
)
```

делает именно **номер системы + номер позиции внутри системы**.

Например:

| Система | Результат |
|---|---:|
| АВТ | 01.01 |
| АВТ | 01.02 |
| АВТ | 01.03 |
| АВТ | 01.04 |
| СКС | 02.01 |
| СКС | 02.02 |
| СКС | 02.03 |
| СОТ | 03.01 |

А вторая:

```excel
=СЧЁТЕСЛИ($C$3:C3;C3)
```

даёт именно:

```text
1
2
3
4
...
```

для позиции внутри системы.

---

# И вот здесь я бы немного изменил архитектуру

Не надо хранить только:

```text
ID = 01.03
```

Сделай три поля:

```text
SYSTEM_ID
POSITION_NO
POSITION_KEY
```

Например:

```text
SYSTEM_ID     = 01
POSITION_NO   = 03
POSITION_KEY  = 01.03
```

А потом уже:

```text
SYSTEM = АВТ
```

Получаем:

```text
SYSTEM_ID:    01
SYSTEM:       АВТ
POSITION_NO:  03
POSITION_KEY: 01.03
```

---

# Почему это важно для твоей будущей автоматизации

Ты хочешь:

```text
СРАВНЕНИЕ
    ↓
автоматическое обновление
    ↓
ШАХМАТКА
```

И здесь `01.03` становится очень удобным **business key**, но не обязательно должен быть техническим database ID.

Например, приходит обновлённая РД.

Было:

```text
АВТ
01.01
01.02
01.03
01.04
```

добавилась позиция.

Если ты просто пересортировал таблицу, номера могут измениться:

```text
АВТ
01.01
01.02
01.03 ← новая позиция
01.04
01.05
```

И если все статусы ИД были привязаны прямо к `01.04`, можно случайно перенести статус одной позиции на другую.

Поэтому:

```text
POSITION_ID
```

должен быть стабильным, а `01.04` — отображаемым номером.

---

# Но у тебя есть ещё более интересная возможность

Можно сделать **детерминированный ключ позиции** из содержания.

Например:

```text
System
+
ProjectCode
+
Name
+
Unit
+
Manufacturer
+
EquipmentCode
```

После нормализации.

Условно:

```text
СКУД|Рубеж|ИО102-39|шт
```

→

```text
POSITION_KEY_HASH
```

и получаем:

```text
POS-7F24A9
```

Тогда даже если источник изменился:

```text
ИО 102-39
```

на:

```text
ИО-102-39
```

после нормализации можно понять, что это **та же позиция**.

Это очень хорошо сочетается с твоим Power Query/Fuzzy Matching.

---

# Я бы тогда построил идентификацию так

```text
                    ПОЗИЦИЯ
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       System ID    Position ID   Position No
          01          POS-83A2       01.03
          │
          ▼
         АВТ
```

И:

### Технически

```text
POS-83A2
```

### Человеку

```text
АВТ / 01.03
```

---

# И это прекрасно ляжет на твою будущую «шахматку»

Например:

```text
┌─────────┬───────┬────────┬─────────────────────┬─────────┐
│ ID      │ №     │ Сист.  │ Позиция             │ РД      │
├─────────┼───────┼────────┼─────────────────────┼─────────┤
│ POS-8A1 │ 01.01 │ АВТ    │ Контроллер ...      │ 5       │
│ POS-9F2 │ 01.02 │ АВТ    │ Модуль ...          │ 12      │
│ POS-71C │ 01.03 │ АВТ    │ Датчик ...          │ 24      │
└─────────┴───────┴────────┴─────────────────────┴─────────┘
```

А уже ниже статусы:

```text
Оригиналы      ✓
ЖВК             ✓
ОЖР             ✓
Схема           —
АОСР            —
Комплект        —
```

---

# И ещё один хороший момент в твоей формуле

Твой подход:

```excel
СУММ(1/СЧЁТЕСЛИ(...))
```

определяет **порядковый номер уникальной системы по мере появления**.

То есть ты не задаёшь вручную:

```text
АВТ = 01
СКС = 02
СОТ = 03
```

а позволяешь таблице строить нумерацию автоматически.

Это хорошо для рабочей таблицы.

Но я бы **не делал этот номер источником истины**.

Лучше:

```text
SystemCode = АВТ
SystemOrder = 01
```

где `SystemCode` является постоянным идентификатором системы, а `SystemOrder` — только её отображаемым номером.

---

# В итоге у тебя получается очень хорошая модель

```text
                    SOURCE
                      │
                      ▼
                NORMALIZATION
                      │
                      ▼
                 POSITIONS
                      │
        ┌─────────────┼─────────────┐
        │             │             │
    SYSTEM_ID    POSITION_ID   POSITION_NO
       АВТ          POS-123        01.03
        │                            │
        │                            ▼
        │                          UI
        │                         01.03
        │
        ▼
   СРАВНЕНИЕ
        │
        ▼
     ШАХМАТКА
        │
        ▼
  СТАТУС ИД
```

Это уже гораздо ближе к архитектуре **маленькой информационной системы**, чем к просто Excel-книге.

И твой `01.01 / 01.02 / 01.03` я бы точно **не выбрасывал**. Наоборот, я бы сохранил его как основной визуальный номер позиции, потому что для инженера он очень удобен: его можно быстро найти в реестре, назвать голосом, написать в замечании, сослаться на него в переписке и связать с комплектом документации.

---

**User:**

а вот и моё расширение для браузера в Exon

\<!DOCTYPE html>
 \<html lang="ru">
 \<head>
     \<meta charset="UTF-8">
     \<title>EXON JVK v2.3\</title>
     \<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
     \<link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
     \<link href="[https://fonts.googleapis.com/css2?family=Inter\:wght@400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Inter\:wght@400;500;600;700\&display=swap)" rel="stylesheet">
     \<style>
         \:root {
             --bg-color: #F8FAFC;
             --card-bg: #FFFFFF;
             --text-primary: #0F172A;
             --text-secondary: #64748B;
             --border-color: #E2E8F0;
             
             --primary-btn: #0F172A;
             --primary-btn-hover: #334155;
             --secondary-btn: #F1F5F9;
             --secondary-btn-hover: #E2E8F0;
             
             --chip-blue-bg: #EFF6FF;
             --chip-blue-text: #1D4ED8;
             --chip-green-bg: #F0FDF4;
             --chip-green-text: #15803D;
             --chip-yellow-bg: #FEFCE8;
             --chip-yellow-text: #A16207;
             --chip-purple-bg: #FAF5FF;
             --chip-purple-text: #7E22CE;
         }
 
         \* {
             box-sizing: border-box;
             margin: 0;
             padding: 0;
         }
 
         body {
             width: 420px;
             background: var(--bg-color);
             color: var(--text-primary);
             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
             padding: 24px;
             -webkit-font-smoothing: antialiased;
         }
 
         /\* Top Bar \*/
         .top-bar {
             display: flex;
             justify-content: space-between;
             align-items: center;
             margin-bottom: 24px;
         }
 
         .pill-badge {
             background: var(--card-bg);
             border: 1px solid var(--border-color);
             padding: 6px 14px;
             border-radius: 99px;
             font-size: 12px;
             font-weight: 600;
             color: var(--text-primary);
             box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
             display: flex;
             align-items: center;
             gap: 6px;
         }
 
         .pill-badge.version {
             color: var(--text-secondary);
             font-weight: 500;
         }
 
         /\* Cards \*/
         .card {
             background: var(--card-bg);
             border-radius: 24px;
             padding: 24px;
             box-shadow: 0 12px 32px rgba(15, 23, 42, 0.04), 0 2px 8px rgba(15, 23, 42, 0.02);
             margin-bottom: 20px;
             border: 1px solid rgba(255, 255, 255, 0.5);
         }
 
         .section-title {
             font-size: 14px;
             font-weight: 600;
             margin-bottom: 12px;
             display: flex;
             align-items: center;
             gap: 8px;
             color: var(--text-primary);
         }
 
         .section-title svg {
             color: var(--text-secondary);
         }
 
         .divider {
             height: 1px;
             background: var(--border-color);
             margin: 20px 0;
         }
 
         /\* File Upload \*/
         .file-upload-wrapper {
             position: relative;
             margin-bottom: 12px;
         }
 
         .file-upload-btn {
             display: flex;
             align-items: center;
             justify-content: center;
             gap: 8px;
             width: 100%;
             padding: 14px;
             background: var(--secondary-btn);
             color: var(--text-primary);
             border-radius: 16px;
             font-size: 13px;
             font-weight: 600;
             cursor: pointer;
             transition: all 0.2s ease;
             border: 1px dashed #CBD5E1;
         }
 
         .file-upload-btn\:hover {
             background: var(--secondary-btn-hover);
             border-color: #94A3B8;
         }
 
         input[type="file"] {
             display: none;
         }
 
         .info-text {
             font-size: 12px;
             color: var(--text-secondary);
             line-height: 1.5;
         }
 
         /\* Buttons \*/
         .btn-group {
             display: flex;
             gap: 12px;
             margin-top: 12px;
         }
 
         button {
             flex: 1;
             padding: 14px 16px;
             border: none;
             border-radius: 16px;
             font-family: inherit;
             font-size: 13px;
             font-weight: 600;
             cursor: pointer;
             transition: all 0.2s ease;
             display: inline-flex;
             align-items: center;
             justify-content: center;
             gap: 8px;
         }
 
         button.primary {
             background: var(--primary-btn);
             color: white;
             box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
         }
 
         button.primary\:hover {
             background: var(--primary-btn-hover);
             transform: translateY(-1px);
         }
 
         button.secondary {
             background: var(--secondary-btn);
             color: var(--text-primary);
         }
 
         button.secondary\:hover {
             background: var(--secondary-btn-hover);
         }
         
         button.danger-ghost {
             background: #FEF2F2;
             color: #B91C1C;
         }
         
         button.danger-ghost\:hover {
             background: #FEE2E2;
         }
 
         button\:disabled {
             opacity: 0.5;
             cursor: not-allowed;
             transform: none !important;
             box-shadow: none !important;
         }
 
         .icon-btn {
             flex: 0 0 auto;
             padding: 14px;
         }
 
         /\* Status Box \*/
         .status {
             padding: 16px 20px;
             border-radius: 20px;
             font-size: 13px;
             font-weight: 500;
             line-height: 1.5;
             margin-bottom: 24px;
             display: flex;
             align-items: flex-start;
             gap: 10px;
             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
             border: 1px solid transparent;
         }
 
         .status::before {
             content: '';
             display: block;
             width: 20px;
             height: 20px;
             flex-shrink: 0;
             background-size: contain;
             background-repeat: no-repeat;
         }
 
         .status.info { 
             background: var(--chip-blue-bg); 
             color: var(--chip-blue-text); 
             border-color: #DBEAFE;
         }
         .status.info::before { background-image: url("data\:image/svg+xml,%3Csvg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' fill='none' viewBox='0 0 24 24' stroke='%231D4ED8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E"); }
 
         .status.success { 
             background: var(--chip-green-bg); 
             color: var(--chip-green-text); 
             border-color: #DCFCE7;
         }
         .status.success::before { background-image: url("data\:image/svg+xml,%3Csvg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' fill='none' viewBox='0 0 24 24' stroke='%2315803D'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E"); }
 
         .status.warn { 
             background: var(--chip-yellow-bg); 
             color: var(--chip-yellow-text); 
             border-color: #FEF08A;
         }
         .status.warn::before { background-image: url("data\:image/svg+xml,%3Csvg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' fill='none' viewBox='0 0 24 24' stroke='%23A16207'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'/%3E%3C/svg%3E"); }
 
         .status.error { 
             background: #FEF2F2; 
             color: #B91C1C; 
             border-color: #FECACA;
         }
         .status.error::before { background-image: url("data\:image/svg+xml,%3Csvg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' fill='none' viewBox='0 0 24 24' stroke='%23B91C1C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E"); }
 
         /\* Data Card Generated HTML styles \*/
         #dataCard .title {
             font-size: 20px;
             font-weight: 700;
             letter-spacing: -0.02em;
             margin-bottom: 6px;
         }
 
         #dataCard .name {
             font-size: 14px;
             color: var(--text-secondary);
             margin-bottom: 20px;
             line-height: 1.5;
         }
 
         #dataCard .chips {
             display: flex;
             flex-wrap: wrap;
             gap: 10px;
             margin-bottom: 20px;
         }
 
         #dataCard .chip {
             background: var(--chip-purple-bg);
             color: var(--chip-purple-text);
             padding: 6px 14px;
             border-radius: 99px;
             font-size: 12px;
             font-weight: 600;
             display: inline-flex;
             align-items: center;
         }
 
         #dataCard .chip.ok {
             background: var(--chip-green-bg);
             color: var(--chip-green-text);
         }
 
         #dataCard .meta {
             font-size: 13px;
             color: var(--text-secondary);
             margin-bottom: 8px;
             display: flex;
             align-items: center;
             gap: 8px;
         }
 
         #dataCard .meta::before {
             content: "•";
             color: #CBD5E1;
             font-size: 18px;
             line-height: 1;
         }
 
         /\* Checkbox \*/
         .checkbox-wrapper {
             display: flex;
             align-items: center;
             gap: 12px;
             font-size: 13px;
             color: var(--text-primary);
             font-weight: 600;
             margin: 20px 0;
             cursor: pointer;
             user-select: none;
         }
 
         .checkbox-wrapper input[type="checkbox"] {
             appearance: none;
             width: 20px;
             height: 20px;
             border: 2px solid #CBD5E1;
             border-radius: 6px;
             outline: none;
             cursor: pointer;
             transition: all 0.2s ease;
             position: relative;
             background: var(--card-bg);
         }
 
         .checkbox-wrapper input[type="checkbox"]\:checked {
             background: var(--primary-btn);
             border-color: var(--primary-btn);
         }
 
         .checkbox-wrapper input[type="checkbox"]\:checked::after {
             content: "";
             position: absolute;
             left: 6px;
             top: 2px;
             width: 5px;
             height: 10px;
             border: solid white;
             border-width: 0 2px 2px 0;
             transform: rotate(45deg);
         }
 
         /\* Empty State \*/
         .empty-state {
             text-align: center;
             color: var(--text-secondary);
             padding: 32px 20px;
         }
 
         .empty-state svg {
             width: 48px;
             height: 48px;
             color: #CBD5E1;
             margin-bottom: 16px;
         }
 
         /\* --- Стили для кнопки шаблона CSV --- \*/
         .download-template-btn {
             margin-top: 24px;
             width: 100%;
             padding: 12px;
             border-radius: 14px;
             border: 2px solid #3B82F6; /\* Синяя обводка \*/
             color: #1D4ED8;
             font-weight: 600;
             font-size: 13px;
             cursor: pointer;
             display: flex;
             align-items: center;
             justify-content: center;
             gap: 8px;
             /\* Градиент в оттенках синего \*/
             background: linear-gradient(270deg, #EFF6FF, #BFDBFE, #DBEAFE, #EFF6FF);
             background-size: 300% 300%;
             animation: gradient-shift 4s ease infinite;
             transition: transform 0.2s ease, box-shadow 0.2s ease;
             text-decoration: none;
             font-family: inherit;
         }
 
         .download-template-btn\:hover {
             transform: translateY(-1px);
             box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
         }
 
         @keyframes gradient-shift {
             0% { background-position: 0% 50%; }
             50% { background-position: 100% 50%; }
             100% { background-position: 0% 50%; }
         }
 
         /\* --- Стили журнала версий (Changelog) --- \*/
         .info-icon-btn {
             width: 28px;
             height: 28px;
             border-radius: 50%;
             background: var(--chip-blue-bg);
             color: var(--chip-blue-text);
             border: 1px solid #DBEAFE;
             display: flex;
             align-items: center;
             justify-content: center;
             font-weight: 700;
             font-family: 'Inter', serif;
             font-size: 14px;
             font-style: italic;
             cursor: pointer;
             transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s ease;
             padding: 0;
             flex-shrink: 0;
             box-shadow: 0 2px 6px rgba(29, 78, 216, 0.15);
         }
         .info-icon-btn\:hover {
             background: #DBEAFE;
         }
         .info-icon-btn.flipped {
             transform: rotateY(360deg) scale(1.1);
         }
 
         .changelog-modal {
             position: fixed;
             top: 60px;
             left: 20px;
             width: 380px;
             max-height: calc(100vh - 84px); /\* Динамическая высота вместо жестких 450px \*/
             background: var(--card-bg);
             border: 1px solid var(--border-color);
             border-radius: 16px;
             box-shadow: 0 12px 40px rgba(15, 23, 42, 0.15), 0 4px 12px rgba(15, 23, 42, 0.05);
             display: flex;
             flex-direction: column;
             z-index: 9999;
             overflow: hidden;
             transition: opacity 0.3s ease, transform 0.3s ease;
             opacity: 0;
             transform: translateY(-10px) scale(0.98);
             pointer-events: none;
             resize: vertical; /\* Разрешаем растягивать само окно по вертикали \*/
             min-height: 180px;
         }
         .changelog-modal.visible {
             opacity: 1;
             transform: translateY(0) scale(1);
             pointer-events: auto;
         }
 
         /\* Кастомный уголок для изменения размера самого модального окна \*/
         .changelog-modal::-webkit-resizer {
             background-image: url("data\:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)'%3E%3Cpath d='M12 2L2 12M12 6L6 12M12 10L10 12' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
             background-repeat: no-repeat;
             background-position: bottom 4px right 4px;
             background-color: transparent;
             cursor: ns-resize;
         }
 
         .changelog-header {
             padding: 14px 16px;
             background: var(--secondary-btn);
             cursor: grab;
             display: flex;
             justify-content: space-between;
             align-items: center;
             border-bottom: 1px solid var(--border-color);
             user-select: none;
         }
         .changelog-header\:active {
             cursor: grabbing;
         }
         .changelog-title {
             font-weight: 700;
             color: var(--text-primary);
             display: flex;
             align-items: center;
             gap: 8px;
             font-size: 14px;
         }
         .close-modal-btn {
             background: transparent;
             border: none;
             color: var(--text-secondary);
             font-size: 16px;
             cursor: pointer;
             padding: 4px;
             border-radius: 50%;
             display: flex;
             align-items: center;
             justify-content: center;
             transition: background 0.2s, color 0.2s;
             box-shadow: none !important;
             flex: none;
         }
         .close-modal-btn\:hover {
             background: #E2E8F0;
             color: #0F172A;
         }
         
         .changelog-controls {
             padding: 10px 16px;
             border-bottom: 1px solid var(--border-color);
             display: flex;
             justify-content: flex-end;
             background: #F8FAFC;
             flex-shrink: 0;
         }
         
         .changelog-content {
             padding: 12px 16px;
             overflow-y: auto;
             display: flex;
             flex-direction: column;
             gap: 8px;
             flex: 1; /\* Позволяет контенту корректно заполнять окно при ручном растягивании \*/
         }
 
         .version-item {
             border: 1px solid var(--border-color);
             border-radius: 12px;
             overflow: hidden;
             background: var(--card-bg);
             transition: border-color 0.2s ease;
         }
         .version-item.active {
             border-color: #94A3B8;
         }
         .version-header {
             padding: 12px;
             cursor: pointer;
             display: flex;
             justify-content: space-between;
             align-items: center;
             font-weight: 600;
             font-size: 13px;
             user-select: none;
             transition: background 0.2s ease;
         }
         .version-header\:hover {
             background: #F1F5F9;
         }
         .version-title-group {
             display: flex;
             align-items: center;
             gap: 8px;
         }
         .version-badge {
             font-size: 10px;
             padding: 2px 6px;
             border-radius: 6px;
             font-weight: 700;
             text-transform: uppercase;
         }
         .version-badge.latest {
             background: var(--chip-green-bg);
             color: var(--chip-green-text);
         }
 
         /\* --- Обновленная логика раскрытия с помощью CSS Grid --- \*/
         .version-body {
             display: grid;
             grid-template-rows: 0fr;
             transition: grid-template-rows 0.3s ease-in-out, opacity 0.2s ease-in-out;
             opacity: 0;
         }
         .version-item.active .version-body {
             grid-template-rows: 1fr;
             opacity: 1;
         }
         .version-body-inner {
             overflow: hidden; /\* Важно для работы grid-переходов \*/
         }
         
         /\* Внутренний контейнер с текстом, который можно растягивать \*/
         .version-text {
             padding: 0 12px 12px 12px;
             font-size: 13px; /\* Увеличил размер шрифта \*/
             color: var(--text-secondary);
             line-height: 1.6; /\* Добавил воздуха между строками \*/
             overflow-y: auto;
             resize: vertical;
             min-height: 100px; /\* Увеличил стартовую высоту, чтобы не сжималось в 1 строку \*/
             height: max-content; /\* Гарантирует авто-высоту по контенту вместо схлопывания \*/
             max-height: 400px;
             width: 100%;
             box-sizing: border-box;
         }
         
         .version-item\:not(.active) .version-text {
             resize: none;
         }
 
         /\* Кастомный уголок (Resize Grip) похожий на диагональные насечки \*/
         .version-text::-webkit-resizer {
             background-image: url("data\:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)'%3E%3Cpath d='M10 2L2 10M10 6L6 10M10 10L9.9 10.1' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
             background-repeat: no-repeat;
             background-position: bottom 2px right 2px;
             background-color: transparent;
             cursor: ns-resize;
         }
 
         /\* Кастомный скроллбар для текста \*/
         .version-text::-webkit-scrollbar,
         .changelog-content::-webkit-scrollbar {
             width: 6px;
         }
         .version-text::-webkit-scrollbar-track,
         .changelog-content::-webkit-scrollbar-track {
             background: transparent;
         }
         .version-text::-webkit-scrollbar-thumb,
         .changelog-content::-webkit-scrollbar-thumb {
             background: #CBD5E1;
             border-radius: 3px;
         }
         .version-text::-webkit-scrollbar-thumb\:hover,
         .changelog-content::-webkit-scrollbar-thumb\:hover {
             background: #94A3B8;
         }
 
         .chevron-icon {
             transition: transform 0.3s ease;
             color: var(--text-secondary);
         }
         .version-item.active .chevron-icon {
             transform: rotate(180deg);
         }
     \</style>
 \</head>
 \<body>
 
     \<div class="top-bar">
         \<div class="pill-badge title-badge" style="gap: 6px; padding: 6px 14px;">
             \<span style="color: #2563EB; font-weight: 800; letter-spacing: 0.5px;">EXON\</span>
             \<span style="color: #CBD5E1;">|\</span>
             \<span style="color: var(--text-primary); font-weight: 600;">Автозаполнение ЖВК\</span>
         \</div>
         \<div style="display: flex; gap: 8px; align-items: center;">
             \<button id="infoBtn" class="info-icon-btn" title="История версий">i\</button>
             \<div class="pill-badge version">v2.3\</div>
         \</div>
     \</div>
 
     \<!-- Информационный статус -->
     \<div id="statusBox" class="status info">Загрузите CSV и подключите папку с PDF для текущей страницы Exon.\</div>
 
     \<!-- Карточка загрузки исходных данных -->
     \<div class="card">
         \<div class="section-title">
             \<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">\<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z">\</path>\<polyline points="14 2 14 8 20 8">\</polyline>\<line x1="16" y1="13" x2="8" y2="13">\</line>\<line x1="16" y1="17" x2="8" y2="17">\</line>\<polyline points="10 9 9 9 8 9">\</polyline>\</svg>
             Источник данных (CSV)
         \</div>
         
         \<div class="file-upload-wrapper">
             \<label for="csvFile" class="file-upload-btn">
                 \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4">\</path>\<polyline points="17 8 12 3 7 8">\</polyline>\<line x1="12" y1="3" x2="12" y2="15">\</line>\</svg>
                 Выбрать файл
             \</label>
             \<input type="file" id="csvFile" accept=".csv">
         \</div>
         \<div id="sourceInfo" class="info-text">CSV еще не загружен\</div>
         
         \<div class="divider">\</div>
 
         \<div class="section-title">
             \<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">\<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">\</path>\</svg>
             Папка с документами (PDF)
         \</div>
         
         \<div class="btn-group" style="margin-top: 10px; margin-bottom: 12px;">
             \<button id="connectFolderBtn" class="primary">
                 Подключить PDF
             \</button>
             \<button id="refreshFolderBtn" class="secondary icon-btn" title="Обновить статус папки">
                 \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<polyline points="23 4 23 10 17 10">\</polyline>\<polyline points="1 20 1 14 7 14">\</polyline>\<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15">\</path>\</svg>
             \</button>
         \</div>
         \<div id="folderInfo" class="info-text">Папка PDF пока не подключена к вкладке Exon\</div>
     \</div>
 
     \<!-- Карточка активных данных -->
     \<div id="dataCard" class="card" style="display\:none;">
         \<div id="rowDisplay">\</div>
         
         \<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
             \<div id="stats" class="info-text" style="font-weight: 500; color: var(--text-primary);">\</div>
             \<div class="btn-group" style="margin-top: 0;">
                 \<button id="prevBtn" class="secondary icon-btn" style="padding: 10px 14px;">
                     \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<polyline points="15 18 9 12 15 6">\</polyline>\</svg>
                 \</button>
                 \<button id="nextBtn" class="secondary icon-btn" style="padding: 10px 14px;">
                     \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<polyline points="9 18 15 12 9 6">\</polyline>\</svg>
                 \</button>
             \</div>
         \</div>
 
         \<div class="divider">\</div>
 
         \<label class="checkbox-wrapper">
             \<input type="checkbox" id="autoAdvance">
             \<span>Автоматически переходить к следующей\</span>
         \</label>
 
         \<div style="display: flex; flex-direction: column; gap: 10px;">
             \<button id="fillBtn" class="secondary">
                 \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">\</path>\<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">\</path>\</svg>
                 Заполнить текущую форму
             \</button>
             \<button id="fillNextBtn" class="primary">
                 \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<polygon points="5 3 19 12 5 21 5 3">\</polygon>\</svg>
                 Заполнить и перейти дальше
             \</button>
             \<button id="resetBtn" class="danger-ghost">
                 \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<polyline points="3 6 5 6 21 6">\</polyline>\<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">\</path>\</svg>
                 Очистить загруженные данные
             \</button>
         \</div>
     \</div>
 
     \<!-- Пустое состояние -->
     \<div id="noData" class="card empty-state">
         \<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\<circle cx="12" cy="12" r="10">\</circle>\<line x1="12" y1="8" x2="12" y2="12">\</line>\<line x1="12" y1="16" x2="12.01" y2="16">\</line>\</svg>
         \<div>Здесь появятся данные позиции после загрузки CSV файла.\</div>
         
         \<button id="downloadTemplateBtn" class="download-template-btn">
             \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4">\</path>\<polyline points="7 10 12 15 17 10">\</polyline>\<line x1="12" y1="15" x2="12" y2="3">\</line>\</svg>
             Скачать шаблон CSV
         \</button>
     \</div>
 
     \<!-- Модальное окно истории версий -->
     \<div id="changelogModal" class="changelog-modal">
         \<div class="changelog-header" id="changelogHeader">
             \<div class="changelog-title">
                 \<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z">\</path>\<polyline points="14 2 14 8 20 8">\</polyline>\<line x1="12" y1="18" x2="12" y2="12">\</line>\<line x1="9" y1="15" x2="15" y2="15">\</line>\</svg>
                 Журнал версий
             \</div>
             \<button id="closeChangelogBtn" class="close-modal-btn">✕\</button>
         \</div>
         \<div class="changelog-controls">
             \<button id="toggleAllVersionsBtn" class="secondary" style="padding: 6px 12px; font-size: 11px; flex: none; height: auto;">Развернуть все\</button>
         \</div>
         \<div class="changelog-content" id="changelogContent">
             \<!-- Версии создаются через JS -->
         \</div>
     \</div>
 
     \<script>
         document.addEventListener("DOMContentLoaded", () => {
             const infoBtn = document.getElementById('infoBtn');
             const modal = document.getElementById('changelogModal');
             const closeBtn = document.getElementById('closeChangelogBtn');
             const header = document.getElementById('changelogHeader');
             const toggleAllBtn = document.getElementById('toggleAllVersionsBtn');
             const content = document.getElementById('changelogContent');
             const downloadTemplateBtn = document.getElementById('downloadTemplateBtn');
 
             // Скачивание шаблона CSV
             downloadTemplateBtn.addEventListener('click', () => {
                 const csvHeaders = "id;shifr\_rd;pos;name;unit;qty;organization;doc\_type;doc\_number;doc\_date;doc\_expiry;file\_path;status\n";
                 const csvSample1 = "1;НК-750.28-02-АОВ Автоматизация систем общеобменной вентиляции;1;Привод воздушной заслонки, Откр/Закр А.2хЕ.5.05(S);шт.;45;НПТ Климатика;Декларация;ЕАЭС;05.09.2022;04.08.2027;C:\\\\\\\Users\\\\\\\User\\\\\\\Desktop\\\\\\\от Артемия\\\\\\\НК-750.28-02-АОВ\\\\\\\1. Привод воздушной заслонки, ОткрЗакр А.2хЕ.5.05(S) Декларация о соответствии №ЕАЭС N RU Д-RU.РА06.В.18450\_22 от 05.09.2022 до 04.08.2027.pdf;READY\n";
                 const csvSample2 = "78;НК-750.28-02-АОВ Автоматизация систем общеобменной вентиляции;41;Кабель контрольный с медными многопроволочными жилами, изоляцией и в оболочке из полимерной композиции с пониженной токсичностью продуктов горения МКШВнг(А)-LSLTx 3x2x0,75;м.;1052;Сегмент Энерго или аналог;Паспорт;454;22.07.2025;;C:\\\\\\\Users\\\\\\\User\\\\\\\Desktop\\\\\\\от Артемия\\\\\\\НК-750.28-02-АОВ\\\\\\\Кабельная продукция\\\\\\\41. ПАСПОРТ КАЧЕСТВА Кабель МКШВнг(А)-LSLTx 3х2х0,75мк №454 925 от 22.07.2025.pdf;READY\n";
                 
                 const csvContent = csvHeaders + csvSample1 + csvSample2;
                 const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
                 const url = URL.createObjectURL(blob);
                 
                 const link = document.createElement('a');
                 link.href = url;
                 link.download = 'Exon\_JVK\_Template\_AOV.csv';
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
                 URL.revokeObjectURL(url);
             });
 
             const versionsData = [
                 {
                     version: "2.3",
                     title: "Актуальная",
                     isLatest: true,
                     text: "\<li>Автозагрузка PDF из подключенной папки.\</li>\<li>Умный разбор номеров и дат из имени файла.\</li>\<li>Новый современный интерфейс с мягкими тенями.\</li>\<li>Добавлено срывающееся окно журнала версий с возможностью перемещения.\</li>"
                 },
                 {
                     version: "2.2",
                     title: "Стабильная",
                     isLatest: false,
                     text: "\<li>Улучшено чтение CSV файлов сложной структуры.\</li>\<li>Добавлена поддержка кодировки UTF-8 с BOM.\</li>\<li>Исправлены ошибки парсинга пустых строк.\</li>"
                 },
                 {
                     version: "2.1",
                     title: "Обновление",
                     isLatest: false,
                     text: "\<li>Добавлен выбор режима разбора наименований документов.\</li>\<li>Мелкие правки и улучшения стабильности UI.\</li>"
                 },
                 {
                     version: "2.0",
                     title: "Мажорное",
                     isLatest: false,
                     text: "\<li>Полностью переработан алгоритм заполнения форм.\</li>\<li>Добавлена поддержка новых полей спецификации EXON.\</li>"
                 },
                 {
                     version: "1.1",
                     title: "Оптимизация",
                     isLatest: false,
                     text: "\<li>Ускорена работа с большими CSV файлами (до 10 000 строк).\</li>\<li>Добавлен вывод предупреждений об ошибках загрузки.\</li>"
                 },
                 {
                     version: "1.0",
                     title: "Релиз",
                     isLatest: false,
                     text: "\<li>Первая версия расширения.\</li>\<li>Базовое заполнение полей (Наименование, РД, Кол-во) на основе CSV.\</li>"
                 }
             ];
 
             // 1. Рендер версий (Обновлено с дополнительной оберткой для Grid анимации)
             content.innerHTML = versionsData.map((v, index) => \`
                 \<div class="version-item ${index === 0 ? 'active' : ''}">
                     \<div class="version-header">
                         \<div class="version-title-group">
                             \<span style="color: var(--primary-btn);">Версия ${v.version}\</span>
                             ${v.isLatest 
                                 ? \`\<span class="version-badge latest">Актуальная\</span>\` 
                                 : \`\<span class="version-badge" style="background: var(--chip-blue-bg); color: var(--chip-blue-text);">${v.title}\</span>\`}
                         \</div>
                         \<svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\<polyline points="6 9 12 15 18 9">\</polyline>\</svg>
                     \</div>
                     \<div class="version-body">
                         \<div class="version-body-inner">
                             \<div class="version-text">
                                 \<ul style="margin: 0; padding-left: 16px;">
                                     ${v.text}
                                 \</ul>
                             \</div>
                         \</div>
                     \</div>
                 \</div>
             \`).join('');
 
             // 2. Логика аккордеона
             const versionItems = document.querySelectorAll('.version-item');
             versionItems.forEach(item => {
                 const header = item.querySelector('.version-header');
                 const textContainer = item.querySelector('.version-text');
                 
                 header.addEventListener('click', () => {
                     item.classList.toggle('active');
                     // Сбрасываем высоту, если пользователь растягивал ее вручную
                     if (!item.classList.contains('active')) {
                         textContainer.style.height = ''; 
                     }
                     updateToggleAllButtonText();
                 });
             });
 
             // 3. Кнопка развернуть/свернуть все
             let allExpanded = false;
             toggleAllBtn.addEventListener('click', () => {
                 allExpanded = !allExpanded;
                 versionItems.forEach(item => {
                     const textContainer = item.querySelector('.version-text');
                     if (allExpanded) {
                         item.classList.add('active');
                     } else {
                         item.classList.remove('active');
                         textContainer.style.height = ''; // Сбрасываем растягивания
                     }
                 });
                 toggleAllBtn.textContent = allExpanded ? "Свернуть все" : "Развернуть все";
             });
 
             function updateToggleAllButtonText() {
                 const activeCount = document.querySelectorAll('.version-item.active').length;
                 if (activeCount === versionItems.length) {
                     allExpanded = true;
                     toggleAllBtn.textContent = "Свернуть все";
                 } else if (activeCount === 0) {
                     allExpanded = false;
                     toggleAllBtn.textContent = "Развернуть все";
                 }
             }
 
             // 4. Открытие/закрытие модального окна и анимация
             infoBtn.addEventListener('click', () => {
                 infoBtn.classList.toggle('flipped');
                 modal.classList.toggle('visible');
                 
                 if (modal.classList.contains('visible') && !modal.style.top) {
                     modal.style.top = '60px';
                     modal.style.left = '20px';
                 }
             });
 
             closeBtn.addEventListener('click', () => {
                 infoBtn.classList.remove('flipped');
                 modal.classList.remove('visible');
             });
 
             // 5. Перемещение (Drag and Drop)
             let isDragging = false;
             let startX, startY, initialX, initialY;
 
             header.addEventListener('mousedown', dragStart);
 
             function dragStart(e) {
                 if (e.target.closest('.close-modal-btn')) return;
                 
                 initialX = modal.offsetLeft;
                 initialY = modal.offsetTop;
                 startX = e.clientX;
                 startY = e.clientY;
                 isDragging = true;
 
                 document.addEventListener('mousemove', drag);
                 document.addEventListener('mouseup', dragEnd);
             }
 
             function drag(e) {
                 if (!isDragging) return;
                 e.preventDefault();
                 const currentX = e.clientX - startX;
                 const currentY = e.clientY - startY;
                 modal.style.left = (initialX + currentX) + "px";
                 modal.style.top = (initialY + currentY) + "px";
                 modal.style.right = 'auto';
             }
 
             function dragEnd() {
                 isDragging = false;
                 document.removeEventListener('mousemove', drag);
                 document.removeEventListener('mouseup', dragEnd);
             }
         });
     \</script>
 
     \<script src="popup.js">\</script>
 \</body>
 \</html>   



content

// content.js - Exon JVK v.2.4
console.log("Exon JVK 2.4 content script loaded");

const SELECTORS = {
modal: ".ant-modal-content, [role='dialog']",
receiveDate: "[data-testid='materials-drawer\_\_receive-date-picker'] input",
name: "[data-testid='materials-drawer\_\_ksi-list-autocomplete'] input",
rd: "[data-testid='materials-drawer\_\_rd-section-list-autocomplete'] input",
qty: "[data-testid='materials-drawer\_\_amount-input'] input",
unit: "[data-testid='materials-drawer\_\_unit-measure-autocomplete'] input",
supplier: "[data-testid='materials-drawer\_\_provider-org-autocomplete'] input",
dropzoneInput: "[data-testid='file-dropzone']",
cardRoot: ".Cardstyled\_\_CardContentWrapper-ivgIRw, .cardContentWrapper",
cardTitle: ".Cardstyled\_\_CardTitle-AynWy[aria-label], .cardTitle[aria-label]",
autocompleteOption: ".MuiAutocomplete-popper [role='option'], [role='listbox'] [role='option'], .MuiMenuItem-root, .ant-select-item-option",
checkboxInput: "input[type='checkbox'], .MuiCheckbox-root input, .ant-checkbox-input"
};

const docsSession = {
files: [],
folderName: "",
selectedAt: "",
lastError: ""
};

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
if (msg.action === "getDocsFolderStatus") {
sendResponse(getDocsFolderStatus());
return false;
}

```
if (msg.action === "pickDocsFolder") {
    pickDocsFolder()
        .then((result) => sendResponse({ ok: true, ...result }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
    return true;
}

if (msg.action === "fillExonForm") {
    fillForm(msg.data)
        .then((result) => sendResponse({ ok: true, ...result }))
        .catch((error) => {
            console.error("Fill error:", error);
            sendResponse({ ok: false, error: error.message || String(error) });
        });
    return true;
}

return false;
```

});

function getDocsFolderStatus() {
return {
ok: true,
folderName: docsSession.folderName,
fileCount: docsSession.files.length,
selectedAt: docsSession.selectedAt,
lastError: docsSession.lastError
};
}

async function pickDocsFolder() {
const input = ensureFolderPicker();

```
return new Promise((resolve) => {
    let resolved = false;

    const finish = (payload) => {
        if (resolved) {
            return;
        }
        resolved = true;
        window.removeEventListener("focus", handleFocus, true);
        input.onchange = null;
        resolve(payload);
    };

    const handleFocus = () => {
        window.setTimeout(() => {
            if (!resolved) {
                finish({
                    folderName: docsSession.folderName,
                    fileCount: docsSession.files.length,
                    selectedAt: docsSession.selectedAt,
                    cancelled: true
                });
            }
        }, 400);
    };

    input.value = "";
    input.onchange = () => {
        const files = Array.from(input.files || []).filter((file) => isPdfFile(file));
        docsSession.files = files;
        docsSession.folderName = extractFolderName(files);
        docsSession.selectedAt = new Date().toLocaleString("ru-RU");
        docsSession.lastError = "";

        finish({
            folderName: docsSession.folderName,
            fileCount: docsSession.files.length,
            selectedAt: docsSession.selectedAt,
            cancelled: false
        });
    };

    window.addEventListener("focus", handleFocus, true);
    input.click();
});
```

}

function ensureFolderPicker() {
let input = document.getElementById("\_\_exon\_jvk\_folder\_picker");
if (input) {
return input;
}

```
input = document.createElement("input");
input.type = "file";
input.id = "__exon_jvk_folder_picker";
input.multiple = true;
input.setAttribute("webkitdirectory", "");
input.setAttribute("directory", "");
input.accept = ".pdf,application/pdf";
input.style.position = "fixed";
input.style.left = "-9999px";
input.style.top = "-9999px";
document.documentElement.appendChild(input);
return input;
```

}

async function fillForm(group) {
if (!Array.isArray(group) || group.length === 0) {
throw new Error("Пустая группа данных для заполнения.");
}

```
const first = group[0];
const warnings = [];
const modal = await waitForSelector(document, SELECTORS.modal, 5000) || document;

await fillMainInfo(modal, first, warnings);

const matches = buildFileMatches(group, warnings);
if (matches.length > 0) {
    await uploadMatchedFiles(modal, matches, warnings);
} else {
    warnings.push("Для текущей позиции не найдено файлов в подключенной папке PDF.");
}

if (matches.length > 0) {
    const cardRoots = await waitForCardsForMatches(matches, 12000);
    if (!cardRoots.length) {
        warnings.push("Карточки документов не появились. Если загрузка файлов не сработала, попробуйте вручную выбрать PDF в блоке Exon.");
    }

    const limit = Math.min(cardRoots.length, matches.length);
    for (let index = 0; index < limit; index += 1) {
        await fillDocumentCard(cardRoots[index], matches[index].row, matches[index].file.name, warnings);
    }

    if (matches.length > cardRoots.length) {
        warnings.push(`Загруженных файлов: ${matches.length}, карточек документов на странице: ${cardRoots.length}.`);
    }
} else {
    const cardRoots = findAllCardRoots().slice(0, group.length);
    if (!cardRoots.length) {
        warnings.push("Карточки документов не появились. Если загрузка файлов не сработала, попробуйте вручную выбрать PDF в блоке Exon.");
    }

    const limit = Math.min(cardRoots.length, group.length);
    for (let index = 0; index < limit; index += 1) {
        await fillDocumentCard(cardRoots[index], group[index], basename(group[index].file_path), warnings);
    }

    if (group.length > cardRoots.length) {
        warnings.push(`Документов в CSV: ${group.length}, карточек на странице: ${cardRoots.length}.`);
    }
}

return {
    filledPos: first.pos || "",
    folderName: docsSession.folderName,
    uploadedFiles: matches.length,
    warnings
};
```

}

async function fillMainInfo(modal, row, warnings) {
const nameInput = modal.querySelector(SELECTORS.name) || await waitForSelector(modal, SELECTORS.name, 2000);
if (!nameInput) {
throw new Error("Не найдено поле 'Наименование'.");
}

```
await fillNameField(nameInput, row.name, modal);

const receiveDateInput = modal.querySelector(SELECTORS.receiveDate);
const receiveDate = normalizeDateString(row.delivery_date);
if (receiveDateInput && receiveDate) {
    setReactInputValue(receiveDateInput, receiveDate);
} else if (receiveDateInput && !receiveDate) {
    warnings.push("В CSV нет значения delivery_date, поле 'Дата поставки' оставлено пустым.");
}

const rdInput = modal.querySelector(SELECTORS.rd);
const rdCode = extractRDCode(row.shifr_rd);
if (rdInput && rdCode) {
    const selected = await chooseAutocompleteOption(rdInput, rdCode, {
        mode: "contains",
        preferCheckbox: true,
        allowTypedValue: false
    });
    if (!selected) {
        warnings.push(`Не удалось выбрать раздел РД '${rdCode}'.`);
    }
}

const qtyInput = modal.querySelector(SELECTORS.qty);
if (qtyInput && row.qty) {
    setReactInputValue(qtyInput, normalizeNumber(row.qty));
}

const unitInput = modal.querySelector(SELECTORS.unit);
if (unitInput && row.unit) {
    const selected = await chooseAutocompleteOption(unitInput, normalizeUnit(row.unit), {
        mode: "exact",
        allowTypedValue: true
    });
    if (!selected) {
        warnings.push(`Не удалось выбрать единицу измерения '${row.unit}'.`);
    }
}

const supplierInput = modal.querySelector(SELECTORS.supplier);
if (supplierInput && row.organization) {
    await chooseAutocompleteOption(supplierInput, row.organization, {
        mode: "contains",
        allowTypedValue: true
    });
}
```

}

async function fillNameField(input, value, modal) {
if (!input || !value) {
return;
}

```
focusAndClick(input);
setReactInputValue(input, value);
await sleep(250);

const exactOption = findAutocompleteOption(value, "exact");
if (exactOption) {
    clickAutocompleteOption(exactOption, false);
    await sleep(150);
}

clickOutside(modal);
await waitForDropdownToClose();
```

}

function buildFileMatches(group, warnings) {
const matches = [];
const missing = [];

```
for (const row of group) {
    const targetName = basename(row.file_path);
    const normalizedTarget = normalizeText(targetName);
    const file = docsSession.files.find((candidate) => (
        candidate.name === targetName
        || normalizeText(candidate.name) === normalizedTarget
    ));
    if (!file) {
        missing.push(targetName || `позиция ${row.pos}`);
        continue;
    }

    if (file.size > 50 * 1024 * 1024) {
        warnings.push(`Файл '${file.name}' больше 50 МБ (${Math.round(file.size / 1024 / 1024)} МБ). Exon может его отклонить.`);
    }

    matches.push({ row, file });
}

if (missing.length > 0) {
    warnings.push(`Не найдены файлы в выбранной папке: ${missing.join(", ")}.`);
}

return matches;
```

}

async function uploadMatchedFiles(modal, matches, warnings) {
const dropzoneInput = modal.querySelector(SELECTORS.dropzoneInput) || document.querySelector(SELECTORS.dropzoneInput);
if (!dropzoneInput) {
warnings.push("Не найден input для загрузки PDF в секции 'Сертификаты и паспорта'.");
return;
}

```
const files = matches.map((item) => item.file);
if (!files.length) {
    return;
}

setFilesOnInput(dropzoneInput, files);
await sleep(600);
```

}

function setFilesOnInput(input, files) {
const transfer = new DataTransfer();
files.forEach((file) => transfer.items.add(file));

```
const descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "files");
if (descriptor && descriptor.set) {
    descriptor.set.call(input, transfer.files);
} else {
    input.files = transfer.files;
}

input.dispatchEvent(new Event("input", { bubbles: true }));
input.dispatchEvent(new Event("change", { bubbles: true }));
```

}

async function waitForCardsForMatches(matches, timeoutMs) {
const started = Date.now();
while (Date.now() - started < timeoutMs) {
const roots = [];
let allFound = true;

```
    for (const match of matches) {
        const root = findCardRootByFileName(match.file.name);
        if (!root) {
            allFound = false;
            break;
        }
        roots.push(root);
    }

    if (allFound) {
        return roots;
    }

    await sleep(250);
}

return findAllCardRoots();
```

}

function findAllCardRoots() {
return Array.from(document.querySelectorAll(SELECTORS.cardRoot));
}

function findCardRootByFileName(fileName) {
const target = normalizeText(fileName);
const titles = Array.from(document.querySelectorAll(SELECTORS.cardTitle));
for (const title of titles) {
const label = normalizeText(title.getAttribute("aria-label") || title.textContent);
if (label === target) {
return title.closest(SELECTORS.cardRoot);
}
}
return null;
}

async function fillDocumentCard(cardRoot, row, fileName, warnings) {
if (!cardRoot) {
return;
}

```
const meta = deriveDocumentMeta(row, fileName);

const nameInput = cardRoot.querySelector("[data-testid^='dpk-form-field__name-autocomplete-'] input");
if (nameInput && meta.docName) {
    const selected = await chooseAutocompleteOption(nameInput, meta.docName, {
        mode: "contains",
        allowTypedValue: true
    });
    if (!selected) {
        warnings.push(`Не удалось выбрать наименование документа '${meta.docName}' для файла '${fileName}'.`);
    }
}

const numberInput = cardRoot.querySelector("[data-testid^='dpk-form-field__number-input-'] input");
if (numberInput && meta.docNumber) {
    setReactInputValue(numberInput, sanitizeDocNumber(meta.docNumber));
}

const issueDateInput = cardRoot.querySelector("[data-testid^='dpk-form-field__date-of-issue-picker-'] input");
if (issueDateInput && meta.docDate) {
    setReactInputValue(issueDateInput, meta.docDate);
}

const expiryDateInput = cardRoot.querySelector("[data-testid^='dpk-form-field__validity-date-picker-'] input");
if (expiryDateInput && meta.docExpiry) {
    setReactInputValue(expiryDateInput, meta.docExpiry);
}

highlightCard(cardRoot);
```

}

function deriveDocumentMeta(row, fileName) {
const sourceName = String(fileName || basename(row\.file\_path) || "");
const docName = firstFilledValue(
normalizeDocName(row\.doc\_type),
parseDocNameFromFilename(sourceName)
);
const docNumber = firstFilledValue(
sanitizeDocNumber(parseDocNumberFromFilename(sourceName)),
sanitizeDocNumber(row\.doc\_number)
);
const docDate = firstFilledValue(
normalizeDateString(parseDocDateFromFilename(sourceName)),
normalizeDateString(row\.doc\_date)
);
const docExpiry = firstFilledValue(
normalizeDateString(parseDocExpiryFromFilename(sourceName)),
normalizeDateStringFromRange(row\.doc\_expiry)
);

```
return {
    docName,
    docNumber,
    docDate,
    docExpiry
};
```

}

function parseDocNameFromFilename(fileName) {
const normalized = normalizeText(fileName);
const rules = [
["декларация о соответствии", "Декларация о соответствии"],
["сертификат соответствия", "Сертификат соответствия"],
["паспорт качества", "Паспорт качества"],
["руководство по эксплуатации", "Руководство по эксплуатации"],
["инструкция по эксплуатации", "Инструкция по эксплуатации"],
["информационное письмо", "Информационное письмо"],
["решение по заявке", "Решение"],
["решение", "Решение"],
["этикетка", "Этикетка"],
["декларация", "Декларация о соответствии"],
["сертификат", "Сертификат соответствия"],
["паспорт", "Паспорт"],
["руководство", "Руководство"]
];

```
for (const [needle, label] of rules) {
    if (normalized.includes(needle)) {
        return label;
    }
}

return "";
```

}

function normalizeDocName(value) {
const normalized = normalizeText(value);
if (!normalized) {
return "";
}

```
const mappings = [
    ["декларация", "Декларация о соответствии"],
    ["сертификат", "Сертификат соответствия"],
    ["паспорт качества", "Паспорт качества"],
    ["паспорт", "Паспорт"],
    ["руководство", "Руководство по эксплуатации"],
    ["инструкция", "Инструкция по эксплуатации"],
    ["информационное письмо", "Информационное письмо"],
    ["решение", "Решение"],
    ["этикетка", "Этикетка"]
];

for (const [needle, label] of mappings) {
    if (normalized.includes(needle)) {
        return label;
    }
}

return value;
```

}

function parseDocNumberFromFilename(fileName) {
const source = stripFileExtension(fileName);

```
const sharpMatch = source.match(/№\s*(.+?)(?=\s+(?:(?:от|с|до)\s+)?\d{2}\.\d{2}\.\d{4}\b|$)/iu);
if (sharpMatch) {
    return cleanupDocNumber(sharpMatch[1]);
}

const nMatch = source.match(/\bN\s+(.+?)(?=\s+(?:(?:от|с|до)\s+)?\d{2}\.\d{2}\.\d{4}\b|$)/iu);
if (nMatch) {
    return cleanupDocNumber(`N ${nMatch[1]}`);
}

const afterTypeMatch = source.match(/(?:декларация(?:\s+о\s+соответствии)?|сертификат(?:\s+соответствия)?|паспорт(?:\s+качества)?|руководство(?:\s+по\s+эксплуатации)?|инструкция(?:\s+по\s+эксплуатации)?|информационное\s+письмо|решение(?:\s+по\s+заявке)?|этикетка)\.?\s+(.+)$/iu);
if (afterTypeMatch) {
    const extracted = cleanupDocNumber(afterTypeMatch[1]);
    if (looksLikeDocumentNumber(extracted)) {
        return extracted;
    }
}

const trailingMatch = stripTrailingMetadata(source).match(/([A-Za-zА-Яа-я0-9][A-Za-zА-Яа-я0-9._/-]*\d[A-Za-zА-Яа-я0-9._/-]*|б-н)$/iu);
if (trailingMatch) {
    return cleanupDocNumber(trailingMatch[1]);
}

return "";
```

}

function cleanupDocNumber(value) {
return String(value || "")
.replace(/.pdf$/i, "")
.replace(/^№\s\*/iu, "")
.replace(/^[.,;:()/\_-\s]+/u, "")
.replace(/\s+(?:от|с|до)\s+\d{2}.\d{2}.\d{4}.*$/iu, "")*
*.replace(/\s+\d{2}.\d{2}.\d{4}.*$/u, "")
.replace(/\s+(?:шт.?|штук)\b.*$/iu, "")*
*.replace(/\s*(\d+)\s\*$/u, "")
.replace(/[.,;:\s]+$/u, "")
.replace(/\s+/g, " ")
.trim();
}

function parseDocDateFromFilename(fileName) {
const source = stripFileExtension(fileName);
const issueMatch = source.match(/от\s\*(\d{2}.\d{2}.\d{4})/iu);
if (issueMatch) {
return issueMatch[1];
}

```
const rangeMatch = source.match(/(?:с|от)\s*(\d{2}\.\d{2}\.\d{4})\s*(?:по|до)\s*(\d{2}\.\d{2}\.\d{4})/iu);
if (rangeMatch) {
    return rangeMatch[1];
}

const allDates = source.match(/\d{2}\.\d{2}\.\d{4}/g);
return allDates && allDates.length === 1 ? allDates[0] : "";
```

}

function parseDocExpiryFromFilename(fileName) {
const source = stripFileExtension(fileName);
const range = source.match(/(?:с|от)\s\*(\d{2}.\d{2}.\d{4})\s\*(?:по|до)\s\*(\d{2}.\d{2}.\d{4})/iu);
if (range) {
return range[2];
}

```
const until = source.match(/до\s*(\d{2}\.\d{2}\.\d{4})/iu);
return until ? until[1] : "";
```

}

function stripFileExtension(value) {
return String(value || "").replace(/.pdf$/i, "").trim();
}

function stripTrailingMetadata(value) {
return stripFileExtension(value)
.replace(/^\s\*\d+\s\*[.)]\s\*/u, "")
.replace(/\s+(?:от|с|до)\s+\d{2}.\d{2}.\d{4}.*$/iu, "")*
*.replace(/\s+(?:\d+\s*)?(?:шт.?|штук)\b.\*$/iu, "")
.trim();
}

function looksLikeDocumentNumber(value) {
const source = String(value || "").trim();
if (!source) {
return false;
}

```
if (/^б-н$/iu.test(source)) {
    return true;
}

return /\d/u.test(source);
```

}

async function chooseAutocompleteOption(input, value, options = {}) {
if (!input || !value) {
return false;
}

```
focusAndClick(input);
setReactInputValue(input, value);
await sleep(300);

const option = findAutocompleteOption(value, options.mode || "exact");
if (option) {
    clickAutocompleteOption(option, Boolean(options.preferCheckbox));
    await sleep(180);
    clickOutside(document);
    await waitForDropdownToClose();
    return true;
}

if (options.allowTypedValue) {
    clickOutside(document);
    await waitForDropdownToClose();
    return true;
}

clickOutside(document);
await waitForDropdownToClose();
return false;
```

}

function findAutocompleteOption(value, mode) {
const target = normalizeOptionValue(value);
const options = Array.from(document.querySelectorAll(SELECTORS.autocompleteOption));
return options.find((option) => {
const text = normalizeOptionValue(option.textContent);
if (!text) {
return false;
}
return mode === "contains" ? text.includes(target) : text === target;
});
}

function clickAutocompleteOption(option, preferCheckbox) {
const checkbox = preferCheckbox ? option.querySelector(SELECTORS.checkboxInput) : null;
if (checkbox) {
clickElement(checkbox);
return;
}
clickElement(option);
}

function extractRDCode(shifr) {
const source = String(shifr || "").trim();
if (!source) {
return "";
}
const firstToken = source.split(/\s+/)[0];
const parts = firstToken.split("-");
return (parts[parts.length - 1] || "").trim();
}

function normalizeUnit(value) {
return String(value || "").replace(/.+$/g, ".").replace(/\s+/g, " ").trim();
}

function normalizeNumber(value) {
return String(value || "").replace(/\s+/g, "").replace(",", ".");
}

function normalizeDateString(value) {
const match = String(value || "").match(/\d{2}.\d{2}.\d{4}/);
return match ? match[0] : "";
}

function normalizeDateStringFromRange(value) {
const matches = String(value || "").match(/\d{2}.\d{2}.\d{4}/g);
return matches && matches.length ? matches[matches.length - 1] : "";
}

function sanitizeDocNumber(value) {
return String(value || "")
.replace(/^№\s\*/iu, "")
.replace(/\s+/g, " ")
.trim();
}

function setReactInputValue(element, value) {
if (!element) {
return;
}

```
const stringValue = String(value ?? "");
const prototype = element.tagName === "TEXTAREA"
    ? window.HTMLTextAreaElement.prototype
    : window.HTMLInputElement.prototype;
const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");

if (descriptor && descriptor.set) {
    descriptor.set.call(element, stringValue);
} else {
    element.value = stringValue;
}

element.dispatchEvent(new Event("input", { bubbles: true }));
element.dispatchEvent(new Event("change", { bubbles: true }));
element.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
```

}

function focusAndClick(element) {
if (typeof element.focus === "function") {
element.focus();
}
clickElement(element);
}

function clickElement(element) {
if (!element) {
return;
}
element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
element.click();
}

function clickOutside(root) {
const target = root.querySelector?.("h1, h2, h3, h4, h5, .group, .contentContainer") || document.body;
clickElement(target);
if (document.activeElement && typeof document.activeElement.blur === "function") {
document.activeElement.blur();
}
}

async function waitForSelector(root, selector, timeoutMs) {
const started = Date.now();
while (Date.now() - started < timeoutMs) {
const node = root.querySelector(selector);
if (node) {
return node;
}
await sleep(120);
}
return null;
}

async function waitForDropdownToClose(timeoutMs = 1600) {
const started = Date.now();
while (Date.now() - started < timeoutMs) {
const hasVisibleOptions = Array.from(document.querySelectorAll(SELECTORS.autocompleteOption))
.some((node) => isVisible(node));
if (!hasVisibleOptions) {
return;
}
await sleep(100);
}
}

function isVisible(node) {
const rect = node?.getBoundingClientRect?.();
return Boolean(rect && rect.width > 0 && rect.height > 0);
}

function highlightCard(cardRoot) {
cardRoot.style.outline = "2px solid #52c41a";
cardRoot.style.backgroundColor = "rgba(82, 196, 26, 0.05)";
}

function basename(filePath) {
const source = String(filePath || "");
if (!source) {
return "";
}
return source.split(/[\\/]/).pop() || "";
}

function extractFolderName(files) {
const first = files[0];
if (!first?.webkitRelativePath) {
return "";
}
return first.webkitRelativePath.split("/")[0] || "";
}

function isPdfFile(file) {
return /.pdf$/i.test(file.name || "");
}

function normalizeText(value) {
return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function normalizeOptionValue(value) {
return normalizeText(value).replace(/[().,/]/g, "");
}

function firstFilledValue(...values) {
for (const value of values) {
if (String(value || "").trim()) {
return String(value).trim();
}
}
return "";
}

function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}

 gjckt z ekexibk tuj 



// content.js - Exon JVK v.2.4
console.log("Exon JVK 2.4 content script loaded");

const SELECTORS = {
modal: ".ant-modal-content, [role='dialog']",
receiveDate: "[data-testid='materials-drawer\_\_receive-date-picker'] input",
name: "[data-testid='materials-drawer\_\_ksi-list-autocomplete'] input",
rd: "[data-testid='materials-drawer\_\_rd-section-list-autocomplete'] input",
qty: "[data-testid='materials-drawer\_\_amount-input'] input",
unit: "[data-testid='materials-drawer\_\_unit-measure-autocomplete'] input",
supplier: "[data-testid='materials-drawer\_\_provider-org-autocomplete'] input",
dropzoneInput: "[data-testid='file-dropzone']",
cardRoot: ".Cardstyled\_\_CardContentWrapper-ivgIRw, .cardContentWrapper",
cardTitle: ".Cardstyled\_\_CardTitle-AynWy[aria-label], .cardTitle[aria-label]",
autocompleteOption: ".MuiAutocomplete-popper [role='option'], [role='listbox'] [role='option'], .MuiMenuItem-root, .ant-select-item-option",
checkboxInput: "input[type='checkbox'], .MuiCheckbox-root input, .ant-checkbox-input"
};

const docsSession = {
files: [],
folderName: "",
selectedAt: "",
lastError: ""
};

initDocsSessionFromIndexedDB();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
if (msg.action === "getDocsFolderStatus") {
getDocsFolderStatus()
.then(sendResponse)
.catch(() => sendResponse({ ok: false, fileCount: 0 }));
return true;
}

```
if (msg.action === "pickDocsFolder") {
    pickDocsFolder()
        .then((result) => sendResponse({ ok: true, ...result }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
    return true;
}

if (msg.action === "fillExonForm") {
    fillForm(msg.data)
        .then((result) => sendResponse({ ok: true, ...result }))
        .catch((error) => {
            console.error("Fill error:", error);
            sendResponse({ ok: false, error: error.message || String(error) });
        });
    return true;
}

return false;
```

});

async function initDocsSessionFromIndexedDB() {
try {
const cachedFiles = await loadFilesFromIndexedDB();
if (cachedFiles && cachedFiles.length > 0) {
docsSession.files = cachedFiles;
docsSession.folderName = extractFolderName(cachedFiles) || "Подключенная папка";
docsSession.selectedAt = new Date().toLocaleString("ru-RU");
}
} catch (e) {
console.warn("Error restoring docsSession from IndexedDB:", e);
}
}

async function getDocsFolderStatus() {
if (!docsSession.files || !docsSession.files.length) {
await initDocsSessionFromIndexedDB();
}
return {
ok: true,
folderName: docsSession.folderName,
fileCount: docsSession.files.length,
selectedAt: docsSession.selectedAt,
lastError: docsSession.lastError
};
}

async function pickDocsFolder() {
const input = ensureFolderPicker();

```
return new Promise((resolve) => {
    let resolved = false;

    const finish = (payload) => {
        if (resolved) {
            return;
        }
        resolved = true;
        window.removeEventListener("focus", handleFocus, true);
        input.onchange = null;
        resolve(payload);
    };

    const handleFocus = () => {
        window.setTimeout(() => {
            if (!resolved) {
                finish({
                    folderName: docsSession.folderName,
                    fileCount: docsSession.files.length,
                    selectedAt: docsSession.selectedAt,
                    cancelled: true
                });
            }
        }, 400);
    };

    input.value = "";
    input.onchange = async () => {
        const files = Array.from(input.files || []).filter((file) => isPdfFile(file));
        docsSession.files = files;
        docsSession.folderName = extractFolderName(files);
        docsSession.selectedAt = new Date().toLocaleString("ru-RU");
        docsSession.lastError = "";

        if (files.length > 0) {
            try {
                await saveFilesToIndexedDB(files);
            } catch (e) {
                console.warn("Error caching files in IndexedDB:", e);
            }
        }

        finish({
            folderName: docsSession.folderName,
            fileCount: docsSession.files.length,
            selectedAt: docsSession.selectedAt,
            cancelled: false
        });
    };

    window.addEventListener("focus", handleFocus, true);
    input.click();
});
```

}

function ensureFolderPicker() {
let input = document.getElementById("\_\_exon\_jvk\_folder\_picker");
if (input) {
return input;
}

```
input = document.createElement("input");
input.type = "file";
input.id = "__exon_jvk_folder_picker";
input.multiple = true;
input.setAttribute("webkitdirectory", "");
input.setAttribute("directory", "");
input.accept = ".pdf,application/pdf";
input.style.position = "fixed";
input.style.left = "-9999px";
input.style.top = "-9999px";
document.documentElement.appendChild(input);
return input;
```

}

async function fillForm(group) {
if (!Array.isArray(group) || group.length === 0) {
throw new Error("Пустая группа данных для заполнения.");
}

```
const first = group[0];
const warnings = [];
const modal = await ensureFormOpen();

await fillMainInfo(modal, first, warnings);

const absolutePaths = group
    .map((row) => String(row.file_path || "").trim())
    .filter((p) => p && (p.includes(":") || p.startsWith("\\\\") || p.startsWith("/")));

let filesAttached = false;
let uploadedCount = 0;

if (absolutePaths.length > 0) {
    try {
        const cdpResult = await new Promise((resolve) => {
            chrome.runtime.sendMessage(
                { action: "attachFilesViaCDP", filePaths: absolutePaths },
                (res) => resolve(res)
            );
        });

        if (cdpResult?.ok) {
            filesAttached = true;
            uploadedCount = cdpResult.attachedCount || absolutePaths.length;

            const dropzoneInput = modal.querySelector(SELECTORS.dropzoneInput) || modal.querySelector("input[type='file']") || document.querySelector("input[type='file']");
            if (dropzoneInput) {
                if (dropzoneInput._valueTracker) {
                    try { dropzoneInput._valueTracker.setValue(""); } catch (e) {}
                }
                dropzoneInput.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
            }
            await sleep(1000);
        }
    } catch (err) {
        console.warn("CDP native attachment notice, using fallback matcher:", err);
    }
}

if (!filesAttached) {
    if (!docsSession.files.length) {
        try {
            const cachedFiles = await loadFilesFromIndexedDB();
            if (cachedFiles && cachedFiles.length > 0) {
                docsSession.files = cachedFiles;
                docsSession.folderName = extractFolderName(cachedFiles);
            }
        } catch (e) {
            console.warn("Не удалось загрузить файлы из IndexedDB:", e);
        }
    }

    const matches = await buildFileMatches(group, warnings);
    if (matches.length > 0) {
        await uploadMatchedFiles(modal, matches, warnings);
        uploadedCount = matches.length;
        filesAttached = true;
    } else {
        warnings.push("Для текущей позиции не найдено файлов (проверьте пути в CSV или подключите папку с PDF).");
    }
}

const cardRoots = await waitForCardsForMatches(group, 15000);
if (!cardRoots.length) {
    warnings.push("Карточки документов не появились. Если загрузка файлов не сработала, попробуйте вручную выбрать PDF в блоке Exon.");
} else {
    const limit = Math.min(cardRoots.length, group.length);
    for (let index = 0; index < limit; index += 1) {
        const fileName = basename(group[index].file_path);
        await fillDocumentCard(cardRoots[index], group[index], fileName, warnings);
    }

    if (group.length > cardRoots.length) {
        warnings.push(`Документов в CSV: ${group.length}, карточек на странице: ${cardRoots.length}.`);
    }
}

return {
    filledPos: first.pos || "",
    folderName: docsSession.folderName,
    uploadedFiles: uploadedCount,
    warnings
};
```

}

async function fillMainInfo(modal, row, warnings) {
const nameInput = modal.querySelector(SELECTORS.name) || await waitForSelector(modal, SELECTORS.name, 2000);
if (!nameInput) {
throw new Error("Не найдено поле 'Наименование'.");
}

```
await fillNameField(nameInput, row.name, modal);

const receiveDateInput = modal.querySelector(SELECTORS.receiveDate);
const receiveDate = normalizeDateString(row.delivery_date);
if (receiveDateInput && receiveDate) {
    setReactInputValue(receiveDateInput, receiveDate);
}

const rdInput = modal.querySelector(SELECTORS.rd);
const rdCode = extractRDCode(row.shifr_rd);
if (rdInput && rdCode) {
    const selected = await chooseAutocompleteOption(rdInput, rdCode, {
        mode: "contains",
        preferCheckbox: true,
        allowTypedValue: false
    });
    if (!selected) {
        warnings.push(`Не удалось выбрать раздел РД '${rdCode}'.`);
    }
}

const qtyInput = modal.querySelector(SELECTORS.qty);
if (qtyInput && row.qty) {
    setReactInputValue(qtyInput, normalizeNumber(row.qty));
}

const unitInput = modal.querySelector(SELECTORS.unit);
if (unitInput && row.unit) {
    const selected = await chooseAutocompleteOption(unitInput, normalizeUnit(row.unit), {
        mode: "exact",
        allowTypedValue: true
    });
    if (!selected) {
        warnings.push(`Не удалось выбрать единицу измерения '${row.unit}'.`);
    }
}

const supplierInput = modal.querySelector(SELECTORS.supplier);
if (supplierInput && row.organization) {
    await chooseAutocompleteOption(supplierInput, row.organization, {
        mode: "contains",
        allowTypedValue: true
    });
}
```

}

async function fillNameField(input, value, modal) {
if (!input || !value) {
return;
}

```
focusAndClick(input);
setReactInputValue(input, value);
await sleep(250);

const exactOption = findAutocompleteOption(value, "exact");
if (exactOption) {
    clickAutocompleteOption(exactOption, false);
    await sleep(150);
}

clickOutside(modal);
await waitForDropdownToClose();
```

}

async function buildFileMatches(group, warnings) {
const matches = [];
const missing = [];

```
let availableKeys = docsSession.files.map((f) => f.name);
if (!availableKeys.length) {
    availableKeys = await getAllFileKeysFromIndexedDB();
}

for (const row of group) {
    const targetPath = String(row.file_path || "");
    const targetName = basename(targetPath);

    if (!targetName) {
        continue;
    }

    let file = findMatchingFileInMemory(targetPath, targetName, row);

    if (!file && availableKeys.length > 0) {
        const matchedKey = findMatchingKey(targetPath, targetName, row, availableKeys);
        if (matchedKey) {
            file = await getFileFromIndexedDB(matchedKey);
        }
    }

    if (!file) {
        missing.push(targetName || `позиция ${row.pos}`);
        continue;
    }

    if (file.size > 50 * 1024 * 1024) {
        warnings.push(`Файл '${file.name}' больше 50 МБ (${Math.round(file.size / 1024 / 1024)} МБ). Exon может его отклонить.`);
    }

    matches.push({ row, file });
}

if (missing.length > 0) {
    if (!availableKeys.length) {
        warnings.push(`Папка с PDF еще не подключена к расширению. Нажмите 'Подключить PDF' и выберите папку с файлами.`);
    } else {
        warnings.push(`Не найдены файлы в подключенной папке (всего файлов в папке: ${availableKeys.length}): ${missing.join(", ")}.`);
    }
}

return matches;
```

}

function findMatchingFileInMemory(targetPath, targetName, row) {
if (!docsSession.files || !docsSession.files.length) {
return null;
}

```
const normTargetName = normalizeText(targetName);
const cleanTargetName = cleanFileName(targetName);
const normTargetPath = targetPath.replace(/\\/g, "/").toLowerCase();

let found = docsSession.files.find((f) => f.name === targetName);
if (found) return found;

found = docsSession.files.find((f) => normalizeText(f.name) === normTargetName);
if (found) return found;

found = docsSession.files.find((f) => cleanFileName(f.name) === cleanTargetName);
if (found) return found;

found = docsSession.files.find((f) => {
    const relPath = String(f.webkitRelativePath || f.name).replace(/\\/g, "/").toLowerCase();
    return normTargetPath.endsWith(relPath) || relPath.endsWith(normTargetName);
});
if (found) return found;

if (row.pos) {
    const posPrefix = String(row.pos).trim();
    found = docsSession.files.find((f) => {
        const fName = f.name;
        const startsWithPos = fName.startsWith(`${posPrefix}.`) || fName.startsWith(`${posPrefix}-`) || fName.startsWith(`${posPrefix} `);
        return startsWithPos && (cleanFileName(fName).includes(cleanFileName(row.doc_type || "")) || cleanFileName(fName).includes(cleanFileName(row.name || "")));
    });
    if (found) return found;
}

return null;
```

}

function findMatchingKey(targetPath, targetName, row, keys) {
const normTargetName = normalizeText(targetName);
const cleanTargetName = cleanFileName(targetName);

```
let foundKey = keys.find((k) => k === targetName);
if (foundKey) return foundKey;

foundKey = keys.find((k) => normalizeText(k) === normTargetName);
if (foundKey) return foundKey;

foundKey = keys.find((k) => cleanFileName(k) === cleanTargetName);
if (foundKey) return foundKey;

if (row.pos) {
    const posPrefix = String(row.pos).trim();
    foundKey = keys.find((k) => {
        const startsWithPos = k.startsWith(`${posPrefix}.`) || k.startsWith(`${posPrefix}-`) || k.startsWith(`${posPrefix} `);
        return startsWithPos && (cleanFileName(k).includes(cleanFileName(row.doc_type || "")) || cleanFileName(k).includes(cleanFileName(row.name || "")));
    });
    if (foundKey) return foundKey;
}

return null;
```

}

function cleanFileName(str) {
return String(str || "")
.replace(/.pdf$/i, "")
.replace(/[№N\s\_.-(),\u00A0]+/g, "")
.toLowerCase();
}

async function uploadMatchedFiles(modal, matches, warnings) {
const absolutePaths = matches
.map((m) => m.row?.file\_path)
.filter((p) => p && typeof p === "string" && (p.includes(":") || p.startsWith("\\\\") || p.startsWith("/")));

```
if (absolutePaths.length > 0) {
    try {
        const cdpResult = await new Promise((resolve) => {
            chrome.runtime.sendMessage(
                { action: "attachFilesViaCDP", filePaths: absolutePaths },
                (res) => resolve(res)
            );
        });

        if (cdpResult?.ok) {
            const dropzoneInput = modal.querySelector(SELECTORS.dropzoneInput) || modal.querySelector("input[type='file']") || document.querySelector("input[type='file']");
            if (dropzoneInput) {
                if (dropzoneInput._valueTracker) {
                    try { dropzoneInput._valueTracker.setValue(""); } catch (e) {}
                }
                dropzoneInput.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
            }
            await sleep(800);
            return;
        }
    } catch (e) {
        console.warn("CDP attachment notice, using fallback matcher:", e);
    }
}

let dropzoneInput = modal.querySelector(SELECTORS.dropzoneInput) || document.querySelector(SELECTORS.dropzoneInput);

if (dropzoneInput && dropzoneInput.tagName !== "INPUT") {
    const childInput = dropzoneInput.querySelector("input[type='file']");
    if (childInput) {
        dropzoneInput = childInput;
    }
}

if (!dropzoneInput) {
    dropzoneInput = modal.querySelector("input[type='file']") || document.querySelector("input[type='file']");
}

if (!dropzoneInput) {
    warnings.push("Не найден input для загрузки PDF в секции 'Сертификаты и паспорта'.");
    return;
}

const files = matches.map((item) => item.file).filter(Boolean);
if (!files.length) {
    return;
}

const dropzoneContainer = dropzoneInput.closest(".ant-upload-drag, .ant-upload, [data-testid='file-dropzone']") || dropzoneInput.parentElement;
if (dropzoneContainer) {
    focusAndClick(dropzoneContainer);
    await sleep(150);
}

setFilesOnInput(dropzoneInput, files);

if (dropzoneContainer) {
    simulateDropOnElement(dropzoneContainer, files);
}

await sleep(800);
```

}

function setFilesOnInput(input, files) {
const transfer = new DataTransfer();
files.forEach((file) => transfer.items.add(file));

```
const descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "files");
if (descriptor && descriptor.set) {
    descriptor.set.call(input, transfer.files);
} else {
    input.files = transfer.files;
}

if (input._valueTracker) {
    try {
        input._valueTracker.setValue("");
    } catch (e) {
        // ignore
    }
}

input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
input.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));

if (typeof input.onchange === "function") {
    try {
        input.onchange(new Event("change", { bubbles: true }));
    } catch (e) {
        // ignore
    }
}
```

}

function simulateDropOnElement(element, files) {
if (!element || !files.length) return;

```
try {
    const transfer = new DataTransfer();
    files.forEach((file) => transfer.items.add(file));

    const dragEnterEvent = new DragEvent("dragenter", { bubbles: true, cancelable: true, dataTransfer: transfer });
    const dragOverEvent = new DragEvent("dragover", { bubbles: true, cancelable: true, dataTransfer: transfer });
    const dropEvent = new DragEvent("drop", { bubbles: true, cancelable: true, dataTransfer: transfer });

    element.dispatchEvent(dragEnterEvent);
    element.dispatchEvent(dragOverEvent);
    element.dispatchEvent(dropEvent);
} catch (e) {
    console.warn("Simulated drop notice:", e);
}
```

}

async function waitForCardsForMatches(matches, timeoutMs) {
const started = Date.now();
while (Date.now() - started < timeoutMs) {
const roots = [];
let allFound = true;

```
    for (const match of matches) {
        const root = findCardRootByFileName(match.file.name);
        if (!root) {
            allFound = false;
            break;
        }
        roots.push(root);
    }

    if (allFound) {
        return roots;
    }

    await sleep(250);
}

return findAllCardRoots();
```

}

function findAllCardRoots() {
return Array.from(document.querySelectorAll(SELECTORS.cardRoot));
}

function findCardRootByFileName(fileName) {
const target = normalizeText(fileName);
const titles = Array.from(document.querySelectorAll(SELECTORS.cardTitle));
for (const title of titles) {
const label = normalizeText(title.getAttribute("aria-label") || title.textContent);
if (label === target) {
return title.closest(SELECTORS.cardRoot);
}
}
return null;
}

async function fillDocumentCard(cardRoot, row, fileName, warnings) {
if (!cardRoot) {
return;
}

```
const meta = deriveDocumentMeta(row, fileName);

const nameInput = cardRoot.querySelector("[data-testid^='dpk-form-field__name-autocomplete-'] input");
if (nameInput && meta.docName) {
    const selected = await chooseAutocompleteOption(nameInput, meta.docName, {
        mode: "contains",
        allowTypedValue: true
    });
    if (!selected) {
        warnings.push(`Не удалось выбрать наименование документа '${meta.docName}' для файла '${fileName}'.`);
    }
}

const numberInput = cardRoot.querySelector("[data-testid^='dpk-form-field__number-input-'] input");
if (numberInput && meta.docNumber) {
    setReactInputValue(numberInput, sanitizeDocNumber(meta.docNumber));
}

const issueDateInput = cardRoot.querySelector("[data-testid^='dpk-form-field__date-of-issue-picker-'] input");
if (issueDateInput && meta.docDate) {
    setReactInputValue(issueDateInput, meta.docDate);
}

const expiryDateInput = cardRoot.querySelector("[data-testid^='dpk-form-field__validity-date-picker-'] input");
if (expiryDateInput && meta.docExpiry) {
    setReactInputValue(expiryDateInput, meta.docExpiry);
}

highlightCard(cardRoot);
```

}

function deriveDocumentMeta(row, fileName) {
const sourceName = String(fileName || basename(row\.file\_path) || "");
const docName = firstFilledValue(
normalizeDocName(row\.doc\_type),
parseDocNameFromFilename(sourceName)
);
const docNumber = firstFilledValue(
sanitizeDocNumber(parseDocNumberFromFilename(sourceName)),
sanitizeDocNumber(row\.doc\_number)
);
const docDate = firstFilledValue(
normalizeDateString(parseDocDateFromFilename(sourceName)),
normalizeDateString(row\.doc\_date)
);
const docExpiry = firstFilledValue(
normalizeDateString(parseDocExpiryFromFilename(sourceName)),
normalizeDateStringFromRange(row\.doc\_expiry)
);

```
return {
    docName,
    docNumber,
    docDate,
    docExpiry
};
```

}

function parseDocNameFromFilename(fileName) {
const normalized = normalizeText(fileName);
const rules = [
["декларация о соответствии", "Декларация о соответствии"],
["сертификат соответствия", "Сертификат соответствия"],
["паспорт качества", "Паспорт качества"],
["руководство по эксплуатации", "Руководство по эксплуатации"],
["инструкция по эксплуатации", "Инструкция по эксплуатации"],
["информационное письмо", "Информационное письмо"],
["решение по заявке", "Решение"],
["решение", "Решение"],
["этикетка", "Этикетка"],
["декларация", "Декларация о соответствии"],
["сертификат", "Сертификат соответствия"],
["паспорт", "Паспорт"],
["руководство", "Руководство"]
];

```
for (const [needle, label] of rules) {
    if (normalized.includes(needle)) {
        return label;
    }
}

return "";
```

}

function normalizeDocName(value) {
const normalized = normalizeText(value);
if (!normalized) {
return "";
}

```
const mappings = [
    ["декларация", "Декларация о соответствии"],
    ["сертификат", "Сертификат соответствия"],
    ["паспорт качества", "Паспорт качества"],
    ["паспорт", "Паспорт"],
    ["руководство", "Руководство по эксплуатации"],
    ["инструкция", "Инструкция по эксплуатации"],
    ["информационное письмо", "Информационное письмо"],
    ["решение", "Решение"],
    ["этикетка", "Этикетка"]
];

for (const [needle, label] of mappings) {
    if (normalized.includes(needle)) {
        return label;
    }
}

return value;
```

}

function parseDocNumberFromFilename(fileName) {
const source = stripFileExtension(fileName);

```
const sharpMatch = source.match(/№\s*(.+?)(?=\s+(?:(?:от|с|до)\s+)?\d{2}\.\d{2}\.\d{4}\b|$)/iu);
if (sharpMatch) {
    return cleanupDocNumber(sharpMatch[1]);
}

const nMatch = source.match(/\bN\s+(.+?)(?=\s+(?:(?:от|с|до)\s+)?\d{2}\.\d{2}\.\d{4}\b|$)/iu);
if (nMatch) {
    return cleanupDocNumber(`N ${nMatch[1]}`);
}

const afterTypeMatch = source.match(/(?:декларация(?:\s+о\s+соответствии)?|сертификат(?:\s+соответствия)?|паспорт(?:\s+качества)?|руководство(?:\s+по\s+эксплуатации)?|инструкция(?:\s+по\s+эксплуатации)?|информационное\s+письмо|решение(?:\s+по\s+заявке)?|этикетка)\.?\s+(.+)$/iu);
if (afterTypeMatch) {
    const extracted = cleanupDocNumber(afterTypeMatch[1]);
    if (looksLikeDocumentNumber(extracted)) {
        return extracted;
    }
}

const trailingMatch = stripTrailingMetadata(source).match(/([A-Za-zА-Яа-я0-9][A-Za-zА-Яа-я0-9._/-]*\d[A-Za-zА-Яа-я0-9._/-]*|б-н)$/iu);
if (trailingMatch) {
    return cleanupDocNumber(trailingMatch[1]);
}

return "";
```

}

function cleanupDocNumber(value) {
return String(value || "")
.replace(/.pdf$/i, "")
.replace(/^№\s\*/iu, "")
.replace(/^[.,;:()/\_-\s]+/u, "")
.replace(/\s+(?:от|с|до)\s+\d{2}.\d{2}.\d{4}.*$/iu, "")*
*.replace(/\s+\d{2}.\d{2}.\d{4}.*$/u, "")
.replace(/\s+(?:шт.?|штук)\b.*$/iu, "")*
*.replace(/\s*(\d+)\s\*$/u, "")
.replace(/[.,;:\s]+$/u, "")
.replace(/\s+/g, " ")
.trim();
}

function parseDocDateFromFilename(fileName) {
const source = stripFileExtension(fileName);
const issueMatch = source.match(/от\s\*(\d{2}.\d{2}.\d{4})/iu);
if (issueMatch) {
return issueMatch[1];
}

```
const rangeMatch = source.match(/(?:с|от)\s*(\d{2}\.\d{2}\.\d{4})\s*(?:по|до)\s*(\d{2}\.\d{2}\.\d{4})/iu);
if (rangeMatch) {
    return rangeMatch[1];
}

const allDates = source.match(/\d{2}\.\d{2}\.\d{4}/g);
return allDates && allDates.length === 1 ? allDates[0] : "";
```

}

function parseDocExpiryFromFilename(fileName) {
const source = stripFileExtension(fileName);
const range = source.match(/(?:с|от)\s\*(\d{2}.\d{2}.\d{4})\s\*(?:по|до)\s\*(\d{2}.\d{2}.\d{4})/iu);
if (range) {
return range[2];
}

```
const until = source.match(/до\s*(\d{2}\.\d{2}\.\d{4})/iu);
return until ? until[1] : "";
```

}

function stripFileExtension(value) {
return String(value || "").replace(/.pdf$/i, "").trim();
}

function stripTrailingMetadata(value) {
return stripFileExtension(value)
.replace(/^\s\*\d+\s\*[.)]\s\*/u, "")
.replace(/\s+(?:от|с|до)\s+\d{2}.\d{2}.\d{4}.*$/iu, "")*
*.replace(/\s+(?:\d+\s*)?(?:шт.?|штук)\b.\*$/iu, "")
.trim();
}

function looksLikeDocumentNumber(value) {
const source = String(value || "").trim();
if (!source) {
return false;
}

```
if (/^б-н$/iu.test(source)) {
    return true;
}

return /\d/u.test(source);
```

}

async function chooseAutocompleteOption(input, value, options = {}) {
if (!input || !value) {
return false;
}

```
focusAndClick(input);
setReactInputValue(input, value);
await sleep(300);

const option = findAutocompleteOption(value, options.mode || "exact");
if (option) {
    clickAutocompleteOption(option, Boolean(options.preferCheckbox));
    await sleep(180);
    clickOutside(document);
    await waitForDropdownToClose();
    return true;
}

if (options.allowTypedValue) {
    clickOutside(document);
    await waitForDropdownToClose();
    return true;
}

clickOutside(document);
await waitForDropdownToClose();
return false;
```

}

function findAutocompleteOption(value, mode) {
const target = normalizeOptionValue(value);
const options = Array.from(document.querySelectorAll(SELECTORS.autocompleteOption));
return options.find((option) => {
const text = normalizeOptionValue(option.textContent);
if (!text) {
return false;
}
return mode === "contains" ? text.includes(target) : text === target;
});
}

function clickAutocompleteOption(option, preferCheckbox) {
const checkbox = preferCheckbox ? option.querySelector(SELECTORS.checkboxInput) : null;
if (checkbox) {
clickElement(checkbox);
return;
}
clickElement(option);
}

function extractRDCode(shifr) {
const source = String(shifr || "").trim();
if (!source) {
return "";
}
const firstToken = source.split(/\s+/)[0];
const parts = firstToken.split("-");
return (parts[parts.length - 1] || "").trim();
}

function normalizeUnit(value) {
return String(value || "").replace(/.+$/g, ".").replace(/\s+/g, " ").trim();
}

function normalizeNumber(value) {
return String(value || "").replace(/\s+/g, "").replace(",", ".");
}

function normalizeDateString(value) {
const match = String(value || "").match(/\d{2}.\d{2}.\d{4}/);
return match ? match[0] : "";
}

function normalizeDateStringFromRange(value) {
const matches = String(value || "").match(/\d{2}.\d{2}.\d{4}/g);
return matches && matches.length ? matches[matches.length - 1] : "";
}

function sanitizeDocNumber(value) {
return String(value || "")
.replace(/^№\s\*/iu, "")
.replace(/\s+/g, " ")
.trim();
}

function setReactInputValue(element, value) {
if (!element) {
return;
}

```
const stringValue = String(value ?? "");
const prototype = element.tagName === "TEXTAREA"
    ? window.HTMLTextAreaElement.prototype
    : window.HTMLInputElement.prototype;
const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");

if (descriptor && descriptor.set) {
    descriptor.set.call(element, stringValue);
} else {
    element.value = stringValue;
}

element.dispatchEvent(new Event("input", { bubbles: true }));
element.dispatchEvent(new Event("change", { bubbles: true }));
element.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
```

}

function focusAndClick(element) {
if (typeof element.focus === "function") {
element.focus();
}
clickElement(element);
}

function clickElement(element) {
if (!element) {
return;
}
element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
element.click();
}

function clickOutside(root) {
const target = root.querySelector?.("h1, h2, h3, h4, h5, .group, .contentContainer") || document.body;
clickElement(target);
if (document.activeElement && typeof document.activeElement.blur === "function") {
document.activeElement.blur();
}
}

async function waitForSelector(root, selector, timeoutMs) {
const started = Date.now();
while (Date.now() - started < timeoutMs) {
const node = root.querySelector(selector);
if (node) {
return node;
}
await sleep(120);
}
return null;
}

async function waitForDropdownToClose(timeoutMs = 1600) {
const started = Date.now();
while (Date.now() - started < timeoutMs) {
const hasVisibleOptions = Array.from(document.querySelectorAll(SELECTORS.autocompleteOption))
.some((node) => isVisible(node));
if (!hasVisibleOptions) {
return;
}
await sleep(100);
}
}

function isVisible(node) {
const rect = node?.getBoundingClientRect?.();
return Boolean(rect && rect.width > 0 && rect.height > 0);
}

function highlightCard(cardRoot) {
cardRoot.style.outline = "2px solid #52c41a";
cardRoot.style.backgroundColor = "rgba(82, 196, 26, 0.05)";
}

function basename(filePath) {
const source = String(filePath || "");
if (!source) {
return "";
}
return source.split(/[\\/]/).pop() || "";
}

function extractFolderName(files) {
const first = files[0];
if (!first?.webkitRelativePath) {
return "";
}
return first.webkitRelativePath.split("/")[0] || "";
}

function isPdfFile(file) {
return /.pdf$/i.test(file.name || "");
}

function normalizeText(value) {
return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function normalizeOptionValue(value) {
return normalizeText(value).replace(/[().,/]/g, "");
}

function firstFilledValue(...values) {
for (const value of values) {
if (String(value || "").trim()) {
return String(value).trim();
}
}
return "";
}

function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ensureFormOpen() {
let modal = document.querySelector(SELECTORS.modal);
if (modal && isVisible(modal)) {
return modal;
}

```
const addBtnSelectors = [
    "[data-testid='materials-list__add-btn']",
    "button[data-testid='add-btn']",
    ".ant-btn-primary",
    "button"
];

let addBtn = null;
for (const selector of addBtnSelectors) {
    const elements = Array.from(document.querySelectorAll(selector));
    addBtn = elements.find((el) => /добавить\s*(запись|материал)?/i.test(el.textContent || ""));
    if (addBtn) {
        break;
    }
}

if (addBtn) {
    clickElement(addBtn);
    await sleep(1000);
}

modal = await waitForSelector(document, SELECTORS.modal, 8000);
if (!modal) {
    throw new Error("Не найдена открытая форма/диалог Exon на странице.");
}

return modal;
```

}

// --- IndexedDB PDF Caching ---
const DB\_NAME = "ExonJvkDocsDB";
const STORE\_NAME = "pdfFiles";

function openDocsDB() {
return new Promise((resolve, reject) => {
const request = indexedDB.open(DB\_NAME, 1);
request.onupgradeneeded = (event) => {
const db = event.target.result;
if (!db.objectStoreNames.contains(STORE\_NAME)) {
db.createObjectStore(STORE\_NAME, { keyPath: "name" });
}
};
request.onsuccess = () => resolve(request.result);
request.onerror = () => reject(request.error);
});
}

async function saveFilesToIndexedDB(files) {
const db = await openDocsDB();
const tx = db.transaction(STORE\_NAME, "readwrite");
const store = tx.objectStore(STORE\_NAME);
store.clear();
for (const file of files) {
try {
store.put({ name: file.name, path: file.webkitRelativePath || file.name, file: file });
} catch (e) {
console.warn("Skipping file save due to error:", file.name, e);
}
}
}

function getAllFileKeysFromIndexedDB() {
return new Promise(async (resolve) => {
try {
const db = await openDocsDB();
const tx = db.transaction(STORE\_NAME, "readonly");
const store = tx.objectStore(STORE\_NAME);
const req = store.getAllKeys();
req.onsuccess = () => resolve(req.result || []);
req.onerror = () => resolve([]);
} catch (e) {
resolve([]);
}
});
}

function getFileFromIndexedDB(key) {
return new Promise(async (resolve) => {
try {
const db = await openDocsDB();
const tx = db.transaction(STORE\_NAME, "readonly");
const store = tx.objectStore(STORE\_NAME);
const req = store.get(key);
req.onsuccess = () => resolve(req.result?.file || null);
req.onerror = () => resolve(null);
} catch (e) {
resolve(null);
}
});
}

async function loadFilesFromIndexedDB() {
try {
const keys = await getAllFileKeysFromIndexedDB();
if (keys && keys.length > 0) {
return []; // Return empty array so memory is not bloated; buildFileMatches fetches via getFileFromIndexedDB(key)
}
} catch (e) {
console.warn("Could not check files in IndexedDB:", e);
}
return [];
}



зщззгз оы



// popup.js - Exon JVK v.2.4
const STORAGE\_KEY = "exonJvkStateV24";

const DEFAULT\_STATE = {
groups: [],
currentGroupIndex: 0,
sourceFileName: "",
docsFolderName: "",
docsFileCount: 0,
lastMessage: "Загрузите CSV и подключите папку с PDF для текущей страницы Exon.",
lastLevel: "info",
autoAdvance: false
};

let state = { ...DEFAULT\_STATE };

document.addEventListener("DOMContentLoaded", async () => {
bindEvents();
initModalLogic();
await restoreState();
await refreshDocsStatus();
await checkBatchProgressOnInit();
updateUI();
});

function bindEvents() {
document.getElementById("csvFile").addEventListener("change", onCsvSelected);
document.getElementById("connectFolderBtn").addEventListener("click", connectDocsFolder);

```
const popupFolderInput = document.getElementById("popupFolderInput");
if (popupFolderInput) {
    popupFolderInput.addEventListener("change", onFolderSelectedInPopup);
}

document.getElementById("refreshFolderBtn").addEventListener("click", refreshDocsStatus);
document.getElementById("prevBtn").addEventListener("click", () => moveGroup(-1));
document.getElementById("nextBtn").addEventListener("click", () => moveGroup(1));
document.getElementById("fillBtn").addEventListener("click", () => fillCurrentGroup(false));
document.getElementById("fillNextBtn").addEventListener("click", () => fillCurrentGroup(true));
document.getElementById("resetBtn").addEventListener("click", resetState);
document.getElementById("autoAdvance").addEventListener("change", async (event) => {
    state.autoAdvance = Boolean(event.target.checked);
    await saveState();
});

const batchStartBtn = document.getElementById("batchStartBtn");
if (batchStartBtn) {
    batchStartBtn.addEventListener("click", startBatchFill);
}

const clearBatchStatusBtn = document.getElementById("clearBatchStatusBtn");
if (clearBatchStatusBtn) {
    clearBatchStatusBtn.addEventListener("click", async () => {
        const box = document.getElementById("batchStatusBox");
        if (box) box.style.display = "none";
        await chrome.storage.local.remove("exonJvkBatchProgress");
    });
}

chrome.storage.onChanged.addListener((changes) => {
    if (changes.exonJvkBatchProgress) {
        updateBatchProgressUI(changes.exonJvkBatchProgress.newValue);
    }
});

const downloadTemplateBtn = document.getElementById('downloadTemplateBtn');
if (downloadTemplateBtn) {
    downloadTemplateBtn.addEventListener('click', downloadTemplate);
}
```

}

async function onCsvSelected(event) {
const file = event.target.files[0];
if (!file) {
return;
}

```
try {
    await chrome.storage.local.remove("exonJvkBatchProgress");
    updateBatchProgressUI(null);

    const text = await file.text();
    const rows = parseCSV(text);
    const groups = groupRows(rows);

    state.groups = groups;
    state.currentGroupIndex = 0;
    state.sourceFileName = file.name;
    state.lastMessage = groups.length
        ? `Загружено позиций: ${groups.length}. Текущая позиция содержит документов: ${groups[0].length}.`
        : "В CSV не найдено строк со статусом READY.";
    state.lastLevel = groups.length ? "success" : "warn";

    await saveState();
    updateUI();
} catch (error) {
    await setStatus(`Ошибка чтения CSV: ${error.message}`, "error");
}
```

}

async function connectDocsFolder() {
const popupFolderInput = document.getElementById("popupFolderInput");
if (popupFolderInput) {
popupFolderInput.value = "";
popupFolderInput.click();
return;
}

```
const tab = await getActiveTab();
if (!tab?.id) {
    await setStatus("Не удалось определить активную вкладку Exon.", "error");
    return;
}

try {
    const response = await chrome.tabs.sendMessage(tab.id, { action: "pickDocsFolder" });
    if (!response?.ok) {
        throw new Error(response?.error || "Браузер не вернул результат выбора папки.");
    }

    state.docsFolderName = response.folderName || "";
    state.docsFileCount = response.fileCount || 0;

    if (response.cancelled) {
        await setStatus("Выбор папки был отменен. Текущее состояние оставлено без изменений.", "warn");
    } else {
        await setStatus(
            `Подключена папка PDF: ${state.docsFolderName || "без имени"}, файлов: ${state.docsFileCount}.`,
            state.docsFileCount ? "success" : "warn"
        );
    }
} catch (error) {
    await setStatus(
        `Не удалось подключить папку PDF. ${error.message}`,
        "error"
    );
}
```

}

async function onFolderSelectedInPopup(event) {
const files = Array.from(event.target.files || []).filter((file) => /.pdf$/i.test(file.name || ""));
if (!files.length) {
await setStatus("В выбранной папке не найдено PDF файлов.", "warn");
return;
}

```
try {
    await saveFilesToIndexedDB(files);
    const folderName = files[0]?.webkitRelativePath?.split("/")[0] || "Подключенная папка";
    state.docsFolderName = folderName;
    state.docsFileCount = files.length;

    await saveState();
    updateUI();

    await setStatus(
        `Подключена папка PDF: ${folderName}, файлов: ${files.length}.`,
        "success"
    );
} catch (error) {
    await setStatus(`Ошибка сохранения папки в базу данных: ${error.message}`, "error");
}
```

}

async function refreshDocsStatus() {
try {
const cachedFiles = await loadFilesFromIndexedDB();
if (cachedFiles && cachedFiles.length > 0) {
const folderName = cachedFiles[0]?.webkitRelativePath?.split("/")[0] || "Подключенная папка";
state.docsFolderName = folderName;
state.docsFileCount = cachedFiles.length;
await saveState();
updateUI();
return;
}
} catch (e) {
// Fallback
}

```
const tab = await getActiveTab();
if (!tab?.id) {
    updateUI();
    return;
}

try {
    const response = await chrome.tabs.sendMessage(tab.id, { action: "getDocsFolderStatus" });
    if (response?.ok) {
        state.docsFolderName = response.folderName || "";
        state.docsFileCount = response.fileCount || 0;
        await saveState();
    }
} catch (error) {
    // silent
}

updateUI();
```

}

async function fillCurrentGroup(moveAfterFill) {
const group = state.groups[state.currentGroupIndex];
if (!group) {
await setStatus("Сначала загрузите CSV для автозаполнения.", "warn");
return;
}

```
const tab = await getActiveTab();
if (!tab?.id) {
    await setStatus("Не удалось определить активную вкладку Exon.", "error");
    return;
}

try {
    const response = await chrome.tabs.sendMessage(tab.id, {
        action: "fillExonForm",
        data: group
    });

    if (!response?.ok) {
        throw new Error(response?.error || "Content script не смог заполнить форму.");
    }

    const warnings = response.warnings?.length ? ` Предупреждения: ${response.warnings.join(" | ")}` : "";
    await setStatus(
        `Позиция ${group[0].pos} заполнена. Загружено файлов: ${response.uploadedFiles || 0}.${warnings}`,
        response.warnings?.length ? "warn" : "success"
    );

    if ((moveAfterFill || state.autoAdvance) && state.currentGroupIndex < state.groups.length - 1) {
        state.currentGroupIndex += 1;
        await saveState();
        updateUI();
    }
} catch (error) {
    await setStatus(`Ошибка автозаполнения: ${error.message}`, "error");
}
```

}

function moveGroup(delta) {
if (!state.groups.length) {
return;
}

```
const nextIndex = state.currentGroupIndex + delta;
if (nextIndex < 0 || nextIndex >= state.groups.length) {
    return;
}

state.currentGroupIndex = nextIndex;
saveState();
updateUI();
```

}

async function resetState() {
state = { ...DEFAULT\_STATE };
const csvInput = document.getElementById("csvFile");
if (csvInput) csvInput.value = "";
await chrome.storage.local.remove(STORAGE\_KEY);
await chrome.storage.local.remove("exonJvkBatchProgress");
updateBatchProgressUI(null);
updateUI();
}

function updateUI() {
const hasGroups = state.groups.length > 0;
const dataCard = document.getElementById("dataCard");
const noData = document.getElementById("noData");
const statusBox = document.getElementById("statusBox");
const sourceInfo = document.getElementById("sourceInfo");
const folderInfo = document.getElementById("folderInfo");
const autoAdvance = document.getElementById("autoAdvance");

```
if (sourceInfo) {
    sourceInfo.textContent = state.sourceFileName
        ? `CSV: ${state.sourceFileName} | Позиций: ${state.groups.length}`
        : "CSV еще не загружен";
}

if (folderInfo) {
    folderInfo.textContent = state.docsFolderName
        ? `Папка PDF: ${state.docsFolderName} | Файлов: ${state.docsFileCount}`
        : "Папка PDF пока не подключена к вкладке Exon";
}

if (statusBox) {
    statusBox.textContent = state.lastMessage;
    statusBox.className = `status ${state.lastLevel}`;
}

if (autoAdvance) {
    autoAdvance.checked = Boolean(state.autoAdvance);
}

if (!hasGroups) {
    if (dataCard) dataCard.style.display = "none";
    if (noData) noData.style.display = "block";
    return;
}

if (dataCard) dataCard.style.display = "block";
if (noData) noData.style.display = "none";

const batchStartPos = document.getElementById("batchStartPos");
const batchEndPos = document.getElementById("batchEndPos");
if (batchStartPos && (!batchStartPos.value || batchStartPos.value === "1")) {
    batchStartPos.value = "1";
}
if (batchEndPos && (batchEndPos.value === "10" || !batchEndPos.value) && state.groups.length > 0) {
    batchEndPos.value = Math.min(10, state.groups.length);
}

const group = state.groups[state.currentGroupIndex];
if (group) {
    const first = group[0];
    const rowDisplay = document.getElementById("rowDisplay");
    if (rowDisplay) {
        rowDisplay.innerHTML = buildGroupMarkup(group, first);
    }
    const stats = document.getElementById("stats");
    if (stats) {
        stats.textContent = `Позиция ${state.currentGroupIndex + 1} из ${state.groups.length}`;
    }
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
if (prevBtn) prevBtn.disabled = state.currentGroupIndex === 0;
if (nextBtn) nextBtn.disabled = state.currentGroupIndex >= state.groups.length - 1;
```

}

async function startBatchFill() {
if (!state.groups.length) {
await setStatus("Сначала загрузите CSV файл.", "warn");
return;
}

```
const startInput = document.getElementById("batchStartPos");
const endInput = document.getElementById("batchEndPos");

const startPos = parseInt(startInput?.value, 10) || 1;
const endPos = parseInt(endInput?.value, 10) || state.groups.length;

if (startPos < 1 || endPos < startPos) {
    await setStatus("Укажите корректный диапазон позиций для пакетной загрузки.", "error");
    return;
}

const batchStartBtn = document.getElementById("batchStartBtn");
if (batchStartBtn) batchStartBtn.disabled = true;

try {
    const response = await chrome.runtime.sendMessage({
        action: "startBatchFill",
        groups: state.groups,
        startPos,
        endPos
    });

    if (!response?.ok) {
        throw new Error(response?.error || "Не удалось запустить пакетное заполнение.");
    }
} catch (err) {
    await setStatus(`Ошибка запуска пакетного заполнения: ${err.message}`, "error");
} finally {
    if (batchStartBtn) batchStartBtn.disabled = false;
}
```

}

async function checkBatchProgressOnInit() {
const data = await chrome.storage.local.get("exonJvkBatchProgress");
if (data?.exonJvkBatchProgress) {
updateBatchProgressUI(data.exonJvkBatchProgress);
}
}

function updateBatchProgressUI(progress) {
const box = document.getElementById("batchStatusBox");
const text = document.getElementById("batchStatusText");
const btn = document.getElementById("batchStartBtn");
if (!box || !text) return;

```
if (!progress || (!progress.isRunning && !progress.message)) {
    box.style.display = "none";
    if (btn) btn.disabled = false;
    return;
}

box.style.display = "block";
text.textContent = progress.message || "";

if (progress.isRunning) {
    if (btn) btn.disabled = true;
    box.style.background = "var(--chip-blue-bg)";
    box.style.color = "var(--chip-blue-text)";
} else {
    if (btn) btn.disabled = false;
    box.style.background = "var(--chip-green-bg)";
    box.style.color = "var(--chip-green-text)";
}
```

}

function buildGroupMarkup(group, first) {
const preview = group
.slice(0, 3)
.map((row) => escapeHtml(firstFilledValue(row\.doc\_type, "Документ")))
.join(", ");

```
return `
    <div class="title">Позиция \u2116${escapeHtml(first.pos)}</div>
    <div class="name">${escapeHtml(first.name || "")}</div>
    <div class="chips">
        <span class="chip">${escapeHtml(first.shifr_rd || "")}</span>
        <span class="chip ok">Документов: ${group.length}</span>
    </div>
    <div class="meta">Ед.: ${escapeHtml(first.unit || "-")} | Кол-во: ${escapeHtml(first.qty || "-")}</div>
    <div class="meta">Поставщик: ${escapeHtml(first.organization || "-")}</div>
    <div class="meta">Типы: ${preview || "-"}</div>
`;
```

}

function parseCSV(text) {
const normalized = String(text || "").replace(/^\uFEFF/, "").trim();
if (!normalized) {
return [];
}

```
const rows = parseDelimitedRows(normalized, ";");
if (rows.length < 2) {
    return [];
}

const headers = rows[0].map((header) => normalizeHeader(header));
return rows.slice(1)
    .map((values) => normalizeRow(toRowObject(headers, values)))
    .filter((row) => row.pos && (!row.status || row.status === "READY"));
```

}

function parseDelimitedRows(text, delimiter) {
const rows = [];
let currentRow = [];
let currentCell = "";
let inQuotes = false;

```
for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"') {
        if (inQuotes && next === '"') {
            currentCell += '"';
            index += 1;
        } else {
            inQuotes = !inQuotes;
        }
        continue;
    }

    if (char === delimiter && !inQuotes) {
        currentRow.push(currentCell);
        currentCell = "";
        continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
        if (char === "\r" && next === "\n") {
            index += 1;
        }
        currentRow.push(currentCell);
        rows.push(currentRow);
        currentRow = [];
        currentCell = "";
        continue;
    }

    currentCell += char;
}

if (currentCell || currentRow.length) {
    currentRow.push(currentCell);
    rows.push(currentRow);
}

return rows.filter((row) => row.some((cell) => cleanCell(cell) !== ""));
```

}

function toRowObject(headers, values) {
const row = {};
headers.forEach((header, index) => {
row[header] = cleanCell(values[index] || "");
});
return row;
}

function normalizeRow(row) {
return {
id: cleanCell(row\.id),
shifr\_rd: cleanCell(row\.shifr\_rd),
pos: cleanCell(row\.pos),
name: cleanCell(row\.name),
unit: cleanCell(row\.unit),
qty: cleanCell(row\.qty),
organization: cleanCell(row\.organization),
doc\_type: cleanCell(row\.doc\_type),
doc\_number: cleanCell(row\.doc\_number),
doc\_date: cleanCell(row\.doc\_date),
doc\_expiry: cleanCell(row\.doc\_expiry),
delivery\_date: cleanCell(row\.delivery\_date),
file\_path: cleanCell(row\.file\_path),
status: cleanCell(row\.status).toUpperCase()
};
}

function groupRows(rows) {
const result = [];
const map = new Map();

```
rows.forEach((row) => {
    const key = `${row.shifr_rd}::${row.pos}`;
    if (!map.has(key)) {
        map.set(key, []);
        result.push(map.get(key));
    }
    map.get(key).push(row);
});

return result;
```

}

async function getActiveTab() {
const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
return tabs[0] || null;
}

async function restoreState() {
const loaded = await chrome.storage.local.get(STORAGE\_KEY);
if (loaded?.[STORAGE\_KEY]) {
state = { ...DEFAULT\_STATE, ...loaded[STORAGE\_KEY] };
}
}

async function saveState() {
await chrome.storage.local.set({ [STORAGE\_KEY]: state });
}

async function setStatus(message, level) {
state.lastMessage = message;
state.lastLevel = level;
await saveState();
updateUI();
}

function normalizeHeader(value) {
return cleanCell(value).toLowerCase().replace(/\s+/g, "\_");
}

function cleanCell(value) {
return String(value || "").replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
}

function firstFilledValue(...values) {
for (const value of values) {
if (cleanCell(value)) {
return cleanCell(value);
}
}
return "";
}

function escapeHtml(value) {
return String(value || "")
.replaceAll("&", "&")
.replaceAll("<", "<")
.replaceAll(">", ">")
.replaceAll('"', """)
.replaceAll("'", "'");
}

// --- NEW LOGIC: Modal, Template, Changelog ---

function downloadTemplate() {
const csvHeaders = "id;shifr\_rd;pos;name;unit;qty;organization;doc\_type;doc\_number;doc\_date;doc\_expiry;file\_path;status\n";
const csvSample1 = "1;НК-750.28-02-АОВ Автоматизация систем общеобменной вентиляции;1;Привод воздушной заслонки, Откр/Закр А.2хЕ.5.05(S);шт.;45;НПТ Климатика;Декларация;ЕАЭС;05.09.2022;04.08.2027;C:\\\Users\\\User\\\Desktop\\\от Артемия\\\НК-750.28-02-АОВ\\\1. Привод воздушной заслонки, ОткрЗакр А.2хЕ.5.05(S) Декларация о соответствии \u2116ЕАЭС N RU Д-RU.РА06.В.18450\_22 от 05.09.2022 до 04.08.2027.pdf;READY\n";
const csvSample2 = "78;НК-750.28-02-АОВ Автоматизация систем общеобменной вентиляции;41;Кабель контрольный с медными многопроволочными жилами, изоляцией и в оболочке из полимерной композиции с пониженной токсичностью продуктов горения МКШВнг(А)-LSLTx 3x2x0,75;м.;1052;Сегмент Энерго или аналог;Паспорт;454;22.07.2025;;C:\\\Users\\\User\\\Desktop\\\от Артемия\\\НК-750.28-02-АОВ\\\Кабельная продукция\\\41. ПАСПОРТ КАЧЕСТВА Кабель МКШВнг(А)-LSLTx 3х2х0,75мк \u2116454 925 от 22.07.2025.pdf;READY\n";

```
const csvContent = csvHeaders + csvSample1 + csvSample2;
const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
const url = URL.createObjectURL(blob);

const link = document.createElement('a');
link.href = url;
link.download = 'Exon_JVK_Template_AOV.csv';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
URL.revokeObjectURL(url);
```

}

function initModalLogic() {
const infoBtn = document.getElementById('infoBtn');
const modal = document.getElementById('changelogModal');
const closeBtn = document.getElementById('closeChangelogBtn');
const header = document.getElementById('changelogHeader');
const toggleAllBtn = document.getElementById('toggleAllVersionsBtn');
const content = document.getElementById('changelogContent');

```
if (!infoBtn || !modal || !content) return;

const versionsData = [
    {
        version: "2.4",
        title: "Актуальная",
        isLatest: true,
        text: "<li>Интегрирован новый премиальный интерфейс.</li><li>Добавлено срывающееся окно журнала версий с Drag-and-Drop.</li><li>Улучшена визуализация активной позиции.</li><li>Добавлена возможность скачивания шаблона CSV.</li>"
    },
    {
        version: "2.3",
        title: "Стабильная",
        isLatest: false,
        text: "<li>Автозагрузка PDF из подключенной папки.</li><li>Умный разбор номеров и дат из имени файла.</li>"
    },
    {
        version: "2.2",
        title: "Предыдущая",
        isLatest: false,
        text: "<li>Улучшено чтение CSV файлов сложной структуры.</li><li>Добавлена поддержка кодировки UTF-8 с BOM.</li>"
    },
    {
        version: "2.1",
        title: "Правки",
        isLatest: false,
        text: "<li>Добавлен выбор режима разбора наименований документов.</li><li>Мелкие правки и улучшения стабильности UI.</li>"
    },
    {
        version: "2.0",
        title: "Мажорное",
        isLatest: false,
        text: "<li>Полностью переработан алгоритм заполнения форм.</li><li>Добавлена поддержка новых полей спецификации EXON.</li>"
    }
];

content.innerHTML = versionsData.map((v, index) => `
    <div class="version-item ${index === 0 ? 'active' : ''}">
        <div class="version-header">
            <div class="version-title-group">
                <span style="color: var(--primary-btn);">Версия ${v.version}</span>
                ${v.isLatest 
                    ? `<span class="version-badge latest">Актуальная</span>` 
                    : `<span class="version-badge" style="background: var(--chip-blue-bg); color: var(--chip-blue-text);">${v.title}</span>`}
            </div>
            <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <div class="version-body">
            <div class="version-body-inner">
                <div class="version-text">
                    <ul style="margin: 0; padding-left: 16px;">
                        ${v.text}
                    </ul>
                </div>
            </div>
        </div>
    </div>
`).join('');

const versionItems = document.querySelectorAll('.version-item');
versionItems.forEach(item => {
    const itemHeader = item.querySelector('.version-header');
    const textContainer = item.querySelector('.version-text');
    
    itemHeader.addEventListener('click', () => {
        item.classList.toggle('active');
        if (!item.classList.contains('active')) {
            textContainer.style.height = ''; 
        }
        updateToggleAllButtonText(toggleAllBtn, versionItems);
    });
});

let allExpanded = false;
toggleAllBtn.addEventListener('click', () => {
    allExpanded = !allExpanded;
    versionItems.forEach(item => {
        const textContainer = item.querySelector('.version-text');
        if (allExpanded) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
            textContainer.style.height = ''; 
        }
    });
    toggleAllBtn.textContent = allExpanded ? "Свернуть все" : "Развернуть все";
});

infoBtn.addEventListener('click', () => {
    infoBtn.classList.toggle('flipped');
    modal.classList.toggle('visible');
    if (modal.classList.contains('visible') && !modal.style.top) {
        modal.style.top = '60px';
        modal.style.left = '20px';
    }
});

closeBtn.addEventListener('click', () => {
    infoBtn.classList.remove('flipped');
    modal.classList.remove('visible');
});

initDragLogic(header, modal);
```

}

function updateToggleAllButtonText(btn, items) {
const activeCount = document.querySelectorAll('.version-item.active').length;
if (activeCount === items.length) {
btn.textContent = "Свернуть все";
} else if (activeCount === 0) {
btn.textContent = "Развернуть все";
}
}

function initDragLogic(header, modal) {
let isDragging = false;
let startX, startY, initialX, initialY;

```
header.addEventListener('mousedown', dragStart);

function dragStart(e) {
    if (e.target.closest('.close-modal-btn')) return;
    
    initialX = modal.offsetLeft;
    initialY = modal.offsetTop;
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX - startX;
    const currentY = e.clientY - startY;
    modal.style.left = (initialX + currentX) + "px";
    modal.style.top = (initialY + currentY) + "px";
    modal.style.right = 'auto';
}

function dragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', dragEnd);
}
```

}

// --- IndexedDB PDF Storage in Popup ---
const DB\_NAME = "ExonJvkDocsDB";
const STORE\_NAME = "pdfFiles";

function openDocsDB() {
return new Promise((resolve, reject) => {
const request = indexedDB.open(DB\_NAME, 1);
request.onupgradeneeded = (event) => {
const db = event.target.result;
if (!db.objectStoreNames.contains(STORE\_NAME)) {
db.createObjectStore(STORE\_NAME, { keyPath: "name" });
}
};
request.onsuccess = () => resolve(request.result);
request.onerror = () => reject(request.error);
});
}

async function saveFilesToIndexedDB(files) {
const db = await openDocsDB();
const tx = db.transaction(STORE\_NAME, "readwrite");
const store = tx.objectStore(STORE\_NAME);
store.clear();
for (const file of files) {
try {
store.put({ name: file.name, path: file.webkitRelativePath || file.name, file: file });
} catch (e) {
console.warn("Skipping file save due to error:", file.name, e);
}
}
}

function getAllFileKeysFromIndexedDB() {
return new Promise(async (resolve) => {
try {
const db = await openDocsDB();
const tx = db.transaction(STORE\_NAME, "readonly");
const store = tx.objectStore(STORE\_NAME);
const req = store.getAllKeys();
req.onsuccess = () => resolve(req.result || []);
req.onerror = () => resolve([]);
} catch (e) {
resolve([]);
}
});
}

async function loadFilesFromIndexedDB() {
try {
const keys = await getAllFileKeysFromIndexedDB();
if (keys && keys.length > 0) {
return keys.map((key) => ({ name: key, webkitRelativePath: key }));
}
} catch (e) {
console.warn("Could not load keys from IndexedDB:", e);
}
return [];
}



шаблон таблицы для загрузки в расширение и автоматической подгрузки





| id  | shifr\_rd            | pos | name                                                                                                                                                       | unit | qty | organization   | doc\_type               | doc\_number                          | doc\_date | doc\_expiry                                                                                                                             | file\_path                                                                                                                                                                      | status                                       |
| --- | -------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | --- | -------------- | ----------------------- | ------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 1   | НК-750.28-02-СКУД.ОС | 1   | Неттоп Intel Core i7 14700T, DDR5 16ГБ, 512ГБ(SSD), Intel UHD Graphics   770, без операционной системы, черный, клавиатура, мышь ThinkCentre Tiny   M70q-5 | шт   | 5   | Lenovo / Intel | Сертификат соответствия | 2557                                 | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\1-3. Сертификат соответствия   №2557 от 03.02.2023 до 27.01.2026.pdf                                                                | READY                                        |
| 2   | НК-750.28-02-СКУД.ОС | 2   | Монитор 27", 2560x1440 ELA5812EU                                                                                                                           | шт   | 6   | ELA            | Сертификат соответствия | 2557                                 | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\1-3. Сертификат соответствия   №2557 от 03.02.2023 до 27.01.2026.pdf                                                                | READY                                        |
| 3   | НК-750.28-02-СКУД.ОС | 3   | Операционная система Astra Linux                                                                                                                           | шт   | 5   | Smartec        | Сертификат соответствия | 2557                                 | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\1-3. Сертификат соответствия   №2557 от 03.02.2023 до 27.01.2026.pdf                                                                | READY                                        |
| 57  | НК-750.28-02-СКУД.ОС | 4   | Ключ HASP Pro (FireSec-Pro прот. R3)                                                                                                                       | шт   | 1   |                | Информационное письмо   | 15\_1\_05\_3024                      | #######   |                                                                                                                                         | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\4. Ключ HASP Pro (FireSec-Pro   прот. R3)  Информационное   письмо\_№15\_1\_05\_3024 от\_30.09.2010.pdf                             | READY                                        |
| 58  | НК-750.28-02-СКУД.ОС | 4   | Ключ HASP Pro (FireSec-Pro прот. R3)                                                                                                                       | шт   | 1   |                | Паспорт                 | ПАСН.305659.003-08                   | #######   |                                                                                                                                         | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\4. Ключ HASP Pro (FireSec-Pro   прот. R3) Паспорт ПАСН.305659.003-08 от 10.02.2025.pdf                                              | READY                                        |
| 70  | НК-750.28-02-СКУД.ОС | 5   | РТ0020.006.002 ИБП со встроенными батареями, 2кВА РТ0020.006.002 Pitton                                                                                    | шт   | 5   | Pitton         | Сертификат соответствия | ЕАЭС N RU-С RU.НБ93.B.03228/23       | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\5-7. Сертификат соответствия   №ЕАЭС N RU-С RU.НБ93.B.03228\_23 с 15.05.2023 по 30.11.2026.pdf                                      | READY                                        |
| 73  | НК-750.28-02-СКУД.ОС | 5   | РТ0020.006.002 ИБП со встроенными батареями, 2кВА РТ0020.006.002 Pitton                                                                                    | шт   | 5   | Pitton         | Паспорт                 | РЕ2404110019                         | #######   |                                                                                                                                         | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\5.ИБП со встроенными   батареями, 2кВА PT0020.006.002 Паспорт №РЕ2404110019 от 12.04.2024.pdf                                       | READY                                        |
| 71  | НК-750.28-02-СКУД.ОС | 6   | ОР0002.002Опоры вертикальной установки Pitton                                                                                                              | шт   | 5   | Pitton         | Сертификат соответствия | ЕАЭС N RU-С RU.НБ93.B.03228/23       | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\5-7. Сертификат соответствия   №ЕАЭС N RU-С RU.НБ93.B.03228\_23 с 15.05.2023 по 30.11.2026.pdf                                      | READY                                        |
| 84  | НК-750.28-02-СКУД.ОС | 6   | ОР0002.002Опоры вертикальной установки Pitton                                                                                                              | шт   | 5   | Pitton         | Техническое описание    | б/н                                  | #######   |                                                                                                                                         | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\6. Опоры вертикальной   установки OP0002.002 Техническое описание б-н от 10.11.2025.pdf                                             | READY                                        |
| 72  | НК-750.28-02-СКУД.ОС | 7   | ОР0002.003 Расширитель опор вертикальной установки Pitton                                                                                                  | шт   | 5   | Pitton         | Сертификат соответствия | ЕАЭС N RU-С RU.НБ93.B.03228/23       | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\5-7. Сертификат соответствия   №ЕАЭС N RU-С RU.НБ93.B.03228\_23 с 15.05.2023 по 30.11.2026.pdf                                      | READY                                        |
| 103 | НК-750.28-02-СКУД.ОС | 7   | ОР0002.003 Расширитель опор вертикальной установки Pitton                                                                                                  | шт   | 5   | Pitton         | Паспорт                 | ОР0002.001                           |           | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\7. ОР0002.003 Расширитель   опор вертикальной установки Технический паспорт №ОР0002.001.PDF | READY                                                                                                                                                                           |                                              |
| 115 | НК-750.28-02-СКУД.ОС | 8   | Прибор приемно-контрольный и управления охранно-пожарный адресный   R3-Рубеж-2ОП                                                                           | шт   | 3   | ГК Рубеж       | Сертификат соответствия | ЕАЭС BY/112 02.01.ТР043 033.01 00042 | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\8-10.18.20. Сертификат   соответствия №ЕАЭС\_BY\_112\_02\_01\_TP043\_033\_01\_00042 с 23.06.2021 по   22.06.2026.pdf                | READY                                        |
| 120 | НК-750.28-02-СКУД.ОС | 8   | Прибор приемно-контрольный и управления охранно-пожарный адресный   R3-Рубеж-2ОП                                                                           | шт   | 3   | ГК Рубеж       | Этикетка                | ПАСН.425513.013 ЭТ                   | #######   |                                                                                                                                         | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\8. Прибор приемно-контрольный   и управления охранно-пожарный адресный R3-Рубеж-2ОП Этикетка ПАСН.425513.013   ЭТ от 21.10.2024.pdf | READY                                        |
| 116 | НК-750.28-02-СКУД.ОС | 9   | Блок индикации и управления R3-Рубеж-БИУ                                                                                                                   | шт   | 1   | ГК Рубеж       | Сертификат соответствия | ЕАЭС BY/112 02.01.ТР043 033.01 00042 | #######   | #######                                                                                                                                 | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\8-10.18.20. Сертификат   соответствия №ЕАЭС\_BY\_112\_02\_01\_TP043\_033\_01\_00042 с 23.06.2021 по   22.06.2026.pdf                | READY                                        |
| 130 | НК-750.28-02-СКУД.ОС | 9   | Блок индикации и управления R3-Рубеж-БИУ                                                                                                                   | шт   | 1   | ГК Рубеж       | Этикетка                | ПАСН.425521.018 ЭТ                   | #######   |                                                                                                                                         | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\9. Блок индикации и   управления R3-Рубеж-БИУ Этикетка ПАСН.425521.018 ЭТ от 19.08.2024.pdf                                         | READY                                        |
| 4   | НК-750.28-02-СКУД.ОС | 10  | Модуль сопряжения преобразователь интерфейса R3-МС-Е                                                                                                       | шт   | 1   | ГК Рубеж       | Этикетка                | ПАСН.423149.130 ЭТ                   | #######   |                                                                                                                                         | g:\Мой диск\от Артемия\НК-750.28-02-СКУД.ОС\10. Модуль сопряжения   преобразователь интерфейса R3-МС-Е    Этикетка ПАСН.423149.130 ЭТ от 18.10.2025.pdf                         | READY<br><br>расскажи суть работы расширения |

---

**Assistant:**

Суть твоего расширения я бы сформулировал гораздо сильнее, чем просто «автозаполнение Exon».

## Что это на самом деле

**EXON JVK — браузерное расширение для полуавтоматической подготовки и загрузки комплекта документов в Exon на основе структурированного CSV и локального набора PDF-файлов.**

То есть ты сделал связку:

```text
Excel / таблица
      ↓
CSV
      ↓
EXON JVK
      ↓
локальные PDF
      ↓
сопоставление документов
      ↓
заполнение формы Exon
      ↓
метаданные документа
      ↓
готовая карточка
```

И это уже полноценный **workflow automation tool**.

---

# Что происходит пошагово

### 1. Ты готовишь структуру данных

Расширение принимает CSV примерно такого вида:

```text
позиция
наименование
количество
организация
тип документа
номер
дата
срок действия
путь к PDF
статус
```

То есть Excel у тебя выступает как **источник структурированных данных**.

---

### 2. Расширение группирует строки по одной позиции

У тебя есть:

```text
shifr_rd + pos
```

Например:

```text
СКУД.ОС + 4
```

И одна позиция может иметь:

```text
позиция 4
├── Информационное письмо
└── Паспорт
```

Расширение собирает их в одну группу.

Это очень важная функция.

Потому что Exon работает не просто с одной строкой спецификации, а с **набором связанных документов**.

---

### 3. Подключается локальная папка PDF

Ты добавил выбор папки:

```text
webkitdirectory
```

и дальше браузер получает список PDF.

То есть пользователь не обязан вручную искать каждый документ.

Система знает:

```text
CSV
↓
какой файл нужен
```

и:

```text
папка
↓
какие файлы реально существуют
```

---

### 4. Расширение сопоставляет строку CSV с PDF

Причём у тебя несколько уровней поиска.

Сначала:

```text
точное имя файла
```

потом:

```text
нормализованное имя
```

потом:

```text
очищенное имя
```

потом:

```text
путь
```

потом ещё:

```text
номер позиции + тип документа + наименование
```

То есть у тебя реализован **fallback matching**.

Это хороший инженерный подход:

```text
точное совпадение
      ↓
не найдено?
      ↓
нормализованное
      ↓
не найдено?
      ↓
очищенное
      ↓
не найдено?
      ↓
matching по контексту
```

---

# 5. Дальше расширение открывает форму Exon

Если форма ещё не открыта:

```text
ensureFormOpen()
```

пытается найти кнопку добавления и открыть нужный dialog.

Затем заполняется основная информация:

```text
Наименование
Дата поставки
Раздел РД
Количество
Единица измерения
Поставщик
```

---

# 6. Особенно интересно то, что ты работаешь с React-интерфейсом Exon

У тебя есть:

```js
setReactInputValue()
```

которая не просто делает:

```js
input.value = ...
```

а вызывает setter нативного элемента и затем события:

```text
input
change
keyup
```

Это необходимо, потому что интерфейс Exon, судя по селекторам и поведению, построен на современном React UI.

То есть ты фактически сделал **DOM automation поверх существующего React-приложения**.

---

# 7. Автоматизируется не только загрузка PDF

Это важнейший момент.

После загрузки документа расширение извлекает метаданные.

Например из:

```text
Сертификат соответствия №2557
от 03.02.2023
до 27.01.2026.pdf
```

оно пытается получить:

```text
Тип:
Сертификат соответствия

Номер:
2557

Дата:
03.02.2023

Срок:
27.01.2026
```

То есть файловая система используется как **источник метаданных**, а не просто как место хранения.

---

# 8. У тебя есть собственный parser имен документов

Вот этот блок:

```text
parseDocNameFromFilename()
parseDocNumberFromFilename()
parseDocDateFromFilename()
parseDocExpiryFromFilename()
```

по сути делает:

```text
PDF filename
      ↓
pattern recognition
      ↓
document metadata
```

Это уже можно называть:

> **автоматической классификацией и извлечением метаданных из имен файлов**

Без всякого AI.

---

# 9. Затем расширение заполняет карточки документов

Получается:

```text
PDF
 ↓
Document Card
 ├── тип
 ├── номер
 ├── дата выдачи
 └── дата окончания
```

И подсвечивает обработанную карточку.

---

# 10. Есть контроль ошибок

Ты не просто делаешь:

> заполнил → всё хорошо.

Система возвращает:

```text
warnings[]
```

Например:

```text
PDF не найден
не найден раздел РД
не найдена карточка
файл слишком большой
не найдено поле
```

Это уже **fault-tolerant automation**, хотя я бы не использовал этот термин на сайте без объяснения.

Лучше:

> **Система проверяет результат выполнения и сообщает о проблемах, которые требуют ручного вмешательства.**

---

# 11. Есть fallback-механизм

Это особенно хорошо.

Ты сначала пытаешься использовать:

```text
абсолютный путь → CDP
```

а если не получилось:

```text
IndexedDB / локально выбранные файлы
```

и затем:

```text
обычный input[type=file]
+
DataTransfer
+
имитация drop
```

То есть у тебя фактически несколько стратегий загрузки:

```text
            ATTACH FILE
                 │
       ┌─────────┴─────────┐
       │                   │
      CDP              Browser API
       │                   │
       └─────────┬─────────┘
                 ↓
             Exon form
```

Это очень интересная часть реализации.

---

# 12. IndexedDB — отдельная хорошая вещь

Ты сохраняешь выбранные PDF локально:

```text
ExonJvkDocsDB
└── pdfFiles
```

Зачем?

Чтобы после закрытия popup или повторного открытия расширения не заставлять пользователя каждый раз заново выбирать папку.

То есть у тебя есть:

```text
выбрал папку
      ↓
IndexedDB
      ↓
расширение помнит набор файлов
```

Это уже нормальное состояние приложения.

---

# 13. Есть ещё пакетный режим

В `popup.js` есть:

```text
startBatchFill()
```

То есть ты начал двигаться дальше простого:

> заполнить одну позицию.

У тебя появляется:

```text
позиция 1
 ↓
позиция 2
 ↓
позиция 3
 ↓
...
```

с диапазоном:

```text
от 1
до 10
```

и сохранением прогресса.

Это **очень важный пункт для кейса**.

---

# 14. Поэтому я бы не называл этот кейс

> «JS-скрипт автоматизации Exon»

Слишком дёшево звучит относительно того, что ты сделал.

Лучше:

# **EXON JVK — браузерное расширение для автоматизации подготовки ИД**

или более технически:

# **Автоматизация загрузки и заполнения документов в Exon**

---

# Как я бы описал его на сайте

### Задача

> Ручной ввод материалов и сопроводительной документации в Exon требует повторяющихся действий: поиск PDF, загрузка файлов, выбор раздела РД, ввод количества, поставщика, типа документа, номера и дат.

### Решение

> Разработал браузерное расширение, которое принимает структурированный CSV, группирует документы по позициям, сопоставляет строки с локальными PDF-файлами, загружает документы в Exon и автоматически заполняет метаданные.

### Что автоматизировано

```text
✓ импорт CSV
✓ группировка документов по позиции
✓ подключение локальной папки PDF
✓ поиск и сопоставление файлов
✓ открытие формы Exon
✓ заполнение основной информации
✓ выбор раздела РД
✓ установка количества и единицы
✓ выбор поставщика
✓ загрузка PDF
✓ определение типа документа
✓ извлечение номера
✓ извлечение даты
✓ извлечение срока действия
✓ контроль ошибок
✓ сохранение состояния
✓ пакетная обработка
```

---

# Архитектуру расширения можно показать прямо на сайте

Это будет очень эффектный технический блок:

```text
                 EXON JVK
                    │
      ┌─────────────┼─────────────┐
      │             │             │
      ▼             ▼             ▼
    CSV          PDF folder    IndexedDB
      │             │             │
      └─────────────┼─────────────┘
                    ↓
              MATCHING ENGINE
                    ↓
           DOCUMENT PARSER
                    ↓
              EXON ADAPTER
                    ↓
             FORM AUTOFILL
                    ↓
             VALIDATION
                    ↓
             BATCH PROCESS
```

И это уже можно визуализировать красиво.

---

# А для работодателя я бы показал не код

Код у тебя можно открыть отдельной кнопкой:

**View architecture**

Но основной кейс:

```text
┌──────────────────────────────────────────────┐
│ EXON JVK                                     │
│ Browser extension                             │
│                                              │
│ CSV → PDF → Matching → Exon → Metadata      │
├────────────────────┬─────────────────────────┤
│                    │                         │
│  BEFORE            │  AFTER                  │
│                    │                         │
│  Ручной ввод       │  CSV                    │
│  Поиск PDF         │    ↓                    │
│  Заполнение        │  Автоматический         │
│  дат               │  поиск документов       │
│  Номер             │    ↓                    │
│  Поставщик         │  Заполнение Exon        │
│                    │    ↓                    │
│                    │  Проверка               │
└────────────────────┴─────────────────────────┘
```

---

# Видео здесь будет особенно полезно

Я бы сделал **реальный screen recording расширения**.

Показываешь:

```text
00:00
CSV

00:05
Выбор папки

00:10
Позиция

00:15
"Заполнить"

00:20
Exon открывается

00:25
PDF появляются

00:30
тип / номер / дата

00:40
следующая позиция

00:50
пакетный режим
```

И заголовок:

> **From CSV to ready Exon card**

Это будет очень убедительно.

---

# И теперь я вижу связь со всеми твоими кейсами

Это самое интересное.

У тебя уже складывается **единая система автоматизации ПТО**:

```text
                    ДАННЫЕ ПТО
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
       Excel        Power Query    AutoCAD
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                  MASTER DATA
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
      СРАВНЕНИЕ      ШАХМАТКА      EXON JVK
       П / РД /       ИД статусы    загрузка
        ФАКТ                         │
                                     ▼
                                    PDF
                                     │
                                     ▼
                                ИД / СОГЛАСОВАНИЕ
```

Вот это уже **не набор случайных Excel-файлов и скриптов**.

Это твоя реальная профессиональная специализация:

> **Инженер ПТО, который систематизирует данные и автоматизирует процессы подготовки и сдачи исполнительной документации.**

Именно эту мысль я бы сделал центральной концепцией новой версии сайта.

---

**User:**

в будущщем подвзать шахматку к таблице csv чтобы к примеру подготовить для начала все документы, вписать их или составить отдельную таблицу с , а ещё я занимаюсь парсингом сайтов и данных из них не так давно выгрузил все каталоги сайта ETM с помощью Python

import pandas as pd
 import json
 import os
 
 folder = r"g:\Мой диск\\\_\_\_ETM\_\_\_\Технические характеристики"
 data = {}
 
 for i in range(1, 11):
     file\_path = os.path.join(folder, f"technical\_characteristics\_{i}.xlsx")
     if os.path.exists(file\_path):
         try:
             df = pd.read\_excel(file\_path, nrows=0)
             data[f"technical\_characteristics\_{i}.xlsx"] = list(df.columns)
         except Exception as e:
             data[f"technical\_characteristics\_{i}.xlsx"] = str(e)
     else:
         data[f"technical\_characteristics\_{i}.xlsx"] = "File not found"
 
 with open(r"g:\Мой диск\\\_\_\_ETM\_\_\_\headers.json", "w", encoding="utf-8") as f:
     json.dump(data, f, ensure\_ascii=False, indent=4)   



import json
 try:
     with open('deep\_discover\_progress.json', 'r', encoding='utf-8') as f:
         d = json.load(f)
         print(f"Seen: {len(d.get('seen\_categories', []))}")
         print(f"Visited: {len(d.get('visited', []))}")
 except Exception as e:
     print(e)   



import asyncio
import sys
import io
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
page = await context.new\_page()

```
    print("Navigating to sitemap.xml ...")
    await page.goto("https://www.etm.ru/robots.txt", timeout=60000, wait_until="networkidle")
    content = await page.content()
    print(content[:500])
    await browser.close()
```

asyncio.run(main())



import os
import sys
import json

SAVE\_DIR = r'G:\Мой диск\_**ETM**\_'
DOWNLOAD\_DIR = os.path.join(SAVE\_DIR, 'downloads\_full')

print("Starting cleanup of unwanted files...")

# List of extensions to delete

DELETE\_EXTENSIONS = ['.sdf', '.stp', '.step']
MAX\_SIZE = 30 \* 1024 \* 1024 # 30 MB

deleted\_count = 0
deleted\_size\_count = 0

if os.path.exists(DOWNLOAD\_DIR):
for filename in os.listdir(DOWNLOAD\_DIR):
filepath = os.path.join(DOWNLOAD\_DIR, filename)
if not os.path.isfile(filepath):
continue

```
    # Check extension
    ext = os.path.splitext(filename)[1].lower()
    if ext in DELETE_EXTENSIONS:
        try:
            os.remove(filepath)
            print(f"Deleted (extension): {filename}")
            deleted_count += 1
        except Exception as e:
            print(f"Error deleting {filename}: {e}")
            
    # Check size
    else:
        try:
            size = os.path.getsize(filepath)
            if size >= MAX_SIZE:
                os.remove(filepath)
                print(f"Deleted (size {size/(1024*1024):.1f}MB): {filename}")
                deleted_size_count += 1
        except Exception as e:
            print(f"Error checking/deleting {filename}: {e}")
```

print(f"\nCleanup complete!")
print(f"Deleted by extension: {deleted\_count}")
print(f"Deleted by size (>=30MB): {deleted\_size\_count}")





import asyncio
import json
import sys
import io
from playwright.async\_api import async\_playwright

# Fix console encoding

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def count\_catalog():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
page = await context.new\_page()

```
    print("=== Loading main catalog page ===")
    await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(3000)

    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Build ID: {build_id}")

    # Get subcategory links from page
    links = await page.query_selector_all('a[href*="/catalog/"]')
    subcats = set()
    for link in links:
        href = await link.get_attribute('href')
        text = (await link.inner_text()).strip()
        if href and text and '/catalog/' in href:
            subcats.add((href, text[:80]))

    subcategory_urls = []
    for href, text in sorted(subcats):
        if href.startswith('/catalog/'):
            slug = href.replace('/catalog/', '')
            subcategory_urls.append((slug, text))

    print(f"Found {len(subcategory_urls)} subcategory slugs\n")

    # For each category, fetch catalog to count products
    total_products = 0
    category_counts = []
    parent_categories = []  # categories that have no products (just subcategories)

    for slug, cat_name in subcategory_urls:
        try:
            result = await page.evaluate("""async (args) => {
                const [buildId, slug] = args;
                const url = `/_next/data/${buildId}/catalog/${slug}.json?slug=${slug}`;
                const r = await fetch(url, {credentials: 'include'});
                if (!r.ok) return {error: r.status};
                const data = await r.json();
                const state = data.pageProps?.initialState || {};
                const catalog = state.catalog || {};
                const allData = catalog.allCatalogData || {};
                const rows = allData.rows || [];
                const total = allData.total || allData.cnt || 0;
                // Check for pagination info
                const pages = allData.pages || 0;
                const perPage = allData.perPage || allData.per_page || 24;
                return {
                    count: total, 
                    rowsLen: rows.length, 
                    hasProducts: rows.length > 0,
                    pages: pages,
                    perPage: perPage
                };
            }""", [build_id, slug])

            count = result.get('count', 0)
            rows_len = result.get('rowsLen', 0)
            has_products = result.get('hasProducts', False)
            pages = result.get('pages', 0)

            if has_products:
                marker = "[LEAF]"
                total_products += count
                category_counts.append({
                    'category': cat_name, 
                    'slug': slug, 
                    'count': count,
                    'pages': pages
                })
            else:
                marker = "[DIR] "
                parent_categories.append(slug)

            print(f"  {marker} {slug:60s} total={count:5d} page1={rows_len:3d} pages={pages}")

        except Exception as e:
            print(f"  [ERR] {slug}: {e}")

    print(f"\n{'='*60}")
    print(f"PARENT CATEGORIES (no direct products): {len(parent_categories)}")
    print(f"LEAF CATEGORIES (with products):        {len(category_counts)}")
    print(f"TOTAL PRODUCTS:                         {total_products}")
    print(f"\nEstimated documents (avg ~3 per product): ~{total_products * 3}")
    print(f"Estimated download size (avg ~5MB/product): ~{total_products * 5 / 1024:.1f} GB")
    print(f"Estimated time (2s per product + downloads): ~{total_products * 5 / 60:.0f} min")

    print(f"\n{'='*60}")
    print("Category breakdown (sorted by count):")
    for cc in sorted(category_counts, key=lambda x: -x['count']):
        print(f"  {cc['count']:5d} products | pages={cc['pages']:3d} | {cc['category']}")

    await browser.close()
```

asyncio.run(count\_catalog())



import asyncio
from playwright.async\_api import async\_playwright

async def run():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
\# Hide webdriver
await context.add\_init\_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
page = await context.new\_page()

```
    print("Loading catalog...")
    try:
        r = await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000)
        print(f"Status code: {r.status if r else 'No response'}")
    except Exception as e:
        print(f"Navigation error: {e}")
        
    print("Waiting 10 seconds...")
    await page.wait_for_timeout(10000)
    
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Parsed Build ID: {build_id}")
    
    # Take screenshot to see if blocked
    screenshot_path = "debug_screenshot.png"
    await page.screenshot(path=screenshot_path)
    print(f"Screenshot saved to: {screenshot_path}")
    
    await browser.close()
```

asyncio.run(run())



import os
import sys
import io
import asyncio
import json
import re
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

ROOT\_CATEGORIES = [
"11\_kabeli\_i\_provoda",
"16\_kabelenesuschie\_sistemy",
"21\_elektromontazhnye\_izdelija",
"30\_svetotehnika",
"40\_rozetki\_i\_vykljuchateli",
"45\_retro\_elektrika",
"50\_nizkovoltnoe\_oborudovanie",
"55\_schity\_i\_shkafy",
"80\_oborudovanie\_6\_10kv",
"82\_komplektnye\_ustroystva"
]

async def main():
seen\_categories = set(ROOT\_CATEGORIES)
queue = list(ROOT\_CATEGORIES)
visited = set()

```
if os.path.exists("deep_discover_progress.json"):
    with open("deep_discover_progress.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        seen_categories = set(data.get("seen_categories", []))
        visited = set(data.get("visited", []))
        queue = [c for c in seen_categories if c not in visited]

async with async_playwright() as p:
    browser = await p.chromium.launch(headless=True)
    # Using etm_state.json!
    context = await browser.new_context(
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        storage_state="etm_state.json"
    )
    page = await context.new_page()

    while queue:
        current_cat = queue.pop(0)
        if current_cat in visited:
            continue
            
        print(f"Visiting [{len(visited)}/{len(seen_categories)}] {current_cat}...", flush=True)
        try:
            for attempt in range(3):
                try:
                    await page.goto(f"https://www.etm.ru/catalog/{current_cat}", timeout=30000, wait_until="domcontentloaded")
                    await page.wait_for_timeout(3000)
                    
                    # Verify we are not hitting ddos guard
                    title = await page.title()
                    if "DDOS-GUARD" in title:
                        print("Hit DDOS-GUARD! Attempting wait...", flush=True)
                        await page.wait_for_timeout(5000)
                        
                    break
                except Exception as e:
                    if attempt == 2:
                        raise e
                    print(f"  Retry {attempt+1} for {current_cat}", flush=True)
                    await page.wait_for_timeout(2000)

            links = await page.evaluate("""() => {
                return Array.from(document.querySelectorAll('a[href^="/catalog/"]')).map(a => a.getAttribute('href'));
            }""")
            
            new_links_found = 0
            for href in links:
                if href and '_' in href:
                    slug = href.split('/catalog/')[1].split('?')[0].split('#')[0]
                    if slug and slug not in seen_categories and re.match(r'^\d+_', slug):
                        seen_categories.add(slug)
                        queue.append(slug)
                        new_links_found += 1
            
            visited.add(current_cat)
            print(f"  Found {new_links_found} new categories. Queue size: {len(queue)}", flush=True)
            
            with open("deep_discover_progress.json", "w", encoding="utf-8") as f:
                json.dump({
                    "seen_categories": sorted(list(seen_categories)),
                    "visited": sorted(list(visited))
                }, f, ensure_ascii=False, indent=2)
                
        except Exception as e:
            print(f"Error on {current_cat}: {e}", flush=True)
            visited.add(current_cat)

    print(f"\nFinal count of ALL categories: {len(seen_categories)}", flush=True)
    await browser.close()
```

asyncio.run(main())



import requests
import re
import json

ROOT\_CATEGORIES = [
"11\_kabeli\_i\_provoda",
"16\_kabelenesuschie\_sistemy",
"21\_elektromontazhnye\_izdelija",
"30\_svetotehnika",
"40\_rozetki\_i\_vykljuchateli",
"45\_retro\_elektrika",
"50\_nizkovoltnoe\_oborudovanie",
"55\_schity\_i\_shkafy",
"80\_oborudovanie\_6\_10kv",
"82\_komplektnye\_ustroystva"
]

all\_leaves = set()

headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for root in ROOT\_CATEGORIES:
print(f"Fetching {root}...")
try:
r = requests.get(f"[https://www.etm.ru/catalog/{root](https://www.etm.ru/catalog/{root)}", headers=headers, timeout=15)
text = r.text

```
    # Find all catalog links in the text
    links = re.findall(r'href="/catalog/([^"?]+)"', text)
    for link in links:
        if '_' in link and link != root and link not in ROOT_CATEGORIES:
            all_leaves.add(link)
            
    print(f"Total accumulated: {len(all_leaves)}")
except Exception as e:
    print(f"Failed {root}: {e}")
```

leaves\_list = sorted(list(all\_leaves))
with open("target\_categories.json", "w", encoding="utf-8") as f:
json.dump(leaves\_list, f, ensure\_ascii=False, indent=2)

print(f"Done! Saved {len(leaves\_list)} categories.")





import os
import sys
import io
import asyncio
import json
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

ROOT\_CATEGORIES = [
"11\_kabeli\_i\_provoda",
"16\_kabelenesuschie\_sistemy",
"21\_elektromontazhnye\_izdelija",
"30\_svetotehnika",
"40\_rozetki\_i\_vykljuchateli",
"45\_retro\_elektrika",
"50\_nizkovoltnoe\_oborudovanie",
"55\_schity\_i\_shkafy",
"80\_oborudovanie\_6\_10kv",
"82\_komplektnye\_ustroystva"
]

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
page = await context.new\_page()

```
    all_leaves = set()

    for root in ROOT_CATEGORIES:
        print(f"Loading {root}...")
        try:
            await page.goto(f"https://www.etm.ru/catalog/{root}", timeout=30000, wait_until="domcontentloaded")
            await page.wait_for_timeout(2000)
            
            # Find all links on the left menu (they all start with /catalog/ + slug)
            links = await page.query_selector_all('a[href^="/catalog/"]')
            for link in links:
                href = await link.get_attribute('href')
                if href and '_' in href:
                    slug = href.replace('/catalog/', '').split('?')[0]
                    if slug != root and slug not in ROOT_CATEGORIES:
                        all_leaves.add(slug)
                        
            print(f"Total accumulated so far: {len(all_leaves)}")
            
            # Save partial just in case
            with open("target_categories.json", "w", encoding="utf-8") as f:
                json.dump(sorted(list(all_leaves)), f, ensure_ascii=False, indent=2)
        except Exception as e:
            print(f"Error on {root}: {e}")

    print(f"\nFinal count of subcategories: {len(all_leaves)}")
    await browser.close()
```

asyncio.run(main())





import pandas as pd
import os
import re
import fitz  # PyMuPDF
from rapidocr\_onnxruntime import RapidOCR

ocr\_engine = RapidOCR()

input\_folder = r"g:\Мой диск\_**ETM**\_"
tech\_folder = os.path.join(input\_folder, "Технические характеристики")
downloads\_folder = os.path.join(input\_folder, "downloads\_full")
output\_master\_table = os.path.join(input\_folder, "master\_documents.xlsx")

# 1. Load catalog hierarchy mapping

print("Loading catalog mapping...")
catalog\_df = pd.read\_excel(os.path.join(input\_folder, "catalog\_hierarchy.xlsx"))
files\_mapping = {}
for \_, row in catalog\_df.iterrows():
etm = str(row\.get("Код ETM", "")).strip()
files\_str = str(row\.get("Скачанные файлы", ""))
if etm and files\_str and files\_str.lower() != 'nan':
files\_mapping[etm] = [f.strip() for f in files\_str.split(',') if f.strip()]

def clean\_manufacturer(mfg):
if not isinstance(mfg, str) or pd.isna(mfg): return "Производитель"
mfg = mfg.replace('ООО', '').replace('ЗАО', '').replace('ОАО', '').replace('АО', '')
mfg = mfg.replace('"', '').replace("'", "").replace("«", "").replace("»", "")
return mfg.strip() or "Производитель"

def clean\_name(name, mark):
if not isinstance(name, str) or pd.isna(name): return ""
\# Remove unwanted trailing descriptions
removals = [
r'для кабельной канализации', r'в бухте \d+м', r'безгалогеновая', r'цвет [а-яА-Яa-zA-Z]+',
r'qmm', r'grey', r'black', r'blue', r'red'
]
name\_clean = name
for r in removals:
name\_clean = re.compile(r, re.IGNORECASE).sub('', name\_clean)

```
name_clean = re.sub(r',\s*,', ',', name_clean)
name_clean = re.sub(r'\s+', ' ', name_clean).strip(' ,')

# Ensure mark is present
if isinstance(mark, str) and mark.strip() and str(mark) != 'nan':
    mark_str = str(mark).strip()
    if mark_str.lower() not in name_clean.lower():
        name_clean = f"{name_clean} {mark_str}"
        
return name_clean
```

def extract\_text\_from\_pdf(pdf\_path):
text = ""
try:
doc = fitz.open(pdf\_path)
\# 1. Native text extraction
for page in doc:
t = page.get\_text()
if t: text += t + "\n"

```
    # 2. OCR extraction for scanned/image PDFs (or if native text is too short)
    if len(text.strip()) < 80 and len(doc) > 0:
        for i in range(min(2, len(doc))): # OCR first 2 pages
            pix = doc[i].get_pixmap(dpi=150)
            img_bytes = pix.tobytes("png")
            result, _ = ocr_engine(img_bytes)
            if result:
                ocr_page_text = " ".join([line[1] for line in result])
                text += "\n" + ocr_page_text
except Exception as e:
    print(f"Error reading {pdf_path}: {e}")
return text
```

def extract\_metadata(text, filename):
text\_clean = text.replace('\n', ' ')
text\_lower = text\_clean.lower() + " " + filename.lower()

```
# Document Type Detection
doc_type = "Документ"
types_map = [
    ("сертификат соответствия", "Сертификат соответствия"),
    ("декларация о соответствии", "Декларация о соответствии"),
    ("информационное письмо", "Информационное письмо"),
    ("паспорт качества", "Паспорт качества"),
    ("паспорт безопасности", "Паспорт безопасности"),
    ("паспорт", "Паспорт"),
    ("техническое описание", "Техническое описание"),
    ("руководство по эксплуатации", "Руководство по эксплуатации"),
    ("инструкция", "Инструкция")
]
for key, val in types_map:
    if key in text_lower:
        doc_type = val
        break
        
# Number Detection
doc_num = "б-н"
# Match EAEC / TS / RU certificates: e.g., ЕАЭС RU C-RU.08_26 or RU C-RU.HA46.B.02874/22
match_eaeu = re.search(r'((?:ЕАЭС|ТС|RU)\s*[A-Z0-9\.\-\_\/]+(?:\s*[A-Z0-9\.\-\_\/]+){1,4})', text_clean, re.IGNORECASE)
if match_eaeu and len(match_eaeu.group(1)) > 5:
    doc_num = match_eaeu.group(1).strip()
else:
    match_num = re.search(r'(?:№|N|Номер)\s*([A-Za-zА-Яа-я0-9\-\.\_\/]{3,30})', text_clean)
    if match_num:
        doc_num = match_num.group(1).strip('.')

# Replace forbidden filename character '/' with '_' in document number
doc_num = doc_num.replace('/', '_')

# Dates Detection
date1, date2 = "", ""
dates = re.findall(r'(\d{2}\.\d{2}\.\d{4})', text_clean)
if len(dates) >= 2:
    date1, date2 = dates[0], dates[1]
elif len(dates) == 1:
    date1 = dates[0]
    
return doc_type, doc_num, date1, date2
```

# Main loop

results = []
count = 0

for f in os.listdir(tech\_folder):
if f.endswith(".xlsx"):
print(f"Processing category: {f}")
df = pd.read\_excel(os.path.join(tech\_folder, f))
for \_, row in df.iterrows():
etm = str(row\.get("Код ETM", "")).strip()
if etm in files\_mapping:
orig\_name = row\.get("Наименование", "")
mark = row\.get("Марка", "")
if pd.isna(mark): mark = row\.get("Тип изделия", "")
category = row\.get("Категория", "")
mfg = clean\_manufacturer(row\.get("Производитель", ""))

```
            clean_n = clean_name(orig_name, mark)
            
            for file_rel in files_mapping[etm]:
                file_path = os.path.join(input_folder, file_rel.replace('\\', '/'))
                if os.path.exists(file_path):
                    text = extract_text_from_pdf(file_path)
                    d_type, d_num, d1, d2 = extract_metadata(text, os.path.basename(file_path))
                    
                    date_str = f"с {d1} по {d2}" if d1 and d2 else (f"с {d1}" if d1 else "")
                    num_str = f"№{d_num}" if d_num != "б-н" else d_num
                    
                    new_base = f"{clean_n} {d_type} {num_str} {date_str} {mfg}".strip()
                    new_base = re.sub(r'[/\\:*?"<>|]', '_', new_base)
                    new_base = re.sub(r'\s+', ' ', new_base)
                    
                    new_filename = f"{new_base[:200]}.pdf"
                    new_filepath = os.path.join(downloads_folder, new_filename)
                    
                    if file_path != new_filepath and os.path.exists(file_path):
                        try:
                            os.rename(file_path, new_filepath)
                            file_path = new_filepath
                        except Exception as ex:
                            print(f"Rename error: {ex}")
                    
                    results.append({
                        "КОД ETM": etm,
                        "Наименование": orig_name,
                        "Очищенное Наименование": clean_n,
                        "Категория": category,
                        "Производитель": mfg,
                        "Марка или тип": mark,
                        "Тип документа": d_type,
                        "Номер документа": d_num,
                        "Дата 1": d1,
                        "Дата 2": d2,
                        "Процент точности, уверености": "98%",
                        "Нужна ли ручная проверка": "Нет",
                        "Старый путь": file_path,
                        "Новый путь": new_filepath
                    })
            count += 1
```

out\_df = pd.DataFrame(results)
out\_df.to\_excel(output\_master\_table, index=False)
print(f"DONE! Processed {len(results)} documents with RapidOCR. Master table saved to {output\_master\_table}")



import asyncio
import json
import sys
import io
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def extract\_categories():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
page = await context.new\_page()

```
    print("Navigating to ETM catalog...")
    await page.goto("https://www.etm.ru/catalog", timeout=60000, wait_until="networkidle")
    
    try:
        # Extract __NEXT_DATA__ script tag content
        element = await page.query_selector("#__NEXT_DATA__")
        if element:
            content = await element.inner_text()
            next_data = json.loads(content)
            with open("etm_next_data_catalog.json", "w", encoding="utf-8") as f:
                json.dump(next_data, f, ensure_ascii=False, indent=2)
            print("Done saving next_data.")
        else:
            print("No __NEXT_DATA__ found.")
    except Exception as e:
        print(f"Error: {e}")
    
    await browser.close()
```

if **name** == "**main**":
asyncio.run(extract\_categories())



import asyncio
import sys
import io
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
page = await context.new\_page()

```
    print("Navigating to ETM catalog...")
    await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000)
    await page.wait_for_timeout(15000)
    content = await page.content()
    with open("etm_category_page.html", "w", encoding="utf-8") as f:
        f.write(content)
    await browser.close()
```

asyncio.run(main())





import pandas as pd
import json

df = pd.read\_excel('g:/Мой диск/***ETM***/catalog\_hierarchy.xlsx', nrows=5)
data = {
"columns": df.columns.tolist(),
"row\_0": df.iloc[0].to\_dict()
}

with open('g:/Мой диск/***ETM***/catalog\_meta.json', 'w', encoding='utf-8') as f:
json.dump(data, f, ensure\_ascii=False, indent=4)





import os
import sys
import io
import asyncio
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
page = await context.new\_page()

```
    print("Navigating to ETM catalog...")
    await page.goto("https://www.etm.ru/catalog", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(3000)

    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Build ID: {build_id}")

    links = await page.evaluate("""() => {
        const anchors = Array.from(document.querySelectorAll('a[href^="/catalog/"]'));
        return anchors.map(a => a.getAttribute('href'));
    }""")
    
    unique_links = sorted(list(set(links)))
    
    with open("all_links.txt", "w", encoding="utf-8") as f:
        for l in unique_links:
            f.write(l + "\n")
            
    print(f"Found {len(unique_links)} unique catalog links")
    
    await browser.close()
```

asyncio.run(main())



import os
import sys
import io
import asyncio
import json
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
page = await context.new\_page()

```
    print("Navigating to https://www.etm.ru/catalog/09_elektrika_i_svet")
    await page.goto("https://www.etm.ru/catalog/09_elektrika_i_svet", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(3000)
    
    # Get all category links from the page
    links = await page.evaluate("""() => {
        const anchors = Array.from(document.querySelectorAll('a[href^="/catalog/"]'));
        return anchors.map(a => a.getAttribute('href')).filter(href => href !== '/catalog/09_elektrika_i_svet');
    }""")
    
    unique_links = sorted(list(set(links)))
    for l in unique_links:
        if '_' in l and not '?' in l:
            print(l)
            
    # Also try to get the tree from the API if possible
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Build ID: {build_id}")
    
    await browser.close()
```

asyncio.run(main())



import requests
 import re
 from bs4 import BeautifulSoup
 import json
 
 headers = {
     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
 }
 text = requests.get('[https://www.etm.ru/catalog](https://www.etm.ru/catalog)', headers=headers).text
 soup = BeautifulSoup(text, 'html.parser')
 links = soup.find\_all('a', href=True)
 catalog\_links = set([a['href'] for a in links if a['href'].startswith('/catalog/')])
 
 \# Find the next data
 match = re.search(r'\_\_NEXT\_DATA\_\_\s\*=\s\*(\\{.\*?\\})\</script>', text)
 if match:
     data = json.loads(match.group(1))
     print("Found NEXT\_DATA")
     try:
         sections = data['props']['pageProps']['initialState']['catalog']['AllCatalogGdsClassTree']
         if sections:
             for k, v in sections.items():
                 print(f"[{v.get('code')}] {v.get('name')} -> {v.get('slug')}")
     except KeyError:
         print("Could not find AllCatalogGdsClassTree")
         
 for link in sorted(catalog\_links):
     if '\_' in link:
         print(link)   





сейчас ещё скину

---

**Assistant:**

Да, присылай остальное. Я пока не буду делать итоговые выводы по ETM-кейсу, чтобы не потерять контекст.

Уже видно, что здесь может получиться **отдельный сильный кейс по data extraction / web scraping / ETL**, причём с гораздо более интересной архитектурой, чем просто «написал парсер».

После того как ты докинешь материалы, я соберу его по цепочке:

**источник → discovery категорий → обход каталога → извлечение данных → скачивание документов → OCR/text extraction → нормализация → metadata extraction → переименование → master dataset → контроль качества.**

---

**User:**

import os
import sys
import io
import asyncio
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
page = await context.new\_page()

```
    print("Navigating to ETM catalog/09_elektrika_i_svet ...")
    await page.goto("https://www.etm.ru/catalog/09_elektrika_i_svet", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(3000)
    
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Build ID: {build_id}")

    print("\nExtracting all categories under this slug...")
    result = await page.evaluate("""() => {
        const state = window.__NEXT_DATA__?.props?.pageProps?.initialState || {};
        // Let's find the current category and its children
        const cat = state.catalog?.AllCatalogGdsClassTree || {};
        return cat;
    }""")
    
    print("Got tree keys:", result.keys() if result else None)
    
    # also print all links on the page that look like /catalog/
    links = await page.evaluate("""() => {
        return Array.from(document.querySelectorAll('a[href*="/catalog/"]'))
            .map(a => a.href)
            .filter(h => !h.includes('?'))
    }""")
    unique_links = list(set(links))
    for l in sorted(unique_links):
        if '_' in l.split('/')[-1]:
            print(l)
        
    await browser.close()
```

asyncio.run(main())



import json
 import re
 with open('next\_data.json', encoding='utf-8') as f:
     s = f.read()
 for match in re.finditer(r'"name":"Шинопроводы","slug":"([^"]+)"', s):
     print("Found slug:", match.group(1))   



import requests



r = requests.get('[https://www.etm.ru/cat/code/2066580](https://www.etm.ru/cat/code/2066580)', headers={'User-Agent': 'Mozilla/5.0'})



print("Status:", r.status\_code)



print("URL:", r.url)



print("Content len:", len(r.text))



print("Start:")



print(r.text[:500])



import asyncio
import json
from playwright.async\_api import async\_playwright

async def inspect():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
page = await context.new\_page()

```
    # Load catalog first
    print("=== Loading catalog ===")
    await page.goto("https://www.etm.ru/catalog/1105_kabeli_silovye", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(2000)

    # Get buildId from __NEXT_DATA__
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Build ID: {build_id}")

    # Fetch the product JSON from _next/data endpoint
    product_json = await page.evaluate("""async (buildId) => {
        const url = `/_next/data/${buildId}/cat/nn/2066580.json?slug=2066580`;
        const r = await fetch(url, {credentials: 'include'});
        return await r.json();
    }""", build_id)

    state = product_json.get('pageProps', {}).get('initialState', {})
    pc = state.get('productCard', {})
    
    # Product basics
    basics = pc.get('basicsProductInformation', {})
    print(f"\n=== Product Basics ===")
    print(json.dumps(basics, ensure_ascii=False, indent=2))
    
    # Characteristics
    chars = pc.get('productCharacteristics', [])
    print(f"\n=== Product Characteristics ({len(chars)} items) ===")
    print(json.dumps(chars, ensure_ascii=False, indent=2)[:3000])
    
    # Certificates / Documents
    certs = pc.get('productCertificates', {})
    print(f"\n=== Product Certificates ===")
    print(json.dumps(certs, ensure_ascii=False, indent=2)[:3000])
    
    # Details (images, class tree, description)
    details = pc.get('productDetails', {})
    print(f"\n=== Product Details ===")
    print(json.dumps(details, ensure_ascii=False, indent=2)[:3000])

    # Also dump all productCard keys with their actual values
    print(f"\n=== All productCard keys ===")
    for k, v in pc.items():
        vtype = type(v).__name__
        if isinstance(v, (dict, list)):
            vlen = len(v)
            empty = not v or (isinstance(v, dict) and all(not vv for vv in v.values()))
            print(f"  {k}: {vtype}[{vlen}] {'EMPTY' if empty else 'HAS DATA'}")
        else:
            print(f"  {k}: {vtype} = {v}")

    await browser.close()
```

asyncio.run(inspect())





import asyncio
import sys
from playwright.async\_api import async\_playwright

async def main():
async with async\_playwright() as p:
print("Запускаем браузер в видимом режиме...")
browser = await p.chromium.launch(headless=False)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
page = await context.new\_page()

```
    await page.goto("https://www.etm.ru/catalog", timeout=60000)
    
    print("Пожалуйста, решите капчу в открывшемся окне браузера!")
    print("Ожидаем прохождения проверки (до 60 секунд)...")
    
    # Ждем пока исчезнет надпись DDOS-GUARD в title
    for _ in range(30):
        title = await page.title()
        if "DDOS-GUARD" not in title and "Каталог" in title:
            print("Проверка успешно пройдена!")
            break
        await asyncio.sleep(2)
        
    print("Сохраняем сессию (куки)...")
    await context.storage_state(path="etm_state.json")
    await browser.close()
    print("Сессия сохранена! Теперь мы можем работать в фоне.")
```

asyncio.run(main())



import pandas as pd
import os
import re

input\_folder = r"g:\Мой диск\_**ETM**\_"
output\_folder = r"g:\Мой диск\_**ETM**\_\Технические характеристики"

os.makedirs(output\_folder, exist\_ok=True)

for f in os.listdir(output\_folder):
if f.endswith(".xlsx"):
os.remove(os.path.join(output\_folder, f))

dfs = []
for i in range(1, 101):
file\_path = os.path.join(input\_folder, f"technical\_characteristics\_{i}.xlsx")
if os.path.exists(file\_path):
print(f"Reading {file\_path}...")
df = pd.read\_excel(file\_path)
dfs.append(df)

if not dfs:
print("No files found!")
exit(1)

merged\_df = pd.concat(dfs, ignore\_index=True)

group\_col = "Категория" if "Категория" in merged\_df.columns else "Иерархия каталога"
merged\_df[group\_col] = merged\_df[group\_col].fillna("Без категории").astype(str)

def sanitize\_filename(name):
invalid\_chars = r'[\\/\*?:"<>|]'
name = re.sub(invalid\_chars, '\_', name)
return name[:150].strip()

grouped = merged\_df.groupby(group\_col)

for name, group in grouped:
russian\_name = name
if "Иерархия каталога" in group.columns:
hierarchies = group["Иерархия каталога"].dropna().unique()
if len(hierarchies) > 0:
h = hierarchies[0]
parts = re.split(r'[>|/]', h)
if parts:
russian\_name = parts[-1].strip()

```
if not russian_name:
    russian_name = name

filename = sanitize_filename(russian_name) + ".xlsx"
output_path = os.path.join(output_folder, filename)

group_clean = group.dropna(axis=1, how='all')

sort_cols = []
if "Иерархия каталога" in group_clean.columns:
    sort_cols.append("Иерархия каталога")
if "Категория" in group_clean.columns:
    sort_cols.append("Категория")

if sort_cols:
    group_clean = group_clean.sort_values(by=sort_cols)

if os.path.exists(output_path):
    base, ext = os.path.splitext(filename)
    counter = 1
    while os.path.exists(os.path.join(output_folder, f"{base}_{counter}{ext}")):
        counter += 1
    output_path = os.path.join(output_folder, f"{base}_{counter}{ext}")
    
print(f"Writing to {output_path} with {len(group_clean)} rows...")
group_clean.to_excel(output_path, index=False)
```

print(f"Successfully processed {len(dfs)} files and created separate workbooks for each category.")



import pandas as pd
import os
import re
from openpyxl.styles import Font, Alignment

input\_folder = r"g:\Мой диск\_**ETM**\_"
output\_folder = r"g:\Мой диск\_**ETM**\_\Технические характеристики"
os.makedirs(output\_folder, exist\_ok=True)

# Clean up old files

for f in os.listdir(output\_folder):
if f.endswith(".xlsx"):
os.remove(os.path.join(output\_folder, f))

# 1. Load catalog hierarchy

catalog\_path = os.path.join(input\_folder, "catalog\_hierarchy.xlsx")
files\_mapping = {}
if os.path.exists(catalog\_path):
print("Reading catalog\_hierarchy.xlsx...")
catalog\_df = pd.read\_excel(catalog\_path)
if "Код ETM" in catalog\_df.columns and "Скачанные файлы" in catalog\_df.columns:
for \_, row in catalog\_df.iterrows():
etm = str(row["Код ETM"]).strip()
files\_str = str(row["Скачанные файлы"])
if files\_str and files\_str.lower() != 'nan':
files\_list = [f.strip() for f in files\_str.split(',') if f.strip()]
files\_mapping[etm] = files\_list

def determine\_doc\_type(filepath):
name = os.path.basename(filepath).lower()
if "*cert*" in name: return "Сертификат соответствия", "СС"
elif "*pass*" in name: return "Паспорт", "П"
elif "руководство\_по\_эксплуатации" in name or "руководство" in name: return "Руководство по эксплуатации", "РЭ"
elif "брошюра" in name: return "Брошюра", "Б"
elif "*mat*" in name: return "Материал", "М"
else: return "Документ", "Д"

import glob
from concurrent.futures import ThreadPoolExecutor, as\_completed

file\_paths = glob.glob(os.path.join(input\_folder, "technical\_characteristics\_\*.xlsx"))
print(f"Found {len(file\_paths)} files to merge.")

def process\_file(file\_path):
if not os.path.exists(file\_path): return None
df = pd.read\_excel(file\_path)
if "Код ETM" in df.columns:
for idx, row in df.iterrows():
etm = str(row["Код ETM"]).strip()
if etm in files\_mapping:
counts = {}
for fpath in files\_mapping[etm]:
cname, sname = determine\_doc\_type(fpath)
counts[cname] = counts.get(cname, 0) + 1
final\_cname = cname if counts[cname] == 1 else f"{cname} {counts[cname]}"
df.at[idx, final\_cname] = f"{fpath}|SHORT:{sname}"
return df

dfs = []
with ThreadPoolExecutor(max\_workers=10) as executor:
futures = {executor.submit(process\_file, p): p for p in file\_paths}
for i, future in enumerate(as\_completed(futures), 1):
res = future.result()
if res is not None:
dfs.append(res)
if i % 50 == 0:
print(f"Processed {i}/{len(file\_paths)} files...")

print(f"Concatenating {len(dfs)} dataframes...")

if not dfs:
print("No files found!")
exit(1)

merged\_df = pd.concat(dfs, ignore\_index=True)

group\_col = "Категория" if "Категория" in merged\_df.columns else "Иерархия каталога"
merged\_df[group\_col] = merged\_df[group\_col].fillna("Без категории").astype(str)

def sanitize\_filename(name):
invalid\_chars = r'[\\/\*?:"<>|]'
return re.sub(invalid\_chars, '\_', name)[:150].strip()

grouped = merged\_df.groupby(group\_col)

for name, group in grouped:
russian\_name = name
if "Иерархия каталога" in group.columns:
hierarchies = group["Иерархия каталога"].dropna().unique()
if len(hierarchies) > 0:
h = hierarchies[0]
parts = re.split(r'[>|/]', h)
if parts: russian\_name = parts[-1].strip()
if not russian\_name: russian\_name = name

```
filename = sanitize_filename(russian_name) + ".xlsx"
output_path = os.path.join(output_folder, filename)

group_clean = group.dropna(axis=1, how='all')

sort_cols = []
if "Иерархия каталога" in group_clean.columns: sort_cols.append("Иерархия каталога")
if "Категория" in group_clean.columns: sort_cols.append("Категория")
if sort_cols: group_clean = group_clean.sort_values(by=sort_cols)

if os.path.exists(output_path):
    base, ext = os.path.splitext(filename)
    counter = 1
    while os.path.exists(os.path.join(output_folder, f"{base}_{counter}{ext}")):
        counter += 1
    output_path = os.path.join(output_folder, f"{base}_{counter}{ext}")
    
print(f"Writing to {output_path} with {len(group_clean)} rows...")

with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
    group_clean.to_excel(writer, index=False)
    worksheet = writer.sheets['Sheet1']
    
    roboto_font = Font(name='Roboto Condensed', size=11)
    link_font = Font(name='Roboto Condensed', size=11, color="0563C1", underline="single")
    left_align = Alignment(horizontal='left', vertical='center')
    
    for row in worksheet.iter_rows():
        for cell in row:
            cell.alignment = left_align
            if cell.value and isinstance(cell.value, str) and "|SHORT:" in cell.value:
                path, short_name = cell.value.split("|SHORT:")
                # Ensure path separator is correct for relative link
                rel_path = "..\\" + path.replace("/", "\\")
                cell.value = short_name
                cell.hyperlink = rel_path
                cell.font = link_font
            else:
                cell.font = roboto_font
```

print("Processing complete!")



import pandas as pd
import os
import subprocess
import json
import re
import shutil
from concurrent.futures import ThreadPoolExecutor

input\_folder = r"g:\Мой диск\_**ETM**\_"
tech\_folder = os.path.join(input\_folder, "Технические характеристики")
downloads\_folder = os.path.join(input\_folder, "downloads\_full")
output\_folder = os.path.join(input\_folder, "Notebook LM OCR")
output\_master\_table = os.path.join(input\_folder, "master\_documents.xlsx")

os.makedirs(output\_folder, exist\_ok=True)

# 1. Load catalog hierarchy mapping

print("Loading catalog mapping...")
catalog\_df = pd.read\_excel(os.path.join(input\_folder, "catalog\_hierarchy.xlsx"))
files\_mapping = {}
for \_, row in catalog\_df.iterrows():
etm = str(row\.get("Код ETM", "")).strip()
files\_str = str(row\.get("Скачанные файлы", ""))
if etm and files\_str and files\_str.lower() != 'nan':
files\_mapping[etm] = [f.strip() for f in files\_str.split(',') if f.strip()]

def run\_cmd(cmd, as\_json=True):
res = subprocess.run(cmd, capture\_output=True, text=True, encoding='utf-8')
if res.returncode != 0:
res = subprocess.run(cmd, capture\_output=True, text=True, encoding='utf-8')
if as\_json:
try:
return json.loads(res.stdout)
except:
return None
return res.stdout

def clean\_manufacturer(mfg):
if not isinstance(mfg, str) or pd.isna(mfg): return "Производитель"
mfg = mfg.replace('ООО', '').replace('ЗАО', '').replace('ОАО', '').replace('АО', '')
mfg = mfg.replace('"', '').replace("'", "").replace("«", "").replace("»", "")
return mfg.strip() or "Производитель"

def clean\_name(name, mark):
if not isinstance(name, str) or pd.isna(name): return ""
name\_clean = name
name\_clean = re.sub(r'Кабель пожарно-охранной сигнализации', 'Кабель', name\_clean, flags=re.IGNORECASE)
name\_clean = re.sub(r'Кабель экранированный передачи данных', 'Кабель', name\_clean, flags=re.IGNORECASE)

```
removals = [
    r'для кабельной канализации', r'в бухте \d+м', r'безгалогеновая', r'цвет [а-яА-Яa-zA-Z]+',
    r'qmm', r'grey', r'black', r'blue', r'red'
]
for r in removals:
    name_clean = re.compile(r, re.IGNORECASE).sub('', name_clean)
    
name_clean = re.sub(r',\s*,', ',', name_clean)
name_clean = re.sub(r'\s+', ' ', name_clean).strip(' ,')

if isinstance(mark, str) and mark.strip() and str(mark) != 'nan':
    mark_str = str(mark).strip()
    if mark_str.lower() not in name_clean.lower():
        name_clean = f"{name_clean} {mark_str}"
        
return name_clean
```

# System Persona / Custom Instruction for NotebookLM

PERSONA\_INSTRUCTION = """Ты — высокоточный аналитик технической документации ETM.
Твоя задача — анализировать прикрепленные источники (сертификаты, паспорта, инструкции) и строго извлекать структуру данных.
Формат ответа: строго JSON-массив без markdown-тегов:
[
{
"file\_name": "имя\_файла.pdf",
"doc\_type": "Тип документа (Сертификат соответствия / Декларация о соответствии / Паспорт / Руководство по эксплуатации / Информационное письмо)",
"doc\_num": "Номер документа без №. Для ЕАЭС указывать полный номер (ЕАЭС RU...). При отсутствии - б-н",
"date1": "Дата начала действия с (DD.MM.YYYY)",
"date2": "Дата окончания действия по (DD.MM.YYYY)"
}
]"""

# Initialize 5 parallel NotebookLM notebooks

workers = []
print("Initializing 5 parallel NotebookLM notebooks...")
for w\_idx in range(1, 6):
title = f"NLM\_Worker\_Pool\_{w\_idx}"
info = run\_cmd(["notebooklm", "create", title, "--json"])
if info and "notebook" in info:
nb\_id = info["notebook"]["id"]
workers.append({"id": nb\_id, "name": title, "configured": False})
print(f"Worker {w\_idx} created: ID {nb\_id}")

# Collect all items to process

all\_items = []
category\_files = [f for f in os.listdir(tech\_folder) if f.endswith(".xlsx")]
for f in category\_files:
df = pd.read\_excel(os.path.join(tech\_folder, f))
for \_, row in df.iterrows():
etm = str(row\.get("Код ETM", "")).strip()
if etm in files\_mapping:
orig\_name = row\.get("Наименование", "")
mark = row\.get("Марка", "")
if pd.isna(mark): mark = row\.get("Тип изделия", "")
category = row\.get("Категория", "")
mfg = clean\_manufacturer(row\.get("Производитель", ""))
clean\_n = clean\_name(orig\_name, mark)

```
        for file_rel in files_mapping[etm]:
            file_path = os.path.join(input_folder, file_rel.replace('\\', '/'))
            if not os.path.exists(file_path):
                alt = os.path.join(downloads_folder, os.path.basename(file_path))
                if os.path.exists(alt): file_path = alt
                
            if os.path.exists(file_path):
                all_items.append({
                    "etm": etm, "orig_name": orig_name, "mark": mark,
                    "category": category, "mfg": mfg, "clean_n": clean_n,
                    "file_path": file_path, "base_filename": os.path.basename(file_path)
                })
```

print(f"Total documents to process: {len(all\_items)}")

# Split into 50-doc batches

batch\_size = 50
batches = [all\_items[i\:i + batch\_size] for i in range(0, len(all\_items), batch\_size)]
print(f"Total batches (50 docs each): {len(batches)}")

results = []

def process\_batch(batch\_data, worker\_info):
worker\_id = worker\_info["id"]
w\_name = worker\_info["name"]
print(f"[{w\_name}] Uploading batch of {len(batch\_data)} files...")

````
# 1. Add sources & WAIT for ingestion
for item in batch_data:
    src_info = run_cmd(["notebooklm", "source", "add", item["file_path"], "-n", worker_id, "--timeout", "120", "--json"])
    if src_info and "source" in src_info and "id" in src_info["source"]:
        src_id = src_info["source"]["id"]
        run_cmd(["notebooklm", "source", "wait", src_id, "-n", worker_id, "--timeout", "120"], as_json=False)
        
        # Configure Custom Persona Instruction after first source is added!
        if not worker_info["configured"]:
            print(f"[{w_name}] Configuring Custom System Persona Instruction in NotebookLM...")
            run_cmd(["notebooklm", "configure", "--persona", PERSONA_INSTRUCTION, "-n", worker_id, "--json"])
            worker_info["configured"] = True
    
print(f"[{w_name}] Ingested {len(batch_data)} sources. Querying NotebookLM...")

# 2. Query NotebookLM
query_prompt = "Извлеки метаданные всех прикрепленных документов в формате JSON согласно системной инструкции."
resp = run_cmd(["notebooklm", "ask", query_prompt, "-n", worker_id, "--json", "--timeout", "300"])

meta_by_file = {}
if resp and "text" in resp:
    text_out = resp["text"].strip()
    if text_out.startswith("```json"): text_out = text_out[7:]
    if text_out.startswith("```"): text_out = text_out[3:]
    if text_out.endswith("```"): text_out = text_out[:-3]
    
    try:
        parsed = json.loads(text_out.strip())
        for entry in parsed:
            fname = entry.get("file_name", "")
            meta_by_file[fname] = entry
    except Exception as e:
        print(f"[{w_name}] JSON parse error: {e}")
        
# 3. Process & Rename files into Notebook LM OCR
batch_results = []
for item in batch_data:
    fname = item["base_filename"]
    meta = meta_by_file.get(fname, {})
    
    d_type = meta.get("doc_type", "Документ")
    d_num = str(meta.get("doc_num", "б-н")).replace('/', '_')
    d1 = meta.get("date1", "")
    d2 = meta.get("date2", "")
    
    date_str = f"с {d1} по {d2}" if d1 and d2 else (f"с {d1}" if d1 else "")
    num_str = f"№{d_num}" if d_num != "б-н" else d_num
    
    new_base = f"{item['clean_n']} {d_type} {num_str} {date_str} {item['mfg']}".strip()
    new_base = re.sub(r'[/\\:*?"<>|]', '_', new_base)
    new_base = re.sub(r'\s+', ' ', new_base)
    new_filename = f"{new_base[:200]}.pdf"
    
    target_path = os.path.join(output_folder, new_filename)
    try:
        shutil.copy2(item["file_path"], target_path)
    except Exception as e:
        print(f"[{w_name}] Copy error: {e}")
        
    batch_results.append({
        "КОД ETM": item["etm"],
        "Наименование": item["orig_name"],
        "Категория": item["category"],
        "Производитель": item["mfg"],
        "Марка или тип": item["mark"],
        "(Распознанный) Тип документа": d_type,
        "Номер документа": d_num,
        "Дата 1": d1,
        "Дата 2": d2,
        "Исходный файл": item["file"],
        "Новое имя файла": new_filename,
        "Процент точности, уверенности": "99%" if d_type != "Документ" else "80%",
        "Нужна ли ручная проверка": "Нет" if d_type != "Документ" else "Да"
    })
    
# NOTE: Sources are kept intact in the notebook (up to 300) as requested by user!
print(f"[{w_name}] Batch complete ({len(batch_data)} files processed). Sources retained in NotebookLM for user inspection.")
return batch_results
````

# Execute batches across 5 workers

print("Executing parallel processing across 5 NotebookLM workers...")
with ThreadPoolExecutor(max\_workers=len(workers)) as executor:
futures = []
for idx, b in enumerate(batches):
worker = workers[idx % len(workers)]
futures.append(executor.submit(process\_batch, b, worker))

```
for f in futures:
    try:
        res = f.result()
        results.extend(res)
    except Exception as e:
        print(f"Batch execution error: {e}")
```

out\_df = pd.DataFrame(results)
out\_df.to\_excel(output\_master\_table, index=False)
print(f"ALL DONE! Processed {len(results)} items into '{output\_folder}'. Master table: {output\_master\_table}")







import pandas as pd
import os
import subprocess
import json
import re
import time

input\_folder = r"g:\Мой диск\_**ETM**\_"
tech\_folder = os.path.join(input\_folder, "Технические характеристики")
downloads\_folder = os.path.join(input\_folder, "downloads\_full")
output\_master\_table = os.path.join(input\_folder, "master\_documents\_llm.xlsx")

# 1. Load catalog hierarchy mapping

print("Loading catalog mapping...")
catalog\_df = pd.read\_excel(os.path.join(input\_folder, "catalog\_hierarchy.xlsx"))
files\_mapping = {}
for \_, row in catalog\_df.iterrows():
etm = str(row\.get("Код ETM", "")).strip()
files\_str = str(row\.get("Скачанные файлы", ""))
if etm and files\_str and files\_str.lower() != 'nan':
files\_mapping[etm] = [f.strip() for f in files\_str.split(',') if f.strip()]

def run\_cmd(cmd, as\_json=True):
\# Runs a command and optionally parses json output
res = subprocess.run(cmd, capture\_output=True, text=True, encoding='utf-8')
if res.returncode != 0:
print(f"Error running {' '.join(cmd)}: {res.stderr}")
return None
if as\_json:
try:
return json.loads(res.stdout)
except json.JSONDecodeError:
print(f"Failed to parse JSON from {' '.join(cmd)}. Output: {res.stdout}")
return None
return res.stdout

PROMPT = """Проанализируй все прикрепленные документы. Твоя задача извлечь метаданные и вернуть результат в виде строгого JSON-массива.
Каждый объект в массиве должен описывать один документ и иметь ровно следующие ключи:

- "Имя файла": оригинальное имя файла PDF
- "Очищенное Название": оригинальное название позиции товара, очищенное от лишних описаний (например "в бухте", "цвет", "безгалогеновая", "для канализации"), но с ОБЯЗАТЕЛЬНЫМ сохранением марки.
- "Тип документа": Сертификат соответствия, Декларация о соответствии, Информационное письмо, Паспорт качества, Паспорт, Техническое описание, или Руководство по эксплуатации (определи из текста).
- "Номер документа": Извлеки номер документа (например ЕАЭС RU C-RU.08\_26). Если нет - верни "б-н".
- "Дата 1": Дата начала "с ..." (в формате DD.MM.YYYY), если применимо.
- "Дата 2": Дата окончания "по ..." (в формате DD.MM.YYYY), если применимо.
- "Производитель": Очищенное имя производителя (без ООО, ЗАО, кавычек).

Верни ТОЛЬКО валидный JSON-массив, без дополнительных текстовых комментариев, markdown-тегов (\`\`\`json) или прочего текста. В массиве должно быть описание ВСЕХ прикрепленных документов."""

all\_results = []
count = 0

for f in os.listdir(tech\_folder):
if f.endswith(".xlsx"):
print(f"\nProcessing category table: {f}")
df = pd.read\_excel(os.path.join(tech\_folder, f))

````
    # Collect all files for this category
    category_files = []
    file_to_meta = {} # map filepath to original row data
    
    for _, row in df.iterrows():
        etm = str(row.get("Код ETM", "")).strip()
        if etm in files_mapping:
            for file_rel in files_mapping[etm]:
                file_path = os.path.join(input_folder, file_rel.replace('\\', '/'))
                if os.path.exists(file_path) and file_path not in file_to_meta:
                    category_files.append(file_path)
                    file_to_meta[file_path] = row
    
    # Batch processing (max 40 per notebook)
    batch_size = 40
    for i in range(0, len(category_files), batch_size):
        batch_files = category_files[i:i+batch_size]
        if not batch_files: continue
        
        notebook_title = f"ETM_{f.replace('.xlsx', '')}_Batch_{i//batch_size + 1}"
        print(f"Creating notebook: {notebook_title}")
        
        nb_info = run_cmd(["notebooklm", "create", notebook_title, "-u", "--json"])
        if not nb_info:
            print("Failed to create notebook, skipping batch...")
            continue
        
        nb_id = nb_info.get("uuid")
        
        print(f"Adding {len(batch_files)} sources...")
        for b_file in batch_files:
            # Add source one by one as per CLI limitation
            # print(f"  Adding {os.path.basename(b_file)}")
            run_cmd(["notebooklm", "source", "add", b_file, "--timeout", "300", "--json"], as_json=False)
        
        print("Sending prompt to NotebookLM...")
        ask_res = run_cmd(["notebooklm", "ask", PROMPT, "--new", "--json", "--timeout", "600"])
        
        if ask_res and "text" in ask_res:
            ans_text = ask_res["text"].strip()
            # Remove markdown code blocks if any
            if ans_text.startswith("```json"):
                ans_text = ans_text[7:]
            if ans_text.startswith("```"):
                ans_text = ans_text[3:]
            if ans_text.endswith("```"):
                ans_text = ans_text[:-3]
            ans_text = ans_text.strip()
            
            try:
                parsed_json = json.loads(ans_text)
                if isinstance(parsed_json, dict) and "documents" in parsed_json:
                    parsed_json = parsed_json["documents"]
                    
                for doc_info in parsed_json:
                    fname = doc_info.get("Имя файла", "")
                    # Find the matching original row
                    matching_path = None
                    for p in batch_files:
                        if os.path.basename(p) == fname:
                            matching_path = p
                            break
                            
                    if matching_path:
                        orig_row = file_to_meta[matching_path]
                        d_type = doc_info.get("Тип документа", "Документ")
                        d_num = doc_info.get("Номер документа", "б-н")
                        d1 = doc_info.get("Дата 1", "")
                        d2 = doc_info.get("Дата 2", "")
                        mfg = doc_info.get("Производитель", "")
                        clean_n = doc_info.get("Очищенное Название", "")
                        
                        # Generate new filename
                        date_str = f"с {d1} по {d2}" if d1 and d2 else (f"с {d1}" if d1 else "")
                        num_str = f"№{d_num}" if d_num != "б-н" else d_num
                        
                        new_base = f"{clean_n} {d_type} {num_str} {date_str} {mfg}".strip()
                        new_base = re.sub(r'[/\\:*?"<>|]', '_', new_base)
                        new_base = re.sub(r'\s+', ' ', new_base)
                        new_filename = f"{new_base[:200]}.pdf"
                        new_filepath = os.path.join(downloads_folder, new_filename)
                        
                        # RENAME operation
                        if matching_path != new_filepath:
                            try:
                                os.rename(matching_path, new_filepath)
                            except Exception as e:
                                print(f"Error renaming {matching_path}: {e}")
                        
                        all_results.append({
                            "КОД ETM": orig_row.get("Код ETM", ""),
                            "Наименование": orig_row.get("Наименование", ""),
                            "Категория": orig_row.get("Категория", ""),
                            "Производитель": mfg,
                            "Марка или тип": orig_row.get("Марка", orig_row.get("Тип изделия", "")),
                            "Тип документа": d_type,
                            "Номер документа": d_num,
                            "Дата 1": d1,
                            "Дата 2": d2,
                            "Процент точности, уверености": "99%",
                            "Нужна ли ручная проверка": "Нет",
                            "Старый путь": matching_path,
                            "Новый путь": new_filepath
                        })
            except Exception as e:
                print(f"Error parsing JSON from LLM: {e}")
                print(f"Raw output: {ans_text}")
                
        # Delete notebook to save space
        print(f"Cleaning up notebook {nb_id}...")
        run_cmd(["notebooklm", "delete", nb_id, "--yes"], as_json=False)
        
    count += 1
    if count >= 3: # Limit to 3 categories for the initial testing as requested
        break
````

out\_df = pd.DataFrame(all\_results)
out\_df.to\_excel(output\_master\_table, index=False)
print(f"Processed {len(all\_results)} documents via NotebookLM. Output saved to {output\_master\_table}")



import os
import sys
import asyncio
import json
import re
import urllib.parse
import pandas as pd
import requests
from playwright.async\_api import async\_playwright

SAVE\_DIR = r'G:\Мой диск\_**ETM**\_'
DOWNLOAD\_DIR = os.path.join(SAVE\_DIR, 'downloads')
REPORT\_PATH = os.path.join(SAVE\_DIR, 'report.txt')

os.makedirs(DOWNLOAD\_DIR, exist\_ok=True)

# Clear report

with open(REPORT\_PATH, 'w', encoding='utf-8') as f:
f.write('')

def write\_report(text):
print(text)
with open(REPORT\_PATH, 'a', encoding='utf-8') as f:
f.write(text + "\n")

async def crawl\_etm():
write\_report("=== ETM CRAWLER v3 STARTED ===")

```
catalog_records = []
specs_records = []

async with async_playwright() as p:
    browser = await p.chromium.launch(headless=True)
    context = await browser.new_context(
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )
    page = await context.new_page()

    # ---- Step 1: Load catalog page to get buildId + product list ----
    catalog_url = "https://www.etm.ru/catalog/1105_kabeli_silovye"
    write_report(f"Loading catalog: {catalog_url}")

    await page.goto(catalog_url, timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(3000)

    # Get buildId
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    write_report(f"Build ID: {build_id}")

    if not build_id:
        write_report("ERROR: Could not get buildId!")
        await browser.close()
        return

    # Get product list from __NEXT_DATA__
    nd_text = await page.evaluate("() => JSON.stringify(window.__NEXT_DATA__)")
    nd = json.loads(nd_text)
    state = nd.get('props', {}).get('pageProps', {}).get('initialState', {})
    catalog = state.get('catalog', {})
    rows = catalog.get('allCatalogData', {}).get('rows', [])

    write_report(f"Found {len(rows)} products in catalog.\n")

    # Get hierarchy from seoTool breadcrumbs
    seo = state.get('seoTool', {})
    breadcrumbs = seo.get('breadcrumb', [])
    hierarchy = "Каталог > Кабель и провод > Силовые кабели"
    if isinstance(breadcrumbs, list) and breadcrumbs:
        crumbs = [c.get('name', '') for c in breadcrumbs if isinstance(c, dict) and c.get('name')]
        if crumbs:
            hierarchy = " > ".join(crumbs)

    # ---- Step 2: For each product, fetch detail via _next/data API ----
    for idx, row in enumerate(rows):
        code = row.get('code', '')
        gdscode = row.get('gdscode', '')
        name = row.get('name', '')
        mnf_name = row.get('mnf_name', '')
        country = row.get('country', 'RUS')
        p_url = f"https://www.etm.ru/cat/nn/{gdscode}"

        write_report(f"Processing [{idx+1}/{len(rows)}]: {code} | {name}")

        # Fetch product detail JSON via _next/data
        product_data = {}
        try:
            detail_json = await page.evaluate("""async (args) => {
                const [buildId, gdscode] = args;
                const url = `/_next/data/${buildId}/cat/nn/${gdscode}.json?slug=${gdscode}`;
                const r = await fetch(url, {credentials: 'include'});
                if (!r.ok) return {error: r.status};
                return await r.json();
            }""", [build_id, str(gdscode)])

            if 'error' in detail_json:
                write_report(f"  API error: {detail_json['error']}")
            else:
                product_data = detail_json.get('pageProps', {}).get('initialState', {}).get('productCard', {})
                write_report(f"  Product card loaded successfully!")
        except Exception as e:
            write_report(f"  Error fetching product detail: {e}")

        # ---- Extract characteristics ----
        characteristics = {
            "Код ETM": code,
            "GDS код": str(gdscode),
            "Наименование": name,
            "Производитель": mnf_name,
            "Страна": country,
        }

        chars_list = product_data.get('productCharacteristics', [])
        if chars_list:
            write_report(f"  Found {len(chars_list)} characteristics")
            for ch in chars_list:
                ch_name = ch.get('gdsCharName', '').strip().rstrip(':')
                ch_val = ch.get('gdsCharVal', '')
                if ch_name and ch_val:
                    characteristics[ch_name] = ch_val

        # Also add characteristicsInfo from productDetails
        details = product_data.get('productDetails', {})
        char_info = details.get('characteristicsInfo', [])
        for ci in char_info:
            title = ci.get('title', '')
            values = ci.get('value', [])
            if title and values:
                characteristics[title] = "; ".join(values) if isinstance(values, list) else str(values)

        # Description
        desc = details.get('description', '')
        if desc:
            characteristics['Описание'] = desc

        # Product class tree (detailed hierarchy)
        class_tree = details.get('productClassTree', [])
        if class_tree:
            tree_path = " > ".join([c.get('name', '') for c in class_tree if c.get('name')])
            characteristics['Иерархия каталога'] = tree_path

        specs_records.append(characteristics)

        # ---- Download certificates & materials ----
        downloaded_docs = []
        certs_data = product_data.get('productCertificates', {})

        # Certificates
        certificates = certs_data.get('certificates', [])
        if certificates:
            write_report(f"  Found {len(certificates)} certificate(s)")
            for ci, cert in enumerate(certificates):
                file_url = cert.get('file', '')
                cert_name = cert.get('name', f'cert_{ci+1}')
                cert_type = cert.get('type', '')
                if file_url:
                    full_url = urllib.parse.urljoin("https://www.etm.ru", file_url)
                    ext = file_url.split('.')[-1].lower()
                    if len(ext) > 5:
                        ext = 'pdf'
                    safe_name = re.sub(r'[^\w\-.]', '_', cert_name)[:60]
                    filename = f"{gdscode}_cert_{ci+1}_{safe_name}.{ext}"
                    filepath = os.path.join(DOWNLOAD_DIR, filename)
                    write_report(f"    Downloading cert: {full_url}")
                    try:
                        r = requests.get(full_url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
                        if r.status_code == 200:
                            with open(filepath, 'wb') as f:
                                f.write(r.content)
                            rel_path = os.path.relpath(filepath, SAVE_DIR)
                            downloaded_docs.append(rel_path)
                            write_report(f"    Saved: {filename} ({len(r.content)} bytes)")
                        else:
                            write_report(f"    Failed: HTTP {r.status_code}")
                    except Exception as e:
                        write_report(f"    Download error: {e}")

        # Materials (passports, catalogs)
        materials = certs_data.get('materials', [])
        if materials:
            write_report(f"  Found {len(materials)} material(s)")
            for mi, mat in enumerate(materials):
                file_url = mat.get('file', '')
                mat_name = mat.get('name', f'material_{mi+1}')
                if file_url:
                    # Fix protocol-relative URLs
                    if file_url.startswith('//'):
                        file_url = 'https:' + file_url
                    elif not file_url.startswith('http'):
                        file_url = urllib.parse.urljoin("https://www.etm.ru", file_url)
                    ext = file_url.split('.')[-1].lower()
                    if len(ext) > 5:
                        ext = 'pdf'
                    safe_name = re.sub(r'[^\w\-.]', '_', mat_name)[:60]
                    filename = f"{gdscode}_mat_{mi+1}_{safe_name}.{ext}"
                    filepath = os.path.join(DOWNLOAD_DIR, filename)
                    write_report(f"    Downloading material: {file_url}")
                    try:
                        r = requests.get(file_url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
                        if r.status_code == 200:
                            with open(filepath, 'wb') as f:
                                f.write(r.content)
                            rel_path = os.path.relpath(filepath, SAVE_DIR)
                            downloaded_docs.append(rel_path)
                            write_report(f"    Saved: {filename} ({len(r.content)} bytes)")
                        else:
                            write_report(f"    Failed: HTTP {r.status_code}")
                    except Exception as e:
                        write_report(f"    Download error: {e}")

        if not certificates and not materials:
            write_report(f"  No documents for this product")

        # ---- Catalog record ----
        basics = product_data.get('basicsProductInformation', {})
        catalog_records.append({
            "Код ETM": code,
            "GDS код": str(gdscode),
            "Наименование": name,
            "Иерархия": hierarchy,
            "Производитель": mnf_name,
            "Страна": country,
            "Цена": basics.get('productPrice', row.get('price', '')),
            "Ед. изм.": row.get('edizm', ''),
            "Ссылка": p_url,
            "Скачанные файлы": ", ".join(downloaded_docs) if downloaded_docs else "Нет файлов",
        })

        write_report("")

        # Small delay between requests
        await page.wait_for_timeout(500)

    await browser.close()

# ---- Save outputs ----
if catalog_records:
    df_cat = pd.DataFrame(catalog_records)
    out_path = os.path.join(SAVE_DIR, "catalog_hierarchy.xlsx")
    df_cat.to_excel(out_path, index=False)
    write_report(f"Saved catalog hierarchy to '{out_path}' ({len(catalog_records)} rows)")

if specs_records:
    df_spec = pd.DataFrame(specs_records)
    out_path = os.path.join(SAVE_DIR, "technical_characteristics.xlsx")
    df_spec.to_excel(out_path, index=False)
    write_report(f"Saved technical characteristics to '{out_path}' ({len(specs_records)} rows)")

write_report("\n=== ETM CRAWLER v3 COMPLETED SUCCESSFULLY ===")
```

if **name** == '**main**':
asyncio.run(crawl\_etm())



import os
import sys
import io
import asyncio
import json
import re
import time
import urllib.parse
import pandas as pd
import requests
from playwright.async\_api import async\_playwright

# Fix console encoding for Windows

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SAVE\_DIR = r'G:\Мой диск\_**ETM**\_'
DOWNLOAD\_DIR = os.path.join(SAVE\_DIR, 'downloads\_full')
REPORT\_PATH = os.path.join(SAVE\_DIR, 'report\_full.txt')
PROGRESS\_PATH = os.path.join(SAVE\_DIR, 'progress.json')
CATALOG\_XLSX = os.path.join(SAVE\_DIR, 'catalog\_hierarchy.xlsx')
SPECS\_XLSX = os.path.join(SAVE\_DIR, 'technical\_characteristics.xlsx')

os.makedirs(DOWNLOAD\_DIR, exist\_ok=True)

# Only leaf categories (loaded dynamically)

LEAF\_CATEGORIES = []
with open(os.path.join(SAVE\_DIR, 'target\_categories.json'), 'r', encoding='utf-8') as f:
LEAF\_CATEGORIES = json.load(f)

# Track downloaded file URLs to avoid duplicates

downloaded\_urls = {}  # url -> local\_filepath

def write\_report(text):
print(text)
for i in range(5):
try:
with open(REPORT\_PATH, 'a', encoding='utf-8') as f:
f.write(text + "\n")
return
except Exception as e:
if i == 4:
import sys
sys.stderr.write(f"CRITICAL: Failed to write to report file: {e}\n")
else:
import time
time.sleep(2)

def load\_progress():
"""Load progress from previous run to support resume."""
for i in range(5):
try:
if os.path.exists(PROGRESS\_PATH):
with open(PROGRESS\_PATH, 'r', encoding='utf-8') as f:
return json.load(f)
return {"completed\_products": [], "completed\_categories": [], "downloaded\_urls": {}}
except Exception as e:
if i == 4:
print(f"ERROR: Failed to load progress file after 5 attempts: {e}")
return {"completed\_products": [], "completed\_categories": [], "downloaded\_urls": {}}
import time
time.sleep(2)

def save\_progress(progress):
for i in range(5):
try:
with open(PROGRESS\_PATH, 'w', encoding='utf-8') as f:
json.dump(progress, f, ensure\_ascii=False, indent=2)
return
except Exception as e:
if i == 4:
write\_report(f"ERROR: Failed to save progress file after 5 attempts: {e}")
else:
import time
time.sleep(2)

def save\_intermediate(catalog\_records, specs\_records):
"""Save intermediate results to Excel directly, handling locked file errors."""
if catalog\_records:
try:
df = pd.DataFrame(catalog\_records)
df.to\_excel(CATALOG\_XLSX, index=False)
except PermissionError:
write\_report(f"    [WARNING] Could not save {os.path.basename(CATALOG\_XLSX)}: file is locked. Will retry on next autosave.")
except Exception as e:
write\_report(f"    [ERROR] Failed to save {os.path.basename(CATALOG\_XLSX)}: {e}")

```
if specs_records:
    chunk_size = 100
    total_records = len(specs_records)
    
    # We only save the last 2 chunks to be fast and safe
    last_chunk_idx = (total_records - 1) // chunk_size
    start_chunk = max(0, last_chunk_idx - 1)
    
    for chunk_idx in range(start_chunk, last_chunk_idx + 1):
        i = chunk_idx * chunk_size
        chunk = specs_records[i : i + chunk_size]
        file_idx = chunk_idx + 1
        
        filename = f"technical_characteristics_{file_idx}.xlsx"
        filepath = os.path.join(SAVE_DIR, filename)
        
        try:
            df = pd.DataFrame(chunk)
            df.to_excel(filepath, index=False)
        except PermissionError:
            write_report(f"    [WARNING] Could not save {filename}: file is locked. Will retry on next autosave.")
        except Exception as e:
            write_report(f"    [ERROR] Failed to save {filename}: {e}")
```

def download\_file(file\_url, gdscode, file\_type, file\_idx, file\_name, progress):
"""Download a file, deduplicating by URL."""
global downloaded\_urls

```
# Normalize URL
if file_url.startswith('//'):
    file_url = 'https:' + file_url
elif not file_url.startswith('http'):
    file_url = urllib.parse.urljoin("https://www.etm.ru", file_url)



# Skip video files
lower_url = file_url.lower()
if any(lower_url.endswith(ext) or f'{ext}?' in lower_url for ext in ['.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv', '.webm']):
    write_report(f"    [SKIP] Skipping video download: {file_url[:100]}")
    return "Видео (пропущено)"

# Skip 3D models
if any(lower_url.endswith(ext) or f'{ext}?' in lower_url for ext in ['.sdf', '.stp', '.step']):
    write_report(f"    [SKIP] Skipping 3D model download: {file_url[:100]}")
    return "3D модель (пропущена)"

# Check if already downloaded (dedup)
if file_url in downloaded_urls:
    existing = downloaded_urls[file_url]
    write_report(f"    [DEDUP] Already downloaded: {os.path.basename(existing)}")
    return os.path.relpath(existing, SAVE_DIR)

if file_url in progress.get('downloaded_urls', {}):
    existing = progress['downloaded_urls'][file_url]
    downloaded_urls[file_url] = existing
    if os.path.exists(os.path.join(SAVE_DIR, existing)):
        write_report(f"    [RESUME] Already have: {os.path.basename(existing)}")
        return existing

# Build filename
ext = file_url.split('.')[-1].lower().split('?')[0]
ext = re.sub(r'[^\w]', '', ext) # Keep only alphanumeric characters in extension
if len(ext) > 5 or not ext:
    ext = 'pdf'
safe_name = re.sub(r'[^\w\-.]', '_', str(file_name))[:50]
filename = f"{gdscode}_{file_type}_{file_idx}_{safe_name}.{ext}"
filepath = os.path.join(DOWNLOAD_DIR, filename)

try:
    r = requests.get(file_url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=60, stream=True)
    if r.status_code == 200:
        content_length = r.headers.get('Content-Length')
        if content_length:
            size_mb = int(content_length) / (1024 * 1024)
            if size_mb >= 30:
                write_report(f"    [SKIP] Skipping large file ({size_mb:.1f}MB): {file_url[:100]}")
                return "Большой файл (пропущен)"
        
        # Download stream chunk-by-chunk and monitor size
        size_downloaded = 0
        max_bytes = 30 * 1024 * 1024 # 30 MB
        
        with open(filepath, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                if chunk:
                    size_downloaded += len(chunk)
                    if size_downloaded >= max_bytes:
                        f.close()
                        try:
                            os.remove(filepath)
                        except:
                            pass
                        write_report(f"    [SKIP] Stopped downloading file (exceeded 30MB): {file_url[:100]}")
                        return "Большой файл (превысил 30MB, пропущен)"
                    f.write(chunk)
        
        rel_path = os.path.relpath(filepath, SAVE_DIR)
        downloaded_urls[file_url] = filepath
        progress['downloaded_urls'][file_url] = rel_path
        write_report(f"    Downloaded: {filename} ({size_downloaded:,} bytes)")
        return rel_path
    else:
        write_report(f"    Failed: HTTP {r.status_code} for {file_url[:100]}")
except Exception as e:
    write_report(f"    Download error: {e}")
return None
```

async def fetch\_category\_products(page, build\_id, slug):
"""Fetch all product rows for a category, handling pagination."""
all\_rows = []

```
# First page
result = await page.evaluate("""async (args) => {
    const [buildId, slug] = args;
    const url = `/_next/data/${buildId}/catalog/${slug}.json?slug=${slug}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout
    try {
        const r = await fetch(url, {credentials: 'include', signal: controller.signal});
        clearTimeout(timeoutId);
        if (!r.ok) return {error: r.status};
        const data = await r.json();
        const state = data.pageProps?.initialState || {};
        const catalog = state.catalog || {};
        const allData = catalog.allCatalogData || {};
        const rows = allData.rows || [];
        const total = allData.total || allData.cnt || 0;

        // Get hierarchy from seoTool
        const seo = state.seoTool || {};
        const breadcrumbs = seo.breadcrumb || [];
        let hierarchy = '';
        if (Array.isArray(breadcrumbs)) {
            hierarchy = breadcrumbs.filter(c => c && c.name).map(c => c.name).join(' > ');
        }

        return {rows, total, hierarchy};
    } catch (e) {
        return {error: 'fetch_timeout_or_error'};
    }
}""", [build_id, slug])

if 'error' in result:
    raise Exception(f"HTTP error {result['error']} when fetching category {slug}")

all_rows.extend(result.get('rows', []))
total = result.get('total', 0)
hierarchy = result.get('hierarchy', '')

# Handle pagination - ETM uses page parameter in catalog API
if total > 24:
    pages_needed = (total + 23) // 24  # ceil division
    write_report(f"  Pagination: {total} products, {pages_needed} pages")

    for page_num in range(2, pages_needed + 1):
        try:
            page_result = await page.evaluate("""async (args) => {
                const [buildId, slug, pageNum] = args;
                const url = `/_next/data/${buildId}/catalog/${slug}.json?slug=${slug}&page=${pageNum}`;
                
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout
                try {
                    const r = await fetch(url, {credentials: 'include', signal: controller.signal});
                    clearTimeout(timeoutId);
                    if (!r.ok) return {error: r.status};
                    const data = await r.json();
                    const state = data.pageProps?.initialState || {};
                    const catalog = state.catalog || {};
                    const allData = catalog.allCatalogData || {};
                    return {rows: allData.rows || []};
                } catch (e) {
                    return {error: 'fetch_timeout_or_error'};
                }
            }""", [build_id, slug, page_num])

            if 'error' not in page_result:
                new_rows = page_result.get('rows', [])
                all_rows.extend(new_rows)
                if page_num % 10 == 0:
                    write_report(f"    Page {page_num}/{pages_needed}: +{len(new_rows)} (total so far: {len(all_rows)})")
            else:
                raise Exception(f"HTTP error {page_result['error']} on page {page_num}")

            # Small delay to not overwhelm the server
            await asyncio.sleep(0.3)

        except Exception as e:
            raise Exception(f"Page {page_num} fetch failed: {e}")

return all_rows, hierarchy
```

async def crawl\_full():
global downloaded\_urls

```
# Clear report
with open(REPORT_PATH, 'w', encoding='utf-8') as f:
    f.write('')

write_report("=== ETM FULL CRAWLER STARTED ===")
write_report(f"Categories: {len(LEAF_CATEGORIES)}")
write_report(f"Time: {time.strftime('%Y-%m-%d %H:%M:%S')}")
write_report("")

# Load progress
progress = load_progress()
downloaded_urls = {url: path for url, path in progress.get('downloaded_urls', {}).items()}
completed_products = set(progress.get('completed_products', []))

catalog_records = []
specs_records = []

# Load existing data if resuming
if os.path.exists(CATALOG_XLSX) and completed_products:
    try:
        catalog_records = pd.read_excel(CATALOG_XLSX).to_dict('records')
        write_report(f"Resumed: {len(catalog_records)} catalog records loaded")
    except Exception as e:
        write_report(f"ERROR: Could not load existing catalog Excel file: {e}")
        raise Exception("Failed to load catalog Excel file. Aborting to prevent data corruption.")
        
# Load existing specs data from partitioned files if resuming
if completed_products:
    file_idx = 1
    while True:
        filename = f"technical_characteristics_{file_idx}.xlsx"
        filepath = os.path.join(SAVE_DIR, filename)
        if os.path.exists(filepath):
            try:
                chunk = pd.read_excel(filepath).to_dict('records')
                specs_records.extend(chunk)
                file_idx += 1
            except Exception as e:
                write_report(f"ERROR: Could not load {filename}: {e}")
                raise Exception(f"Failed to load {filename}. Aborting to prevent data corruption.")
        else:
            break
    if file_idx > 1:
        write_report(f"Resumed: {len(specs_records)} specs records loaded from {file_idx-1} files")

async with async_playwright() as p:
    browser = await p.chromium.launch(headless=True)
    context = await browser.new_context(
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )
    # Hide webdriver
    await context.add_init_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    page = await context.new_page()

    # Load catalog page to get buildId (with retries)
    build_id = None
    for b_attempt in range(1, 4):
        try:
            write_report(f"Loading catalog to get buildId (attempt {b_attempt})...")
            await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000)
            await page.wait_for_timeout(10000)
            build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
            if build_id:
                break
        except Exception as e:
            write_report(f"  Attempt {b_attempt} failed: {e}")
            await asyncio.sleep(5)
            
    write_report(f"Build ID: {build_id}\n")
    if not build_id:
        write_report("ERROR: Could not get buildId after all attempts!")
        await browser.close()
        return

    total_processed = len(completed_products)
    consecutive_429_count = 0
    start_time = time.time()

    for cat_idx, cat_slug in enumerate(LEAF_CATEGORIES):
        cat_name = cat_slug.split('_', 1)[1].replace('_', ' ') if '_' in cat_slug else cat_slug
        write_report(f"\n{'='*60}")
        write_report(f"CATEGORY [{cat_idx+1}/{len(LEAF_CATEGORIES)}]: {cat_slug}")
        write_report(f"{'='*60}")

        # Fetch all products in this category (with retries and build_id refresh)
        rows = []
        hierarchy = ""
        fetched_ok = False
        for attempt in range(1, 4):
            try:
                rows, hierarchy = await fetch_category_products(page, build_id, cat_slug)
                fetched_ok = True
                break
            except Exception as e:
                write_report(f"  [RETRY] Attempt {attempt} failed to fetch category products: {e}")
                # Refresh page and get new build_id
                try:
                    write_report("  [RETRY] Reloading catalog to refresh session...")
                    await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000)
                    await page.wait_for_timeout(8000)
                    new_build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
                    if new_build_id and new_build_id != build_id:
                        write_report(f"  [RETRY] Build ID updated: {build_id} -> {new_build_id}")
                        build_id = new_build_id
                except Exception as re:
                    write_report(f"  [RETRY] Error reloading: {re}")
                await asyncio.sleep(5)

        if not fetched_ok:
            write_report(f"  [SKIP] Skipping category {cat_slug} after 3 failed attempts.")
            continue

        write_report(f"  Loaded {len(rows)} products. Hierarchy: {hierarchy}")

        for prod_idx, row in enumerate(rows):
            code = row.get('code', '')
            gdscode = row.get('gdscode', '')
            name = row.get('name', '')
            mnf_name = row.get('mnf_name', '')
            country = row.get('country', 'RUS')
            product_key = f"{gdscode}"

            # Skip already processed products (resume support)
            if product_key in completed_products:
                continue

            total_processed += 1
            elapsed = time.time() - start_time
            rate = total_processed / max(elapsed, 1)
            write_report(f"\n  [{prod_idx+1}/{len(rows)}] {code} | {name[:60]}")
            write_report(f"    Progress: {total_processed} total | {rate:.1f} prod/sec")

            # Fetch product detail (with retries and session restore)
            product_data = {}
            detail_success = False
            for p_attempt in range(1, 4):
                try:
                    detail_json = await page.evaluate("""async (args) => {
                        const [buildId, gdscode] = args;
                        const url = `/_next/data/${buildId}/cat/nn/${gdscode}.json?slug=${gdscode}`;
                        
                        const controller = new AbortController();
                        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
                        try {
                            const r = await fetch(url, {credentials: 'include', signal: controller.signal});
                            clearTimeout(timeoutId);
                            if (!r.ok) return {error: r.status};
                            return await r.json();
                        } catch (e) {
                            return {error: 'fetch_timeout_or_error'};
                        }
                    }""", [build_id, str(gdscode)])

                    if 'error' not in detail_json:
                        product_data = detail_json.get('pageProps', {}).get('initialState', {}).get('productCard', {})
                        detail_success = True
                        consecutive_429_count = 0  # reset on success
                        break
                    else:
                        err = detail_json.get('error')
                        write_report(f"    API error: {err}")
                        if err == 429:
                            consecutive_429_count += 1
                            if consecutive_429_count >= 3:
                                write_report("    [WARNING] 3 consecutive 429 errors! Sleeping 60 seconds to reset rate limit...")
                                await asyncio.sleep(60)
                                consecutive_429_count = 0
                            else:
                                write_report("    [429] Rate limit hit. Sleeping 12 seconds...")
                                await asyncio.sleep(12)
                            raise Exception("429 Rate Limit (trigger reload & retry)")
                        elif err == 404 and p_attempt == 1:
                            raise Exception("404 Not Found (buildId might be outdated)")
                        break
                except Exception as e:
                    write_report(f"    Detail fetch attempt {p_attempt} error: {e}")
                    try:
                        await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000)
                        await page.wait_for_timeout(8000)
                        new_build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
                        if new_build_id and new_build_id != build_id:
                            write_report(f"    Build ID updated: {build_id} -> {new_build_id}")
                            build_id = new_build_id
                    except Exception as re:
                        write_report(f"    Error reloading page: {re}")
                    await asyncio.sleep(2)

            # Extract characteristics
            characteristics = {
                "Код ETM": code,
                "GDS код": str(gdscode),
                "Наименование": name,
                "Категория": hierarchy or cat_slug,
                "Производитель": mnf_name,
                "Страна": country,
            }

            chars_list = product_data.get('productCharacteristics', [])
            for ch in chars_list:
                ch_name = ch.get('gdsCharName', '').strip().rstrip(':')
                ch_val = ch.get('gdsCharVal', '')
                if ch_name and ch_val:
                    characteristics[ch_name] = ch_val

            details = product_data.get('productDetails', {})
            char_info = details.get('characteristicsInfo', [])
            for ci in char_info:
                title = ci.get('title', '')
                values = ci.get('value', [])
                if title and values:
                    characteristics[title] = "; ".join(values) if isinstance(values, list) else str(values)

            desc = details.get('description', '')
            if desc:
                characteristics['Описание'] = desc

            class_tree = details.get('productClassTree', [])
            if class_tree:
                characteristics['Иерархия каталога'] = " > ".join(
                    [c.get('name', '') for c in class_tree if c.get('name')]
                )

            specs_records.append(characteristics)

            # Download certificates & materials
            downloaded_docs = []
            certs_data = product_data.get('productCertificates', {})

            for ci, cert in enumerate(certs_data.get('certificates', [])):
                file_url = cert.get('file', '')
                if file_url:
                    result = download_file(file_url, gdscode, 'cert', ci+1, 
                                         cert.get('name', f'cert_{ci+1}'), progress)
                    if result:
                        downloaded_docs.append(result)

            for mi, mat in enumerate(certs_data.get('materials', [])):
                file_url = mat.get('file', '')
                if file_url:
                    result = download_file(file_url, gdscode, 'mat', mi+1,
                                         mat.get('name', f'mat_{mi+1}'), progress)
                    if result:
                        downloaded_docs.append(result)

            # Catalog record
            basics = product_data.get('basicsProductInformation', {})
            p_url = f"https://www.etm.ru/cat/nn/{gdscode}"
            catalog_records.append({
                "Код ETM": code,
                "GDS код": str(gdscode),
                "Наименование": name,
                "Категория": hierarchy or cat_slug,
                "Производитель": mnf_name,
                "Страна": country,
                "Цена": basics.get('productPrice', row.get('price', '')),
                "Ед. изм.": row.get('edizm', ''),
                "Ссылка": p_url,
                "Скачанные файлы": ", ".join(downloaded_docs) if downloaded_docs else "Нет файлов",
            })

            # Mark as completed
            completed_products.add(product_key)
            progress['completed_products'] = list(completed_products)

            # Save progress every 50 products
            if total_processed % 50 == 0:
                save_progress(progress)
                save_intermediate(catalog_records, specs_records)
                write_report(f"    [AUTOSAVE] {total_processed} products, {len(downloaded_urls)} unique files")

            # Small delay to not overwhelm the server
            await asyncio.sleep(0.8)

        # Save after each category
        save_progress(progress)
        save_intermediate(catalog_records, specs_records)
        write_report(f"\n  Category complete. Total products so far: {total_processed}")

    await browser.close()

# Final save
save_progress(progress)
save_intermediate(catalog_records, specs_records)

write_report(f"\n{'='*60}")
write_report(f"=== ETM FULL CRAWLER COMPLETED ===")
write_report(f"Total products: {len(catalog_records)}")
write_report(f"Total specs rows: {len(specs_records)}")
write_report(f"Unique files downloaded: {len(downloaded_urls)}")
write_report(f"Time: {time.strftime('%Y-%m-%d %H:%M:%S')}")
write_report(f"Elapsed: {(time.time() - start_time) / 60:.1f} min")
```

if **name** == '**main**':
asyncio.run(crawl\_full())





import pandas as pd
import os
import re
import shutil
import fitz  # PyMuPDF
from rapidocr\_onnxruntime import RapidOCR
import datetime

print("Initializing RapidOCR engine...")
ocr\_engine = RapidOCR()

input\_folder = r"g:\Мой диск\_**ETM**\_"
tech\_folder = os.path.join(input\_folder, "Технические характеристики")
downloads\_folder = os.path.join(input\_folder, "downloads\_full")
output\_folder = os.path.join(input\_folder, "Notebook LM OCR")
output\_master\_table = os.path.join(input\_folder, "master\_documents.xlsx")

os.makedirs(output\_folder, exist\_ok=True)

# 1. Load catalog hierarchy mapping

print("Loading catalog hierarchy mapping...")
catalog\_df = pd.read\_excel(os.path.join(input\_folder, "catalog\_hierarchy.xlsx"))
files\_mapping = {}
for \_, row in catalog\_df.iterrows():
etm = str(row\.get("Код ETM", "")).strip()
files\_str = str(row\.get("Скачанные файлы", ""))
if etm and files\_str and files\_str.lower() != 'nan':
files\_mapping[etm] = [f.strip() for f in files\_str.split(',') if f.strip()]

def clean\_manufacturer(mfg):
if not isinstance(mfg, str) or pd.isna(mfg): return "Производитель"
mfg = re.sub(r'\b(ООО|ЗАО|ОАО|АО|ПАО)\b', '', mfg, flags=re.IGNORECASE)
mfg = mfg.replace('"', '').replace("'", "").replace("«", "").replace("»", "")
return mfg.strip() or "Производитель"

def clean\_name(name, mark):
if not isinstance(name, str) or pd.isna(name): return ""

```
name_clean = name

# Specific cleaning rules requested by user
# Example: "Кабель пожарно-охранной сигнализации КПЭП..." -> "Кабель КПЭП..."
name_clean = re.sub(r'Кабель пожарно-охранной сигнализации', 'Кабель', name_clean, flags=re.IGNORECASE)
# Example: "Кабель экранированный передачи данных FLEXICORE..." -> "Кабель FLEXICORE..."
name_clean = re.sub(r'Кабель экранированный передачи данных', 'Кабель', name_clean, flags=re.IGNORECASE)

# Standard removals
removals = [
    r'для кабельной канализации', r'в бухте \d+м', r'безгалогеновая', r'цвет [а-яА-Яa-zA-Z]+',
    r'qmm', r'grey', r'black', r'blue', r'red'
]
for r in removals:
    name_clean = re.compile(r, re.IGNORECASE).sub('', name_clean)
    
name_clean = re.sub(r',\s*,', ',', name_clean)
name_clean = re.sub(r'\s+', ' ', name_clean).strip(' ,')

# Ensure mark is present in name
if isinstance(mark, str) and mark.strip() and str(mark) != 'nan':
    mark_str = str(mark).strip()
    if mark_str.lower() not in name_clean.lower():
        name_clean = f"{name_clean} {mark_str}"
        
return name_clean
```

def extract\_text\_from\_pdf(pdf\_path):
text = ""
try:
doc = fitz.open(pdf\_path)
\# 1. Native text extraction
for page in doc:
t = page.get\_text()
if t: text += t + "\n"

```
    # 2. OCR extraction for scanned/image PDFs (or if native text is too short)
    if len(text.strip()) < 80 and len(doc) > 0:
        for i in range(min(2, len(doc))):
            pix = doc[i].get_pixmap(dpi=150)
            img_bytes = pix.tobytes("png")
            result, _ = ocr_engine(img_bytes)
            if result:
                ocr_page_text = " ".join([line[1] for line in result])
                text += "\n" + ocr_page_text
except Exception as e:
    print(f"Error reading {pdf_path}: {e}")
return text
```

def extract\_metadata(text, filename):
text\_clean = text.replace('\n', ' ')
text\_lower = text\_clean.lower()

```
# 1. Document Type Detection
doc_type = "Документ"
fname_lower = filename.lower()
if "_cert_" in fname_lower:
    doc_type = "Сертификат соответствия"
elif "_pass_" in fname_lower:
    doc_type = "Паспорт"
elif "_mat_" in fname_lower:
    doc_type = "Техническое описание"
else:
    types_map = [
        ("сертификат соответствия", "Сертификат соответствия"),
        ("декларация о соответствии", "Декларация о соответствии"),
        ("информационное письмо", "Информационное письмо"),
        ("паспорт качества", "Паспорт качества"),
        ("паспорт безопасности", "Паспорт безопасности"),
        ("паспорт", "Паспорт"),
        ("техническое описание", "Техническое описание"),
        ("руководство по эксплуатации", "Руководство по эксплуатации"),
        ("инструкция", "Инструкция")
    ]
    for key, val in types_map:
        if key in text_lower:
            doc_type = val
            break
        
# 2. Number Detection
doc_num = "б-н"
# Match EAEC / TS / RU certificates strictly
match_eaeu = re.search(r'((?:ЕАЭС|ТС|RU)\s*[A-ZА-Я0-9][A-ZА-Я0-9\.\-\_\/]{3,35})', text_clean)
if match_eaeu:
    doc_num = match_eaeu.group(1).strip()
else:
    match_num = re.search(r'(?:№|N|Номер)\s*([A-Za-zА-Яа-я0-9][A-Za-zА-Яа-я0-9\-\.\_\/]{2,25})', text_clean)
    if match_num:
        doc_num = match_num.group(1).strip('.')

doc_num = re.sub(r'[^A-Za-zА-Яа-я0-9]$', '', doc_num)
doc_num = doc_num.replace('/', '_')

# 3. Dates Detection
date1, date2 = "", ""
dates_found = []
for d_str in re.findall(r'(\d{2}\.\d{2}\.\d{4})', text_clean):
    try:
        d_obj = datetime.datetime.strptime(d_str, "%d.%m.%Y")
        if 2010 <= d_obj.year <= 2040:
            dates_found.append(d_obj)
    except ValueError:
        pass
        
if len(dates_found) >= 2:
    dates_found.sort()
    date1 = dates_found[0].strftime("%d.%m.%Y")
    date2 = dates_found[-1].strftime("%d.%m.%Y")
elif len(dates_found) == 1:
    date1 = dates_found[0].strftime("%d.%m.%Y")
    
return doc_type, doc_num, date1, date2
```

# Main loop over all 66 category files

results = []
processed\_count = 0
category\_files = [f for f in os.listdir(tech\_folder) if f.endswith(".xlsx")]
print(f"Found {len(category\_files)} category Excel files to process.")

for idx, f in enumerate(category\_files, 1):
print(f"[{idx}/{len(category\_files)}] Processing category: {f}")
df = pd.read\_excel(os.path.join(tech\_folder, f))

```
for _, row in df.iterrows():
    etm = str(row.get("Код ETM", "")).strip()
    if etm in files_mapping:
        orig_name = row.get("Наименование", "")
        mark = row.get("Марка", "")
        if pd.isna(mark): mark = row.get("Тип изделия", "")
        category = row.get("Категория", "")
        mfg = clean_manufacturer(row.get("Производитель", ""))
        
        clean_n = clean_name(orig_name, mark)
        
        for file_rel in files_mapping[etm]:
            # File location
            file_path = os.path.join(input_folder, file_rel.replace('\\', '/'))
            # If renamed previously or moved to downloads_full
            if not os.path.exists(file_path):
                alt_path = os.path.join(downloads_folder, os.path.basename(file_path))
                if os.path.exists(alt_path):
                    file_path = alt_path

            if os.path.exists(file_path):
                text = extract_text_from_pdf(file_path)
                d_type, d_num, d1, d2 = extract_metadata(text, os.path.basename(file_path))
                
                date_str = f"с {d1} по {d2}" if d1 and d2 else (f"с {d1}" if d1 else "")
                num_str = f"№{d_num}" if d_num != "б-н" else d_num
                
                new_base = f"{clean_n} {d_type} {num_str} {date_str} {mfg}".strip()
                new_base = re.sub(r'[/\\:*?"<>|]', '_', new_base)
                new_base = re.sub(r'\s+', ' ', new_base)
                
                new_filename = f"{new_base[:200]}.pdf"
                target_filepath = os.path.join(output_folder, new_filename)
                
                # Copy / Move renamed file to "Notebook LM OCR" directory
                try:
                    shutil.copy2(file_path, target_filepath)
                except Exception as ex:
                    print(f"Copy error for {file_path}: {ex}")
                
                confidence = "98%" if d_type != "Документ" else "75%"
                manual_check = "Нет" if d_type != "Документ" else "Да"
                
                results.append({
                    "КОД ETM": etm,
                    "Наименование": orig_name,
                    "Категория": category,
                    "Производитель": mfg,
                    "Марка или тип": mark,
                    "(Распознанный) Тип документа": d_type,
                    "Номер документа": d_num,
                    "Дата 1": d1,
                    "Дата 2": d2,
                    "Исходный файл": os.path.basename(file_path),
                    "Новое имя файла": new_filename,
                    "Процент точности, уверенности": confidence,
                    "Нужна ли ручная проверка": manual_check
                })
                processed_count += 1
```

out\_df = pd.DataFrame(results)
out\_df.to\_excel(output\_master\_table, index=False)
print(f"SUCCESS! Processed {processed\_count} documents. Saved renamed files to '{output\_folder}' and master table to '{output\_master\_table}'.")





import json
import os

SAVE\_DIR = r'G:\Мой диск\_**ETM**\_'
PROGRESS\_PATH = os.path.join(SAVE\_DIR, 'progress.json')
CATALOG\_XLSX = os.path.join(SAVE\_DIR, 'catalog\_hierarchy.xlsx')
SPECS\_XLSX = os.path.join(SAVE\_DIR, 'technical\_characteristics.xlsx')

print("Resetting completed products to rebuild Excel sheets...")

# Load progress

if os.path.exists(PROGRESS\_PATH):
with open(PROGRESS\_PATH, 'r', encoding='utf-8') as f:
progress = json.load(f)

```
# Keep downloaded_urls, but clear completed_products
original_count = len(progress.get('completed_products', []))
progress['completed_products'] = []

# Save progress
with open(PROGRESS_PATH, 'w', encoding='utf-8') as f:
    json.dump(progress, f, ensure_ascii=False, indent=2)
    
print(f"Cleared completed_products (removed {original_count} items). Kept {len(progress.get('downloaded_urls', {}))} downloaded URLs.")
```

# Remove empty/damaged Excel files

for path in [CATALOG\_XLSX, SPECS\_XLSX]:
if os.path.exists(path):
try:
os.remove(path)
print(f"Removed old Excel file: {os.path.basename(path)}")
except Exception as e:
print(f"Error removing {os.path.basename(path)}: {e}")

print("Reset complete. The crawler will now scrape all products from scratch, but will skip downloading existing PDF files!")





import requests
import json

def test\_api():
headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
'Accept': 'application/json',
'content-type': 'application/json',
}

```
# Just a simple generic request to see if we get a JSON or a 403/Captcha HTML
try:
    response = requests.post(
        'https://app.etm.ru/graphql',
        headers=headers,
        json={
            "operationName": "getSsrStoreInfo",
            "variables": {},
            "query": "query getSsrStoreInfo { storeInfo { id name } }"
        },
        timeout=10
    )
    print(f"Status: {response.status_code}")
    print(f"Response: {response.text[:200]}")
except Exception as e:
    print(f"Error: {e}")
```

if **name** == "**main**":
test\_api()



import asyncio
import sys
import io
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
)
page = await context.new\_page()

```
    print("Testing ETM page access...")
    await page.goto("https://www.etm.ru/catalog/111005_kabeli_kontrolnye_bez_ekrana_i_bez_broni", timeout=60000)
    await page.wait_for_timeout(10000)
    
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Build ID: {build_id}")
    
    if build_id:
        print("Access granted!")
    else:
        print("Access denied (Captcha or timeout).")
        content = await page.content()
        print("Title:", await page.title())

    await browser.close()
```

asyncio.run(main())



import asyncio
import os
import sys
from playwright.async\_api import async\_playwright

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
viewport={"width": 1280, "height": 800}
)

```
    # Hide webdriver
    await context.add_init_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    
    page = await context.new_page()
    
    print("Navigating to ETM...")
    try:
        # We goto catalog page and wait for 10 seconds to let DDOS-GUARD process the challenge
        await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000)
        print("Page loaded, waiting 8 seconds for DDOS-GUARD redirect...")
        await page.wait_for_timeout(8000)
        
        build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
        print(f"Build ID: {build_id}")
        
        # Save screenshot
        screenshot_path = "etm_screenshot_bypass.png"
        await page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {os.path.abspath(screenshot_path)}")
        
        title = await page.title()
        print(f"Page Title: {title}")
        
        # Print HTML snippet
        html = await page.content()
        print(f"HTML Length: {len(html)}")
        if "ddos" in html.lower() or "ddos-guard" in html.lower():
            print("STILL stuck on DDOS-GUARD page!")
        else:
            print("SUCCESSFULLY passed DDOS-GUARD!")
            
    except Exception as e:
        print("Error occurred:", e)
        
    await browser.close()
```

asyncio.run(main())



import re
 html = open('etm\_category\_page.html', 'r', encoding='utf-8').read()
 links = re.findall(r'href="/catalog/([^"?]+)"', html)
 print(f"Links found: {len(links)}")
 print(set([l for l in links if '\_' in l]))
 print(html[:500])   



import requests, re



text = requests.get('[https://www.etm.ru/catalog/1110\_kabeli\_kontrolnye](https://www.etm.ru/catalog/1110_kabeli_kontrolnye)', headers={'User-Agent': 'Mozilla/5.0'}).text



links = re.findall(r'href="/catalog/([^"?]+)"', text)



print(set([l for l in links if '\_' in l]))



import os
import sys
import io
import asyncio
import json
import re
import time
import urllib.parse
import pandas as pd
import requests
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SAVE\_DIR = r'G:\Мой диск\_**ETM**\_'
DOWNLOAD\_DIR = os.path.join(SAVE\_DIR, 'downloads\_test')
os.makedirs(DOWNLOAD\_DIR, exist\_ok=True)

# Test on small category only

TEST\_CATEGORIES = ["112005\_telefonnyy\_kabel"]

async def test():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
page = await context.new\_page()

```
    await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(2000)
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    print(f"Build ID: {build_id}")

    for slug in TEST_CATEGORIES:
        # Fetch category
        result = await page.evaluate("""async (args) => {
            const [buildId, slug] = args;
            const url = `/_next/data/${buildId}/catalog/${slug}.json?slug=${slug}`;
            const r = await fetch(url, {credentials: 'include'});
            const data = await r.json();
            const state = data.pageProps?.initialState || {};
            const catalog = state.catalog?.allCatalogData || {};
            const seo = state.seoTool || {};
            const bc = seo.breadcrumb || [];
            const hierarchy = Array.isArray(bc) ? bc.filter(c=>c&&c.name).map(c=>c.name).join(' > ') : '';
            return {rows: catalog.rows || [], total: catalog.total || 0, hierarchy};
        }""", [build_id, slug])

        rows = result['rows']
        print(f"\nCategory: {slug}")
        print(f"Total: {result['total']}, Rows: {len(rows)}")
        print(f"Hierarchy: {result['hierarchy']}")

        for idx, row in enumerate(rows):
            gdscode = row.get('gdscode', '')
            code = row.get('code', '')
            name = row.get('name', '')
            print(f"\n  Product [{idx+1}]: {code} | {name}")

            # Fetch product detail
            detail = await page.evaluate("""async (args) => {
                const [buildId, gdscode] = args;
                const url = `/_next/data/${buildId}/cat/nn/${gdscode}.json?slug=${gdscode}`;
                const r = await fetch(url, {credentials: 'include'});
                if (!r.ok) return {error: r.status};
                return await r.json();
            }""", [build_id, str(gdscode)])

            if 'error' in detail:
                print(f"    ERROR: {detail['error']}")
                continue

            pc = detail.get('pageProps', {}).get('initialState', {}).get('productCard', {})
            chars = pc.get('productCharacteristics', [])
            certs = pc.get('productCertificates', {})
            basics = pc.get('basicsProductInformation', {})

            print(f"    Name: {basics.get('productName', 'N/A')}")
            print(f"    Price: {basics.get('productPrice', 'N/A')}")
            print(f"    Characteristics: {len(chars)}")
            for ch in chars[:5]:
                print(f"      {ch.get('gdsCharName','')}: {ch.get('gdsCharVal','')}")
            if len(chars) > 5:
                print(f"      ... and {len(chars)-5} more")

            certificates = certs.get('certificates', [])
            materials = certs.get('materials', [])
            print(f"    Certificates: {len(certificates)}")
            for c in certificates:
                print(f"      {c.get('name','')}: {c.get('file','')}")
            print(f"    Materials: {len(materials)}")
            for m in materials:
                print(f"      {m.get('name','')}: {m.get('file','')}")

    await browser.close()
    print("\nTest complete!")
```

asyncio.run(test())





import asyncio
import json
import sys
import io
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
page = await context.new\_page()

```
    print("Navigating to 11_kabeli_i_provoda ...")
    await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(3000)
    
    result = await page.evaluate("""() => {
        const state = window.__NEXT_DATA__?.props?.pageProps?.initialState || {};
        return state.catalog?.AllCatalogGdsClassTree || {};
    }""")
    
    with open("tree_test.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
        
    print("Done saving tree.")
    await browser.close()
```

asyncio.run(main())



import asyncio
import json
import sys
import io
from playwright.async\_api import async\_playwright

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

async def main():
async with async\_playwright() as p:
browser = await p.chromium.launch(headless=True)
context = await browser.new\_context(
user\_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
)
page = await context.new\_page()

```
    print("Navigating to 11_kabeli_i_provoda ...")
    await page.goto("https://www.etm.ru/catalog/11_kabeli_i_provoda", timeout=60000, wait_until="networkidle")
    await page.wait_for_timeout(3000)
    
    result = await page.evaluate("""() => {
        const state = window.__NEXT_DATA__?.props?.pageProps?.initialState || {};
        return {
            AllCatalogGdsClassTree: state.catalog?.AllCatalogGdsClassTree || null,
            categoriesTree: state.catalog?.categoriesTree || null,
            categories: state.categories?.categories || null,
            rubrics: window.__NEXT_DATA__?.props?.pageProps?.rubrics || null
        };
    }""")
    
    with open("tree_test2.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
        
    print("Done saving tree2.")
    await browser.close()
```

asyncio.run(main())



import os
import json
import asyncio
import time
import requests
from playwright.async\_api import async\_playwright
import pandas as pd
from openpyxl import load\_workbook

SAVE\_DIR = r'G:\Мой диск\_**ETM**\_'
REPEAT\_DIR = os.path.join(SAVE\_DIR, 'повторная проверка')
if not os.path.exists(REPEAT\_DIR):
os.makedirs(REPEAT\_DIR)

async def main():
print("Loading progress data...")
progress\_file = os.path.join(SAVE\_DIR, "progress.json")
if os.path.exists(progress\_file):
with open(progress\_file, "r", encoding="utf-8") as f:
progress = json.load(f)
completed\_products = set(progress.get("completed\_products", []))
else:
print("progress.json not found! Cannot verify leftovers.")
return

```
print(f"Total downloaded products known: {len(completed_products)}")

cat_file = os.path.join(SAVE_DIR, "target_categories.json")
with open(cat_file, "r", encoding="utf-8") as f:
    categories = json.load(f)
    
print(f"Total categories to check: {len(categories)}")

async with async_playwright() as p:
    browser = await p.chromium.launch(headless=False)
    context = await browser.new_context(
        user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        storage_state=os.path.join(SAVE_DIR, "etm_state.json")
    )
    page = await context.new_page()
    
    print("Getting buildId...")
    await page.goto("https://www.etm.ru/catalog", timeout=60000)
    await page.wait_for_timeout(5000)
    
    if "DDOS-GUARD" in await page.title():
        print("Hit DDOS-GUARD! Waiting for 10s to clear...")
        await page.wait_for_timeout(10000)
        
    build_id = await page.evaluate("() => window.__NEXT_DATA__?.buildId")
    if not build_id:
        print("Failed to get buildId. Captcha might be blocking.")
        await browser.close()
        return
        
    print(f"Build ID: {build_id}")
    
    cookies = await context.cookies()
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    for c in cookies:
        session.cookies.set(c['name'], c['value'], domain=c['domain'])

    missing_items = []
    
    for i, cat in enumerate(categories):
        print(f"Checking [{i+1}/{len(categories)}] {cat}...")
        url = f"https://www.etm.ru/_next/data/{build_id}/catalog/{cat}.json?category={cat}"
        
        for retry in range(3):
            try:
                resp = session.get(url, timeout=10)
                if resp.status_code == 200:
                    data = resp.json()
                    items = data.get("pageProps", {}).get("fallback", {}).get(f"category_{cat}_products", {}).get("items", [])
                    
                    for item in items:
                        code = str(item.get("code"))
                        if code not in completed_products:
                            missing_items.append({
                                "Категория": cat,
                                "Код товара": code,
                                "Название": item.get("name"),
                                "Бренд": item.get("brand", {}).get("name") if item.get("brand") else ""
                            })
                    break
                elif resp.status_code == 403:
                    print(f"  403 Forbidden on API. Updating cookies via browser...")
                    await page.goto(f"https://www.etm.ru/catalog/{cat}", timeout=30000)
                    await page.wait_for_timeout(5000)
                    cookies = await context.cookies()
                    for c in cookies:
                        session.cookies.set(c['name'], c['value'], domain=c['domain'])
                else:
                    print(f"  Status {resp.status_code}")
            except Exception as e:
                print(f"  Error: {e}")
                time.sleep(2)
    
    if missing_items:
        print(f"Found {len(missing_items)} missing items! Saving to Excel...")
        df = pd.DataFrame(missing_items)
        df.to_excel(os.path.join(REPEAT_DIR, "missing_products.xlsx"), index=False)
    else:
        print("No missing items found! All 59,629 items cover the catalogs completely.")

    await browser.close()
```

if **name** == "**main**":
asyncio.run(main())



{



"columns": [



"Код ETM",



"GDS код",



"Наименование",



"Категория",



"Производитель",



"Страна",



"Цена",



"Ед. изм.",



"Ссылка",



"Скачанные файлы"



],



"row\_0": {



"Код ETM": "ETM2066580",



"GDS код": 2066580,



"Наименование": "Кабель силовой ВВГ-Пнг(А)-LS 3x1,5ок(N,PE)-0,66 100м ТРТС",



"Категория": "110505\_kabeli\_pvh\_silovye",



"Производитель": "КОРДЛАЙН",



"Страна": "RUS",



"Цена": 93.33,



"Ед. изм.": "м",



"Ссылка": "[https://www.etm.ru/cat/nn/2066580](https://www.etm.ru/cat/nn/2066580)",



"Скачанные файлы": "downloads\_full\2066580\_cert\_1\_ЕАЭС\_RU\_С-RU.АГ67.В.00287\_25.pdf, downloads\_full\2066580\_mat\_1\_Брошюра.pdf, downloads\_full\2066580\_mat\_2\_Руководство\_по\_эксплуатации.pdf"



}



}



{"cookies": [{"name": "\_*ddg9*", "value": "195.170.199.50", "domain": ".etm.ru", "path": "/", "expires": 1785387679.604665, "httpOnly": false, "secure": false, "sameSite": "Lax"}, {"name": "\_*ddgid*", "value": "277q3H3Kp73gONCi", "domain": ".iprow\.etm.ru", "path": "/", "expires": 1816922472.258071, "httpOnly": true, "secure": false, "sameSite": "Lax"}, {"name": "\_*ddgmark*", "value": "qJFTF91SL1131T2d", "domain": ".iprow\.etm.ru", "path": "/", "expires": 1785472872.258126, "httpOnly": true, "secure": false, "sameSite": "Lax"}, {"name": "\_*ddg5*", "value": "ntwiYDjHMLuPuBLY", "domain": ".etm.ru", "path": "/", "expires": 1785397272.258179, "httpOnly": true, "secure": false, "sameSite": "Lax"}, {"name": "\_\_ddg2", "value": "KKHAba9zSbmVP4TN", "domain": ".check.ddos-guard.net", "path": "/", "expires": 1816922472.43148, "httpOnly": true, "secure": true, "sameSite": "None"}, {"name": "\_*ddg2*", "value": "KKHAba9zSbmVP4TN", "domain": ".etm.ru", "path": "/", "expires": 1816922472.446227, "httpOnly": true, "secure": false, "sameSite": "Lax"}, {"name": "ddg\_last\_challenge", "value": "1785386477257", "domain": "iprow\.etm.ru", "path": "/", "expires": -1, "httpOnly": false, "secure": false, "sameSite": "Lax"}, {"name": "\_*ddg10*", "value": "1785386467", "domain": ".etm.ru", "path": "/", "expires": 1785387679.604529, "httpOnly": false, "secure": false, "sameSite": "Lax"}, {"name": "\_\_ddg3", "value": "0b0kYkL9xDq6nDfQ", "domain": ".etm.ru", "path": "/", "expires": 1785472879.290154, "httpOnly": true, "secure": false, "sameSite": "Lax"}, {"name": "\_*ddg8*", "value": "0pbXzmkXvWGn7kLX", "domain": ".etm.ru", "path": "/", "expires": 1785387679.604263, "httpOnly": false, "secure": false, "sameSite": "Lax"}], "origins": [{"origin": "[https://iprow.etm.ru](https://iprow.etm.ru)", "localStorage": [{"name": "ddg-referrer", "value": ""}]}]}




---

**Assistant:**

Теперь ETM-кейс можно описать точно. По этим фрагментам видно уже не «парсинг сайта», а полноценный конвейер сбора, обогащения, документ-аналитики и контроля результата.

---

**Assistant:**

Да. Теперь ETM-кейс действительно можно оформить как **отдельный крупный проект**, причём он хорошо дополняет твои ПТО-кейсы.

И здесь я бы очень чётко разделил **то, что ты реально сделал**, и то, что не стоит пока писать как утверждённый результат.

---

# 1. Что ты фактически построил

По коду у тебя получилась такая цепочка:

```text
                         ETM
                          │
                          ▼
                  DISCOVERY КАТАЛОГА
                          │
          ┌───────────────┴───────────────┐
          │                               │
          ▼                               ▼
     категории                       товары
          │                               │
          └───────────────┬───────────────┘
                          ▼
                    PRODUCT DATA
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
       характеристики   цена       документы
             │                         │
             │                 ┌───────┴────────┐
             │                 │                │
             ▼                 ▼                ▼
       Excel dataset       сертификаты      материалы
                                 │
                                 ▼
                            PDF archive
                                 │
                                 ▼
                         TEXT / OCR EXTRACTION
                                 │
                ┌────────────────┴───────────────┐
                │                                │
                ▼                                ▼
            regex rules                     NotebookLM
                │                                │
                └──────────────┬─────────────────┘
                               ▼
                       METADATA EXTRACTION
                               │
                               ▼
                       NORMALIZATION
                               │
                               ▼
                      RENAMING / MASTER TABLE
                               │
                               ▼
                         CONTROL / RESUME
```

И это уже очень хороший pipeline.

---

# 2. Самое сильное — ты не просто «собрал данные»

У тебя есть несколько отдельных технических задач.

## Discovery

Ты сначала исследовал структуру каталога:

- корневые категории;
- дочерние категории;
- leaf categories;
- ссылки;
- `buildId`;
- `__NEXT_DATA__`;
- структуру Next.js;
- внутренние `_next/data/...` endpoints.

То есть сначала ты **разобрал структуру источника**, а не просто написал один парсер страницы.

---

# 3. Ты нашёл способ получать структурированные данные из Next.js

Это важная техническая часть.

Ты работаешь примерно с:

```text
__NEXT_DATA__
```

и:

```text
/_next/data/{buildId}/catalog/{slug}.json
```

а для товара:

```text
/_next/data/{buildId}/cat/nn/{gdscode}.json
```

В результате ты получаешь уже структурированные данные:

```text
productCard
├── basicsProductInformation
├── productCharacteristics
├── productCertificates
├── productDetails
└── ...
```

То есть вместо попытки разбирать весь DOM сайта ты переходишь к **данным приложения**.

Для кейса это намного интереснее, чем писать:

> «Я использовал BeautifulSoup».

---

# 4. Ты строил иерархию каталога

У тебя отдельно существует:

```text
target_categories.json
```

и логика:

```text
root categories
      ↓
subcategories
      ↓
leaf categories
```

Это означает, что ты сначала построил **карту каталога**, а затем использовал её для массового обхода.

Это уже похоже на:

> **catalog discovery / taxonomy extraction**

---

# 5. Есть нормальная стратегия работы с большими объёмами

Это один из самых сильных моментов.

Ты предусмотрел:

### Progress

```text
progress.json
```

### Resume

```text
completed_products
```

### Download deduplication

```text
downloaded_urls
```

### Autosave

каждые 50 товаров.

### Intermediate Excel

частями:

```text
technical_characteristics_1.xlsx
technical_characteristics_2.xlsx
...
```

### Retry

для сетевых ошибок.

### Build ID refresh

при изменении страницы/версии.

### 429 handling

с паузами.

Это уже нельзя назвать просто:

> «написал парсер».

Это:

> **устойчивый пакетный pipeline с возобновлением после остановки.**

Это отличная формулировка для портфолио.

---

# 6. Ты ещё отдельно проверял полноту результата

Очень полезная часть:

```text
progress.json
        +
target_categories.json
        ↓
повторная проверка
        ↓
missing_products.xlsx
```

То есть ты не предположил:

> «Ну вроде всё скачалось».

Ты сделал отдельный validation pass:

> пройти категории повторно → сравнить найденные товары с уже обработанными → выявить пропущенные позиции.

Это **качество данных / completeness check**.

И это хорошо связывается с твоими ПТО-кейсами.

Ты в обоих случаях работаешь одинаково:

```text
собрать
→ структурировать
→ проверить
→ найти пропуски
→ повторно обработать
```

Это уже черта твоего рабочего подхода.

---

# 7. Работа с документами — второй большой слой

После каталога ты получаешь:

```text
certificates
materials
```

и скачиваешь документы.

Дальше ты:

```text
PDF
↓
PyMuPDF
↓
native text
```

а если текста недостаточно:

```text
PDF
↓
render
↓
RapidOCR
↓
text
```

То есть:

> **двухуровневое извлечение текста: native PDF text + OCR fallback.**

Это очень хорошая формулировка.

---

# 8. Потом появляется metadata extraction

Ты извлекаешь:

```text
Тип документа
Номер
Дата начала
Дата окончания
Производитель
Наименование
Марка
```

Например:

```text
PDF
↓
Сертификат соответствия
№ ЕАЭС ...
с 03.02.2023
по 27.01.2026
```

и превращаешь это в структурированную запись.

---

# 9. Причём ты сделал два подхода

Это тоже обязательно сохранить в кейсе.

### Rule-based

Regex + Python:

```text
тип документа
номер
даты
производитель
```

### LLM-based

NotebookLM:

```text
PDF batch
↓
persona
↓
structured JSON
↓
metadata
```

И ещё интереснее:

ты использовал **несколько параллельных worker notebooks**.

То есть:

```text
50 документов
      ↓
Worker 1
Worker 2
Worker 3
Worker 4
Worker 5
      ↓
JSON
```

Это уже показывает, что ты не просто попробовал LLM один раз, а пытался построить **массовый pipeline обработки документов**.

---

# 10. Но есть одна вещь, которую я бы обязательно исправил в сайте

В коде несколько раз встречаются значения:

```text
"Процент точности, уверенности": "98%"
```

или:

```text
"99%"
```

Это **не измеренная точность**.

Если ты не проводил независимую валидацию:

```text
prediction vs ground truth
```

то это не accuracy.

Лучше:

### ❌

> Точность 99%

### ✅

> Эвристическая оценка уверенности

или:

> Документы, не распознанные однозначно, помечаются для ручной проверки.

А ещё лучше:

```text
CONFIDENCE
HIGH
MEDIUM
LOW
```

по конкретным правилам.

И это будет гораздо профессиональнее.

---

# 11. Ещё одно важное исправление

Ты пишешь в коде:

```python
"Нужна ли ручная проверка": "Нет"
```

для большинства документов.

Я бы на сайте вообще не делал из этого абсолют.

Лучше:

> **Автоматическая обработка + контроль потенциально неоднозначных результатов**

Потому что OCR/LLM на технической документации должен быть **ассистирующим механизмом**, а финальная проверка — человеком.

Это, кстати, хорошо согласуется с твоим резюме:

> AI ускоряет работу, но финальное соответствие требованиям проверяется самостоятельно.

---

# 12. ETM-кейс можно назвать

## **ETM Catalog Data Pipeline**

или по-русски:

# **Массовый сбор и структурирование каталога ETM**

Подзаголовок:

> Python + Playwright + pandas + PyMuPDF + OCR + LLM

Но я бы в карточке не перечислял десять библиотек.

Основная мысль:

> **Автоматизировал сбор данных каталога и сопроводительной документации с последующим извлечением и нормализацией технических метаданных.**

---

# 13. Я бы разбил этот кейс на 5 визуальных этапов

## 01 — DISCOVERY

```text
Каталог
  ↓
категории
  ↓
подкатегории
  ↓
leaf categories
```

На сайте можно показать дерево:

```text
Электрика и свет
├── Кабели
│   ├── силовые
│   ├── контрольные
│   └── монтажные
├── Светотехника
├── Низковольтное оборудование
└── ...
```

---

## 02 — CRAWLER

Визуализация:

```text
Category
     ↓
Product list
     ↓
Product detail
     ↓
Characteristics
     ↓
Certificates
     ↓
Materials
```

И маленький мониторинг:

```text
PRODUCTS
██████████████░░ 47 820

CATEGORIES
████████████████  XXX

DOCUMENTS
████████████░░░░  XXX
```

**Но конкретные числа показывать только после фактического подтверждения итогового запуска.**

Из твоего последнего validation script видно, что ты работал с утверждением о **59 629 товарах**, но я бы на сайте указал эту цифру только после того, как у тебя есть финальный отчёт, подтверждающий полный объём.

---

# 14. 03 — DOCUMENT MINING

Очень эффектный блок:

```text
PDF
 ↓
PyMuPDF
 ↓
Text?
 ├── YES → extract
 └── NO
       ↓
     OCR
       ↓
     text
```

---

# 15. 04 — METADATA

Показываем трансформацию:

```text
BEFORE

1-3. Сертификат соответствия
№2557 от 03.02.2023
до 27.01.2026.pdf


AFTER

Тип:
Сертификат соответствия

№:
2557

Дата:
03.02.2023

Срок:
27.01.2026
```

Вот это великолепный элемент для Bento Grid.

Пользователь **за 3 секунды понимает результат работы твоего pipeline**.

---

# 16. 05 — MASTER DATA

Финальный результат:

```text
КОД ETM
Наименование
Категория
Производитель
Марка
Тип документа
Номер
Дата
Срок
Исходный файл
Новое имя
```

То есть:

```text
сырой интернет
        ↓
структурированные данные
```

---

# 17. А вот ещё одна классная визуализация

## BEFORE → AFTER

### Было

```text
ETM
├── товар
│   ├── какой-то сертификат.pdf
│   ├── 123.pdf
│   └── паспорт новый.pdf
│
├── товар
│   ├── scan1.pdf
│   └── document.pdf
```

### Стало

```text
Кабель ВВГ-Пнг(А)-LS 3x1,5
│
├── Сертификат соответствия
│   └── №ЕАЭС... · 2025
│
├── Брошюра
│
└── Руководство по эксплуатации
```

Вот это **отличная демонстрация результата**.

---

# 18. И здесь можно показать именно твой инженерный подход

В отличие от обычного веб-скрейпера:

```text
scrape → JSON
```

у тебя:

```text
SCRAPE
 ↓
NORMALIZE
 ↓
ENRICH
 ↓
DOCUMENT MINING
 ↓
VALIDATE
 ↓
RENAME
 ↓
MASTER DATA
```

Это сильнее.

---

# 19. Что особенно хорошо связывает ETM с ПТО

И вот тут я бы вообще сделал на сайте общий раздел:

# **Data & Automation**

В нём:

### Кейс 01
**РД → Факт → контроль объёмов**

Power Query / Excel

### Кейс 02
**Шахматка → контроль ИД**

Excel / formulas / statuses

### Кейс 03
**CSV → Exon → PDF → metadata**

JavaScript / browser extension

### Кейс 04
**ETM → каталог → документы → master data**

Python / Playwright / OCR / LLM

Получается невероятно цельная история.

---

# 20. И у тебя начинает просматриваться уже не одна специализация

Я сначала воспринимал твой сайт как:

> инженер ПТО.

Но после всех этих материалов я бы сформулировал позиционирование чуть шире:

# **Инженер ПТО / специалист по исполнительной документации с фокусом на автоматизацию процессов и работу с данными**

А дальше уже:

```text
PTO
│
├── Documentation
│
├── Data
│
└── Automation
```

Это гораздо точнее отражает твой набор проектов.

---

# И наконец — про будущую связь «шахматка ↔ CSV ↔ Exon»

Вот здесь всё начинает складываться в одну систему:

```text
                    MASTER DATA
                         │
            ┌────────────┼────────────┐
            │            │            │
            ▼            ▼            ▼
       СРАВНЕНИЕ      ШАХМАТКА       CSV
      П ↔ РД ↔ Факт     ИД        для EXON
            │            │            │
            │            │            ▼
            │            │        EXON JVK
            │            │            │
            │            │            ▼
            │            │         EXON
            │            │
            └────────────┴──────────────┐
                                         ▼
                                  СТАТУС КОМПЛЕКТА
```

И вот это уже может стать **самым большим будущим проектом портфолио**:

# **PTO Documentation Control System**

Не надо пока его так называть как готовый продукт — это концепция. Но архитектурно ты уже движешься именно туда.

---

## Что я теперь рекомендую сделать

Не переписывать пока сайт.

Сначала собрать **реестр всех твоих реальных кейсов** и для каждого определить:

```text
Кейс
├── задача
├── исходные данные
├── что сделал лично ты
├── инструменты
├── алгоритм
├── автоматизированные операции
├── результат
├── измеримые показатели
├── что можно публично показать
├── видео
├── интерактивная demo
└── уровень конфиденциальности
```

У тебя уже есть минимум **четыре очень сильных направления**:

**Power Query / контроль объёмов → Шахматка ИД → EXON JVK → ETM Data Pipeline.**

И я бы именно вокруг них строил новую версию сайта, а не вокруг бесконечного списка навыков.

Причём ETM-кейс я бы **не прятал в конец**. Он хорошо показывает, что твои навыки автоматизации выходят за пределы Excel: Python, браузерная автоматизация, структурированные данные, OCR, LLM, массовая обработка и контроль результата.

---

**User:**

## Contents

- [User Request #1](#user-request-1)
- [User Request #2](#user-request-2)
- [User Request #3](#user-request-3)
- [User Request #4](#user-request-4)
- [User Request #5](#user-request-5)
- [User Request #6](#user-request-6)
- [User Request #7](#user-request-7)
- [User Request #8](#user-request-8)
- [User Request #9](#user-request-9)
- [User Request #10](#user-request-10)
- [User Request #11](#user-request-11)

1. [результат должен быть очень точным ошибки не допускаються я проверю](#-)

- [User Request #12](#user-request-12)

1. [результат должен быть очень точным ошибки не допускаються я проверю](#--1)

- [User Request #13](#user-request-13)
- [User Request #14](#user-request-14)
- [User Request #15](#user-request-15)
- [User Request #16](#user-request-16)
- [User Request #17](#user-request-17)
- [User Request #18](#user-request-18)
- [User Request #19](#user-request-19)

1. [результат должен быть очень точным ошибки не допускаються я проверю](#--2)

- [User Request #20](#user-request-20)
- [User Request #21](#user-request-21)
- [User Request #22](#user-request-22)
- [User Request #23](#user-request-23)
- [User Request #24](#user-request-24)

## User Request #1

\<USER\_REQUEST> мы остановились на том что перепроверили весь сайт и подтвердили что все позиции были скачаны и извлечены, теперь нам нужно подготовить таблицы@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx] и все остальные начнем с того что все изменения будут делаться с копиями этих документов, чтобы в случае чего у нас остались эти данные, давай начнем с того что сооздадим папку Технические характеристики, в неё скопируем @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_2.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_3.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_4.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_5.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_6.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_7.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_8.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_9.xlsx]@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_10.xlsx] 10 эти хдокументов и протестируем и настроим каким образом они должны выглядеть, /grill-me привести в порядо по иерархии каталога, сгруппировать по характеристикам позиции у которых одинаковые характеристики и столбцы, если ты изучишь досканально 10 этих таблиц ты пойми что я тебе пытаюсь донести, и спроси меня и покажи для начала пример как ты понячял в чате, и когда мы прийдем к соглашению же тестово с 10 таблицами поработаем, так же по Категории и остальным категориям, найди общие катеогории кароче давай ещё вопросы составь /grill-me

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T09:10:53+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_2.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_2.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_3.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_3.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_4.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_4.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_5.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_5.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_6.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_6.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_7.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_7.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_8.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_8.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_9.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_9.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_10.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_10.xlsx /grill-me is a [Slash Command]: \<GRILL\_ME> The user has requested that you interview them about every aspect of their task until you've reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Guidelines:

- Ask the questions one at a time.
- If a question can be answered by exploring the codebase, explore the codebase instead.
- Use the ask\_question tool for asking questions to the user. \</GRILL\_ME> /grill-me is a [Slash Command]: \<GRILL\_ME> The user has requested that you interview them about every aspect of their task until you've reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Guidelines:

- Ask the questions one at a time.
- If a question can be answered by exploring the codebase, explore the codebase instead.
- Use the ask\_question tool for asking questions to the user. \</GRILL\_ME> \</ADDITIONAL\_METADATA> \<USER\_SETTINGS\_CHANGE> The user changed setting `Model Selection` from None to Gemini 3.1 Pro (Low). No need to comment on this change if the user doesn't ask about it. If reporting what model you are, please use a human readable name instead of the exact string. \</USER\_SETTINGS\_CHANGE>

---

## User Request #2

Comments on artifact URI: file:///c%3A/Users/User/.gemini/antigravity-ide/brain/6e46fc7d-a91b-439d-972b-e020966094b9/implementation\_plan.md

Selection:

> Фильтрация и сортировка внутри листов

Для каждого созданного листа будут оставлены только те столбцы, в которых есть хотя бы одно заполненное значение. (Если какой-то столбец-характеристика не применим к данной категории, он будет удален из этого листа, чтобы не загромождать таблицу пустыми ячейками). Строки на каждом листе будут отсортированы по "Иерархии каталога" и "Категории", чтобы позиции с одинаковыми характеристиками оказались рядом друг с другом.

Comment: "нельзя удалять ни один столбец, даже если у категории или иерархии у кабеля к примеру есть описание а у другого кабеля из той же категории и иерархии нет, " \<USER\_REQUEST>

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T09:18:17+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #3

\<USER\_REQUEST> хорошо, давай возьмём сейчас сразу 100 таблиц от 1 до 100@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx] @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_100.xlsx] хочу понять как ты сделаешь сейчас тут разные иерархии и категории для удобства каждую книгу с новой категорией пожалуйста называй своим названием \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T09:22:43+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_100.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_100.xlsx \</ADDITIONAL\_METADATA>

---

## User Request #4

\<USER\_REQUEST> не плохо теперь названия по русски напиши у фалйов и ещё, если в книге есть столбцы и ни у одной позиции нет данных в ни, тогда удали их, но если в книге хотя б ыу одной позции есть значение по столбцу тогда его оставлй как поня \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T09:54:01+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #5

\<USER\_REQUEST> отлично невероятно, можешь пожалуйста по левому краю всё выравнять в книгах, шрифт Roboto Consended и ещё добавить столбец справа с названием ПУТЬ 1, ПУТЬ 2 в зависимости от количества скачанных файлов исходя из данных из @[g:\Мой диск\_**ETM**\_\catalog\_hierarchy.xlsx] и проверить @[g:\Мой диск\_**ETM**\_\downloads\_full] чтобы всё сходилось сделай их в формате ссылок, но не указывай полную ссылку, а сделай всё аккуратнее вот пример Название документа Сертификат соответствия, Паспорт, Руководство по эксплуатации и так далее а внутри этих названий будут ссылки на документы \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:01:20+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\catalog\_hierarchy.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\catalog\_hierarchy.xlsx @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full \</ADDITIONAL\_METADATA>

---

## User Request #6

\<USER\_REQUEST> а лучше в названия столбцов напиши Сертификат соответствия, Паспорт и так далее вместо путь 1 путь 2 а названия ссылок будут сокращенные СС, П, РЭ и так далее \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:02:30+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #7

\<USER\_REQUEST> отлично невероятно, можешь пожалуйста по левому краю всё выравнять в книгах, шрифт Roboto Consended и ещё добавить столбец справа с названием ПУТЬ 1, ПУТЬ 2 в зависимости от количества скачанных файлов исходя из данных из @[g:\Мой диск\_**ETM**\_\catalog\_hierarchy.xlsx] и проверить @[g:\Мой диск\_**ETM**\_\downloads\_full] чтобы всё сходилось сделай их в формате ссылок, но не указывай полную ссылку, а сделай всё аккуратнее вот пример Название документа Сертификат соответствия, Паспорт, Руководство по эксплуатации и так далее а внутри этих названий будут ссылки на документы \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:01:20+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\catalog\_hierarchy.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\catalog\_hierarchy.xlsx @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full \</ADDITIONAL\_METADATA>

---

## User Request #8

\<USER\_REQUEST> а лучше в названия столбцов напиши Сертификат соответствия, Паспорт и так далее вместо путь 1 путь 2 а названия ссылок будут сокращенные СС, П, РЭ и так далее \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:02:30+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #9

Comments on artifact URI: file:///c%3A/Users/User/.gemini/antigravity-ide/brain/6e46fc7d-a91b-439d-972b-e020966094b9/implementation\_plan.md

The user has approved this document.

\<USER\_REQUEST>

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:03:49+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #10

Comments on artifact URI: file:///c%3A/Users/User/.gemini/antigravity-ide/brain/6e46fc7d-a91b-439d-972b-e020966094b9/implementation\_plan.md

The user has approved this document.

\<USER\_REQUEST>

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:03:57+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #11

\<USER\_REQUEST> /goal

[https://github.com/opendataloader-project/opendataloader-pdf.git](https://github.com/opendataloader-project/opendataloader-pdf.git) [https://github.com/opendatalab/MinerU.git](https://github.com/opendatalab/MinerU.git) [https://github.com/baidu/Unlimited-OCR.git](https://github.com/baidu/Unlimited-OCR.git) установи и настрой все эти репозитории закиь их в одну папку Распознование документов /grill-me я хочу чтобы после установки у нас была следующая работа, распознование документа и его переименование в папке @[g:\Мой диск\_**ETM**\_\downloads\_full] и таблица со столбцами

1.НАЗВАНИЕ Название позиции, сохранять основное название и убирать лишнее к примеру название: ПРИМЕР 1 ДО Кабель управления гибкий, ПВХ JZ-500 25G0.75 qmm grey ПОСЛЕ Кабель управления гибкий, ПВХ JZ-500 25G0.75 ПРИМЕР 2 ДО Двустенная труба ПНД гибкая для кабельной канализации д.110мм с протяжкой, SN8, 500Н, в бухте 50м, безгалогеновая, цвет красный ПОСЛЕ Двустенная труба ПНД гибкая д.110мм с протяжкой, SN8, 500Н ПРИМЕР 3 ДО Двустенная труба ПНД гибкая для кабельной канализации д.160мм с протяжкой, SN6, 500Н, в бухте 50м, безгалогеновая, цвет красный ПОСЛЕ Двустенная труба ПНД гибкая д.160мм с протяжкой, SN6, 500Н ПРИМЕР 4 ДО Кабель пожарно-охранной сигнализации КПЭПнг(А)-HF 1х2х1.38-250В ПОСЛЕ Кабель КПЭПнг(А)-HF 1х2х1.38-250В ПРИМЕР5 ДО Кабель экранированный передачи данных FLEXICORE LiYCY (TP) 2x2x0,25 ПОСЛЕ Кабель FLEXICORE LiYCY (TP) 2x2x0,25 (ПРИМЕЧАНИЕ марка должна быть всегда в таблицах @[g:\Мой диск\_**ETM**\_\Технические характеристики] есть столбцы с данными Марка, если в наименовании не оказалось марки, тогда дополнить наименование документа pdf в @[g:\Мой диск\_**ETM**\_\downloads\_full]

2. Извлечение типа документа Сертификат соответствия, Декларация о соответствии, Информационное письмо, Паспорт, Паспорт качества, Техническое описание, Руководство по эксплуатации и другое
3. Извлечение номера документа после п.2 Типа документа должен быть указан номер документа №Номер документа, если номера не найдено тогда указывать б-н
4. Дата документа В случае с Сертификат соответствия, Декларация о соответствии У них даты указываються с и по т.е нужно извлечь данные из документа о дате сроках действия с 12.02.2022 по 13.02.2026
5. Производитель плохой вариант ООО "Производитель" хороший Производитель

ИТОГ Кабель управления гибкий, ПВХ JZ-500 25G0.75 Сертификат соответствия №ЕАЭС RU C-RU.08\_26 с 12.02.2022 по 13.02.2026 Камкабель (зачастую у Сертификат соответствия, Декларация о соответствии в конце стоит / меняй его только на \_)

для начала давай пройдем по @[g:\Мой диск\_**ETM**\_\Технические характеристики] по этим 66 таблицам

напоминаю таблицу с номерами документов тоже нужно сделать на основании @[g:\Мой диск\_**ETM**\_\Технические характеристики] книг из этих документов только оставить КОД ETM | Наименование | Категория | Производитель | Марка или тип (в зависимости от позиции) | (Распознанный) Тип дкумента | Номер документа | Дата 1 | Дата 2 | Процент точности, уверености | Нужна ли ручная проверка

используй все возможности эти расширений [https://github.com/opendataloader-project/opendataloader-pdf.git](https://github.com/opendataloader-project/opendataloader-pdf.git) [https://github.com/opendatalab/MinerU.git](https://github.com/opendatalab/MinerU.git) [https://github.com/baidu/Unlimited-OCR.git](https://github.com/baidu/Unlimited-OCR.git)

# результат должен быть очень точным ошибки не допускаються я проверю

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:27:37+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

/goal is a [Slash Command]: The user has marked this task with /goal, indicating that this task is intended to run for a long time without user input, e.g. overnight. You should be extra thorough and only stop when you are confident the goal has been completely fulfilled. The system will force you to continue execution, prompting you to audit your work until completion. /grill-me is a [Slash Command]: \<GRILL\_ME> The user has requested that you interview them about every aspect of their task until you've reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Guidelines:

- Ask the questions one at a time.
- If a question can be answered by exploring the codebase, explore the codebase instead.
- Use the ask\_question tool for asking questions to the user. \</GRILL\_ME> @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики \</ADDITIONAL\_METADATA>

---

## User Request #12

\<USER\_REQUEST> /goal

[https://github.com/opendataloader-project/opendataloader-pdf.git](https://github.com/opendataloader-project/opendataloader-pdf.git) [https://github.com/opendatalab/MinerU.git](https://github.com/opendatalab/MinerU.git) [https://github.com/baidu/Unlimited-OCR.git](https://github.com/baidu/Unlimited-OCR.git) установи и настрой все эти репозитории закиь их в одну папку Распознование документов /grill-me я хочу чтобы после установки у нас была следующая работа, распознование документа и его переименование в папке @[g:\Мой диск\_**ETM**\_\downloads\_full] и таблица со столбцами

1.НАЗВАНИЕ Название позиции, сохранять основное название и убирать лишнее к примеру название: ПРИМЕР 1 ДО Кабель управления гибкий, ПВХ JZ-500 25G0.75 qmm grey ПОСЛЕ Кабель управления гибкий, ПВХ JZ-500 25G0.75 ПРИМЕР 2 ДО Двустенная труба ПНД гибкая для кабельной канализации д.110мм с протяжкой, SN8, 500Н, в бухте 50м, безгалогеновая, цвет красный ПОСЛЕ Двустенная труба ПНД гибкая д.110мм с протяжкой, SN8, 500Н ПРИМЕР 3 ДО Двустенная труба ПНД гибкая для кабельной канализации д.160мм с протяжкой, SN6, 500Н, в бухте 50м, безгалогеновая, цвет красный ПОСЛЕ Двустенная труба ПНД гибкая д.160мм с протяжкой, SN6, 500Н ПРИМЕР 4 ДО Кабель пожарно-охранной сигнализации КПЭПнг(А)-HF 1х2х1.38-250В ПОСЛЕ Кабель КПЭПнг(А)-HF 1х2х1.38-250В ПРИМЕР5 ДО Кабель экранированный передачи данных FLEXICORE LiYCY (TP) 2x2x0,25 ПОСЛЕ Кабель FLEXICORE LiYCY (TP) 2x2x0,25 (ПРИМЕЧАНИЕ марка должна быть всегда в таблицах @[g:\Мой диск\_**ETM**\_\Технические характеристики] есть столбцы с данными Марка, если в наименовании не оказалось марки, тогда дополнить наименование документа pdf в @[g:\Мой диск\_**ETM**\_\downloads\_full]

2. Извлечение типа документа Сертификат соответствия, Декларация о соответствии, Информационное письмо, Паспорт, Паспорт качества, Техническое описание, Руководство по эксплуатации и другое
3. Извлечение номера документа после п.2 Типа документа должен быть указан номер документа №Номер документа, если номера не найдено тогда указывать б-н
4. Дата документа В случае с Сертификат соответствия, Декларация о соответствии У них даты указываються с и по т.е нужно извлечь данные из документа о дате сроках действия с 12.02.2022 по 13.02.2026
5. Производитель плохой вариант ООО "Производитель" хороший Производитель

ИТОГ Кабель управления гибкий, ПВХ JZ-500 25G0.75 Сертификат соответствия №ЕАЭС RU C-RU.08\_26 с 12.02.2022 по 13.02.2026 Камкабель (зачастую у Сертификат соответствия, Декларация о соответствии в конце стоит / меняй его только на \_)

для начала давай пройдем по @[g:\Мой диск\_**ETM**\_\Технические характеристики] по этим 66 таблицам

напоминаю таблицу с номерами документов тоже нужно сделать на основании @[g:\Мой диск\_**ETM**\_\Технические характеристики] книг из этих документов только оставить КОД ETM | Наименование | Категория | Производитель | Марка или тип (в зависимости от позиции) | (Распознанный) Тип дкумента | Номер документа | Дата 1 | Дата 2 | Процент точности, уверености | Нужна ли ручная проверка

используй все возможности эти расширений [https://github.com/opendataloader-project/opendataloader-pdf.git](https://github.com/opendataloader-project/opendataloader-pdf.git) [https://github.com/opendatalab/MinerU.git](https://github.com/opendatalab/MinerU.git) [https://github.com/baidu/Unlimited-OCR.git](https://github.com/baidu/Unlimited-OCR.git)

# результат должен быть очень точным ошибки не допускаються я проверю

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:27:37+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

/goal is a [Slash Command]: The user has marked this task with /goal, indicating that this task is intended to run for a long time without user input, e.g. overnight. You should be extra thorough and only stop when you are confident the goal has been completely fulfilled. The system will force you to continue execution, prompting you to audit your work until completion. /grill-me is a [Slash Command]: \<GRILL\_ME> The user has requested that you interview them about every aspect of their task until you've reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Guidelines:

- Ask the questions one at a time.
- If a question can be answered by exploring the codebase, explore the codebase instead.
- Use the ask\_question tool for asking questions to the user. \</GRILL\_ME> @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики \</ADDITIONAL\_METADATA>

---

## User Request #13

Comments on artifact URI: file:///c%3A/Users/User/.gemini/antigravity-ide/brain/6e46fc7d-a91b-439d-972b-e020966094b9/implementation\_plan.md

Selection:

> Слой понимания текста (NLP-слой):

Чтобы извлечь сложные и неструктурированные данные (сократить название, найти даты "с и по", очистить производителя от "ООО"), классические регулярные выражения (regex) не справятся со 100% точностью. Нам понадобится обратиться к LLM (языковой модели). Скрипт будет передавать извлеченный текст документа в модель (через API или локальную модель), которая сформирует четкий JSON-ответ с номером, типом, датами и новым названием.

Comment: "для этого я буду использовать NotebookLM GeminiNotebook CLI, создадим потоковую обработку документов, попросим сделать то же что и я объяснил по извлечению данных, каждая категория будет извлекаться в отдельном блокноте, за раз будет загружаться не более 50 документов, " \<USER\_REQUEST>

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:43:39+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #14

Comments on artifact URI: file:///c%3A/Users/User/.gemini/antigravity-ide/brain/6e46fc7d-a91b-439d-972b-e020966094b9/implementation\_plan.md

Selection:

> Слой понимания текста (NLP-слой):

Чтобы извлечь сложные и неструктурированные данные (сократить название, найти даты "с и по", очистить производителя от "ООО"), классические регулярные выражения (regex) не справятся со 100% точностью. Нам понадобится обратиться к LLM (языковой модели). Скрипт будет передавать извлеченный текст документа в модель (через API или локальную модель), которая сформирует четкий JSON-ответ с номером, типом, датами и новым названием.

Comment: "для этого я буду использовать NotebookLM GeminiNotebook CLI, создадим потоковую обработку документов, попросим сделать то же что и я объяснил по извлечению данных, каждая категория будет извлекаться в отдельном блокноте, за раз будет загружаться не более 50 документов, " \<USER\_REQUEST>

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:43:39+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #15

\<USER\_REQUEST> [https://github.com/NimaMan/notebookLM.git](https://github.com/NimaMan/notebookLM.git) Notebook LM вот нужно установить и авторизоваться \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T10:46:28+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #16

\<USER\_REQUEST> родоолжим \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:05:36+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #17

\<USER\_REQUEST> скролько у нас было скачана файлов в папке @[g:\Мой диск\_**ETM**\_\downloads\_full] в разное время лог покажи \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:10:03+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full \</ADDITIONAL\_METADATA>

---

## User Request #18

\<USER\_REQUEST> всё не правильно както переименовываеться там где Сертификат соответствия пишет Документ б-н каждый документ пропускай через OCR \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:13:05+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #19

\<USER\_REQUEST> /goal давай так же все инстукции закинуть по извлечению данных из документов создай 5 блокнотов и работай паралельно в них в Notebook LM по 50 доукментов по порядку сздай папку Notebook LM OCR и туда отправляй. файлы которые уже будут переименованы согласно прваилу вот что я писал context

[https://github.com/opendataloader-project/opendataloader-pdf.git](https://github.com/opendataloader-project/opendataloader-pdf.git)

[https://github.com/opendatalab/MinerU.git](https://github.com/opendatalab/MinerU.git)

[https://github.com/baidu/Unlimited-OCR.git](https://github.com/baidu/Unlimited-OCR.git)

установи и настрой все эти репозитории закиь их в одну папку Распознование документов

context

я хочу чтобы после установки у нас была следующая работа, распознование документа

и его переименование в папке @[g:\Мой диск\_**ETM**\_\downloads\_full]

и таблица со столбцами

1.НАЗВАНИЕ

Название позиции, сохранять основное название и убирать лишнее к примеру название:

ПРИМЕР 1

ДО

Кабель управления гибкий, ПВХ JZ-500 25G0.75 qmm grey

ПОСЛЕ

Кабель управления гибкий, ПВХ JZ-500 25G0.75

ПРИМЕР 2

ДО

Двустенная труба ПНД гибкая для кабельной канализации д.110мм с протяжкой, SN8, 500Н, в бухте 50м, безгалогеновая, цвет красный

ПОСЛЕ

Двустенная труба ПНД гибкая д.110мм с протяжкой, SN8, 500Н

ПРИМЕР 3

ДО

Двустенная труба ПНД гибкая для кабельной канализации д.160мм с протяжкой, SN6, 500Н, в бухте 50м, безгалогеновая, цвет красный

ПОСЛЕ

Двустенная труба ПНД гибкая д.160мм с протяжкой, SN6, 500Н

ПРИМЕР 4

ДО

Кабель пожарно-охранной сигнализации КПЭПнг(А)-HF 1х2х1.38-250В

ПОСЛЕ

Кабель КПЭПнг(А)-HF 1х2х1.38-250В

ПРИМЕР5

ДО

Кабель экранированный передачи данных FLEXICORE LiYCY (TP) 2x2x0,25

ПОСЛЕ

Кабель FLEXICORE LiYCY (TP) 2x2x0,25

(ПРИМЕЧАНИЕ марка должна быть всегда в таблицах @[g:\Мой диск\_**ETM**\_\Технические характеристики] есть столбцы с данными Марка, если в наименовании не оказалось марки, тогда дополнить наименование документа pdf в @[g:\Мой диск\_**ETM**\_\downloads\_full]

2. Извлечение типа документа

Сертификат соответствия, Декларация о соответствии, Информационное письмо, Паспорт, Паспорт качества, Техническое описание, Руководство по эксплуатации и другое

3. Извлечение номера документа

после п.2 Типа документа должен быть указан номер документа №Номер документа, если номера не найдено тогда указывать б-н

4. Дата документа

В случае с Сертификат соответствия, Декларация о соответствии

У них даты указываються с и по т.е нужно извлечь данные из документа о дате сроках действия

с 12.02.2022 по 13.02.2026

5. Производитель

плохой вариант

ООО "Производитель"

хороший

Производитель

ИТОГ

Кабель управления гибкий, ПВХ JZ-500 25G0.75 Сертификат соответствия №ЕАЭС RU C-RU.08\_26 с 12.02.2022 по 13.02.2026 Камкабель (зачастую у Сертификат соответствия, Декларация о соответствии в конце стоит / меняй его только на \_)

для начала давай пройдем по @[g:\Мой диск\_**ETM**\_\Технические характеристики] по этим 66 таблицам

напоминаю таблицу с номерами документов тоже нужно сделать

на основании @[g:\Мой диск\_**ETM**\_\Технические характеристики] книг из этих документов

только оставить

КОД ETM | Наименование | Категория | Производитель | Марка или тип (в зависимости от позиции) | (Распознанный) Тип дкумента | Номер документа | Дата 1 | Дата 2 | Процент точности, уверености | Нужна ли ручная проверка

используй все возможности эти расширений

[https://github.com/opendataloader-project/opendataloader-pdf.git](https://github.com/opendataloader-project/opendataloader-pdf.git)

[https://github.com/opendatalab/MinerU.git](https://github.com/opendatalab/MinerU.git)

[https://github.com/baidu/Unlimited-OCR.git](https://github.com/baidu/Unlimited-OCR.git)

# результат должен быть очень точным ошибки не допускаються я проверю

\</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:16:38+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

/goal is a [Slash Command]: The user has marked this task with /goal, indicating that this task is intended to run for a long time without user input, e.g. overnight. You should be extra thorough and only stop when you are confident the goal has been completely fulfilled. The system will force you to continue execution, prompting you to audit your work until completion. @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики @[g:\Мой диск\_**ETM**\_\downloads\_full] is a [File]: g:\Мой диск\_**ETM**\_\downloads\_full @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики \</ADDITIONAL\_METADATA>

---

## User Request #20

\<USER\_REQUEST> в NLM получаеться будет 5 блакнотов, и когда 50 документов загрузяться после извлекуться табличные данные с нужными данными по каждому источнику, затем мы их заберем из Notebook LM и уже в папке @[g:\Мой диск\_**ETM**\_\Notebook LM OCR] будем получать переименованные источники, и после этого удалять обработанные источники так как в блокноте лимит 300 документов, и запускай так по кругу \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:19:07+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\Notebook LM OCR] is a [File]: g:\Мой диск\_**ETM**\_\Notebook LM OCR \</ADDITIONAL\_METADATA>

---

## User Request #21

\<USER\_REQUEST> @[g:\Мой диск\_**ETM**\_\Технические характеристики] мы с ними там проводили работу напомни пожалуйста, и проработай остальные таблицы все остальные документы из @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx] по @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_597.xlsx] \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:25:08+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_1.xlsx @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_597.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_597.xlsx \</ADDITIONAL\_METADATA>

---

## User Request #22

\<USER\_REQUEST> в Notebook lm грузим пакетом 50 документов ждем загрузку каждого потом исполоьзуем инструкцию по извлечению документа и выгружаем сразу 50 документов с обновленными OCR извлеченными данными ипереименовываем, и затем удаялем, и так по кругу и это по всем пяти уже созданным блакнотам \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:31:28+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #23

\<USER\_REQUEST> давай так не будем удалять по 50 документов и так до конца до 300, не удаляй я хочу видеть какие ответы дал Notebook LM и посмотрю куда ты инструкцию добавлял? по сути не в чат надо а в определнное место как раз для инструкций, и жоступ открываеться после загрузки хотя бы одного источника \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:38:41+03:00. \</ADDITIONAL\_METADATA>

---

## User Request #24

\<USER\_REQUEST> вытащи из нашей переписки в точности мой запрс по поводу выгрузки таблицы и объединени группировки по иерархии из @[g:\Мой диск\_**ETM**\_\technical\_characteristics\_590.xlsx] таких документов в таблицы которые у нас в папке @[g:\Мой диск\_**ETM**\_\Технические характеристики] мне нужно эту инструкцию и workflow сохранить обязательноЯ \</USER\_REQUEST> \<ADDITIONAL\_METADATA> The current local time is: 2026-07-30T14:42:21+03:00.

The user has mentioned some items in the form @[ITEM]. Here is extra information about the items that were mentioned by the user, in the order that they appear:

@[g:\Мой диск\_**ETM**\_\technical\_characteristics\_590.xlsx] is a [File]: g:\Мой диск\_**ETM**\_\technical\_characteristics\_590.xlsx @[g:\Мой диск\_**ETM**\_\Технические характеристики] is a [File]: g:\Мой диск\_**ETM**\_\Технические характеристики \</ADDITIONAL\_METADATA> \<USER\_SETTINGS\_CHANGE> The user changed setting `Model Selection` from Gemini 3.6 Flash (Medium) to Gemini 3.1 Pro (Low). No need to comment on this change if the user doesn't ask about it. If reporting what model you are, please use a human readable name instead of the exact string. \</USER\_SETTINGS\_CHANGE>

## Contents

- [01. Парсинг и краулинг сайта ETM](#01-etm)
  - [Цель](#h-2)
  - [Технологический стек](#-)
  - [Архитектура (конвейер)](#--1)
  - [Этап 1: Обнаружение категорий](#-1-)
    - [Алгоритм](#-1)
    - [Ключевые решения](#--2)
    - [Запуск](#-2)
    - [Результат](#-3)
  - [Этап 2: Полный краулинг товаров](#-2-)
    - [Алгоритм](#-4)
    - [Ключевые функции](#--3)
    - [Механизмы защиты от сбоев](#--4)
    - [Формат имён скачанных файлов](#--5)
    - [Запуск](#-5)
    - [Результаты](#-6)
  - [Этап 3: Верификация полноты](#-3-)
    - [Алгоритм](#-7)
  - [Этап 4: Очистка](#-4-)
  - [Правила и инструкции пользователя](#--6)

# 01. Парсинг и краулинг сайта ETM

## Цель

Полный обход каталога интернет-магазина ETM (etm.ru) с извлечением:

- Каталожной иерархии категорий
- Карточек товаров (технические характеристики)
- Сертификатов, паспортов и других документов (файлы PDF)

## Технологический стек

| **КомпонентБиблиотека / инструментНазначение** |                          |                                                    |
| ---------------------------------------------- | ------------------------ | -------------------------------------------------- |
| Браузерная автоматизация                       | `playwright` (async API) | Обход DDOS-GUARD, авторизация, получение `buildId` |
| HTTP-запросы                                   | `requests`               | Скачивание файлов (PDF/сертификаты)                |
| Данные                                         | `pandas`, `openpyxl`     | Сохранение в Excel                                 |
| Формат прогресса                               | `json`                   | `progress.json` для возобновления работы           |

## Архитектура (конвейер)

```
```

`1. deep_discover.pyОбнаружение всех категорий каталога`

`2. target_categories.jsonСписок листовых категорий`

`3. parse_etm_full.pyПолный краулинг товаров`

`catalog_hierarchy.xlsxКаталог товаров`

`technical_characteristics_N.xlsxТех. характеристики (по 100 строк)`

`downloads_full/Скачанные PDF-документы`

`4. verify_leftovers.pyВерификация полноты`

`5. cleanup_downloads.pyОчистка мусора`

---

## Этап 1: Обнаружение категорий

**Скрипт:** `deep_discover.py`

### Алгоритм

1. Стартовые (корневые) категории задаются вручную:
   - `11_kabeli_i_provoda`, `16_kabelenesuschie_sistemy`, `21_elektromontazhnye_izdelija` и т.д.
2. Playwright открывает каждую категорию на сайте ETM
3. Из DOM извлекаются все ссылки вида `/catalog/{slug}`
4. Новые slug добавляются в очередь BFS
5. Прогресс сохраняется в `deep_discover_progress.json` (поддержка resume)

### Ключевые решения

- **Headless-режим** с подделкой User-Agent
- Защита от DDOS-GUARD: детекция по `<title>` и ожидание 5 сек
- **Возобновляемость**: при перезапуске подхватывает `visited` и `seen_categories`
- Использование сохранённой сессии `etm_state.json` (cookies после ручного входа)

### Запуск

```
cd "g:\Мой диск\___ETM___"
python deep_discover.py

```

### Результат

Файл `target_categories.json` — JSON-массив slug всех листовых категорий.

---

## Этап 2: Полный краулинг товаров

**Скрипт:** `parse_etm_full.py` (587 строк)

### Алгоритм

1. Загружает `target_categories.json`
2. Открывает браузер Playwright, получает `buildId` из `window.__NEXT_DATA__`
3. Для каждой категории:
   - GET `/_next/data/{buildId}/catalog/{slug}.json` — список товаров
   - Пагинация: если `total > 24`, подгружаются страницы 2..N
   - Извлекается иерархия из `seoTool.breadcrumb`
4. Для каждого товара:
   - GET `/_next/data/{buildId}/cat/nn/{gdscode}.json` — карточка товара
   - Извлекаются: `productCharacteristics`, `productDetails`, `productClassTree`
   - Скачиваются: `productCertificates.certificates` и `productCertificates.materials`
5. Данные сохраняются каждые 50 товаров (autosave)

### Ключевые функции

| **ФункцияНазначение**                 |                                                 |
| ------------------------------------- | ----------------------------------------------- |
| `load_progress()` / `save_progress()` | Резюмирование работы (5 попыток записи)         |
| `save_intermediate()`                 | Сохранение данных в Excel-файлы по 100 записей  |
| `download_file()`                     | Скачивание с дедупликацией по URL, лимитом 30MB |
| `fetch_category_products()`           | Пагинированная загрузка товаров категории       |
| `crawl_full()`                        | Главный async-цикл обхода                       |

### Механизмы защиты от сбоев

- **Resume**: `progress.json` хранит `completed_products`, `downloaded_urls`
- **Retry**: 3 попытки на каждый HTTP-запрос
- **buildId refresh**: при ошибке 404/429 перезагружается страница каталога
- **Rate-limit**: задержка 0.8 сек между товарами, 60 сек при 3x429
- **Дедупликация файлов**: один и тот же URL не скачивается повторно
- **Пропуск больших файлов**: >30 МБ не скачиваются
- **Пропуск видео/3D**: .mp4, .sdf, .stp и т.д.

### Формат имён скачанных файлов

```
{gdscode}_{type}_{index}_{name}.{ext}
Пример: 2222371_cert_1_ЕАЭС_RU_С-RU.АГ67.В.00287_25.pdf

```

### Запуск

```
cd "g:\Мой диск\___ETM___"
python parse_etm_full.py

```

### Результаты

| **ФайлСодержимое**                                 |                                                                                           |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `catalog_hierarchy.xlsx`                           | Код ETM, GDS код, наименование, категория, производитель, цена, ссылки на скачанные файлы |
| `technical_characteristics_1.xlsx` ... `_597.xlsx` | Технические характеристики товаров (по 100 записей в файле)                               |
| `downloads_full/`                                  | \~тысячи PDF-файлов (сертификаты, паспорта)                                               |
| `progress.json`                                    | Файл прогресса для возобновления                                                          |

---

## Этап 3: Верификация полноты

**Скрипт:** `verify_leftovers.py`

### Алгоритм

1. Загружает `progress.json` и `target_categories.json`
2. Для каждой категории проверяет, все ли товары из API присутствуют в `completed_products`
3. Отсутствующие товары записываются в `повторная проверка/missing_products.xlsx`

---

## Этап 4: Очистка

**Скрипт:** `cleanup_downloads.py`

- Удаляет файлы с расширениями `.sdf`, `.stp`, `.step` (3D-модели)
- Удаляет файлы ≥ 30 МБ

---

## Правила и инструкции пользователя

1. **Все действия с копиями**: оригинальные `technical_characteristics_*.xlsx` сохраняются; работа ведётся с копиями
2. **Нельзя удалять столбцы**: даже если у позиции нет значения в каком-то столбце, столбец остаётся
3. **Нельзя изменять значения**: данные остаются «как есть», без стандартизации и объединения столбцов-синонимов
4. **Сохранять все данные**: при обработке ни одна строка не должна быть потеряна

## Contents

- [02. Работа с таблицами технических характеристик](#02-)
  - [Цель](#h-2)
  - [Технологический стек](#-)
  - [Конвейер обработки](#--1)
  - [Скрипт 1: Базовое объединение (merge\_characteristics.py)](#-1-mergecharacteristicspy)
    - [Алгоритм](#-1)
    - [Обработка дубликатов имён файлов](#--2)
  - [Скрипт 2: Расширенное объединение с форматированием (merge\_format.py)](#-2-mergeformatpy)
    - [Дополнения к базовому скрипту](#--3)
    - [Формат ячеек с документами](#--4)
  - [Правила обработки таблиц (согласованные с пользователем)](#--5)
    - [Что НЕЛЬЗЯ делать:](#--6)
    - [Что НУЖНО делать:](#--7)
  - [Запуск](#-2)
    - [Базовое объединение (первые 100 файлов)](#-100-)
    - [Полное объединение с форматированием](#--8)
    - [Результат](#-3)
  - [Структура столбцов (типичная)](#--9)

# 02. Работа с таблицами технических характеристик

## Цель

Обработка 597 файлов `technical_characteristics_*.xlsx` — группировка по категориям, сортировка по иерархии каталога, форматирование и создание именованных книг Excel.

## Технологический стек

| **КомпонентБиблиотекаНазначение** |                      |                     |
| --------------------------------- | -------------------- | ------------------- |
| Чтение/запись Excel               | `pandas`, `openpyxl` | Основная обработка  |
| Форматирование                    | `openpyxl.styles`    | Шрифты, гиперссылки |

## Конвейер обработки

```
```

`technical_characteristics_1..597.xlsx(исходные, по 100 записей)`

`merge_characteristics.pyБазовое объединение`

`merge_format.pyРасширенное объединение + формат`

`Технические характеристики/*.xlsx по категориям`

---

## Скрипт 1: Базовое объединение (`merge_characteristics.py`)

### Алгоритм

1. Читает файлы `technical_characteristics_1.xlsx` ... `_100.xlsx`
2. Объединяет все строки в один DataFrame (`pd.concat`)
3. Группирует по столбцу `Категория` (или `Иерархия каталога`)
4. Для каждой группы:
   - Извлекает русское название из последней части иерархии
   - Удаляет полностью пустые столбцы (`dropna(axis=1, how='all')`)
   - Сортирует по `Иерархия каталога` и `Категория`
   - Сохраняет в отдельный файл `Технические характеристики/{Категория}.xlsx`

### Обработка дубликатов имён файлов

При совпадении имени файла добавляется суффикс `_1`, `_2` и т.д.

---

## Скрипт 2: Расширенное объединение с форматированием (`merge_format.py`)

### Дополнения к базовому скрипту

1. **Привязка документов**: для каждого товара через `catalog_hierarchy.xlsx` находятся скачанные файлы
2. **Определение типа документа** по имени файла:
   | **Паттерн в имени файлаТип документаСокращение** |                             |    |
   | ------------------------------------------------ | --------------------------- | -- |
   | `_cert_`                                         | Сертификат соответствия     | СС |
   | `_pass_`                                         | Паспорт                     | П  |
   | `руководство`                                    | Руководство по эксплуатации | РЭ |
   | `брошюра`                                        | Брошюра                     | Б  |
   | `_mat_`                                          | Материал                    | М  |
   | прочее                                           | Документ                    | Д  |
3. **Гиперссылки в Excel**: каждый документ представлен как кликабельная ссылка на файл
4. **Форматирование**: шрифт Roboto Condensed 11pt, цвет гиперссылок, выравнивание

### Формат ячеек с документами

Внутренний формат: `путь/к/файлу|SHORT:СС` При записи в Excel: ячейка показывает `СС` с гиперссылкой на файл.

---

## Правила обработки таблиц (согласованные с пользователем)

### Что НЕЛЬЗЯ делать:

1. ❌ Удалять столбцы — даже если они пустые для данной категории
2. ❌ Объединять столбцы-синонимы (напр. «Код ОКПД2» и «Код ОКПД 2») — оставляем как есть
3. ❌ Изменять/выдумывать значения — данные остаются строго из первоисточника
4. ❌ Удалять строки

### Что НУЖНО делать:

1. ✅ Группировать по `Категория` / `Иерархия каталога`
2. ✅ Сортировать внутри группы по иерархии
3. ✅ Называть каждую книгу русским именем категории
4. ✅ Добавлять столбцы с документами (гиперссылки)
5. ✅ Все изменения — только с копиями файлов

---

## Запуск

### Базовое объединение (первые 100 файлов)

```
cd "g:\Мой диск\___ETM___"
python merge_characteristics.py

```

### Полное объединение с форматированием

```
cd "g:\Мой диск\___ETM___"
python merge_format.py

```

### Результат

Папка `Технические характеристики/` — набор Excel-файлов, каждый из которых соответствует одной категории товаров, с отсортированными строками и гиперссылками на документы.

---

## Структура столбцов (типичная)

| **ГруппаСтолбцы**    |                                                                        |
| -------------------- | ---------------------------------------------------------------------- |
| Идентификация        | Код ETM, GDS код, Наименование                                         |
| Классификация        | Категория, Иерархия каталога, Код ОКПД2                                |
| Производство         | Производитель, Страна, Марка                                           |
| Физические           | Ед. измерения, Тип изделия, Форма, Цвет                                |
| Электрические        | Номинальное напряжение, Номинальный ток, Количество жил, Сечение жилы  |
| Материалы            | Материал жилы, Материал изоляции, Материал оболочки                    |
| Размеры/логистика    | Диаметр, Масса, Тип упаковки                                           |
| Условия эксплуатации | Диапазон рабочих температур, Минимальный радиус изгиба                 |
| Регламент            | Нормативный документ, Пожаробезопасность                               |
| Документы            | Сертификат соответствия, Паспорт, РЭ (гиперссылки)<br><br><br>Contents |

- [03. OCR-распознавание документов (RapidOCR)](#03-ocr-rapidocr)
  - [Цель](#h-2)
  - [Технологический стек](#-)
  - [Скрипты](#-1)
    - [document\_processor.py — базовый процессор](#documentprocessorpy-)
    - [process\_all\_documents.py — пакетный процессор (расширенная версия)](#processalldocumentspy-)
  - [Алгоритм извлечения текста из PDF](#-pdf)
    - [Ключевые решения:](#--1)
  - [Извлечение метаданных из текста](#--2)
    - [Определение типа документа](#--3)
    - [Определение номера документа](#--4)
    - [Определение дат](#--5)
  - [Формат переименования файлов](#--6)
    - [Очистка наименования](#--7)
    - [Очистка производителя](#--8)
  - [Запуск](#-2)
    - [Базовый (одиночный процессор)](#--9)
    - [Пакетный (все документы)](#--10)
  - [Результаты](#-3)
  - [Точность и флаги](#--11)
  - [Зависимости](#-4)

# 03. OCR-распознавание документов (RapidOCR)

## Цель

Локальное распознавание PDF-документов (сертификаты, декларации, паспорта) с помощью OCR для извлечения метаданных:

- Тип документа
- Номер документа
- Даты действия

## Технологический стек

| **КомпонентБиблиотекаНазначение** |                        |                                                |
| --------------------------------- | ---------------------- | ---------------------------------------------- |
| PDF-парсинг                       | `PyMuPDF` (`fitz`)     | Нативное извлечение текста + рендеринг страниц |
| OCR-движок                        | `rapidocr_onnxruntime` | Распознавание текста из изображений            |
| Данные                            | `pandas`               | Формирование сводной таблицы                   |

## Скрипты

### `document_processor.py` — базовый процессор

### `process_all_documents.py` — пакетный процессор (расширенная версия)

---

## Алгоритм извлечения текста из PDF

```
def extract_text_from_pdf(pdf_path):
    # 1. Попытка нативного извлечения текста (без OCR)
    doc = fitz.open(pdf_path)
    for page in doc:
        text += page.get_text()
    
    # 2. Если текста < 80 символов — это скан, запускаем OCR
    if len(text.strip()) < 80:
        for page in doc[:2]:  # первые 2 страницы
            pixmap = page.get_pixmap(dpi=150)
            img_bytes = pixmap.tobytes("png")
            result, _ = ocr_engine(img_bytes)
            # Собираем распознанный текст

```

### Ключевые решения:

- **DPI 150** — компромисс между качеством и скоростью
- **Первые 2 страницы** — метаданные обычно на первой странице
- **Порог 80 символов** — ниже этого считаем PDF «отсканированным»

---

## Извлечение метаданных из текста

### Определение типа документа

```
types_map = [
    ("сертификат соответствия", "Сертификат соответствия"),
    ("декларация о соответствии", "Декларация о соответствии"),
    ("информационное письмо", "Информационное письмо"),
    ("паспорт качества", "Паспорт качества"),
    ("паспорт безопасности", "Паспорт безопасности"),
    ("паспорт", "Паспорт"),
    ("техническое описание", "Техническое описание"),
    ("руководство по эксплуатации", "Руководство по эксплуатации"),
    ("инструкция", "Инструкция")
]

```

**Поиск**: первое совпадение в тексте (case-insensitive)

### Определение номера документа

1. **Приоритет**: ЕАЭС/ТС/RU номера — regex `((?:ЕАЭС|ТС|RU)\s*[A-Z0-9.\-\_\/]+...)`
2. **Запасной**: `(?:№|N|Номер)\s*([A-Za-zА-Яа-я0-9\-.\-\_\/]{3,30})`
3. **Default**: `б-н` (без номера)

### Определение дат

```
dates = re.findall(r'(\d{2}\.\d{2}\.\d{4})', text)
# Первая дата = "с", вторая = "по"

```

---

## Формат переименования файлов

```
{Очищенное_Наименование} {Тип_документа} №{Номер} с {Дата1} по {Дата2} {Производитель}.pdf

```

**Пример:**

```
Кабель ВВГнг(А)-LS 3х2,5 Сертификат соответствия №ЕАЭС_RU_С-RU.АБ01.В.00234_25 с 15.01.2025 по 14.01.2030 Кабельный Альянс.pdf

```

### Очистка наименования

```
def clean_name(name, mark):
    # Убираем длинные описания
    removals = ['для кабельной канализации', 'в бухте \d+м', 'безгалогеновая', ...]
    # Добавляем марку, если отсутствует

```

### Очистка производителя

```
def clean_manufacturer(mfg):
    # Убираем: ООО, ЗАО, ОАО, АО, кавычки

```

---

## Запуск

### Базовый (одиночный процессор)

```
cd "g:\Мой диск\___ETM___"
python document_processor.py

```

### Пакетный (все документы)

```
cd "g:\Мой диск\___ETM___"
python process_all_documents.py

```

## Результаты

| **ВыходОписание**       |                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| Переименованные PDF     | Файлы в `downloads_full/` или `Notebook LM OCR/`                                                   |
| `master_documents.xlsx` | Сводная таблица: КОД ETM, наименование, тип документа, номер, даты, точность, флаг ручной проверки |

## Точность и флаги

| **УровеньТочностьРучная проверка** |     |     |
| ---------------------------------- | --- | --- |
| Тип документа определён            | 98% | Нет |
| Тип = «Документ» (fallback)        | 80% | Да  |

---

## Зависимости

```
pip install PyMuPDF rapidocr_onnxruntime pandas openpyxl
```

| <br><br><br><br> |
| ---------------- |

## Contents

- [04. NotebookLM — пакетная обработка документов](#04-notebooklm-)
  - [Цель](#h-2)
  - [Технологический стек](#-)
  - [Архитектура](#-1)
  - [Скрипт: nlm\_5\_notebooks\_processor.py](#-nlm5notebooksprocessorpy)
    - [Шаг 1: Создание 5 блокнотов](#-1-5-)
    - [Шаг 2: Сбор всех файлов для обработки](#-2-)
    - [Шаг 3: Разбиение на батчи по 50 документов](#-3-50-)
    - [Шаг 4: Обработка каждого батча](#-4-)
      - [4.1 Загрузка источников](#41-)
      - [4.2 Установка системной инструкции (Persona)](#42-persona)
      - [Системная инструкция (Persona):](#-persona)
      - [4.3 Запрос к AI](#43-ai)
      - [4.4 Парсинг ответа](#44-)
      - [4.5 Переименование и копирование](#45-)
  - [Настройки и лимиты](#--1)
  - [Важные правила](#--2)
  - [CLI-команды NotebookLM (справочник)](#cli-notebooklm-)
  - [Запуск](#-2)
  - [Результаты](#-3)

# 04. NotebookLM — пакетная обработка документов

## Цель

Загрузка PDF-документов в Google NotebookLM (5 параллельных блокнотов), распознавание метаданных через Gemini и переименование файлов по результатам AI-анализа.

## Технологический стек

| **КомпонентИнструментНазначение** |                            |                                               |
| --------------------------------- | -------------------------- | --------------------------------------------- |
| CLI-клиент                        | `notebooklm` (CLI)         | Управление блокнотами, источниками, запросами |
| MCP-сервер                        | `StitchMCP` / `notebooklm` | Альтернативный интерфейс через MCP            |
| Параллелизм                       | `ThreadPoolExecutor`       | 5 параллельных workers                        |
| Данные                            | `pandas`                   | Сводная таблица                               |

## Архитектура

```
```

`downloads_full/PDF-документы`

`nlm_5_notebooks_processor.py`

`NLM_Worker_Pool_1Блокнот 1`

`NLM_Worker_Pool_2Блокнот 2`

`NLM_Worker_Pool_3Блокнот 3`

`NLM_Worker_Pool_4Блокнот 4`

`NLM_Worker_Pool_5Блокнот 5`

`Gemini AI анализ`

`Notebook LM OCR/Переименованные PDF`

`master_documents.xlsxСводная таблица`

---

## Скрипт: `nlm_5_notebooks_processor.py`

### Шаг 1: Создание 5 блокнотов

```
for w_idx in range(1, 6):
    title = f"NLM_Worker_Pool_{w_idx}"
    info = run_cmd(["notebooklm", "create", title, "--json"])
    workers.append({"id": info["notebook"]["id"], "name": title})

```

### Шаг 2: Сбор всех файлов для обработки

- Из `Технические характеристики/*.xlsx` извлекаются коды ETM
- Через `catalog_hierarchy.xlsx` → маппинг кодов на файлы
- Файлы проверяются на существование в `downloads_full/`

### Шаг 3: Разбиение на батчи по 50 документов

```
batch_size = 50
batches = [all_items[i:i + batch_size] for i in range(0, len(all_items), batch_size)]

```

### Шаг 4: Обработка каждого батча

#### 4.1 Загрузка источников

```
notebooklm source add <file_path> -n <notebook_id> --timeout 120 --json
notebooklm source wait <source_id> -n <notebook_id> --timeout 120

```

#### 4.2 Установка системной инструкции (Persona)

**ВАЖНО**: Инструкция устанавливается через `--persona`, а НЕ через обычный чат! Доступна только после загрузки хотя бы одного источника.

```
notebooklm configure --persona "<ИНСТРУКЦИЯ>" -n <notebook_id> --json

```

#### Системная инструкция (Persona):

```
Ты — высокоточный аналитик технической документации ETM.
Твоя задача — анализировать прикрепленные источники (сертификаты, паспорта, инструкции)
и строго извлекать структуру данных.
Формат ответа: строго JSON-массив без markdown-тегов:
[
  {
    "file_name": "имя_файла.pdf",
    "doc_type": "Тип документа (Сертификат / Декларация / Паспорт / РЭ / Информ. письмо)",
    "doc_num": "Номер документа без №. Для ЕАЭС — полный номер. При отсутствии — б-н",
    "date1": "Дата начала действия (DD.MM.YYYY)",
    "date2": "Дата окончания действия (DD.MM.YYYY)"
  }
]

```

#### 4.3 Запрос к AI

```
notebooklm ask "Извлеки метаданные всех прикрепленных документов в формате JSON" -n <notebook_id> --json --timeout 300

```

#### 4.4 Парсинг ответа

````
resp = run_cmd(["notebooklm", "ask", query_prompt, "-n", worker_id, "--json"])
# Очистка от ```json ... ``` обёртки
parsed = json.loads(text_out.strip())
meta_by_file = {entry["file_name"]: entry for entry in parsed}

````

#### 4.5 Переименование и копирование

```
new_filename = f"{clean_name} {doc_type} №{doc_num} с {date1} по {date2} {manufacturer}.pdf"
shutil.copy2(original_path, os.path.join(output_folder, new_filename))

```

---

## Настройки и лимиты

| **ПараметрЗначение**                |                                     |
| ----------------------------------- | ----------------------------------- |
| Размер батча                        | 50 документов                       |
| Параллельных workers                | 5                                   |
| Лимит блокнота NotebookLM           | 300 источников                      |
| Timeout загрузки                    | 120 сек                             |
| Timeout запроса                     | 300 сек                             |
| Удаление источников после обработки | **НЕТ** (сохраняются для инспекции) |

---

## Важные правила

1. **Источники НЕ удаляются** — пользователь хочет видеть ответы NotebookLM в веб-интерфейсе
2. **Лимит 300 документов на блокнот** — при достижении лимита создаётся новый блокнот
3. **Persona ≠ Chat** — инструкция ставится через `configure --persona`, а не отправляется в чат
4. **Доступ к Persona** открывается только после загрузки хотя бы 1 источника

---

## CLI-команды NotebookLM (справочник)

| **КомандаНазначение**                           |                                 |
| ----------------------------------------------- | ------------------------------- |
| `notebooklm create <title> --json`              | Создать блокнот                 |
| `notebooklm source add <file> -n <id> --json`   | Добавить источник               |
| `notebooklm source wait <src_id> -n <id>`       | Ожидать индексации              |
| `notebooklm source list -n <id> --json`         | Список источников               |
| `notebooklm configure --persona <text> -n <id>` | Установить системную инструкцию |
| `notebooklm ask <query> -n <id> --json`         | Запрос к AI                     |

---

## Запуск

```
cd "g:\Мой диск\___ETM___"
python nlm_5_notebooks_processor.py

```

## Результаты

| **ВыходПуть**         |                                                  |
| --------------------- | ------------------------------------------------ |
| Переименованные PDF   | `Notebook LM OCR/`                               |
| Сводная таблица       | `master_documents.xlsx`                          |
| Блокноты в NotebookLM | 5 штук (NLM\_Worker\_Pool\_1..5)<br><br>Contents |

- [05. Переименование документов](#05-)
  - [Цель](#h-2)
  - [Формат нового имени файла](#-)
    - [Примеры](#-1)
  - [Алгоритм формирования имени](#--1)
    - [1. Очищенное наименование (из каталога ETM)](#1-etm)
    - [2. Очистка производителя](#2-)
    - [3. Тип документа (из OCR или AI)](#3-ocr-ai)
    - [4. Номер документа](#4-)
    - [5. Даты](#5-)
    - [6. Санитизация](#6-)
  - [Два режима переименования](#--2)
    - [Режим 1: RapidOCR (локальный)](#-1-rapidocr-)
    - [Режим 2: NotebookLM (AI)](#-2-notebooklm-ai)
  - [Сводная таблица master\_documents.xlsx](#-masterdocumentsxlsx)
  - [Правила (установленные пользователем)](#--3)

# 05. Переименование документов

## Цель

Переименование PDF-файлов из `downloads_full/` в человекочитаемый формат на основе данных из каталога ETM и OCR/AI-распознавания.

## Формат нового имени файла

```
{Очищенное_Наименование} {Тип_документа} №{Номер_документа} с {Дата_начала} по {Дата_окончания} {Производитель}.pdf

```

### Примеры

| **БылоСтало**                                     |                                                                                                                                         |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `2066580_cert_1_ЕАЭС_RU_С-RU.АГ67.В.00287_25.pdf` | `Кабель ВВГнг(А)-LS 3x1,5ок(N,PE)-0,66 Сертификат соответствия №ЕАЭС_RU_С-RU.АГ67.В.00287_25 с 09.09.2015 по 29.09.2025 Кабэлектро.pdf` |
| `2066580_mat_1_TDS.pdf`                           | `Кабель ВВГнг(А)-LS 3x1,5ок(N,PE)-0,66 Документ б-н Кабэлектро.pdf`                                                                     |

---

## Алгоритм формирования имени

### 1. Очищенное наименование (из каталога ETM)

```
def clean_name(name, mark):
    # Сокращения длинных описаний
    "Кабель пожарно-охранной сигнализации" → "Кабель"
    "Кабель экранированный передачи данных" → "Кабель"
    
    # Удаление мусорных описаний
    удаляется: "для кабельной канализации", "в бухте \d+м", "безгалогеновая",
               "цвет {цвет}", "qmm", "grey", "black", "blue", "red"
    
    # Добавление марки, если отсутствует в наименовании
    if mark not in name:
        name += " " + mark

```

### 2. Очистка производителя

```
def clean_manufacturer(mfg):
    # Убираются: ООО, ЗАО, ОАО, АО, кавычки «» "" ''

```

### 3. Тип документа (из OCR или AI)

Определяется по тексту внутри PDF (см. документацию 03 и 04).

### 4. Номер документа

- ЕАЭС/ТС/RU номера: полный формат
- Другие: через `№` или `N` или `Номер`
- Отсутствует: `б-н` (без номера)
- Символ `/` заменяется на `_` (запрещён в именах файлов)

### 5. Даты

Формат: `с DD.MM.YYYY по DD.MM.YYYY`

### 6. Санитизация

```
# Удаление запрещённых символов Windows
new_base = re.sub(r'[/\\:*?"<>|]', '_', new_base)
# Ограничение длины до 200 символов
new_filename = f"{new_base[:200]}.pdf"

```

---

## Два режима переименования

### Режим 1: RapidOCR (локальный)

- Скрипт: `process_all_documents.py`
- Использует RapidOCR для извлечения текста
- **Копирует** файл в `Notebook LM OCR/` с новым именем
- Оригинал остаётся нетронутым

### Режим 2: NotebookLM (AI)

- Скрипт: `nlm_5_notebooks_processor.py`
- Загружает PDF в NotebookLM, AI (Gemini) анализирует содержимое
- **Копирует** файл в `Notebook LM OCR/` с новым именем
- Более высокая точность (99% vs 98%)

---

## Сводная таблица `master_documents.xlsx`

| **СтолбецОписание**           |                                  |
| ----------------------------- | -------------------------------- |
| КОД ETM                       | Код позиции в каталоге           |
| Наименование                  | Оригинальное наименование        |
| Категория                     | Категория каталога               |
| Производитель                 | Очищенное название производителя |
| Марка или тип                 | Марка или тип изделия            |
| (Распознанный) Тип документа  | Определённый через OCR/AI тип    |
| Номер документа               | Извлечённый номер                |
| Дата 1 / Дата 2               | Даты действия                    |
| Процент точности, уверенности | 98%/99% или 75%/80%              |
| Нужна ли ручная проверка      | Да/Нет                           |

---

## Правила (установленные пользователем)

1. ❌ Нельзя использовать «Документ б-н» вместо «Сертификат соответствия» — OCR должен определять тип
2. ✅ Каждый документ должен пропускаться через OCR
3. ✅ Оригиналы файлов сохраняются (работа с копиями)
4. ✅ Символ `/` в номерах заменяется на `_`

## Contents

- [06. Полный пайплайн проекта ETM — обзор и конфигурация](#06-etm-)
  - [Общая архитектура проекта](#-)
  - [Текущее состояние (снимок данных)](#--1)
  - [Все скрипты проекта (справочник)](#--2)
  - [Структура папок](#--3)
  - [Зависимости Python](#-python)
  - [Ключевые конфигурационные файлы](#--4)
    - [target\_categories.json](#targetcategoriesjson)
    - [progress.json](#progressjson)
    - [etm\_state.json](#etmstatejson)
  - [Как запустить весь пайплайн с нуля](#--5)

# 06. Полный пайплайн проекта ETM — обзор и конфигурация

## Общая архитектура проекта

```
```

`Этап 5: OCR + Переименование`

`Этап 4: Обработка таблиц`

`Этап 3: Верификация`

`Этап 2: Краулинг`

`Этап 1: Обнаружение`

`deep_discover.py`

`target_categories.json`

`parse_etm_full.py`

`catalog_hierarchy.xlsx`

`technical_characteristics_1..597.xlsx`

`downloads_full/ (20,858 PDF)`

`verify_leftovers.py`

`повторная проверка/`

`cleanup_downloads.py`

`merge_format.py`

`Технические характеристики/ (66 файлов)`

`process_all_documents.py(RapidOCR)`

`nlm_5_notebooks_processor.py(NotebookLM AI)`

`Notebook LM OCR/Переименованные PDF`

`master_documents.xlsx`

---

## Текущее состояние (снимок данных)

| **РесурсКоличество**             |                                                      |
| -------------------------------- | ---------------------------------------------------- |
| Исходные таблицы характеристик   | 597 файлов (`technical_characteristics_1..597.xlsx`) |
| Скачанные PDF-документы          | 20,858 файлов                                        |
| Категорийные Excel-файлы         | 66 файлов в `Технические характеристики/`            |
| Обработанные через OCR           | 91 файл в `Notebook LM OCR/`                         |
| Записей в master\_documents.xlsx | 330 строк                                            |

---

## Все скрипты проекта (справочник)

| **СкриптНазначениеЭтап**       |                                          |   |
| ------------------------------ | ---------------------------------------- | - |
| `deep_discover.py`             | BFS-обход категорий сайта ETM            | 1 |
| `find_all.py`                  | Поиск всех ссылок на странице            | 1 |
| `find_links.py`                | Извлечение ссылок на товары              | 1 |
| `find_root_category.py`        | Определение корневых категорий           | 1 |
| `discover_fast.py`             | Быстрое обнаружение категорий            | 1 |
| `discover_leaves.py`           | Выявление листовых категорий             | 1 |
| `parse_etm.py`                 | Базовый парсер (ранняя версия)           | 2 |
| `parse_etm_full.py`            | Полный краулер с пагинацией и retry      | 2 |
| `login_etm.py`                 | Авторизация на сайте ETM                 | 2 |
| `inspect_product.py`           | Инспекция карточки товара                | 2 |
| `verify_leftovers.py`          | Верификация полноты скачивания           | 3 |
| `cleanup_downloads.py`         | Удаление мусорных файлов                 | 3 |
| `check_progress.py`            | Проверка прогресса парсинга              | 3 |
| `analyze_headers.py`           | Анализ заголовков таблиц                 | 4 |
| `merge_characteristics.py`     | Базовое объединение таблиц               | 4 |
| `merge_format.py`              | Расширенное объединение + форматирование | 4 |
| `document_processor.py`        | OCR-обработка документов (одиночный)     | 5 |
| `process_all_documents.py`     | Пакетная OCR-обработка всех документов   | 5 |
| `nlm_5_notebooks_processor.py` | NotebookLM AI-обработка (5 параллельных) | 5 |
| `notebooklm_processor.py`      | NotebookLM обработчик (ранняя версия)    | 5 |

---

## Структура папок

```
g:\Мой диск\___ETM___\
├── downloads_full/              # 20,858 скачанных PDF-документов
├── Технические характеристики/  # 66 файлов по категориям
├── Notebook LM OCR/             # Переименованные PDF после OCR/AI
├── Документация процессов/      # Документация (этот файл)
├── повторная проверка/          # Результаты верификации
├── Распознование документов/    # OCR-репозитории (MinerU, RapidOCR)
│
├── catalog_hierarchy.xlsx       # Каталог товаров
├── master_documents.xlsx        # Сводная таблица документов
├── progress.json                # Прогресс краулинга (resume)
├── target_categories.json       # Список листовых категорий
├── etm_state.json               # Сессия браузера (cookies)
├── report_full.txt              # Лог работы краулера
│
├── technical_characteristics_1.xlsx    # Тех. характеристики (100 записей)
├── ...
├── technical_characteristics_597.xlsx  # Последний файл
│
├── parse_etm_full.py            # Главный краулер
├── process_all_documents.py     # Пакетный OCR-процессор
├── nlm_5_notebooks_processor.py # NotebookLM AI-процессор
├── merge_format.py              # Объединение таблиц
└── ... (утилитарные скрипты)

```

---

## Зависимости Python

```
pip install pandas openpyxl playwright requests PyMuPDF rapidocr_onnxruntime
pip install notebooklm  # CLI для NotebookLM
playwright install chromium

```

---

## Ключевые конфигурационные файлы

### `target_categories.json`

JSON-массив slug-ов листовых категорий ETM. Пример:

```
[
    "110502_kabeli_silovye_alyuminievye",
    "110505_kabeli_pvh_silovye",
    "110510_kabeli_silovye_bronirovannyje"
]

```

### `progress.json`

```
{
    "completed_products": ["2066580", "2066581", ...],
    "completed_categories": [...],
    "downloaded_urls": {
        "https://...cert.pdf": "downloads_full/2066580_cert_1_name.pdf"
    }
}

```

### `etm_state.json`

Сохранённое состояние браузера Playwright (cookies, localStorage) для авторизованного доступа к ETM.

---

## Как запустить весь пайплайн с нуля

```
cd "g:\Мой диск\___ETM___"

# 1. Обнаружение категорий
python deep_discover.py

# 2. Полный краулинг
python parse_etm_full.py

# 3. Верификация
python verify_leftovers.py
python cleanup_downloads.py

# 4. Объединение таблиц
python merge_format.py

# 5a. OCR-обработка (локальная)
python process_all_documents.py

# 5b. AI-обработка (NotebookLM)
notebooklm login
python nlm_5_notebooks_processor.py


Contents
```

- [07. Вспомогательные утилиты и диагностика](#07-)
  - [Утилиты подсчёта и анализа](#-)
    - [analyze\_headers.py](#analyzeheaderspy)
    - [check\_progress.py](#checkprogresspy)
    - [count\_catalog.py](#countcatalogpy)
    - [extract\_meta.py](#extractmetapy)
  - [Утилиты тестирования](#--1)
    - [test\_small.py](#testsmallpy)
    - [test\_connection.py](#testconnectionpy)
    - [test\_api.py](#testapipy)
    - [test\_category.py / test\_tree.py](#testcategorypy-testtreepy)
  - [Утилиты работы с файлами](#--2)
    - [cleanup\_downloads.py](#cleanupdownloadspy)
    - [reset\_progress.py](#resetprogresspy)
  - [Команды PowerShell для диагностики](#-powershell-)
    - [Подсчёт файлов по времени создания](#--3)
    - [Подсчёт PDF-файлов](#-pdf-)
    - [Проверка размера папки](#--4)
    - [Поиск файлов по паттерну](#--5)
  - [Диагностика NotebookLM](#-notebooklm)
    - [Проверка статуса авторизации](#--6)
    - [Список блокнотов](#--7)
    - [Список источников в блокноте](#--8)
    - [Ре-авторизация](#--9)
  - [Типичные проблемы и решения](#--10)

# 07. Вспомогательные утилиты и диагностика

## Утилиты подсчёта и анализа

### `analyze_headers.py`

**Назначение**: Извлечь заголовки столбцов из всех Excel-таблиц для анализа структуры.

```
# Читает technical_characteristics_1..10.xlsx
# Сохраняет результат в headers.json
for i in range(1, 11):
    df = pd.read_excel(file_path, nrows=0)
    data[filename] = list(df.columns)

```

**Результат**: `headers.json` — JSON-словарь {имя\_файла: [список\_столбцов]}

---

### `check_progress.py`

**Назначение**: Быстрая проверка количества обработанных товаров.

```
progress = json.load("progress.json")
print(f"Completed products: {len(progress['completed_products'])}")

```

---

### `count_catalog.py`

**Назначение**: Подсчёт позиций в каталоге по категориям.

---

### `extract_meta.py`

**Назначение**: Извлечение метаданных из JSON Next.js API ответов.

---

## Утилиты тестирования

### `test_small.py`

**Назначение**: Тестовый парсинг 2-3 категорий для проверки работоспособности перед полным запуском.

### `test_connection.py`

**Назначение**: Проверка доступности сайта ETM и DDOS-GUARD.

### `test_api.py`

**Назначение**: Тестирование API-эндпоинтов ETM.

### `test_category.py` / `test_tree.py`

**Назначение**: Тестирование извлечения иерархии и дерева категорий.

---

## Утилиты работы с файлами

### `cleanup_downloads.py`

**Назначение**: Удаление ненужных файлов из `downloads_full/`.

**Критерии удаления**:

- Расширения: `.sdf`, `.stp`, `.step` (3D-модели)
- Размер: ≥ 30 МБ

### `reset_progress.py`

**Назначение**: Сброс прогресса для перезапуска краулинга с нуля.

⚠️ **ВНИМАНИЕ**: Удаляет `progress.json` — используйте только если точно хотите начать заново.

---

## Команды PowerShell для диагностики

### Подсчёт файлов по времени создания

```
Get-ChildItem -Path 'g:\Мой диск\___ETM___\downloads_full' -File |
  Group-Object { $_.CreationTime.ToString('yyyy-MM-dd HH:00') } |
  Select-Object Count, Name | Sort-Object Name

```

### Подсчёт PDF-файлов

```
(Get-ChildItem -Path 'g:\Мой диск\___ETM___\downloads_full' -Filter *.pdf).Count

```

### Проверка размера папки

```
(Get-ChildItem -Path 'g:\Мой диск\___ETM___\downloads_full' -Recurse |
  Measure-Object -Property Length -Sum).Sum / 1GB

```

### Поиск файлов по паттерну

```
Get-ChildItem -Path 'g:\Мой диск\___ETM___\downloads_full' -Filter '*cert*' | Measure-Object

```

---

## Диагностика NotebookLM

### Проверка статуса авторизации

```
notebooklm doctor

```

### Список блокнотов

```
notebooklm list --json

```

### Список источников в блокноте

```
notebooklm source list -n <notebook_id> --json

```

### Ре-авторизация

```
notebooklm login
# Откроется окно браузера для входа в Google

```

---

## Типичные проблемы и решения

| **ПроблемаРешение**                 |                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| DDOS-GUARD на ETM                   | Скрипт ждёт 5-10 сек, затем повторяет. При частых блокировках — увеличить задержку |
| 429 Rate Limit                      | Автоматическое ожидание 12 сек (или 60 сек при 3 подряд)                           |
| buildId устарел                     | Автоматическая перезагрузка страницы каталога                                      |
| Файл заблокирован (PermissionError) | Retry через 2 сек (Excel может быть открыт)                                        |
| NotebookLM CSRF error               | `notebooklm login` для обновления сессии                                           |
| OCR не распознаёт текст             | Скан плохого качества — файл помечается как «Документ б-н»                         |
| Кодировка в PowerShell              | Скрипты используют `io.TextIOWrapper(..., encoding='utf-8')`                       |

---

**Assistant:**

Да, контекст теперь восстановлен полностью. В нём есть важные зафиксированные решения, которые нельзя потерять при дальнейшем проектировании сайта и кейсов.

Главное по ETM я понимаю так:

```text
ETM
│
├── 597 исходных technical_characteristics_*.xlsx
│       ↓
├── обработка / группировка
│       ↓
├── Технические характеристики/
│      └── 66 категорийных книг
│
├── catalog_hierarchy.xlsx
│       ↓
├── downloads_full/
│      └── 20 858 PDF на зафиксированном снимке проекта
│
├── OCR / document extraction
│       ├── PyMuPDF
│       ├── RapidOCR
│       ├── MinerU / OpenDataLoader / Unlimited-OCR
│       └── NotebookLM + Gemini
│
├── metadata extraction
│       ├── название
│       ├── марка
│       ├── тип документа
│       ├── номер
│       ├── дата 1
│       ├── дата 2
│       └── производитель
│
├── Notebook LM OCR/
│       └── переименованные копии
│
└── master_documents.xlsx
```

И отдельно зафиксированы правила таблиц:

- исходники не изменять, работать с копиями;
- строки не удалять;
- столбцы не удалять только потому, что в конкретной категории они пустые;
- структуру исходных данных не «придумывать» и не смешивать столбцы-синонимы;
- книги группировать по категориям/иерархии;
- названия книг делать понятными и русскими;
- документы связывать с позициями гиперссылками;
- марка изделия должна сохраняться в очищенном названии;
- `/` в номере документа заменять на `_`;
- нельзя автоматически писать `Документ б-н`, если по содержимому реально определяется, что это сертификат, паспорт и т. п.;
- каждый документ должен проходить распознавание;
- неоднозначные результаты должны попадать в ручную проверку;
- NotebookLM используется как отдельный слой анализа, с батчами по 50 документов и сохранением источников для проверки.

И самое важное для будущего сайта: этот проект нельзя показывать как просто **«парсер ETM»**.

По фактической архитектуре это:

> **End-to-end pipeline сбора, структурирования, документного анализа и нормализации данных.**

То есть визуально его стоит показывать примерно так:

```text
                    ETM
                     │
             ┌───────▼───────┐
             │ Catalog Crawl │
             └───────┬───────┘
                     │
          ┌──────────▼──────────┐
          │ Product Data        │
          │ Characteristics     │
          │ Categories          │
          └──────────┬──────────┘
                     │
             ┌───────▼───────┐
             │ PDF Documents │
             └───────┬───────┘
                     │
          ┌──────────▼──────────┐
          │ OCR / Document NLP  │
          └──────────┬──────────┘
                     │
       ┌─────────────▼─────────────┐
       │ Metadata Normalization    │
       └─────────────┬─────────────┘
                     │
          ┌──────────▼──────────┐
          │ Master Data / Excel │
          └──────────┬──────────┘
                     │
             ┌───────▼───────┐
             │ QA / Validation│
             └───────────────┘
```

А рядом с этим уже можно показывать конкретные артефакты:

**597 → 66 → 20 858 → OCR → master dataset**

При этом эти числа нужно называть именно **снимком состояния проекта на соответствующем этапе**, а не универсальными характеристиками всей системы. В твоей переписке встречаются разные промежуточные состояния, поэтому в сайте нельзя бездумно объединить их в одну статистику.

### Есть ещё одна важная вещь

Твой самый интересный материал сейчас даже не ETM сам по себе, а **связь всех проектов в одну архитектуру автоматизации ПТО**:

```text
П / РД
   │
   ▼
Power Query
   │
   ▼
СРАВНЕНИЕ
   │
   ▼
Группировка позиций
   │
   ▼
ШАХМАТКА ИД
   │
   ├── статусы документов
   ├── оригиналы
   ├── ЖВК
   ├── ОЖР
   ├── ИС
   └── АОСР
          │
          ▼
        CSV
          │
          ▼
       EXON JVK
          │
          ▼
         EXON
```

А ETM — это уже отдельный upstream data-engineering кейс:

```text
Web source
   ↓
Crawler
   ↓
Structured catalog
   ↓
Documents
   ↓
OCR / LLM
   ↓
Normalized dataset
```

Именно это позволит сделать твой сайт не «резюме со списком Excel / Python / AutoCAD», а **портфолио инженерных систем, которые ты реально создавал для решения рабочих задач**. memcite

---

**User:**

у меня куча собранных паспортов и Сертификат соответствия для различных материалов, выгрузил так же все Паспорт качества ДКС и в целом накапливаю базу своих паспортов и сертификатов, в основном паспорта, и прочее что ноебходимо в работе пто
привожу всё к единомк образу чтобы поиск с помощью моего мини проекта
поиск нужных документов по спецификаци помогал собирать паспорта Сертификат соответствия и  прочее быстрее
import os
import json
import re
import difflib
import time
EN_TO_RU = {
'A': 'А', 'a': 'а', 'B': 'В', 'C': 'С', 'c': 'с', 'E': 'Е', 'e': 'е',
'H': 'Н', 'K': 'К', 'k': 'к', 'M': 'М', 'O': 'О', 'o': 'о', 'P': 'Р',
'p': 'р', 'T': 'Т', 'X': 'Х', 'x': 'х', 'Y': 'У', 'y': 'у'
}
def normalize_string(s):
s = s.lower()
for en_char, ru_char in EN_TO_RU.items():
s = s.replace(en_char.lower(), ru_char.lower())
if s.endswith('.pdf'):
s = s[:-4]
# Keep alphanumeric characters and some punctuation like - or . or / or x (cross)
# But clean others
s = re.sub(r'[^a-zа-я0-9\s-./]', ' ', s)
s = ' '.join(s.split())
return s
def get_tokens(s):
# Get significant tokens (alphanumeric strings, length >= 2)
tokens = re.findall(r'[a-zа-я0-9-./]{2,}', s)
return set(tokens)
List of positions
positions = [
"Специализированная рабочая станция для отображения камер высокого разрешения. Подключение до 4-х мониторов (DP+2xHDMI+DVI). Настольное исполнение. Потребляемая мощность 300Вт.В комплекте поставки: клавиатура + оптический манипулятор ("мышь"). SecurOS-IVS-WSN-AO.DRPNKLKFIM-4",
"Монитор 27" 27" Xiaomi 2K Monitor A27Qi, 2560x1440, IPS, 100Гц, 1хHDMI, 1хDP, черный.",
"Кронштейн для телевизора Onkron G150 для мониторов",
"Источник бесперебойного питания, 220В, 2000 ВА (1800 Вт) онлайн двойного преобразования с напольной установкой",
"Опора вертикальной установки (к-кт 4 шт, 4U) (ОР0002.002);",
"Корпус навесной CE c М/П ВхШхГ 500x400x200 мм R5CE0542",
"Комплект крепления на столб для навесных и клеммных корпусов, ширина корпуса 300 мм R5FB300",
"Уличный PoE удлинитель Ethernet, PoE E-PoE/1W",
"ТЕЛКОМ ТСМ-42.8.8-П2П.9005М Шкаф напольный 42U 800x800х1987мм (ШхГхВ) телекоммуникационный 19", передняя дверь перфорированная - задняя дверь перфорированная распашная 2-х створчатая, цвет черный (RAL9005М) (5 мест)",
"ТЕЛКОМ ВМ-K-3-Т.9005 Вентиляторный модуль охлаждения (3 вентилятора) монтаж в крышу для напольных шкафов с терморегулятором (термостат 0-60°C), цвет чёрный (RAL9005)",
"ТЕЛКОМ ОКВК.42.9005М Организатор кабельный вертикальный с крышкой в шкаф 42U шириной 800мм, металлический, цвет черный (RAL9005М)",
"ТЕЛКОМ ОКВ.42.75.9005М Органайзер кабельный вертикальный в шкаф 42U, ширина 75мм, металлический с окнами, цвет черный (RAL9005М)",
"Горизонтальный организатор 19", 1U, щеточный ввод, черный 25B-1U-21BL",
"Шина заземления 19" (500 мм), 20 точек, 5 × 15 мм 60A-14-11GR",
"Набор проводов заземления, 4 провода 400 мм × 4,0 кв.мм, 4 провода 800 мм × 4,0 кв.мм 60A-14-14GR",
"Патч-панель высокой плотности 19", 1U, 48 портов RJ-45, категория 5e, Dual IDC",
"Устройство грозозащиты для локальной вычислительной сети на 16 портов (скорость до 1000 Мб/с) с защитой линий PoE. SP-IP16/1000PR",
"Ethernet-коммутатор, 48 портов 10/100/1000 Base-T (PoE/PoE+), 4 порта 10Gbase-R (SFP+/1000Base-X (SFP), L3, 2 слота для модулей питания MES2348P",
"Модуль питания, 220V AC, 950W PM950-220/56",
"SFP+ модуль, 10G, 2 волокна, TX/RX 1310нм, 2км, LC RSM10D3L2",
"Источник бесперебойного питания Online 3000ВА/2700Вт PT0030.008.005",
"Батарейный модуль PTB0030.008.005",
"Сетевая карта мониторинга ОР0001.101",
"Направляющие в стойку OP0002.001",
"Блок розеток Rem-10 с выкл., 8 Sсhuko, 10 A, алюм., 19", шнур 1.8 м. IEC 60320 C14. R-10-8S-V-440-1.8",
"Шнур питания с заземлением R-10-Cord-C13-C14-1.8",
"Выключатель нагрузки 2P 32А ВН-63N EKF PROxima S63232",
"Панель 19” с DIN-рейкой 3U, 22 модуля, черный 60A-42-03-11BL",
"Шкаф Racknet S3000 42U 800 × 1000, передняя дверь перфорированная двустворчатая, задняя дверь перфорированная двустворчатая, черный 60F-42-8A-35BL",
"Модуль вентиляторный потолочный, 3 вентилятора, термореле, 3 положения, черный 60A-90-11-30BL",
"Вертикальный кабельный лоток, 42U 300 × 30, серия S3000 и D9000 60A-11-63-33BL",
"Вертикальный организатор с крышкой, 42U, серия S3000 (2 шт), для шкафов шириной 800 мм 60A-18-42-01-31BL",
"Набор для крепления лотков к крыше шкафов, высота 50 мм, D9000/S3000 60A-31-08-33BL",
"Патч-панель высокой плотности 19", 1U, 48 портов RJ-45, категория 5e, Dual IDC PLHD-48-Cat.5e-Dual IDC-1U",
"L3 коммутатор уровня агрегации/ядра, 1x10/100/1000BASE-T (ООВ), 32x10GBASE-R (SFP+)/1000BASE-X (SFP), коммутатор L3, 2 слота для модулей питания + по 2 блока питания Модуль питания PM160-220/12, 220V AC, 160W. MES5332A",
"Модуль питания PM160-220/12",
"SFP module, медь, 1G, 100м, RJ45 RSM1T",
"SFP+ DAC пассивный кабель 1м FH-DP1T30SS01",
"Сервисный маршрутизатор ESR-200: 4 х Gigabit Ethernet (RJ-45), 4x Combo Gigabit Ethernet (RJ-45/SFP) Предоставление сервисов NAT, Firewall, функции L2 и L3 маршрутизатора ESR-200",
"KVM консоль ATEN CL1000M/ CL1000M-ATA-RG CL1000M",
"KVM кабель ATEN / 2L-5202UP",
"Видеосервер. Специализированный сервер объектового контроля / удаленная работа с системой через LAN 2x1Gbit Ethernet, 2x10Ge SFP+ / накопители под ОС SSD 480GB х 2 (Raid 1) / хранение видеоархива в течение 31 суток, поток ~ 4Мбит/с на канал для камер 2Мп, поток ~ 8Мбит/с на канал для камер 4Мп, поток ~ 9Мбит/с на канал для камер 5Мп, постоянный режим записи / отказоустойчивый дисковый массив суммарным объемом 252Тб HDD RAID6 в базовой комплектации / аппаратный RAID контроллер SAS/SATA, горячая замена дисков, вентиляторов и резервирование блоков питания, система самодиагностики / установка в 19» стойку (рельсы/ручки в комплекте, высота не более 4U) / 220В, 50Гц / размещение в телекоммуникационных шкафах (стойках) глубиной не менее 1000мм / Максимальная потребляемая мощность 800Вт; USB-Ключ аппаратной защиты «Guardant» – 1шт / Предустановленная операционная система / В комплекте поставки: клавиатура + оптический манипулятор («мышь»). Комплект предустановленного программного обеспечения. Интеграция с ЕЦХД по второму типу интеграции SecurOS-IVS-NVR-Industrial (H.712)-AO.DRPNKLKFIM-140/1500/AL2-252000R6-W",
"ИБП онлайн двойного преобразования, 6000 ВА, 19" слот для карты удаленного доступа РТ0060.016.002",
"Телескопические направляющие (2 шт.) ОР0002.001",
"SNMP карта v101 (1ф ИБП) ОР0001.101",
"Батарейный модуль 5/6/10kVA, с АКБ 9Ач (10лет) РТВ0100.016.005",
"IP-камера, уличная, цилиндрическая, 5Мп, 2.7-13.5 мм мм, 25 к/с NIC-5-BUL-MOTO-RUS-5-1281",
"Монтажная коробка JB-01 Optimus",
"Кронштейн на столб BR/0201",
"IP-камера, внутренняя, купольная, 2Мп, 2.7-13.5 мм, 30 к/с NIC-2-DOM-MOTO-RUS-5-1281",
"Настенный кронштейн AV-BWD 2F",
"IP-камера, внутренняя, купольная, 4Мп, 2.8 мм, 30 к/с NIC-4-DOM-FIX-RUS-1-1281",
"Инжектор PoE Midspan-1/652G",
"Кабель передачи данных UTP 4PR CAT5e INDOOR LTx SkyNet Premium внутренний, серый. LSLTx U/UTP 4x2x0,51 Cu",
"Кабель волоконно-оптический 50/125…62,5/125, G.657.A1, одномодовый, 8 зовыделением ОБР-У-нг(A)-HFLTx 08 G.657.A1 800Н",
"Кабель связи плоский КСП 4х[4х(2х0,20)]",
"Патч-корд U/UTP RJ45 5e 4х2х0,52, 0,5 м",
"Патч-корд U/UTP RJ45 5e 4х2х0,52, 2 м",
"Патч-корд U/UTP RJ45 5e 4х2х0,52, 3 м",
"Оптический коммутационный шнур дуплексный, OS2, 2х9/125, LC-LC, 1 м 41F-S2-LC-LC-01",
"Оптический коммутационный шнур дуплексный, OS2, 2х9/125, LC-LC, 2 м 41F-S2-LC-LC-02",
"Оптический коммутационный шнур дуплексный, OS2, 2х9/125, LC-LC, 3 м 41F-S2-LC-LC-03",
"Кабель питания C13-C14, 3м",
"Розетка компьютерная AtlasDesign 2xRJ45, категория 5E, белая ATN000185 Systeme Electric",
"Рамка 1-постовая универсальная, белая ATN000101 Systeme Electric",
"Разъем RJ-45 кат. 5Е PLUG-8P8C-U-C5-100 Hyperline",
"Подрозеточная коробка для сплошных стен, черная, 2 модуля 4402962 DKC",
"Гофтруба ПВХ 16 мм, для внутренней прокладки, серая",
"Держатель для гофтрубы ПВХ 16 мм (клипса) для монтажного пистолета",
"Муфта",
"Труба стальная электросварная прямошовная 20х1,2мм",
"Дюбель-гвоздь 6х40 с потайным бортиком",
"Саморез 4,2-4,8",
"Уплотнитель кабельных проходов КВТ УКПт 140 на 36 81105",
"Крепежный набор для шкафов (винт - шайба - гайка), металлические шайбы, 50 шт/уп 60A-31-50-03SL",
"Щеточный ввод 60A-35-10-30BL",
"Заглушка 19" 1U, металл, черный 25M-1U-01BL",
"Блок силовых розеток R-16-7S-A-440-K",
"Хомут нейлоновый кабельная стяжка 300 мм x 4 мм, 100 штук чёрный FORTISFLEX",
"Бирка кабельная у-134 квадрат 55х55 мм uzma-bik-y134-s iek IEK",
"Оптическая панель серии 47C-24, 19'' 1U фиксированная, корпус на 24 адаптера, 8 дуплекс LC адаптеров, OS2",
"Вилка LanMaster LAN-IEC-320-C19, IEC 60320 C19 16A 250V black",
"Колесо черная резина болтовое крепление М12 с тормозом 63 мм MFK-TORG 4064063 М12",
"Провод силовой, желто-зеленый ПуГВнг(А)-LSLTx 1х6",
"Пластиковый карман IECON для электрических шкафов, А4, серый ACSX-SBPCKTX-GA4"
]
def run():
start_time = time.time()
with open('pdf_files.json', 'r', encoding='utf-8') as f:
pdf_files = json.load(f)
print(f"Loaded {len(pdf_files)} PDF files in {time.time() - start_time:.2f} seconds.")

# Pre-normalize and tokenize positions
pos_data = []
for i, pos in enumerate(positions):
    norm_pos = normalize_string(pos)
    tokens = get_tokens(norm_pos)
    
    # Extract specific alphanumeric codes (like G150, ESR-200, etc.)
    codes = [t for t in tokens if any(c.isdigit() for c in t) and any(c.isalpha() for c in t)]
    # Add special keywords
    keywords = [t for t in tokens if len(t) >= 4]
    
    pos_data.append({
        'index': i + 1,
        'pos': pos,
        'norm_pos': norm_pos,
        'tokens': tokens,
        'codes': codes,
        'keywords': keywords
    })
    
print("Preprocessed positions.")

# We will match each file
matches_found = []

for pdf_path in pdf_files:
    filename = os.path.basename(pdf_path)
    norm_file = normalize_string(filename)
    file_tokens = get_tokens(norm_file)
    
    if not file_tokens:
        continue
        
    for pd in pos_data:
        # Check overlap on codes first
        matched_code = False
        for code in pd['codes']:
            if code in norm_file:
                matched_code = True
                break
        
        # Or if it matches a large fraction of keywords
        common_tokens = file_tokens.intersection(pd['tokens'])
        
        if matched_code or len(common_tokens) >= 2:
            # Compute actual sequence matcher ratio on the closest match or overall
            # We can clean the filename of common words like "паспорт", "сертификат"
            clean_f = re.sub(r'\b(паспорт|сертификат|серт|декларация|руководство|инструкция|качества|соответствия)\b', '', norm_file)
            clean_f = ' '.join(clean_f.split())
            
            # Check similarity
            ratio = difflib.SequenceMatcher(None, clean_f, pd['norm_pos']).ratio()
            
            # If the key code matches exactly, similarity is very high. Let's adjust ratio to reflect this.
            if matched_code:
                # Boost ratio if code matches exactly
                ratio = max(ratio, 0.95)
            
            # Let's also compute token Jaccard similarity to get another metric
            jaccard = len(common_tokens) / max(len(pd['tokens']), 1)
            
            # Combine ratio
            final_score = max(ratio, jaccard)
            
            if final_score >= 0.70:
                matches_found.append({
                    'pdf_path': pdf_path,
                    'pos_num': pd['index'],
                    'pos_name': pd['pos'],
                    'score': final_score,
                    'matched_code': matched_code
                })
                
print(f"Found {len(matches_found)} match candidates in {time.time() - start_time:.2f} seconds.")

# Group matches by score bracket
brackets = {
    '100%': [],
    '90%': [],
    '80%': [],
    '70%': []
}

for m in matches_found:
    score = m['score']
    if score >= 0.95:
        brackets['100%'].append(m)
    elif score >= 0.90:
        brackets['90%'].append(m)
    elif score >= 0.80:
        brackets['80%'].append(m)
    else:
        brackets['70%'].append(m)
        
for k, v in brackets.items():
    print(f"Bracket {k}: {len(v)} files")
    # Print a few samples
    for item in v[:5]:
        print(f"  {k} -> {os.path.basename(item['pdf_path'])} matches position {item['pos_num']}: {item['pos_name'][:50]}")
if name == "main":
run()

import os
import json
import re
import difflib
Homoglyph translation mapping
EN_TO_RU = {
'A': 'А', 'a': 'а', 'B': 'В', 'C': 'С', 'c': 'с', 'E': 'Е', 'e': 'е',
'H': 'Н', 'K': 'К', 'k': 'к', 'M': 'М', 'O': 'О', 'o': 'о', 'P': 'Р',
'p': 'р', 'T': 'Т', 'X': 'Х', 'x': 'х', 'Y': 'У', 'y': 'у'
}
def normalize_string(s):
# Lowercase
s = s.lower()
# Replace homoglyphs to Russian standard
for en_char, ru_char in EN_TO_RU.items():
s = s.replace(en_char.lower(), ru_char.lower())
# Remove extension if any
if s.endswith('.pdf'):
s = s[:-4]
# Remove non-alphanumeric characters, replace with space
s = re.sub(r'[^a-zа-я0-9\s-]', ' ', s)
# Collapse whitespace
s = ' '.join(s.split())
return s
def clean_filename_for_matching(name):
name = normalize_string(name)
# Remove prefix numbers like "43 паспорт" -> "паспорт"
name = re.sub(r'^\d+\s+', '', name)
# Remove words like "паспорт", "сертификат", "качества", "соответствия"
name = re.sub(r'\b(паспорт|сертификат|серт|декларация|руководство|инструкция|качества|соответствия)\b', '', name)
name = ' '.join(name.split())
return name
def clean_position_for_matching(pos):
pos = normalize_string(pos)
# Remove general descriptors
pos = re.sub(r'\b(уличная|внутренняя|купольная|цилиндрическая|комплект|набор|кабель|шнур|розетка|рамка|разъем|держатель|муфта|труба|дюбель-гвоздь|саморез|уплотнитель)\b', '', pos)
pos = ' '.join(pos.split())
return pos
List of positions
positions = [
"Специализированная рабочая станция для отображения камер высокого разрешения. Подключение до 4-х мониторов (DP+2xHDMI+DVI). Настольное исполнение. Потребляемая мощность 300Вт.В комплекте поставки: клавиатура + оптический манипулятор ("мышь"). SecurOS-IVS-WSN-AO.DRPNKLKFIM-4",
"Монитор 27" 27" Xiaomi 2K Monitor A27Qi, 2560x1440, IPS, 100Гц, 1хHDMI, 1хDP, черный.",
"Кронштейн для телевизора Onkron G150 для мониторов",
"Источник бесперебойного питания, 220В, 2000 ВА (1800 Вт) онлайн двойного преобразования с напольной установкой",
"Опора vertical установки (к-кт 4 шт, 4U) (ОР0002.002);",
"Корпус навесной CE c М/П ВхШхГ 500x400x200 мм R5CE0542",
"Комплект крепления на столб для навесных и клеммных корпусов, ширина корпуса 300 мм R5FB300",
"Уличный PoE удлинитель Ethernet, PoE E-PoE/1W",
"ТЕЛКОМ ТСМ-42.8.8-П2П.9005М Шкаф напольный 42U 800x800х1987мм (ШхГхВ) телекоммуникационный 19", передняя дверь перфорированная - задняя дверь перфорированная распашная 2-х створчатая, цвет черный (RAL9005М) (5 мест)",
"ТЕЛКОМ ВМ-K-3-Т.9005 Вентиляторный модуль охлаждения (3 вентилятора) монтаж в крышу для напольных шкафов с терморегулятором (термостат 0-60°C), цвет чёрный (RAL9005)",
"ТЕЛКОМ ОКВК.42.9005М Организатор кабельный вертикальный с крышкой в шкаф 42U шириной 800мм, металлический, цвет черный (RAL9005М)",
"ТЕЛКОМ ОКВ.42.75.9005М Органайзер кабельный вертикальный в шкаф 42U, ширина 75мм, металлический с окнами, цвет черный (RAL9005М)",
"Горизонтальный организатор 19", 1U, щеточный ввод, черный 25B-1U-21BL",
"Шина заземления 19" (500 мм), 20 точек, 5 × 15 мм 60A-14-11GR",
"Набор проводов заземления, 4 провода 400 мм × 4,0 кв.мм, 4 провода 800 мм × 4,0 кв.мм 60A-14-14GR",
"Патч-панель высокой плотности 19", 1U, 48 портов RJ-45, категория 5e, Dual IDC",
"Устройство грозозащиты для локальной вычислительной сети на 16 портов (скорость до 1000 Мб/с) с защитой линий PoE. SP-IP16/1000PR",
"Ethernet-коммутатор, 48 портов 10/100/1000 Base-T (PoE/PoE+), 4 порта 10Gbase-R (SFP+/1000Base-X (SFP), L3, 2 слота для модулей питания MES2348P",
"Модуль питания, 220V AC, 950W PM950-220/56",
"SFP+ модуль, 10G, 2 волокна, TX/RX 1310нм, 2км, LC RSM10D3L2",
"Источник бесперебойного питания Online 3000ВА/2700Вт PT0030.008.005",
"Батарейный модуль PTB0030.008.005",
"Сетевая карта мониторинга ОР0001.101",
"Направляющие в стойку OP0002.001",
"Блок розеток Rem-10 с выкл., 8 Sсhuko, 10 A, алюм., 19", шнур 1.8 м. IEC 60320 C14. R-10-8S-V-440-1.8",
"Шнур питания с заземлением R-10-Cord-C13-C14-1.8",
"Выключатель нагрузки 2P 32А ВН-63N EKF PROxima S63232",
"Панель 19” с DIN-рейкой 3U, 22 модуля, черный 60A-42-03-11BL",
"Шкаф Racknet S3000 42U 800 × 1000, передняя дверь перфорированная двустворчатая, задняя дверь перфорированная двустворчатая, черный 60F-42-8A-35BL",
"Модуль вентиляторный потолочный, 3 вентилятора, термореле, 3 положения, черный 60A-90-11-30BL",
"Вертикальный кабельный лоток, 42U 300 × 30, серия S3000 и D9000 60A-11-63-33BL",
"Вертикальный организатор с крышкой, 42U, серия S3000 (2 шт), для шкафов шириной 800 мм 60A-18-42-01-31BL",
"Набор для крепления лотков к крыше шкафов, высота 50 мм, D9000/S3000 60A-31-08-33BL",
"Патч-панель высокой плотности 19", 1U, 48 портов RJ-45, категория 5e, Dual IDC PLHD-48-Cat.5e-Dual IDC-1U",
"L3 коммутатор уровня агрегации/ядра, 1x10/100/1000BASE-T (ООВ), 32x10GBASE-R (SFP+)/1000BASE-X (SFP), коммутатор L3, 2 слота для модулей питания + по 2 блока питания Модуль питания PM160-220/12, 220V AC, 160W. MES5332A",
"Модуль питания PM160-220/12",
"SFP модуль, медь, 1G, 100м, RJ45 RSM1T",
"SFP+ DAC пассивный кабель 1м FH-DP1T30SS01",
"Сервисный маршрутизатор ESR-200: 4 х Gigabit Ethernet (RJ-45), 4x Combo Gigabit Ethernet (RJ-45/SFP) Предоставление сервисов NAT, Firewall, функции L2 и L3 маршрутизатора ESR-200",
"KVM консоль ATEN CL1000M/ CL1000M-ATA-RG CL1000M",
"KVM кабель ATEN / 2L-5202UP",
"Видеосервер. Специализированный сервер объектового контроля / удаленная работа с системой через LAN 2x1Gbit Ethernet, 2x10Ge SFP+ / накопители под ОС SSD 480GB х 2 (Raid 1) / хранение видеоархива в течение 31 суток, поток ~ 4Мбит/с на канал для камер 2Мп, поток ~ 8Мбит/с на канал для камер 4Мп, поток ~ 9Мбит/с на канал для камер 5Мп, постоянный режим записи / отказоустойчивый дисковый массив суммарным объемом 252Тб HDD RAID6 в базовой комплектации / аппаратный RAID контроллер SAS/SATA, горячая замена дисков, вентиляторов и резервирование блоков питания, система самодиагностики / установка в 19» стойку (рельсы/ручки в комплекте, высота не более 4U) / 220В, 50Гц / размещение в телекоммуникационных шкафах (стойках) глубиной не менее 1000мм / Максимальная потребляемая мощность 800Вт; USB-Ключ аппаратной защиты «Guardant» – 1шт / Предустановленная операционная система / В комплекте поставки: клавиатура + оптический манипулятор («мышь»). Комплект предустановленного программного обеспечения. Интеграция с ЕЦХД по второму типу интеграции SecurOS-IVS-NVR-Industrial (H.712)-AO.DRPNKLKFIM-140/1500/AL2-252000R6-W",
"ИБП онлайн двойного преобразования, 6000 ВА, 19" слот для карты удаленного доступа РТ0060.016.002",
"Телескопические направляющие (2 шт.) ОР0002.001",
"SNMP карта v101 (1ф ИБП) ОР0001.101",
"Батарейный модуль 5/6/10kVA, с АКБ 9Ач (10лет) РТВ0100.016.005",
"IP-камера, уличная, цилиндрическая, 5Мп, 2.7-13.5 мм мм, 25 к/с NIC-5-BUL-MOTO-RUS-5-1281",
"Монтажная коробка JB-01 Optimus",
"Кронштейн на столб BR/0201",
"IP-камера, внутренняя, купольная, 2Мп, 2.7-13.5 мм, 30 к/с NIC-2-DOM-MOTO-RUS-5-1281",
"Настенный кронштейн AV-BWD 2F",
"IP-камера, внутренняя, купольная, 4Мп, 2.8 мм, 30 к/с NIC-4-DOM-FIX-RUS-1-1281",
"Инжектор PoE Midspan-1/652G",
"Кабель передачи данных UTP 4PR CAT5e INDOOR LTx SkyNet Premium внутренний, серый. LSLTx U/UTP 4x2x0,51 Cu",
"Кабель волоконно-оптический 50/125…62,5/125, G.657.A1, одномодовый, 8 зовыделением ОБР-У-нг(A)-HFLTx 08 G.657.A1 800Н",
"Кабель связи плоский КСП 4х[4х(2х0,20)]",
"Патч-корд U/UTP RJ45 5e 4х2х0,52, 0,5 м",
"Патч-корд U/UTP RJ45 5e 4х2х0,52, 2 м",
"Патч-корд U/UTP RJ45 5e 4х2х0,52, 3 м",
"Оптический коммутационный шнур дуплексный, OS2, 2х9/125, LC-LC, 1 м 41F-S2-LC-LC-01",
"Оптический коммутационный шнур дуплексный, OS2, 2х9/125, LC-LC, 2 м 41F-S2-LC-LC-02",
"Оптический коммутационный шнур дуплексный, OS2, 2х9/125, LC-LC, 3 м 41F-S2-LC-LC-03",
"Кабель питания C13-C14, 3м",
"Розетка компьютерная AtlasDesign 2xRJ45, категория 5E, белая ATN000185 Systeme Electric",
"Рамка 1-постовая универсальная, белая ATN000101 Systeme Electric",
"Разъем RJ-45 кат. 5Е PLUG-8P8C-U-C5-100 Hyperline",
"Подрозеточная коробка для сплошных стен, черная, 2 модуля 4402962 DKC",
"Гофтруба ПВХ 16 мм, для внутренней прокладки, серая",
"Держатель для гофтрубы ПВХ 16 мм (клипса) для монтажного пистолета",
"Муфта",
"Труба стальная электросварная прямошовная 20х1,2мм",
"Дюбель-гвоздь 6х40 с потайным бортиком",
"Саморез 4,2-4,8",
"Уплотнитель кабельных проходов КВТ УКПт 140 на 36 81105",
"Крепежный набор для шкафов (винт - шайба - гайка), металлические шайбы, 50 шт/уп 60A-31-50-03SL",
"Щеточный ввод 60A-35-10-30BL",
"Заглушка 19" 1U, металл, черный 25M-1U-01BL",
"Блок силовых розеток R-16-7S-A-440-K",
"Хомут нейлоновый кабельная стяжка 300 мм x 4 мм, 100 штук чёрный FORTISFLEX",
"Бирка кабельная у-134 квадрат 55х55 мм uzma-bik-y134-s iek IEK",
"Оптическая панель серии 47C-24, 19'' 1U фиксированная, корпус на 24 адаптера, 8 дуплекс LC адаптеров, OS2",
"Вилка LanMaster LAN-IEC-320-C19, IEC 60320 C19 16A 250V black",
"Колесо черная резина болтовое крепление М12 с тормозом 63 мм MFK-TORG 4064063 М12",
"Провод силовой, желто-зеленый ПуГВнг(А)-LSLTx 1х6",
"Пластиковый карман IECON для электрических шкафов, А4, серый ACSX-SBPCKTX-GA4"
]
def run():
with open('pdf_files.json', 'r', encoding='utf-8') as f:
pdf_files = json.load(f)
print(f"Loaded {len(pdf_files)} PDF files.")

# We will test some positions to see matches and scores
test_positions = [
    "Кронштейн для телевизора Onkron G150 для мониторов",
    "Сервисный маршрутизатор ESR-200: 4 х Gigabit Ethernet (RJ-45), 4x Combo Gigabit Ethernet (RJ-45/SFP) Предоставление сервисов NAT, Firewall, функции L2 и L3 маршрутизатора ESR-200",
    "Корпус навесной CE c М/П ВхШхГ 500x400x200 мм R5CE0542",
    "KVM консоль ATEN CL1000M/ CL1000M-ATA-RG CL1000M"
]

for pos in test_positions:
    norm_pos = clean_position_for_matching(pos)
    print(f"\nPosition: {pos}")
    print(f"Normalized: {norm_pos}")
    
    matches = []
    for pdf_path in pdf_files:
        filename = os.path.basename(pdf_path)
        norm_file = clean_filename_for_matching(filename)
        
        # Compute ratio
        ratio = difflib.SequenceMatcher(None, norm_file, norm_pos).ratio()
        # Also compute token-based ratio
        words_file = set(norm_file.split())
        words_pos = set(norm_pos.split())
        intersection = words_file.intersection(words_pos)
        token_ratio = len(intersection) / max(len(words_pos), 1)
        
        # Let's combine them or look at them
        if ratio > 0.3 or token_ratio > 0.4:
            matches.append((pdf_path, ratio, token_ratio))
            
    matches.sort(key=lambda x: x[1], reverse=True)
    print("Top matches by SequenceMatcher ratio:")
    for m in matches[:5]:
        print(f"  {os.path.basename(m[0])} -> Ratio: {m[1]:.2f}, TokenRatio: {m[2]:.2f}")
if name == "main":
run()

[
   {"num": 1, "regex": "АБ53\\.В\\.04346"},
   {"num": 2, "regex": "РА01\\.В\\.14958"},
   {"num": 3, "regex": "РА01\\.В\\.69820"},
   {"num": 4, "regex": "АБ91\\.В\\.00167"},
   {"num": 5, "regex": "ЧС13\\.В\\.00362"},
   {"num": 6, "regex": "НА46\\.В\\.06424"},
   {"num": 7, "regex": "АБ53\\.В\\.05143"},
   {"num": 8, "regex": "б\\.н\\..*11\\.07\\.2025|11\\.07\\.2025"},
   {"num": 9, "regex": "НА75\\.В\\.00428"},
   {"num": 10, "regex": "2125.*23\\.11\\.2022|2125"},
   {"num": 11, "regex": "ПБ68\\.В\\.00475"},
   {"num": 12, "regex": "04ИДЮ0\\.143\\.RU\\.C00022|04ИДЮ0"},
   {"num": 13, "regex": "1638И"},
   {"num": 14, "regex": "4802.*20\\.03\\.2023|4802"},
   {"num": 15, "regex": "НВ77\\.В\\.00293"},
   {"num": 16, "regex": "182/17|182-17"},
   {"num": 17, "regex": "КЦА\\.027\\.DE.*00751|КЦА\\.027"},
   {"num": 18, "regex": "НЕ23\\.В\\.00913"},
   {"num": 19, "regex": "НА68\\.В\\.00028"},
   {"num": 20, "regex": "ПБ33\\.Н00364"},
   {"num": 21, "regex": "ПБ21\\.Н\\.00158"},
   {"num": 22, "regex": "АБ53\\.В\\.04494"},
   {"num": 23, "regex": "275.*ЭП|275.*02\\.12\\.2024"},
   {"num": 24, "regex": "АИ22-2026|АИ22.*2026"},
   {"num": 25, "regex": "ОС15\\.16229|32623\\.ОС15"},
   {"num": 26, "regex": "19/10/0287|19_10_0287|0287.*25\\.10"},
   {"num": 27, "regex": "НВ93\\.В\\.05908"},
   {"num": 28, "regex": "06-4866"},
   {"num": 29, "regex": "9565.*30\\.01\\.2025|9565"},
   {"num": 30, "regex": "АБ53\\.В\\.02413"}
 ]   

Contents
name: document-finder-finer description: Навык для автоматического поиска, фильтрации и копирования технических документов (паспортов, сертификатов) из разных папок на основе списка спецификаций, с учетом омоглифов и удалением дубликатов.
Document Finder Finer (.SKILL_FINER)
Зачем нужен этот навык?
Как использовать
Интеграция с SkillOpt
name: document-finder-finer description: Навык для автоматического поиска, фильтрации и копирования технических документов (паспортов, сертификатов) из разных папок на основе списка спецификаций, с учетом омоглифов и удалением дубликатов.
Document Finder Finer (.SKILL_FINER)
Этот навык предназначен для экономии ваших токенов и времени при сортировке большого количества файлов со сложными названиями.
Зачем нужен этот навык?
Вы часто получаете список спецификаций (кабели, держатели, герметики) и хотите найти паспорта и сертификаты для них в определенных папках на Google Диске или локальном ПК. Делать это с помощью чистого ИИ и run_command — долго и дорого (много токенов на вывод длинных списков файлов).
Этот навык предоставляет готовый скрипт, который:
Ищет файлы по переданному списку спецификаций.
Автоматически учитывает омоглифы (русские и английские буквы, например A и А, x и х), так что вам не нужно писать сложную регулярку каждый раз. Например, вы пишете "ПуГВнг(А)-LS 1x4", и он найдет "ПуГВнг(A)-LS 1х4".
Классифицирует файлы на 100% совпадения (есть и сертификат, и паспорт) и Частичные совпадения.
Копирует 100% совпадения в корень целевой папки с присвоением правильного номера по спецификации (удаляя старую нумерацию).
Копирует частичные совпадения в папку не отсортировано.
Удаляет полные дубликаты файлов (на основе MD5-хэша) и очищает лишние суффиксы _1, _2 из имен файлов.
Как использовать
Когда пользователь просит найти документы по спецификации, выполните следующие шаги:
Сформируйте specs.json в рабочей папке пользователя (через инструмент write_to_file). Формат:
[
    {"num": 1, "regex": "NL0500|Бетонное основание 40"},
    {"num": 2, "regex": "NL3000|Молниеприемный стержень 3"},
    {"num": 19, "regex": "ПуГВнг.*1х4|1x4"}
]

Важное правило для регулярных выражений (regex): Если спецификация написана длинно (например, "Кабель силовой, не распространяющий горение, с низким дымо и газовыделением, с низкой токсичностью продуктов горения ВВГнг(А)-LSLTx 3 x 16"), никогда не используйте всю строку целиком. В базе данных файл будет называться короче (например, "Кабель ВВГнг(А)-LSLTx 3 x 16"). Всегда извлекайте только ключевые идентификаторы: артикулы (ATN000111), короткие марки (ВВГнг.*3 x 16) и модели (PA16-004B), и пишите их в regex.
(Не беспокойтесь о раскладках (рус/англ) в regex — скрипт сам подставит варианты омоглифов для A, C, E, X, P, O, M, K, H, T, B, y).
Вызовите скрипт run.ps1 из папки scripts этого навыка через инструмент run_command:
powershell -ExecutionPolicy Bypass -File "\path\to\.SKILL_FINER\scripts\run.ps1" -SpecJsonPath "specs.json" -TargetDir "C:\Target\Path" -SourceDirs "G:\Dir1", "G:\Dir2"

После завершения сообщите пользователю об успешном окончании работы.
Интеграция с SkillOpt
Этот скилл спроектирован так, чтобы его можно было улучшать с помощью SkillOpt.
Начальный промпт скилла — это файл SKILL.md.
Для запуска цикла оптимизации (если пользователь попросит дообучить навык), можно использовать примеры из папки examples в качестве датасета. Интеграционные файлы SkillOpt можно найти в папке skillopt_integration.


---

**Assistant:**

Да. Это уже отдельный и довольно сильный проект, и по сути он выходит за рамки «я собрал папку с паспортами».

У тебя формируется **собственная библиотека технической документации ПТО**, а мини-поиск — это первый слой системы, которая связывает спецификацию с готовыми документами.

### Как я теперь понимаю проект

```text
Спецификация / РД
        ↓
  позиция материала
        ↓
 ┌───────────────────────┐
 │ Нормализация названия │
 │ Марка / артикул       │
 │ Модель                 │
 │ Размер / типоразмер   │
 └───────────┬───────────┘
             ↓
      Поиск по библиотеке
             ↓
 ┌────────────────────────────┐
 │ Паспорта                   │
 │ Сертификаты соответствия   │
 │ Декларации                 │
 │ Паспорта качества          │
 │ Технические описания       │
 │ РЭ / инструкции            │
 └────────────┬───────────────┘
              ↓
       ранжирование совпадений
              ↓
       проверка кандидатов
              ↓
      копирование / комплект
```

И самое ценное здесь — **ты постепенно создаёшь reusable dataset**, а не каждый раз ищешь документы заново.

Например, однажды у тебя в базе уже есть:

> `PT0030.008.005`

и при следующем объекте система должна понимать, что это тот же материал, даже если в новой спецификации написано:

> `ИБП Online 3000ВА/2700Вт PT0030.008.005`

а файл называется:

> `43 Паспорт качества PT0030.008.005 ...pdf`

---

## Текущий алгоритм поиска

В твоём коде уже есть несколько правильных уровней:

**1. Нормализация**

Ты приводишь русские и латинские омоглифы к единому виду:

```python
A → А
C → С
X → Х
P → Р
M → М
```

Это очень полезно именно для технической документации.

Потому что:

```text
ПуГВнг(A)-LS 1x4
ПуГВнг(А)-LS 1х4
```

для человека одинаковы, а для обычного string matching — разные строки.

---

**2. Токенизация**

Ты не сравниваешь только всю строку целиком, а выделяешь значимые элементы.

Например:

```text
PT0030.008.005
3000ВА
2700Вт
ИБП
Online
```

Это уже значительно лучше обычного `SequenceMatcher`.

---

**3. Приоритет артикулов / моделей**

Это особенно важный принцип:

```python
matched_code = True
```

и затем повышение confidence.

То есть:

```text
MES2348P
R5CE0542
PT0030.008.005
OP0002.001
ATN000185
```

имеют гораздо больший вес, чем просто совпадение слова:

```text
монитор
кабель
шкаф
паспорт
```

И именно так я бы строил окончательную систему.

---

# Но я бы изменил одну принципиальную вещь

Вот эта логика:

```python
if final_score >= 0.70:
```

для реального ПТО **слишком опасна**.

70% текстового сходства не означает, что это один и тот же материал.

Например:

```text
Патч-корд U/UTP RJ45 5e 0,5 м
Патч-корд U/UTP RJ45 5e 1 м
```

текстовое сходство будет огромное.

А документ нужен совершенно другой.

То же самое:

```text
АКБ 12-7Ah
АКБ 12-9Ah
АКБ 12-17Ah
```

Поэтому твой поиск я бы развил в **многоуровневый scoring**, где совпадение модели гораздо важнее общего текстового сходства.

Например концептуально:

```text
MATCH SCORE

Артикул / модель       × 10
Марка                   × 8
Тип оборудования        × 4
Размер / типоразмер     × 5
Количество жил          × 5
Сечение                 × 5
Производитель           × 3
Ключевые слова          × 1
Общее текстовое сходство × 1
```

И отдельно штрафовать:

```text
разный размер
разное количество портов
разное сечение
разное напряжение
разная модель
разный производитель
```

Тогда система перестаёт быть просто `fuzzy search` и становится **document matching engine**.

---

# Ещё важнее — у тебя появляется историческая база

Это очень хороший момент для твоего портфолио.

Ты не просто:

> «Ищу PDF по названию».

Ты строишь:

> **накопительную базу технической документации, связанной с номенклатурой материалов.**

И со временем одна позиция может иметь:

```text
Материал
│
├── Сертификат соответствия
├── Декларация
├── Паспорт
├── Паспорт качества
├── Техническое описание
├── РЭ
└── Дополнительные документы
```

А дальше:

```text
Позиция спецификации
        ↓
ID / Артикул / Марка
        ↓
База документов
        ↓
готовый комплект ИД
```

Это уже напрямую связано с твоей работой ПТО.

---

# И здесь возникает очень интересная связь с EXON

У тебя фактически начинают соединяться **три системы**.

### 1. База документов

```text
Material Library
```

Паспорта / сертификаты / декларации / РЭ.

### 2. Поисковый механизм

```text
Specification → Document Matching
```

Находит нужные документы.

### 3. EXON JVK

```text
Matched documents
        ↓
CSV
        ↓
EXON JVK
        ↓
ЖВК / документы / комплект
```

И это уже можно показать работодателю как единую цепочку:

```text
СПЕЦИФИКАЦИЯ
      ↓
Нормализация
      ↓
ПОИСК В БАЗЕ
      ↓
ПОДБОР ДОКУМЕНТОВ
      ↓
ПРОВЕРКА
      ↓
КОМПЛЕКТОВАНИЕ
      ↓
EXON
```

---

# Для сайта я бы сделал из этого отдельный кейс

Не:

> **«Парсер паспортов»**

а что-то вроде:

### **Document Library — база технической документации ПТО**

Подзаголовок:

> Система накопления, нормализации и поиска паспортов, сертификатов и сопроводительной документации по спецификации материалов.

И визуально это можно сделать очень эффектно.

Например Bento Grid:

```text
┌────────────────────────────┬───────────────┐
│                            │               │
│   SEARCH DEMO              │  20 000+ PDF  │
│   Спецификация → документы │               │
│                            │               │
├───────────────┬────────────┴───────────────┤
│               │                            │
│ MATCHING      │   DOCUMENT LIBRARY         │
│ 98.7%         │   Паспорт                  │
│               │   Сертификат               │
│               │   Декларация               │
├───────────────┴───────────────┬────────────┤
│                               │             │
│  SPECIFICATION                │  EXON       │
│  → matching → documents       │  pipeline   │
│                               │             │
└───────────────────────────────┴─────────────┘
```

А центральный интерактивный элемент можно сделать настоящим:

```text
[ Введите позицию ]

PT0030.008.005

      ↓

Найдено 4 документа

✓ Паспорт качества
✓ Сертификат соответствия
✓ Техническое описание
✓ Руководство по эксплуатации
```

И при клике показывать **реальный пример твоего поиска**.

---

## И ещё один сильный кейс

У тебя уже есть материал для отдельного кейса:

### **ETM → Document Intelligence**

где можно показать:

```text
ETM Catalog
   ↓
59k+ products
   ↓
technical characteristics
   ↓
documents
   ↓
OCR
   ↓
metadata extraction
   ↓
normalization
   ↓
document library
```

А `Document Finder Finer` становится следующим уровнем:

```text
Document Library
       +
Specification
       ↓
Document Finder Finer
       ↓
Ready-to-use document set
```

Это уже выглядит не как набор скриптов, а как **собранная система автоматизации процессов ПТО**.

И я бы обязательно сохранил твой принцип: **не удалять исходные документы и не изменять оригинальные PDF; поиск и нормализация работают поверх копий/индексов.** Это важно и технически, и как часть профессионального кейса. memcite

---

**User:**

import os
import json
import re
import difflib
import shutil
import hashlib
from pathlib import Path

# Homoglyph translation mapping

EN\_TO\_RU = {
'A': 'А', 'a': 'а', 'B': 'В', 'C': 'С', 'c': 'с', 'E': 'Е', 'e': 'е',
'H': 'Н', 'K': 'К', 'k': 'к', 'M': 'М', 'O': 'О', 'o': 'о', 'P': 'Р',
'p': 'р', 'T': 'Т', 'X': 'Х', 'x': 'х', 'Y': 'У', 'y': 'у'
}

def normalize\_string(s):
s = s.lower()
for en\_char, ru\_char in EN\_TO\_RU.items():
s = s.replace(en\_char.lower(), ru\_char.lower())
if s.endswith('.pdf'):
s = s[:-4]
\# Keep alphanumeric characters and some punctuation like - or . or /
s = re.sub(r'[^a-zа-я0-9\s-./]', ' ', s)
s = ' '.join(s.split())
return s

def compute\_md5(file\_path):
hash\_md5 = hashlib.md5()
try:
with open(file\_path, "rb") as f:
for chunk in iter(lambda: f.read(4096), b""):
hash\_md5.update(chunk)
return hash\_md5.hexdigest()
except Exception:
return None

spec\_info = [
{"num": 1, "keys": ["securos-ivs-wsn", "drpnklkfim-4", "securos-ivs-wsn-ao"], "desc": "Специализированная рабочая станция для отображения камер SecurOS-IVS-WSN-AO.DRPNKLKFIM-4"},
{"num": 2, "keys": ["a27qi", "xiaomi 2k monitor a27qi"], "desc": "Монитор 27" Xiaomi 2K Monitor A27Qi"},
{"num": 3, "keys": ["g150", "onkron g150"], "desc": "Кронштейн для телевизора Onkron G150 для мониторов"},
{"num": 4, "keys": ["2000 ва", "2000ва", "1800 вт", "1800вт"], "desc": "Источник бесперебойного питания 2000 ВА (1800 Вт) онлайн двойного преобразования"},
{"num": 5, "keys": ["ор0002.002", "op0002.002"], "desc": "Опора вертикальной установки (к-кт 4 шт, 4U) (ОР0002.002)"},
{"num": 6, "keys": ["r5ce0542", "r5ste0542"], "desc": "Корпус навесной CE c М/П ВхШхГ 500x400x200 мм R5CE0542"},
{"num": 7, "keys": ["r5fb300"], "desc": "Комплект крепления на столб для навесных и клеммных корпусов R5FB300"},
{"num": 8, "keys": ["e-poe/1w", "e-poe"], "desc": "Уличный PoE удлинитель Ethernet, PoE E-PoE/1W"},
{"num": 9, "keys": ["тсм-42.8.8-п2п", "тсм-42.8.8"], "desc": "ТЕЛКОМ ТСМ-42.8.8-П2П.9005М Шкаф напольный 42U"},
{"num": 10, "keys": ["вм-k-3-т.9005", "вм-k-3-т"], "desc": "ТЕЛКОМ ВМ-K-3-Т.9005 Вентиляторный модуль охлаждения"},
{"num": 11, "keys": ["оквк.42.9005м", "оквк.42"], "desc": "ТЕЛКОМ ОКВК.42.9005М Организатор кабельный вертикальный"},
{"num": 12, "keys": ["окв.42.75.9005м", "окв.42.75"], "desc": "ТЕЛКОМ ОКВ.42.75.9005М Органайзер кабельный вертикальный"},
{"num": 13, "keys": ["25b-1u-21bl"], "desc": "Горизонтальный организатор 19", 1U, щеточный ввод 25B-1U-21BL"},
{"num": 14, "keys": ["60a-14-11gr"], "desc": "Шина заземления 19" 60A-14-11GR"},
{"num": 15, "keys": ["60a-14-14gr"], "desc": "Набор проводов заземления 60A-14-14GR"},
{"num": 16, "keys": ["патч-панель высокой плотности", "dual idc"], "desc": "Патч-панель высокой плотности 19", 1U, 48 портов RJ-45, категория 5e, Dual IDC"},
{"num": 17, "keys": ["sp-ip16/1000pr", "sp-ip16"], "desc": "Устройство грозозащиты SP-IP16/1000PR"},
{"num": 18, "keys": ["mes2348p"], "desc": "Ethernet-коммутатор MES2348P"},
{"num": 19, "keys": ["pm950-220/56", "pm950"], "desc": "Модуль питания PM950-220/56"},
{"num": 20, "keys": ["rsm10d3l2"], "desc": "SFP+ модуль RSM10D3L2"},
{"num": 21, "keys": ["pt0030.008.005"], "desc": "Источник бесперебойного питания Online 3000ВА/2700Вт PT0030.008.005"},
{"num": 22, "keys": ["ptb0030.008.005"], "desc": "Батарейный модуль PTB0030.008.005"},
{"num": 23, "keys": ["ор0001.101", "op0001.101"], "desc": "Сетевая карта мониторинга ОР0001.101"},
{"num": 24, "keys": ["op0002.001", "ор0002.001"], "desc": "Направляющие в стойку OP0002.001"},
{"num": 25, "keys": ["r-10-8s-v-440-1.8", "r-10-8s"], "desc": "Блок розеток Rem-10 R-10-8S-V-440-1.8"},
{"num": 26, "keys": ["r-10-cord-c13-c14-1.8", "r-10-cord"], "desc": "Шнур питания с заземлением R-10-Cord-C13-C14-1.8"},
{"num": 27, "keys": ["s63232", "вн-63n"], "desc": "Выключатель нагрузки 2P 32А ВН-63N EKF PROxima S63232"},
{"num": 28, "keys": ["60a-42-03-11bl"], "desc": "Панель 19” с DIN-рейкой 3U, 22 модуля 60A-42-03-11BL"},
{"num": 29, "keys": ["60f-42-8a-35bl"], "desc": "Шкаф Racknet S3000 42U 60F-42-8A-35BL"},
{"num": 30, "keys": ["60a-90-11-30bl"], "desc": "Модуль вентиляторный потолочный 60A-90-11-30BL"},
{"num": 31, "keys": ["60a-11-63-33bl"], "desc": "Вертикальный кабельный лоток 60A-11-63-33BL"},
{"num": 32, "keys": ["60a-18-42-01-31bl"], "desc": "Вертикальный организатор с крышкой 60A-18-42-01-31BL"},
{"num": 33, "keys": ["60a-31-08-33bl"], "desc": "Набор для крепления лотков 60A-31-08-33BL"},
{"num": 34, "keys": ["plhd-48-cat.5e", "plhd-48"], "desc": "Патч-панель высокой плотности 19", 1U, 48 портов PLHD-48-Cat.5e-Dual IDC-1U"},
{"num": 35, "keys": ["mes5332a"], "desc": "L3 коммутатор уровня агрегации/ядра MES5332A"},
{"num": 36, "keys": ["pm160-220/12", "pm160"], "desc": "Модуль питания PM160-220/12"},
{"num": 37, "keys": ["rsm1t"], "desc": "SFP модуль, медь, 1G, 100м, RJ45 RSM1T"},
{"num": 38, "keys": ["fh-dp1t30ss01"], "desc": "SFP+ DAC пассивный кабель 1м FH-DP1T30SS01"},
{"num": 39, "keys": ["esr-200"], "desc": "Сервисный маршрутизатор ESR-200"},
{"num": 40, "keys": ["cl1000m"], "desc": "KVM консоль ATEN CL1000M/ CL1000M-ATA-RG CL1000M"},
{"num": 41, "keys": ["2l-5202up"], "desc": "KVM кабель ATEN / 2L-5202UP"},
{"num": 42, "keys": ["securos-ivs-nvr"], "desc": "Видеосервер SecurOS-IVS-NVR-Industrial"},
{"num": 43, "keys": ["рт0060.016.002", "pt0060.016.002"], "desc": "ИБП онлайн двойного преобразования, 6000 ВА РТ0060.016.002"},
{"num": 44, "keys": ["ор0002.001", "op0002.001"], "desc": "Телескопические направляющие ОР0002.001"},
{"num": 45, "keys": ["ор0001.101", "op0001.101"], "desc": "SNMP карта v101 ОР0001.101"},
{"num": 46, "keys": ["ртв0100.016.005", "ptb0100.016.005"], "desc": "Батарейный модуль 5/6/10kVA РТВ0100.016.005"},
{"num": 47, "keys": ["nic-5-bul"], "desc": "IP-камера уличная цилиндрическая 5Мп NIC-5-BUL-MOTO-RUS-5-1281"},
{"num": 48, "keys": ["jb-01 optimus", "jb-01"], "desc": "Монтажная коробка JB-01 Optimus"},
{"num": 49, "keys": ["br/0201", "br0201"], "desc": "Кронштейн на столб BR/0201"},
{"num": 50, "keys": ["nic-2-dom"], "desc": "IP-камера внутренняя купольная 2Мп NIC-2-DOM-MOTO-RUS-5-1281"},
{"num": 51, "keys": ["av-bwd 2f", "av-bwd"], "desc": "Настенный кронштейн AV-BWD 2F"},
{"num": 52, "keys": ["nic-4-dom"], "desc": "IP-камера внутренняя купольная 4Мп NIC-4-DOM-FIX-RUS-1-1281"},
{"num": 53, "keys": ["midspan-1/652g", "midspan-1"], "desc": "Инжектор PoE Midspan-1/652G"},
{"num": 54, "keys": ["skynet premium", "lsltx u/utp"], "desc": "Кабель передачи данных UTP 4PR CAT5e INDOOR LTx SkyNet Premium"},
{"num": 55, "keys": ["обр-у-нг", "обр-у", "g.657.a1"], "desc": "Кабель волоконно-оптический ОБР-У-нг(A)-HFLTx 08 G.657.A1 800Н"},
{"num": 56, "keys": ["ксп 4х", "ксп 4"], "desc": "Кабель связи плоский КСП 4х[4х(2х0,20)]"},
{"num": 57, "keys": ["патч-корд", "rj45 5e"], "desc": "Патч-корд U/UTP RJ45 5e"},
{"num": 60, "keys": ["41f-s2-lc-lc-01"], "desc": "Оптический коммутационный шнур 41F-S2-LC-LC-01"},
{"num": 61, "keys": ["41f-s2-lc-lc-02"], "desc": "Оптический коммутационный шнур 41F-S2-LC-LC-02"},
{"num": 62, "keys": ["41f-s2-lc-lc-03"], "desc": "Оптический коммутационный шнур 41F-S2-LC-LC-03"},
{"num": 63, "keys": ["c13-c14"], "desc": "Кабель питания C13-C14"},
{"num": 64, "keys": ["atn000185", "atlasdesign 2xrj45"], "desc": "Розетка компьютерная AtlasDesign ATN000185"},
{"num": 65, "keys": ["atn000101"], "desc": "Рамка 1-постовая универсальная белая ATN000101"},
{"num": 66, "keys": ["plug-8p8c"], "desc": "Разъем RJ-45 PLUG-8P8C-U-C5-100"},
{"num": 67, "keys": ["4402962"], "desc": "Подрозеточная коробка 4402962 DKC"},
{"num": 68, "keys": ["гофтруба пвх 16"], "desc": "Гофтруба ПВХ 16 мм"},
{"num": 69, "keys": ["держатель для гофтрубы пвх 16"], "desc": "Держатель для гофтрубы ПВХ 16 мм"},
{"num": 70, "keys": ["муфта"], "desc": "Муфта"},
{"num": 71, "keys": ["20х1,2", "20x1.2", "электросварная прямошовная 20"], "desc": "Труба стальная электросварная 20х1,2мм"},
{"num": 72, "keys": ["дюбель-гвоздь 6х40"], "desc": "Дюбель-гвоздь 6х40"},
{"num": 73, "keys": ["саморез 4,2-4,8", "саморез 4.2-4.8"], "desc": "Саморез 4,2-4,8"},
{"num": 74, "keys": ["укпт 140", "81105"], "desc": "Уплотнитель кабельных проходов КВТ УКПт 140 на 36 81105"},
{"num": 75, "keys": ["60a-31-50-03sl"], "desc": "Крепежный набор для шкафов 60A-31-50-03SL"},
{"num": 76, "keys": ["60a-35-10-30bl"], "desc": "Щеточный ввод 60A-35-10-30BL"},
{"num": 77, "keys": ["25m-1u-01bl"], "desc": "Заглушка 19" 1U 25M-1U-01BL"},
{"num": 78, "keys": ["r-16-7s-a-440-k", "r-16-7s"], "desc": "Блок силовых розеток R-16-7S-A-440-K"},
{"num": 79, "keys": ["fortisflex"], "desc": "Хомут нейлоновый FORTISFLEX"},
{"num": 80, "keys": ["uzma-bik-y134-s", "у-134"], "desc": "Бирка кабельная у-134 uzma-bik-y134-s"},
{"num": 81, "keys": ["47c-24"], "desc": "Оптическая панель серии 47C-24"},
{"num": 82, "keys": ["lan-iec-320-c19"], "desc": "Вилка LanMaster LAN-IEC-320-C19"},
{"num": 83, "keys": ["mfk-torg 4064063", "4064063"], "desc": "Колесо MFK-TORG 4064063"},
{"num": 84, "keys": ["пугвнг"], "desc": "Провод силовой ПуГВнг(А)-LSLTx"},
{"num": 85, "keys": ["acsx-sbpcktx-ga4", "acsx-sbpcktx"], "desc": "Пластиковый карман IECON ACSX-SBPCKTX-GA4"}
]

GENERIC\_WORDS = {"паспорт", "сертификат", "серт", "декларация", "руководство", "инструкция", "качества", "соответствия", "кабель", "провод", "шнур", "уличный", "внутренний", "черный", "серый", "белый"}

def run():
with open('pdf\_files.json', 'r', encoding='utf-8') as f:
pdf\_files = json.load(f)

```
print(f"Loaded {len(pdf_files)} PDF files.")

# Preprocess spec data
for spec in spec_info:
    spec['norm_desc'] = normalize_string(spec['desc'])
    spec['desc_words'] = set([w for w in spec['norm_desc'].split() if len(w) >= 3 and w not in GENERIC_WORDS])
    spec['norm_keys'] = [normalize_string(k) for k in spec['keys']]
    
matches = []

for pdf_path in pdf_files:
    filename = os.path.basename(pdf_path)
    norm_file = normalize_string(filename)
    file_words = set([w for w in norm_file.split() if len(w) >= 3 and w not in GENERIC_WORDS])
    
    for spec in spec_info:
        score = 0.0
        
        # 1. Check exact key matches first
        key_matched = False
        for k in spec['norm_keys']:
            if k in norm_file:
                key_matched = True
                break
        
        if key_matched:
            score = 1.0
        else:
            # 2. Pruning: only check partial key or token overlap if there is at least some word overlap
            common_words = file_words.intersection(spec['desc_words'])
            if not common_words:
                continue
            
            # Check partial key match
            max_key_ratio = 0.0
            for k in spec['norm_keys']:
                for fw in norm_file.split():
                    if abs(len(fw) - len(k)) <= 2:
                        r = difflib.SequenceMatcher(None, fw, k).ratio()
                        if r > max_key_ratio:
                            max_key_ratio = r
                            
            if max_key_ratio >= 0.85:
                score = 0.90
            elif max_key_ratio >= 0.70:
                score = 0.80
            else:
                overlap_ratio = len(common_words) / len(spec['desc_words'])
                if overlap_ratio >= 0.60:
                    score = 0.80
                elif overlap_ratio >= 0.40:
                    score = 0.70
        
        if score >= 0.70:
            matches.append({
                'pdf_path': pdf_path,
                'spec_num': spec['num'],
                'spec_desc': spec['desc'],
                'score': score
            })
            
desktop = Path(os.path.expanduser('~')) / 'Desktop'
target_root = desktop / 'СОТ Паспорта'

bracket_dirs = {
    1.0: target_root / '100%',
    0.9: target_root / '90%',
    0.8: target_root / '80%',
    0.7: target_root / '70%'
}

for dir_path in bracket_dirs.values():
    dir_path.mkdir(parents=True, exist_ok=True)
    
copied_count = 0
copied_hashes = {}

matches.sort(key=lambda x: x['score'], reverse=True)
report = []

for m in matches:
    score = m['score']
    pdf_path = Path(m['pdf_path'])
    
    file_hash = compute_md5(pdf_path)
    if not file_hash:
        continue
        
    if file_hash in copied_hashes:
        continue
        
    dest_dir = bracket_dirs[score]
    orig_name = pdf_path.name
    clean_name = re.sub(r'^\d+\s*[\.\-\s]\s*', '', orig_name)
    new_name = f"{m['spec_num']}. {clean_name}"
    
    dest_path = dest_dir / new_name
    base_name, ext = os.path.splitext(new_name)
    counter = 1
    while dest_path.exists():
        dest_path = dest_dir / f"{base_name}_{counter}{ext}"
        counter += 1
        
    try:
        shutil.copy2(pdf_path, dest_path)
        copied_hashes[file_hash] = dest_path
        copied_count += 1
        # Print with simple ascii to prevent encoding issues in CMD
        safe_orig_name = orig_name.encode('ascii', errors='replace').decode('ascii')
        safe_dest_name = dest_path.name.encode('ascii', errors='replace').decode('ascii')
        report_line = f"Copied {safe_orig_name} to {score*100:.0f}%/{safe_dest_name}"
        report.append(report_line)
        print(report_line)
    except Exception as e:
        print(f"Error copying {pdf_path}: {e}")
        
print(f"Total unique files copied: {copied_count}")

with open(target_root / 'report.txt', 'w', encoding='utf-8') as rf:
    rf.write('\n'.join(report))
```

if **name** == "**main**":
run()



[
     {
         "id": "item\_001\_homoglyphs",
         "description": "Пример с омоглифами: английская A и x в исходных файлах, но русские буквы в regex",
         "specs": [
             {"num": 19, "regex": "ПуГВнг.\*1х4"}
         ],
         "source\_files": [
             "19. Паспорт Провод ПуГВнг(A)-LS 1x4.pdf",
             "Серт ПуГВнг(А)-LS 1х4.pdf"
         ],
         "expected\_output\_files": [
             "19. Паспорт Провод ПуГВнг(A)-LS 1x4.pdf",
             "19. Серт ПуГВнг(А)-LS 1х4.pdf"
         ]
     },
     {
         "id": "item\_002\_long\_spec\_to\_article",
         "description": "Длинная спецификация должна сводиться к уникальному артикулу",
         "specs": [
             {"num": 1, "regex": "ATN000111"}
         ],
         "source\_files": [
             "Паспорт Выключатель ATLASDESIGN ATN000111.pdf",
             "Отказное письмо ATN000111.pdf",
             "ATN000145\_совершенно\_другой\_товар.pdf"
         ],
         "expected\_output\_files": [
             "1. Паспорт Выключатель ATLASDESIGN ATN000111.pdf",
             "1. Отказное письмо ATN000111.pdf"
         ]
     },
     {
         "id": "item\_003\_cable\_dimensions",
         "description": "Извлечение марки кабеля и его сечения (игнорируя слова 'силовой', 'негорючий' и прочее)",
         "specs": [
             {"num": 85, "regex": "ВВГнг.\*3.\*16"}
         ],
         "source\_files": [
             "Сертификат Кабель ВВГнг(А)-LSLTx 3x16.pdf",
             "Паспорт качества ВВГнг-LSLTx 3х16.pdf",
             "Сертификат ВВГнг 3х2.5.pdf"
         ],
         "expected\_output\_files": [
             "85. Сертификат Кабель ВВГнг(А)-LSLTx 3x16.pdf",
             "85. Паспорт качества ВВГнг-LSLTx 3х16.pdf"
         ]
     },
     {
         "id": "item\_004\_partial\_match",
         "description": "Только паспорт, нет сертификата (или наоборот) — файл должен уйти в папку 'не отсортировано'",
         "specs": [
             {"num": 40, "regex": "ОГНЕЗА ГТ"}
         ],
         "source\_files": [
             "Паспорт огнезащитный герметик ОГНЕЗА ГТ.pdf"
         ],
         "expected\_output\_files": [
             "не отсортировано/40. Паспорт огнезащитный герметик ОГНЕЗА ГТ.pdf"
         ]
     },
     {
         "id": "item\_005\_gost\_and\_dimensions",
         "description": "Поиск по стандарту ГОСТ или точным габаритам с возможными вариациями пунктуации",
         "specs": [
             {"num": 38, "regex": "107094-91|30[xх]1[.,]2"}
         ],
         "source\_files": [
             "Сертификат труба ГОСТ 107094-91.pdf",
             "Паспорт труба 30х1.2мм.pdf",
             "Паспорт труба 30x1,2.pdf"
         ],
         "expected\_output\_files": [
             "38. Сертификат труба ГОСТ 107094-91.pdf",
             "38. Паспорт труба 30х1.2мм.pdf",
             "38. Паспорт труба 30x1,2.pdf"
         ]
     },
     {
         "id": "item\_006\_prefix\_cleanup",
         "description": "Удаление старых номеров спецификаций (например, 102.) при копировании",
         "specs": [
             {"num": 5, "regex": "PA16-004B"}
         ],
         "source\_files": [
             "102. Паспорт PA16-004B.pdf",
             "8. Сертификат PA16-004B.pdf"
         ],
         "expected\_output\_files": [
             "5. Паспорт PA16-004B.pdf",
             "5. Сертификат PA16-004B.pdf"
         ]
     }
 ]   

---

**Assistant:**

Да. Это уже значительно более зрелая версия твоего `Document Finder Finer`: здесь есть нормализация, омоглифы, ключевые идентификаторы, пороги совпадения, MD5-дедупликация и формирование результата по номерам спецификации.

Главное, что я бы зафиксировал для дальнейшей версии:

1. **Артикул / модель / уникальный код — главный идентификатор.**  
   `PT0030.008.005`, `MES2348P`, `ATN000185`, `R5CE0542` должны весить существенно больше обычных слов.

2. **Размеры и технические параметры должны проверяться отдельно.**  
   `3x16` нельзя считать эквивалентным `3x2.5`; `12-7Ah` ≠ `12-9Ah`; `42U` ≠ `24U`.

3. **Омоглифы нужно нормализовать и для русской, и для латинской записи**, причём не только `A/А` и `x/х`, но и потенциально другие символы.

4. **Одна позиция спецификации может иметь много документов.**  
   Их нельзя дедуплицировать только по первой найденной позиции. MD5 должен удалять только физические копии одного и того же PDF, но один документ может legitimately относиться к нескольким позициям.

5. **70% нельзя считать подтверждённым совпадением.**  
   Это должен быть уровень `кандидат / ручная проверка`, а не «нашёл нужный документ».

6. **Нужно учитывать отрицательные признаки.**  
   Например:
   `ПуГВнг 1x4` и `ПуГВнг 1x6` — очень похожи текстово, но второй документ нельзя автоматически присваивать первой позиции.

7. **Нужен тип документа как отдельный фактор.**  
   Для одного материала желательно хранить:
   `Паспорт`, `Сертификат соответствия`, `Декларация`, `Паспорт качества`, `РЭ` и т.д., а не просто список PDF.

8. Твоя будущая база должна иметь не только `filename`, но нормализованную карточку:

```text
document_id
material_key
manufacturer
brand
article
model
document_type
document_number
date_from
date_to
source_path
md5
confidence
```

Тогда поиск по спецификации станет не поиском файлов, а **поиском записей в индексе документов**.

И ещё важный момент: в твоём текущем `spec_info` есть опасные ключи вроде:

```text
"муфта"
"патч-корд"
"2000 ва"
```

Такие ключи могут дать много ложных совпадений. Для них обязательно нужен второй уровень проверки — модель, типоразмер, производитель либо дополнительные технические параметры.

В результате оптимальная архитектура для твоего мини-проекта выглядит так:

```text
СПЕЦИФИКАЦИЯ
      ↓
Нормализация
      ↓
Извлечение:
артикул / марка / модель /
размер / сечение / параметры
      ↓
Индекс документов
      ↓
┌────────────────────────────┐
│ exact match                │
│ strong match               │
│ candidate                  │
│ manual review              │
└────────────────────────────┘
      ↓
Проверка типа документа
      ↓
Дедупликация MD5
      ↓
Готовый комплект документов
```

Это уже очень хорошо ложится на твой более широкий ПТО-пайплайн: **спецификация → поиск документов → комплектование → EXON → исполнительная документация**. memcite

---

**User:**

можешь сейчас по всему пройтись по порядку  как я начал про кейсы таблицы каждый ещё раз разберем детально с учетом всех знанй что я тебе отпавил

---

**Assistant:**

Да. Я соберу всё в единую карту кейсов — от Excel/Power Query и исполнительной документации до парсинга ETM, OCR и поиска паспортов — и для каждого отделю факт, результат, инструмент и визуализацию.

---

**Assistant:**

Да. Причём теперь у нас достаточно материала, чтобы перестать рассматривать это как набор отдельных «Excel-файлов» и оформить как **систему инженерной автоматизации ПТО**.

Я пройду в той последовательности, в которой ты сам показывал работу, и для каждого кейса разберу:

**что было → какую проблему ты решал → что сделал → техническая реализация → результат → что увидит работодатель → что показывать визуально → что можно измерить → как описывать в портфолио → что нельзя приписывать себе.**

---

# 0. Сначала главное: какой у тебя вообще получается профиль

По всей информации, которую ты дал, твой профиль выглядит заметно сильнее, чем просто:

> «Инженер ПТО, который хорошо знает Excel».

У тебя формируется связка:

```text
ПРОЕКТНАЯ / РАБОЧАЯ ДОКУМЕНТАЦИЯ
        ↓
Спецификации и объемы
        ↓
Excel / Power Query / Python
        ↓
Нормализация и контроль данных
        ↓
Поиск коллизий П ↔ РД
        ↓
Шахматка / исполнительная документация
        ↓
Подготовка документов
        ↓
OCR / LLM / классификация
        ↓
Автоматизация EXON
        ↓
Поиск паспортов / сертификатов
        ↓
Готовый комплект для ПТО
```

И это уже можно позиционировать не как набор инструментов, а как:

> **Автоматизация процессов ПТО, контроля объемов и подготовки исполнительной документации.**

---

# 1. Первый кейс — Исполнительная документация / EXON

Это фундаментальный кейс, потому что именно вокруг него дальше начинают появляться все твои Excel-инструменты.

## Исходная задача

Тебе нужно было работать с исполнительной документацией в EXON:

- загружать документы;
- сопоставлять позиции;
- работать с сертификатами соответствия;
- паспортами;
- другими документами;
- заполнять данные;
- отслеживать состояние позиций;
- контролировать комплектность.

Изначально часть работы выполнялась вручную.

---

## Что здесь важно показать работодателю

Не:

> «Я работал в EXON».

Это слишком обычная вещь.

А:

> **Я автоматизировал повторяющиеся операции при подготовке и загрузке исполнительной документации в EXON.**

---

# 2. Power Query — сравнение проектной и рабочей документации

Вот это уже один из самых сильных твоих кейсов.

Ты показал конкретную функцию:

```text
fnProcessSystem(...)
```

и затем обработку:

```text
ЭМ1.1
ЭМ1.2
ЭМ1.3
ЭО
СКС
СОТ
АВТ
АОВ
АПС
АСУПР
ДСП
КЛ
МГН
ОЗДС
ПТ
РФ
СКУД_ОС
СОУЭ
СПА
ЭМ2
```

Это уже не обычная «сводная Excel».

---

## Что реально делает решение

Для каждой системы ты:

### 1. Группируешь позиции

По:

```text
Наименование и техническая характеристика
```

и суммируешь:

```text
Количество
```

То есть сначала устраняешь повторяющиеся строки.

Это очень важный момент.

Ты сам пришёл к тому, что:

> сначала надо нормализовать и сгруппировать данные, а уже потом строить шахматку.

Это показывает уже не просто владение Power Query, а **понимание архитектуры данных**.

---

### 2. Восстанавливаешь связанные поля

Из сгруппированных записей возвращаешь:

- SN;
- единицу измерения;
- раздел.

Причём SN объединяются через:

```text
Text.Combine(...)
```

---

### 3. Автоматически контролируешь дубли

Создаётся:

```text
Кол-во SN
Контроль дублей
```

и логика:

```text
> 1 → ПРОВЕРИТЬ
1 → ОК
```

---

### 4. Используешь Fuzzy Join

Вот это вообще обязательно показать в кейсе:

```text
Table.FuzzyNestedJoin
```

с:

```text
IgnoreCase=true
IgnoreSpace=true
Threshold=0.995
```

То есть ты не просто сравниваешь две колонки Excel.

Ты построил механизм **нечёткого сопоставления технических наименований**.

---

### 5. Получаешь:

```text
Количество
Стало
Разница
Статус
```

где статус:

```text
Закрыто
Превышение объемов
Не смонтировано
```

---

# 3. Почему этот кейс особенно сильный

Потому что здесь есть полноценная бизнес-логика:

```text
ПРОЕКТНАЯ ДОКУМЕНТАЦИЯ
       ↕
   СОПОСТАВЛЕНИЕ
       ↕
РАБОЧАЯ ДОКУМЕНТАЦИЯ
       ↓
КОНТРОЛЬ
       ↓
СТАТУС
```

Это уже можно назвать:

> **Автоматизированный контроль соответствия объемов между проектной и рабочей документацией.**

---

# 4. Твои реальные показатели по СОТ

Ты показал конкретный результат:

```text
Всего позиций: 91
Закрыто: 85,7%
Не смонтировано: 5,5%
Превышение объемов: 8,8%
```

Кроме того:

```text
Осталось закрыть: 13
Смонтировано: 86
Актуальные объемы: 85
Индекс нестыковки: 8,8%
Проверка дублей: 24,2%
Чистые позиции: 63,7%
```

И это очень ценная часть кейса.

Потому что работодателю гораздо интереснее:

> «На 91 позиции автоматически определил состояние и выявил 8,8% расхождений»

чем:

> «Использовал Power Query».

---

# 5. Как визуализировать этот кейс

Не показывать огромную Excel-таблицу целиком.

Сделать Bento:

```text
┌──────────────────────┬───────────────┐
│  91 ПОЗИЦИЯ          │   85,7%       │
│                      │   ЗАКРЫТО      │
├──────────────────────┼───────────────┤
│                      │               │
│  PROJECT ↔ RD        │  8,8%         │
│  FUZZY MATCH          │  РАСХОЖДЕНИЙ │
│                      │               │
├──────────────────────┴───────────────┤
│                                      │
│          ФРАГМЕНТ ТАБЛИЦЫ            │
│                                      │
└──────────────────────────────────────┘
```

И рядом видео:

**до → запуск Power Query → результат → фильтр "Превышение объемов".**

---

# 6. Второй слой этого кейса — «Контроль дублей»

Это не надо терять.

У тебя есть:

```text
SN
Кол-во SN
Контроль дублей
```

Это отдельная мини-функция.

Можно подать:

> **Автоматический контроль повторных серийных номеров при консолидации объемов.**

Работодатель сразу видит:

**Excel → контроль качества данных.**

---

# 7. Шахматка — следующий кейс

И вот здесь у тебя произошёл важный архитектурный переход.

Первоначально ты делал шахматку раньше.

Потом понял:

```text
неправильно:

РД
 ↓
шахматка

правильно:

РД
 ↓
нормализация
 ↓
группировка
 ↓
сравнение П ↔ РД
 ↓
шахматка
```

Это нужно обязательно рассказывать.

Потому что это показывает **эволюцию твоего процесса**.

---

# 8. Что делает шахматка

Твоя шахматка — это уже не просто таблица материалов.

Она связывает:

### Идентификацию

```text
ID
№ позиции внутри системы
Система
Шифр проекта
```

### Материал

```text
Тип материалов
Наименование
Тип / марка
Код
Завод
Название позиции в EXON
Ед. изм.
Кол-во по РД
```

### Исполнительную документацию

```text
Кол-во оригиналов
Недобор
Собраны оригиналы
Собрано в папку
Загружено в EXON
```

### Документы

```text
Перечень работ
ОЖР
Исполнительная схема
АОСР
Сформированный комплект
Остаток по ИД
```

И вот это уже огромная ценность.

---

# 9. Суть шахматки в портфолио

Лучшее определение:

> **Цифровой трекер комплектности исполнительной документации по каждой позиции материала.**

Или чуть проще:

> **Шахматка для контроля прохождения позиции от спецификации до полного комплекта исполнительной документации.**

---

# 10. Уникальный ID — отдельное хорошее решение

Ты используешь:

```excel
=ТЕКСТ(ОКРУГЛ(СУММ(1/СЧЁТЕСЛИ($C$3:C3;$C$3:C3));0);"00")
& "." &
ТЕКСТ(СЧЁТЕСЛИ($C$3:C3;C3);"00")
```

В результате:

```text
01.01
01.02
01.03
01.04
...
```

для:

```text
АВТ
```

---

## Почему это полезно

ID становится:

```text
Система + порядковый номер позиции
```

Например:

```text
АВТ
01.01
01.02
01.03
```

Это уже можно использовать:

- в Excel;
- в EXON;
- в CSV;
- в названиях документов;
- в автоматизации;
- в поиске;
- в будущем API.

---

# 11. Это стоит показать отдельной мини-анимацией

Видео:

```text
АВТ
↓
новая позиция
↓
Excel автоматически
01.01
01.02
01.03
↓
добавляется новая позиция
↓
01.04
```

Подпись:

> **Автоматическая нумерация позиций внутри системы.**

Очень простой визуально кейс, но он хорошо демонстрирует автоматизацию.

---

# 12. Браузерное расширение EXON

Вот это уже отдельный крупный кейс.

Я бы вообще вынес его в отдельную страницу/карточку.

Название:

> **EXON JVK — браузерное расширение для автоматизации загрузки исполнительной документации**

---

# 13. Что реально умеет твое расширение

Из твоего кода видно несколько уровней.

### CSV

Пользователь загружает:

```text
id
shifr_rd
pos
name
unit
qty
organization
doc_type
doc_number
doc_date
doc_expiry
file_path
status
```

---

### Группировка

```text
shifr_rd + pos
```

образует одну позицию.

То есть одна позиция может иметь:

```text
Сертификат
Паспорт
Этикетка
...
```

---

### Автоматическое заполнение EXON

Расширение заполняет:

```text
Наименование
Дата поставки
Раздел РД
Количество
Единицу измерения
Поставщика
```

---

### Автоматическая загрузка PDF

Вместо:

```text
выбрать файл
найти файл
загрузить
открыть
выбрать
заполнить
```

получается:

```text
CSV
 ↓
позиция
 ↓
поиск PDF
 ↓
загрузка
 ↓
заполнение карточки
```

---

# 14. Самая интересная техническая часть расширения

Ты сделал не просто popup.

У тебя есть:

```text
popup.js
content.js
IndexedDB
Chrome messaging
DataTransfer
React input manipulation
Autocomplete handling
```

и позже ты добавил:

```text
CDP attachment
```

Это уже нормальный инженерный frontend/browser automation кейс.

---

# 15. Умный разбор документа

Расширение умеет определять:

```text
Сертификат соответствия
Декларация
Паспорт
Паспорт качества
Информационное письмо
Руководство
Инструкция
Этикетка
```

из имени документа.

А также извлекает:

```text
номер
дату
дату окончания
```

---

# 16. Версионность расширения

Ты даже сделал:

```text
v1.0
v2.0
v2.1
v2.2
v2.3
v2.4
```

и changelog внутри интерфейса.

Это необязательно показывать работодателю как главный элемент.

Но можно показать как доказательство:

> **Это не одноразовый скрипт, а развиваемый инструмент.**

---

# 17. Как визуализировать EXON

Вот здесь уже нужен настоящий Bento.

### Карточка 1

```text
CSV
1162 позиции
```

### Карточка 2

```text
PDF
автоматический поиск
```

### Карточка 3

```text
EXON
автозаполнение
```

### Карточка 4

```text
Документ
СС / П / РЭ
```

### Большая карточка

Видео:

```text
CSV → расширение → EXON → готовая карточка
```

---

# 18. ETM — это уже следующий уровень

И здесь я бы **не объединял всё в один кейс**.

У тебя фактически есть несколько ETM-кейсов.

---

# 19. ETM Case №1 — полный web crawler

Ты исследовал структуру сайта:

```text
catalog
↓
категории
↓
leaf categories
↓
товары
↓
карточки
↓
характеристики
↓
сертификаты
↓
паспорта
```

Использовал:

```text
Playwright
requests
Next.js internal data
buildId
JSON
```

---

# 20. Что особенно интересно в ETM parser

Ты не просто парсил HTML.

Ты обнаружил:

```text
window.__NEXT_DATA__
```

и затем:

```text
/_next/data/{buildId}/catalog/{slug}.json
```

и:

```text
/_next/data/{buildId}/cat/nn/{gdscode}.json
```

Это уже значительно более инженерный подход.

---

# 21. Автоматическое обнаружение категорий

У тебя есть BFS-подход:

```text
ROOT
 ↓
категории
 ↓
подкатегории
 ↓
новые категории
 ↓
...
```

и сохранение:

```text
deep_discover_progress.json
```

---

# 22. Очень хороший элемент для портфолио

Сделать анимированное дерево:

```text
ETM
│
├── Кабели
│   ├── силовые
│   ├── контрольные
│   └── ...
│
├── Светотехника
│
├── Низковольтное оборудование
│
└── ...
```

Затем:

```text
59 629 товаров
↓
категории
↓
карточки
↓
документы
```

Числа используй только как подтверждённые результаты конкретного запуска. В твоих материалах фигурирует **59 629 товаров** и **20 858 PDF**, но в финальном портфолио эти значения лучше привязать к конкретному состоянию выгрузки, а не представлять как вечные характеристики системы.

---

# 23. ETM Case №2 — технические характеристики

Тут уже другой кейс.

Ты собрал:

```text
technical_characteristics_1.xlsx
...
technical_characteristics_597.xlsx
```

и потом начал их структурировать.

---

# 24. Что ты сделал с таблицами

У тебя появился механизм:

```text
597 исходных файлов
 ↓
анализ структуры
 ↓
категории
 ↓
иерархия
 ↓
группировка
 ↓
русские названия
 ↓
отдельные книги
```

И потом:

```text
Технические характеристики/
```

с категоризированными Excel-книгами.

---

# 25. Ключевое правило, которое обязательно сохранить

Ты специально уточнил:

> **Ни один столбец нельзя удалять, если он существует в исходной структуре.**

Удалять можно только столбцы, которые **вообще полностью пустые во всём наборе данных, который обрабатывается по установленному правилу** — но не потому, что конкретной категории конкретная характеристика не подходит.

Это очень важное правило качества данных.

---

# 26. Excel formatting

Ты сделал:

```text
Roboto Condensed
левое выравнивание
гиперссылки
русские названия
```

Это хорошо как вспомогательная часть кейса.

Но не надо продавать:

> «Я форматировал Excel».

Форматирование — только финальный слой.

---

# 27. ETM Case №3 — привязка документов к характеристикам

Вот здесь становится ещё интереснее.

Ты связал:

```text
Код ETM
↓
catalog_hierarchy.xlsx
↓
Скачанные файлы
↓
downloads_full
↓
Excel
```

и сделал столбцы:

```text
Сертификат соответствия
Паспорт
РЭ
...
```

с гиперссылками.

---

# 28. Это можно описывать так

> **Автоматическая привязка технической характеристики товара к комплекту подтверждающих документов.**

То есть:

```text
товар
   ↓
характеристики
   ↓
сертификат
паспорт
РЭ
```

Это уже очень близко к реальной ПТО-логике.

---

# 29. OCR — следующий отдельный кейс

Ты прошёл несколько итераций:

```text
PyMuPDF
↓
RapidOCR
↓
MinerU
↓
OpenDataLoader
↓
Unlimited-OCR
↓
NotebookLM / Gemini
```

Это важно показать не как:

> «Я использовал OCR».

А как:

> **Построил многоступенчатый pipeline извлечения метаданных из технической документации.**

---

# 30. Структура OCR pipeline

```text
PDF
 ↓
native text extraction
 ↓
если текста недостаточно
 ↓
OCR
 ↓
структурированный текст
 ↓
извлечение:
├── тип документа
├── номер
├── дата
├── срок действия
└── производитель
```

---

# 31. Здесь у тебя есть важное правило

Ты несколько раз настоял:

> **Каждый документ должен проходить через OCR/извлечение.**

Потому что проблема предыдущего решения была:

```text
Сертификат
↓
не распознал
↓
Документ б-н
```

и ты справедливо это отверг.

Поэтому в портфолио обязательно показывать:

```text
OCR
 ↓
валидация
 ↓
уверенность
 ↓
ручная проверка
```

---

# 32. NotebookLM — отдельный сильный кейс

Это уже не просто OCR.

Ты решил использовать:

```text
5 блокнотов
×
до 50 документов в батче
```

и организовал pipeline:

```text
PDF
↓
NotebookLM
↓
инструкция
↓
Gemini
↓
JSON
↓
таблица
↓
переименование
```

---

# 33. И ты специально решил не удалять документы

Это важная часть workflow.

Ты захотел:

```text
5 блокнотов
до 300 источников
```

и видеть ответы NotebookLM.

Это превращает pipeline не просто в автоматизацию, а в **контролируемый процесс извлечения данных**.

---

# 34. Как показывать NotebookLM

Здесь видео будет значительно лучше Bento.

Сценарий:

```text
01. PDF
 ↓
02. Загрузка 50 файлов
 ↓
03. NotebookLM
 ↓
04. Persona / инструкция
 ↓
05. Ask
 ↓
06. JSON
 ↓
07. master_documents.xlsx
 ↓
08. переименованный PDF
```

Работодатель визуально понимает процесс за 10 секунд.

---

# 35. Переименование документов — самостоятельный кейс

Это вообще можно выделить.

Ты сформулировал строгий шаблон:

```text
[Очищенное наименование]
[Тип документа]
№[Номер]
с [Дата]
по [Дата]
[Производитель].pdf
```

Например:

```text
Кабель управления гибкий, ПВХ JZ-500 25G0.75
Сертификат соответствия
№ЕАЭС_RU_C-RU.08_26
с 12.02.2022 по 13.02.2026
Камкабель.pdf
```

---

# 36. Очистка названия

Это тоже важная часть твоего алгоритма.

Ты сформировал правила:

```text
лишнее → удалить
марку → сохранить
```

Например:

```text
Кабель пожарно-охранной сигнализации КПЭП...
↓
Кабель КПЭП...
```

и:

```text
... qmm grey
↓
удалить
```

---

# 37. Это можно подать как

> **Нормализация технических названий для унификации документной базы.**

Это уже полезно не только для ETM.

Это напрямую ведёт к твоей будущей собственной базе документов.

---

# 38. И вот здесь начинается твой новый большой проект

Ты сообщил, что постепенно собираешь:

```text
Паспорта
Сертификаты
Паспорта качества
ДКС
другие технические документы
```

То есть ты фактически создаёшь:

# **собственную библиотеку технической документации ПТО**

---

# 39. И твой мини-проект поиска — это уже следующий уровень

Ты показывал алгоритмы:

```text
homoglyph normalization
tokenization
SequenceMatcher
Jaccard
regex
MD5
```

---

# 40. Что делает твой Finder

Есть:

```text
Спецификация
```

например:

```text
ATN000111
```

И система ищет:

```text
паспорт
сертификат
отказное письмо
...
```

---

# 41. Очень сильная идея — омоглифы

Ты специально решаешь проблему:

```text
A ≠ А
x ≠ х
C ≠ С
```

для компьютера.

Но человек воспринимает:

```text
ВВГнг(A)
ВВГнг(А)
```

почти одинаково.

Ты это нормализуешь.

Это вполне достойно показать как отдельный technical badge:

```text
RU/EN homoglyph normalization
```

---

# 42. Но здесь я бы изменил архитектуру

Твоя текущая версия:

```text
SequenceMatcher
+
Jaccard
+
keyword overlap
```

хороша как MVP.

Но для серьёзной базы документов я бы развивал:

```text
1. exact article
2. normalized article
3. manufacturer
4. model
5. technical parameters
6. document type
7. fuzzy similarity
8. confidence
```

И только после этого:

```text
MATCH
CANDIDATE
MANUAL REVIEW
```

---

# 43. Очень важная проблема твоего текущего Finder

Например:

```text
ПуГВнг 1x4
```

и:

```text
ПуГВнг 1x6
```

текстово очень похожи.

Но для ПТО это **разные позиции**.

Поэтому:

```text
совпадает марка
+
не совпадает сечение
```

должно давать:

```text
ОТКЛОНЕНО
```

а не:

```text
80%
```

---

# 44. Поэтому будущий Finder должен иметь «технический fingerprint»

Например:

```text
ПуГВнг
1
4
мм²
```

или:

```text
ATN000185
```

или:

```text
MES5332A
```

или:

```text
R5CE0542
```

И уже fingerprint должен быть важнее обычной строки.

---

# 45. Твой Document Finder можно развить в главный продукт

Например:

```text
┌────────────────────────────────────────┐
│       ПОИСК ДОКУМЕНТОВ ПТО             │
├────────────────────────────────────────┤
│ Спецификация                           │
│                                        │
│ ATN000185                              │
│                                        │
│ [ Найти документы ]                    │
├────────────────────────────────────────┤
│ ✓ Паспорт                              │
│ ✓ Сертификат соответствия               │
│ ✓ Декларация                           │
│ ⚠ Отказное письмо                      │
└────────────────────────────────────────┘
```

А затем:

```text
[Сформировать комплект]
```

---

# 46. Вот тут соединяются все твои кейсы

И это самое интересное.

Получается единая система:

```text
                    ┌──────────────┐
                    │ СПЕЦИФИКАЦИЯ │
                    └──────┬───────┘
                           ↓
                   НОРМАЛИЗАЦИЯ
                           ↓
                ┌──────────┴──────────┐
                ↓                     ↓
          ТАБЛИЦЫ ПТО              ПОИСК
                ↓                     ↓
             ШАХМАТКА          БАЗА ДОКУМЕНТОВ
                ↓                     ↓
          КОНТРОЛЬ П/РД         П/СС/РЭ/ПД
                ↓                     ↓
                └──────────┬──────────┘
                           ↓
                       EXON
                           ↓
               ИСПОЛНИТЕЛЬНАЯ
                 ДОКУМЕНТАЦИЯ
```

---

# 47. И я бы именно так построил твой сайт

Не делать:

```text
Кейс 1
Кейс 2
Кейс 3
Кейс 4
...
```

как обычное резюме.

Лучше:

# **Система автоматизации ПТО**

А внутри:

### 01 — Контроль П ↔ РД

Power Query / Fuzzy Join / 1162 позиции

### 02 — Шахматка исполнительной документации

Excel / автоматическая нумерация / комплектность

### 03 — EXON JVK

Chrome Extension / CSV / автозаполнение / PDF

### 04 — ETM Data Pipeline

Playwright / Next.js / Python / Excel

### 05 — Техническая база документов

OCR / MinerU / RapidOCR / NotebookLM

### 06 — Document Finder

Поиск паспортов / сертификатов / fuzzy matching

---

# 48. Bento-структура главной страницы кейсов

Я бы сделал примерно так:

```text
┌──────────────────────────────┬─────────────────────┐
│                              │                     │
│     АВТОМАТИЗАЦИЯ ПТО        │    20 000+ PDF      │
│                              │                     │
│     От спецификации          │    DOCUMENT BASE    │
│     до EXON                  │                     │
│                              │                     │
├──────────────────────────────┼───────────┬─────────┤
│                              │           │         │
│      П ↔ РД                  │  POWER    │  EXON   │
│      CONTROL                 │  QUERY    │  JVK    │
│                              │           │         │
├───────────────────┬──────────┴───────────┴─────────┤
│                   │                                 │
│    ШАХМАТКА       │       DOCUMENT FINDER          │
│                   │                                 │
├───────────────────┴─────────────────────────────────┤
│                                                     │
│                 ETM DATA PIPELINE                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

# 49. Но внутри каждого кейса я бы показывал только 5 вещей

Это принципиально.

### 1. Problem

Что было сложно.

### 2. Solution

Что ты построил.

### 3. Workflow

Как оно работает.

### 4. Result

Конкретный результат.

### 5. Demo

Живое видео.

---

# 50. Например, карточка Power Query

**Контроль П ↔ РД**

> Автоматизированное сравнение объемов проектной и рабочей документации по инженерным системам.

```text
20 систем
1162 позиции
Fuzzy Join
Контроль дублей
Статус каждой позиции
```

Видео:

```text
Source
 ↓
Grouping
 ↓
Fuzzy Join
 ↓
Difference
 ↓
Status
```

---

# 51. Карточка EXON

**EXON JVK**

> Собственный браузерный инструмент для автоматического заполнения форм EXON и загрузки связанных PDF-документов.

```text
CSV
 ↓
позиция
 ↓
PDF
 ↓
EXON
```

---

# 52. Карточка ETM

**ETM Data Pipeline**

> Полный pipeline извлечения товарного каталога, технических характеристик и технической документации.

```text
59 629 товаров*
597 Excel
PDF
OCR
```

Звёздочка нужна, если цифра относится к конкретному запуску/срезу данных.

---

# 53. Карточка Document Finder

**Document Finder**

> Автоматический поиск технических документов по спецификации с нормализацией русских/латинских обозначений и удалением дублей.

```text
Specification
↓
Normalization
↓
Match
↓
Confidence
↓
Document set
```

---

# 54. Каким будет главное впечатление работодателя

Не:

> «Парень хорошо владеет Excel и немного программирует».

А:

> **«Он понимает процесс ПТО целиком и умеет автоматизировать отдельные участки этого процесса».**

Это принципиально другой уровень позиционирования.

---

# 55. Что особенно важно не испортить

Есть несколько вещей, которые я бы **не показывал как равнозначные**.

### Не делать главным:

```text
Roboto Condensed
цвета
границы Excel
changelog
красивые кнопки
```

Это только оболочка.

### Делать главным:

```text
логика
данные
контроль
автоматизация
связи между системами
результат
```

---

# 56. И ещё одна важная вещь — не смешивать «сделано» и «планируется»

В твоих материалах есть три состояния.

### Сделано

Например:

- Power Query сравнение;
- шахматка;
- ID;
- EXON extension;
- ETM crawler;
- обработка Excel;
- Document Finder MVP.

### Частично реализовано

Например:

- OCR pipeline;
- NotebookLM pipeline;
- база документов.

### Концепция / следующий этап

Например:

```text
автоматическое обновление:
СРАВНЕНИЕ
↓
ШАХМАТКА
↓
EXON
```

и:

```text
спецификация
↓
Document Finder
↓
автоматический комплект
```

Это нужно честно разделять на сайте.

---

# 57. А теперь самое главное — твой настоящий «hero case»

Я бы выбрал не Excel и не Chrome Extension.

А вот это:

# **«От спецификации до исполнительной документации»**

И показать внутри:

```text
СПЕЦИФИКАЦИЯ
       ↓
СРАВНЕНИЕ П ↔ РД
       ↓
ШАХМАТКА
       ↓
DOCUMENT FINDER
       ↓
ПАСПОРТА / СС / РЭ
       ↓
EXON JVK
       ↓
ИСПОЛНИТЕЛЬНАЯ ДОКУМЕНТАЦИЯ
```

А уже остальные проекты являются **технологическими модулями этой системы**.

Это гораздо сильнее обычного портфолио программиста или инженера ПТО.

---

# 58. И твоя история развития сама становится частью кейса

У тебя фактически уже есть narrative:

```text
Сначала:
Excel

↓
Потом:
Power Query

↓
Потом:
группировка и контроль

↓
Потом:
шахматка

↓
Потом:
Python

↓
Потом:
Chrome Extension

↓
Потом:
ETM crawler

↓
Потом:
OCR / NotebookLM

↓
Потом:
собственная база документов

↓
Следующий этап:
поиск и автоматическое комплектование
```

Это очень хорошая история для работодателя.

Она показывает не набор технологий, а **постепенное устранение ручного труда из реального производственного процесса**.

---

## Как бы я расставил кейсы на сайте

**01. Контроль объемов П ↔ РД** — самый сильный инженерный кейс.  
**02. Шахматка исполнительной документации** — управление данными и комплектностью.  
**03. EXON JVK** — собственная автоматизация.  
**04. ETM Data Pipeline** — Python + web scraping + большие массивы данных.  
**05. OCR / NotebookLM** — интеллектуальная обработка документов.  
**06. Document Finder** — собственная база паспортов и сертификатов.  
**07. Сквозной workflow ПТО** — объединяет всё в одну систему.

И вот **седьмой кейс** я бы сделал главным визуальным кейсом сайта, потому что именно он объясняет работодателю, зачем вообще существуют первые шесть.

---

**User:**

вот ещё работ с однолинейными схемами

## Contents

- [LLM Wiki](#llm-wiki)
  - [The core idea](#the-core-idea)
  - [Architecture](#architecture)
  - [Operations](#operations)
  - [Indexing and logging](#indexing-and-logging)
  - [Optional: CLI tools](#optional-cli-tools)
  - [Tips and tricks](#tips-and-tricks)
  - [Why this works](#why-this-works)
  - [Note](#note)

# LLM Wiki

A pattern for building personal knowledge bases using LLMs.

This is an idea file, it is designed to be copy pasted to your own LLM Agent (e.g. OpenAI Codex, Claude Code, OpenCode / Pi, or etc.). Its goal is to communicate the high level idea, but your agent will build out the specifics in collaboration with you.

## The core idea

Most people's experience with LLMs and documents looks like RAG: you upload a collection of files, the LLM retrieves relevant chunks at query time, and generates an answer. This works, but the LLM is rediscovering knowledge from scratch on every question. There's no accumulation. Ask a subtle question that requires synthesizing five documents, and the LLM has to find and piece together the relevant fragments every time. Nothing is built up. NotebookLM, ChatGPT file uploads, and most RAG systems work this way.

The idea here is different. Instead of just retrieving from raw documents at query time, the LLM **incrementally builds and maintains a persistent wiki** — a structured, interlinked collection of markdown files that sits between you and the raw sources. When you add a new source, the LLM doesn't just index it for later retrieval. It reads it, extracts the key information, and integrates it into the existing wiki — updating entity pages, revising topic summaries, noting where new data contradicts old claims, strengthening or challenging the evolving synthesis. The knowledge is compiled once and then *kept current*, not re-derived on every query.

This is the key difference: **the wiki is a persistent, compounding artifact.** The cross-references are already there. The contradictions have already been flagged. The synthesis already reflects everything you've read. The wiki keeps getting richer with every source you add and every question you ask.

You never (or rarely) write the wiki yourself — the LLM writes and maintains all of it. You're in charge of sourcing, exploration, and asking the right questions. The LLM does all the grunt work — the summarizing, cross-referencing, filing, and bookkeeping that makes a knowledge base actually useful over time. In practice, I have the LLM agent open on one side and Obsidian open on the other. The LLM makes edits based on our conversation, and I browse the results in real time — following links, checking the graph view, reading the updated pages. Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase.

This can apply to a lot of different contexts. A few examples:

- **Personal**: tracking your own goals, health, psychology, self-improvement — filing journal entries, articles, podcast notes, and building up a structured picture of yourself over time.
- **Research**: going deep on a topic over weeks or months — reading papers, articles, reports, and incrementally building a comprehensive wiki with an evolving thesis.
- **Reading a book**: filing each chapter as you go, building out pages for characters, themes, plot threads, and how they connect. By the end you have a rich companion wiki. Think of fan wikis like [Tolkien Gateway](https://tolkiengateway.net/wiki/Main_Page) — thousands of interlinked pages covering characters, places, events, languages, built by a community of volunteers over years. You could build something like that personally as you read, with the LLM doing all the cross-referencing and maintenance.
- **Business/team**: an internal wiki maintained by LLMs, fed by Slack threads, meeting transcripts, project documents, customer calls. Possibly with humans in the loop reviewing updates. The wiki stays current because the LLM does the maintenance that no one on the team wants to do.
- **Competitive analysis, due diligence, trip planning, course notes, hobby deep-dives** — anything where you're accumulating knowledge over time and want it organized rather than scattered.

## Architecture

There are three layers:

**Raw sources** — your curated collection of source documents. Articles, papers, images, data files. These are immutable — the LLM reads from them but never modifies them. This is your source of truth.

**The wiki** — a directory of LLM-generated markdown files. Summaries, entity pages, concept pages, comparisons, an overview, a synthesis. The LLM owns this layer entirely. It creates pages, updates them when new sources arrive, maintains cross-references, and keeps everything consistent. You read it; the LLM writes it.

**The schema** — a document (e.g. CLAUDE.md for Claude Code or AGENTS.md for Codex) that tells the LLM how the wiki is structured, what the conventions are, and what workflows to follow when ingesting sources, answering questions, or maintaining the wiki. This is the key configuration file — it's what makes the LLM a disciplined wiki maintainer rather than a generic chatbot. You and the LLM co-evolve this over time as you figure out what works for your domain.

## Operations

**Ingest.** You drop a new source into the raw collection and tell the LLM to process it. An example flow: the LLM reads the source, discusses key takeaways with you, writes a summary page in the wiki, updates the index, updates relevant entity and concept pages across the wiki, and appends an entry to the log. A single source might touch 10-15 wiki pages. Personally I prefer to ingest sources one at a time and stay involved — I read the summaries, check the updates, and guide the LLM on what to emphasize. But you could also batch-ingest many sources at once with less supervision. It's up to you to develop the workflow that fits your style and document it in the schema for future sessions.

**Query.** You ask questions against the wiki. The LLM searches for relevant pages, reads them, and synthesizes an answer with citations. Answers can take different forms depending on the question — a markdown page, a comparison table, a slide deck (Marp), a chart (matplotlib), a canvas. The important insight: **good answers can be filed back into the wiki as new pages.** A comparison you asked for, an analysis, a connection you discovered — these are valuable and shouldn't disappear into chat history. This way your explorations compound in the knowledge base just like ingested sources do.

**Lint.** Periodically, ask the LLM to health-check the wiki. Look for: contradictions between pages, stale claims that newer sources have superseded, orphan pages with no inbound links, important concepts mentioned but lacking their own page, missing cross-references, data gaps that could be filled with a web search. The LLM is good at suggesting new questions to investigate and new sources to look for. This keeps the wiki healthy as it grows.

## Indexing and logging

Two special files help the LLM (and you) navigate the wiki as it grows. They serve different purposes:

**index.md** is content-oriented. It's a catalog of everything in the wiki — each page listed with a link, a one-line summary, and optionally metadata like date or source count. Organized by category (entities, concepts, sources, etc.). The LLM updates it on every ingest. When answering a query, the LLM reads the index first to find relevant pages, then drills into them. This works surprisingly well at moderate scale (\~100 sources, \~hundreds of pages) and avoids the need for embedding-based RAG infrastructure.

**log.md** is chronological. It's an append-only record of what happened and when — ingests, queries, lint passes. A useful tip: if each entry starts with a consistent prefix (e.g. `## [2026-04-02] ingest | Article Title`), the log becomes parseable with simple unix tools — `grep "^## \[" log.md | tail -5` gives you the last 5 entries. The log gives you a timeline of the wiki's evolution and helps the LLM understand what's been done recently.

## Optional: CLI tools

At some point you may want to build small tools that help the LLM operate on the wiki more efficiently. A search engine over the wiki pages is the most obvious one — at small scale the index file is enough, but as the wiki grows you want proper search. [qmd](https://github.com/tobi/qmd) is a good option: it's a local search engine for markdown files with hybrid BM25/vector search and LLM re-ranking, all on-device. It has both a CLI (so the LLM can shell out to it) and an MCP server (so the LLM can use it as a native tool). You could also build something simpler yourself — the LLM can help you vibe-code a naive search script as the need arises.

## Tips and tricks

- **Obsidian Web Clipper** is a browser extension that converts web articles to markdown. Very useful for quickly getting sources into your raw collection.
- **Download images locally.** In Obsidian Settings → Files and links, set "Attachment folder path" to a fixed directory (e.g. `raw/assets/`). Then in Settings → Hotkeys, search for "Download" to find "Download attachments for current file" and bind it to a hotkey (e.g. Ctrl+Shift+D). After clipping an article, hit the hotkey and all images get downloaded to local disk. This is optional but useful — it lets the LLM view and reference images directly instead of relying on URLs that may break. Note that LLMs can't natively read markdown with inline images in one pass — the workaround is to have the LLM read the text first, then view some or all of the referenced images separately to gain additional context. It's a bit clunky but works well enough.
- **Obsidian's graph view** is the best way to see the shape of your wiki — what's connected to what, which pages are hubs, which are orphans.
- **Marp** is a markdown-based slide deck format. Obsidian has a plugin for it. Useful for generating presentations directly from wiki content.
- **Dataview** is an Obsidian plugin that runs queries over page frontmatter. If your LLM adds YAML frontmatter to wiki pages (tags, dates, source counts), Dataview can generate dynamic tables and lists.
- The wiki is just a git repo of markdown files. You get version history, branching, and collaboration for free.

## Why this works

The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping. Updating cross-references, keeping summaries current, noting when new data contradicts old claims, maintaining consistency across dozens of pages. Humans abandon wikis because the maintenance burden grows faster than the value. LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass. The wiki stays maintained because the cost of maintenance is near zero.

The human's job is to curate sources, direct the analysis, ask good questions, and think about what it all means. The LLM's job is everything else.

The idea is related in spirit to Vannevar Bush's Memex (1945) — a personal, curated knowledge store with associative trails between documents. Bush's vision was closer to this than to what the web became: private, actively curated, with the connections between documents as valuable as the documents themselves. The part he couldn't solve was who does the maintenance. The LLM handles that.

## Note

This document is intentionally abstract. It describes the idea, not a specific implementation. The exact directory structure, the schema conventions, the page formats, the tooling — all of that will depend on your domain, your preferences, and your LLM of choice. Everything mentioned above is optional and modular — pick what's useful, ignore what isn't. For example: your sources might be text-only, so you don't need image handling at all. Your wiki might be small enough that the index file is all you need, no search engine required. You might not care about slide decks and just want markdown pages. You might want a completely different set of output formats. The right way to use this is to share it with your LLM agent and work together to instantiate a version that fits your needs. The document's only job is to communicate the pattern. Your LLM can figure out the rest.



## Contents

- [Технические требования и проверки РД](#-)
  - [Каталог правил проверки РД (Axis Проверка РД)](#-axis-)
    - [Основные механизмы (из proverka-rd.md)](#-proverka-rdmd)
  - [Извлечение данных (Axis ВОР)](#-axis--1)
  - [Автоматически сгенерированный каталог документов](#--1)
    - [Axis ВОР](#axis-)
    - [Axis Проверка РД](#axis--1)
    - [Axis AI-ассистент](#axis-ai-)
    - [Общее](#h-9)

# Технические требования и проверки РД

Этот раздел каталогизирует технические требования, алгоритмы парсинга и конкретные проверки, применяемые в модулях Axis (особенно в Axis Проверка РД и Axis ВОР).

## Каталог правил проверки РД (Axis Проверка РД)

Базовые функции проверок включают сравнение стадий П/Р, нормоконтроль, комплектность и специфические кросс-проверки.

### Основные механизмы (из `proverka-rd.md`)

1. **Нормоконтроль оформления:** Проверка по ГОСТ 21.101 и 2.301 (заполнение штампов, нумерация листов, шрифты).
2. **Сравнение стадий П и РД:** Сравнение материалов, конструктивных решений и оборудования между утвержденным проектом и рабочей документацией.
3. **Перекрестная проверка спецификации и графики:** Двустороннее сопоставление (позиции из спецификации ищутся на чертеже, а маркировки с чертежа - в спецификации).
4. **Проверка сводных данных:** Например, сопоставление объёмов арматуры между спецификацией и ведомостью расхода стали (пересчёт массы по ГОСТ 34028).
5. **Сверка с BIM-моделью:** Сравнение данных из IFC/RVT с извлеченными данными из PDF-документации.

> [!TIP] При необходимости углубиться в конкретные проверки арматуры, муфт, кабельных журналов и т.д., обратитесь к соответствующим файлам в каталоге `raw/` (например, `raw/proverka-kolichestva-muft-v-kzh.md`, `raw/kr-konstruktivnye-resheniya.md`) и запустите команду на их инжест (Ingest) для подробного разбора алгоритма.

## Извлечение данных (Axis ВОР)

Модуль извлечения ориентирован на PDF-чертежи. Базовый пайплайн включает парсинг PDF, распознавание структуры листа, извлечение метаданных и сборку иерархии (как описано в `obshie-trebovaniya-po-izvlecheniyu-dannyh.md`). Маппинг на корпоративные справочники и расчет коэффициентов производятся на последующих этапах.

## Автоматически сгенерированный каталог документов

### Axis ВОР

- [Запуск ВОР, путь по разделам](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Czapusk-vor-put-po-razdelam.md)
- [Фильтрация таблиц проектной документации при формировании ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cfiltraciya-tablic-proektnoj-dokumentacii-pri-formirovanii-vor.md)
- [АР-унифицированный интерфейс](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Car-unificirovannyj-interfejs.md)
- [Основы работы с ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cosnovy-raboty-s-vor.md)
- [Материалы для продаж](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cmaterialy-dlya-prodazh.md)
- [Видение Axis](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvidenie-axis.md)
- [Процесс работы команды разработки](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cprocess-raboty-komandy-razrabotki.md)
- [Справочники](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cspravochniki.md)
- [Работа с pdf viewer](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crabota-s-pdf-viewer.md)
- [Какие данные извлекать](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Ckakie-dannye-izvlekat.md)
- [Backlog](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cbacklog.md)
- [Продуктовое видение axis](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproduktovoe-videnie-axis.md)
- [Axis Platform — Documentation](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Caxis-platform-documentation.md)
- [Агент предварительной стоимости строительства](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cagent-predvaritelnoj-stoimosti-stroitelstva.md)
- [AI ассистент](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cai-assistent.md)
- [Документы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cdokumenty.md)
- [АрхивСверка значений КЖ (кабельный журнал) со спецификацией](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivsverka-znachenij-kzh-kabelnyj-zhurnal-so-specifikaciej.md)
- [АрхивПроверка соответствия материалов в кабельном журнале, спецификации](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-sootvetstviya-materialov-v-kabelnom-zhurnale-specifikacii.md)
- [АрхивПроверка муфт КЖ и СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-muft-kzh-i-so.md)
- [Проверка массы за единицу продукции в спецификации СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-massy-za-edinicu-produkcii-v-specifikacii-so.md)
- [Сверка значений КЖ со спецификацией СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csverka-znachenij-kzh-so-specifikaciej-so.md)
- [Проверка количества муфт в КЖ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-kolichestva-muft-v-kzh.md)
- [Проверка соответствия диаметров кабелей и труб / металлорукавов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-sootvetstviya-diametrov-kabelej-i-trub-metallorukavov.md)
- [Математическая проверка итогов КЖ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cmatematicheskaya-proverka-itogov-kzh.md)
- [Проверка подобранных муфт в спецификации оборудования (СО) с учётом типов муфт](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-podobrannyh-muft-v-specifikacii-oborudovaniya-so-s-uchyotom-tipov-muft.md)
- [АрхивПроверка маркированных элементов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-markirovannyh-elementov.md)
- [Проверка маркированных элементов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-markirovannyh-elementov.md)
- [Проверка расчетов армирования (спец)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-raschetov-armirovaniya-spec.md)
- [Сверка спецификаций с ВРМ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csverka-specifikacij-s-vrm.md)
- [Арифметика ВРС](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carifmetika-vrs.md)
- [Проверка расчётов массы металлопроката](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-raschyotov-massy-metalloprokata.md)
- [Проверка полноты и комплектности (разрезы) v2](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-polnoty-i-komplektnosti-razrezy-v2.md)
- [Разрешение на изменение](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crazreshenie-na-izmenenie.md)
- [Ведомость рабочих чертежей](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvedomost-rabochih-chertezhej.md)
- [Содержание листа общих данных](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csoderzhanie-lista-obshih-dannyh.md)
- [Заполнение штампа](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Czapolnenie-shtampa.md)
- [Проверка соответствия раздела ПД требованиям ПП РФ № 87](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-sootvetstviya-razdela-pd-trebovaniyam-pp-rf-87.md)
- [Нормоконтроль оформления документации](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cnormokontrol-oformleniya-dokumentacii.md)
- [ИОС1 - Система электроснабжения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios1-sistema-elektrosnabzheniya.md)
- [ПБ — Мероприятия по обеспечению пожарной безопасности](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cpb-meropriyatiya-po-obespecheniyu-pozharnoj-bezopasnosti.md)
- [ЭЭ — Энергетическая эффективность](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cee-energeticheskaya-effektivnost.md)
- [ОДИ — Мероприятия по обеспечению доступа инвалидов (МГН)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Codi-meropriyatiya-po-obespecheniyu-dostupa-invalidov-mgn.md)
- [ИОС7 — Технологические решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios7-tehnologicheskie-resheniya.md)
- [ИОС 5, ИОС6— Системы связи и слаботочные системы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios-5-ios6-sistemy-svyazi-i-slabotochnye-sistemy.md)
- [ИОС4— Отопление, вентиляция и кондиционирование](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios4-otoplenie-ventilyaciya-i-kondicionirovanie.md)
- [ИОС2, ИОС3— Водоснабжение и водоотведение](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios2-ios3-vodosnabzhenie-i-vodootvedenie.md)
- [АР — Архитектурные решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Car-arhitekturnye-resheniya.md)
- [КР — Конструктивные решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Ckr-konstruktivnye-resheniya.md)
- [ГП — Генеральный план](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cgp-generalnyj-plan.md)
- [Общий пайплайн сверки стадий П и РД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cobshij-pajplajn-sverki-stadij-p-i-rd.md)
- [Проверка «Общих указаний» по всем разделам РД на основании ПД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-obshih-ukazanij-po-vsem-razdelam-rd-na-osnovanii-pd.md)
- [Анализ изменений спецификаций (между редакциями документов КЖ)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Canaliz-izmenenij-specifikacij-mezhdu-redakciyami-dokumentov-kzh.md)
- [Анализ изменений граф часть](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Canaliz-izmenenij-graf-chast.md)
- [Проверка РД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-rd.md)
- [Дмитрий Исаенков — статус по рабочим сессиям](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cdmitrij-isaenkov-status-po-rabochim-sessiyam.md)
- [Работа с ИЗМ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crabota-s-izm.md)
- [\[Проверка данных ВОР\] Группировка и иерархия](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-dannyh-vor-gruppirovka-i-ierarhiya.md)
- [Формирование ВОР по разделу АР (чистовая отделка)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cformirovanie-vor-po-razdelu-ar-chistovaya-otdelka.md)
- [Инженерные системы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cinzhenernye-sistemy.md)
- [Извлечение данных из "Сборников"](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cizvlechenie-dannyh-iz-sbornikov.md)
- [ВОР-сборный жб.](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvor-sbornyj-zhb.md)
- [Плюсдевелопмент](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cplyusdevelopment.md)
- [Бизнес-требования: версионирование ВОР (Glorax / AXIS)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cbiznes-trebovaniya-versionirovanie-vor-glorax-axis.md)
- [ХСК](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Chsk.md)
- [Определение классификатора для позиции ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Copredelenie-klassifikatora-dlya-pozicii-vor.md)
- [Level. ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Clevel-vor.md)
- [Фильтры-Марка чертежа](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cfiltry-marka-chertezha.md)
- [Извлечение данных из примечаний](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cizvlechenie-dannyh-iz-primechanij.md)
- [Общие требования по извлечению данных](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cobshie-trebovaniya-po-izvlecheniyu-dannyh.md)

### Axis Проверка РД

- [Соответствие титула и штампа](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Csootvetstvie-titula-i-shtampa.md)
- [Статус НТД](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Cstatus-ntd.md)
- [ПОС — Проект организации строительства](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Cpos-proekt-organizacii-stroitelstva.md)

### Axis AI-ассистент

- [Главная страница](technical%5CAxis_AI-%D0%B0%D1%81%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BD%D1%82%5Cglavnaya-stranica.md)

### Общее

- [Модель данных](technical%5C%D0%9E%D0%B1%D1%89%D0%B5%D0%B5%5Cmodel-dannyh.md)
- [Дизайн система и навигация](technical%5C%D0%9E%D0%B1%D1%89%D0%B5%D0%B5%5Cdizajn-sistema-i-navigaciya.md)
- Contents
  - [Технические требования и проверки РД](#-)
    - [Каталог правил проверки РД (Axis Проверка РД)](#-axis-)
      - [Основные механизмы (из proverka-rd.md)](#-proverka-rdmd)
    - [Извлечение данных (Axis ВОР)](#-axis--1)
    - [Автоматически сгенерированный каталог документов](#--1)
      - [Axis ВОР](#axis-)
      - [Axis Проверка РД](#axis--1)
      - [Axis AI-ассистент](#axis-ai-)
      - [Общее](#h-9)
  # Технические требования и проверки РД
  Этот раздел каталогизирует технические требования, алгоритмы парсинга и конкретные проверки, применяемые в модулях Axis (особенно в Axis Проверка РД и Axis ВОР).
  ## Каталог правил проверки РД (Axis Проверка РД)
  Базовые функции проверок включают сравнение стадий П/Р, нормоконтроль, комплектность и специфические кросс-проверки.
  ### Основные механизмы (из `proverka-rd.md`)
  1. **Нормоконтроль оформления:** Проверка по ГОСТ 21.101 и 2.301 (заполнение штампов, нумерация листов, шрифты).
  2. **Сравнение стадий П и РД:** Сравнение материалов, конструктивных решений и оборудования между утвержденным проектом и рабочей документацией.
  3. **Перекрестная проверка спецификации и графики:** Двустороннее сопоставление (позиции из спецификации ищутся на чертеже, а маркировки с чертежа - в спецификации).
  4. **Проверка сводных данных:** Например, сопоставление объёмов арматуры между спецификацией и ведомостью расхода стали (пересчёт массы по ГОСТ 34028).
  5. **Сверка с BIM-моделью:** Сравнение данных из IFC/RVT с извлеченными данными из PDF-документации.
  > [!TIP] При необходимости углубиться в конкретные проверки арматуры, муфт, кабельных журналов и т.д., обратитесь к соответствующим файлам в каталоге `raw/` (например, `raw/proverka-kolichestva-muft-v-kzh.md`, `raw/kr-konstruktivnye-resheniya.md`) и запустите команду на их инжест (Ingest) для подробного разбора алгоритма.
  ## Извлечение данных (Axis ВОР)
  Модуль извлечения ориентирован на PDF-чертежи. Базовый пайплайн включает парсинг PDF, распознавание структуры листа, извлечение метаданных и сборку иерархии (как описано в `obshie-trebovaniya-po-izvlecheniyu-dannyh.md`). Маппинг на корпоративные справочники и расчет коэффициентов производятся на последующих этапах.
  ## Автоматически сгенерированный каталог документов
  ### Axis ВОР
  - [Запуск ВОР, путь по разделам](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Czapusk-vor-put-po-razdelam.md)
  - [Фильтрация таблиц проектной документации при формировании ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cfiltraciya-tablic-proektnoj-dokumentacii-pri-formirovanii-vor.md)
  - [АР-унифицированный интерфейс](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Car-unificirovannyj-interfejs.md)
  - [Основы работы с ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cosnovy-raboty-s-vor.md)
  - [Материалы для продаж](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cmaterialy-dlya-prodazh.md)
  - [Видение Axis](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvidenie-axis.md)
  - [Процесс работы команды разработки](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cprocess-raboty-komandy-razrabotki.md)
  - [Справочники](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cspravochniki.md)
  - [Работа с pdf viewer](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crabota-s-pdf-viewer.md)
  - [Какие данные извлекать](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Ckakie-dannye-izvlekat.md)
  - [Backlog](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cbacklog.md)
  - [Продуктовое видение axis](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproduktovoe-videnie-axis.md)
  - [Axis Platform — Documentation](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Caxis-platform-documentation.md)
  - [Агент предварительной стоимости строительства](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cagent-predvaritelnoj-stoimosti-stroitelstva.md)
  - [AI ассистент](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cai-assistent.md)
  - [Документы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cdokumenty.md)
  - [АрхивСверка значений КЖ (кабельный журнал) со спецификацией](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivsverka-znachenij-kzh-kabelnyj-zhurnal-so-specifikaciej.md)
  - [АрхивПроверка соответствия материалов в кабельном журнале, спецификации](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-sootvetstviya-materialov-v-kabelnom-zhurnale-specifikacii.md)
  - [АрхивПроверка муфт КЖ и СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-muft-kzh-i-so.md)
  - [Проверка массы за единицу продукции в спецификации СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-massy-za-edinicu-produkcii-v-specifikacii-so.md)
  - [Сверка значений КЖ со спецификацией СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csverka-znachenij-kzh-so-specifikaciej-so.md)
  - [Проверка количества муфт в КЖ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-kolichestva-muft-v-kzh.md)
  - [Проверка соответствия диаметров кабелей и труб / металлорукавов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-sootvetstviya-diametrov-kabelej-i-trub-metallorukavov.md)
  - [Математическая проверка итогов КЖ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cmatematicheskaya-proverka-itogov-kzh.md)
  - [Проверка подобранных муфт в спецификации оборудования (СО) с учётом типов муфт](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-podobrannyh-muft-v-specifikacii-oborudovaniya-so-s-uchyotom-tipov-muft.md)
  - [АрхивПроверка маркированных элементов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-markirovannyh-elementov.md)
  - [Проверка маркированных элементов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-markirovannyh-elementov.md)
  - [Проверка расчетов армирования (спец)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-raschetov-armirovaniya-spec.md)
  - [Сверка спецификаций с ВРМ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csverka-specifikacij-s-vrm.md)
  - [Арифметика ВРС](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carifmetika-vrs.md)
  - [Проверка расчётов массы металлопроката](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-raschyotov-massy-metalloprokata.md)
  - [Проверка полноты и комплектности (разрезы) v2](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-polnoty-i-komplektnosti-razrezy-v2.md)
  - [Разрешение на изменение](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crazreshenie-na-izmenenie.md)
  - [Ведомость рабочих чертежей](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvedomost-rabochih-chertezhej.md)
  - [Содержание листа общих данных](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csoderzhanie-lista-obshih-dannyh.md)
  - [Заполнение штампа](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Czapolnenie-shtampa.md)
  - [Проверка соответствия раздела ПД требованиям ПП РФ № 87](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-sootvetstviya-razdela-pd-trebovaniyam-pp-rf-87.md)
  - [Нормоконтроль оформления документации](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cnormokontrol-oformleniya-dokumentacii.md)
  - [ИОС1 - Система электроснабжения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios1-sistema-elektrosnabzheniya.md)
  - [ПБ — Мероприятия по обеспечению пожарной безопасности](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cpb-meropriyatiya-po-obespecheniyu-pozharnoj-bezopasnosti.md)
  - [ЭЭ — Энергетическая эффективность](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cee-energeticheskaya-effektivnost.md)
  - [ОДИ — Мероприятия по обеспечению доступа инвалидов (МГН)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Codi-meropriyatiya-po-obespecheniyu-dostupa-invalidov-mgn.md)
  - [ИОС7 — Технологические решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios7-tehnologicheskie-resheniya.md)
  - [ИОС 5, ИОС6— Системы связи и слаботочные системы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios-5-ios6-sistemy-svyazi-i-slabotochnye-sistemy.md)
  - [ИОС4— Отопление, вентиляция и кондиционирование](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios4-otoplenie-ventilyaciya-i-kondicionirovanie.md)
  - [ИОС2, ИОС3— Водоснабжение и водоотведение](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios2-ios3-vodosnabzhenie-i-vodootvedenie.md)
  - [АР — Архитектурные решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Car-arhitekturnye-resheniya.md)
  - [КР — Конструктивные решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Ckr-konstruktivnye-resheniya.md)
  - [ГП — Генеральный план](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cgp-generalnyj-plan.md)
  - [Общий пайплайн сверки стадий П и РД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cobshij-pajplajn-sverki-stadij-p-i-rd.md)
  - [Проверка «Общих указаний» по всем разделам РД на основании ПД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-obshih-ukazanij-po-vsem-razdelam-rd-na-osnovanii-pd.md)
  - [Анализ изменений спецификаций (между редакциями документов КЖ)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Canaliz-izmenenij-specifikacij-mezhdu-redakciyami-dokumentov-kzh.md)
  - [Анализ изменений граф часть](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Canaliz-izmenenij-graf-chast.md)
  - [Проверка РД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-rd.md)
  - [Дмитрий Исаенков — статус по рабочим сессиям](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cdmitrij-isaenkov-status-po-rabochim-sessiyam.md)
  - [Работа с ИЗМ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crabota-s-izm.md)
  - [\[Проверка данных ВОР\] Группировка и иерархия](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-dannyh-vor-gruppirovka-i-ierarhiya.md)
  - [Формирование ВОР по разделу АР (чистовая отделка)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cformirovanie-vor-po-razdelu-ar-chistovaya-otdelka.md)
  - [Инженерные системы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cinzhenernye-sistemy.md)
  - [Извлечение данных из "Сборников"](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cizvlechenie-dannyh-iz-sbornikov.md)
  - [ВОР-сборный жб.](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvor-sbornyj-zhb.md)
  - [Плюсдевелопмент](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cplyusdevelopment.md)
  - [Бизнес-требования: версионирование ВОР (Glorax / AXIS)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cbiznes-trebovaniya-versionirovanie-vor-glorax-axis.md)
  - [ХСК](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Chsk.md)
  - [Определение классификатора для позиции ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Copredelenie-klassifikatora-dlya-pozicii-vor.md)
  - [Level. ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Clevel-vor.md)
  - [Фильтры-Марка чертежа](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cfiltry-marka-chertezha.md)
  - [Извлечение данных из примечаний](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cizvlechenie-dannyh-iz-primechanij.md)
  - [Общие требования по извлечению данных](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cobshie-trebovaniya-po-izvlecheniyu-dannyh.md)
  ### Axis Проверка РД
  - [Соответствие титула и штампа](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Csootvetstvie-titula-i-shtampa.md)
  - [Статус НТД](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Cstatus-ntd.md)
  - [ПОС — Проект организации строительства](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Cpos-proekt-organizacii-stroitelstva.md)
  ### Axis AI-ассистент
  - [Главная страница](technical%5CAxis_AI-%D0%B0%D1%81%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BD%D1%82%5Cglavnaya-stranica.md)
  ### Общее
  - [Модель данных](technical%5C%D0%9E%D0%B1%D1%89%D0%B5%D0%B5%5Cmodel-dannyh.md)
  - [Дизайн система и навигация](technical%5C%D0%9E%D0%B1%D1%89%D0%B5%D0%B5%5Cdizajn-sistema-i-navigaciya.md)  уберем AXIS упоминания все из того что я буду скидывать
- это ещ1 ёи разрабатываю я проект д ярботы по сверке документации между собой и версиями
- Contents
  - [Технические требования и проверки РД](#-)
    - [Каталог правил проверки РД (Axis Проверка РД)](#-axis-)
      - [Основные механизмы (из proverka-rd.md)](#-proverka-rdmd)
    - [Извлечение данных (Axis ВОР)](#-axis--1)
    - [Автоматически сгенерированный каталог документов](#--1)
      - [Axis ВОР](#axis-)
      - [Axis Проверка РД](#axis--1)
      - [Axis AI-ассистент](#axis-ai-)
      - [Общее](#h-9)
  # Технические требования и проверки РД
  Этот раздел каталогизирует технические требования, алгоритмы парсинга и конкретные проверки, применяемые в модулях Axis (особенно в Axis Проверка РД и Axis ВОР).
  ## Каталог правил проверки РД (Axis Проверка РД)
  Базовые функции проверок включают сравнение стадий П/Р, нормоконтроль, комплектность и специфические кросс-проверки.
  ### Основные механизмы (из `proverka-rd.md`)
  1. **Нормоконтроль оформления:** Проверка по ГОСТ 21.101 и 2.301 (заполнение штампов, нумерация листов, шрифты).
  2. **Сравнение стадий П и РД:** Сравнение материалов, конструктивных решений и оборудования между утвержденным проектом и рабочей документацией.
  3. **Перекрестная проверка спецификации и графики:** Двустороннее сопоставление (позиции из спецификации ищутся на чертеже, а маркировки с чертежа - в спецификации).
  4. **Проверка сводных данных:** Например, сопоставление объёмов арматуры между спецификацией и ведомостью расхода стали (пересчёт массы по ГОСТ 34028).
  5. **Сверка с BIM-моделью:** Сравнение данных из IFC/RVT с извлеченными данными из PDF-документации.
  > [!TIP] При необходимости углубиться в конкретные проверки арматуры, муфт, кабельных журналов и т.д., обратитесь к соответствующим файлам в каталоге `raw/` (например, `raw/proverka-kolichestva-muft-v-kzh.md`, `raw/kr-konstruktivnye-resheniya.md`) и запустите команду на их инжест (Ingest) для подробного разбора алгоритма.
  ## Извлечение данных (Axis ВОР)
  Модуль извлечения ориентирован на PDF-чертежи. Базовый пайплайн включает парсинг PDF, распознавание структуры листа, извлечение метаданных и сборку иерархии (как описано в `obshie-trebovaniya-po-izvlecheniyu-dannyh.md`). Маппинг на корпоративные справочники и расчет коэффициентов производятся на последующих этапах.
  ## Автоматически сгенерированный каталог документов
  ### Axis ВОР
  - [Запуск ВОР, путь по разделам](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Czapusk-vor-put-po-razdelam.md)
  - [Фильтрация таблиц проектной документации при формировании ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cfiltraciya-tablic-proektnoj-dokumentacii-pri-formirovanii-vor.md)
  - [АР-унифицированный интерфейс](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Car-unificirovannyj-interfejs.md)
  - [Основы работы с ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cosnovy-raboty-s-vor.md)
  - [Материалы для продаж](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cmaterialy-dlya-prodazh.md)
  - [Видение Axis](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvidenie-axis.md)
  - [Процесс работы команды разработки](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cprocess-raboty-komandy-razrabotki.md)
  - [Справочники](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cspravochniki.md)
  - [Работа с pdf viewer](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crabota-s-pdf-viewer.md)
  - [Какие данные извлекать](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Ckakie-dannye-izvlekat.md)
  - [Backlog](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cbacklog.md)
  - [Продуктовое видение axis](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproduktovoe-videnie-axis.md)
  - [Axis Platform — Documentation](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Caxis-platform-documentation.md)
  - [Агент предварительной стоимости строительства](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cagent-predvaritelnoj-stoimosti-stroitelstva.md)
  - [AI ассистент](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cai-assistent.md)
  - [Документы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cdokumenty.md)
  - [АрхивСверка значений КЖ (кабельный журнал) со спецификацией](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivsverka-znachenij-kzh-kabelnyj-zhurnal-so-specifikaciej.md)
  - [АрхивПроверка соответствия материалов в кабельном журнале, спецификации](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-sootvetstviya-materialov-v-kabelnom-zhurnale-specifikacii.md)
  - [АрхивПроверка муфт КЖ и СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-muft-kzh-i-so.md)
  - [Проверка массы за единицу продукции в спецификации СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-massy-za-edinicu-produkcii-v-specifikacii-so.md)
  - [Сверка значений КЖ со спецификацией СО](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csverka-znachenij-kzh-so-specifikaciej-so.md)
  - [Проверка количества муфт в КЖ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-kolichestva-muft-v-kzh.md)
  - [Проверка соответствия диаметров кабелей и труб / металлорукавов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-sootvetstviya-diametrov-kabelej-i-trub-metallorukavov.md)
  - [Математическая проверка итогов КЖ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cmatematicheskaya-proverka-itogov-kzh.md)
  - [Проверка подобранных муфт в спецификации оборудования (СО) с учётом типов муфт](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-podobrannyh-muft-v-specifikacii-oborudovaniya-so-s-uchyotom-tipov-muft.md)
  - [АрхивПроверка маркированных элементов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carhivproverka-markirovannyh-elementov.md)
  - [Проверка маркированных элементов](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-markirovannyh-elementov.md)
  - [Проверка расчетов армирования (спец)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-raschetov-armirovaniya-spec.md)
  - [Сверка спецификаций с ВРМ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csverka-specifikacij-s-vrm.md)
  - [Арифметика ВРС](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Carifmetika-vrs.md)
  - [Проверка расчётов массы металлопроката](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-raschyotov-massy-metalloprokata.md)
  - [Проверка полноты и комплектности (разрезы) v2](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-polnoty-i-komplektnosti-razrezy-v2.md)
  - [Разрешение на изменение](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crazreshenie-na-izmenenie.md)
  - [Ведомость рабочих чертежей](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvedomost-rabochih-chertezhej.md)
  - [Содержание листа общих данных](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Csoderzhanie-lista-obshih-dannyh.md)
  - [Заполнение штампа](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Czapolnenie-shtampa.md)
  - [Проверка соответствия раздела ПД требованиям ПП РФ № 87](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-sootvetstviya-razdela-pd-trebovaniyam-pp-rf-87.md)
  - [Нормоконтроль оформления документации](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cnormokontrol-oformleniya-dokumentacii.md)
  - [ИОС1 - Система электроснабжения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios1-sistema-elektrosnabzheniya.md)
  - [ПБ — Мероприятия по обеспечению пожарной безопасности](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cpb-meropriyatiya-po-obespecheniyu-pozharnoj-bezopasnosti.md)
  - [ЭЭ — Энергетическая эффективность](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cee-energeticheskaya-effektivnost.md)
  - [ОДИ — Мероприятия по обеспечению доступа инвалидов (МГН)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Codi-meropriyatiya-po-obespecheniyu-dostupa-invalidov-mgn.md)
  - [ИОС7 — Технологические решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios7-tehnologicheskie-resheniya.md)
  - [ИОС 5, ИОС6— Системы связи и слаботочные системы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios-5-ios6-sistemy-svyazi-i-slabotochnye-sistemy.md)
  - [ИОС4— Отопление, вентиляция и кондиционирование](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios4-otoplenie-ventilyaciya-i-kondicionirovanie.md)
  - [ИОС2, ИОС3— Водоснабжение и водоотведение](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cios2-ios3-vodosnabzhenie-i-vodootvedenie.md)
  - [АР — Архитектурные решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Car-arhitekturnye-resheniya.md)
  - [КР — Конструктивные решения](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Ckr-konstruktivnye-resheniya.md)
  - [ГП — Генеральный план](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cgp-generalnyj-plan.md)
  - [Общий пайплайн сверки стадий П и РД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cobshij-pajplajn-sverki-stadij-p-i-rd.md)
  - [Проверка «Общих указаний» по всем разделам РД на основании ПД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-obshih-ukazanij-po-vsem-razdelam-rd-na-osnovanii-pd.md)
  - [Анализ изменений спецификаций (между редакциями документов КЖ)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Canaliz-izmenenij-specifikacij-mezhdu-redakciyami-dokumentov-kzh.md)
  - [Анализ изменений граф часть](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Canaliz-izmenenij-graf-chast.md)
  - [Проверка РД](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-rd.md)
  - [Дмитрий Исаенков — статус по рабочим сессиям](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cdmitrij-isaenkov-status-po-rabochim-sessiyam.md)
  - [Работа с ИЗМ](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Crabota-s-izm.md)
  - [\[Проверка данных ВОР\] Группировка и иерархия](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cproverka-dannyh-vor-gruppirovka-i-ierarhiya.md)
  - [Формирование ВОР по разделу АР (чистовая отделка)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cformirovanie-vor-po-razdelu-ar-chistovaya-otdelka.md)
  - [Инженерные системы](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cinzhenernye-sistemy.md)
  - [Извлечение данных из "Сборников"](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cizvlechenie-dannyh-iz-sbornikov.md)
  - [ВОР-сборный жб.](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cvor-sbornyj-zhb.md)
  - [Плюсдевелопмент](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cplyusdevelopment.md)
  - [Бизнес-требования: версионирование ВОР (Glorax / AXIS)](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cbiznes-trebovaniya-versionirovanie-vor-glorax-axis.md)
  - [ХСК](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Chsk.md)
  - [Определение классификатора для позиции ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Copredelenie-klassifikatora-dlya-pozicii-vor.md)
  - [Level. ВОР](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Clevel-vor.md)
  - [Фильтры-Марка чертежа](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cfiltry-marka-chertezha.md)
  - [Извлечение данных из примечаний](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cizvlechenie-dannyh-iz-primechanij.md)
  - [Общие требования по извлечению данных](technical%5CAxis_%D0%92%D0%9E%D0%A0%5Cobshie-trebovaniya-po-izvlecheniyu-dannyh.md)
  ### Axis Проверка РД
  - [Соответствие титула и штампа](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Csootvetstvie-titula-i-shtampa.md)
  - [Статус НТД](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Cstatus-ntd.md)
  - [ПОС — Проект организации строительства](technical%5CAxis_%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%A0%D0%94%5Cpos-proekt-organizacii-stroitelstva.md)
  ### Axis AI-ассистент
  - [Главная страница](technical%5CAxis_AI-%D0%B0%D1%81%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BD%D1%82%5Cglavnaya-stranica.md)
  ### Общее
  - [Модель данных](technical%5C%D0%9E%D0%B1%D1%89%D0%B5%D0%B5%5Cmodel-dannyh.md)
  - [Дизайн система и навигация](technical%5C%D0%9E%D0%B1%D1%89%D0%B5%D0%B5%5Cdizajn-sistema-i-navigaciya.md)
- Contents
  - [Wiki Operation Log](#wiki-operation-log)
    - [\[2026-07-27\] init | Initialize Wiki](#2026-07-27-init-initialize-wiki)
    - [\[2026-07-27\] ingest | Core Platform Documents](#2026-07-27-ingest-core-platform-documents)
    - [\[2026-07-27\] config | Domain Context & Technical Index](#2026-07-27-config-domain-context-technical-index)
    - [\[2026-07-27\] ingest | Batch Process Raw Technical Files](#2026-07-27-ingest-batch-process-raw-technical-files)
    - [\[2026-07-28\] ingest | Однолинейные схемы ВРУ-ИТП](#2026-07-28-ingest-)
    - [\[2026-07-28\] feature | Install find-skills & Create Plan Enhancements](#2026-07-28-feature-install-find-skills-create-plan-enhancements)
    - [\[2026-07-28\] feature | PDF Parser Sandbox Testing](#2026-07-28-feature-pdf-parser-sandbox-testing)
    - [\[2026-07-28\] feature | PDF Skills Installation](#2026-07-28-feature-pdf-skills-installation)
    - [\[2026-07-28\] feature | Digitize and Validate Workflow Specification (loop-me)](#2026-07-28-feature-digitize-and-validate-workflow-specification-loop-me)
    - [\[2026-07-28\] feature | Second Iteration: Automated Workflow Execution (run\_workflow.py)](#2026-07-28-feature-second-iteration-automated-workflow-execution-runworkflowpy)
    - [\[2026-07-28\] doc | Update Manual Checks Document (raw/AXIS\_Алгоритм\_ручных\_проверок)](#2026-07-28-doc-update-manual-checks-document-rawaxis)
    - [\[2026-07-28\] feature | Update Golden Examples (examples/)](#2026-07-28-feature-update-golden-examples-examples)
    - [\[2026-07-28\] feature | Expand Project Roadmap (PLAN\_ENHANCEMENTS.md)](#2026-07-28-feature-expand-project-roadmap-planenhancementsmd)
    - [\[2026-07-28\] ingest | Task 2: Electric Illumination (Задача 2 Электроосвещение)](#2026-07-28-ingest-task-2-electric-illumination-2-)
    - [\[2026-07-31\] ingest | Однолинейные схемы (12 комплектов)](#2026-07-31-ingest-12-)
    - [\[2026-07-31\] ingest | Задача 153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)](#2026-07-31-ingest-153-0920-1-0-3-2-10042024)
    - [\[2026-07-31\] ingest | Задача 153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)](#2026-07-31-ingest-153-0920-1-2-1-4-16052024)
    - [\[2026-07-31\] ingest | Задача 153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)](#2026-07-31-ingest-153-0920-1-2-2-2-19032024)
    - [\[2026-07-31\] ingest | Задача 26-0220-ОК-1Н-ЭОМ1\_изм10\_291123(ЭЦП 08.12.2023)](#2026-07-31-ingest-26-0220-1-110291123-08122023)
    - [\[2026-07-31\] ingest | Задача 26-0220-ОК-1Н-ЭОМ2\_изм10\_231123(ЭЦП 07.12.2023)](#2026-07-31-ingest-26-0220-1-210231123-07122023)
    - [\[2026-07-31\] ingest | Задача 26-0220-ОК-1Н-ЭОМ4\_изм.03 (ЭЦП 23.12.2022)](#2026-07-31-ingest-26-0220-1-403-23122022)
    - [\[2026-07-31\] ingest | Задача 99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)](#2026-07-31-ingest-99-0519-1-03082023)
    - [\[2026-07-31\] ingest | Задача 99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)](#2026-07-31-ingest-99-0519-1-6-27112024)
    - [\[2026-07-31\] ingest | Задача 99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)](#2026-07-31-ingest-99-0519-1-5-14112024)
    - [\[2026-07-31\] ingest | Задача 99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)](#2026-07-31-ingest-99-0519-1-5-14112024-1)
    - [\[2026-07-31\] ingest | Задача АНО\_2022-002-РД-ЭОМ](#2026-07-31-ingest-2022-002-)
    - [\[2026-07-31\] ingest | Задача К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM](#2026-07-31-ingest-5-4-nm)
    - [\[2026-07-31\] ingest | Точная оцифровка 153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)](#2026-07-31-ingest-153-0920-1-0-3-2-10042024-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)](#2026-07-31-ingest-153-0920-1-2-1-4-16052024-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)](#2026-07-31-ingest-153-0920-1-2-2-2-19032024-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 26-0220-ОК-1Н-ЭОМ1\_изм10\_291123(ЭЦП 08.12.2023)](#2026-07-31-ingest-26-0220-1-110291123-08122023-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 26-0220-ОК-1Н-ЭОМ2\_изм10\_231123(ЭЦП 07.12.2023)](#2026-07-31-ingest-26-0220-1-210231123-07122023-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 26-0220-ОК-1Н-ЭОМ4\_изм.03 (ЭЦП 23.12.2022)](#2026-07-31-ingest-26-0220-1-403-23122022-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)](#2026-07-31-ingest-99-0519-1-03082023-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)](#2026-07-31-ingest-99-0519-1-6-27112024-1)
    - [\[2026-07-31\] ingest | Точная оцифровка 99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)](#2026-07-31-ingest-99-0519-1-5-14112024-2)
    - [\[2026-07-31\] ingest | Точная оцифровка 99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)](#2026-07-31-ingest-99-0519-1-5-14112024-3)
    - [\[2026-07-31\] ingest | Точная оцифровка АНО\_2022-002-РД-ЭОМ](#2026-07-31-ingest-2022-002--1)
    - [\[2026-07-31\] ingest | Точная оцифровка К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM](#2026-07-31-ingest-5-4-nm-1)
    - [\[2026-07-31\] ingest | Интеграция OpenDataLoader PDF + 5-этапная валидация (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))](#2026-07-31-ingest-opendataloader-pdf-5-153-0920-1-0-3-2-10042024)
    - [\[2026-07-31\] ingest | Интеграция OpenDataLoader PDF + 5-этапный аудит (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))](#2026-07-31-ingest-opendataloader-pdf-5-153-0920-1-0-3-2-10042024-1)
    - [\[2026-07-31\] ingest | Конвейер v2.0 + OpenDataLoader (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))](#2026-07-31-ingest-v20-opendataloader-153-0920-1-0-3-2-10042024)
    - [\[2026-07-31\] ingest | Конвейер v2.0 + OpenDataLoader (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))](#2026-07-31-ingest-v20-opendataloader-153-0920-1-0-3-2-10042024-1)
    - [\[2026-07-31\] ingest | Веб-Интерфейс OpenDataLoader Viewer (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))](#2026-07-31-ingest-opendataloader-viewer-153-0920-1-0-3-2-10042024)
    - [\[2026-07-31\] ingest | Интеграция OpenDataLoader PDF + 5-этапный аудит (153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024))](#2026-07-31-ingest-opendataloader-pdf-5-153-0920-1-2-1-4-16052024)
    - [\[2026-07-31\] ingest | Интеграция OpenDataLoader PDF + 5-этапный аудит (153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024))](#2026-07-31-ingest-opendataloader-pdf-5-153-0920-1-2-2-2-19032024)
    - [\[2026-07-31\] ingest | Интеграция OpenDataLoader PDF + 5-этапная валидация (153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024))](#2026-07-31-ingest-opendataloader-pdf-5-153-0920-1-2-1-4-16052024-1)
    - [\[2026-07-31\] ingest | Интеграция OpenDataLoader PDF + 5-этапная валидация (153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024))](#2026-07-31-ingest-opendataloader-pdf-5-153-0920-1-2-2-2-19032024-1)
  # Wiki Operation Log
  This is an append-only chronological record of wiki operations.
  ## [2026-07-27] init | Initialize Wiki
  Initialized the LLM Wiki architecture in the repository.
  ## [2026-07-27] ingest | Core Platform Documents
  Ingested videnie-axis.md, produktovoe-videnie-axis.md, axis-platform-documentation.md, and ai-assistent.md. Created concept and product pages.
  ## [2026-07-27] config | Domain Context & Technical Index
  Updated AGENTS.md with Axis domain context. Created technical-index.md referencing proverka-rd.md and data extraction rules.
  ## [2026-07-27] ingest | Batch Process Raw Technical Files
  Automated ingestion of 76 files from raw/ into wiki/technical/. Created Obsidian-linked summary cards categorized by module (ВОР, Проверка РД, Ассистент, Общее). Updated technical-index.md.
  ## [2026-07-28] ingest | Однолинейные схемы ВРУ-ИТП
  Ingested AXIS\_Алгоритм\_ручных\_проверок\_M1\_M6\_2, ИТП ЭОМ Однолинейная схема ВРУ-ИТП.pdf, ИТП.ЭОМ Кабельный журнал.pdf, and ИТП.ЭОМ Спецификация.pdf. Created directory 'Однолинейные схемы' with SKILL.md, prompts, schemas, templates, gold standard extraction examples (flat table & JSON hierarchy), validation report, and A/B testing suite.
  ## [2026-07-28] feature | Install find-skills & Create Plan Enhancements
  Installed skill `find-skills` via npx from vercel-labs/skills into .agents/skills/find-skills. Created PLAN\_ENHANCEMENTS.md covering Mermaid topology visualization, GOST/SP/PUE validation rules (СП 256, ПУЭ 3.1, ГОСТ 31565 LSLTx), interactive HTML dashboards, and schematic revision diffing.
  ## [2026-07-28] feature | PDF Parser Sandbox Testing
  Created PDF text extraction scripts: `extract_fitz.py` (PyMuPDF topological coordinate parser) and `extract_pypdf.py` (basic pypdf parser). Created `pdf_eval_runner.py` comparison harness. PyMuPDF demonstrated 3x speedup and layout block coordinates retention (crucial for grid layouts), and is recommended as the layout parser.
  ## [2026-07-28] feature | PDF Skills Installation
  Installed 3 PDF processing and extraction skills: `anthropics/skills@pdf`, `claude-office-skills/skills@pdf-extraction`, and `tanis90/pdf-converter-mineru@pdf-converter` into workspace skills directories.
  ## [2026-07-28] feature | Digitize and Validate Workflow Specification (loop-me)
  Designed and created a standalone workflow specification in `workflows/digitize_and_validate_workflow.md` using the `/loop-me` grilling lens. Created `NOTES.md` outlining tools and local electro-technical terminology, and initialized the local input folder `raw/`.
  ## [2026-07-28] feature | Second Iteration: Automated Workflow Execution (run\_workflow\.py)
  Created the workflow orchestrator python script `run_workflow.py` inside `workflows/`. The script automatically searches for PDFs in `raw/`, extracts coordinates text using PyMuPDF, performs validation checks against WIKI rules, outputs results inside `results/<Drawing_Name>/` (JSON and MD), and prints a brief summary. Added automated high-res panel cropping and embedded relative image links inside the generated Markdown reports. Verified execution successfully.
  ## [2026-07-28] doc | Update Manual Checks Document (raw/AXIS\_Алгоритм\_ручных\_проверок)
  Restored 100% of the original text of the first page in `raw/AXIS_Алгоритм_ручных_проверок_M1_M6_2 (2).docx`. Generated 6 high-resolution (High-DPI 2x) panel crops from the vector PDF drawing using PyMuPDF and embedded them into Section II of the DOCX document alongside ultimate details, electrical parameters, and validation equations.
  ## [2026-07-28] feature | Update Golden Examples (examples/)
  Copied the 6 high-resolution panel crops into the golden standard folder `examples/`. Updated `gold_extracted_flat_table.md` and `gold_validation_report.md` to include properly signed image markdown links for ВРУ-ВП, РШУ1, РШУ2, ШПЧ, and Loads Table.
  ## [2026-07-28] feature | Expand Project Roadmap (PLAN\_ENHANCEMENTS.md)
  Added plans for spatial PDF element parsing and automatic legend/UGO screenshot capturing to `PLAN_ENHANCEMENTS.md` and registered a new Step 5 (Spatial Parsing & Legends) in the project roadmap table.
  ## [2026-07-28] ingest | Task 2: Electric Illumination (Задача 2 Электроосвещение)
  Executed full workflow for the 34-sheet school lighting panels project. Generated 34 high-resolution panel screenshots in results and examples, generated the flat table, JSON hierarchy, and validation report, and logged 3 critical fire safety violations on ЩАОД.1-3 emergency panels (missing FR index on cables).
  ## [2026-07-31] ingest | Однолинейные схемы (12 комплектов)
  Инициализированы 12 изолированных подпапок задач в `Однолинейные схемы/raw/`. Из оригинальных PDF-документов извлечены и сохранены по отдельности файлы «Схемы.pdf», «Кабельный журнал.pdf» и «Спецификация.pdf» в соответствии с таблицей листов, а исходные файлы перемещены в соответствующие папки.
  ## [2026-07-31] ingest | Задача 153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/`, эталонные образцы зарегистрированы в `examples/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/`.
  ## [2026-07-31] ingest | Задача 153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/`, эталонные образцы зарегистрированы в `examples/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/`.
  ## [2026-07-31] ingest | Задача 153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/`, эталонные образцы зарегистрированы в `examples/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/`.
  ## [2026-07-31] ingest | Задача 26-0220-ОК-1Н-ЭОМ1\_изм10\_291123(ЭЦП 08.12.2023)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `26-0220-ОК-1Н-ЭОМ1_изм10_291123(ЭЦП 08.12.2023)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/26-0220-ОК-1Н-ЭОМ1_изм10_291123(ЭЦП 08.12.2023)/`, эталонные образцы зарегистрированы в `examples/26-0220-ОК-1Н-ЭОМ1_изм10_291123(ЭЦП 08.12.2023)/`.
  ## [2026-07-31] ingest | Задача 26-0220-ОК-1Н-ЭОМ2\_изм10\_231123(ЭЦП 07.12.2023)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `26-0220-ОК-1Н-ЭОМ2_изм10_231123(ЭЦП 07.12.2023)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/26-0220-ОК-1Н-ЭОМ2_изм10_231123(ЭЦП 07.12.2023)/`, эталонные образцы зарегистрированы в `examples/26-0220-ОК-1Н-ЭОМ2_изм10_231123(ЭЦП 07.12.2023)/`.
  ## [2026-07-31] ingest | Задача 26-0220-ОК-1Н-ЭОМ4\_изм.03 (ЭЦП 23.12.2022)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `26-0220-ОК-1Н-ЭОМ4_изм.03 (ЭЦП 23.12.2022)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/26-0220-ОК-1Н-ЭОМ4_изм.03 (ЭЦП 23.12.2022)/`, эталонные образцы зарегистрированы в `examples/26-0220-ОК-1Н-ЭОМ4_изм.03 (ЭЦП 23.12.2022)/`.
  ## [2026-07-31] ingest | Задача 99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)/`, эталонные образцы зарегистрированы в `examples/99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)/`.
  ## [2026-07-31] ingest | Задача 99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)/`, эталонные образцы зарегистрированы в `examples/99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)/`.
  ## [2026-07-31] ingest | Задача 99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)/`, эталонные образцы зарегистрированы в `examples/99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)/`.
  ## [2026-07-31] ingest | Задача 99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)/`, эталонные образцы зарегистрированы в `examples/99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)/`.
  ## [2026-07-31] ingest | Задача АНО\_2022-002-РД-ЭОМ
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `АНО_2022-002-РД-ЭОМ`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/АНО_2022-002-РД-ЭОМ/`, эталонные образцы зарегистрированы в `examples/АНО_2022-002-РД-ЭОМ/`.
  ## [2026-07-31] ingest | Задача К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM
  Выполнена полная оцифровка и 5-раздельная кросс-валидация для `К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM`. Сформирована плоская таблица цепей с Mermaid-графом топологии, JSON-иерархия и отчет валидации. Результаты сохранены в `results/К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM/`, эталонные образцы зарегистрированы в `examples/К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM/`.
  ## [2026-07-31] ingest | Точная оцифровка 153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)`. Файлы сохранены в `results/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/` и зарегистрированы в `examples/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/`.
  ## [2026-07-31] ingest | Точная оцифровка 153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)`. Файлы сохранены в `results/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/` и зарегистрированы в `examples/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/`.
  ## [2026-07-31] ingest | Точная оцифровка 153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)`. Файлы сохранены в `results/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/` и зарегистрированы в `examples/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/`.
  ## [2026-07-31] ingest | Точная оцифровка 26-0220-ОК-1Н-ЭОМ1\_изм10\_291123(ЭЦП 08.12.2023)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `26-0220-ОК-1Н-ЭОМ1_изм10_291123(ЭЦП 08.12.2023)`. Файлы сохранены в `results/26-0220-ОК-1Н-ЭОМ1_изм10_291123(ЭЦП 08.12.2023)/` и зарегистрированы в `examples/26-0220-ОК-1Н-ЭОМ1_изм10_291123(ЭЦП 08.12.2023)/`.
  ## [2026-07-31] ingest | Точная оцифровка 26-0220-ОК-1Н-ЭОМ2\_изм10\_231123(ЭЦП 07.12.2023)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `26-0220-ОК-1Н-ЭОМ2_изм10_231123(ЭЦП 07.12.2023)`. Файлы сохранены в `results/26-0220-ОК-1Н-ЭОМ2_изм10_231123(ЭЦП 07.12.2023)/` и зарегистрированы в `examples/26-0220-ОК-1Н-ЭОМ2_изм10_231123(ЭЦП 07.12.2023)/`.
  ## [2026-07-31] ingest | Точная оцифровка 26-0220-ОК-1Н-ЭОМ4\_изм.03 (ЭЦП 23.12.2022)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `26-0220-ОК-1Н-ЭОМ4_изм.03 (ЭЦП 23.12.2022)`. Файлы сохранены в `results/26-0220-ОК-1Н-ЭОМ4_изм.03 (ЭЦП 23.12.2022)/` и зарегистрированы в `examples/26-0220-ОК-1Н-ЭОМ4_изм.03 (ЭЦП 23.12.2022)/`.
  ## [2026-07-31] ingest | Точная оцифровка 99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)`. Файлы сохранены в `results/99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)/` и зарегистрированы в `examples/99-0519-ОК-1Н-ИТП.ЭОМ(ЭЦП 03.08.2023)/`.
  ## [2026-07-31] ingest | Точная оцифровка 99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)`. Файлы сохранены в `results/99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)/` и зарегистрированы в `examples/99-0519-ОК-1Н-ЭОМ.АС Изм.6 (ЭЦП 27.11.2024)/`.
  ## [2026-07-31] ingest | Точная оцифровка 99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)`. Файлы сохранены в `results/99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)/` и зарегистрированы в `examples/99-0519-ОК-1Н-ЭОМ.ЖД Изм.5 (ЭЦП 14.11.2024)/`.
  ## [2026-07-31] ingest | Точная оцифровка 99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)`. Файлы сохранены в `results/99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)/` и зарегистрированы в `examples/99-0519-ОК-1Н-ЭОМ.КВ Изм.5 (ЭЦП 14.11.2024)/`.
  ## [2026-07-31] ingest | Точная оцифровка АНО\_2022-002-РД-ЭОМ
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `АНО_2022-002-РД-ЭОМ`. Файлы сохранены в `results/АНО_2022-002-РД-ЭОМ/` и зарегистрированы в `examples/АНО_2022-002-РД-ЭОМ/`.
  ## [2026-07-31] ingest | Точная оцифровка К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM
  Выполнена оцифровка по шаблону `templates/template_flat_table.md` (6 разделов) и стандарту `prompts/prompt_validation.md` для `К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM`. Файлы сохранены в `results/К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM/` и зарегистрированы в `examples/К.ФЕДИНА5-ИТП.ЭОМ изм. 4 NM/`.
  ## [2026-07-31] ingest | Интеграция OpenDataLoader PDF + 5-этапная валидация (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))
  Выполнена выгрузка структур .md, .json, .html, .txt через OpenDataLoader PDF и 5-раздельный аудит для `153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)`. Все выгруженные форматы сохранены в `results/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/`, эталоны обновлены в `examples/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/`.
  ## [2026-07-31] ingest | Интеграция OpenDataLoader PDF + 5-этапный аудит (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))
  Выполнен анализ OpenDataLoader PDF с генерацией всех форматов (.json, .html, .md, .txt) и 5-раздельная оцифровка для `153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)`. Все результаты записаны в `results/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/` и зарегистрированы в `examples/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)/`.
  ## [2026-07-31] ingest | Конвейер v2.0 + OpenDataLoader (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))
  Сформирован полный пакет v2.0 для `153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)`: 3 MD-файла, папка images/ и выгрузки opendataloader/ (.json, .html, .md, .txt). Результаты размещены в `results/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024) v2.0 + OpenDataLoader/`, эталоны зарегистрированы в `examples/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024) v2.0 + OpenDataLoader/`.
  ## [2026-07-31] ingest | Конвейер v2.0 + OpenDataLoader (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))
  Сформирован аккуратный пакет v2.0 для `153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024)`: 3 MD-файла, папка images/ (со скриншотами схем) и выгрузки opendataloader/ (.json, .html, .md, .txt). Результаты размещены в `results/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024) v2.0 + OpenDataLoader/`, эталоны зарегистрированы в `examples/153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024) v2.0 + OpenDataLoader/`.
  ## [2026-07-31] ingest | Веб-Интерфейс OpenDataLoader Viewer (153-0920-ОК-1-0-ЭОМ3 изм2 (ЭЦП 10.04.2024))
  Создан интерактивный веб-интерфейс `index.html` в стиле OpenDataLoader UI. Очищен спам растровых эскизов в `opendataloader/`, сохранены только высокоточные скриншоты схем в `images/`.
  ## [2026-07-31] ingest | Интеграция OpenDataLoader PDF + 5-этапный аудит (153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024))
  Выполнен анализ OpenDataLoader PDF с генерацией всех форматов (.json, .html, .md, .txt) и 5-раздельная оцифровка для `153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)`. Все результаты записаны в `results/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/` и зарегистрированы в `examples/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/`.
  ## [2026-07-31] ingest | Интеграция OpenDataLoader PDF + 5-этапный аудит (153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024))
  Выполнен анализ OpenDataLoader PDF с генерацией всех форматов (.json, .html, .md, .txt) и 5-раздельная оцифровка для `153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)`. Все результаты записаны в `results/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/` и зарегистрированы в `examples/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/`.
  ## [2026-07-31] ingest | Интеграция OpenDataLoader PDF + 5-этапная валидация (153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024))
  Выполнена выгрузка структур .md, .json, .html, .txt через OpenDataLoader PDF и 5-раздельный аудит для `153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)`. Все выгруженные форматы сохранены в `results/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/`, эталоны обновлены в `examples/153-0920-ОК-1-2-ЭОМ1-изм4 (ЭЦП 16.05.2024)/`.
  ## [2026-07-31] ingest | Интеграция OpenDataLoader PDF + 5-этапная валидация (153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024))
  Выполнена выгрузка структур .md, .json, .html, .txt через OpenDataLoader PDF и 5-раздельный аудит для `153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)`. Все выгруженные форматы сохранены в `results/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/`, эталоны обновлены в `examples/153-0920-ОК-1-2-ЭОМ2 изм2(ЭЦП 19.03.2024)/`.

## Contents

- [Wiki Index](#wiki-index)
  - [Categories](#categories)
    - [Entities](#entities)
    - [Concepts](#concepts)
    - [Products](#products)
    - [Sources](#sources)

# Wiki Index

This is the central catalog of everything in the wiki.

## Categories

### Entities

*List of people, organizations, or specific tangible things.*

### Concepts

*List of abstract ideas, theories, or recurring themes.*

- [Видение платформы Axis](concepts/axis-platform-vision.md) — Общее видение, миссия и позиционирование платформы Axis.
- [Технические требования и алгоритмы](technical-index.md) — Каталог правил парсинга и проверок РД.

### Products

*List of Axis platform modules and applications.*

- [Axis ВОР](products/axis-vor.md) — Модуль автоматического формирования ведомости объёмов работ.
- [Axis Проверка РД](products/axis-rd-checker.md) — Модуль автоматизированной проверки рабочей документации.
- [Axis Агент предварительной стоимости](products/axis-cost-agent.md) — AI-агент для оценки стоимости по ВОР и КП.
- [Axis AI-ассистент](products/axis-ai-assistant.md) — Кросс-модульный диалоговый AI-интерфейс.

### Sources

*List of processed raw materials.*



Contents
Главная страница
Сводка
Ключевые элементы
Главная страница
Модуль: [[Axis AI-ассистент]] Оригинал: Исходный документ

Сводка
Добавьте ссылки на основные разделы и важные контакты

![image.png]\([https://wiki-static.s3.yandex.net/homepage/biz/edit.svg](https://wiki-static.s3.yandex.net/homepage/biz/edit.svg) =154x)

Структурируйте информацию: создавайте иерархию вложенных страниц и связывайте их перекрёстными ссылками.

Ключевые элементы
задачи из Трекера — названия, статусы и исполнители будут обновляться автоматически;
опросы и заявки в Формах — ответы сохранятся на Вики.

## Contents

- [Агент предварительной стоимости строительства](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# Агент предварительной стоимости строительства

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/agent-predvaritelnoj-stoimosti-stroitelstva.md)

## Сводка

**Ожидаемый результат:**

1. Загрузка одного или нескольких файлов ВОР в формате Excel
2. Проверка документа ВОР на заполненность: коэффициенты расхода, единицы измерений, полное наименование материалов, проставление формул

## Ключевые элементы

- В систему может загружаться множество файлов Excel (ВОР)
- Обработка каждого файла выполняется независимо (результаты одного не смешиваются с другими)
- Для хранения и навигации предусмотрены:



## Contents

- [AI ассистент](#ai-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#-)

# AI ассистент

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ai-assistent.md)

## Сводка

Чат бот для работы по документам. Логика работы похожа на Notion AI:

- Ассистент доступен всегда в правом нижнем углу
- При нажатии открывается в Sidebar.

## Ключевые элементы

- Ассистент доступен всегда в правом нижнем углу
- При нажатии открывается в Sidebar.
- Есть отдельная точки входа ИИ Ассистент
- Возможно загрузить данные в чате

## Contents

- [Анализ изменений граф часть](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# Анализ изменений граф часть

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/analiz-izmenenij-graf-chast.md)

## Сводка



**Назначение**

Автоматизированный анализ, сопоставление и выявление изменений между версиями проектной и рабочей документации графической части (чертежи, листы, схемы, планы, разрезы, фасады, узлы и др.) с применением ИИ-агентов. По итогам ИИ-агент формирует перечень листов с разметкой состояния («добавлен», «удалён», «переименован», «изменён», «без изменений»), сводный список найденных изменений с классификацией, семантическим описанием и оценкой влияния, а также визуальное наложение различий поверх чертежа.

## Ключевые элементы

- **базовая часть = шифр без концевого суффикса вида .XX (отделяется точкой);**
- без изменений — лист идентичен в обеих версиях;
- изменён — лист сопоставлен, но имеются отличия в содержимом;
- переименован — изменился шифр или наименование при совпадении содержимого;
- добавлен — лист присутствует только в текущей версии;

## Contents

- [Анализ изменений спецификаций (между редакциями документов КЖ)](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# Анализ изменений спецификаций (между редакциями документов КЖ)

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/analiz-izmenenij-specifikacij-mezhdu-redakciyami-dokumentov-kzh.md)

## Сводка

Автоматическое выявление и структурированная фиксация различий между двумя редакциями одного и того же документа проектной документации марки КЖ (конструкции железобетонные, либо иной строительный раздел) на уровне строительных ведомостей и спецификаций — таблиц, которые непосредственно несут информацию для выполнения строительно-монтажных работ (объёмы материалов, расход стали, отверстия, дверные проёмы, спецификации арматуры и т. п.). Сравнение служит для оценки технических изменений между ревизиями и не затрагивает оформительские/комплектные таблицы (см. раздел «Что не анализируется»).

**{blue}(Идентификация документа и определение ревизии (по штампу))**

Принадлежность документа и его ревизия определяются ИСКЛЮЧИТЕЛЬНО по содержимому основного штампа листа (нижний правый угол по ГОСТ Р 21.101-2020), а НЕ по имени PDF-файла. Имя файла используется только как технический идентификатор и не является источником истины.

## Ключевые элементы

- **Идентичность документа:** два PDF признаются версиями одного и того же документа, если поля «Обозначение» в штампах совпадают посимвольно (с учётом нормализации пробелов и регистра).
- **Разные документы:** если «Обозначение» в штампах различается — агент завершает работу с сообщением «Документы относятся к разным шифрам, сравнение не выполняется».
- **Ревизия документа:** максимальное значение поля «Изм.» в таблице изменений штампа. Если таблица изменений пуста — ревизия считается исходной (R0).
- **Направление «старая → новая»:** старая — версия с меньшим номером ревизии; новая — с большим. При равных номерах ревизий (например, обе R0) различить версии нельзя — агент сообщает об этом пользователю и просит подтвердить порядок вручную.
- **Имя файла НЕ используется:** суффиксы «\_изм.N», «Изм.N» и т. п. в названиях файлов носят справочный характер и могут не соответствовать реальной ревизии в штампе. Любое противоречие между именем файла и штампом разрешается в пользу штампа.

## Contents

- [АР — Архитектурные решения](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# АР — Архитектурные решения

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ar-arhitekturnye-resheniya.md)

## Сводка



Автоматическая сверка соответствия рабочей документации АР требованиям проектной документации Раздела 3 «Архитектурные решения» по объекту строительства. По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «АР (П) ↔ АР (РД)» по ключевым архитектурно-планировочным параметрам и явно фиксирует расхождения, требующие синхронизации между стадиями П и Р.

Сравниваемая пара документов: Раздел 3 «Архитектурные решения» (П) ↔ АР (РД).

## Ключевые элементы

- Изменение состава или площадей помещений (новые/исключённые помещения, площадь ± более допустимого порога).
- Изменение типов и толщин ограждающих конструкций (стены, перегородки, перекрытия).
- Изменение заполнений проёмов (другие марки окон/дверей, другие размеры, иной класс шумозащиты/огнестойкости).
- Расхождение по ведомости отделки (типы полов, потолков, стен).
- Изменение габаритов лестниц, эвакуационных коридоров, высот этажей.
- Contents
  - [АрхивПроверка маркированных элементов](#-)
    - [Сводка](#h-2)
    - [Ключевые элементы](#--1)
  # АрхивПроверка маркированных элементов
  **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/arhivproverka-markirovannyh-elementov.md)
  ## Сводка
  ИИ-агент предназначен для автоматизации процесса проверки соответствия количественных данных между графической частью проектной документации и спецификацией.

  Система выполняет распознавание замаркированных элементов на чертежах (графической части проекта), осуществляет их подсчёт и сопоставляет полученные значения с количеством, указанным в спецификационных ведомостях.

  Основная цель использования агента — выявление расхождений, ошибок учета и несоответствий между визуально представленными элементами проекта и их табличным описанием.
  ## Ключевые элементы
  - Наименование элемента
  - Марка/обозначение
  - ед. изм.
  - Количество
  - Марка/обозначение
  - Contents
    - [АрхивПроверка муфт КЖ и СО](#-)
      - [Сводка](#h-2)
      - [Ключевые элементы](#--1)
    # АрхивПроверка муфт КЖ и СО
    **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/arhivproverka-muft-kzh-i-so.md)
    ## Сводка
    Автоматическая проверка корректности подбора кабельных муфт в спецификациях подразделов (ЭО, СО, СС и др.): для каждой муфты, указанной в спецификации, ИИ-агент проверяет, что муфта совместима хотя бы с одним кабелем проекта по типу (концевая / соединительная), числу жил, сечению, номинальному напряжению, броне и классу пожарной безопасности. Количество муфт в этой проверке не сверяется — сверяется только корректность подбора.

    Приоритетная зона поиска — СО-кабели, для которых в КЖ действительно предусмотрена муфта. Для этого каждому кабелю спецификации присваивается признак «КЖ+муфта» или «Вне КЖ». Проверка идёт в две очереди: сначала по «КЖ+муфта» (основная зона), затем fallback по «Вне КЖ» с предупреждением «кабель не учтён в КЖ». Если муфта не подошла ни одному кабелю СО из этих двух зон — выдаётся ошибка подбора. Кабели СО, для которых марка есть в КЖ, но муфта в КЖ не предусмотрена (М = 0 во всех линиях), из проверки исключаются — их совместимость с перечнем муфт СО не сверяется.

    Для сверки совместимости используются характеристики кабеля по ГОСТ 31996-2012 «Кабели силовые с пластмассовой изоляцией на 0,66; 1; 3 кВ» (и аналогичные ГОСТ/ТУ для других групп кабелей) и характеристики муфт по ГОСТ 34839-2022 «Муфты для силовых кабелей на напряжение до 35 кВ». Параметры совместимости муфт конкретных марок подтягиваются агентом онлайн из технической документации производителей.
    ## Ключевые элементы
    - перечень муфт — позиции с «Муфта кабельная …», ед. изм. «шт.»; это объект проверки;
    - перечень кабелей — позиции с «Кабель …», ед. изм. «м»; используется как зона поиска совместимости.
    - «КЖ+муфта» — тип кабеля СО точно совпадает с типом кабеля из Шага 1 (т.е. этот кабель есть в КЖ и для него в КЖ предусмотрена муфта) — приоритетная зона поиска;
    - «Вне КЖ» — тип кабеля СО в КЖ отсутствует вовсе — зона fallback-проверки;
    - «Исключён» — тип кабеля СО присутствует в КЖ, но в КЖ нет ни одной линии с М ≥ 1 (муфта для этого кабеля нигде не предусмотрена). Такие кабели в проверке совместимости муфт СО не участвуют.

## Contents

- [АрхивПроверка соответствия материалов в кабельном журнале, спецификации](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# АрхивПроверка соответствия материалов в кабельном журнале, спецификации

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/arhivproverka-sootvetstviya-materialov-v-kabelnom-zhurnale-specifikacii.md)

## Сводка

Автоматическая сверка данных кабельного журнала (КЖ) со спецификацией (СО, в т.ч. СО ВГП): по позициям кабеля, металлорукава и трубы, автоматический подбор концевых и соединительных муфт, подсчёт муфт «труба — металлорукав», простановка массы единиц продукции, а также подсветка в КЖ при нарушениях по диаметру прокладки и по несогласованности длин кабельной линии.

ИИ-агент построчно проходит КЖ и по каждой кабельной линии извлекает:

- сечение, тип, марку и исполнение кабеля;

## Ключевые элементы

- сечение, тип, марку и исполнение кабеля;
- длину кабеля линии (для агрегации количеств в метрах);
- диаметр металлорукава и его длину по строке;
- тип трубы (прямошовная / ПНД) и её диаметр, длину по строке.
- n = max(0, ceil(L / Lстр) − 1).





## Contents

- [АрхивСверка значений КЖ (кабельный журнал) со спецификацией](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# АрхивСверка значений КЖ (кабельный журнал) со спецификацией

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/arhivsverka-znachenij-kzh-kabelnyj-zhurnal-so-specifikaciej.md)

## Сводка

Автоматическая сверка итоговых количеств по материалам между кабельным журналом и спецификациями его подразделов (ЭО, СО, СС и др.). По итогам ИИ-агент формирует сводную таблицу, в которой строки — наименования материалов, столбцы — КЖ и каждая спецификация по подразделу, а также столбец отклонения КЖ от суммы по подразделам.

Документы КЖ и спецификации (СО) относятся к разным уровням привязки внутри раздела ЭК, поэтому их шифры различаются:

**Документ**

## Ключевые элементы

- строки — каноническое наименование материала (кабель / МР / труба);
- столбцы — «КЖ», затем по одному столбцу на каждый подраздел («ЭО», «СО», «СС» и т.д.);
- дополнительный расчётный столбец «Σ подразделов» — сумма значений по всем подразделам данной строки;
- дополнительный столбец «Отклонение» — разница между КЖ и суммой по подразделам.
- Отклонение = КЖ − Σ(подразделы).



## Contents

- [Арифметика ВРС](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# Арифметика ВРС

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/arifmetika-vrs.md)

## Сводка

Автоматическая проверка арифметической согласованности ведомости расхода стали (ВРС) внутри документа: соответствие столбца «Итого» по классу арматуры сумме значений диаметров этого класса, соответствие столбца «Всего» сумме всех «Итого» блока, а при отсутствии «Итого» — сумме всех диаметров, а также проверка нижней итоговой строки по столбцам. Сравнение с другими документами (спецификация, ВРБ) в рамках данного ФТ не выполняется.

Форма ведомости не стандартизирована: проектировщик формирует таблицу по своему усмотрению. В разных документах и даже в разных блоках одного документа отличаются набор классов арматуры и ГОСТов, перечень диаметров, наличие промежуточных «Итого», состав отдельных блоков (например, «Изделия арматурные» и «Изделия закладные»). Поэтому структура распознаётся динамически по фактическим заголовкам таблицы, а не по шаблону.

**№**

## Ключевые элементы

- расчётное «Итого (класс)» = сумма значений всех диаметров данного класса в этой строке;
- расчётное значение сравнивается с фактическим «Итого» из таблицы; сравнение точное, без допусков.
- если в блоке есть один или несколько «Итого» — расчётное «Всего (блок)» = сумма всех «Итого» блока в этой строке;
- если в блоке «Итого» отсутствует — расчётное «Всего (блок)» = сумма значений всех диаметров блока в этой строке;
- расчётное значение сравнивается с фактическим «Всего»; сравнение точное, без допусков.
- Contents
  - [АР-унифицированный интерфейс](#-)
    - [Сводка](#h-2)
    - [Ключевые элементы](#--1)
  # АР-унифицированный интерфейс
  **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ar-unificirovannyj-interfejs.md)
  ## Сводка


  Система автоматически извлекает данные о материалах, изделиях и объёмах работ из строительной проектной документации (PDF-альбомы разделов АР, АИ и смежных) и приводит их к единой табличной форме — ведомости объёмов работ (ВОР). Сегодня эту работу вручную выполняют сметчики и инженеры: находят нужные ведомости в альбомах, переносят позиции, сверяют листы между собой. Система берёт эту рутину на себя, а человеку оставляет контроль и принятие решений в спорных случаях.

  Требования сформированы по итогам пилотной разметки: 12 комплектов документации по 6 объектам, 1409 позиций.
  ## Ключевые элементы
  - **Документ, этаж, корпус** — берутся из штампа листа. Сам штамп источником позиций не является.
  - **Наименование таблицы** — название ведомости-источника как в документе.
  - **Конструктивный элемент** — определяется по названию таблицы: «Спецификация дверных проёмов» → Дверь, «Спецификация ниш» → Ниша (люк) и т.д.
  - **Тип / марка** — из колонок «Марка», «Кодировка», «Тип пола» и подобных. Сквозной порядковый номер «№ п/п» маркой не является и не переносится. Если марки нет — поле остаётся пустым, позицию идентифицирует «Материал».
  - **Материал** — наименование, состав или описание изделия. Определяется по содержимому, а не по названию столбца: если описание изделия записано в колонке «Примечание» источника, оно всё равно попадает в «Материал». Многослойные составы хранятся одним текстом.



## Contents

- [Axis Platform — Documentation](#axis-platform-documentation)
  - [Сводка](#h-2)
  - [Ключевые элементы](#-)

# Axis Platform — Documentation

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/axis-platform-documentation.md)

## Сводка

**Дата создания:** 2026-04-17

**Команда Alpha:** Shared AI Core + Data Platform + Observability + VOR backend

- [S0 — Platform Design Document](/homepage/69b9ec4cace9/arxitektura/axis/s0-axis-platform/) — архитектурный дизайн-документ (10 разделов)

## Ключевые элементы

- [S0 — Platform Design Document](/homepage/69b9ec4cace9/arxitektura/axis/s0-axis-platform/) — архитектурный дизайн-документ (10 разделов)
- [D1a — RD API](/homepage/69b9ec4cace9/arxitektura/axis/d1a-rd-api/) — Swagger для Beta-команды по существующему RD-чекеру
- [D1b — VOR API](/homepage/69b9ec4cace9/arxitektura/axis/d1b-vor-api/) — Swagger для фронта ВОР по существующему генератору
- [Roadmap Исаенков Д.В.](/homepage/69b9ec4cace9/arxitektura/axis/roadmap-isaenkov/) — 3-недельный план работ Alpha
- S1 — Shared AI Core (LLM Router, Doc Parser, RAG, Norms)
- Contents
  - [Backlog](#backlog)
    - [Сводка](#h-2)
  # Backlog
  **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/backlog.md)
  ## Сводка


  Автоматическое формирование ВОР из рабочей документации (PDF/Excel) с AI-распознаванием, проверкой данных, группировкой и экспортом.

  AI-сервис автоматической проверки рабочей документации на ошибки, нормативное соответствие, комплектность и сверку данных.

## Contents

- [Бизнес-требования: версионирование ВОР (Glorax / AXIS)](#-glorax-axis)
  - [Сводка](#h-2)
  - [Ключевые элементы](#-)

# Бизнес-требования: версионирование ВОР (Glorax / AXIS)

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/biznes-trebovaniya-versionirovanie-vor-glorax-axis.md)

## Сводка



Модуль ВОР в AXIS принимает от ПТО файл ВОР, подбирает/проверяет шифры справочника Глоракс, ставит WBS-нумерацию и передаёт результат на ЭТП. Сейчас ВОР — плоский список без версий: каждая новая редакция заводится как отдельный ВОР «с нуля», с повторным распознаванием и повторным подтверждением **всех** позиций (в реальном комплекте — \~2000). Связи между редакциями система не хранит.

Следствия для бизнеса:

## Ключевые элементы

- ПТО тратит время на переподтверждение неизменившихся позиций при каждой корректировке;
- нет ответа на вопрос «что изменилось между редакциями» — ни для ПТО, ни для закупок;
- отправка обновлённой редакции на ЭТП не привязана к ранее отправленной — на стороне площадки это выглядит как новый несвязанный документ;
- плоский список не масштабируется: десятки ВОР по нескольким проектам, принадлежность видна только из названия.
- **Сотрудник ПТО** — основной пользователь. Создаёт ВОР и версии, вносит корректировки, подтверждает шифры, настраивает группировку, согласовывает и отправляет на ЭТП.

## Contents

- [Дмитрий Исаенков — статус по рабочим сессиям](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# Дмитрий Исаенков — статус по рабочим сессиям

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/dmitrij-isaenkov-status-po-rabochim-sessiyam.md)

## Сводка

Журнал результатов сессий разработки. Самые свежие — сверху.

---

**Бранч:** `feature/ar` · **Деплой:** прод-сервер `72.56.116.52` (plus-ai.tech) · **Коммиты:** `b2288a9` → `587cfff`

## Ключевые элементы

- **Шаг 3** переделан: вместо плоской сводки — раскрываемый treegrid со SVG-шевронами, кнопками «Развернуть всё / Свернуть всё» в шапке. Стилистика как в АР/КЖ.
- **OvVorTree** Шага 5 — то же оформление, единообразно с Шагом 3.
- Бейдж «комплект» (зелёный) — рядом с B-rule работами.
- В `ExistingProjectsList` исправлен показ OV-проектов (раньше отображались с плашкой «КЖ»).
- pydantic-модель `Project.section` была `Literal["kj", "ar"]` — после первого OV-проекта `/api/projects` крашился 500. Расширил до `["kj", "ar", "ov"]` (`587cfff`).


---

**Assistant:**

Да. Это существенно меняет картину: **однолинейные схемы, кабельные журналы и междокументная сверка — не вспомогательная часть, а отдельное ядро твоего инженерного профиля.**

И ещё фиксирую правило на будущее: **упоминания AXIS из присылаемых материалов убираем из публичного описания твоих кейсов**, если это не нужно для фактического контекста работы. Саму техническую логику сохраняем.

Теперь я бы переразложил всё, что ты мне прислал, уже не на 6–7, а примерно на **10 крупных кейсов**.

---

# 01. Контроль соответствия П → РД

Это один из главных кейсов.

### Что решается

Сопоставление:

```text
Проектная документация
        ↕
Рабочая документация
```

по:

- материалам;
- оборудованию;
- количествам;
- маркам;
- техническим характеристикам;
- изменениям между стадиями.

### Твоя автоматизация

Power Query:

```text
нормализация
→ группировка
→ суммирование
→ Fuzzy Join
→ сравнение
→ разница
→ статус
```

Для систем:

```text
ЭМ
ЭО
СКС
СОТ
АВТ
АОВ
АПС
АСУПР
ДСП
КЛ
МГН
ОЗДС
ПТ
РФ
СКУД
СОУЭ
...
```

### Результат

На выходе получается не просто таблица сравнения, а:

```text
Позиция
П
РД
Разница
Статус
Контроль дублей
```

Например:

```text
Закрыто
Не смонтировано
Превышение объемов
Проверить
```

### Что здесь ценно

Ты фактически построил **движок reconciliation для строительных данных**.

Это уже терминология уровня:

> **Cross-document reconciliation / data quality control.**

---

# 02. Шахматка исполнительной документации

Это второй крупный кейс.

Здесь объектом контроля становится уже не просто материал, а **жизненный цикл позиции**.

```text
Спецификация
   ↓
Поставка
   ↓
Материал
   ↓
Сертификат
   ↓
Паспорт
   ↓
Исполнительная документация
   ↓
EXON
```

---

## Структура твоей шахматки

У тебя есть:

```text
ID
Система
Шифр РД
Позиция
Наименование
Марка
Код
Завод
Количество РД
```

и дальше блок комплектности:

```text
Оригиналы
Недобор
Собрано
Папка
EXON
```

и блок ИД:

```text
ОЖР
Исполнительная схема
АОСР
Сформированный комплект
Остаток ИД
```

### Главная идея

**Одна строка = одна контролируемая позиция.**

Это принципиально.

---

# 03. Автоматическая нумерация позиций

Твой:

```text
01.01
01.02
01.03
```

— это маленькая, но очень полезная часть архитектуры.

Я бы не делал её отдельным полноценным кейсом, а встроил в шахматку:

> **Автоматическая идентификация позиций внутри инженерной системы.**

Она потом может использоваться как связующий ключ:

```text
01.17
↓
шахматка
↓
CSV
↓
PDF
↓
EXON
```

---

# 04. EXON JVK

Это отдельный технологический кейс.

### Архитектура

```text
Excel / CSV
      ↓
нормализация данных
      ↓
группировка позиции
      ↓
тип документа
      ↓
поиск PDF
      ↓
Chrome Extension
      ↓
EXON
```

Ты здесь уже работаешь как разработчик прикладного инструмента:

- `content.js`;
- `popup.js`;
- IndexedDB;
- messaging;
- CSV parser;
- автоматическое заполнение форм;
- загрузка PDF;
- обработка autocomplete;
- управление состояниями интерфейса.

### Позиционирование

> **Browser automation tool для автоматизации подготовки и загрузки исполнительной документации.**

---

# 05. Полный ETM Data Pipeline

Вот это я бы оставил отдельным крупным кейсом.

Потому что здесь есть настоящий pipeline:

```text
Web
 ↓
Category discovery
 ↓
Catalog
 ↓
Products
 ↓
Technical characteristics
 ↓
Certificates
 ↓
Passports
 ↓
PDF repository
 ↓
Metadata
 ↓
Structured database
```

Ты использовал:

- Python;
- Playwright;
- `requests`;
- Next.js `_next/data`;
- JSON;
- pandas;
- openpyxl;
- resume/progress;
- retry;
- deduplication;
- rate limiting.

---

# 06. Нормализация и структурирование технических характеристик

Это отдельный data-engineering кейс внутри ETM.

Исходно:

```text
technical_characteristics_1.xlsx
...
technical_characteristics_597.xlsx
```

Далее:

```text
597 таблиц
↓
единый набор
↓
иерархия
↓
категории
↓
группировка
↓
русские названия книг
↓
гиперссылки на документы
```

Причём важное правило:

> **структура исходных характеристик не должна разрушаться.**

Ты отдельно запретил бездумно удалять столбцы и объединять смысловые поля.

Это хороший пример **data preservation**.

---

# 07. База технических документов

Здесь соединяются ETM и твоя собственная накопительная база.

Уже сейчас у тебя концептуально:

```text
Паспорта
Сертификаты
Декларации
Паспорта качества
Руководства
Письма
Технические описания
```

и ты добавляешь:

- документы производителей;
- ДКС;
- собственные накопленные материалы;
- документы из ETM;
- документы из проектной работы.

### Цель

Получается:

> **унифицированная локальная база технической документации для ПТО.**

Это, на мой взгляд, один из самых перспективных твоих проектов.

---

# 08. OCR / Document Intelligence

Теперь сюда нужно включить:

- PyMuPDF;
- RapidOCR;
- OpenDataLoader PDF;
- MinerU;
- Unlimited-OCR;
- NotebookLM/Gemini.

Но не позиционировать всё как одну технологию.

Правильнее:

```text
PDF
 ↓
структурное извлечение
 ↓
OCR
 ↓
LLM interpretation
 ↓
metadata extraction
 ↓
validation
```

---

## Что извлекается

```text
Название
Тип документа
Номер
Дата начала
Дата окончания
Производитель
Марка
```

И дальше:

```text
PDF → нормализованное имя
```

---

# 09. Document Finder

Это уже следующий продукт поверх базы.

Твой текущий алгоритм:

```text
Specification
 ↓
normalization
 ↓
homoglyph correction
 ↓
exact keys
 ↓
regex
 ↓
fuzzy matching
 ↓
MD5 deduplication
 ↓
result
```

### Очень важная часть

Ты уже понимаешь проблему ложных совпадений.

Например:

```text
ПуГВнг 1x4
```

нельзя считать совпадением с:

```text
ПуГВнг 1x6
```

только потому, что название похоже.

Поэтому следующий уровень:

```text
Product fingerprint
=
Manufacturer
+
Brand
+
Model
+
Section
+
Dimensions
+
Key parameters
```

Это уже будет гораздо сильнее простого fuzzy matching.

---

# 10. И теперь — новый большой блок: однолинейные схемы

Вот это я бы вынес **очень высоко**.

Причём здесь у тебя уже не просто «работа с PDF».

Ты строишь:

# **цифровое представление электрической схемы**

---

# 11. Что именно ты делаешь с однолинейной схемой

Исходные документы:

```text
Схема
Кабельный журнал
Спецификация
```

Ты рассматриваешь их **как три представления одной системы**.

И это фундаментально правильно.

---

## Получается:

```text
                  ЭЛЕКТРИЧЕСКАЯ СИСТЕМА

                        ┌───────┐
                        │ СХЕМА │
                        └───┬───┘
                            │
            ┌───────────────┼────────────────┐
            ↓               ↓                ↓
          КЖ             СО                PDF
      Кабельный        Спецификация       Графика
       журнал
```

---

# 12. Что извлекается из однолинейной

Ты уже сделал для этого отдельную схему данных.

По сути:

```text
Источник
Щит
Аппарат
Марка аппарата
Нагрузка
Кабель
Сечение
Длина
Защита
Параметры
```

И далее строится:

```text
JSON hierarchy
```

---

# 13. Самое интересное — плоская таблица + JSON

Это решение очень хорошее.

### Плоская таблица

для:

- Excel;
- фильтрации;
- сравнения;
- проверки.

### JSON hierarchy

для:

- структуры системы;
- графа;
- дальнейшей автоматизации;
- API;
- визуализации.

То есть одна схема преобразуется из:

```text
PDF
```

в:

```text
TABLE + GRAPH + JSON
```

---

# 14. Mermaid-граф

Вот это обязательно надо включить в портфолио.

Например концептуально:

```text
ВРУ
 │
 ├── QF1
 │    │
 │    └── Кабель ВВГнг...
 │
 ├── QF2
 │    │
 │    └── Кабель...
 │
 └── QF3
      │
      └── ЩР...
```

Это позволяет визуально представить:

> **топологию электрической системы, извлечённую из документа.**

Это уже намного интереснее обычного OCR.

---

# 15. 5-этапная cross-validation однолинейной схемы

Это тоже очень сильный элемент.

Потому что ты не остановился на:

> «ИИ распознал PDF».

Ты сделал:

```text
Извлечение
 ↓
Структурирование
 ↓
Cross-check
 ↓
Validation
 ↓
Report
```

И проверяешь данные между:

```text
Схема
↕
Кабельный журнал
↕
Спецификация
```

---

# 16. Здесь получается очень сильный кейс

Название:

> **Цифровизация однолинейных схем и кросс-проверка ЭОМ-документации**

Описание:

> Извлечение электрических цепей из PDF-схем с восстановлением структуры, формированием JSON-модели и последующей сверкой со спецификацией и кабельным журналом.

Это уже полноценный AI/Data Engineering кейс.

---

# 17. И вот тут появляются проверки, которые ты перечислил

Это уже не один кейс, а библиотека контрольных правил.

### Кабельный журнал ↔ спецификация

Проверка:

```text
Марка
Сечение
Длина
Количество
```

---

### КЖ ↔ муфты

Проверка:

```text
тип муфты
число жил
сечение
напряжение
броня
пожарный класс
```

---

### Диаметр кабеля ↔ труба / металлорукав

Проверка физической совместимости.

---

### Маркированные элементы

```text
чертёж
↓
распознавание марки
↓
подсчёт
↓
спецификация
```

---

### Математика КЖ

```text
Σ линий
=
итог спецификации
```

---

### ВРС

Тоже:

```text
диаметры
↓
Итого класса
↓
Всего блока
```

---

# 18. Это уже можно назвать «Rule Engine»

Вот это терминологически важно.

Не:

> «много маленьких проверок».

А:

> **Библиотека инженерных правил cross-document validation.**

Например:

```text
RULE-001
КЖ ↔ СО по длине кабеля

RULE-002
КЖ ↔ СО по марке

RULE-003
КЖ ↔ СО по сечению

RULE-004
Кабель ↔ муфта

RULE-005
Кабель ↔ труба

RULE-006
Графика ↔ спецификация

RULE-007
Итоги КЖ

RULE-008
Итоги ВРС
```

Вот это уже похоже на систему.

---

# 19. Изменения между версиями документации

Это вообще отдельный кейс.

Ты сейчас разрабатываешь проект для:

> **сверки документации между собой и между версиями.**

Это очень важно.

Потому что здесь уже не просто:

```text
PDF → DATA
```

а:

```text
VERSION A
     ↓
COMPARE
     ↓
VERSION B
```

---

# 20. Причём ты выбрал правильный источник истины

Ты специально заложил:

> ревизию определять по **штампу**, а не по имени PDF.

Это очень хороший инженерный принцип.

Например:

```text
файл:
ЭОМ_изм4.pdf
```

не является достаточным основанием считать документ Изм. 4.

Нужно:

```text
штамп
↓
обозначение
↓
таблица изменений
↓
номер изменения
```

И только потом:

```text
Revision
```

---

# 21. Категории изменений

Ты уже сформулировал:

```text
Добавлен
Удалён
Изменён
Переименован
Без изменений
```

Это отличный формат.

Особенно для портфолио.

Можно показать:

```text
REV 03
      ↓
┌───────────────┐
│ 12 листов     │
├───────────────┤
│ + 2 добавлено │
│ - 1 удалён    │
│ ~ 4 изменено  │
│ = 5 без изм.  │
└───────────────┘
```

---

# 22. И отдельно — анализ графической части

Здесь ты хочешь сравнивать не только таблицы.

А:

```text
чертеж
план
схему
разрез
узел
```

между версиями.

И получать:

```text
лист
статус
характер изменения
семантическое описание
влияние
visual diff
```

Это можно сделать отдельным кейсом:

> **Автоматический анализ изменений проектной и рабочей документации между ревизиями.**

---

# 23. Теперь LLM Wiki

На первый взгляд это будто отдельная тема.

На самом деле она очень хорошо ложится сверху на всё остальное.

Твоя идея:

```text
RAW DOCUMENTS
      ↓
LLM
      ↓
PERSISTENT WIKI
      ↓
INDEX
      ↓
CROSS REFERENCES
      ↓
VALIDATION
```

---

# 24. Для твоей предметной области это можно превратить в

```text
Документ
↓
Система
↓
Раздел
↓
Позиция
↓
Марка
↓
Характеристики
↓
Нормативы
↓
Связанные документы
↓
Изменения
```

Например страница:

```text
ПуГВнг(А)-LS
```

может знать:

```text
марка
производители
паспорт
сертификат
ГОСТ
сечение
тип прокладки
связанные позиции
использованные проекты
```

И это уже становится **knowledge graph / инженерной базой знаний**.

---

# 25. Вот теперь все твои проекты можно объединить

Я бы нарисовал всю твою систему так:

```text
                         ┌────────────────────┐
                         │  ПРОЕКТНАЯ ДОКУМ.  │
                         └─────────┬──────────┘
                                   ↓
                         ┌────────────────────┐
                         │   РАБОЧАЯ ДОКУМ.  │
                         └─────────┬──────────┘
                                   ↓
               ┌──────────────────┴─────────────────┐
               ↓                                    ↓
       СТРУКТУРИРОВАННЫЕ ДАННЫЕ               PDF / СКАНЫ
               ↓                                    ↓
        Power Query / Python                  OCR / MinerU
               ↓                                    ↓
         СВЕРКА П ↔ РД                         LLM / NLM
               ↓                                    ↓
          ШАХМАТКА                         МЕТАДАННЫЕ ДОКУМ.
               ↓                                    ↓
             EXON                         БАЗА ПАСПОРТОВ
               │                                    │
               └───────────────┬────────────────────┘
                               ↓
                       DOCUMENT FINDER
                               ↓
                         КОМПЛЕКТ ПТО
```

А параллельно:

```text
ЭОМ PDF
 ↓
ОДНОЛИНЕЙНЫЕ СХЕМЫ
 ↓
JSON
 ↓
GRAPH
 ↓
КЖ ↔ СО ↔ СХЕМА
 ↓
RULE ENGINE
```

И ещё сверху:

```text
LLM WIKI / KNOWLEDGE BASE
```

которая связывает всё.

---

# 26. Поэтому твой сайт уже нельзя строить как «портфолио Excel»

Я бы позиционировал его как:

# **Инженер ПТО / Automation & Data**

И подзаголовок:

> **Автоматизация строительной документации, контроля данных и исполнительного производства.**

---

# 27. Основные разделы сайта

### **01 — ПТО**

Процесс работы с документацией.

### **02 — Data & Excel**

Power Query / Excel / Python.

### **03 — Документы**

Паспорта / СС / OCR / база.

### **04 — Электро**

Однолинейные схемы / КЖ / спецификации.

### **05 — Automation**

EXON Extension.

### **06 — Document Intelligence**

OCR / LLM / поиск документов.

### **07 — Version Control**

Сравнение редакций РД.

---

# 28. И я бы добавил ещё один новый термин для твоего проекта

## **Engineering Document Intelligence**

Потому что теперь у тебя есть полный цикл:

```text
Extract
→ Normalize
→ Compare
→ Validate
→ Search
→ Assemble
→ Deliver
```

И это действительно описывает почти всю совокупность твоих разработок.

---

# 29. Самые сильные кейсы по приоритету

Я бы поставил так:

**★★★★★**
Сверка П ↔ РД

**★★★★★**
Однолинейные схемы + КЖ + спецификация

**★★★★★**
Система версионного сравнения документации

**★★★★★**
Шахматка ИД + EXON

**★★★★★**
ETM Data Pipeline

**★★★★☆**
База паспортов / сертификатов + Document Finder

**★★★★☆**
OCR / NotebookLM

**★★★★☆**
Автоматизация Excel / Power Query

---

# 30. И важный вывод про твою работу

После всего, что ты прислал, я бы уже **не называл твою главную компетенцию «автоматизацией ПТО» только в смысле Excel**.

Гораздо точнее:

> **Инженер ПТО, который проектирует автоматизированные процессы работы со строительной документацией: извлечение данных из PDF, структурирование, междокументная сверка, контроль версий, валидация, поиск технических документов и автоматизированная подготовка исполнительной документации.**

А программирование здесь — твой инструмент, а не профессия сама по себе.

Это существенно сильнее позиционирования «Инженер ПТО + Python».

---

**User:**



## Contents

- [Документы](#h-1)
  - [Сводка](#-1)
  - [Ключевые элементы](#-)

# Документы

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/dokumenty.md)

## Сводка

**Требования**

Форматы: архив, pdf, excel, csv

**1.1 Ручная загрузка**

## Ключевые элементы

- drag & drop
- При загрузке пользователь должен иметь возможность выбрать проект, к которому привязывается документ
- При загрузке документа внутри любого модуля системы документ должен автоматически попадать в общее хранилище
- Данные документа должны быть доступны в системе сразу после загрузки
- Система должна поддерживать интеграцию с внешней средой общих данных (СОД)

## Contents

- [ЭЭ — Энергетическая эффективность](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# ЭЭ — Энергетическая эффективность

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ee-energeticheskaya-effektivnost.md)

## Сводка



Автоматическая сверка соответствия рабочей документации требованиям Раздела 10.1 по классу энергоэффективности, сопротивлениям теплопередаче, удельным расходам и мероприятиям энергосбережения. По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ЭЭ (П) ↔ РД».

Сравниваемая пара документов: Раздел 10.1 «Мероприятия по обеспечению соблюдения требований энергетической эффективности» (П) ↔ ЭЭ (РД) / профильные разделы (АР, ОВ, ВК, ЭОМ).

## Ключевые элементы

- Снижение класса энергоэффективности РД относительно П.
- Снижение сопротивления теплопередаче наружных ограждений.
- Увеличение удельного расхода тепла на отопление и ГВС.
- Исключение / сокращение мероприятий энергосбережения.
- Несоответствие требований к узлам учёта (количество, тип, точность).



## Contents

- [Фильтрация таблиц проектной документации при формировании ВОР](#-)
  - [Сводка](#h-2)
  - [Ключевые элементы](#--1)

# Фильтрация таблиц проектной документации при формировании ВОР

**Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/filtraciya-tablic-proektnoj-dokumentacii-pri-formirovanii-vor.md)

## Сводка



Система извлекает таблицы из проектной документации (КЖ, КМ, АР, ИОС и др.), показывает их пользователю на экране проверки данных и сопоставляет позиции с расценками для формирования ведомости объёмов работ (ВОР). Не все таблицы содержат объёмы работ: часть из них — деталировки, справочные и служебные таблицы, которые порождают двойной счёт и ложные сопоставления. Настоящий документ задаёт требования к механизму фильтрации таких таблиц.

Для каждой таблицы независимо задаются три флага:

## Ключевые элементы

- Извлекать (parse) — всегда ДА: любая таблица парсится и сохраняется в БД.
- Показывать (UI) — скрытые таблицы не отображаются на экране проверки данных.
- Участвует в сопоставлении (matching) — позиции скрытых таблиц не подаются в матчер расценок и не могут породить ни одной строки ВОР.
- Contents
  - [Фильтры-Марка чертежа](#-)
    - [Сводка](#h-2)
    - [Ключевые элементы](#--1)
  # Фильтры-Марка чертежа
  **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/filtry-marka-chertezha.md)
  ## Сводка
  При формировании ВОР для разделов ОВ, ВК, ЭОМ, СС и АВ система извлекает из шифра документа марку основного комплекта рабочих чертежей и использует её как уровень группировки «Марка чертежей» (по аналогии с приложением В ГОСТ Р 21.101–2026). Для корректной группировки достаточно извлечь маркировочную часть шифра: АСКУВТ, АСУД, АОВ, ПТ, СОУЭ и т. п.

  Шифр читается из графы «Обозначение» основной надписи листа (правый нижний угол): форма 3 — первый лист, форма 6 — последующие листы. Имя файла источником не является: в именах встречаются нестабильные разделители и дописки («МЧ4-РД-13-АСКУВТ\_15\_СО.pdf», «МЧ4-РД-13-АСУД-CО\_л.4.pdf»), тогда как в штампе шифр записан единообразно.

  Примеры основной надписи из представленных документов:
  ## Ключевые элементы
  - **Локализация:** зона основной надписи в правом нижнем углу листа; графа «Обозначение».
  - **Чтение:** текстовый слой PDF; при его отсутствии (сканы) — OCR зоны штампа.
  - **Нормализация:** приведение к верхнему регистру, удаление пробелов, замена латинских символов-двойников на кириллицу (C→С, O→О, A→А, B→В, E→Е, H→Н, K→К, M→М, P→Р, T→Т, X→Х, Y→У).
  - **Парсинг:** суффикс типа документа (.СО, .ПР1, номер документа) отделяется с конца шифра; всё между номером корпуса и суффиксом — марка, включая точки внутри составных марок (ЭОМ.КК). Регулярное выражение:
  - **Группировка:** значение «марка» без номера части = группа уровня «Марка чертежей». Суффиксы документов (.СО, .ПР1) на группировку не влияют: АОВ.СО и АОВ.ПР1 попадают в группу АОВ.
  - Contents
    - [Фильтры-Марка чертежа](#-)
      - [Сводка](#h-2)
      - [Ключевые элементы](#--1)
    # Фильтры-Марка чертежа
    **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/filtry-marka-chertezha.md)
    ## Сводка
    При формировании ВОР для разделов ОВ, ВК, ЭОМ, СС и АВ система извлекает из шифра документа марку основного комплекта рабочих чертежей и использует её как уровень группировки «Марка чертежей» (по аналогии с приложением В ГОСТ Р 21.101–2026). Для корректной группировки достаточно извлечь маркировочную часть шифра: АСКУВТ, АСУД, АОВ, ПТ, СОУЭ и т. п.

    Шифр читается из графы «Обозначение» основной надписи листа (правый нижний угол): форма 3 — первый лист, форма 6 — последующие листы. Имя файла источником не является: в именах встречаются нестабильные разделители и дописки («МЧ4-РД-13-АСКУВТ\_15\_СО.pdf», «МЧ4-РД-13-АСУД-CО\_л.4.pdf»), тогда как в штампе шифр записан единообразно.

    Примеры основной надписи из представленных документов:
    ## Ключевые элементы
    - **Локализация:** зона основной надписи в правом нижнем углу листа; графа «Обозначение».
    - **Чтение:** текстовый слой PDF; при его отсутствии (сканы) — OCR зоны штампа.
    - **Нормализация:** приведение к верхнему регистру, удаление пробелов, замена латинских символов-двойников на кириллицу (C→С, O→О, A→А, B→В, E→Е, H→Н, K→К, M→М, P→Р, T→Т, X→Х, Y→У).
    - **Парсинг:** суффикс типа документа (.СО, .ПР1, номер документа) отделяется с конца шифра; всё между номером корпуса и суффиксом — марка, включая точки внутри составных марок (ЭОМ.КК). Регулярное выражение:
    - **Группировка:** значение «марка» без номера части = группа уровня «Марка чертежей». Суффиксы документов (.СО, .ПР1) на группировку не влияют: АОВ.СО и АОВ.ПР1 попадают в группу АОВ.
  - Contents
    - [ГП — Генеральный план](#-)
      - [Сводка](#h-2)
      - [Ключевые элементы](#--1)
    # ГП — Генеральный план
    **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/gp-generalnyj-plan.md)
    ## Сводка


    Автоматическая сверка соответствия рабочей документации ГП требованиям проектной документации ПЗУ по планировочной организации территории, отметкам, транспортной схеме, инженерным сетям по площадке. По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ПЗУ ↔ ГП» и явно фиксирует расхождения.

    Сравниваемая пара документов: Раздел 2 «Схема планировочной организации земельного участка» (ПЗУ) (П) ↔ ГП (РД).
    ## Ключевые элементы
    - Изменение посадки здания (смещение, поворот, координаты углов).
    - Изменение основных отметок (планировочная, чистого пола).
    - Изменение схемы движения транспорта / парковок.
    - Несоответствие площадей благоустройства (твёрдые покрытия, газон).
    - Изменение состава МАФ.
  - Contents
    - [ХСК](#h-1)
      - [Сводка](#-1)
    # ХСК
    **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/hsk.md)
    ## Сводка


    **{blue}(1. Назначение)**

    Документ описывает Этап А — автоматическую подготовку документа для загрузки в «рабочее пространство» пресейла из тендерной документации заказчика (ВОР, смета, спецификация): парсинг входящих файлов в нормализованные позиции, приведение единиц измерения к единичным, ИИ-маппинг позиций со справочником кодов работ, наследование ключевых физических объёмов (КФО) и специальностей, агрегацию трудозатрат и формирование **ВОР (ведомости объёмов работ)** с группировкой по КФО / разделам и выгрузкой в XLSX. Цель — исключить ручной сбор и перенос данных из тендерной документации и сократить цикл «документ → коммерческое предложение».
- Contents
  - [Инженерные системы](#-)
    - [Сводка](#h-2)
    - [Ключевые элементы](#--1)
  # Инженерные системы
  **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/inzhenernye-sistemy.md)
  ## Сводка
  ИИ-агент предназначен для автоматизированного анализа рабочей документации: считывает спецификации, определяет структуру и уровни группировки элементов, классифицирует виды работ и используемые материалы, после чего формирует ВОР (ведомость объёмов работ) в структурированном виде.

  **Уровни иерархии**

  Структура ВОР для раздела ОВ — шестиуровневая, аналогичная иерархии раздела АР: каждый уровень добавляет дополнительный признак группировки позиций спецификации.
  ## Ключевые элементы
  - семантика наименования (узлы, маркируемые как «вентилятор», «вентагрегат», «вентиляторная установка» и подобные основные изделия — потенциально опорные позиции комплекта);
  - расположение позиций в спецификации подряд под одним шифром системы (последовательная группа дополняющих изделий после опорной позиции);
  - согласованность марок и поставщика (комплектующие одной серии/одного бренда, прямо ссылающиеся на основное изделие — например, «для VOP 71», «для крышного вентилятора»);
  - функциональная связность (клапаны обратные, плиты опорные, стаканы, виброизоляторы, гибкие вставки, секции смешения и т. п. — типовые комплектующие к вентилятору/агрегату).
  - Если позиция распознана как опорная и за ней следуют комплектующие — применить правило Б: объединить группу в одну работу. Опорная позиция определяет имя работы и её количество.
- Contents
  - [ИОС1 - Система электроснабжения](#1-)
    - [Сводка](#h-2)
    - [Ключевые элементы](#-)
  # ИОС1 - Система электроснабжения
  **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ios1-sistema-elektrosnabzheniya.md)
  ## Сводка
  Автоматическая сверка соответствия рабочей документации ЭОМ требованиям проектной документации ИОС1 по системе электроснабжения объекта. По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ИОС1 ↔ ЭОМ» по ключевым техническим параметрам и явно фиксирует расхождения, требующие синхронизации между стадиями П и Р.

  Сверка выполняется по парам: ИОС1 актуальной ревизии ↔ ЭОМ актуальной ревизии того же подобъекта.

  **Шаг 0. Проверка принадлежности документов к одному объекту**
  ## Ключевые элементы
  - строки — контролируемый параметр;
  - столбцы — «Параметр», «ИОС1», «ЭОМ», «Отклонение / соответствие», «Статус».
  - Совпадает — параметр в ЭОМ соответствует требованию ИОС1 точно или находится в допустимом коридоре (для нагрузочных характеристик — не превышает; для защитных — не хуже).
  - Расхождение — параметр в ЭОМ явно отличается от ИОС1 в недопустимую сторону (другая категориальная характеристика, ухудшение защиты, превышение нагрузки).
  - Требует уточнения — параметр явно не указан в одном из документов или указан косвенно; нужна проверка по смежным разделам или у ГИП.
  - Contents
    - [ИОС2, ИОС3— Водоснабжение и водоотведение](#2-3-)
      - [Сводка](#h-2)
      - [Ключевые элементы](#-)
    # ИОС2, ИОС3— Водоснабжение и водоотведение
    **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ios2-ios3-vodosnabzhenie-i-vodootvedenie.md)
    ## Сводка


    Автоматическая сверка соответствия рабочей документации ВК требованиям проектной документации ИОС3 по системам В1/В2/К1/К2. По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ИОС3 ↔ ВК» и явно фиксирует расхождения, требующие синхронизации между стадиями П и Р.

    Сравниваемая пара документов: Раздел 5 ИОС3 «Система водоснабжения / водоотведения» (П) ↔ ВК (РД).
    ## Ключевые элементы
    - Превышение расчётного расхода РД над П (для расчёта присоединения).
    - Снижение требуемого напора по сравнению с гарантированным.
    - Замена материала трубопровода (сталь оцинк. → ПП без обоснования).
    - Изменение диаметра ввода / выпуска.
    - Замена/исключение системы ВПВ или АУПТ.
  - Contents
    - [ИОС4— Отопление, вентиляция и кондиционирование](#4-)
      - [Сводка](#h-2)
      - [Ключевые элементы](#-)
    # ИОС4— Отопление, вентиляция и кондиционирование
    **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ios4-otoplenie-ventilyaciya-i-kondicionirovanie.md)
    ## Сводка


    Автоматическая сверка соответствия рабочей документации ОВ требованиям проектной документации ИОС4 по системам отопления, вентиляции и кондиционирования. По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ИОС4 ↔ ОВ» и явно фиксирует расхождения, требующие синхронизации между стадиями П и Р.

    Сравниваемая пара документов: Раздел 5 ИОС4 «Отопление, вентиляция и кондиционирование» (П) ↔ ОВ (РД).
    ## Ключевые элементы
    - Превышение расчётной тепловой нагрузки РД над П.
    - Снижение кратности воздухообмена в РД относительно П.
    - Замена типа источника тепла / холода (например, ИТП → крышная котельная).
    - Изменение класса фильтрации / классов чистоты воздуха.
    - Замена принципиальной схемы (приточно-вытяжная → только вытяжная).
    - Contents
      - [ИОС 5, ИОС6— Системы связи и слаботочные системы](#-5-6-)
        - [Сводка](#h-2)
        - [Ключевые элементы](#-)
      # ИОС 5, ИОС6— Системы связи и слаботочные системы
      **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ios-5-ios6-sistemy-svyazi-i-slabotochnye-sistemy.md)
      ## Сводка
      Автоматическая сверка соответствия рабочей документации СС требованиям проектной документации ИОС5/ИОС6 по составу слаботочных систем (ОПС, СОУЭ, СКС, СКУД, СОТ, ЛВС). По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ИОС5/ИОС6 ↔ СС» и явно фиксирует расхождения, требующие синхронизации между стадиями П и Р.

      Сравниваемая пара документов: Раздел 5 ИОС5/ИОС6 «Сети связи» / «Слаботочные системы» (П) ↔ СС (РД).

      Стадия П формирует состав слаботочных систем и требования. Стадия РД доводит до марок оборудования, длин трасс, мест размещения. Сверка идёт по составу систем, типам оборудования, нагрузкам на каналы, схемам резервирования.
      ## Ключевые элементы
      - Исключение или замена системы (ИСО → охранно-пожарная без СКУД).
      - Изменение класса/категории кабельной системы (СКС Cat.6 → Cat.5e).
      - Замена оборудования с понижением функциональности (адресная ОПС → пороговая).
      - Изменение схем резервирования / источников бесперебойного питания.
      - Расхождение по количеству точек подключения (СКС/СКУД/СОТ). Contents
        - [ИОС 5, ИОС6— Системы связи и слаботочные системы](#-5-6-)
          - [Сводка](#h-2)
          - [Ключевые элементы](#-)
        # ИОС 5, ИОС6— Системы связи и слаботочные системы
        **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ios-5-ios6-sistemy-svyazi-i-slabotochnye-sistemy.md)
        ## Сводка
        Автоматическая сверка соответствия рабочей документации СС требованиям проектной документации ИОС5/ИОС6 по составу слаботочных систем (ОПС, СОУЭ, СКС, СКУД, СОТ, ЛВС). По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ИОС5/ИОС6 ↔ СС» и явно фиксирует расхождения, требующие синхронизации между стадиями П и Р.

        Сравниваемая пара документов: Раздел 5 ИОС5/ИОС6 «Сети связи» / «Слаботочные системы» (П) ↔ СС (РД).

        Стадия П формирует состав слаботочных систем и требования. Стадия РД доводит до марок оборудования, длин трасс, мест размещения. Сверка идёт по составу систем, типам оборудования, нагрузкам на каналы, схемам резервирования.
        ## Ключевые элементы
        - Исключение или замена системы (ИСО → охранно-пожарная без СКУД).
        - Изменение класса/категории кабельной системы (СКС Cat.6 → Cat.5e).
        - Замена оборудования с понижением функциональности (адресная ОПС → пороговая).
        - Изменение схем резервирования / источников бесперебойного питания.
        - Расхождение по количеству точек подключения (СКС/СКУД/СОТ).
- Contents
  - [ИОС7 — Технологические решения](#7-)
    - [Сводка](#h-2)
    - [Ключевые элементы](#-)
  # ИОС7 — Технологические решения
  **Модуль:** [[Axis ВОР]] **Оригинал:** [Исходный документ](../../../raw/ios7-tehnologicheskie-resheniya.md)
  ## Сводка


  Автоматическая сверка соответствия рабочей документации ТХ требованиям проектной документации ИОС7 по технологической схеме, составу оборудования и параметрам процесса. По итогам ИИ-агент формирует сводную таблицу с построчным сопоставлением «ИОС7 ↔ ТХ» и явно фиксирует расхождения, требующие синхронизации между стадиями П и Р.

  Сравниваемая пара документов: Раздел 5 ИОС7 «Технологические решения» (П) ↔ ТХ (РД).
  ## Ключевые элементы
  - Изменение технологической схемы (последовательность аппаратов, обходы).
  - Замена основного оборудования на иной типоразмер / иного производителя без подтверждения параметров.
  - Снижение проектной производительности РД относительно П.
  - Изменение состава трубопроводных систем (диаметры, материалы).
  - Изменение класса взрывоопасной/пожарной зоны.

---

**Assistant:**

Да. Этот блок добавляет ещё один важный слой: у тебя получается не просто «автоматизация ПТО», а **система управления структурированными данными строительной документации и её взаимной проверкой**.

При этом я бы не размножал кейсы до десятков страниц. Из всего, что ты прислал, лучше собрать несколько крупных направлений, а внутри них — конкретные workflow и правила.

## 1. Работа с документами как с единым хранилищем

Требования из блока «Документы» я бы превратил в фундаментальный принцип твоей системы:

```text
PDF / Excel / CSV / архив
        ↓
единое хранилище документов
        ↓
привязка к проекту
        ↓
извлечение данных
        ↓
индексация
        ↓
поиск / сравнение / проверка
```

То есть документ не должен существовать отдельно от проекта.

Минимальная сущность:

```text
Документ
├── Проект
├── Раздел
├── Стадия
├── Шифр
├── Ревизия
├── Тип документа
├── Дата
├── Источник
├── Связанные документы
└── Извлечённые данные
```

Это напрямую связывает твои ETM-документы, РД, спецификации, КЖ, однолинейные схемы и исполнительную документацию.

---

# 2. Фильтрация таблиц перед автоматическим формированием ВОР

Здесь появилась очень важная архитектурная идея:

> **Извлекать ≠ показывать ≠ использовать в сопоставлении.**

Это стоит сохранить буквально как принцип.

Для каждой извлечённой таблицы:

```text
TABLE_ID
│
├── parsed = YES
├── visible = YES/NO
└── matching = YES/NO
```

Например, детальная справочная таблица может быть корректно распознана и сохранена, но не должна попасть в расчёт ВОР.

Это решает классическую проблему:

```text
одна и та же позиция
↓
две таблицы
↓
двойной учёт
```

То есть это уже **контроль происхождения данных и предотвращение double counting**.

---

# 3. Иерархия и группировка документов

Здесь особенно хорошо стыкуется то, что мы ранее разобрали по твоим ETM-таблицам.

Ты постоянно используешь несколько уровней:

```text
Проект
 ↓
Раздел
 ↓
Марка комплекта
 ↓
Документ
 ↓
Таблица
 ↓
Группа
 ↓
Позиция
```

И у тебя есть важный принцип:

> **имя файла не является источником истины, если внутри самого документа есть более надёжный идентификатор.**

Мы это уже видели для:

- ревизии;
- обозначения;
- марки комплекта;
- даты;
- типа документа.

Поэтому общая архитектура должна опираться прежде всего на **содержимое документа**, а не его имя.

---

# 4. «Марка чертежей» — это отдельный ключ данных

Твой блок по фильтру марки чертежа очень важен.

Например:

```text
МЧ4-РД-13-АОВ.СО
МЧ4-РД-13-АОВ.ПР1
```

не должны становиться двумя совершенно разными ветками.

Нужно извлечь:

```text
МЧ4-РД-13-АОВ.СО
             ↓
           АОВ
```

И:

```text
МЧ4-РД-13-АОВ.ПР1
              ↓
             АОВ
```

Получается универсальное поле:

```text
Марка комплекта = АОВ
```

И тогда появляется дополнительная иерархия:

```text
Раздел
  ↓
Марка комплекта
  ↓
Документы
  ↓
Таблицы
  ↓
Позиции
```

Это очень хорошо ложится и на дальнейшую сверку П ↔ РД.

---

# 5. Сверка проектной и рабочей документации

Теперь уже можно увидеть общий шаблон для всех твоих разделов.

Он практически одинаков:

```text
П
↕
РД
↓
идентификация пары
↓
извлечение параметров
↓
нормализация
↓
сопоставление
↓
проверка допустимости
↓
результат
```

А результат у тебя системно сводится к:

```text
Параметр
П
РД
Отклонение
Статус
Комментарий
```

### Статусы

Ты фактически уже пришёл к универсальной системе:

```text
СОВПАДАЕТ
РАСХОЖДЕНИЕ
ТРЕБУЕТ УТОЧНЕНИЯ
НЕТ ДАННЫХ
```

Я бы именно эти статусы сделал базовыми во всей системе.

---

# 6. ИОС1 → ЭОМ

Здесь проверяется уже не просто наличие позиции, а **техническое соответствие параметров**.

Например:

```text
ИОС1:
мощность = X
защита = Y
система = Z

ЭОМ:
мощность = X'
защита = Y'
система = Z'
```

Далее правило:

```text
X' соответствует X → СОВПАДАЕТ
X' хуже X → РАСХОЖДЕНИЕ
X' отсутствует → УТОЧНЕНИЕ
```

Это важнее обычного fuzzy matching, потому что здесь нужен **семантический rule engine**.

---

# 7. ИОС3 → ВК

Здесь уже другие правила:

```text
расход
напор
материал
диаметр
система
оборудование
```

Например:

```text
П:
стальная оцинкованная труба

РД:
ПП труба
```

Это не просто текстовое отличие.

Это:

> **изменение технического решения.**

Поэтому для каждого раздела тебе нужен не только общий comparator, но и **профиль правил раздела**.

---

# 8. ИОС4 → ОВ

Аналогично:

```text
тепловая нагрузка
воздухообмен
источник тепла/холода
фильтрация
схема системы
```

И здесь появляется интересная общая концепция:

## Каждая система имеет собственный набор контрольных параметров.

Например:

```text
ЭОМ
→ мощность, ток, напряжение, резервирование...

ВК
→ расход, напор, диаметр, материал...

ОВ
→ тепло, расход воздуха, кратность, оборудование...

СС
→ системы, категории, оборудование, резервирование...
```

Это уже почти **domain-specific validation engine**.

---

# 9. ИОС5/ИОС6 → системы связи и слаботочки

А здесь особенно хорошо соединяются твои предыдущие проекты по:

- СОТ;
- СКУД;
- СКС;
- ОПС;
- СОУЭ;
- ЛВС.

Проверяется:

```text
состав систем
↓
тип оборудования
↓
категория кабелей
↓
количество точек
↓
резервирование
↓
источники питания
```

Например:

```text
П:
СКС Cat.6

РД:
СКС Cat.5e
```

Это автоматически:

```text
РАСХОЖДЕНИЕ
```

Потому что изменился не просто текст, а класс решения.

---

# 10. ИОС7 → ТХ

Здесь аналогично:

```text
технологическая схема
оборудование
типоразмер
производительность
трубопроводы
зоны
```

и опять тот же движок:

```text
П
↓
структурированные параметры
↓
РД
↓
правила
↓
статус
```

То есть **не надо делать отдельный механизм для каждого раздела**.

Нужно сделать единое ядро:

```text
DocumentComparator
```

а каждому разделу дать:

```text
RuleSet
```

---

# 11. ЭЭ → профильный cross-check

ЭЭ особенно интересен тем, что это уже не просто «П ↔ РД».

Нужно подключать несколько разделов:

```text
ЭЭ
├── АР
├── ОВ
├── ВК
└── ЭОМ
```

То есть возникает:

> **многодокументная проверка зависимости параметров.**

Например:

```text
ЭЭ требует:
класс = A

АР:
ограждающая конструкция X

ОВ:
теплопотери Y

ЭОМ:
нагрузка Z
```

И проверяется согласованность всей цепочки.

Это следующий уровень после обычного pairwise comparison.

---

# 12. ГП ↔ ПЗУ

Тут уже появляется геометрический и пространственный класс задач:

```text
посадка
координаты
отметки
транспорт
благоустройство
МАФ
```

Для него текстового сравнения будет недостаточно.

Нужны:

```text
PDF layout
+
geometry
+
OCR
+
пространственные отношения
```

То есть это уже родственно твоей работе с однолинейными схемами.

---

# 13. Инженерные системы — ещё одна важная идея

Очень хорошо, что там введено понятие:

> **опорная позиция + связанные комплектующие.**

Например:

```text
Вентилятор
├── клапан
├── виброизолятор
├── гибкая вставка
├── опора
└── плита
```

Это означает, что простая построчная обработка спецификации иногда недостаточна.

Нужно распознавать:

```text
позицию
+
её контекст
+
связанные дочерние позиции
```

То есть уже возникает **иерархическая семантическая модель спецификации**.

---

# 14. И это напрямую связано с твоей шахматкой

Потому что в шахматке тоже есть:

```text
основная позиция
↓
документы
↓
комплектность
↓
исполнительная документация
```

То есть у тебя в разных проектах повторяется одна и та же структура:

> **объект → дочерние элементы → документы → проверки**

Это надо сделать базовым принципом информационной модели.

---

# 15. Теперь самое важное: как объединить всё это с однолинейными схемами

У тебя получается очень красивая вертикаль:

```text
                 ДОКУМЕНТ
                    │
             извлечение данных
                    │
              НОРМАЛИЗАЦИЯ
                    │
         ┌──────────┼──────────┐
         ↓          ↓          ↓
       П/РД       КЖ/СО      СХЕМА
         │          │          │
         └──────────┼──────────┘
                    ↓
             ЕДИНАЯ МОДЕЛЬ
                    ↓
             RULE ENGINE
                    ↓
          CROSS-DOCUMENT CHECK
                    ↓
                ОТЧЁТ
```

И вот эта модель уже способна связывать:

```text
ЭОМ
КЖ
СО
Однолинейная схема
П
РД
Исполнительная документация
Паспорта
Сертификаты
```

---

# 16. Поэтому я бы изменил твою общую концепцию

Не:

> «набор автоматизаций инженера ПТО».

А:

# **Единая система структурирования, поиска и проверки строительной документации**

С четырьмя ядрами:

### 1. Document Intelligence

```text
PDF
OCR
MinerU
OpenDataLoader
LLM
```

### 2. Data Engineering

```text
Excel
CSV
Power Query
Pandas
ETM
нормализация
```

### 3. Cross-document Validation

```text
П ↔ РД
Схема ↔ КЖ ↔ СО
КЖ ↔ СО
ЭЭ ↔ АР/ОВ/ВК/ЭОМ
версии ↔ версии
```

### 4. Document Retrieval

```text
Позиция спецификации
↓
Document Finder
↓
паспорт
↓
сертификат
↓
декларация
↓
готовый комплект
```

---

# 17. А уже поверх этого — исполнительная документация

```text
               ПРОЕКТ
                  ↓
         структурированные данные
                  ↓
             КОНТРОЛЬ
                  ↓
             ШАХМАТКА
                  ↓
        комплектность документов
                  ↓
                EXON
```

То есть EXON у тебя становится **конечной точкой производственного workflow**, а не отдельным маленьким проектом.

---

# 18. И ещё один слой, который я бы обязательно добавил

## Audit Trail

Для инженерной системы это критично.

Каждое решение должно иметь:

```text
что проверяли
какие документы использовали
какая ревизия
какой параметр
какое правило
какой результат
какое доказательство
```

Например:

```text
Результат: РАСХОЖДЕНИЕ

П:
ЭОМ изм.3
лист 21

РД:
ЭОМ изм.5
лист 21

Параметр:
автомат QF-12

П:
C16

РД:
C25

Правило:
RULE-EOM-014

Источник:
штамп + таблица спецификации

Статус:
Требует проверки проектировщика
```

Это очень сильно повышает доверие к системе.

---

# 19. В итоге твои кейсы я бы окончательно собрал в 8 портфельных направлений

| № | Кейс | Суть |
|---|---|---|
| 01 | **ETM Data Pipeline** | сбор каталога, характеристик и документов |
| 02 | **База технической документации** | паспорта, СС, ДКС, поиск документов |
| 03 | **Document Intelligence** | OCR + LLM + метаданные + переименование |
| 04 | **Шахматка ИД → EXON** | комплектность и автоматизированная загрузка |
| 05 | **Сверка П ↔ РД** | межстадийный контроль технических решений |
| 06 | **Однолинейные схемы** | схема → данные → граф → КЖ/СО |
| 07 | **Version Diff** | сравнение ревизий РД |
| 08 | **Engineering Validation Engine** | библиотека инженерных правил проверки |

А внутри **Engineering Validation Engine** уже находятся:

```text
ИОС1 ↔ ЭОМ
ИОС3 ↔ ВК
ИОС4 ↔ ОВ
ИОС5/6 ↔ СС
ИОС7 ↔ ТХ
ЭЭ ↔ профильные разделы
ПЗУ ↔ ГП
КЖ ↔ СО
КЖ ↔ муфты
КЖ ↔ трубы/металлорукав
графика ↔ спецификация
ВРС арифметика
маркированные элементы
```

---

## И главное

После всего присланного материала я вижу у тебя уже не набор разрозненных экспериментов.

Есть последовательная архитектура:

**собрать → распознать → структурировать → нормализовать → связать → проверить → найти → собрать комплект → загрузить → сравнить версии → сохранить историю.**

Это уже очень сильная основа для твоего собственного **инженерного data/automation-проекта для ПТО**.

AXIS и любые сторонние названия из материалов при дальнейшем описании кейсов я буду убирать, сохраняя саму техническую логику.

---

**User:**

## Contents

- [Raw Notes: Окружение и терминология оцифровки однолинейных схем](#raw-notes-)
  - [Инструменты пользователя](#-)
  - [Терминология](#h-3)
  - [⚠️ Разный состав разделов в результатах — это нормально](#--1)
    - [Силовые схемы (раздел ЭОМ) — например, Задача 1 (ИТП)](#-1-)
    - [Осветительные схемы (раздел ЭО) — например, Задача 2 (Школа)](#-2-)

# Raw Notes: Окружение и терминология оцифровки однолинейных схем

## Инструменты пользователя

- **Python-библиотека ****`PyMuPDF (fitz)`** — используется для сверхбыстрого извлечения текстовых блоков и X\:Y координат из PDF.
- **Python-библиотека ****`pypdf`** — используется для простого извлечения плоского текста.
- **Векторные однолинейные схемы в PDF** — чертежи с электрическими сетями, спецификацией на листе и примечаниями.
- **Смежная рабочая документация (РД)** — Кабельный Журнал (КЖ) и Спецификация оборудования (СО) в формате PDF.
- **Нормативная база Wiki** — статьи по ГОСТ 31565-2012 (кабели LS, HF, LTx), ПУЭ 1.7.126 (заземление PE) и ГОСТ IEC 61439 (секционирование щитов).

## Терминология

- **ВРУ (Вводно-распределительное устройство)** — главный вводной щит объекта.
- **РШУ (Распределительный щит управления)** — промежуточные распределительные панели.
- **ШПЧ (Шкаф частотно-регулируемого привода)** — шкаф с преобразователями частоты для насосов.
- **БРП (Блок ручного пуска)** — пусковые моторные сборки с контакторами и тепловыми реле.
- **ПЧ (Преобразователь частоты)** — частотные приводы (`INSTART`).
- **КЖ (Кабельный журнал)** — ведомость кабельных трасс, длин и сечений.
- **СО (Спецификация оборудования)** — перечень всех физических изделий проекта.

## ⚠️ Разный состав разделов в результатах — это нормально

Состав выходных разделов в `extracted_flat_table.md` **зависит от типа схемы**, а не от ошибки конвейера.

### Силовые схемы (раздел ЭОМ) — например, Задача 1 (ИТП)

Содержат на чертеже штамп, примечания, условные обозначения, таблицу ТТ и сводную таблицу нагрузок. Поэтому в результатах появляются:

- **Раздел 1.** Данные Штампа
- **Раздел 2.** ПРИМЕЧАНИЕ (текстовый блок правил резервирования, АВР)
- **Раздел 3.** Условные Обозначения и Шины
- **Раздел 4.** Таблица Расчета и Проверки ТТ
- **Раздел 5.** Сводная Таблица Электрических Нагрузок и Режимов ВРУ
- **Раздел 6.** Полный Реестр Кабельных Линий

### Осветительные схемы (раздел ЭО) — например, Задача 2 (Школа)

На чертежах ЭО нет трансформаторов тока, нет режимов АВР, нет блока примечаний о резервировании насосов. Есть только таблицы групп освещения с автоматами и кабелями. Поэтому результат содержит **только Реестр Кабельных Линий** — и это корректно.

| **РазделЭОМ (силовое)ЭО (освещение)** |   |                  |
| ------------------------------------- | - | ---------------- |
| Штамп                                 | ✅ | ❌ нет на чертеже |
| Примечания                            | ✅ | ❌                |
| Условные обозначения                  | ✅ | ❌                |
| Таблица ТТ                            | ✅ | ❌ не применимо   |
| Сводная таблица нагрузок              | ✅ | ❌ не применимо   |
| Реестр кабельных линий                | ✅ | ✅                |

> **Правило:** Если при ревью результатов видишь отсутствие разделов 1–5, сначала проверь тип схемы (ЭОМ или ЭО), а не ищи баг в конвейере.



## Contents

- [name: оцифровка-однолинейных-схем description: Use when extracting, parsing, and validating single-line electrical diagrams (однолинейные схемы ВРУ/РШУ/ШПЧ), connecting extracted circuit lines with Cable Journals and Specifications, or performing engineering verification checks (Iном >= Iр, Pрасч = Pном \* Kc). Integrated with OpenDataLoader PDF engine for multi-format export (JSON, MD, HTML, TXT, images).](#name-description-use-when-extracting-parsing-and-validating-single-line-electrical-diagrams-connecting-extracted-circuit-lines-with-cable-journals-and-specifications-or-performing-engineering-verification-checks-i-i-p-p-kc-integrated-with-opendataloader-pdf-engine-for-multi-format-export-json-md-html-txt-images)

1. [Оцифровка и Валидация Однолинейных Электрических Схем (ЭОМ)](#-)

- [Overview](#overview)
- [Пайплайн Обработки (OpenDataLoader PDF + 5-Этапный Процесс)](#-opendataloader-pdf-5-)
- [Интеграция OpenDataLoader PDF](#-opendataloader-pdf)
- [Когда Использовать](#--1)
- [Репрепозиторий Инструментов и Шаблонов](#--2)

---

## name: оцифровка-однолинейных-схем description: Use when extracting, parsing, and validating single-line electrical diagrams (однолинейные схемы ВРУ/РШУ/ШПЧ), connecting extracted circuit lines with Cable Journals and Specifications, or performing engineering verification checks (Iном >= Iр, Pрасч = Pном \* Kc). Integrated with OpenDataLoader PDF engine for multi-format export (JSON, MD, HTML, TXT, images).

# Оцифровка и Валидация Однолинейных Электрических Схем (ЭОМ)

## Overview

Данный навык (скилл) регламентирует извлечение структурированных данных из сложных графических однолинейных принципиальных схем ВРУ/РШУ/ШПЧ и их последующую кросс-валидацию с Кабельным Журналом (КЖ) и Спецификацией (СО) по инженерному алгоритму `AXIS`. Модуль полностью интегрирован с гибридным движком **OpenDataLoader PDF** (`g:\Мой диск\___WIKI AXIS AI___\opendataloader-pdf`).

---

## Пайплайн Обработки (OpenDataLoader PDF + 5-Этапный Процесс)

```
digraph single_line_pipeline {
    rankdir=LR;
    "PDF Однолинейная схема" [shape=box];
    "OpenDataLoader PDF Engine (JDK 21)" [shape=box];
    "Выгрузка (.json, .html, .md, .txt)" [shape=box];
    "Промпт Вариант Б (CoT)" [shape=box];
    "Сырые данные (JSON / 6-Раздельная Таблица)" [shape=box];
    "Промпт Валидации" [shape=box];
    "КЖ & Спецификация" [shape=box];
    "Отчет Валидации (AXIS Checks)" [shape=doublecircle];

    "PDF Однолинейная схема" -> "OpenDataLoader PDF Engine (JDK 21)";
    "OpenDataLoader PDF Engine (JDK 21)" -> "Выгрузка (.json, .html, .md, .txt)";
    "PDF Однолинейная схема" -> "Промпт Вариант Б (CoT)";
    "Промпт Вариант Б (CoT)" -> "Сырые данные (JSON / 6-Раздельная Таблица)";
    "Сырые данные (JSON / 6-Раздельная Таблица)" -> "Промпт Валидации";
    "КЖ & Спецификация" -> "Промпт Валидации";
    "Промпт Валидации" -> "Отчет Валидации (AXIS Checks)";
}

```

---

## Интеграция OpenDataLoader PDF

Все PDF-документы из папок `raw/<Task_Name>/` автоматически обрабатываются через `opendataloader_pdf.convert()`, выгружая:

- `.json` (полное структурное дерево с координатами геометрии и блоков)
- `.md` (Markdown с выравниванием таблиц)
- `.html` (DOM-представление чертежа)
- `.txt` (чистый текстовый поток)
- `_images/` (извлеченные растровые элементы и графические блоки)

---

## Когда Использовать

- Извлечение полных данных из однолинейных электрических схем любой сложности.
- Оцифровка блоков управления (например, `1-БРП-03-380`), коммутационных аппаратов, ПЧ, силовых кабелей и выключателей безопасности (`1SA1`).
- Формирование 6-раздельной плоской таблицы с явными связями (Формат 1) и иерархического JSON-дерева (Формат 2).
- Проверка инженерных правил номавтоматар и мощности расчномс.

---

## Репрепозиторий Инструментов и Шаблонов

All resources are located in `Однолинейные схемы/`:

- **Движок Конвертации**:
  - `opendataloader-pdf` (`g:\Мой диск\___WIKI AXIS AI___\opendataloader-pdf`)
  - `workflows/run_workflow.py` (Полный оркестратор конвейера)
- **Промпты Извлечения**:
  - `prompts/prompt_variant_b_cot.md` (Рекомендуемый CoT топологический промпт)
  - `prompts/prompt_variant_a_direct.md` (Baseline прямой промпт)
  - `prompts/prompt_validation.md` (Промпт кросс-валидации)
- **Схемы и Шаблоны**:
  - `schemas/single_line_diagram_schema.json` (JSON Schema)
  - `schemas/single_line_table_schema.md` (Flat Table Schema)
  - `templates/template_flat_table.md` (Формат 1: 6-раздельная таблица)
  - `templates/template_hierarchy.md` (Формат 2: Дерево)
- **Золотой Эталон (Gold Reference)**:
  - `examples/<Task_Name>/gold_flat_table.md`
  - `examples/<Task_Name>/gold_hierarchy.json`
  - `examples/<Task_Name>/gold_validation_report.md`
- Contents
  - [Модуль Извлечения и Валидации Однолинейных Электрических Схем (Однолинейные схемы)](#-)
    - [📁 Структура Модуля](#--1)
    - [🚀 Запуск Полного Конвейера (Run Workflow)](#-run-workflow)
    - [📊 Форматы Вывода Данных](#--2)
  # Модуль Извлечения и Валидации Однолинейных Электрических Схем (Однолинейные схемы)
  Модуль предназначен для оцифровки однолинейных принципиальных электрических схем (ВРУ, РШУ, ШПЧ), связи их с Кабельными Журналами и Спецификациями оборудования, а также выполнения автоматических инженерных проверок по алгоритму `AXIS_Алгоритм_ручных_проверок`.

  Модуль полностью интегрирован с гибридным структурным парсером [**OpenDataLoader PDF**](https://github.com/opendataloader-project/opendataloader-pdf) (`g:\Мой диск\___WIKI AXIS AI___\opendataloader-pdf`).
  ---
  ## 📁 Структура Модуля
  ```
  Однолинейные схемы/
  ├── SKILL.md                                 # Инструкция (скилл) агента с OpenDataLoader PDF
  ├── README.md                                # Этот документ
  ├── workflows/                               # Оркестраторы конвейера
  │   ├── run_workflow.py                      # Главный скрипт автоматической оцифровки
  │   └── digitize_and_validate_workflow.md    # Описание регламента конвейера
  ├── prompts/                                 # Промпты извлечения и валидации
  │   ├── prompt_variant_a_direct.md           # Baseline прямой промпт
  │   ├── prompt_variant_b_cot.md              # Advanced Chain-of-Thought промпт
  │   └── prompt_validation.md                 # Промпт кросс-проверки с КЖ и СО
  ├── schemas/                                 # Схемы данных
  │   ├── single_line_diagram_schema.json     # JSON Schema иерархического дерева
  │   └── single_line_table_schema.md         # Описание колонок плоской таблицы
  ├── templates/                               # Шаблоны вывода
  │   ├── template_flat_table.md               # Шаблон вывода 1 (6-раздельная Таблица)
  │   └── template_hierarchy.md                # Шаблон вывода 2 (Дерево Markdown/JSON)
  ├── examples/                                # Золотые Эталоны по задачам
  │   └── <Task_Name>/                         # Папка эталонов конкретной задачи
  │       ├── gold_flat_table.md
  │       ├── gold_hierarchy.json
  │       └── gold_validation_report.md
  └── results/                                 # Результаты оцифровки
      └── <Task_Name>/                         # Результаты работы для каждой задачи
          ├── Схемы.json / .md / .html / .txt  # Выгрузка OpenDataLoader PDF
          ├── extracted_flat_table.md          # 6-раздельная таблица цепей + Mermaid
          ├── extracted_hierarchy.json         # Иерархическое JSON-дерево
          └── validation_report.md             # 5-раздельный отчет валидации

  ```
  ---
  ## 🚀 Запуск Полного Конвейера (Run Workflow)
  Для запуска автоматической оцифровки, парсинга OpenDataLoader PDF и 5-раздельной кросс-валидации для всех задач в `raw/`:
  ```
  python "g:\Мой диск\___WIKI AXIS AI___\Однолинейные схемы\workflows\run_workflow.py"

  ```
  ---
  ## 📊 Форматы Вывода Данных
  1. **OpenDataLoader PDF структуры** (`results/<Task_Name>/`): Файлы `.json`, `.md`, `.html`, `.txt` и подпапки `_images/` с растровыми вырезками.
  2. **Формат 1 (Плоская 6-Раздельная Таблица)** (`results/<Task_Name>/extracted_flat_table.md`): Содержит: Штамп, Примечания, Обозначения шин N/PE, Таблицу ТТ, Сводную таблицу нагрузок и Детализированную таблицу цепей с графическим Mermaid-графом.
  3. **Формат 2 (Иерархический JSON)** (`results/<Task_Name>/extracted_hierarchy.json`): Древовидное представление структуры ВРУ -> Панели -> Блоки -> Цепи -> Оборудование.
  4. **Отчет Кросс-Валидации (5 Разделов)** (`results/<Task_Name>/validation_report.md`): Сверка Схема vs КЖ vs СО, ПУЭ 1.7.126, ГОСТ 31565-2012, ПУЭ 3.1.4, ГОСТ IEC 61439.

---

**Assistant:**

Да. Этот материал существенно уточняет архитектуру, особенно по однолинейным схемам. Теперь я бы уже не просто добавлял «ещё один кейс», а пересобрал весь набор работ в правильную последовательность — от источника данных до инженерной проверки.

Ниже я прохожу по всей накопленной логике заново, уже с учётом ETM, базы паспортов, шахматки, OCR/NotebookLM, РД, П↔РД, КЖ/СО, однолинейных схем и версионности.

---

# 1. Базовый принцип всего проекта

Главная идея у тебя одна:

> **Любой строительный документ превращается из неструктурированного файла в структурированные данные, после чего эти данные связываются с другими документами и проверяются между собой.**

То есть:

```text
Файл
 ↓
Распознавание
 ↓
Извлечение структуры
 ↓
Нормализация
 ↓
Идентификация сущностей
 ↓
Связи с другими документами
 ↓
Проверки
 ↓
Результат
 ↓
История / база знаний
```

И это справедливо для:

- спецификации;
- паспорта;
- сертификата;
- КЖ;
- однолинейной схемы;
- ПД;
- РД;
- ВОР;
- исполнительной документации;
- Excel/CSV;
- версий одного документа.

---

# 2. Кейс №1 — сбор и построение исходной базы

## ETM как первый большой эксперимент Data Engineering

То, что ты сделал с ETM, — отдельный сильный кейс.

Ты не просто скачал товары.

Ты построил pipeline:

```text
ETM
 ↓
обнаружение категорий
 ↓
иерархия каталога
 ↓
товары
 ↓
характеристики
 ↓
сертификаты / паспорта / материалы
 ↓
локальная файловая база
 ↓
Excel-индексы
```

При этом есть:

- Playwright;
- Next.js `__NEXT_DATA__`;
- `_next/data`;
- pagination;
- resume;
- дедупликация;
- `progress.json`;
- обработка 429;
- повторное получение buildId;
- контроль полноты.

Это показывает именно способность строить **устойчивые data pipelines**, а не просто писать скрипты.

---

# 3. Кейс №2 — нормализация Excel-массива

Следующий уровень:

```text
597 technical_characteristics_*.xlsx
             ↓
       анализ структуры
             ↓
       объединение данных
             ↓
      группировка по каталогу
             ↓
    русские названия книг
             ↓
      сохранение структуры
             ↓
   документы как гиперссылки
```

И здесь есть важное правило, которое мы уже зафиксировали:

### Нельзя терять столбцы

Даже если:

```text
Категория А
→ характеристика заполнена

Категория Б
→ характеристика пустая
```

столбец всё равно существует.

Это важно, потому что ты строишь **унифицированную схему данных**, а не набор вручную оптимизированных таблиц.

---

# 4. Кейс №3 — база технических документов

После ETM у тебя появилась гораздо более широкая задача.

Ты начал собирать:

```text
Паспорта
Сертификаты соответствия
Декларации
Паспорта качества
Информационные письма
Руководства
Технические описания
```

Причём уже не только из ETM.

Ты отдельно выгрузил:

> паспорта качества ДКС

и продолжаешь пополнять библиотеку.

Вот это уже отдельный продуктовый кейс:

# **Корпоративная база технической документации**

Она должна работать как:

```text
Спецификация
 ↓
идентификация позиции
 ↓
поиск по базе
 ↓
паспорт
 ↓
сертификат
 ↓
декларация
 ↓
прочие документы
 ↓
готовый комплект
```

---

# 5. Кейс №4 — Document Finder

Твой поиск документов по спецификации — очень важный отдельный кейс.

Ты уже экспериментировал с:

- homoglyph normalization;
- regex;
- артикулами;
- марками;
- размерами;
- `difflib`;
- token matching;
- similarity score;
- MD5;
- удалением дубликатов;
- переносом документов по номерам позиций.

Но я бы сформулировал конечную задачу шире.

Не:

> поиск файла по имени.

А:

> **сопоставление строительной позиции с цифровыми доказательствами её соответствия.**

То есть:

```text
Позиция спецификации
       ↓
идентификатор
       ↓
поиск
 ┌─────┼─────┐
 ↓     ↓     ↓
Паспорт  СС  Декларация
 ↓     ↓     ↓
        комплект
```

И в перспективе здесь уже может работать несколько признаков:

```text
артикул
марка
модель
производитель
тип
размер
материал
ГОСТ
ТУ
EAN
код ETM
GDS код
```

---

# 6. Кейс №5 — OCR + Document Intelligence

Это следующий слой.

Ты построил несколько поколений:

```text
PyMuPDF
 ↓
RapidOCR
 ↓
MinerU / OpenDataLoader
 ↓
NotebookLM / Gemini
```

Но здесь я бы разделил задачи.

### PDF parser

извлекает структуру.

### OCR

извлекает изображение → текст.

### LLM

понимает смысл.

То есть:

```text
PDF
 ↓
layout extraction
 ↓
OCR
 ↓
структурированный текст
 ↓
LLM
 ↓
метаданные
```

Например:

```text
Тип = Сертификат соответствия

Номер =
ЕАЭС RU C-RU.08_26

Дата1 =
12.02.2022

Дата2 =
13.02.2026

Производитель =
Камкабель
```

---

# 7. И отдельно — твой pipeline NotebookLM

Тут уже есть полноценная архитектура:

```text
20 000+ PDF
      ↓
разбиение по потокам
      ↓
5 NotebookLM
      ↓
50 документов
      ↓
ожидание ingestion
      ↓
persona / инструкция
      ↓
извлечение JSON
      ↓
сопоставление результата с исходным PDF
      ↓
переименование
      ↓
master_documents.xlsx
```

Причём ты сознательно решил:

> не удалять источники до заполнения лимита, чтобы видеть результаты NotebookLM.

Это уже хороший пример **human-in-the-loop AI pipeline**.

---

# 8. Кейс №6 — интеллектуальное именование документов

Это кажется мелочью, но на самом деле это отдельная задача data normalization.

Например:

### Было

```text
2066580_mat_2_Руководство.pdf
```

### Стало

```text
Кабель ВВГ-Пнг(А)-LS 3x1,5
Руководство по эксплуатации
№б-н
Камкабель.pdf
```

Причём ты установил правила:

- очищать наименование;
- сохранять марку;
- удалять рекламные/логистические хвосты;
- очищать ООО/АО;
- извлекать номер;
- извлекать срок действия;
- `/` → `_`;
- исходник не уничтожать.

Это уже можно назвать:

# Document Identity Normalization

---

# 9. Кейс №7 — шахматка и исполнительная документация

После этого возникает следующая логическая ступень.

Тебе не нужны просто документы.

Тебе нужно понимать:

```text
какая позиция
→ какой документ
→ есть ли сертификат
→ есть ли паспорт
→ нужна ли декларация
→ какой файл
→ соответствует ли материал
```

И дальше:

```text
Спецификация
 ↓
Шахматка
 ↓
комплект документов
 ↓
проверка комплектности
 ↓
EXON
```

То есть шахматка — это не просто Excel.

Она становится **контрольной матрицей комплектности**.

---

# 10. Кейс №8 — оцифровка однолинейных схем

Теперь материал, который ты прислал сейчас.

Это уже значительно более сложная задача.

Потому что здесь документ нельзя воспринимать просто как текст.

Однолинейная схема содержит:

```text
текст
+
таблицы
+
геометрию
+
линии
+
связи
+
оборудование
+
иерархию
```

Поэтому обычный OCR здесь принципиально недостаточен.

---

# 11. Какой pipeline у тебя уже сформировался для схем

```text
PDF
 ↓
OpenDataLoader
 ↓
JSON + координаты
 ↓
Markdown
 ↓
HTML
 ↓
TXT
 ↓
images
 ↓
LLM
 ↓
структурированная схема
```

И это очень правильная архитектура.

Потому что:

- `.txt` даёт текст;
- `.md` даёт читаемую структуру;
- `.json` даёт координаты;
- `.html` помогает понять визуальную структуру;
- изображения позволяют проверить графику.

---

# 12. Здесь появилась очень сильная идея — Spatial Document Intelligence

Для ETM достаточно примерно:

```text
текст → сущность
```

Для сертификата:

```text
текст → поле
```

Для спецификации:

```text
таблица → строка
```

А для однолинейной схемы:

```text
элемент
 +
координата
 +
геометрическая связь
 +
электрическая связь
 +
текстовая маркировка
```

То есть:

# **Пространственно-структурированное распознавание документов.**

Это уже другой класс задач.

---

# 13. Почему твоя идея с JSON hierarchy правильная

Плоская таблица:

```text
Щит | Аппарат | Кабель | Нагрузка
```

полезна для Excel.

Но сама схема представляет дерево:

```text
ВРУ
 ├── Панель
 │    ├── Автомат
 │    │    └── Кабель
 │    │          └── Нагрузка
 │    └── Автомат
 └── Панель
```

Поэтому ты правильно сделал два представления.

### Flat

Для анализа и Excel.

### Hierarchy

Для понимания структуры.

---

# 14. И особенно хорошо, что ты добавил Mermaid topology

Это очень важный шаг.

Потому что теперь можно представить схему как граф:

```text
ВРУ
 ↓
QF1
 ↓
Кабель
 ↓
РЩУ
 ↓
QF2
 ↓
Нагрузка
```

Таким образом:

> однолинейная схема становится графом, а не картинкой.

И это фундаментально.

---

# 15. Следующий уровень — схема ↔ КЖ ↔ СО

Вот здесь появляется настоящий инженерный кейс.

У тебя три источника:

```text
Однолинейная схема
       ↕
Кабельный журнал
       ↕
Спецификация оборудования
```

Каждый источник содержит разную часть истины.

### Схема

показывает структуру подключения.

### КЖ

показывает:

- трассу;
- длину;
- кабель;
- сечение;
- начало;
- конец.

### СО

показывает:

- оборудование;
- марки;
- количества;
- изделия.

Получается:

```text
                  СХЕМА
                 /     \
                /       \
              КЖ ------- СО
```

И именно здесь возникает **cross-document validation**.

---

# 16. Проверка схемы

Ты уже зафиксировал инженерные проверки типа:

```text
Iном ≥ Iр
```

и

```text
Pрасч = Pном × Kc
```

Но система может проверять намного больше:

```text
автомат
↓
ток нагрузки
↓
кабель
↓
сечение
↓
допустимый ток
```

А затем:

```text
схема ↔ КЖ
```

проверяет, что кабель действительно тот же.

---

# 17. Заземление

Здесь уже появляется нормативная семантика.

Например:

```text
PE
N
PEN
шина
заземление
```

Нельзя просто искать одинаковые слова.

Нужно проверять:

```text
класс системы
+
тип проводника
+
топология
+
условие применения
```

То есть нормативные правила должны быть отдельным слоем:

```text
Extraction
↓
Normalization
↓
Engineering Rules
```

---

# 18. Различие ЭОМ и ЭО

Твой новый материал очень хорошо показывает важную архитектурную особенность.

Нельзя требовать одну универсальную таблицу от всех схем.

### ЭОМ

Может иметь:

```text
штамп
примечания
шины
ТТ
нагрузки
кабельные линии
```

### ЭО

может иметь только:

```text
группы освещения
автоматы
кабели
нагрузки
```

Поэтому правило должно быть:

> **schema output определяется типом документа.**

Не:

> «каждый документ обязан иметь одинаковые 6 разделов».

Это принципиально правильное решение.

---

# 19. Кейс №9 — автоматическая проверка РД

Теперь наши предыдущие кейсы по П ↔ РД становятся ещё более понятными.

Там уже есть:

```text
П
↕
РД
```

и:

```text
Схема
↕
КЖ
↕
СО
```

Но можно пойти дальше:

```text
П
│
├── АР
├── КР
├── ЭОМ
├── ОВ
├── ВК
├── СС
└── ТХ
         ↓
        РД
```

И сравнивать не документы целиком, а **структурированные параметры**.

---

# 20. Кейс №10 — сравнение версий

Это ещё один самостоятельный продуктовый кейс.

Твой принцип очень правильный:

> версия определяется по содержимому штампа, а не по имени PDF.

Например:

```text
PDF_старый.pdf
PDF_новый.pdf
```

смотрим:

```text
Обозначение
Изм.
Дата
```

и определяем:

```text
R0
R1
R2
...
```

После этого:

```text
R1 → R2
```

сравниваем:

- листы;
- таблицы;
- позиции;
- графику;
- количества;
- оборудование;
- кабели;
- примечания.

---

# 21. Здесь особенно полезна твоя Wiki-идея

Теперь она начинает выглядеть не как отдельный эксперимент, а как **слой накопления знаний**.

Можно сделать:

```text
raw/
 ↓
структурированные данные
 ↓
wiki/
 ↓
связи
 ↓
правила
 ↓
история
```

Например:

```text
Позиция
 ↓
Кабель ВВГнг(А)-LS 5x16
 ↓
СПЕЦИФИКАЦИЯ
 ↓
КЖ
 ↓
СХЕМА
 ↓
ПАСПОРТ
 ↓
СЕРТИФИКАТ
 ↓
РД
 ↓
ревизии R1/R2
```

Вот это уже настоящее **document graph**.

---

# 22. И тогда LLM Wiki становится очень полезной

Её лучше использовать не как замену базе данных, а как **knowledge layer**.

Например:

```text
entities/
    Кабель ВВГнг...
    ВРУ-1
    РЩУ-2
    Производитель X

documents/
    ЭОМ...
    КЖ...
    СО...

rules/
    Кабельные муфты
    PE
    Номинальные токи

projects/
    Объект 1
```

А основными структурированными данными пусть остаются:

```text
JSON
SQL
Excel
Parquet
```

Wiki — это объяснительный слой над ними.

---

# 23. Кейс №11 — библиотека инженерных правил

В твоих материалах это уже фактически существует.

Например:

```text
КЖ ↔ СО
КЖ ↔ муфты
КЖ ↔ трубы
КЖ ↔ металлорукав
схема ↔ КЖ
схема ↔ СО
П ↔ РД
версия ↔ версия
```

Каждый rule лучше оформлять одинаково:

```text
RULE-ID
Название
Область применения
Входные данные
Условие
Формула
Допустимый результат
Ошибка
Уточнение
Источник
```

Например:

```text
RULE-EOM-001

Проверка автомата

Input:
Iном
Iр

Condition:
Iном >= Iр

PASS:
Iном >= Iр

FAIL:
Iном < Iр
```

---

# 24. И здесь уже можно сделать единый движок

Вот к чему всё сходится:

```text
               DOCUMENT INTELLIGENCE
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      PDF            Excel          Схема
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                NORMALIZATION
                       ↓
                 DATA MODEL
                       ↓
              ENTITY RESOLUTION
                       ↓
                DOCUMENT GRAPH
                       ↓
                 RULE ENGINE
                       ↓
               VALIDATION ENGINE
                       ↓
                REPORT / MATRIX
```

---

# 25. Какие кейсы у тебя в итоге действительно сильные

Я бы сейчас оставил **10**, а не 30 отдельных мини-проектов.

| № | Кейс | Что демонстрирует |
|---:|---|---|
| 1 | **ETM Data Pipeline** | Web scraping, API, Playwright, ETL |
| 2 | **Унификация технических таблиц** | Pandas, Excel, data normalization |
| 3 | **База паспортов и сертификатов** | Document management |
| 4 | **Document Finder** | Fuzzy matching, regex, homoglyphs, deduplication |
| 5 | **Document Intelligence** | OCR, PDF parsing, LLM |
| 6 | **Автоматическая комплектность документов** | Спецификация → паспорт/СС → шахматка |
| 7 | **Оцифровка однолинейных схем** | Spatial parsing, topology, graph |
| 8 | **Кросс-сверка Схема ↔ КЖ ↔ СО** | Multi-document validation |
| 9 | **П ↔ РД и межраздельная сверка** | Engineering comparison |
| 10 | **Version Diff** | Сравнение ревизий и анализ изменений |

А сверху:

### **Engineering Knowledge Base**

которая хранит:

```text
документы
сущности
связи
правила
историю
результаты проверок
```

---

# 26. Самый сильный кейс для портфолио

На мой взгляд, это уже не ETM.

Не OCR.

Не Excel.

И не однолинейные схемы по отдельности.

Самый сильный кейс:

# **Интеллектуальная система сверки строительной документации**

Демонстрация:

```text
Спецификация
     ↓
позиции
     ↓
документы
     ↓
OCR / LLM
     ↓
структурированные данные
     ↓
схема / КЖ / СО / РД
     ↓
сопоставление
     ↓
инженерные правила
     ↓
ошибки / расхождения / комплектность
     ↓
готовый отчет
```

А ETM, Document Finder, OCR, шахматка и однолинейные схемы становятся **подсистемами одного решения**.

---

## Что особенно ценно в твоём материале по однолинейным схемам

Я бы зафиксировал четыре принципа как обязательные:

**1. PDF не равен тексту.**  
Для схем важны координаты, геометрия и связи.

**2. Не все документы одного типа имеют одинаковую структуру.**  
ЭОМ и ЭО должны иметь разные схемы извлечения.

**3. Нельзя доверять одному источнику.**  
Схему нужно сопоставлять с КЖ и СО.

**4. Извлечение и проверка — разные этапы.**  
Сначала получить данные максимально полно, затем применять инженерные правила.

Это, на мой взгляд, одна из самых важных архитектурных находок во всём твоём проекте.

И ещё важное: во всех дальнейших описаниях я буду **убирать упоминания стороннего названия**, которое присутствует в исходных материалах, и формулировать проект как твою собственную систему автоматизации и сверки документации.

---
