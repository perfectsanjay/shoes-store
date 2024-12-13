import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from "./actionTypes";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_START:
    case SIGN_UP_START:
    case SIGN_OUT_START:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null,
      };

    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
