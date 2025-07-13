import React from "react";
import { Form, Input, Button, Alert } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import type { FormFieldConfig, BaseFormProps } from "../../lib/forms";

// Интерфейс для пропсов AuthForm
export interface AuthFormProps<T extends object = object> extends BaseFormProps {
  fields: FormFieldConfig[];
  onSubmit: (values: T) => void | Promise<void>;
}

export const AuthForm = <T extends object = object>({
  fields,
  onSubmit,
  onFieldsChange,
  loading = false,
  error,
  onErrorClose,
  submitButtonText,
  loadingText,
  form,
}: AuthFormProps<T>) => {
  const renderField = (field: FormFieldConfig) => {
    const Icon = field.iconComponent;
    const prefix = Icon ? <Icon /> : undefined;

    switch (field.type) {
      case "password":
        return (
          <Input.Password
            prefix={prefix}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          />
        );
      case "email":
        return (
          <Input
            prefix={prefix}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            type='email'
          />
        );
      case "text":
      default:
        return (
          <Input
            prefix={prefix}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
          />
        );
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
        onFieldsChange={onFieldsChange}
        disabled={loading}
        size='large'
      >
        {fields.map((field) => (
          <Form.Item
            key={field.name}
            name={field.name}
            label={field.label}
            rules={field.rules}
            dependencies={field.dependencies}
          >
            {renderField(field)}
          </Form.Item>
        ))}

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            size='large'
            className='w-full'
          >
            {loading ? loadingText : submitButtonText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
