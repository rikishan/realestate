import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import RecommendedProperties from './Pages/properties';
import Error from './Pages/Error';
import PropertyDetails from './Pages/detailedProperties';
import AdminPage from './Pages/adminPage';
import RecommendedSite from './Pages/Site';
import RecommendedLands from './Pages/Lands';
import Sale from './Pages/Sale';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/properties',
    element: <RecommendedProperties />,
  },
  {
    path: '/site',
    element: <RecommendedSite />
  },
  {
    path: '/detailedPropties',
    element: <PropertyDetails />
  },
  {
    path: '/admin-page',
    element: <AdminPage />
  },
  {
    path: '/Lands',
    element: <RecommendedLands />
  },
  {
    path: '/sale',
    element: <Sale />
  }
]);

const Router = () => {
  return <RouterProvider router={appRouter} />;
};

export default Router;
