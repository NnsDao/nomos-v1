import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './components/Login';
import Dao from './view/dao/Index';
import Index from './view/Index';
import Main from './view/main/MainIndex';
import Product from './view/product/Index';
import Story from './view/story/Story';

const routerConfig = [
  { path: '/', element: <Index /> },
  { path: 'login', element: <Login /> },
  { path: 'story', element: <Story /> },
  { path: 'daos', element: <Dao /> },
  { path: 'product', element: <Product /> },
  { path: 'main', element: <Main /> },
  { path: 'home', element: <Index /> },
];

export function RouterConfig() {
  return useRoutes(routerConfig);
}
