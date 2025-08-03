import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { RegisterData } from "../../../entities/User";
import { ValidationUtils, MIN_PASSWORD_LENGTH } from "../../../entities/User";

interface RegisterFormProps {
  onSubmit: (values: RegisterData) => Promise<void>;
  loading?: boolean;
  error?: string | null;
  onErrorClose?: () => void;
  onFieldsChange?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  loading = false,
  error,
  onErrorClose,
  onFieldsChange,
}) => {
  const [form] = Form.useForm();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Отслеживаем изменения полей и обновляем состояние кнопки
  const handleFieldsChange = () => {
    // Проверяем, что все обязательные поля заполнены и нет ошибок валидации
    const fieldsError = form.getFieldsError();
    const hasErrors = fieldsError.some(({ errors }) => errors.length > 0);

    const fieldsValue = form.getFieldsValue();
    const hasRequiredFields =
      fieldsValue.email && fieldsValue.password && fieldsValue.confirmPassword;

    // Проверяем, что поля были затронуты пользователем
    const touchedFields = form.isFieldsTouched(["email", "password", "confirmPassword"], true);

    setIsSubmitDisabled(!hasRequiredFields || hasErrors || !touchedFields);

    // Вызываем переданный обработчик, если есть
    if (onFieldsChange) {
      onFieldsChange();
    }
  };

  return (
    <>
      {error && (
        <Alert
          message={error}
          type='error'
          showIcon
          closable
          onClose={onErrorClose}
          className='mb-4'
        />
      )}

      <Form
        form={form}
        layout='vertical'
        onFinish={onSubmit}
        onFieldsChange={handleFieldsChange}
        disabled={loading}
        size='large'
      >
        <Form.Item
          name='email'
          label='Email'
          rules={[
            { required: true, message: "Введите email" },
            {
              validator: (_, value) => {
                if (!value || ValidationUtils.isValidEmail(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Введите корректный email"));
              },
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder='Введите ваш email'
            autoComplete='email'
            type='email'
          />
        </Form.Item>

        <Form.Item
          name='password'
          label='Пароль'
          rules={[
            { required: true, message: "Введите пароль" },
            {
              validator: (_, value) => {
                if (!value || ValidationUtils.isValidPassword(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(`Пароль должен содержать минимум ${MIN_PASSWORD_LENGTH} символов`)
                );
              },
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder='Введите пароль'
            autoComplete='new-password'
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item
          name='confirmPassword'
          label='Подтверждение пароля'
          dependencies={["password"]}
          rules={[
            { required: true, message: "Подтвердите пароль" },
            {
              validator: (_, value) => {
                const password = form.getFieldValue("password");
                if (!value || ValidationUtils.arePasswordsMatching(password, value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают"));
              },
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder='Подтвердите пароль'
            autoComplete='new-password'
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            disabled={isSubmitDisabled || loading}
            size='large'
            className='w-full'
          >
            {loading ? "Регистрируем..." : "Зарегистрироваться"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
