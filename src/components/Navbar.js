import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
    >
      {/* <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <Link className="nav-item nav-link px-0 me-xl-4">
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </div> */}

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <ul className="nav d-md-flex wu-main-nav p-0">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Boy Toys website{" "}
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <Dropdown className="nav-item navbar-dropdown dropdown-user dropdown">
            <Dropdown.Toggle
              className="nav-link dropdown-toggle hide-arrow btn-dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src={require("../assets/img/profile.jpg")}
                  alt=""
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
              <li>
                <Dropdown.Item className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img
                          src={require("../assets/img/profile.jpg")}
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">
                        Zarina Ochilova
                      </span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </Dropdown.Item>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <Dropdown.Item className="dropdown-item">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faArrowRightFromBracket}
                  />
                  <span className="align-middle">Log Out</span>
                </Dropdown.Item>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
