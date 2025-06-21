import { Routes, Route } from 'react-router-dom';
import {WelcomePage} from "../pages/Welcome";
import {LoginPage} from "../pages/Login";
import {RegisterPage} from "../pages/Register";
import ProtectedRoute from "../shared/ui/ProtectedRoute.tsx";
import { AuthorizedPage } from '../pages/Authorized/index.ts';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
        path="/authorized" 
        element={
          <ProtectedRoute>
            <AuthorizedPage />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<div>404 - Страница не найдена</div>} />
    </Routes>
  );
}; 