import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 300px;
  margin: 100px auto;
  line-height: 300px;
  padding: 50px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin: 10px auto;
  display: block;
  width: 240px;
  height: 50px;
  box-sizing: border-box;
  line-height: 50px;
  padding: 0 10px;
  border-radius: 10px;
  color: #777;
  border: 2px solid #dcdcdc;
  outline: medium;
`;

export const Button = styled.div`
  width: 220px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 40px auto;
  text-align: center;
`;
