import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CloseEditOrderModal } from "../../store/actions/modalsAction.js";

function EditOrderModal() {
  const { orderModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();
  const hideModal = () => {
    return dispatch(CloseEditOrderModal());
  };
  return (
    <Modal
      className="modal fade"
      tabIndex="-1"
      animation={false}
      show={orderModal}
    >
      <div>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="orderEditModalLabel">
              Order Products
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
                <label htmlFor="name" className="mb-2 form-labe">
                  Products
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Payment name"
                  name="name"
                />
              </div>

              <div>
                <label htmlFor="name" className="mb-2 form-labe">
                  {" "}
                  Quantity{" "}
                </label>
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Payment name"
                  name="Products quantity"
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
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EditOrderModal;
