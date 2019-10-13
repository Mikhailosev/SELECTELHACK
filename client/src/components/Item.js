import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Item extends Component {
  render() {
    return (
      <div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <figure class="image shadow brighten ">
                  <img
                    id="img"
                    src="https://sun9-50.userapi.com/c858028/v858028693/57afb/BVtAr5pI0UE.jpg"
                    alt="Description"
                  />
                </figure>
              </div>
              <div class="column is-6 is-offset-1">
                <p id="name" value="" class="title is-2"></p>
                <h2 id="size" value="" class="subtitle is-4"></h2>
                <h2 id="price" value="" class="subtitle is-4"></h2>
                <h2 id="quality" value="" class="subtitle is-4"></h2>
                <h2 id="description" value="" class="subtitle is-4"></h2>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div class="hero-foot">
          <div class="container">
            <div class="tabs is-centered">
              <ul>
                <li>
                  <NavLink
                    to="/singleItem"
                    style={{
                      textDecoration: "none"
                    }}
                    class="column is-one-third"
                  >
                    Go Back
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
