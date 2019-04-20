import axios from "axios";

// login actions
export const LOGIN_STARTED = "LOGIN_STARTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

// friend actions
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FRIENDS_FETCH_FAILED = "FRIENDS_FETCH_FAILED";

const LOCAL_API = "http://localhost:5000/api/";
const LOGIN_API = LOCAL_API + "login";
const FRIENDS_API = LOCAL_API + "friends";

export const loginAction = creds => dispatch => {
  dispatch({ type: LOGIN_STARTED });

  return axios
    .post(LOGIN_API, creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAIL });
    });
};

export const getFriends = _ => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });

  axios
    .get(FRIENDS_API, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res =>
      dispatch({
        type: FRIENDS_FETCHED,
        payload: res.data
      })
    )
    .catch(error =>
      dispatch({
        type: FRIENDS_FETCH_FAILED,
        payload: error
      })
    );
};
