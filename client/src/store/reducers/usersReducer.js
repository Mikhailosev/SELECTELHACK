import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  user: null,
  comments: null,
  selectedCourse: null,
  token: null
};
// Reducer cases
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return updateObject(state, { user: action.users });
    case actionTypes.SELECT_COURSE:
      return updateObject(state, { selectedCourse: action.course });
    case actionTypes.LOGIN:
      return updateObject(state, { token: action.token });
    default:
      return state;
  }
};

export default reducer;
