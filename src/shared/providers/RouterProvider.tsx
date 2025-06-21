import { BrowserRouter } from 'react-router-dom';
import type { FC } from 'react';

interface RouterProviderProps {
  children: React.ReactNode;
}

const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default RouterProvider; 