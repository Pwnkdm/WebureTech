import {
  GET_DATA,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCESS,
} from "./actionTypes";

const initState = {
  profile: { firstname: "react", lastname: "fb", email: "fb@gmail.com" },
  isLoading: false,
  isError: false,
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case SIGNUP_SUCESS:
      alert(payload);
      return {
        ...state,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case LOGIN_SUCESS:
      alert(payload);
      window.location.href = "/dashboard";
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_DATA:
      console.log(payload);
      return {
        ...state,
        profile: payload,
      };
    default: {
      return state;
    }
  }
};
