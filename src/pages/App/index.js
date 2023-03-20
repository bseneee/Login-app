import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";

import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import Logout from "../../components/Logout";
import Main from "../../components/Main";
import SideBar from "../../components/SideBar";
import StartFace from "../../components/StartFace";

class App extends Component {
  state = {
    showSidebar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />

        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          {this.props.userId?<div>UserID: {this.props.userId}</div>: <Redirect to="/startFace" />}
          <Switch>
            <Route path="/startFace" component={StartFace}/>
            <Route path="/main" component={Main}/>
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId
  };
};

export default connect(mapStateToProps)(App);
