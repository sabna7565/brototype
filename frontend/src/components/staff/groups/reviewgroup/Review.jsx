import './Review.scss'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as api from '../../../../api/staff'
import {Link, useNavigate} from "react-router-dom"


const Review = () => {

  const [Fulldata, setFulldata] = useState({loading:false,done:false})
  const { staff } = useSelector((state) => state.staffauth);


  const {token}=staff?staff:"";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && fetchReviewGroup()
  }, [])

const fetchReviewGroup= async()=>{
  setFulldata((prev)=>({ ...prev, loading: true}))
  try {
    const {data}=await api.viewReviewGroups(config);
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

console.log("reviewgroup", Fulldata.group)
let reviewgroup = Fulldata.group ? Fulldata.group : [];
  return (
        <div className='mygrp'>
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
      {reviewgroup?.map((row) => (
        <tr>
          <td>{row.batch}</td>
          <td>{row.domain}</td>
          <td>{row.advisor}</td>
          <td><Link to="/staff/group/reviewstudents">
            <button className='viewmygrpbutton'>View</button>
          </Link></td>     
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    
  )
}

export default Review