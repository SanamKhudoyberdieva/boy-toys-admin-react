import {
  faChevronLeft,
  faChevronRight,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutClient = () => {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold mb-4">Clients About</h4>

        <div className="row flex-column-reverse flex-md-row">
          <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            <div className="card mb-4">
              <div className="card-body">
                <div className="customer-avatar-section">
                  <div className="d-flex align-items-center flex-column">
                    <img
                      className="img-fluid rounded my-3"
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png"
                      height="110"
                      width="110"
                      alt="User avatar"
                    />
                    <div className="customer-info text-center">
                      <h4 className="mb-1">John Doe</h4>
                      <small>Customer ID #634759</small>
                    </div>
                  </div>
                </div>

                <div className="info-container">
                  <small className="d-block pt-4 border-top fw-normal text-uppercase text-muted my-3">
                    DETAILS
                  </small>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <span className="fw-medium me-2">Fullname:</span>
                      <span>John Doe</span>
                    </li>

                    <li className="mb-3">
                      <span className="fw-medium me-2">Phone verifired:</span>
                      <span className="badge bg-label-success">Active</span>
                    </li>
                    <li className="mb-3">
                      <span className="fw-medium me-2">Phone:</span>
                      <span>+998901234567</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1 d-flex flex-column justify-content-between">
            <div className="card mb-4 justify-content-beetwen">
              <div className="table-responsive mb-3">
                <div className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="card-header d-flex justify-content-between flex-wrap py-3 py-sm-2 align-items-center">
                    <div className="head-label text-center me-4 ms-1">
                      <h5 className="card-title mb-md-0 mb-sm-3 text-nowrap">
                        Orders placed
                      </h5>
                    </div>
                    <div
                      id="DataTables_Table_0_filter"
                      className="dataTables_filter"
                    >
                      <label>
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search order"
                        />
                      </label>
                    </div>
                  </div>
                  <table className="table datatables-customer-order border-top dataTable no-footer dtr-column">
                    <thead>
                      <tr>
                        <th className="control dtr-hidden" aria-label=""></th>
                        <th className="">#</th>
                        <th className="">Order</th>
                        <th className="">Date</th>
                        <th className="">Status</th>
                        <th>Spent</th>
                        <th className="text-md-center" aria-label="Actions">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td className="control dtr-hidden"></td>
                        <td className="">1</td>
                        <td className="sorting_1">
                          <Link to={"/order-detail"} className="fw-medium">
                            <span>#9957</span>
                          </Link>
                        </td>
                        <td className="">
                          <span className="text-nowrap">Nov 29, 2022</span>
                        </td>
                        <td className="">
                          <span
                            className="badge bg-label-primary"
                            text-capitalized=""
                          >
                            Out for delivery
                          </span>
                        </td>
                        <td className="">
                          <span>$59.28</span>
                        </td>
                        <td className="">
                          <div className="text-xxl-center">
                            <button
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                              data-bs-toggle="dropdown"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsis}
                                rotation={90}
                              />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end m-0">
                              <button className="dropdown-item">Edit</button>

                              <button className="dropdown-item delete-record">
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="control dtr-hidden"></td>
                        <td className="">2</td>
                        <td className="sorting_1">
                          <Link to={"/order-detail"} className="fw-medium">
                            <span>#9941</span>
                          </Link>
                        </td>
                        <td className="">
                          <span className="text-nowrap">Jun 20, 2022</span>
                        </td>
                        <td className="">
                          <span
                            className="badge bg-label-info"
                            text-capitalized=""
                          >
                            Ready to Pickup
                          </span>
                        </td>
                        <td className="">
                          <span>$333.83</span>
                        </td>
                        <td className="">
                          <div className="text-xxl-center">
                            <button
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                              data-bs-toggle="dropdown"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsis}
                                rotation={90}
                              />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end m-0">
                              <button className="dropdown-item">Edit</button>

                              <button className="dropdown-item delete-record">
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="control dtr-hidden"></td>
                        <td className="dt-checkboxes-cell">3</td>
                        <td className="sorting_1">
                          <Link to={"/order-detail"} className="fw-medium">
                            <span>#9885</span>
                          </Link>
                        </td>
                        <td className="">
                          <span className="text-nowrap">Sep 11, 2022</span>
                        </td>
                        <td className="">
                          <span
                            className="badge bg-label-success"
                            text-capitalized=""
                          >
                            Delivered
                          </span>
                        </td>
                        <td className="">
                          <span>$62.71</span>
                        </td>
                        <td className="">
                          <div className="text-xxl-center">
                            <button
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                              data-bs-toggle="dropdown"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsis}
                                rotation={90}
                              />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end m-0">
                              <button className="dropdown-item">Edit</button>

                              <button className="dropdown-item delete-record">
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="control dtr-hidden"></td>
                        <td className="dt-checkboxes-cell">4</td>
                        <td className="sorting_1">
                          <Link to={"/order-detail"} className="fw-medium">
                            <span>#9879</span>
                          </Link>
                        </td>
                        <td className="">
                          <span className="text-nowrap">Dec 23, 2022</span>
                        </td>
                        <td className="">
                          <span
                            className="badge bg-label-warning"
                            text-capitalized=""
                          >
                            Dispatched
                          </span>
                        </td>
                        <td className="">
                          <span>$100.18</span>
                        </td>
                        <td className="">
                          <div className="text-xxl-center">
                            <button
                              className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                              data-bs-toggle="dropdown"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsis}
                                rotation={90}
                              />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end m-0">
                              <button className="dropdown-item">Edit</button>

                              <button className="dropdown-item delete-record">
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
      </div>

      <div className="content-backdrop fade"></div>
    </div>
  );
};

export default AboutClient;
