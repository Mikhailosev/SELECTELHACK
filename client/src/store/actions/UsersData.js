import axios from "../../axios-intance";
import * as actionTypes from "./actionTypes";
// Reducer functions
export const get_tasks = () => {
  return (dispatch, getState) => {
    axios.get("/tasks.json").then(res => {
      console.log(res.data);
      dispatch(get_tasksf(res.data));
    });
  };
};
export const get_postf = post => {
  return {
    type: actionTypes.GET_POST,
    post: post
  };
};
export const get_post = () => {
  return (dispatch, getState) => {
    axios.get("/post.json").then(res => {
      console.log(res.data);
      dispatch(get_postf(res.data));
    });
  };
};

export const post_post = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const post_like = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const post_dislike = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const post_comment = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const post_course = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const finish_task = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const finish_unit = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const change_status = () => {
  return (dispatch, getState) => {
    axios.post("/post.json").then(res => {
      console.log(res.data);
    });
  };
};
export const get_tasksf = tasks => {
  return {
    type: actionTypes.GET_TASKS,
    tasks: tasks
  };
};
export const select_coursef = course => {
  console.log(course);
  return {
    type: actionTypes.SELECT_COURSE,
    course: course
  };
};
export const select_course = e => {
  return (dispatch, getState) => {
    console.log(e);
    dispatch(select_coursef(e));
  };
};

export const get_comments = comments => {
  return dispatch => {
    dispatch(get_commentsf(comments));
  };
};
export const get_commentsf = comments => {
  return {
    type: actionTypes.GET_COMMENTS,
    comments: comments
  };
};
export const get_likes = likes => {
  return dispatch => {
    dispatch(get_likesf(likes));
  };
};
export const get_likesf = likes => {
  return {
    type: actionTypes.GET_LIKES,
    likes: likes
  };
};
export const get_dislikes = dislikes => {
  return dispatch => {
    dispatch(get_dislikesf(dislikes));
  };
};
export const get_dislikesf = dislikes => {
  return {
    type: actionTypes.GET_DISLIKES,
    dislikes: dislikes
  };
};
export const get_user = user => {
  return dispatch => {
    dispatch(get_userf(user));
  };
};
export const get_userf = user => {
  return {
    type: actionTypes.GET_USER,
    user: user
  };
};
