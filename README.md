# PrettyPet — Frontend

PrettyPet — это веб-приложение для поиска, создания и управления исполнителями для пэт-проектов. Данный репозиторий содержит только фронтенд-часть проекта.

## О проекте
PrettyPet помогает пользователям:
- Создавать свои пэт-проекты
- Находить исполнителей и единомышленников
- Управлять командами и задачами

## Технологический стек
- **React** + **TypeScript**
- **Vite** (сборка и dev-server)
- **Redux Toolkit** (глобальное состояние)
- **Ant Design** (UI-компоненты)
- **Tailwind CSS** (утилитарные стили)
- Архитектура: **FSD (Feature-Sliced Design)**

## Требования
- **Node.js** >= 18.x
- **npm** >= 9.x

## Установка и запуск

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/your-username/pretty-pet-frontend.git
   cd pretty-pet-frontend/frontend-react
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки:**
   ```bash
   npm start
   ```
   После запуска приложение будет доступно по адресу, который покажет Vite (обычно http://localhost:5173).

4. **Сборка для продакшена:**
   ```bash
   npm run build
   ```

5. **Предпросмотр production-сборки:**
   ```bash
   npm run preview
   ```

## Структура проекта
Проект построен по принципам FSD (Feature-Sliced Design). Подробнее см. [src/README_FSD.md](src/README_FSD.md).

## Контакты
Если есть вопросы или предложения — создавайте issue или pull request!
