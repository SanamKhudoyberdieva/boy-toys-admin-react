import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  showDeleteModal,
  showEditOrderModal,
} from "../store/actions/modalsAction.js";
import EditOrderModal from "../components/Modals/EditOrderModal.js";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  const dispatch = useDispatch();
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="py-3 mb-4">Order Details</h4>
      <h4 className="py-3 mb-4">
        <Link to={"/client"} className="text-muted fw-light">Order Details / </Link>
        <Link to={"/client/895280"} className="text-muted fw-light"> #32543 / </Link> #1234
      </h4>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-between mb-3 mb-md-0">
              <select className="form-select w-50">
                <option className="badge bg-label">pending</option>
                <option className="badge bg-label-black">success</option>
                <option className="badge bg-label">cancel</option>
                <option className="badge bg-label">delivered</option>
              </select>
              <p className="text-body mb-0 ms-md-2">17.09.2023</p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-md-end">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(showDeleteModal())}
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
                        className="w-50 sorting_disabled"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="products"
                      >
                        products
                      </th>
                      <th
                        className="w-25 sorting_disabled"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="price"
                      >
                        price
                      </th>
                      <th
                        className="w-25 sorting_disabled"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="qty"
                      >
                        qty
                      </th>
                      <th
                        className="sorting_disabled"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="total"
                      >
                        total
                      </th>

                      <th
                        className="sorting_disabled"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="total"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
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
                          <Dropdown.Toggle className="hide-arrow dropdown-toggle btn-dropdown">
                            <FontAwesomeIcon
                              icon={faEllipsis}
                              rotation={90}
                              color="#000"
                            />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item 
                            onClick={() => dispatch(showEditOrderModal())}>
                              <button
                                className="btn"
                              >
                                Edit
                              </button>
                            </Dropdown.Item>
                            <Dropdown.Item 
                            onClick={() => dispatch(showDeleteModal())}>
                              <button
                                className="dropdown-item delete-record"
                              >
                                Delete
                              </button>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-start  justify-content-md-end align-items-center m-3 mb-2 p-1">
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
      <EditOrderModal />
    </div>
  );
};

export default OrderDetail;
