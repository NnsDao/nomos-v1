import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './components/Login';
import DaoCreate from './view/dao/daoCreate/Index';
import DaoHome from './view/dao/daoHome/Index';
import Dao from './view/dao/Index';
import Index from './view/Index';
import Main from './view/main/MainIndex';
import Product from './view/product/Index';
import Story from './view/story/Story';

const routerConfig = [
  { path: '/', element: <Index />, routes: [] },
  { path: '/login', element: <Login />, routes: [] },
  { path: '/story', element: <Story />, routes: [] },
  {
    path: '/daos/*',
    element: <Dao />,
    routes: [
      {
        path: '/daos/daoHome',
        element: <DaoHome />,
        routes: [],
      },
      {
        path: '/daos/daoCreate',
        element: <DaoCreate />,
        routes: [],
      },
    ],
  },
  { path: '/product', element: <Product />, routes: [] },
  { path: '/main', element: <Main />, routes: [] },
  { path: '/home', element: <Index />, routes: [] },
];

export function RouterConfig() {
  return useRoutes(routerConfig);
}
