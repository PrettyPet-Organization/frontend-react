import type { FormFieldConfig } from "../../../shared/lib/forms";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { AUTH_LABELS, AUTH_PLACEHOLDERS, AUTH_VALIDATION } from "../../Auth/model";
import { REGISTER_MESSAGES } from "./constants";

// Конфигурация полей для формы регистрации
export const REGISTER_FORM_CONFIG: FormFieldConfig[] = [
  {
    name: "email",
    label: AUTH_LABELS.EMAIL,
    type: "email",
    placeholder: AUTH_PLACEHOLDERS.EMAIL,
    iconComponent: MailOutlined,
    autoComplete: "email",
    rules: [
      { required: true, message: REGISTER_MESSAGES.EMAIL.REQUIRED },
      { type: "email", message: REGISTER_MESSAGES.EMAIL.INVALID },
    ],
  },
  {
    name: "password",
    label: AUTH_LABELS.PASSWORD,
    type: "password",
    placeholder: AUTH_PLACEHOLDERS.PASSWORD,
    iconComponent: LockOutlined,
    autoComplete: "new-password",
    rules: [
      { required: true, message: REGISTER_MESSAGES.PASSWORD.REQUIRED },
      { min: AUTH_VALIDATION.PASSWORD.MIN_LENGTH, message: REGISTER_MESSAGES.PASSWORD.MIN_LENGTH },
    ],
  },
  {
    name: "confirmPassword",
    label: AUTH_LABELS.CONFIRM_PASSWORD,
    type: "password",
    placeholder: AUTH_PLACEHOLDERS.CONFIRM_PASSWORD,
    iconComponent: LockOutlined,
    autoComplete: "new-password",
    dependencies: ["password"],
    rules: [
      { required: true, message: REGISTER_MESSAGES.CONFIRM_PASSWORD.REQUIRED },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(REGISTER_MESSAGES.CONFIRM_PASSWORD.MISMATCH));
        },
      }),
    ],
  },
];
