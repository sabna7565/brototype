import axios from 'axios'

const API_URL = '/api/admin/'

//Register user
// const register = async (userData) => {
//     const response = await axios.post(API_URL, userData)

//     if(response.data) {
//         localStorage.setItem('user', JSON.stringify(response.data))
//     }

//     return response.data
// }

//Login user
const adminlogin = async (adminData) => {
    const response = await axios.post(API_URL + 'login', adminData)

    if(response.data) { 
        localStorage.setItem('admin', JSON.stringify(response.data))
    }

    return response.data
}

// logout admin
const adminlogout = () => {
    localStorage.removeItem('admin')
}

const adminAuthService = {
    adminlogin, adminlogout,
}

export default adminAuthService