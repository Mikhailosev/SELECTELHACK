import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index.js";
import { NavLink } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.props.history.push("/tasks");
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  }
  render() {
    return (
      <section className="hero login__hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <figure className="avatar">
                  <img
                    className="image is-128x128"
                    src="https://otzyvmarketing.ru/media/product/image_875.png"
                  />
                </figure>
                <form
                  onSubmit={event => {
                    this.handleSubmit(event);
                  }}
                >
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Email"
                        autofocus=""
                        onChange={e => {
                          this.handleEmail(e);
                        }}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Пароль"
                        onChange={e => {
                          this.handlePassword(e);
                        }}
                      />
                    </div>
                  </div>

                  <button className="button login__button is-block is-large is-fullwidth">
                    Войти <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    storedUser: state.users.user,
    token: state.users.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actionCreators.login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
