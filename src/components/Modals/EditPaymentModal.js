import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closePaymentEditModal } from "../../store/actions/modalsAction.js";

function EditPaymentModals() {
  const { paymentEditModal } = useSelector((state) => state.modalsReducer);

  const dispatch = useDispatch();
  const hideModal = () => {
    return dispatch(closePaymentEditModal());
  };
  return (
    <Modal class="modal fade" animation={false} show={paymentEditModal}>
      <div>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productEditModalLabel">
              Payments Name
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => hideModal()}
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div>
                <label htmlFor="name" class="mb-2 form-labe">
                  {" "}
                  Name{" "}
                </label>
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Payment name"
                  name="name"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => hideModal()}
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EditPaymentModals;
