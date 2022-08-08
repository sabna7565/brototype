import axios from 'axios'
 import { BACKEND_URL } from '../constants/axios'

 const API = axios.create({
    baseURL: `${BACKEND_URL}/home`,
    withCredentials: true,
 })

 export const viewPlacement=()=>API.get('/fetch-placement')



