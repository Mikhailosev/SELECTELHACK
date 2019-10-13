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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="image is-64x64"
            src="https://psv4.userapi.com/c856220/u8733721/docs/d11/6842174d9ce6/imgonline-com-ua-GIF-Animation-JainnLUiC4odGLo.gif?extra=E_C9HMmUHrW0YlOQ7HsKlEFKysQNMSAaLzvoRKuDp8P7Dwq0Owekf_aH4fh5rXmgSyEHXaYp0w0p-n2BQs-l_Wd5rVwFOUrX1R7fszln7iA8-elClP8J-Yuc54Ir6Z8vNTz2wljYn0LBeS3c6iiWgamQ6g"
          />
          <p className="loading">Loading...</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="image is-128x128"
            src="https://pbs.twimg.com/profile_images/806143150414819329/FoOizLFS.jpg"
          />
          <h1 class="title tasks__title is-1">Текущие задачи </h1>
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
