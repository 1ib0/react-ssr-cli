// Routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';
import User from '../pages/user';

export const routesConfig = [
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData, //服务端获取异步数据的函数
        key: 'home'
    },
    {
        path: '/user',
        component: User,
        exact: true,
        key: 'user'
    }
];

function RoutesComponent() {
    return routesConfig.map(route => <Route {...route} />);
}

export default RoutesComponent;
