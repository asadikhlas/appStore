import axios from 'axios';
import AuthActions from '../actions/authActions';
import AsyncStorageManager from '../../config/AsyncStorageManager';
import { Path } from '../../config/Path';

class AuthMiddlewares {
  static userLoginMiddleware = (data) => {
    return (dispatch) => {
      dispatch(AuthActions.userLogin());

      axios
        .post(Path.USER_LOGIN, {
          email: data.email,
          password: data.password
        })
        .then((response) => {
          if (!response.data.success) {
            return dispatch(
              AuthActions.userLoginFail({
                errorMessage: response.data.errorMessage
              })
            );
          }

          const data = response.data.data;
          var user = {};
          user.data = data;
          user.data.isLoggedIn = true;
          user.data.isFirstTime = false;

          AsyncStorageManager.setUser(user);
          dispatch(
            AuthActions.userLoginSuccess({
              user: response.data.data,
              successMessage: response.data.successMessage
            })
          );
        })
        .catch((err) => {
          dispatch(
            AuthActions.userLoginFail({
              errorMessage: 'Something Went wrong please try again'
            })
          );
        });
    };
  };
}

export default AuthMiddlewares;
