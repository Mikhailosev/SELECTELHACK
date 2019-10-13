import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions/index.js";
class EducationSubjects extends Component {
  render() {
    return (
      <div className="column is-3 ">
        <aside className="menu is-hidden-mobile">
          <p className="menu-label">Курс</p>
          <ul className="menu-list">
            <li>
              <a
                id="1"
                onClick={e => this.props.onGetCourse(e.target.id)}
                className="is-active"
              >
                Курс
              </a>
            </li>
            <li>
              <a>Подкурс</a>
            </li>
          </ul>
          <p className="menu-label">Курс</p>
          <ul className="menu-list">
            <li>
              <a>Подкурс</a>
            </li>
            <li>
              <a>Подкурс</a>
              <ul>
                <li>
                  <a>Подподкурс</a>
                </li>
                <li>
                  <a>Подподкурс</a>
                </li>
                <li>
                  <a>Подподкурс</a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedCourse: state.users.selectedCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCourse: e => dispatch(actionCreators.select_course(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationSubjects);
