import axios from 'axios'
 import { BACKEND_URL } from '../constants/axios'

 const API = axios.create({
    baseURL: `${BACKEND_URL}/users`,
    withCredentials: true,
 })

 export const editUserDetails=(userData, config)=>API.put(`/change-details`, userData, config)
