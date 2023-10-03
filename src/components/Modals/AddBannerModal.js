import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closePaymentCreateModal } from "../../store/actions/modalsAction.js";

function AddBannerModals() {
  const { paymetnCreateModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();
  const hideModal = () => {
    return dispatch(closePaymentCreateModal());
  };
  return (
    <Modal className="modal fade" animation={false} show={paymetnCreateModal}>
      <div>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productEditModalLabel">
              Slider
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
                <label htmlFor="name-uz" class="mb-2 form-labe">
                  {" "}
                  Name{" "}
                </label>
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Banner nomi ..."
                  name="nameUz"
                />
                <label htmlFor="description-uz" class="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Banner Tasnifi ..."
                  name="descriptionUz"
                ></textarea>
              </div>

              <div>
                <label htmlFor="group-image" class="mb-2 form-labe">
                  Banner Image
                </label>
                <input
                  type="file"
                  id="group-image"
                  name="fileImage"
                  class="form-control"
                  placeholder="Group image"
                />
              </div>
              <hr class="my-4" />
              <div>
                <label htmlFor="name-ru" class="mb-2 form-labe">
                  Название
                </label>
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Banner nomi"
                  name="nameRu"
                />
                <label htmlFor="description-ru" class="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Banner tasnifi..."
                  name="descriptionRu"
                ></textarea>
              </div>
              <div>
                <label htmlFor="group-image" class="mb-2 form-labe">
                  Banner Image
                </label>
                <input
                  type="file"
                  id="group-image"
                  name="fileImage"
                  class="form-control"
                  placeholder="Group image"
                />
              </div>
              <hr class="my-4" />
              <div>
                <label htmlFor="name-eu" class="mb-2 form-labe">
                  {" "}
                  Name{" "}
                </label>
                <input
                  type="text"
                  class="form-control mb-2"
                  placeholder="Banner name"
                  name="nameEn"
                />
                <label htmlFor="description-eu" class="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Banner description..."
                  name="descriptionEn"
                ></textarea>
              </div>

              <div>
                <hr class="my-4" />

                <label htmlFor="group-image" class="mb-2 form-labe">
                  Banner Image
                </label>
                <input
                  type="file"
                  id="group-image"
                  name="fileImage"
                  class="form-control"
                  placeholder="Group image"
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

export default AddBannerModals;
