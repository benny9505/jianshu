import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Login extends React.Component {
  render() {
    const { loginState } = this.props;
    console.log(this.props);

    if (loginState) {
      return <div>write</div>;
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  }
}
const mapState = (state) => ({
  loginState: state.getIn(["login", "login"]),
});
export default connect(mapState, null)(Login);
