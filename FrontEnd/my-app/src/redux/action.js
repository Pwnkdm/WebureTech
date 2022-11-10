import axios from "axios";
import {
  GET_DATA,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCESS,
} from "./actionTypes";

export const signupApi = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  axios
    .post("https://floating-garden-24224.herokuapp.com/user/signup", data)
    .then((res) => dispatch({ type: SIGNUP_SUCESS, payload: res.data }))
    .catch((err) => dispatch({ type: SIGNUP_FAILED, payload: err }));
};

export const loginApi = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("https://floating-garden-24224.herokuapp.com/user/login", data)
    .then((res) => dispatch({ type: LOGIN_SUCESS, payload: res.data }))
    .catch((err) => dispatch({ type: LOGIN_FAILED, payload: err }));
};

export const getdataApi = (email) => (dispatch) => {
  axios
    .get(`https://floating-garden-24224.herokuapp.com/dashboard/${email}`)
    .then((res) => dispatch({ type: GET_DATA, payload: res.data }));
};
