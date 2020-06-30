import * as constant from "./constant";
import axios from "axios";
export const searchFocus = () => ({
  type: constant.HandleFocus,
});
export const searchBlur = () => ({
  type: constant.HandleBlur,
});
export const getHeaderList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const action = setHeaderList(res.data.data);
        dispatch(action);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
export const searchItemEnter = () => ({
  type: constant.SearchItemEnter,
});
export const searchItemLeave = () => ({
  type: constant.SearchItemLeave,
});
export const changePage = (changPage) => ({
  type: constant.CHANGE_PAGE,
  page: changPage,
});
const setHeaderList = (data) => ({
  type: constant.SetHeaderList,
  data: data,
  totalPage: Math.ceil(data.length / 10),
});
