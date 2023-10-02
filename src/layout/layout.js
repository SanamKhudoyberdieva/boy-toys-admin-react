import React from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import EditModal from '../components/Modals/EditModal';
import ViewModal from '../components/Modals/ViewModal';
import MobileNav from '../components/MobileNav';

const Layout = ({ children }) => {
  return (
    <>
      <Aside />
      <Navbar />
      {children}
      <EditModal />
      <ViewModal />
      <MobileNav />
    </>
  )
}

export default Layout;