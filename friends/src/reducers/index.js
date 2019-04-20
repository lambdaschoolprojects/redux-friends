import { LOGIN_STARTED, LOGIN_FAIL, LOGIN_SUCCESS } from "../actions";

const initialState = {
    friends: [],
    isLoggingIn: false,
    loginError: ""
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_STARTED:
            return { ...state, isLoggingIn: true };
            break;
        case LOGIN_SUCCESS:
            return { ...state, isLoggingIn: false }
            break;
        case LOGIN_FAIL:
            return { ...state,  isLoggingIn: false, loginError: action.payload }
            break;
        default:
    }

    return state;

}