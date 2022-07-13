import axios from 'axios'
 import { BACKEND_URL } from '../constants/axios'

 const API = axios.create({
    baseURL: `${BACKEND_URL}/admin`,
    withCredentials: true,
 })


export const fetchUsers=()=>API.get('/fetch-users')
export const singleUser=(userId)=>API.get(`/fetch-users/${userId}`)