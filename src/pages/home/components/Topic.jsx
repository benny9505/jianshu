import React from "react";
import { TopicWrapper, TopicItem } from "../style.js";
import { connect } from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map((item) => (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" src={item.get("imgUrl")} alt="" />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(["home", "topicList"]),
});
export default connect(mapStateToProps)(Home);
