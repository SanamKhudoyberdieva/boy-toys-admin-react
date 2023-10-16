import ActionTypes from "../action-types/actionTypes.js";

const initialValue = {
  isLoading: false,
  isLogin: false,
  first: true,
  second: false,
  phones: null,
  code: null,
  token: null,
  error: null,
};

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ActionTypes.AUTH.SET_USER_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.AUTH.LOGIN:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        first: true,
        second: false,
        code: null,
        phones: null,
        isLogin: true,
      };
      case ActionTypes.AUTH.LOGOUT:
        return {
          ...state,
          token: "",
          isLogin: false,
        };
    case ActionTypes.AUTH.SET_USER_PHONE:
      return {
        ...state,
        phones: action.payload.phone,
        isLoading: false,
        first: false,
        second: true,
        code: action.payload.generateCode,
      };
    case ActionTypes.AUTH.SET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        code: null,
        phones: null,
      };

    default:
      return state;
  }
};

export default authReducer;
