import React from "react";
import { WriterWrapper, WriteItem } from "../style";
export default class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WriterWrapper>
        <p className="left">推荐作者</p>
        <p className="right">换一批</p>
        <WriteItem>
          <img
            src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            alt=""
            className="left"
          />
          <p className="title">董克平日记</p>
          <p className="content"> 写了1000k字 · 4k喜欢</p>
          <p className="right">+ 关注</p>
        </WriteItem>
        <WriteItem>
          <img
            src="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            alt=""
            className="left"
          />
          <p className="title">董克平日记</p>
          <p className="content"> 写了1000k字 · 4k喜欢</p>
          <p className="right">+ 关注</p>
        </WriteItem>
        <WriteItem>
          <img
            src="https://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            alt=""
            className="left"
          />
          <p className="title">董克平日记</p>
          <p className="content"> 写了1000k字 · 4k喜欢</p>
          <p className="right">+ 关注</p>
        </WriteItem>
        <WriteItem>
          <img
            src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            alt=""
            className="left"
          />
          <p className="title">董克平日记</p>
          <p className="content"> 写了1000k字 · 4k喜欢</p>
          <p className="right">+ 关注</p>
        </WriteItem>
      </WriterWrapper>
    );
  }
}
