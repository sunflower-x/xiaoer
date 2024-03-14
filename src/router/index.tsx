/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
import SuspenseLazy from '@/components/SuspenseLazy';
import {Navigate, RouteObject} from 'react-router-dom';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='/' /> // 重定向
    },
    {
        path: '/calculator',
        element: SuspenseLazy(() => import('@/pages/Calculator'))
    },
    {
        path: '/timer',
        element: SuspenseLazy(() => import('@/pages/Timer'))
    },
    // 未匹配到页面
    {
        path: '*',
        element: SuspenseLazy(() => import('@/pages/NotFound'))
    }
];

export default routes;
