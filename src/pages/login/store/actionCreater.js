import { constants } from "./index";
import axios from "axios";
const changeLogin = (result) => {
  return {
    type: constants.CHANGELOGIN,
    value: result,
  };
};
export const setLoginState = () => {
  return (dispatch) => {
    axios.get("/api/login.json").then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin(result));
      } else {
        alert("登录失败");
      }
    });
  };
};
export const logout = () => {
  return {
    type: constants.LOGOUT,
    value: false,
  };
};
