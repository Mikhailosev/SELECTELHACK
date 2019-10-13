import React, { Component } from "react";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
import Login from "./components/Login";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import CurrentTasks from "./components/CurrentTasks";
import Shop from "./components/Shop";
import PersonalPage from "./components/PersonalPage";
import Item from "./components/Item";
import Education from "./components/Education";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  unCheck(e) {
    if (e === "token") {
      localStorage.removeItem("token");
      this.props.logout();
    }
    let ref = "ref_";
    if (this.refs[ref].checked === true) {
      this.refs[ref].checked = false;
    } else {
      this.refs[ref].checked = true;
    }
  }
  render() {
    return (
      <div>
        {localStorage.getItem("token") && this.props.loggedIn ? (
          <div>
            <div id="navigation" className="navigation">
              <div className="navigation__avatar">
                <img src="https://www.remove.bg/images/samples/combined/s1.jpg" />
              </div>
            </div>
            <div id="navigation" className="navigation">
              <input
                type="checkbox"
                ref={"ref_"}
                id="navi-toggle"
                className="navigation__checkbox"
              />
              <label for="navi-toggle" className="navigation__button">
                <a className="navigation__icon">&nbsp;</a>
              </label>

              <div className="navigation__background">&nbsp;</div>
              <nav className="navigation__nav">
                <ul className="navigation__list">
                  <li className="navigation__item">
                    <NavLink
                      onClick={() => this.unCheck()}
                      className="navigation__link"
                      style={{ textDecoration: "none" }}
                      to="/mytasks"
                    >
                      <span>
                        <i class="fa fa-tasks"></i>
                      </span>
                      Текущие задачи
                    </NavLink>
                  </li>
                  <li className="navigation__item">
                    <NavLink
                      onClick={() => this.unCheck()}
                      className="navigation__link"
                      style={{ textDecoration: "none" }}
                      to="/education"
                    >
                      <span>
                        <i class="fa fa-graduation-cap"></i>
                      </span>
                      Обучение
                    </NavLink>
                  </li>
                  <li className="navigation__item">
                    <NavLink
                      onClick={() => this.unCheck()}
                      className="navigation__link"
                      style={{ textDecoration: "none" }}
                      to="/user"
                    >
                      <span>
                        <i class="fa fa-address-card"></i>
                      </span>
                      Личная страница
                    </NavLink>
                  </li>
                  <li className="navigation__item">
                    <NavLink
                      onClick={() => this.unCheck()}
                      className="navigation__link"
                      style={{ textDecoration: "none" }}
                      to="/shop"
                    >
                      <span>
                        <i class="fa fa-shopping-cart"></i>{" "}
                      </span>
                      Магазин
                    </NavLink>
                  </li>
                  <li className="navigation__item">
                    <NavLink
                      onClick={() => this.unCheck()}
                      className="navigation__link"
                      style={{ textDecoration: "none" }}
                      to="/tasks"
                    >
                      <span>
                        <i class="fa fa-check-square"></i>
                      </span>
                      Проверять задания
                    </NavLink>
                  </li>
                  <li className="navigation__item">
                    <NavLink
                      onClick={() => this.unCheck("token")}
                      className="navigation__link"
                      style={{ textDecoration: "none" }}
                      to="/login"
                    >
                      <span>
                        <i class="fa fa-long-arrow-alt-left"></i>{" "}
                      </span>
                      Выход
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
        {localStorage.getItem("token") ? (
          <Redirect to="/tasks" />
        ) : (
          <Redirect to="/login" />
        )}
        <div className="site-footer">123</div>
        <Switch>
          <Route path="/tasks" component={Tasks} />
          <Route path="/login" component={Login} />
          <Route path="/task" component={Task} />
          <Route path="/mytasks" component={CurrentTasks} />
          <Route path="/shop" component={Shop} />
          <Route path="/user" component={PersonalPage} />
          <Route path="/singleItem" component={Item} />
          <Route path="/education" component={Education} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.users.token,
    loggedIn: state.users.loggedIn,
    user: state.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUser: user => dispatch(actionCreators.get_user(user)),
    logout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
