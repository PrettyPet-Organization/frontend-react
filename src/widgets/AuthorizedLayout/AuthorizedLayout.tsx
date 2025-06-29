import React, {type FC} from 'react';
import {useAuth} from "../../shared/lib/hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {Button} from 'antd';
import {ASSETS} from "../../shared/config/assets.ts";
import {ThemeToggle} from '../../features/ThemeToggle/ui/ThemeToggle.tsx';
import AuthorizedNavBar from "../../features/AuthorizedNavBar/AuthorizedNavBar.tsx";

const AuthorizedLayout: FC<{ children: React.ReactNode }> = ({children}) => {

    const {user, logoutUser} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };

    return (

        <div className="flex h-screen w-full relative">
            <div className="bg-theme-surface h-screen w-xs p  flex-col items-center justify-between py-12 px-12 sm:flex hidden" >
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                    <img
                        src={ASSETS.logo}
                        alt="Pretty Pet Logo"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xl font-semibold text-theme-text">Pretty Pet</span>
                </div>
                <AuthorizedNavBar/>
                <div>
                    <Button
                        onClick={handleLogout}
                        type="default"
                    >
                        Выйти
                    </Button>
                </div>
            </div>
            <div className="flex-1 h-screen">
                <div className="min-h-screen bg-gradient-to-br from-theme-bg to-theme-surface flex flex-col">
                    <header className="flex justify-between items-center p-6">
                      
                        <div className="flex items-center space-x-4">
          <span className="text-theme-text-secondary">
            Привет, {user?.name}!
          </span>
                           
                        </div>
                    <ThemeToggle/>
                    </header>

                    {/* Основной контент */}
                    <main className="flex-1 flex">
                        {children}
                    </main>

                    <footer className="text-center py-6 text-theme-text-tertiary">
                        <p>&copy; 2025 Pretty Pet. Все права защищены.</p>
                    </footer>
                </div>
            </div>
           
        </div>
    );
};

export default AuthorizedLayout;