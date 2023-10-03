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

export const showDeleteModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_DELETE_MODAL,
  };
};

export const closeDeleteModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_DELETE_MODAL,
  };
};

export const showPaymentCreateModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_PAYMENT_CREATE_MODAL,
  };
};

export const closePaymentCreateModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_PAYMENT_CREATE_MODAL,
  };
};

export const showPaymentEditModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_PAYMENT_EDIT_MODAL,
  };
};

export const closePaymentEditModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_PAYMENT_EDIT_MODAL,
  };
};

export const showBannerViewModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_BANNER_VIEW_MODAL,
  };
};

export const closeBannerViewModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_BANNER_VIEW_MODAL,
  };
};
