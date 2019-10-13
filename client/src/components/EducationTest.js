import React, { Component } from "react";

export default class EducationTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      i: 0,
      selected: false,
      courseName: "Название курса",
      courseContent: "ЭТО ТО ЧТО НАДО ЧИТАТЬ",
      tasks: [
        {
          number: "1",
          question: "В каких адресах допущена ошибка? Какая?",
          anwsers: ["129.123.341.123", "0.0.0.0", "3123", "354.345.123.324"],
          correctAnwser: 3
        },
        {
          number: "2",
          question: "В каких адресах допущена ошибка? Какая?",
          anwsers: [
            "129.123.341.123",
            "0.0.0.0",
            "adsa3.123",
            "354.345.123.324"
          ],
          correctAnwser: 2
        },
        {
          number: "3",
          question: "В каких адресах допущена ошибка? Какая?",
          anwsers: [
            "129.123.341.123",
            "0.0.0.0",
            "12ads3.123",
            "354.345.123.324"
          ]
        }
      ],
      correctAnwser: 3
    };
    this.handleForm = this.handleForm.bind(this);
  }

  unCheck(i) {
    let ref = "ref_" + i;
    if (this.refs[ref].checked === true) {
      this.refs[ref].checked = false;
    } else {
      this.refs[ref].checked = true;
    }
  }
  handleForm(e) {
    e.preventDefault();
    this.setState({ i: this.state.i + 1 });
    console.log((this.state.i + 1) / this.state.tasks.length);
    this.refs["progressref"].value =
      ((this.state.i + 1) / this.state.tasks.length) * 100;
  }
  render() {
    const displayTask = () => {
      return (
        <div>
          {this.state.i < this.state.tasks.length ? (
            <h1 className="title">{this.state.tasks[this.state.i].number}</h1>
          ) : null}
          {this.state.i < this.state.tasks.length ? (
            this.state.tasks[this.state.i].anwsers.map((res, index) => {
              return (
                <div>
                  <input
                    ref={"ref_" + index}
                    value={index}
                    className="is-checkradio is-danger"
                    id={`${index}`}
                    type="radio"
                    name={`${index}`}
                    checked={false}
                  />
                  <label
                    onClick={() => this.unCheck(`${index}`)}
                    for={`${index}`}
                  >
                    {res}
                  </label>
                </div>
              );
            })
          ) : (
            <h1 className="title"> ТЫ ЗАВЕРШИЛ ТЕСТ!</h1>
          )}
        </div>
      );
    };

    return (
      <div
        style={{
          marginTop: "2rem",
          height: "100%",
          maxHeight: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          marginRight: "5px"
        }}
        className="column box cardContent scrollable is-fullwidth"
      >
        <progress
          ref="progressref"
          className="progress"
          value="0"
          max="100"
        ></progress>
        <h1 className="title">{this.state.tasks.number}</h1>
        <div
          style={{
            marginTop: "2rem",
            height: "100%",
            maxHeight: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            marginRight: "5px"
          }}
          className="column box cardContent scrollable is-fullwidth"
        >
          <h2 className="subtitle">{this.state.tasks.question}</h2>
          <form onSubmit={e => this.handleForm(e)}>
            {displayTask(this.state.i)}
            {this.state.i < this.state.tasks.length ? (
              <button onClick={() => displayTask()} className="button">
                Ответить
              </button>
            ) : (
              <button onClick={() => this.forceUpdate()}>
                Продолжить обучение!
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}
