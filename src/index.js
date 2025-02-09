import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from'./pages/Home';
import Html from'./pages/html';
import Css from'./pages/css';
import JS from'./pages/js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>  Home error</h1>,
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h1>  Html error</h1>,
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h1>  Css error</h1>,
  },
  {
    path: "/js",
    element: <JS />,
    errorElement: <h1>  JS error</h1>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

 
