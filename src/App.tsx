import React from 'react';
import {useRoutes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";



function App() {
  return useRoutes([
    //MainRouter
    {
      path: '/' ,
      element : <MainLayout />,
      children: [
        {path: '', element: <Home />}
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
