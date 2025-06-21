import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../shared/lib/hooks/useAuth';
import { ThemeToggle } from '../../../features/ThemeToggle/ui/ThemeToggle';
import { ASSETS } from '../../../shared/config/assets';

export const AuthorizedPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-bg to-theme-surface flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <img 
            src={ASSETS.logo}
            alt="Pretty Pet Logo" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-semibold text-theme-text">Pretty Pet</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-theme-text-secondary">
            Привет, {user?.name}!
          </span>
          <ThemeToggle />
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-theme-surface border border-theme-border text-theme-text rounded hover:bg-theme-hover transition-colors"
          >
            Выйти
          </button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-theme-text mb-4">
          Авторизованная страница
        </h1>
        
        <p className="text-xl text-theme-text-secondary mb-8 max-w-2xl">
          Вы успешно вошли в систему! Эта страница доступна только авторизованным пользователям.
        </p>
        
        <div className="bg-theme-surface rounded-lg p-6 border border-theme-border">
          <h2 className="text-2xl font-semibold text-theme-text mb-4">
            Информация о пользователе
          </h2>
          <p className="text-theme-text-secondary">
            Имя: {user?.name}
          </p>
          <p className="text-theme-text-secondary">
            Email: {user?.email}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-theme-text-tertiary">
        <p>&copy; 2025 Pretty Pet. Все права защищены.</p>
      </footer>
    </div>
  );
}; 