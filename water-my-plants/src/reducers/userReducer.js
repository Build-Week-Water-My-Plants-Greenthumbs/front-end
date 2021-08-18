import { CREATE_USER, EDIT_USER } from "../actions";

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
        default:
            return state;
    }
}

export default userReducer;