import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  isAuthorized: boolean;
}

const getInitialState = (): UserState => {
  // Проверяем сохраненного пользователя в localStorage
  const savedUser = localStorage.getItem('user');
  const user = savedUser ? JSON.parse(savedUser) : null;
  
  return {
    user,
    isAuthorized: !!user,
  };
};

const initialState: UserState = getInitialState();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthorized = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser(state) {
      state.user = null;
      state.isAuthorized = false;
      localStorage.removeItem('user');
    },
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthorized = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isAuthorized = false;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser, login, logout } = userSlice.actions;
export default userSlice.reducer; 