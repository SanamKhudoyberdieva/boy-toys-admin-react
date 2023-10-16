import ActionTypes from "../action-types/actionTypes";

const initialState = {
  addProductModal: false,
  editProductModal: false,
  viewProductModal: false,
  deleteModal: false,
  addBannerModal: false,
  editBannerModal: false,
  viewBannerModal: false,
  addBranchModal: false,
  editBranchModal: false,
  addPaymentModal: false,
  editPaymentModal: false,
  editOrderModal: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODALS.SHOW_ADD_PRODUCT_MODAL:
      return { ...state, addProductModal: true };
    case ActionTypes.MODALS.CLOSE_ADD_PRODUCT_MODAL:
      return { ...state, addProductModal: false };
    case ActionTypes.MODALS.SHOW_EDIT_PRODUCT_MODAL:
      return { ...state, editProductModal: true };
    case ActionTypes.MODALS.CLOSE_EDIT_PRODUCT_MODAL:
      return { ...state, editProductModal: false };
    case ActionTypes.MODALS.SHOW_VIEW_PRODUCT_MODAL:
      return { ...state, viewProductModal: true };
    case ActionTypes.MODALS.CLOSE_VIEW_PRODUCT_MODAL:
      return { ...state, viewProductModal: false };
    case ActionTypes.MODALS.SHOW_DELETE_MODAL:
      return { ...state, deleteModal: true };
    case ActionTypes.MODALS.CLOSE_DELETE_MODAL:
      return { ...state, deleteModal: false };
    case ActionTypes.MODALS.SHOW_ADD_BANNER_MODAL:
      return { ...state, addBannerModal: true };
    case ActionTypes.MODALS.CLOSE_ADD_BANNER_MODAL:
      return { ...state, addBannerModal: false };
    case ActionTypes.MODALS.SHOW_EDIT_BANNER_MODAL:
      return { ...state, editBannerModal: true };
    case ActionTypes.MODALS.CLOSE_EDIT_BANNER_MODAL:
      return { ...state, editBannerModal: false };
    case ActionTypes.MODALS.SHOW_BANNER_VIEW_MODAL:
      return { ...state, viewBannerModal: true };
    case ActionTypes.MODALS.CLOSE_BANNER_VIEW_MODAL:
      return { ...state, viewBannerModal: false };
    case ActionTypes.MODALS.SHOW_ADD_BRANCH_MODAL:
      return { ...state, addBranchModal: true };
    case ActionTypes.MODALS.CLOSE_ADD_BRANCH_MODAL:
      return { ...state, addBranchModal: false };
    case ActionTypes.MODALS.SHOW_EDIT_BRANCH_MODAL:
      return { ...state, editBranchModal: true };
    case ActionTypes.MODALS.CLOSE_EDIT_BRANCH_MODAL:
      return { ...state, editBranchModal: false };
    case ActionTypes.MODALS.SHOW_ADD_PAYMENT_MODAL:
      return { ...state, addPaymentModal: true };
    case ActionTypes.MODALS.CLOSE_ADD_PAYMENT_MODAL:
      return { ...state, addPaymentModal: false };
    case ActionTypes.MODALS.SHOW_EDIT_PAYMENT_MODAL:
      return { ...state, editPaymentModal: true };
    case ActionTypes.MODALS.CLOSE_EDIT_PAYMENT_MODAL:
      return { ...state, editPaymentModal: false };
    case ActionTypes.MODALS.SHOW_ORDER_EDIT_MODAL:
      return { ...state, editOrderModal: true };
    case ActionTypes.MODALS.CLOSE_ORDER_EDIT_MODAL:
      return { ...state, editOrderModal: false };
    default:
      return state;
  }
};

export default modalsReducer;
