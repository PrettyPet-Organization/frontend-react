import React from "react";
import { Form, Input, Button, Alert } from "antd";
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { RegisterData } from "../../../entities/User";

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
        onFieldsChange={onFieldsChange}
        disabled={loading}
        size='large'
      >
        <Form.Item
          name='email'
          label='Email'
          rules={[
            { required: true, message: "Введите email" },
            { type: "email", message: "Введите корректный email" },
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
            { min: 6, message: "Пароль должен содержать минимум 6 символов" },
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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают"));
              },
            }),
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
