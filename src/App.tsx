import React from 'react';
import {useRoutes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return useRoutes([
    {
      path: '/' ,
      element : <MainLayout />,
      children: [
        {path: '', element: <Home />}
      ]
    }
  ])
}

export default App;
