
import authService from '../services/authServices'

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const LOGOUT = '@ACCOUNT/LOGOUT';

 const login = (email , Password) => {
    return async (dispatch) => {
        const user = await authService.login (email , Password);

        dispatch({
            type:LOGIN_SUCCESS,
            payload:{
                user
                }
        })
    }
 }

 const setUserData = () => {
    return async (dispatch) => {
      const user = await authService.loginWithToken();
      dispatch({
        type: SILENT_LOGIN,
        payload: {
          user,
        },
      });
    };
  };

  const logout = () => {
    return async (dispatch) => {
       await authService.logout();
      dispatch({
        type: LOGOUT,
      });
    };
  };

 export {login , setUserData, logout } ;