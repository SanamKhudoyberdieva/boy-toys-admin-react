import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeEditPaymentModal } from "../../store/actions/modalsAction.js";

function EditPaymentModals() {
  const { editPaymentModal } = useSelector((state) => state.modalsReducer);

  const dispatch = useDispatch();
  const hideModal = () => {
    return dispatch(closeEditPaymentModal());
  };
  return (
    <Modal className="modal fade" animation={false} show={editPaymentModal}>
      <div>
        <div className="modal-content">
          <Modal.Header>
            <h5 className="modal-title" id="productEditModalLabel">
              Edit Payment
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
                  {" "}
                  Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Payment name..."
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

export default EditPaymentModals;
