import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeBannerViewModal } from "../../store/actions/modalsAction.js";

function ViewBannerModal() {
  const { viewBannerModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    return dispatch(closeBannerViewModal());
  };

  return (
    <Modal className="modal fade" show={viewBannerModal}>
      <div>
        <div className="modal-content">
          <Modal.Header>
            <h5 className="modal-title">
              View banner
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => hideModal()}
            ></button>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div>
                <label htmlFor="name-uz" className="mb-2 form-labe">
                  {" "}
                  Nomi{" "}
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner nomi..."
                  disabled="true"
                />
                <label htmlFor="description-uz" className="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner tasnifi..."
                  disabled="true"
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <label htmlFor="name-ru" className="mb-2 form-labe">
                  Название
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Название..."
                  disabled="true"
                />
                <label htmlFor="description-ru" className="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  className="form-control mb-2"
                  placeholder="Описание..."
                  disabled="true"
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <label htmlFor="name-eu" className="mb-2 form-labe">
                  {" "}
                  Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner name..."
                  disabled="true"
                />
                <label htmlFor="description-eu" className="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner description..."
                  disabled="true"
                ></textarea>
              </div>
              <div>
                <label htmlFor="group-image" className="mb-2 form-labe">
                  Banner image
                </label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="Group image"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => hideModal()}
            >
              Close
            </button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
}

export default ViewBannerModal;
