import axios from 'axios'
 import { BACKEND_URL } from '../constants/axios'

 const API = axios.create({
    baseURL: `${BACKEND_URL}/staff`,
    withCredentials: true,
 })

 export const updateStaffPic=(staffData, config)=>API.put(`/change-profile`, staffData, config)
 export const viewBatchs=()=>API.get('/fetch-batchs')
 export const viewStaffs=()=>API.get('/fetch-staffs')
 export const createGroup=(groupData, config)=>API.post(`/insert-group`, groupData, config)
 export const viewMyGroups=(config)=>API.get('/fetch-mygroups', config)
 export const viewReviewGroups=(config)=>API.get('/fetch-reviewgroups', config)
 export const viewMyStudents=(config,batchname,domainname)=>API.get(`/fetch-mystudents/${batchname}/${domainname}`, config)
 export const viewMyStudent=(config,batchname,domainname,studid)=>API.get(`/fetch-mystudent/${batchname}/${domainname}/${studid}`, config)

