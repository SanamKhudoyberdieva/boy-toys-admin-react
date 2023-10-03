import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Client = () => {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold mb-4">Clients</h4>

        <div className="card">
          <div className="card-body">
            <div className="row mb-4 justify-content-between align-items-center">
              <div className="col-6 col-md-4 col-sm-6">
                <div className="d-flex align-items-center">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                    id="local-search"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <i className="tf-icon bx bx-chevron-left"></i>
              <table
                className="datatables-customers table border-top dataTable no-footer dtr-column table-striped table-bordered"
                id="DataTables_Table_0"
                aria-describedby="DataTables_Table_0_info"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="sorting">Customer</th>
                    <th className="text-nowrap sorting">Customer Id</th>
                    <th className="sorting">Name</th>
                    <th className="sorting">phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="dt-checkboxes-cell">1</td>
                    <td className="sorting_1">
                      <div className="d-flex justify-content-start align-items-center customer-name">
                        <div className="avatar-wrapper">
                          <div className="avatar me-2">
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <Link to={"/about-client"}>
                            <span className="fw-medium">John Doe</span>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="fw-medium text-heading">#895280</span>
                    </td>
                    <td>
                      <div className="d-flex justify-content-start align-items-center customer-country">
                        <div>
                          <i className="fis fi fi-ua rounded-circle me-2 fs-3"></i>
                        </div>
                        <div>
                          <span>Kimdir</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>901234567</span>
                    </td>
                  </tr>

                  <tr className="">
                    <td className="dt-checkboxes-cell">2</td>
                    <td className="sorting_1">
                      <div className="d-flex justify-content-start align-items-center customer-name">
                        <div className="avatar-wrapper">
                          <div className="avatar me-2">
                            <span className="avatar-initial rounded-circle bg-label-primary">
                              YL
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <Link to={"/about-client"}>
                            <span className="fw-medium">Yan Luide</span>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="fw-medium text-heading">#586615</span>
                    </td>
                    <td>
                      <div className="d-flex justify-content-start align-items-center customer-country">
                        <div>
                          <i className="fis fi fi-pt rounded-circle me-2 fs-3"></i>
                        </div>
                        <div>
                          <span>Portugal</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>462</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 overflow-x-auto p-3">
              <span className="mb-2 mb-md-0">
                Showing 1 to 10 of 45 entries
              </span>
              <Nav>
                <ul className="pagination m-0 align-items-center">
                  <li className="page-item prev">
                    <button className="page-link">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">3</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">4</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">5</button>
                  </li>
                  <li className="page-item next">
                    <button className="page-link">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </li>
                </ul>
              </Nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content-backdrop fade"></div>
    </div>
  );
};

export default Client;
