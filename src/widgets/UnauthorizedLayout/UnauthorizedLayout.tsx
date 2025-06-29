import {ThemeToggle} from "../../features/ThemeToggle/ui/ThemeToggle.tsx";
import {ASSETS} from "../../shared/config/assets";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";

interface UnauthorizedLayoutProps {
    children: React.ReactNode;
}

const UnauthorizedLayout:FC<UnauthorizedLayoutProps> = ({children}) => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-theme-bg to-theme-surface flex flex-col">
            {/* Header с логотипом и переключателем темы */}
            <header className="flex justify-between items-center p-6">
                <div className="flex items-center space-x-2 cursor-pointer"
                     onClick={() => navigate('/')}>
                    <img
                        src={ASSETS.logo}
                        alt="Pretty Pet Logo"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-lg font-semibold text-theme-text">Pretty Pet</span>
                </div>
                <ThemeToggle />
            </header>

            {children}

            {/* Footer */}
            <footer className="text-center py-6 text-theme-text-tertiary">
                <p>&copy; 2025 Pretty Pet. Все права защищены.</p>
            </footer>
        </div>
    );
};

export default UnauthorizedLayout;