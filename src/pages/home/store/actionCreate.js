import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("./api/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changHomeData(result));
    });
  };
};
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("./api/homeList.json?page=" + page).then((res) => {
      const result = res.data.data;
      dispatch(addMoreList(result, page + 1));
    });
  };
};

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
});
const addMoreList = (result, page) => ({
  type: constants.GET_MORE_LIST,
  moreList: fromJS(result.articleList),
  nextPage: page,
});
export const toggleTopShow = (show) => ({
  type: constants.TOOLETOPSHOW,
  show: show,
});
