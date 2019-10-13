import React, { Component } from "react";
import EducationTest from "./EducationTest";
import EducationCourse from "./EducationCourse";
export default class EducationTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    return (
      <div>
        <EducationTest></EducationTest>
      </div>
    );
  }
}
