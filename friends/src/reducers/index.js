import {
  LOGIN_STARTED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  FRIENDS_FETCH_FAILED,
  FRIENDS_FETCHED,
  FETCHING_FRIENDS
} from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  loginError: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return { ...state, isLoggingIn: true };
      break;
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false };
      break;
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false, loginError: action.payload };
      break;
    default:
  }

  return state;
};

export const friendsReducer = (state = initialState, action) => {
  return state;
};
