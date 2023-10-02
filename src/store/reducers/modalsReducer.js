import ActionTypes from "../action-types/actionTypes";

const initialState = {
  editModal: false,
  viewModal: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODALS.SHOW_EDIT_MODAL:
      return { ...state, editModal: true };
    case ActionTypes.MODALS.CLOSE_EDIT_MODAL:
      return { ...state, editModal: false };
    case ActionTypes.MODALS.SHOW_VIEW_MODAL:
      return { ...state, viewModal: true };
    case ActionTypes.MODALS.CLOSE_VIEW_MODAL:
      return { ...state, viewModal: false };
    default:
      return state;
  }
};

export default modalsReducer;
