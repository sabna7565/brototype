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

export const insertBranch=(branchData)=>API.post('/add-branch',branchData)
export const viewBranchs=()=>API.get('/fetch-branchs/')
export const viewBranch=(locname)=>API.get(`/fetch-branch/${locname}`)

export const addBatchs=(batchData)=>API.post('/add-batch', batchData)
export const viewBatchs=()=>API.get('/fetch-batchs')

export const addSyllabus=(syllabusData)=>API.post('/add-syllabus', syllabusData)
export const viewSyllabus=()=>API.get('/fetch-syllabus')
export const ViewSyllabusModal=(syllabusId)=>API.get(`/fetch-syllabusmodal/${syllabusId}`)

export const addPlacement=(placementData)=>API.post('/add-placement', placementData)
export const viewPlacement=()=>API.get('/fetch-placement')



