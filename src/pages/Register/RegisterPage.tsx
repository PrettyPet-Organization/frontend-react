import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { useAuth } from "../../shared/lib/hooks/useAuth";
import { RegisterForm } from "../../shared/ui/RegisterForm";
import type { RegisterData } from "../../entities/User";
import UnauthorizedLayout from "../../widgets/UnauthorizedLayout/UnauthorizedLayout";

const { Title, Text } = Typography;

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { registerUserAsync, loading, error, clearError, isAuthorized } = useAuth();

  // Перенаправление если пользователь уже авторизован
  useEffect(() => {
    if (isAuthorized) {
      navigate("/authorized");
    }
  }, [isAuthorized, navigate]);

  // Очистка ошибок при размонтировании
  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const handleSubmit = async (values: RegisterData) => {
    try {
      await registerUserAsync(values);
      // Перенаправление произойдет автоматически через useEffect
    } catch (error) {
      // Ошибка уже обработана в useAuth
      console.error("Registration failed:", error);
    }
  };

  const handleFieldChange = () => {
    // Очищаем ошибки при изменении полей
    if (error) {
      clearError();
    }
  };

  return (
    <UnauthorizedLayout>
      <main className='flex-1 flex flex-col items-center justify-center px-6 py-8'>
        <div className='max-w-md w-full'>
          <div className='text-center mb-8'>
            <Title level={2} className='!text-theme-text !mb-2'>
              Регистрация
            </Title>
            <Text type='secondary' className='text-theme-text-secondary'>
              Создайте новый аккаунт для начала работы
            </Text>
          </div>

          <div className='bg-theme-surface rounded-lg p-6 border border-theme-border shadow-lg'>
            <RegisterForm
              onSubmit={handleSubmit}
              onFieldsChange={handleFieldChange}
              loading={loading}
              error={error}
              onErrorClose={clearError}
            />
          </div>

          <div className='text-center mt-6'>
            <Text type='secondary' className='text-theme-text-secondary'>
              Уже есть аккаунт?{" "}
              <Button
                type='link'
                onClick={() => navigate("/login")}
                className='!text-theme-primary hover:!opacity-80 !p-0'
              >
                Войти
              </Button>
            </Text>
          </div>
        </div>
      </main>
    </UnauthorizedLayout>
  );
};
