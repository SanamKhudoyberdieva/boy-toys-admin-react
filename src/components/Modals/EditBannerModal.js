import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closePaymentEditModal } from "../../store/actions/modalsAction.js";

function EditBannerModals() {
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
                />
                <label htmlFor="description-uz" className="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Banner Tasnifi ..."
                  name="descriptionUz"
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
                />
                <label htmlFor="description-ru" className="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Banner tasnifi..."
                  name="descriptionRu"
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
                />
                <label htmlFor="description-eu" className="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Banner description..."
                  name="descriptionEn"
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
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EditBannerModals;
