import React from 'react';
import {useRoutes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Post from "./pages/post/Post";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";

import './assets/index.scss';



function App() {
  return useRoutes([
    //MainRouter
    {
      path: '/' ,
      element : <MainLayout />,
      children: [
        {path: '', element: <Post />}
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {path: '', element: <Login />},
      ]
    }
  ])
}

export default App;
