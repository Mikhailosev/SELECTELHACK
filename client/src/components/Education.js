import React, { Component } from "react";
import EducationSubjects from "./EducationSubjects";
import EducationRight from "./EducationRight";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions/index.js";
class Education extends Component {
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
            Обучение
          </h1>
        </div>
        <div className="container">
          <div className="columns">
            <EducationSubjects></EducationSubjects>
            <EducationRight></EducationRight>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    storedUser: state.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUser: user => dispatch(actionCreators.get_user(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education);
