import axios from 'axios';

export const LOGIN_STARTED = "LOGIN_STARTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";


export const loginAction = creds => dispatch => {
    dispatch({ type: LOGIN_STARTED });

    return axios
        .post("http://localhost:5000/api/login", creds)
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