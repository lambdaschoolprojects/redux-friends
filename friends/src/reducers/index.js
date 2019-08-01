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
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false };
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false, loginError: action.payload };
    default:
      return state;
  }
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
    case ADDING_FRIEND:
      return { ...state, isGettingData: true };
    case FRIEND_ADDED:
    case FRIENDS_FETCHED:
      return { ...state, friends: action.payload, isGettingData: false };
    case FRIENDS_FETCH_FAILED:
    case ADD_FAILED:
      return { ...state, isGettingData: false, fetchError: action.payload };
    default:
      return state;
  }
};
