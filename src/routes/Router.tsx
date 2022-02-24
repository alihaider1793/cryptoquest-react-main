import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EntireApp from '../pages/entire-app/EntireApp';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';

import publicRoutes from './publicRoutes';
import ROUTES from './routes';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={ROUTES.ENTIRE_APP} element={<EntireApp />}>
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
