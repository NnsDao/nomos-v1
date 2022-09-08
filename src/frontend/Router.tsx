import NewProposal from '@view/dao/newProposal/Index';
import ProposalInfo from '@view/dao/proposalInfo/Index';
import Team from '@view/dao/team/Index';
import Profile from '@view/proflie/Index';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './components/Login';
import CreateDao from './view/dao/daoCreate/Index';
import DaoHome from './view/dao/daoHome/Index';
import Dao from './view/dao/Index';
import Index from './view/Index';
import Main from './view/main/MainIndex';
import Product from './view/product/Index';
import Story from './view/story/Story';

const routerConfig = [
  { path: '/', element: <Index /> },
  { path: '/login', element: <Login /> },
  { path: '/story', element: <Story /> },
  {
    path: '/daos',
    element: <Dao />,
    children: [
      {
        path: 'home',
        element: <DaoHome />,
      },
      { path: 'createdao', element: <CreateDao /> },
      { path: 'team', element: <Team /> },
      { path: 'proposalInfo', element: <ProposalInfo /> },
      { path: 'newProposal', element: <NewProposal /> },
    ],
  },
  { path: '/product', element: <Product /> },
  { path: '/main', element: <Main /> },
  { path: '/home', element: <Index /> },
  { path: '/profile', element: <Profile /> },
];

export function RouterConfig() {
  return useRoutes(routerConfig);
}
