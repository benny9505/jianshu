import React from "react";
import { RecommentWrapper, RecommentItem } from "../style";
import { connect } from "react-redux";
class Recomment extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <RecommentWrapper>
        {list.map((item) => {
          return (
            <RecommentItem
              key={item.get("id")}
              imgUrl={item.get("imgUrl")}></RecommentItem>
          );
        })}
      </RecommentWrapper>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});
export default connect(mapState, null)(Recomment);
