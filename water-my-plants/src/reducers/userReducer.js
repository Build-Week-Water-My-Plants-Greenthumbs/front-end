import { CREATE_USER, SIGNUP_FAIL, 
    LOGIN_USER, LOGIN_FAIL, EDIT_USER, LOG_OUT } from "../actions";

const INITIAL_STATE = {
    signedUp: false,
    signUpFail: '',
    loggedIn: false,
    logInFail: '',
    edited: false,
    editFail: '',
    user: {
    id: '',
    phone: '',
    username: '',
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                signedUp: true,
                signUpFail: false,
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
                logInFail: false,
                user: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                logInFail: action.payload
            }
        case EDIT_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOG_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default userReducer;