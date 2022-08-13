import axios from 'axios'
import * as api from '../../api/index'

const API_URL = '/api/users/'

//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response
    .data
}

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//update student details
const editUser = async (token, userData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const { data } = await api.editUserDetails(userData, config);
    if (data) {
        localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
}

//update staff details
const editPro = async (token, userData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const { data } = await api.editUserProfile(userData, config);
    if (data) {
        localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
}

// logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,login, logout, editUser, editPro,
}

export default authService