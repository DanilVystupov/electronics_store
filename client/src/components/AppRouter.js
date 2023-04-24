import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { authRoutes, publicRoutes } from './../routes';
import { Context } from './../index';
import { observer } from 'mobx-react-lite';


const AppRouter = observer(() => {

    const { user } = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            {publicRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    )
})

export default AppRouter
