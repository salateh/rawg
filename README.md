# EN


# RAWG Game Explorer

SPA for searching and browsing games using the RAWG API.
Built with pure TypeScript, no frameworks.

## 🚀 Demo
[https://rawg-qdjh.vercel.app/] — VERCEL

## ✨ Features
- Game list with pagination
- Search with debounce (300ms)
- Search suggestions while typing
- Filtering by popularity, rating, date
- Detailed game page
- Hash-based routing

## 🛠 Technologies
- TypeScript (generics, utility types)
- Custom Store (Observer pattern)
- Type-safe custom DOM helper `el`
- Debounce for query optimization
- CSS Grid/Flexbox

## 📦 Installation & Setup
```bash
git clone https://github.com/salateh/rawg.git
cd rawg
# ... build instructions
```

## 🏗 Architecture
- `store.ts` — state management
- `api/abstractionApi.ts` — API layer
- `router.ts` — hash-based routing
- `components/` — components (cards, search form, pagination)

## 📝 Roadmap
- [ ] Add tests (Jest)
- [ ] Rewrite in React




#RU

# RAWG Game Explorer

SPA для поиска и просмотра игр с использованием RAWG API. 
Написано на чистом TypeScript без фреймворков.

## 🚀 Демо
[https://rawg-qdjh.vercel.app/] — VERCEL

## ✨ Функционал
- Список игр с пагинацией
- Поиск с debounce (300ms)
- Подсказки при вводе
- Фильтрация по популярности, рейтингу, дате
- Детальная страница игры
- Роутинг на хешах

## 🛠 Технологии
- TypeScript (дженерики, утилитарные типы)
- Собственный Store (паттерн Observer)
- Кастомный DOM-хелпер `el` с типобезопасностью
- Debounce для оптимизации запросов
- CSS Grid/Flexbox

## 📦 Установка и запуск
\`\`\`bash
git clone https://github.com/salateh/rawg.git
cd rawg
# ... инструкция по сборке
\`\`\`

## 🏗 Архитектура
- `store.ts` — управление состоянием
- `api/abstractionApi.ts` — слой работы с API
- `router.ts` — хеш-роутинг
- `components/` — компоненты (карточки, форма поиска, пагинация)

## 📝 Планы по улучшению
- [ ] Добавить тесты (Jest)
- [ ] Переписать на React

