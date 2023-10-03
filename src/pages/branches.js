import {
  faChevronLeft,
  faChevronRight,
  faPen,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import {
  showDeleteModal,
  showPaymentCreateModal,
  showPaymentEditModal,
} from "../store/actions/modalsAction.js";
import { useDispatch } from "react-redux";
import AddBranchModals from "../components/Modals/AddBranchModal.js";
import EditBranchModals from "../components/Modals/EditBranchModal.js";

const Branches = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold mb-4">Branches</h4>

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

                <div className="col-1 col-md-4 col-sm-3 d-flex justify-content-end">
                  <button
                    className="dt-button create-new btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#branchCreateModal"
                    type="button"
                    onClick={() => dispatch(showPaymentCreateModal())}
                  >
                    <span>
                      <FontAwesomeIcon icon={faPlus} className="me-sm-1" />
                      <span className="d-none d-sm-inline-block">Add</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="table mb-4 table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Toshkent</td>
                      <td>
                        <div className="row gap-2 d-flex flex-column flex-md-row  align-items-center">
                          <button
                            className="btn btn-primary btn-icon mr-0 mr-md-2"
                            data-bs-toggle="modal"
                            data-bs-target="#branchesEditModal"
                            onClick={() => dispatch(showPaymentEditModal())}
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </button>

                          <button
                            className="btn btn-danger btn-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteBranchesModal"
                            onClick={() => dispatch(showDeleteModal())}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
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
      <AddBranchModals />
      <EditBranchModals />
    </div>
  );
};

export default Branches;
