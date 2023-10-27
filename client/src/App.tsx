import React from 'react';
import './App.css';
import  Home  from './pages/home';
import { Login } from './pages/login'
import  { CreateUser } from './pages/createuser';
import { NewForm } from './pages/newform';

import { createBrowserRouter } from 'react-router-dom';

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
])

export {router};
