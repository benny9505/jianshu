import { fromJS } from "immutable";
import * as constants from "./constants";

// 转化成immutable对象，里面的数组也会转化
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
});
const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  });
};
const changeMoreList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.moreList),
    articlePage: action.nextPage,
  });
};
const changeTopShow = (state, action) => {
  return state.set("showScroll", action.show);
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.GET_MORE_LIST:
      return changeMoreList(state, action);
    case constants.TOOLETOPSHOW:
      return changeTopShow(state, action);
    default:
      return state;
  }
};
