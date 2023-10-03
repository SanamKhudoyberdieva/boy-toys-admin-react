import React from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import EditModal from "../components/Modals/EditModal";
import ViewModal from "../components/Modals/ViewModal";
import DeleteModal from "../components/Modals/DeleteModal";

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
              <DeleteModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
