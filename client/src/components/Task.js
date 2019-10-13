import React, { Component } from "react";

export default class Task extends Component {
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
            ТИТУЛ ОТЧЕТА
          </h1>
        </div>
        <div class="container">
          <section class="articles">
            <div class="column is-8 is-offset-2">
              <div class="card article">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content has-text-centered">
                      <p class="title article-title"></p>
                      <div class="tags has-addons level-item">
                        <span class="tag is-rounded is-info">@skeetskeet</span>
                        <span class="tag is-rounded">May 10, 2018</span>
                      </div>
                    </div>
                  </div>
                  <div class="content article-body">
                    <p>
                      Non arcu risus quis varius quam quisque. Dictum varius
                      duis at consectetur lorem. Posuere sollicitudin aliquam
                      ultrices sagittis orci a scelerisque purus semper.{" "}
                    </p>
                    <p>
                      Metus aliquam eleifend mi in nulla posuere sollicitudin
                      aliquam ultrices. In hac habitasse platea dictumst
                      vestibulum rhoncus est pellentesque elit. Accumsan lacus
                      vel facilisis volutpat. Non sodales neque sodales ut
                      etiam. Est pellentesque elit ullamcorper dignissim cras
                      tincidunt lobortis feugiat vivamus.
                    </p>
                    <h3 class="has-text-centered">
                      How to properly center tags in bulma?
                    </h3>
                    <p>
                      {" "}
                      Proper centering of tags in bulma is done with class:{" "}
                      <pre>level-item</pre>
                      Voluptat ut farmacium tellus in metus vulputate. Feugiat
                      in fermentum posuere urna nec. Pharetra convallis posuere
                      morbi leo urna molestie. Accumsan lacus vel facilisis
                      volutpat est velit egestas. Fermentum leo vel orci porta.
                      Faucibus interdum posuere lorem ipsum.
                    </p>
                  </div>
                </div>
              </div>

              <div class="card article">
                <div class="card-content">
                  <div class="media">
                    <div class="media-center">
                      <img
                        src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg"
                        class="author-image"
                        alt="Placeholder image"
                      />
                    </div>
                    <div class="media-content has-text-centered">
                      <p class="title article-title">
                        Sapien eget mi proin sed 🔱
                      </p>
                      <p class="subtitle is-6 article-subtitle">
                        <a href="#">@daria</a> on February 17, 2018
                      </p>
                    </div>
                  </div>
                  <div class="content article-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Accumsan lacus vel facilisis volutpat est velit
                      egestas. Sapien eget mi proin sed. Sit amet mattis
                      vulputate enim.
                    </p>
                    <p>
                      Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum
                      leo vel orci porta non. Proin fermentum leo vel orci porta
                      non pulvinar. Imperdiet proin fermentum leo vel. Tortor
                      posuere ac ut consequat semper viverra. Vestibulum lectus
                      mauris ultrices eros.
                    </p>
                    <h3 class="has-text-centered">
                      Lectus vestibulum mattis ullamcorper velit sed ullamcorper
                      morbi. Cras tincidunt lobortis feugiat vivamus.
                    </h3>
                    <p>
                      In eu mi bibendum neque egestas congue quisque egestas
                      diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi
                      tincidunt augue interdum velit euismod in. At in tellus
                      integer feugiat scelerisque varius morbi enim nunc. Vitae
                      suscipit tellus mauris a diam. Arcu non sodales neque
                      sodales ut etiam sit amet.
                    </p>
                    <i
                      style={{
                        width: "5rem",
                        margin: "0 auto",
                        fontSize: "5rem",
                        height: "5rem"
                      }}
                      className="fa animation fa-thumbs-up"
                    ></i>
                    <i
                      style={{
                        margin: "0 auto",
                        width: "5rem",
                        fontSize: "5rem",
                        height: "5rem"
                      }}
                      className="fa animation fa-thumbs-down"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
