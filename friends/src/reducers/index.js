import {
  LOGIN_STARTED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  FRIENDS_FETCH_FAILED,
  FRIENDS_FETCHED,
  FETCHING_FRIENDS,
  ADD_FAILED,
  ADDING_FRIEND,
  FRIEND_ADDED
} from "../actions";

const initialState = {
  friends: [],
  isGettingData: false,
  fetchError: "",
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
  switch (action.type) {
    case FETCHING_FRIENDS:
    case ADDING_FRIEND:
      return { ...state, isGettingData: true };
      break;
    case FRIEND_ADDED:
    case FRIENDS_FETCHED:
      return { ...state, friends: action.payload, isGettingData: false };
      break;
    case FRIENDS_FETCH_FAILED:
    case ADD_FAILED:
      return { ...state, isGettingData: false, fetchError: action.payload };
      break;
    default:
      return state;
  }
  return state;
};
