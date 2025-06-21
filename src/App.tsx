import {Provider} from 'react-redux';
import {store} from './app/store';
import './App.scss';
import { AppRouter } from './app/AppRouter';
import ThemeProvider from "./shared/providers/ThemeProvider.tsx";
import RouterProvider from './shared/providers/RouterProvider';


// Главный компонент с Provider
function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <RouterProvider>
                    <AppRouter />
                </RouterProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
