import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closePaymentEditModal } from "../../store/actions/modalsAction.js";

function EditBranchModals() {
  const { paymentEditModal } = useSelector((state) => state.modalsReducer);

  const dispatch = useDispatch();
  const hideModal = () => {
    return dispatch(closePaymentEditModal());
  };
  return (
    <Modal className="modal fade" animation={false} show={paymentEditModal}>
      <div>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productEditModalLabel">
              Branches Name
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
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Branch name"
                  name="name"
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

export default EditBranchModals;
