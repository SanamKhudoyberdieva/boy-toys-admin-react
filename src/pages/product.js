import React from "react";
import {
  faChevronLeft,
  faChevronRight,
  faEye,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { showDeleteModal, showEditModal, showViewModal } from "../store/actions/modalsAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-4">Products</h4>

      <div className="card">
        <div className="card-body">
          <div className="row justify-content-end mb-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <label for="local-search" className="me-2">
                  Search:
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                  id="local-search"
                />
              </div>
            </div>
          </div>
          <div className="overflow-scroll">
            <table className="table mb-4 table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <div className="row gap-2 d-flex flex-column flex-md-row  align-items-center">
                      <button
                        className="btn btn-primary btn-icon mb-2 mb-md-0 mr-0 mr-md-2"
                        onClick={() => dispatch(showEditModal())}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      <button
                        className="btn btn-info btn-icon mb-2 mb-md-0 mr-0 mr-md-2"
                        onClick={() => dispatch(showViewModal())}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="btn btn-danger btn-icon"
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
            <span className="mb-2 mb-md-0">Showing 1 to 10 of 456 entries</span>
            <nav aria-label="Page navigation">
              <ul className="pagination m-0 align-items-center">
                <li className="page-item prev">
                  <button className="page-link">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item active">
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
