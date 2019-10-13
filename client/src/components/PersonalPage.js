import React, { Component } from "react";

export default class PersonalPage extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="image is-128x128"
            src="https://pbs.twimg.com/profile_images/806143150414819329/FoOizLFS.jpg"
          />
          <h1 className="title tasks__title is-1">ИМЯ ПОЛЬЗОВАТЕЛЯ </h1>
        </div>
        <div className="column is-9" style={{ width: "100%" }}>
          <section className="hero personal__header welcome is-small">
            <div className="hero-body">
              <div
                className="container"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ borderRadius: "50%" }}
                  className="image is-128x128"
                  src="https://pbs.twimg.com/profile_images/806143150414819329/FoOizLFS.jpg"
                />
                <div class="column is-6 is-offset-1">
                  <p
                    style={{ color: "white" }}
                    id="name"
                    value=""
                    class="title is-2"
                  >
                    Имя: Лосев Михаил
                  </p>
                  <h2
                    style={{ color: "white" }}
                    id="size"
                    value=""
                    class="subtitle is-4"
                  >
                    Должность: Фронтендер
                  </h2>
                  <h2
                    style={{ color: "white" }}
                    id="price"
                    value=""
                    class="subtitle is-4"
                  >
                    Департамент: WEB
                  </h2>
                  <h2
                    style={{ color: "white" }}
                    id="quality"
                    value=""
                    class="subtitle is-4"
                  >
                    Контактная информация: +79214250695
                  </h2>

                  <br />
                </div>
              </div>
            </div>
          </section>
          <section className="info-tiles">
            <div
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              className="tile is-ancestor has-text-centered"
            >
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">3</p>
                  <p className="subtitle">Задач на согласовании</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">100000</p>
                  <p className="subtitle">Тирлинги</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">100500</p>
                  <p className="subtitle">Выполнено задач</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">13371337</p>
                  <p className="subtitle">Всего заработано тирлингов</p>
                </article>
              </div>
            </div>
          </section>
          <div className="columns">
            <div className="column is-6">
              <div className="card events-card">
                <header className="card-header">
                  <p
                    style={{ fontSize: "2.5rem" }}
                    className="card-header-title"
                  >
                    Достижения
                  </p>
                  <a
                    href="#"
                    className="card-header-icon"
                    aria-label="more options"
                  >
                    <span className="icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div className="card-table">
                  <div className="content">
                    <table className="table is-fullwidth is-striped">
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "2.5rem" }}>Имя достижения</td>
                          <td>
                            <img
                              style={{
                                borderRadius: "50%"
                              }}
                              src="https://images-na.ssl-images-amazon.com/images/I/41DmFATchgL.jpg"
                              className="image is-32x32"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "2.5rem" }}>
                            Не усики а пропуск в ... Selectel
                          </td>
                          <td>
                            <img
                              style={{
                                borderRadius: "50%"
                              }}
                              src="https://sun9-40.userapi.com/c856520/v856520856/7338/dHawRBYWB4o.jpg"
                              className="image is-32x32"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "2.5rem" }}>
                            Введение в социофобию
                          </td>
                          <td>
                            <img
                              style={{
                                borderRadius: "50%"
                              }}
                              src="https://sun9-36.userapi.com/c856520/v856520856/733f/x7DHViJlkZE.jpg"
                              className="image is-32x32"
                            />
                          </td>
                        </tr>{" "}
                        <tr>
                          <td style={{ fontSize: "2.5rem" }}>
                            Слияние с гуглом
                          </td>
                          <td>
                            <img
                              style={{
                                borderRadius: "50%"
                              }}
                              src="https://sun9-70.userapi.com/c856520/v856520856/7346/8c1QEYWUeHA.jpg"
                              className="image is-32x32"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "2.5rem" }}>Рядовой Куча</td>
                          <td>
                            <img
                              style={{
                                borderRadius: "50%"
                              }}
                              src="https://sun9-7.userapi.com/c856520/v856520856/734d/YDEEg1pQ9rc.jpg"
                              className="image is-32x32"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "2.5rem" }}>Born to feel</td>
                          <td>
                            <img
                              style={{
                                borderRadius: "50%"
                              }}
                              src="https://sun9-6.userapi.com/c856520/v856520856/7354/fIYuq_fQrR4.jpg"
                              className="image is-32x32"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "2.5rem" }}>
                            English motherlover, do you speak it?
                          </td>
                          <td>
                            <img
                              style={{
                                borderRadius: "50%"
                              }}
                              src="https://sun9-42.userapi.com/c856520/v856520856/732a/vE10VXgYeeY.jpg"
                              className="image is-32x32"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card">
                <header style={{ fontSize: "2.5rem" }} className="card-header">
                  React
                </header>
                <div className="card-content">
                  <div className="content">
                    <div className="control has-icons-left has-icons-right">
                      <progress className="progress" value="15" max="100">
                        15%
                      </progress>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <header style={{ fontSize: "2.5rem" }} className="card-header">
                  Html
                </header>
                <div className="card-content">
                  <div className="content">
                    <div className="control has-icons-left has-icons-right">
                      <progress className="progress" value="15" max="100">
                        15%
                      </progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
