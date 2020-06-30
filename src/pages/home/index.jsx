import React from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style.js";
import List from "./components/List";
import Topic from "./components/Topic";
import Recomment from "./components/Recomment";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import * as actionCreate from "./store/actionCreate";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recomment></Recomment>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.scropTop}>⬆</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  scropTop() {
    var timer = setInterval(function () {
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      document.documentElement.scrollTop = document.body.scrollTop = osTop - 80;
      if (osTop <= 0) {
        clearInterval(timer);
      }
    }, 30);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapToState = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"]),
  };
};
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreate.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreate.toggleTopShow(true));
    } else {
      dispatch(actionCreate.toggleTopShow(false));
    }
  },
});
export default connect(mapToState, mapDispatch)(Home);
