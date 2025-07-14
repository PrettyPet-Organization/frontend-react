import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

interface UserState {
  user: User | null;
  isAuthorized: boolean;
  loading: boolean;
  error: string | null;
}

const getInitialState = (): UserState => {
  // Проверяем сохраненного пользователя в localStorage
  const savedUser = localStorage.getItem('user');
  const user = savedUser ? JSON.parse(savedUser) : null;
  
  return {
    user,
    isAuthorized: !!user,
    loading: false,
    error: null,
  };
};

const initialState: UserState = getInitialState();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Состояния загрузки
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    
    // Обработка ошибок
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
    
    // Успешная регистрация
    registerSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthorized = true;
      state.loading = false;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    
    // Основные actions
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthorized = true;
      state.loading = false;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    
    logout(state) {
      state.user = null;
      state.isAuthorized = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('user');
    },
  },
});

export const { 
  setLoading, 
  setError, 
  registerSuccess, 
  login, 
  logout 
} = userSlice.actions;

export default userSlice.reducer; 