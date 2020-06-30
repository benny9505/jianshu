import React from "react";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login/index.jsx";
import Write from "./pages/write/index.jsx";

function App(props) {
  return (
    <div className="App" style={{ minWidth: "1300px" }}>
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Route path="/" component={Home} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/detail/:id" component={Detail} exact></Route>
          <Route path="/write" component={Write} exact></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
