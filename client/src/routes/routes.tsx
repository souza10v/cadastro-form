import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute'

import Home from '../pages/home';
import { Login } from '../pages/login'
import { CreateUser } from '../pages/createuser';
import { NewForm } from '../pages/formularios/formAPT'
import { Dashboard } from '../pages/dashboard';

const routerController = createBrowserRouter([
  {
    path: '/',
    element: <Login />
    //element:<Home/>
  },
  {
    path: '/login',
    element: <PublicRoute><Login/></PublicRoute>
  },
  {
    path: '/createuser',
    element: <CreateUser />
  },

  {
    path: '/newform/formapt',
    element: <PrivateRoute> <NewForm/> </PrivateRoute>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute> <Dashboard/> </PrivateRoute>
  }
])

export { routerController };