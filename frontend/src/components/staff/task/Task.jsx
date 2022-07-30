import './Task.scss'
import {  useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'
import * as api from '../../../api/staff'



const Task = () => {
    const [Fulldata, setFulldata] = useState({loading:false,done:false})
  const { staff } = useSelector((state) => state.staffauth);


  const {token}=staff?staff:"";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && fetchCreatedGroup()
  }, [])

const fetchCreatedGroup= async()=>{
  setFulldata((prev)=>({ ...prev, loading: true}))
  try {
    const {data}=await api.viewMyGroups(config);
    if (data?.group) {
    setFulldata((prev)=>({
       ...prev,
       group:data['group'], 
       loading: false, 
       done: true}));
    }
  } catch (error) {
    console.log(error)
  }
}
console.log("mygroup", Fulldata.group)
let mygroup = Fulldata.group ? Fulldata.group : [];


  return (
    <div className='task'>
    <div className="title">
      <span>Tasks</span>
    </div>
    <div className="body">
    <div className="review">
    <Table striped bordered hover size="sm">
      <thead>
        <tr className='firstrow'>
          <th style={{width: '200px'}}>Batch Name</th>
          <th style={{width: '200px'}}>Group</th>
         
          <th style={{paddingLeft: '100px'}}>Action</th>
        </tr>
      </thead>
      <tbody>
      {mygroup?.map((row) => (
        <tr>
          <td>{row.batch}</td>
          <td>{row.domain}</td>
        <td style={{display: 'flex'}}><Link to={`/staff/task/${row.batch}/${row.domain}`}>
            <button className='viewmygrpbutton'>View</button>
          </Link>&nbsp;
          <Link to={`/staff/task/new/${row.batch}/${row.domain}`}>
            <button className='sviewmygrpbutton'>Add</button>
          </Link>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    
   </div>
  </div>  )
}

export default Task