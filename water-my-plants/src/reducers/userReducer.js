import { CREATE_USER, LOGIN_USER, EDIT_USER } from "../actions";

const INITIAL_STATE = {
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
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;