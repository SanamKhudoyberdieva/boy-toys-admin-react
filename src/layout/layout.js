import React from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import EditModal from '../components/Modals/EditModal';
import ViewModal from '../components/Modals/ViewModal';
import MobileNav from '../components/MobileNav';

const Layout = ({ children }) => {
  return (
    <>
    <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <Aside />
      <div class="layout-page">
      <Navbar />
      <div class="content-wrapper">
        {children}
        <EditModal />
        <ViewModal />
        <MobileNav />
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Layout;