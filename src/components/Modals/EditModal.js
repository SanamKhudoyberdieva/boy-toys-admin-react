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
          <Modal.Header>
            <h5 className="modal-title">
              Product edit
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={hideModal}
            ></button>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div>
                <label className="mb-2 form-labe">
                  Nomi
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Gruppa nomi"
                />
                <label className="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Gruppa tasnifi..."
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <label className="mb-2 form-labe">
                  Название
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Group name"
                />
                <label className="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Group description..."
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <label className="mb-2 form-labe">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Group name"
                />
                <label className="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Group description..."
                ></textarea>
              </div>
              <hr className="my-4" />
              <div>
                <label className="mb-2 form-labe">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Group position"
                />
              </div>
              <div>
                <hr className="my-4" />

                <label className="mb-2 form-labe">
                  Product image
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
              className="btn btn-secondary"
              onClick={hideModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
