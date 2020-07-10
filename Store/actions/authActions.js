import ActionTypes from './actionTypes';

class AuthActions {
  static userLogin = () => {
    return {
      type: ActionTypes.USER_LOGIN
    };
  };

  static userLoginSuccess = (data) => {
    return {
      type: ActionTypes.USER_LOGIN_SUCCESS,
      data
    };
  };

  static userLoginFail = (data) => {
    return {
      type: ActionTypes.USER_LOGIN_FAIL,
      data
    };
  };
}

export default AuthActions;
