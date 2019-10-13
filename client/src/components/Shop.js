import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
                        src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-96x96">
                          <img
                            src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4 no-padding">Okinami</p>
                        <p>
                          <span className="title is-6">
                            <a href="http://twitter.com/#">@twitterid</a>
                          </span>
                        </p>
                        <p className="subtitle is-6">Lead Developer</p>
                      </div>
                    </div>
                    <div className="content">
                      The Beast stumbled in the dark for it could no longer see
                      the path. It started to fracture and weaken, trying to
                      reshape itself into the form of metal. Even the witches
                      would no longer lay eyes upon it, for it had become
                      hideous and twisted.
                      <div className="background-icon">
                        <span className="icon-twitter"></span>
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
                        src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-96x96">
                          <img
                            src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4 no-padding">Okinami</p>
                        <p>
                          <span className="title is-6">
                            <a href="http://twitter.com/#">@twitterid</a>
                          </span>
                        </p>
                        <p className="subtitle is-6">Lead Developer</p>
                      </div>
                    </div>
                    <div className="content">
                      The Beast stumbled in the dark for it could no longer see
                      the path. It started to fracture and weaken, trying to
                      reshape itself into the form of metal. Even the witches
                      would no longer lay eyes upon it, for it had become
                      hideous and twisted.
                      <div className="background-icon">
                        <span className="icon-twitter"></span>
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
                        src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-96x96">
                          <img
                            src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4 no-padding">Okinami</p>
                        <p>
                          <span className="title is-6">
                            <a href="http://twitter.com/#">@twitterid</a>
                          </span>
                        </p>
                        <p className="subtitle is-6">Lead Developer</p>
                      </div>
                    </div>
                    <div className="content">
                      The Beast stumbled in the dark for it could no longer see
                      the path. It started to fracture and weaken, trying to
                      reshape itself into the form of metal. Even the witches
                      would no longer lay eyes upon it, for it had become
                      hideous and twisted.
                      <div className="background-icon">
                        <span className="icon-twitter"></span>
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
                        src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-96x96">
                          <img
                            src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4 no-padding">Okinami</p>
                        <p>
                          <span className="title is-6">
                            <a href="http://twitter.com/#">@twitterid</a>
                          </span>
                        </p>
                        <p className="subtitle is-6">Lead Developer</p>
                      </div>
                    </div>
                    <div className="content">
                      The Beast stumbled in the dark for it could no longer see
                      the path. It started to fracture and weaken, trying to
                      reshape itself into the form of metal. Even the witches
                      would no longer lay eyes upon it, for it had become
                      hideous and twisted.
                      <div className="background-icon">
                        <span className="icon-twitter"></span>
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
