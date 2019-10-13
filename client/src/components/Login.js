import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <section className="hero login__hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <figure className="avatar">
                  <img
                    classNameName="image is-128x128"
                    src="https://otzyvmarketing.ru/media/product/image_875.png"
                  />
                </figure>
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Email"
                        autofocus=""
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Пароль"
                      />
                    </div>
                  </div>
                  <Link to="/tasks">
                    <button className="button login__button is-block is-large is-fullwidth">
                      Войти <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
