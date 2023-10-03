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
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Aside />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
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
