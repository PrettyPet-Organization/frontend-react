import React from 'react';
import { useNavigate } from 'react-router-dom';
import UnauthorizedLayout from '../../../widgets/UnauthorizedLayout/UnauthorizedLayout';
import {Button} from "antd";

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
            
            <Button
              onClick={() => navigate('/login')}
              type='primary'
              size='large'
              className={'w-full'}
            >
              Перейти к входу
            </Button>
          </div>
          
          <p className="mt-4 text-theme-text-secondary">
            Уже есть аккаунт?{' '}
            <Button
              onClick={() => navigate('/login')}
              type={'link'}
            >
              Войти
            </Button>
          </p>
        </div>
      </main>
    </UnauthorizedLayout>
  );
}; 