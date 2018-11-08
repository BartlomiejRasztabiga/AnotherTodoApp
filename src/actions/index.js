import {
  SHOW_ADD_TODO_DIALOG,
  HIDE_ADD_TODO_DIALOG,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "./actionTypes";

import { auth } from "../firebase";

export const showAddTodoDialog = () => {
  return {
    type: SHOW_ADD_TODO_DIALOG
  };
};

export const hideAddTodoDialog = () => {
  return {
    type: HIDE_ADD_TODO_DIALOG
  };
};

export const login = (email, password) => {
  return dispatch => {
    auth.signInWithEmailAndPassword(email, password);
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const logout = () => {
  return dispatch => {
    auth.signOut().then(() => {
      logoutSuccess();
    });
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
