import styled from "styled-components";
import logoPic from "../../static/logo.png";
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 58px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
  cursor: pointer;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 100px;
  /* background-color: pink; */
`;
export const NavItem = styled.div`
  &.left {
    float: left;
    .home {
      margin-left: 5px;
      font-size: 20px;
    }
  }
  &.right {
    float: right;
    color: #969696;
    i {
      font-weight: 800;
    }
  }
  &.active {
    color: #ea6f5a;
  }
  line-height: 56px;
  padding: 0 15px;
  margin-right: 10px;
  color: #333;
  font-size: 17px;
  text-decoration: none;
`;
// 搜索框-start
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  i {
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: block;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border-radius: 40px;
  background: #eee;
  outline: none;
  margin-top: 9px;
  border: 1px solid #eee;
  line-height: 58px;
  font-size: 14px;
  padding: 0 40px 0 20px;
  &.focused {
    width: 240px;
  }
  &::placeholder {
    color: #999;
  }
  &.slide-enter {
    transition: all 0.2s ease-in;
  }
  &.slide-enter-action {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  z-index: 1;
  position: absolute;
  top: 58px;
  left: 0px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;
export const SearchTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchSwitch = styled.div`
  user-select: none;
  float: right;
  cursor: pointer;
  font-size: 13px;
`;
export const SearchItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    color: #333;
    background-color: #eee;
  }
`;
// 搜索框end
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.button`
  float: right;
  margin: 10px;
  margin-right: 10px;
  line-height: 24px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  padding: 6px 20px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  font-size: 15px;
  &.writing {
    color: #fff;
    background-color: #ec6149;
  }
  &.reg {
    color: #ec6149;
  }
`;
