import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteModal } from "../../store/actions/modalsAction";

const DeleteModal = () => {
  const { deleteModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(closeDeleteModal());
  };
  return (
    <Modal
      show={deleteModal}
      onHide={hideModal}
      animation={false}
      className="modal fade"
    >
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <Modal.Header>
            <h5 className="modal-title">Product delete</h5>
            <button
              type="button"
              className="btn-close"
              onClick={hideModal}
            ></button>
          </Modal.Header>
          <Modal.Body>
            <h6>Are you sure you want to delete?</h6>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-secondary">
              Delete
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={hideModal}
            >
              Cancel
            </button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
