import {
  SHOW_ADD_TODO_DIALOG,
  HIDE_ADD_TODO_DIALOG,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  isSignedIn: false,
  userUID: null,
  showAddTodoDialog: false
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ADD_TODO_DIALOG:
      return {
        ...state,
        showAddTodoDialog: true
      };
    case HIDE_ADD_TODO_DIALOG:
      return {
        ...state,
        showAddTodoDialog: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        userUID: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isSignedIn: false,
        userUID: null
      };
    default:
      return state;
  }
};

export default todosReducer;
