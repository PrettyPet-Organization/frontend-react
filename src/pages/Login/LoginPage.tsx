import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Typography } from "antd";
import { useAuth } from "../../shared/lib/hooks/useAuth";
import { AuthForm } from "../../shared/ui/AuthForm";
import type { LoginData } from "../../entities/User/model/userSlice";
import UnauthorizedLayout from "../../widgets/UnauthorizedLayout/UnauthorizedLayout";
import { LOGIN_FORM_CONFIG } from "../../features/AuthByEmail/model/config";
import { LOGIN_TEXTS } from "../../features/AuthByEmail/model/constants";

const { Title, Text } = Typography;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { loginUserAsync, loading, error, clearError, isAuthorized } = useAuth();
  const [form] = Form.useForm();

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

  const handleSubmit = async (values: LoginData) => {
    try {
      await loginUserAsync(values);
      // Перенаправление произойдет автоматически через useEffect
    } catch (error) {
      // Ошибка уже обработана в useAuth
      console.error("Login failed:", error);
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
              {LOGIN_TEXTS.TITLE}
            </Title>
            <Text type='secondary' className='text-theme-text-secondary'>
              {LOGIN_TEXTS.SUBTITLE}
            </Text>
          </div>

          <div className='bg-theme-surface rounded-lg p-6 border border-theme-border shadow-lg'>
            <AuthForm<LoginData>
              fields={LOGIN_FORM_CONFIG}
              onSubmit={handleSubmit}
              onFieldsChange={handleFieldChange}
              loading={loading}
              error={error}
              onErrorClose={clearError}
              submitButtonText={LOGIN_TEXTS.SUBMIT_BUTTON}
              loadingText={LOGIN_TEXTS.SUBMIT_LOADING}
              form={form}
            />
          </div>

          <div className='text-center mt-6'>
            <Text type='secondary' className='text-theme-text-secondary'>
              {LOGIN_TEXTS.NO_ACCOUNT}{" "}
              <Button
                type='link'
                onClick={() => navigate("/register")}
                className='!text-theme-primary hover:!opacity-80 !p-0'
              >
                {LOGIN_TEXTS.REGISTER_LINK}
              </Button>
            </Text>
          </div>
        </div>
      </main>
    </UnauthorizedLayout>
  );
};
