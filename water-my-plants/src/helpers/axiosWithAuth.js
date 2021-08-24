import axios from 'axios';

export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://water-plants-matt.herokuapp.com",
        headers: {
            authorization: token    
        }
    });
};