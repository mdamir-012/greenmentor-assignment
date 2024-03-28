import { AUTH, POST_USER_REQUEST, POST_USER_SUCCESS } from "./actionType";

export const postUserReq = () => {
  return { type: POST_USER_REQUEST };
};

export const postUserSuccess = (payload) => {
  return { type: POST_USER_SUCCESS, payload: payload };
};

export const postUserError = () => {
  return { type: POST_USER_SUCCESS };
};

export const isAuth = (isLogin) => (dispatch) => {
  dispatch(fetchAuth(isLogin));
};
const fetchAuth = (isLogin) => {
  return { type: AUTH, payload: isLogin };
};
