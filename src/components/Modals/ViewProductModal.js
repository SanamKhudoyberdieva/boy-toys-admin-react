import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeViewProductModal } from "../../store/actions/modalsAction";

const ViewProductModal = () => {
  const { viewProductModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(closeViewProductModal());
  };
  return (
    <Modal
      show={viewProductModal}
      onHide={hideModal}
      animation={false}
      className="modal fade"
    >
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <Modal.Header>
            <h5 className="modal-title">
              Product view
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
                  placeholder="Mahsulot nomi..."
                  disabled="true"
                />
                <label className="mb-2 form-labe">
                  Tasnifi
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Mahsulot tasnifi..."
                  disabled="true"
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
                  placeholder="Название..."
                  disabled="true"
                />
                <label className="mb-2 form-labe">
                  Описание
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Описание..."
                  disabled="true"
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
                  placeholder="Product name..."
                  disabled="true"
                />
                <label className="mb-2 form-labe">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Product description..."
                  disabled="true"
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
                  placeholder="Product price..."
                  disabled="true"
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
                  disabled="true"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={hideModal}
            >
              Close
            </button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
};

export default ViewProductModal;
