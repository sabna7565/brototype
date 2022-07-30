import axios from 'axios'
import * as api from '../../api/staff'

const API_URL = '/api/staff/'


//Login user
const slogin = async (staffData) => {
    const response = await axios.post(API_URL + 'login', staffData)
        console.log("service staff", response);

    if(response.data) {
        localStorage.setItem('staff', JSON.stringify(response.data))
    }

    return response.data
}

//update staff details
const editStaff = async (token, staffData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const { data } = await api.updateStaffPic(staffData, config);
    if (data) {
        localStorage.setItem('staff', JSON.stringify(data));
    }
    return data;
}

//create group
const group = async (token, groupData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const { data } = await api.createGroup(groupData, config);
    return data;
}


// logout user
const slogout = () => {
    localStorage.removeItem('staff')
}

const sauthService = {
    slogin, slogout, editStaff, group, 
}

export default sauthService