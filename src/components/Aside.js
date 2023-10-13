import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faUsers, faMapLocationDot, faMoneyCheckDollar, faPanorama, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  const { pathname } = useLocation();
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
          to={"/"}
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <FontAwesomeIcon className="bx-sm align-middle" icon={faChevronLeft} />
        </Link>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className={`menu-item ${pathname == "/" && "active"}`}>
          <Link to={"/"} className="menu-link">
            <FontAwesomeIcon className="menu-icon" icon={faLayerGroup} />
            <div data-i18n="Analytics">Products</div>
          </Link>
        </li>
        <li className={`menu-item ${pathname.includes("/banner") && "active"}`}>
          <Link to={"/banner"} className="menu-link">
            <FontAwesomeIcon className="menu-icon" icon={faPanorama} />
            <div data-i18n="Analytics">Banners</div>
          </Link>
        </li>
        <li className={`menu-item ${pathname.includes("/client") && "active"}`}>
          <Link to={"/client"} className="menu-link">
            <FontAwesomeIcon className="menu-icon" icon={faUsers} />
            <div data-i18n="Analytics">Clients</div>
          </Link>
        </li>
        <li className={`menu-item ${pathname.includes("/branches") && "active"}`}>
          <Link to={"/branches"} className="menu-link">
            <FontAwesomeIcon className="menu-icon" icon={faMapLocationDot} />
            <div data-i18n="Analytics">Branches</div>
          </Link>
        </li>
        <li className={`menu-item ${pathname.includes("/payment") && "active"}`}>
          <Link to={"/payment"} className="menu-link">
            <FontAwesomeIcon className="menu-icon" icon={faMoneyCheckDollar} />
            <div data-i18n="Analytics">Payments</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
