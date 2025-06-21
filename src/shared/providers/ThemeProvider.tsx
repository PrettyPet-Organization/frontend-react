import {useTheme} from "../lib/hooks/useTheme.ts";
import {ConfigProvider, theme} from "antd";
import type {FC} from "react";

const ThemeProvider: FC<{ children: React.ReactNode }> = ({children}) => {
    const {currentTheme} = useTheme();

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#ef823d',
                    colorText: currentTheme === 'dark' ? '#ffffff' : '#463033',
                    colorBgContainer: currentTheme === 'dark' ? '#1e1e1e' : '#ffffff',
                    colorBorder: currentTheme === 'dark' ? '#404040' : '#e9ecef',
                    borderRadius: 6,
                },
                algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider;