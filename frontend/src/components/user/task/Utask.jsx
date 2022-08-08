import './Utask.scss'
import Table from 'react-bootstrap/Table';
import {Link, useParams} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import * as api from '../../../api/index'
import { useEffect,useState } from 'react';
import Utaskmodal from './Utaskmodal'
import React from 'react'

const Utask = () => {
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  
  const {token}=user?user:"";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
     };
  // const classess = useStyless();

  const [Fulldata, setFulldata] = useState({loading:false,done:false})

useEffect(() => {
  !Fulldata.done && fetchTaks()
}, [])

const fetchTaks= async()=>{
  setFulldata((prev)=>({ ...prev, loading: true}))
  try {
    const {data}=await api.viewTask(config, user._id);
    if (data?.task) {
    setFulldata((prev)=>({
       ...prev,
       task:data['task'], 
       loading: false, 
       done: true}));
    }
    } catch (error) {
    console.log(error)
  }
}

console.log("my task is...", Fulldata.task)
let mytasks = Fulldata.task ? Fulldata.task : [];

const [st, setSt] = React.useState(null);

  return (
    <div className='usertask'>
    <div className="reviewtitle">
      <span>View Tasks</span>
      <Link to={`/user/task/${user._id}/${user.domain}/${user.week}`}>
        <button className='utaskaddgrp'>Upload task</button>
      </Link>
    </div>
      <div className="taskouter">
      <div className='tasktable'>
    <Table striped bordered hover size="sm">
    <thead>
      <tr className='firstrow'>
        <th style={{width: '200px'}}>Week</th>
        
        <th style={{width: '250px'}}>Action</th>
      </tr>
    </thead>
    <tbody>
    {mytasks?.map((row) => (
      <tr>
        <td>{row.week}</td>
        
        <td><button className='usttaskaddgrp' onClick={()=>setSt(row._id)}><Utaskmodal id = {st} /> </button></td>
     
      </tr>
      ))}
    </tbody>
  </Table>
  </div>
  </div>
</div> 
  )
}


export default Utask