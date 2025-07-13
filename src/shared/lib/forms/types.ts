import type { Rule } from 'antd/es/form';
import type { FormInstance } from 'antd/es/form';

// Базовые типы для полей формы
export type FieldType = 'text' | 'email' | 'password';

// Конфигурация поля формы
export interface FormFieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder: string;
  rules: Rule[];
  iconComponent?: React.ComponentType;
  dependencies?: string[];
  autoComplete?: string;
}

// Общие пропсы для форм
export interface BaseFormProps {
  loading?: boolean;
  error?: string | null;
  onErrorClose?: () => void;
  submitButtonText: string;
  loadingText: string;
  form?: FormInstance;
  onFieldsChange?: () => void;
}

// Типы для конфигурации форм
export interface FormConfig {
  fields: FormFieldConfig[];
  texts: {
    title: string;
    subtitle: string;
    submitButton: string;
    submitLoading: string;
  };
}

// Типы для валидации
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
}

export interface ValidationConfig {
  [fieldName: string]: ValidationRule[];
} 