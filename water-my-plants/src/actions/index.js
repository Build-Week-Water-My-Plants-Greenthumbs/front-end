import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from "axios";

export const CREATE_USER = "CREATE_USER";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const EDIT_USER = "EDIT_USER";
export const CREATE_PLANT = "CREATE_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const WATER = "WATER";

export const createUser = (user) => dispatch => {
    axios
        .post('https://water-plants-matt.herokuapp.com/api/auth/register', user) //api sign-up endpoint not working yet.
        .then(res => {
            console.log(res.data); //need to change line 15 & 16 on how res looks once receiving from backend
            localStorage.setItem('token', res.data.token);
            dispatch({ type: CREATE_USER, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SIGNUP_FAIL, payload: "username already taken"})
        });
};

export const loginUser = (credentials) => dispatch => {
    axiosWithAuth()
        .post('/api/auth/login', credentials) //api should return 20 minute token for now
        .then(res => {
            console.log(res.data); //need to change line 15 & 16 on how res looks once receiving from backend
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_USER, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAIL, payload: "invalid credentials, please verify username and password and try again."})
        });
}