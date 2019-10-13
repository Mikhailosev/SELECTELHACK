import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Tasks extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="image is-128x128"
            src="https://pbs.twimg.com/profile_images/806143150414819329/FoOizLFS.jpg"
          />
          <h1 class="title tasks__title is-1">Задачи на проверке </h1>
        </div>
        <div id="flow">
          <span className="flow-1"></span>
          <span className="flow-2"></span>
          <span className="flow-3"></span>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-large" type="search" />
                    <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                    <span class="icon is-medium is-right">
                      <i class="fa fa-empire"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ margin: "1rem" }} className="buttons are-medium">
                <button class="button is-large is-outlined is-dark">
                  Фронтенд
                </button>
                <button class="button is-large is-outlined is-dark">
                  Бэкенд
                </button>
                <button class="button is-large is-outlined is-dark">
                  Дизайн
                </button>
                <button class="button is-large is-outlined is-dark">HR</button>
                <button class="button is-large is-outlined is-dark">
                  Аналитика
                </button>
                <button class="button is-large is-outlined is-dark">
                  Проектная деятельность
                </button>
                <button class="button is-large is-outlined is-dark">
                  Операционная деятельность
                </button>
                <button class="button is-large is-outlined is-dark">
                  Информационная деятельность
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <article className="media article__main">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
                <Link to="task">
                  <button className="button is-large is-centered article__button">
                    Посмотреть отчёт
                  </button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
