import { CREATE_USER, SIGNUP_FAIL, LOGIN_USER, LOGIN_FAIL, EDIT_USER } from "../actions";

const INITIAL_STATE = {
    signedUp: false,
    signUpFail: '',
    loggedIn: false,
    logInFail: '',
    user: {
    id: '',
    username: '',
    phoneNumber: '',
    password: ''
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                signedUp: true,
                user: action.payload
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                signUpFail: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                logInFail: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;