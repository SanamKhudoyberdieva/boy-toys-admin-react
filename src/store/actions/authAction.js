import ActionTypes from "../action-types/actionTypes.js";

export const setUserLoading = () => {
  return {
    type: ActionTypes.AUTH.SET_USER_LOADING,
  };
};

export const login = (payload) => {
  return {
    type: ActionTypes.AUTH.LOGIN,
    payload,
  };
};

export const checkphoneAction = (payload) => {
  return {
    type: ActionTypes.AUTH.SET_USER_PHONE,
    payload,
  };
};

export const setUserError = (payload) => {
  return {
    type: ActionTypes.AUTH.SET_USER_ERROR,
    payload,
  };
};
