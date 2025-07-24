import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "../shared/ui/ProtectedRoute.tsx";
import {WelcomePage} from "../pages/Welcome/WelcomePage.tsx";
import {LoginPage} from "../pages/Login/LoginPage.tsx";
import {RegisterPage} from "../pages/Register/RegisterPage.tsx";
import {AuthorizedPage} from "../pages/Authorized/AuthorizedPage.tsx";
import AuthorizedLayout from "../widgets/AuthorizedLayout/AuthorizedLayout.tsx";
import {AuthorizedRoutes} from "./routes/AuthorizedRoutes.ts";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            {AuthorizedRoutes.map(({path, element: Component}) => {
                return <Route
                    key={path}
                    path={path}
                    element={
                        <ProtectedRoute>
                            <AuthorizedLayout>
                               <Component/>
                            </AuthorizedLayout>
                        </ProtectedRoute>
                    }
                />
            })}
            <Route path="*" element={<div>404 - Страница не найдена</div>}/>
        </Routes>
    );
}; 