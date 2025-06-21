import { HashRouter } from 'react-router-dom';
import type { FC } from 'react';

interface RouterProviderProps {
  children: React.ReactNode;
}

const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
  // Используем HashRouter для GitHub Pages
  return (
    <HashRouter>
      {children}
    </HashRouter>
  );
};

export default RouterProvider; 