import {
  faLayerGroup,
  faMapLocationDot,
  faMoneyCheckDollar,
  faPanorama,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNav = () => {
  return (
    <div className="mobile-nav d-lg-none">
      <ul className="nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active">
            <FontAwesomeIcon className="menu-icon" icon={faLayerGroup} />
            <span className="menu-title">Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/client"} className="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faPanorama} />
            <span className="menu-title">Clients</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/banner"} className="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faUsers} />
            <span className="menu-title">Banners</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/payment"} className="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faMapLocationDot} />
            <span className="menu-title">Payments</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/branches"} className="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faMoneyCheckDollar} />
            <span className="menu-title">Branches</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
