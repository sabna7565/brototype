import './Viewtask.scss'
import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'
import * as api from '../../../../api/staff'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useParams} from "react-router-dom"
import Usertaskmodal from './Usertaskmodal';

const Viewtask = () => {
 const { id } = useParams()
 const [Fulldata, setFulldata] = useState({loading:false,done:false})
 const { staff } = useSelector((state) => state.staffauth);

 const {token}=staff?staff:"";
 const config = {
   headers: {
     Authorization: `Bearer ${token}`,
   },
 };

 useEffect(() => {
    !Fulldata.done && fetchUserTasks()
  }, [])
  
  const fetchUserTasks= async()=>{
    setFulldata((prev)=>({ ...prev, loading: true}))
    try {
      const {data}=await api.viewTasks(config, id);
      if (data?.tasks) {
      setFulldata((prev)=>({
         ...prev,
         tasks:data['tasks'], 
         loading: false, 
         done: true}));
      }
      } catch (error) {
      console.log(error)
    }
  }
  
  console.log("my task is...", Fulldata.tasks)
  let usertasks = Fulldata.tasks ? Fulldata.tasks : [];

const [st, setSt] = React.useState(null);

  return (
    <div className='group'>
      <div className="studtitle">
        <span>My Students</span>
     </div>

    <div className="studentstable">
     <Table striped bordered hover size="sm">
      <thead>
        <tr className='firstrow'>
          <th style={{width: '180px'}}>Week</th>
          <th style={{width: '150px'}}>Action</th>
        </tr>
      </thead>
      <tbody>
      {usertasks?.map((row) => (
        <tr>
          <td>{row.week}</td>
          
          <td>
            <button className='viewmygrpbutton' onClick={()=>setSt(row._id)}><Usertaskmodal id = {st} /> </button>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  )
}


export default Viewtask