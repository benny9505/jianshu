import * as constants from "./constant";
import { fromJS } from "immutable";
// 转化成immutable对象，里面的数组也会转化
const defaultState = fromJS({
  focused: false,
  headerList: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HandleFocus:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set("focused", true);
    case constants.HandleBlur:
      return state.set("focused", false);

    case constants.SetHeaderList:
      return state.merge({
        headerList: action.data,
        totalPage: action.totalPage,
      });
    case constants.SearchItemEnter:
      return state.set("mouseIn", true);
    case constants.SearchItemLeave:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
