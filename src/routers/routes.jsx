import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs';
import MyCart from '../Pages/MyCart';
import MainLayout from '../components/MainLayout';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'about-us',
                element: <AboutUs />,
            },
            {
                path: 'my-cart',
                element: <MyCart />,
            },
            {
                path: 'product-detail/:ProductSlug',
                element: <ProductDetail />,
            },
        ],
    },
]);

export default router;
