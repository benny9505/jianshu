import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 960px;
  overflow: hidden;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  margin-left: -18px;
  margin-top: -10px;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  background-color: #f7f7f7;
  color: #000;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 18px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 1px 1px 4px #888888;
  }
  img {
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const RecommentWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommentItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
  &:hover {
    box-shadow: -6px 3px 5px #888888;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background-color: #a5a5a5;
  text-align: center;
  color: #fff;
  border-radius: 20px;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
`;
// write开始
export const WriterWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  padding-bottom: 20px;
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  overflow: hidden;
  font-size: 14px;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
`;
export const WriteItem = styled.li`
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  list-style: none;
  position: relative;
  line-height: 24px;
  padding-left: 68px;
  padding-top: 14px;
  font-size: 14px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 0px;
    top: 10px;
  }
  .content {
    font-size: 12px;
    color: #969696;
  }
  .right {
    position: absolute;
    right: 0px;
    color: #42c02e;
    font-size: 13px;
    top: 10px;
  }
`;
// write结束
