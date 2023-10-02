import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../store/actions/modalsAction";

const EditModal = () => {
  const { editModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <Modal
      show={editModal}
      onHide={hideModal}
      animation={false}
      className="modal fade"
    >
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productEditModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={hideModal}
            ></button>
          </div>
          <Modal.Body>
            <form>
              <div>
                <label htmlFor="name-uz" className="mb-2 form-labe">
                  Nomi
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Gruppa nomi"
                  name="nameUz"
                />
                <label htmlFor="description-uz" className="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Gruppa tasnifi..."
                  name="descriptionUz"
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
                  placeholder="Group name"
                  name="nameRu"
                />
                <label htmlFor="description-ru" className="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Group description..."
                  name="descriptionRu"
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <label htmlFor="name-eu" className="mb-2 form-labe">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Group name"
                  name="nameEn"
                />
                <label htmlFor="description-eu" className="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Group description..."
                  name="descriptionEn"
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <label htmlFor="group-position" className="mb-2 form-labe">
                  Price
                </label>
                <input
                  type="number"
                  id="group-position"
                  className="form-control"
                  placeholder="Group position"
                  name="position"
                />
              </div>
              <div>
                <hr className="my-4" />

                <label htmlFor="group-image" className="mb-2 form-labe">
                  Product image
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
          </Modal.Body>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={hideModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
