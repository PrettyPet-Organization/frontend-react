import MobileMenuToggle from "../../features/MobileMenuToggle/MobileMenuToggle.tsx";
import {ThemeToggle} from "../../features/ThemeToggle/ui/ThemeToggle.tsx";
import {useAuth} from "../../shared/lib/hooks/useAuth.ts";

const AuthorizedLayoutHeader = () => {

    const {user} = useAuth();

    return (
        <header className="flex justify-between items-center p-6">

            <div className="flex items-center space-x-4">
          <span className="text-theme-text-secondary">
            Привет, {user?.name}!
          </span>

            </div>
            <span className='sm:hidden'>
                <MobileMenuToggle/>
            </span>
            <span className='hidden sm:block'>
            <ThemeToggle/>
            </span>
        </header>
    );
};

export default AuthorizedLayoutHeader;