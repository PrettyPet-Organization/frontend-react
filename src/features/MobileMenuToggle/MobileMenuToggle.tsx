import {useMobileMenu} from "../../shared/lib/hooks/useMobuleMenu.ts";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";

const MobileMenuToggle = () => {

    const {isOpened, toggleMobileMenu} = useMobileMenu();

    return (
        <button className={'sm:hidden'} onClick={() => toggleMobileMenu()}>
            {isOpened ? <CloseOutlined/> : <MenuOutlined/>}
        </button>
    );
};

export default MobileMenuToggle;