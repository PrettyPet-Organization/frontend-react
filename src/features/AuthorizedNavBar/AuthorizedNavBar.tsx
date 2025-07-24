import {useNavigate} from "react-router-dom";
import type {FC} from "react";
import {useMobileMenu} from "../../shared/lib/hooks/useMobuleMenu.ts";

const AuthorizedNavBar: FC = () => {
    
    const navigate = useNavigate();

    const {closeMobileMenu} = useMobileMenu()
    
    const authorizedRoutList: {name: string, link: string}[] = [
        {
            name: 'Главная',
            link: '/authorized',
        },
        {
            name: 'Все проекты',
            link: '/catalog',
        },
        {
            name: 'Профиль',
            link: '/profile',
        }
    ]

    const handleNavigate = (link: string) => {
        closeMobileMenu();
        navigate(link)
    }
    
    return (
        <div className="flex flex-1 flex-col gap-12 sm:gap-6 align-baseline w-full justify-center sm:justify-start">
            {authorizedRoutList.map((item, i) => (
                <p
                    className="cursor-pointer text-center sm:text-left text-xl sm:text-base border-b-2 border-transparent hover:border-[var(--color-primary)] transition"
                    key={i} onClick={() => { handleNavigate(item.link) }}
                >
                    {item.name}
                </p>
            ))}
        </div>
    );
};

export default AuthorizedNavBar;