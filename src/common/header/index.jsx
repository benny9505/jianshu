import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchTitle,
  SearchSwitch,
  SearchItem,
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreate } from "./store";
import { Link } from "react-router-dom";
import { actionCreate as loginActionCreate } from "../../pages/login/store";
// 判断是否显示
const showSearchItem = (
  focused,
  mouseIn,
  list,
  page,
  handleEnter,
  handleLeave,
  handleChangePage,
  totalPage
) => {
  let itemList = [];
  if (list.length) {
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      itemList.push(<SearchItem key={list[i]}>{list[i]}</SearchItem>);
    }
  }
  if (focused || mouseIn) {
    return (
      <SearchInfo onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <SearchTitle>
          热门搜索
          <SearchSwitch onClick={() => handleChangePage(page, totalPage)}>
            换一批
          </SearchSwitch>
        </SearchTitle>
        <div>{itemList}</div>
      </SearchInfo>
    );
  } else {
    return null;
  }
};

function ComponentName(props) {
 

  const {
    focused,
    handleFocus,
    handleBlur,
    headerList,
    page,
    handleEnter,
    mouseIn,
    handleLeave,
    handleChangePage,
    totalPage,
    loginState,
    logout,
  } = props;
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Nav>
        <Link to="/">
          <NavItem className="left active">
            <i className="iconfont home">&#xe60c;</i>首页
          </NavItem>
        </Link>
        <NavItem className="left">
          <i className="iconfont">&#xe608;</i>下载App
        </NavItem>
        {/* 搜索框 */}
        <SearchWrapper>
          <CSSTransition in={focused} timeout={300} classNames="slide">
            <NavSearch
              placeholder="搜索"
              className={focused ? "focused" : ""}
              onFocus={() => handleFocus(headerList)}
              onBlur={handleBlur}></NavSearch>
          </CSSTransition>
          <i className={focused ? "iconfont focused" : "iconfont"}>&#xe633;</i>
          {showSearchItem(
            focused,
            mouseIn,
            headerList,
            page,
            handleEnter,
            handleLeave,
            handleChangePage,
            totalPage
          )}
        </SearchWrapper>
        {loginState ? (
          <NavItem onClick={logout} className="right">
            退出
          </NavItem>
        ) : (
          <Link to="/login">
            <NavItem className="right">登录</NavItem>
          </Link>
        )}

        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
      </Nav>
      <Addition>
        <Link to="/write">
          <Button className="writing">
            <i className="iconfont">&#xe708;</i> 写文章
          </Button>
        </Link>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    focused: state.get("header").get("focused"),
    headerList: state.getIn(["header", "headerList"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.get("header").get("mouseIn"),
    loginState: state.get("login").get("login"),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(headerList) {
      console.log(headerList);
      headerList.size === 0 && dispatch(actionCreate.getHeaderList());
      dispatch(actionCreate.searchFocus());
    },
    handleBlur() {
      dispatch(actionCreate.searchBlur());
    },
    handleEnter() {
      dispatch(actionCreate.searchItemEnter());
    },
    handleLeave() {
      dispatch(actionCreate.searchItemLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreate.changePage(page + 1));
      } else {
        dispatch(actionCreate.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreate.logout());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);
