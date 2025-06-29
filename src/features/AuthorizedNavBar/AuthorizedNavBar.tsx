import {useNavigate} from "react-router-dom";
import type {FC} from "react";

const AuthorizedNavBar: FC = () => {
    
    const navigate = useNavigate();
    
    const authorizedRoutList: {name: string, link: string}[] = [
        {
            name: 'Мои проекты',
            link: '/my-projects',
        },
        {
            name: 'Все проекты',
            link: '/catalog',
        },
        {
            name: 'Профиль',
            link: '/profile',
        },
        {
            name: 'Помощь',
            link: '/faq',
        }
    ]
    
    return (
        <div className="flex flex-col gap-3 align-baseline">
            {authorizedRoutList.map((item, i) => (
                <p className="cursor-pointer" key={i} onClick={() => { navigate(item.link) }}>
                    {item.name}
                </p>
            ))}
        </div>
    );
};

export default AuthorizedNavBar;