import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../app/store";
import {close, open,  toggle} from "../../../entities/MobileMenu/mobileMenuSlice.ts";


export const useMobileMenu = () => {
    const dispatch = useDispatch();
    const { isOpened } = useSelector((state: RootState) => state.mobileMenu);


        const openMobileMenu = () => {
            dispatch(open());
        }

        const closeMobileMenu = () => {
            dispatch(close());
        }

        const toggleMobileMenu = () => {
            dispatch(toggle());
        }

        return {
            isOpened,
            openMobileMenu,
            closeMobileMenu,
            toggleMobileMenu
        }
    }