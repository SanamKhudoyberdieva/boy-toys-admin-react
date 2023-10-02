import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div class="mobile-nav d-lg-none">
      <ul class="nav">
        <li class="nav-item">
          <Link to={"/"} class="nav-link active">
            <i class="bx bx-home-circle"></i>
            <span class="menu-title">Products</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/client"} class="nav-link">
            <i class="bx bxs-file-doc"></i>
            <span class="menu-title">Clients</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/banner"} class="nav-link">
            <i class="bx bxs-file-plus"></i>
            <span class="menu-title">Banners</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/payment"} class="nav-link">
            <i class="bx bxs-file-doc"></i>
            <span class="menu-title">Payments</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/branches"} class="nav-link">
            <i class="bx bxs-file-doc"></i>
            <span class="menu-title">Branches</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
