import axios from 'axios'
 import { BACKEND_URL } from '../constants/axios'

 const API = axios.create({
    baseURL: `${BACKEND_URL}/users`,
    withCredentials: true,
 })

 export const editUserDetails=(userData, config)=>API.put(`/change-details`, userData, config)

export const viewSyllabus=(config,domainname,weekname)=>API.get(`/fetch-syllabus/${domainname}/${weekname}`, config)
export const uploadTask=(taskData,config,studentid,domainname,weekname)=>API.post(`/add-task/${studentid}/${domainname}/${weekname}`, taskData, config)
export const viewTask=(config,studentid)=>API.get(`/fetch-task/${studentid}`, config)
export const ViewTaskModal=(config,taskId)=>API.get(`/fetch-taskmodal/${taskId}`, config)
export const viewReview=(config,studentId)=>API.get(`/fetch-review/${studentId}`, config)
