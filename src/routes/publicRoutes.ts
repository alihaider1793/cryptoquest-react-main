import { FC } from 'react';

import ROUTES from './routes';

import Home from '../pages/home/Home';
import MintNow from '../pages/mint-now/MintNow';
import Inventory from '../pages/inventory/Inventory';
import Blog from '../pages/blog/Blog';
import Post from '../pages/blog/Post';
import Terms from '../pages/terms/Terms';
import PageNotFound from '../pages/page-not-found/PageNotFound';

interface Route {
  path:
    | ROUTES.HOME_PAGE
    | ROUTES.MINT_NOW_PAGE
    | ROUTES.INVENTORY_PAGE
    | ROUTES.BLOG_PAGE
    | ROUTES.POST_PAGE
    | ROUTES.TERMS_PAGE
    | ROUTES.PAGE_NOT_FOUND;
  element: FC;
}

const publicRoutes: Route[] = [
  { path: ROUTES.HOME_PAGE, element: Home },
  { path: ROUTES.MINT_NOW_PAGE, element: MintNow },
  { path: ROUTES.INVENTORY_PAGE, element: Inventory },
  { path: ROUTES.BLOG_PAGE, element: Blog },
  { path: ROUTES.POST_PAGE, element: Post },
  { path: ROUTES.TERMS_PAGE, element: Terms },
  { path: ROUTES.PAGE_NOT_FOUND, element: PageNotFound },
];

export default publicRoutes;
