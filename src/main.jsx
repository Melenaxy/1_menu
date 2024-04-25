import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import DriftPage from './components/DriftPage.jsx';
import TimeAttackPage from './components/TimeAttackPage.jsx';
import ForzaPage from './components/ForzaPage.jsx';
import HomePage from './components/HomePage.jsx';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/drift",
        element: <DriftPage />,
      },
      {
        path: "/timeattack",
        element: <TimeAttackPage />,
      },
      {
        path: "/forza",
        element: <ForzaPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
