import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Dropdown } from "react-bootstrap";

const OrderDetail = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4">Order Details</h4>
      <h4 className="py-3 mb-4">
        <span className="text-muted fw-light">Order Details /</span> #32543
      </h4>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-between mb-3 mb-md-0">
              <select className="form-select w-50">
                <option selected className="badge bg-label-info">
                  Dispatched
                </option>
                <option className="badge bg-label-danger">One</option>
                <option className="badge bg-label-primary">Two</option>
              </select>
              <p className="text-body mb-0 ms-md-2">17.09.2023, 5:48</p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-md-end">
              <button
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#deleteOrder"
              >
                Delete Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title m-0">Order details</h5>
            </div>
            <div className="card-datatable table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <table
                  className="datatables-order-details table dataTable no-footer dtr-column"
                  id="DataTables_Table_0"
                >
                  <thead>
                    <tr>
                      <th
                        className="control sorting_disabled dtr-hidden"
                        rowspan="1"
                        colspan="1"
                        aria-label=""
                      ></th>
                      <th
                        className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                        rowspan="1"
                        colspan="1"
                        data-col="1"
                        aria-label=""
                      >
                        <input type="checkbox" className="form-check-input" />
                      </th>
                      <th
                        className="w-50 sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="products"
                      >
                        products
                      </th>
                      <th
                        className="w-25 sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="price"
                      >
                        price
                      </th>
                      <th
                        className="w-25 sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="qty"
                      >
                        qty
                      </th>
                      <th
                        className="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="total"
                      >
                        total
                      </th>

                      <th
                        className="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="total"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td className="control" tabindex="0"></td>
                      <td className="dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-start align-items-center text-nowrap">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/products/woodenchair.png"
                                alt="product-Wooden Chair"
                                className="rounded-2"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <h6 className="text-body mb-0">Wooden Chair</h6>
                            <small className="text-muted">
                              Material: Wooden
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>$841</span>
                      </td>
                      <td>
                        <span className="text-body">2</span>
                      </td>
                      <td>
                        <h6 className="mb-0">$1682</h6>
                      </td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle className="hide-arrow dropdown-toggle btn-succes">
                            <FontAwesomeIcon icon={faEllipsis} rotation={90} />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <button
                                className="btn"
                                tabindex="0"
                                data-bs-toggle="modal"
                                data-bs-target="#orderEditModal"
                              >
                                Edit
                              </button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <button className="dropdown-item delete-record">
                                Delete
                              </button>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="control" tabindex="0"></td>
                      <td className="dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-start align-items-center text-nowrap">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/products/oneplus.png"
                                alt="product-Oneplus 10"
                                className="rounded-2"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <h6 className="text-body mb-0">Oneplus 10</h6>
                            <small className="text-muted">Storage:128gb</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>$896</span>
                      </td>
                      <td>
                        <span className="text-body">3</span>
                      </td>
                      <td>
                        <h6 className="mb-0">$2688</h6>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="odd">
                      <td className="control" tabindex="0"></td>
                      <td className="dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-start align-items-center text-nowrap">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/products/nikejordan.png"
                                alt="product-Nike Jordan"
                                className="rounded-2"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <h6 className="text-body mb-0">Nike Jordan</h6>
                            <small className="text-muted">Size:8UK</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>$392</span>
                      </td>
                      <td>
                        <span className="text-body">1</span>
                      </td>
                      <td>
                        <h6 className="mb-0">$392</h6>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="control" tabindex="0"></td>
                      <td className="dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-start align-items-center text-nowrap">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/products/facecream.png"
                                alt="product-Face cream"
                                className="rounded-2"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <h6 className="text-body mb-0">Face cream</h6>
                            <small className="text-muted">Gender:Women</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>$813</span>
                      </td>
                      <td>
                        <span className="text-body">2</span>
                      </td>
                      <td>
                        <h6 className="mb-0">$1626</h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-end align-items-center m-3 mb-2 p-1">
                <div className="order-calculations">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="w-px-100">Subtotal:</span>
                    <span className="text-heading">$6398</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="w-px-100">Discount:</span>
                    <span className="text-heading mb-0">$22</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="w-px-100">Tax:</span>
                    <span className="text-heading">$30</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="w-px-100 mb-0">Total:</h6>
                    <h6 className="mb-0">$6450</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
