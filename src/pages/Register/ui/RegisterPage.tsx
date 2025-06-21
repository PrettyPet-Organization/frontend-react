import React from 'react';
import { useNavigate } from 'react-router-dom';
import UnauthorizedLayout from '../../../widgets/UnauthorizedLayout/UnauthorizedLayout';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <UnauthorizedLayout>
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-theme-text mb-6">
            Регистрация
          </h1>
          
          <div className="bg-theme-surface rounded-lg p-6 border border-theme-border">
            <p className="text-theme-text-secondary mb-4">
              Страница регистрации (заглушка)
            </p>
            
            <button 
              onClick={() => navigate('/login')}
              className="w-full px-6 py-3 bg-theme-primary text-white rounded-lg hover:opacity-80 transition-opacity font-medium"
            >
              Перейти к входу
            </button>
          </div>
          
          <p className="mt-4 text-theme-text-secondary">
            Уже есть аккаунт?{' '}
            <button 
              onClick={() => navigate('/login')}
              className="text-theme-primary hover:underline"
            >
              Войти
            </button>
          </p>
        </div>
      </main>
    </UnauthorizedLayout>
  );
}; 