import {Provider} from 'react-redux';
import {store} from './app/store';
import './App.scss';
import {WelcomePage} from "./pages/Welcome/ui/WelcomePage.tsx";
import ThemeProvider from "./shared/providers/ThemeProvider.tsx";


// Главный компонент с Provider
function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <WelcomePage/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
