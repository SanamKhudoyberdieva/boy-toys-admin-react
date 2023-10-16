import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeEditBannerModal } from "../../store/actions/modalsAction.js";

function EditBannerModals() {
  const { editBannerModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    return dispatch(closeEditBannerModal());
  };

  return (
    <Modal className="modal fade" animation={false} show={editBannerModal}>
      <div>
        <div className="modal-content">
          <Modal.Header>
            <h5 className="modal-title">
              Edit banner
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
                />
                <label htmlFor="description-uz" className="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner tasnifi..."
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
                />
                <label htmlFor="description-ru" className="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  className="form-control mb-2"
                  placeholder="Описание..."
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
                />
                <label htmlFor="description-eu" className="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control mb-2"
                  placeholder="Banner description..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="group-image" className="mb-2 form-labe">
                  Banner Image
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

export default EditBannerModals;
