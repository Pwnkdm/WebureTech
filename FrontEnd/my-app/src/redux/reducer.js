import { GET_DATA, LOGIN_SUCESS, SIGNUP_SUCESS } from "./actionTypes";

const initState = {
  profile: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCESS:
      alert(payload);
      return {
        ...state,
      };

    case LOGIN_SUCESS:
      alert(payload);
      payload = "Login sucess"
        ? (window.location.href = "/dashboard")
        : (window.location.href = "/signup");
      return {
        ...state,
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
