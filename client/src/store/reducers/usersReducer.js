import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  user: null,
  comments: null,
  selectedCourse: null,
  token: null,
  loggedIn: false
};
// Reducer cases
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return updateObject(state, { user: action.user });
    case actionTypes.LOGIN:
      return updateObject(state, {
        token: action.token,
        loggedIn: true,
        user: action.user
      });
    case actionTypes.LOGOUT:
      return updateObject(state, {
        token: action.token,
        loggedIn: action.logout,
        user: null
      });
    default:
      return state;
  }
};

export default reducer;
