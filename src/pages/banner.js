import {
  faChevronLeft,
  faChevronRight,
  faEye,
  faPen,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  showAddBannerModal,
  showBannerViewModal,
  showDeleteModal,
  showEditBannerModal,
} from "../store/actions/modalsAction.js";
import { useDispatch } from "react-redux";
import EditBannerModals from "../components/Modals/EditBannerModal.js";
import AddBannerModals from "../components/Modals/AddBannerModal.js";
import ViewBannerModal from "../components/Modals/ViewBannerModal.js";

const Banner = () => {
  const dispatch = useDispatch();

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold mb-4">Banners</h4>

        <div className="card">
          <div className="card-body">
            <div className="row mb-4 justify-content-between align-items-center">
              <div className="col-6 col-md-4 col-sm-6">
                <div className="d-flex align-items-center">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>

              <div className="col-1 col-md-4 col-sm-3 d-flex justify-content-end">
                <button
                  className="dt-button create-new btn btn-primary"
                  tabIndex="0"
                  type="button"
                  onClick={() => dispatch(showAddBannerModal())}
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
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Nimadir</td>
                    <td>Ko'proq</td>
                    <td className="d-flex align-items-center justify-content-center">
                      <img
                        src="https://darkor.bossblog.uz/images/1694521973034.png"
                        className="img"
                        width="100px"
                        alt=""
                      />
                    </td>
                    <td>
                      <div className="d-flex flex-column flex-md-row align-items-center justify-content-start gap-2">
                        <button
                          className="btn btn-primary btn-icon mr-0 mr-md-2"
                          onClick={() => dispatch(showEditBannerModal())}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>

                        <button
                          className="btn btn-info btn-icon mb-md-0 mr-0 mr-md-2"
                          onClick={() => dispatch(showBannerViewModal())}
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
              <span className="mb-2 mb-md-0">
                Showing 1 to 10 of 45 entries
              </span>
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-backdrop fade"></div>
      <EditBannerModals />
      <AddBannerModals />
      <ViewBannerModal />
    </div>
  );
};

export default Banner;
