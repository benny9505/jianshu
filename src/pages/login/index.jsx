import React from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./styled";
import { Redirect } from "react-router-dom";
import { actionCreate } from "./store";
import { connect } from "react-redux";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loginState } = this.props;

    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              id="a"
              placeholder="账号"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              id="b"
              placeholder="密码"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => {
                this.props.login(this.account, this.password);
              }}>
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}
const mapState = (state) => ({
  loginState: state.getIn(["login", "login"]),
});
const mapDispatch = (dispatch) => ({
  login(accountElement, passwordElement) {
    // console.log(accountElement.value, passwordElement.value);
    dispatch(actionCreate.setLoginState());
  },
});
export default connect(mapState, mapDispatch)(Login);
