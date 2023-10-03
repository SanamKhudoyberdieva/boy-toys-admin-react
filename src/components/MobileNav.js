import { faLayerGroup, faMapLocationDot, faMoneyCheckDollar, faPanorama, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNav = () => {
  return (
    <div class="mobile-nav d-lg-none">
      <ul class="nav">
        <li class="nav-item">
          <Link to={"/"} class="nav-link active">
            <FontAwesomeIcon className="menu-icon" icon={faLayerGroup} />
            <span class="menu-title">Products</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/client"} class="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faPanorama} />
            <span class="menu-title">Clients</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/banner"} class="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faUsers} />
            <span class="menu-title">Banners</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/payment"} class="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faMapLocationDot} />
            <span class="menu-title">Payments</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/branches"} class="nav-link">
            <FontAwesomeIcon className="menu-icon" icon={faMoneyCheckDollar} />
            <span class="menu-title">Branches</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
