import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default class CurrentTasks extends Component {
  async handleEditorChange(e) {
    let content = await this.setState({ content: [e.target.getContent()] });
    console.log("Content was updated:", e.target.getContent());
    return content;
  }
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
            Текущие задачи
          </h1>
        </div>

        <div className="columns is-fullheight is-desktop">
          <div
            className="column box cardContent scrollable is-one-quarter"
            style={{
              marginTop: "2rem",
              height: "100%",
              maxHeight: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              marginRight: "5px"
            }}
          >
            <p>
              <strong>Название задачи</strong>
            </p>
          </div>
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
            <Editor
              initialValue=""
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  " image | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist | removeformat ",
                content_style: "img {width: 100%; height: auto;}"
              }}
              onChange={this.handleEditorChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
