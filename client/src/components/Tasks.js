import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Tasks extends Component {
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
            Задачи на проверке{" "}
          </h1>
        </div>

        <div style={{ margin: "0 auto" }} className="container">
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
                  <button class="button is-large is-outlined is-dark">
                    HR
                  </button>
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
            <article
              style={{ backgroundColor: "white" }}
              className="media article__main"
            >
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://www.accenture.com/us-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global-3/27/Accenture-Human-Machine-AI-James.png" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p style={{ fontSize: "1.5rem" }}>
                    <strong style={{ fontSize: "2.5rem" }}>
                      Елена Войнова
                    </strong>{" "}
                    <small style={{ fontSize: "2.5rem" }}>@yavoina</small>{" "}
                    <small>31m</small>
                    <br />В рамках спецификации современных стандартов,
                    реплицированные с зарубежных источников, современные
                    исследования разоблачены. Ясность нашей позиции очевидна:
                    убеждённость некоторых оппонентов в значительной степени
                    обусловливает важность как самодостаточных, так и внешне
                    зависимых концептуальных решений. Имеется спорная точка
                    зрения, гласящая примерно следующее: действия представителей
                    оппозиции неоднозначны и будут объективно рассмотрены
                    соответствующими инстанциями. Господа, глубокий уровень
                    погружения обеспечивает актуальность позиций, занимаемых
                    участниками в отношении поставленных задач.
                  </p>
                  <Link to="task">
                    <button className="button is-large is-centered article__button">
                      Посмотреть отчёт
                    </button>
                  </Link>
                </div>
              </div>
            </article>
            <article
              style={{ backgroundColor: "white" }}
              className="media article__main"
            >
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://humanim.org/wp-content/uploads/2016/09/IMG_8355-1-800x600.jpg" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p style={{ fontSize: "1.5rem" }}>
                    <strong style={{ fontSize: "2.5rem" }}>Адам Сендлер</strong>{" "}
                    <small style={{ fontSize: "2.5rem" }}>@hahaha</small>{" "}
                    <small>31m</small>
                    <br />
                    Не следует, однако, забывать, что сложившаяся структура
                    организации требует анализа дальнейших направлений развития.
                    Прежде всего, реализация намеченных плановых заданий
                    однозначно фиксирует необходимость стандартных подходов. Не
                    следует, однако, забывать, что реализация намеченных
                    плановых заданий предоставляет широкие возможности для
                    соответствующих условий активизации. Есть над чем
                    задуматься: независимые государства будут в равной степени
                    предоставлены сами себе. Кстати, базовые сценарии поведения
                    пользователей объявлены нарушающими общечеловеческие нормы
                    этики и морали.
                  </p>
                  <Link to="task">
                    <button className="button is-large is-centered article__button">
                      Посмотреть отчёт
                    </button>
                  </Link>
                </div>
              </div>
            </article>
            <article
              style={{ backgroundColor: "white" }}
              className="media article__main"
            >
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="http://thedreamwithinpictures.com/wp-content/uploads/2014/03/d971d__portrait-photography.jpg" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p style={{ fontSize: "1.5rem" }}>
                    <strong style={{ fontSize: "2.5rem" }}>
                      Дмитрий Пучков
                    </strong>{" "}
                    <small style={{ fontSize: "2.5rem" }}>@operru</small>
                    <small>31m</small>
                    <br />
                    Приятно, граждане, наблюдать, как непосредственные участники
                    технического прогресса формируют глобальную экономическую
                    сеть и при этом - подвергнуты целой серии независимых
                    исследований. А также независимые государства освещают
                    чрезвычайно интересные особенности картины в целом, однако
                    конкретные выводы, разумеется, представлены в исключительно
                    положительном свете. Предварительные выводы неутешительны:
                    реализация намеченных плановых заданий напрямую зависит от
                    как самодостаточных, так и внешне зависимых концептуальных
                    решений. Мы вынуждены отталкиваться от того, что дальнейшее
                    развитие различных форм деятельности требует анализа как
                    самодостаточных, так и внешне зависимых концептуальных
                    решений. Банальные, но неопровержимые выводы, а также
                    элементы политического процесса преданы
                    социально-демократической анафеме. В рамках спецификации
                    современных стандартов, сделанные на базе интернет-аналитики
                    выводы представляют собой не что иное, как квинтэссенцию
                    победы маркетинга над разумом и должны быть функционально
                    разнесены на независимые элементы. В целом, конечно,
                    повышение уровня гражданского сознания выявляет срочную
                    потребность как самодостаточных, так и внешне зависимых
                    концептуальных решений.
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
      </div>
    );
  }
}
