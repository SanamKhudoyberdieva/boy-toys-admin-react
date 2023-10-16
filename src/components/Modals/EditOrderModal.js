import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CloseEditOrderModal } from "../../store/actions/modalsAction.js";

function EditOrderModal() {
  const { editOrderModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    return dispatch(CloseEditOrderModal());
  };

  return (
    <Modal
      className="modal fade"
      animation={false}
      show={editOrderModal}
    >
      <div>
        <div className="modal-content">
          <Modal.Header>
            <h5 className="modal-title">
              Order Products
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
                <label htmlFor="name" className="mb-2 form-labe">
                  Products
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Product name..."
                />
              </div>

              <div>
                <label htmlFor="name" className="mb-2 form-labe">
                  {" "}
                  Quantity{" "}
                </label>
                <input
                  className="form-control mb-2"
                  placeholder="Quantity..."
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => hideModal()}
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
}

export default EditOrderModal;
