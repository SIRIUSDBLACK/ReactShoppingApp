import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
     <Header />
     <Outlet/>
     <Footer />
     <Toaster  toastOptions={{
    // Define default options
    className: '',
    duration: 1500,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    }}}
    />
    </>
  )
}
export default MainLayout;
