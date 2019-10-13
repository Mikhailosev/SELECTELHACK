import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default class Shop extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <img
              className="image is-128x128"
              src="https://s2.cdn.teleprogramma.pro/wp-content/uploads/2018/06/54aedcb5033553e2342843bf8b94e8aa.jpg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              className="image is-128x128"
              src="https://s2.cdn.teleprogramma.pro/wp-content/uploads/2018/06/54aedcb5033553e2342843bf8b94e8aa.jpg"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              className="image is-128x128"
              src="https://s2.cdn.teleprogramma.pro/wp-content/uploads/2018/06/54aedcb5033553e2342843bf8b94e8aa.jpg"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
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
        <div class="row columns">
          <NavLink
            to="/singleItem"
            style={{
              textDecoration: "none"
            }}
            class="column is-one-third"
          >
            <div class="card large">
              <div class="card-image">
                <figure class="image">
                  <img
                    src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                    alt="Image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 no-padding">Название товара</p>
                    <p>
                      <span class="title is-6">
                        <a href="http://twitter.com/#">Цена</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}
