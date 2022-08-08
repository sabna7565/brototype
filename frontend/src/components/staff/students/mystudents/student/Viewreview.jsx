import './Viewreview.scss'
import {Link, useParams} from "react-router-dom"
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'
import * as api from '../../../../../api/staff'
import { useSelector } from 'react-redux'


const Viewreview = () => {
  const [Fulldata, setFulldata] = useState({loading:false,done:false})
  const { staff } = useSelector((state) => state.staffauth);
  const { id } = useParams()
  
  const {token}=staff?staff:"";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && fetchStudentReview()
  }, [])

  const fetchStudentReview = async()=>{
    setFulldata((prev)=>({ ...prev, loading: true}))
    try {
      const {data}=await api.viewStudentReview(config, id);
      if (data?.studentreview) {
      setFulldata((prev)=>({
         ...prev,
         studentreview:data['studentreview'], 
         loading: false, 
         done: true}));
      }
    } catch (error) {
      console.log(error)
    }
  }
   console.log("mystudent....", Fulldata.studentreview)
   let review = Fulldata.studentreview ? Fulldata.studentreview : [];

   return (
    <div className='staffsinglereview'>
      <div className="title">
        <span>View review</span>
        {/* <Link to="/staff/review/batch/domain">
            <button className='addgrp'>Back</button>
        </Link> */}
      </div>

      <div className="studentreviewtable">
     <Table striped bordered hover size="sm">
      <thead>
        <tr className='firstrow'>
          <th style={{width: '150px'}}>Date</th>
          <th style={{width: '100px'}}>Week</th>
          <th style={{width: '100px'}}>Status</th>
          <th style={{width: '100px'}}>Pendings</th>
          <th style={{width: '100px'}}>Updations</th>
          <th style={{width: '100px'}}>Reviewer</th>
          <th style={{width: '100px'}}>Score</th>
          <th style={{width: '100px'}}>Seminar </th>
          <th style={{width: '100px'}}>Score</th>
          <th style={{width: '100px'}}>Total</th>
        </tr>
      </thead>
      <tbody>
      {review?.map((row) => (
        <tr>
          <td>{row.date}</td>
          <td>{row.week}</td>
                        
          <td style={{backgroundColor: row.status, color: row.status}}>
            {row.status}</td> 
            
          <td>{row.pending}</td>
          <td>{row.updations}</td>
          <td>{row.reviewer}</td>
          <td>{row.score}</td>
          <td>{row.seminar}</td>
          <td>{row.semiscore}</td>
          <td>{row.total}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Viewreview