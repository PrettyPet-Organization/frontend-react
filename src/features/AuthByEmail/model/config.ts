import type { FormFieldConfig } from "../../../shared/lib/forms";
import { AUTH_LABELS, AUTH_PLACEHOLDERS } from "../../Auth/model";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { LOGIN_MESSAGES } from "./constants";

// Конфигурация полей для формы входа
export const LOGIN_FORM_CONFIG: FormFieldConfig[] = [
    {
      name: 'email',
      label: AUTH_LABELS.EMAIL,
      type: 'email',
      placeholder: AUTH_PLACEHOLDERS.EMAIL,
      iconComponent: MailOutlined,
      autoComplete: 'email',
      rules: [
        { required: true, message: LOGIN_MESSAGES.EMAIL.REQUIRED },
        { type: 'email', message: LOGIN_MESSAGES.EMAIL.INVALID },
      ],
    },
    {
      name: 'password',
      label: AUTH_LABELS.PASSWORD,
      type: 'password',
      placeholder: AUTH_PLACEHOLDERS.PASSWORD,
      iconComponent: LockOutlined,
      autoComplete: 'current-password',
      rules: [
        { required: true, message: LOGIN_MESSAGES.PASSWORD.REQUIRED },
      ],
    },
  ]; 