import ActionTypes from "../action-types/actionTypes";

const initialState = {
  editModal: false,
  paymentEditModal: false,
  paymetnCreateModal: false,
  showBannerModal: false,
  viewModal: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODALS.SHOW_EDIT_MODAL:
      return { ...state, editModal: true };
    case ActionTypes.MODALS.SHOW_PAYMENT_EDIT_MODAL:
      return { ...state, paymentEditModal: true };
    case ActionTypes.MODALS.CLOSE_PAYMENT_EDIT_MODAL:
      return { ...state, paymentEditModal: false };
    case ActionTypes.MODALS.CLOSE_EDIT_MODAL:
      return { ...state, editModal: false };
    case ActionTypes.MODALS.SHOW_VIEW_MODAL:
      return { ...state, viewModal: true };
    case ActionTypes.MODALS.CLOSE_VIEW_MODAL:
      return { ...state, viewModal: false };
    case ActionTypes.MODALS.SHOW_PAYMENT_CREATE_MODAL:
      return { ...state, paymetnCreateModal: true };
    case ActionTypes.MODALS.CLOSE_PAYMENT_CREATE_MODAL:
      return { ...state, paymetnCreateModal: false };
    case ActionTypes.MODALS.SHOW_BANNER_VIEW_MODAL:
      return { ...state, showBannerModal: true };
    case ActionTypes.MODALS.CLOSE_BANNER_VIEW_MODAL:
      return { ...state, showBannerModal: false };
    default:
      return state;
  }
};

export default modalsReducer;
