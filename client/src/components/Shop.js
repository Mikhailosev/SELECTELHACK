import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default class Shop extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#dd1212",
            width: "100vw",
            alignItems: "center"
          }}
        >
          <img
            className="image is-128x128"
            style={{ borderRadius: "50%", margin: "2rem" }}
            src="https://pbs.twimg.com/profile_images/806143150414819329/FoOizLFS.jpg"
          />
          <h1 style={{ color: "white" }} class="title tasks__title is-1">
            Магазин
          </h1>
        </div>
        <div className="container">
          <div id="flow">
            <span className="flow-1"></span>
            <span className="flow-2"></span>
            <span className="flow-3"></span>
          </div>
          <div className="section">
            <div className="box">
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input has-text-centered"
                    type="search"
                    placeholder="» » » » » » find me « « « « « «"
                  />
                </div>
                <div className="control">
                  <a className="button is-info">Search</a>
                </div>
              </div>
            </div>
            <div className="row columns is-multiline">
              <NavLink
                onClick={() => this.unCheck()}
                className="column is-one-third"
                style={{ textDecoration: "none" }}
                to="/singleItem"
              >
                <div className="card large">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src="https://sun9-21.userapi.com/c857028/v857028856/72aa/S7lltBQqIO0.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left"></div>
                      <div className="media-content">
                        <p
                          style={{ fontSize: "2.5rem" }}
                          className="title is-4 no-padding"
                        >
                          Сертификат ЛитРес
                        </p>
                        <p>
                          <span className="title is-6">
                            <a
                              style={{ fontSize: "2.5rem" }}
                              href="http://twitter.com/#"
                            >
                              Цена: 500 тирлингов
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>

              <NavLink
                onClick={() => this.unCheck()}
                className="column is-one-third"
                style={{ textDecoration: "none" }}
                to="/singleItem"
              >
                <div className="card large">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src="https://sun9-5.userapi.com/c857028/v857028856/72b1/qLGkWNbCAm0.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left"></div>
                      <div className="media-content">
                        <p
                          style={{ fontSize: "2.5rem" }}
                          className="title is-4 no-padding"
                        >
                          Портфель портфель
                        </p>
                        <p>
                          <span className="title is-6">
                            <a
                              style={{ fontSize: "2.5rem" }}
                              href="http://twitter.com/#"
                            >
                              Цена: 1700 тирлингов
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                onClick={() => this.unCheck()}
                className="column is-one-third"
                style={{ textDecoration: "none" }}
                to="/singleItem"
              >
                <div className="card large">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src="https://sun9-53.userapi.com/c857028/v857028856/72b8/olIGbIC-r9g.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left"></div>
                      <div className="media-content">
                        <p
                          style={{ fontSize: "2.5rem" }}
                          className="title is-4 no-padding"
                        >
                          Свитшот
                        </p>
                        <p>
                          <span className="title is-6">
                            <a
                              style={{ fontSize: "2.5rem" }}
                              href="http://twitter.com/#"
                            >
                              Цена: 1500 тирлингов
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                onClick={() => this.unCheck()}
                className="column is-one-third"
                style={{ textDecoration: "none" }}
                to="/singleItem"
              >
                <div className="card large">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src="https://sun9-34.userapi.com/c857028/v857028856/72bf/nzz7nHO4KXo.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left"></div>
                      <div className="media-content">
                        <p
                          style={{ fontSize: "2.5rem" }}
                          className="title is-4 no-padding"
                        >
                          Лонгслив
                        </p>
                        <p>
                          <span className="title is-6">
                            <a
                              style={{ fontSize: "2.5rem" }}
                              href="http://twitter.com/#"
                            >
                              Цена: 1000 тирлингов
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                onClick={() => this.unCheck()}
                className="column is-one-third"
                style={{ textDecoration: "none" }}
                to="/singleItem"
              >
                <div className="card large">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src="https://sun9-59.userapi.com/c857028/v857028856/72cd/hU-V9aQmKO8.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left"></div>
                      <div className="media-content">
                        <p className="title is-4 no-padding">Чехол</p>
                        <p>
                          <span className="title is-6">
                            <a
                              style={{ fontSize: "2.5rem" }}
                              href="http://twitter.com/#"
                            >
                              Цена: 500 тирлингов
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                onClick={() => this.unCheck()}
                className="column is-one-third"
                style={{ textDecoration: "none" }}
                to="/singleItem"
              >
                <div className="card large">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src="  https://sun9-52.userapi.com/c857028/v857028856/72c6/_JNXhv7UcRU.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left"></div>
                      <div className="media-content">
                        <p
                          style={{ fontSize: "2.5rem" }}
                          className="title is-4 no-padding"
                        >
                          Озон
                        </p>
                        <p>
                          <span className="title is-6">
                            <a
                              style={{ fontSize: "2.5rem" }}
                              href="http://twitter.com/#"
                            >
                              Цена: 500 тирлингов
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
