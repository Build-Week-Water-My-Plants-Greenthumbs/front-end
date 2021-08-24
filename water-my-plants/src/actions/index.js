import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";
export const CREATE_USER = "CREATE_USER";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const EDIT_USER = "EDIT_USER";
export const LOG_OUT = "LOG_OUT";
export const CREATE_PLANT = "CREATE_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const WATER = "WATER";
export const FETCH_PLANTS = "FETCH_PLANTS"
export const TOGGLE_EDIT= "TOGGLE_EDIT"
export const FETCH_PLANT_LIST = "FETCH_PLANT_LIST"


export const createUser = (user) => dispatch => {
    console.log(user);
    axios
        .post('https://water-plants-matt.herokuapp.com/api/auth/register', user) 
        .then(res => {
            console.log(res.data); 
            dispatch({ type: CREATE_USER, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: SIGNUP_FAIL, payload: "username already taken"})
        });
};

export const loginUser = (credentials) => dispatch => {
    console.log(credentials);
    axios
        .post('https://water-plants-matt.herokuapp.com/api/auth/login', credentials) //api should return 20 minute token for now
        .then(res => {
            console.log(res.data); //need to change line 15 & 16 on how res looks once receiving from backend
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_USER, payload: res.data.loggedUser })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_FAIL, payload: "invalid credentials, please verify username and password and try again."})
        });
};

export const editUser = (user) => dispatch => {
    console.log('editUser action called', user);
    axiosWithAuth()
        .put(`/api/user/${user.userId}`, user) //add endpoint 
        .then(res => {
            console.log(res.data);
            dispatch({ type: EDIT_USER, payload: res.data})
    })
    .catch(err => {
        console.log(err);
    });
};

export const logOut = () => dispatch => {
    // axios
    //     .post('') //add endpoint
    //     .then(res => {
        console.log('logging out');
            dispatch({ type: LOG_OUT })
    //     })
    // .catch(err => console.log(err));
};

export const toggleEdit = () => dispatch => {
    dispatch({ type: TOGGLE_EDIT })
}




export const createPlant = (data) => dispatch => {
    axiosWithAuth()
    .post("https://water-plants-matt.herokuapp.com/api/plants", data) //add endpoint
    .then(res => {
        console.log(res)
        dispatch({ type: CREATE_PLANT, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const fetchPlant = (id) => dispatch => {
    axiosWithAuth()
    .get(`https://water-plants-matt.herokuapp.com/api/plants/${id}`) // endpoint to get plant by id
    .then(res => {
        console.log(res.data);
        dispatch({type: FETCH_PLANTS, payload: res.data})
    })
    .catch(err => console.log(err))
}

export const fetchPlantList = () => dispatch => {
    axiosWithAuth()
    .get("https://water-plants-matt.herokuapp.com/api/plants")
    .then(res => {
        
        dispatch({type: FETCH_PLANT_LIST, payload: res.data})
    })
    .catch(err => console.log(err))
}