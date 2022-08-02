import './Mygroup.scss'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'
import * as api from '../../../../api/staff'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"

const Mygroup = () => {
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
    <div className='cmygrp'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr className='firstrow'>
          <th style={{width: '180px'}}>Batch Name</th>
          <th>Group</th>
          <th>Advisor Name</th>
          <th style={{width: '150px'}}>Action</th>
        </tr>
      </thead>
      <tbody>
      {mygroup?.map((row) => (
        <tr>
          <td>{row.batch}</td>
          <td>{row.domain}</td>
          <td>{row.advisor}</td>
          <td><Link to={`/staff/group/${row.batch}/${row.domain}`}>
            <button className='viewmygrpbutton'>View</button>
          </Link></td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Mygroup