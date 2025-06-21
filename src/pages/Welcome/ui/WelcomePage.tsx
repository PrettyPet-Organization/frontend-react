import React from 'react';
import UnauthorizedLayout from "../../../widgets/UnauthorizedLayout/UnauthorizedLayout.tsx";

export const WelcomePage: React.FC = () => {

  return (
     <UnauthorizedLayout>
        {/* Основной контент */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Логотип в кружке */}
          <div className="mb-8 animate-fade-in">
            <img
                src="/logo.jpg"
                alt="Pretty Pet Logo"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-theme-primary/20"
            />
          </div>

          {/* Приветствие */}
          <h1 className="text-5xl md:text-6xl font-bold text-theme-text mb-4 animate-fade-in">
            Добро пожаловать в
            <span className="text-theme-primary block">Pretty Pet</span>
          </h1>

          <p className="text-xl text-theme-text-secondary mb-8 max-w-2xl animate-fade-in">
            Платформа для поиска, создания и управления исполнителями для пэт-проектов.
            Находите единомышленников и воплощайте свои идеи в жизнь!
          </p>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button className="px-6 py-3 bg-theme-primary text-white rounded-lg hover:opacity-80 transition-opacity font-medium">
              Начать работу
            </button>
            <button className="px-6 py-3 bg-theme-surface border border-theme-border text-theme-text rounded-lg hover:bg-theme-hover transition-colors font-medium">
              Узнать больше
            </button>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl animate-fade-in">
            <div className="text-center">
              <div className="w-12 h-12 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-theme-primary text-xl"></span>
              </div>
              <h3 className="font-semibold text-theme-text mb-2">Создавайте проекты</h3>
              <p className="text-theme-text-secondary text-sm">
                Разрабатывайте и планируйте свои пэт-проекты
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-theme-primary text-xl"></span>
              </div>
              <h3 className="font-semibold text-theme-text mb-2">Находите команду</h3>
              <p className="text-theme-text-secondary text-sm">
                Объединяйтесь с талантливыми исполнителями
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-theme-primary text-xl"></span>
              </div>
              <h3 className="font-semibold text-theme-text mb-2">Реализуйте идеи</h3>
              <p className="text-theme-text-secondary text-sm">
                Воплощайте задумки в реальные проекты
              </p>
            </div>
          </div>
        </main>
     </UnauthorizedLayout>
  );
}; 