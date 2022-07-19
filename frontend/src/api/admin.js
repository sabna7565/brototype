import axios from 'axios'
 import { BACKEND_URL } from '../constants/axios'

 const API = axios.create({
    baseURL: `${BACKEND_URL}/admin`,
    withCredentials: true,
 })

 
export const fetchUsers=()=>API.get('/fetch-users')
export const fetchUser=(userId)=>API.get(`/fetch-user/${userId}`)
export const removeUser=(userId)=>API.delete(`/delete-user/${userId}`)

export const addStaffs=(staffData)=>API.post('/add-staff', staffData)
export const viewStaffs=()=>API.get('/fetch-staffs')
export const removeStaff=(staffId)=>API.delete(`/delete-staff/${staffId}`)

export const insertDesignation=(designationData)=>API.post('/add-designation',designationData)
export const viewDesignations=()=>API.get('/fetch-designations')