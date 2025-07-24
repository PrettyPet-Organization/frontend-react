import AuthorizedNavBar from "../../features/AuthorizedNavBar/AuthorizedNavBar.tsx";
import {useNavigate} from "react-router-dom";
import Logo from "../../shared/ui/Logo.tsx";
import LogoutButton from "../../features/LogoutButton/LogoutButton.tsx";

const AuthorizedLayoutDesktopMenu = () => {

    const navigate = useNavigate();


    return (
        <div
            className="bg-theme-surface h-screen w-xs p gap-24 flex-col items-center justify-between py-6 px-12 sm:flex hidden">
            <Logo onClick={() => navigate('/authorized')} />
            <AuthorizedNavBar/>
            <LogoutButton/>
        </div>
    );
};

export default AuthorizedLayoutDesktopMenu;