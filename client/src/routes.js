import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from './utils/consts';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import DevicePage from './pages/DevicePage';
import Auth from './pages/Auth';
import Shop from './pages/Shop';


export const authRoutes = [
    { path: ADMIN_ROUTE, element: <Admin />, exact: true },
    { path: BASKET_ROUTE, element: <Basket />, exact: true },
]

export const publicRoutes = [
    { path: SHOP_ROUTE, element: <Shop />, exact: true },
    { path: LOGIN_ROUTE, element: <Auth />, exact: true },
    { path: REGISTRATION_ROUTE, element: <Auth />, exact: true },
    { path: DEVICE_ROUTE + '/:id', element: <DevicePage />, exact: true },
]