import ActionTypes from "../action-types/actionTypes";

export const showEditModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_EDIT_MODAL,
  };
};

export const closeEditModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_EDIT_MODAL,
  };
};

export const showViewModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_VIEW_MODAL,
  };
};

export const closeViewModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_VIEW_MODAL,
  };
};