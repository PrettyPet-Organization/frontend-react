import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../entities/User/model/userSlice';
import themeReducer from '../../entities/Theme/model/themeSlice';
import mobileMenuReducer from '../../entities/MobileMenu/mobileMenuSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    mobileMenu: mobileMenuReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 