import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo justify-content-start">
        <Link to={"/"} className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bolder text-uppercase text-gray">
            BOY TOYS
          </span>
        </Link>

        <Link
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </Link>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* Products */}
        <li className="menu-item">
          <a href="index.html" className="menu-link">
            <i className="menu-icon fa-solid fa-layer-group"></i>
            <div data-i18n="Analytics">Products</div>
          </a>
        </li>
        {/* Banners  */}
        <li className="menu-item">
          <a href="banner.html" className="menu-link">
            <i className="menu-icon fa-solid fa-panorama"></i>
            <div data-i18n="Analytics">Banners</div>
          </a>
        </li>
        {/* Clients */}
        <li className="menu-item">
          <a href="clients.html" className="menu-link">
            <i className="menu-icon fa-solid fa-users"></i>
            <div data-i18n="Analytics">Clients</div>
          </a>
        </li>
        {/* Branches */}
        <li className="menu-item">
          <a href="branches.html" className="menu-link">
            <i className="menu-icon fa-solid fa-map-location-dot"></i>
            <div data-i18n="Analytics">Branches</div>
          </a>
        </li>
        {/* Payments */}
        <li className="menu-item active">
          <a href="payments.html" className="menu-link">
            <i className="menu-icon fa-solid fa-money-check-dollar"></i>
            <div data-i18n="Analytics">Payments</div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
