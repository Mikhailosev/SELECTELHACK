import React, { Component } from "react";
import EducationSubjects from "./EducationSubjects";
import EducationRight from "./EducationRight";

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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default Education;
