import { CREATE_USER, SIGNUP_FAIL, 
    LOGIN_USER, LOGIN_FAIL, EDIT_USER,
    LOG_OUT, 
    AUTH_USER} from "../actions";

const INITIAL_STATE = {
    signedUp: false,
    signUpFail: '',
    loggedIn: false,
    logInFail: '',
    edited: false,
    editFail: '',
    token: '',
    user: {
    userId: '',
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
                token: action.payload.token,
                user: action.payload.loggedUser
            }
        case LOGIN_FAIL:
            return {
                ...state,
                logInFail: action.payload
            }
        case AUTH_USER:
            return {
                ...state,
                loggedIn: true,
                userId: localStorage.getItem('userId'),
                username: localStorage.getItem('username'),
                token: localStorage.getItem('token')
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