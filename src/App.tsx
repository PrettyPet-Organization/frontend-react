import { Provider } from 'react-redux';
import { ConfigProvider, theme } from 'antd';
import { store } from './app/store';
import { useTheme } from './shared/lib/hooks/useTheme';
import './App.scss';
import {WelcomePage} from "./pages/Welcome/ui/WelcomePage.tsx";

const AppContent = () => {
  const { currentTheme } = useTheme();

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
   <WelcomePage/>
    </ConfigProvider>
  );
};

// Главный компонент с Provider
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
