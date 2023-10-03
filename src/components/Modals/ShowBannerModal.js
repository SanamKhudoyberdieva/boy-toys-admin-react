import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeBannerViewModal } from "../../store/actions/modalsAction.js";

function ShowBannerModal() {
  const { showBannerModal } = useSelector((state) => state.modalsReducer);

  const dispatch = useDispatch();
  const hideModal = () => {
    return dispatch(closeBannerViewModal());
  };
  return (
    <Modal className="modal fade" show={showBannerModal}>
      <div>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productEditModalLabel">
              Slider
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => hideModal()}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div>
                <label htmlFor="name-uz" className="mb-2 form-labe">
                  {" "}
                  Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner nomi ..."
                  name="nameUz"
                  disabled="true"
                />
                <label htmlFor="description-uz" className="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Banner Tasnifi ..."
                  name="descriptionUz"
                  disabled="true"
                ></textarea>
              </div>

              <div>
                <label htmlFor="group-image" className="mb-2 form-labe">
                  Banner Image
                </label>
                <input
                  type="file"
                  id="group-image"
                  name="fileImage"
                  className="form-control"
                  placeholder="Group image"
                  disabled="true"
                />
              </div>
              <hr className="my-4" />
              <div>
                <label htmlFor="name-ru" className="mb-2 form-labe">
                  Название
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner nomi"
                  name="nameRu"
                  disabled="true"
                />
                <label htmlFor="description-ru" className="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Banner tasnifi..."
                  name="descriptionRu"
                  disabled="true"
                ></textarea>
              </div>
              <div>
                <label htmlFor="group-image" className="mb-2 form-labe">
                  Banner Image
                </label>
                <input
                  type="file"
                  id="group-image"
                  name="fileImage"
                  className="form-control"
                  placeholder="Group image"
                  disabled="true"
                />
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
                  placeholder="Banner name"
                  name="nameEn"
                  disabled="true"
                />
                <label htmlFor="description-eu" className="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Banner description..."
                  name="descriptionEn"
                  disabled="true"
                ></textarea>
              </div>

              <div>
                <hr className="my-4" />

                <label htmlFor="group-image" className="mb-2 form-labe">
                  Banner Image
                </label>
                <input
                  type="file"
                  id="group-image"
                  name="fileImage"
                  className="form-control"
                  placeholder="Group image"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => hideModal()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ShowBannerModal;
