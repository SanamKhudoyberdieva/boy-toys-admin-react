import React from "react";

const Navbar = () => {
  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <ul className="nav d-none d-md-flex wu-main-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              {" "}
              Mail{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {" "}
              SRS{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {" "}
              Timetable{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {" "}
              Attendace{" "}
            </a>
          </li>
        </ul>

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* User */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
              className="nav-link dropdown-toggle hide-arrow"
              href="javascript:void(0);"
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src="./img/profile.jpeg"
                  alt
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img
                          src="./img/profile.jpeg"
                          alt
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
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a className="dropdown-item" href="./profile.html">
                  <i className="bx bx-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a className="dropdown-item" href="auth-login-basic.html">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
          {/* User */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
