import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from "antd";
import UnauthorizedLayout from "../../widgets/UnauthorizedLayout/UnauthorizedLayout.tsx";
import {useAuth} from "../../shared/lib/hooks/useAuth.ts";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleLogin = () => {
    // Имитация входа (в реальном приложении здесь будет API запрос)
    const mockUser = {
      id: '1',
      name: 'Тестовый Пользователь',
      email: 'test@example.com',
    };
    
    loginUser(mockUser);
    navigate('/authorized');
  };

  return (
    <UnauthorizedLayout>
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-theme-text mb-6">
            Вход в систему
          </h1>
          
          <div className="bg-theme-surface rounded-lg p-6 border border-theme-border">
            <p className="text-theme-text-secondary mb-4">
              Для демонстрации просто нажмите кнопку входа
            </p>
            
            <Button
              onClick={handleLogin}
              type='primary'
              size='large'
              className={'w-full'}
            >
              Войти
            </Button>
          </div>
          
          <p className="mt-4 text-theme-text-secondary">
            Нет аккаунта?{' '}
            <Button
              onClick={() => navigate('/register')}
              type='link'
            >
              Зарегистрироваться
            </Button>
          </p>
        </div>
      </main>
    </UnauthorizedLayout>
  );
}; 