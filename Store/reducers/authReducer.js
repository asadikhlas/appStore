import ActionTypes from '../actions/actionTypes';

const initialAuthState = {
  isLoggedIn: false,
  user: null,
  errorMessage: '',
  successMessage: '',
  isLoading: false,
  isError: false
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.data.user,
        successMessage: action.data.successMessage
      };

    case ActionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: null,
        errorMessage: action.data.errorMessage,
        isError: true
      };

    default:
      return state;
  }
};
