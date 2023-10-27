import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';

import  Home  from './pages/home';
import { Login } from './pages/login'
import  { CreateUser } from './pages/createuser';
import { NewForm } from './pages/newform'

const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path: '/createuser',
      element: <CreateUser/>
    },
    {
      path: '/newform',
      element: <NewForm/>
    }
  ]);

  export {router}