import React from 'react'
import './Reviewstudents.scss'
import * as api from '../../../../api/staff'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useParams} from "react-router-dom"
import Table from 'react-bootstrap/Table';


const Reviewstudents = () => {
    const { batch, domain } = useParams()
    const [Fulldata, setFulldata] = useState({loading:false,done:false})
  const { staff } = useSelector((state) => state.staffauth);


  const {token}=staff?staff:"";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && fetchMyStudents()
  }, [])

  const fetchMyStudents = async()=>{
    setFulldata((prev)=>({ ...prev, loading: true}))
    try {
      // let datas =batchname.batch,domainname.domain
      const {data}=await api.viewMyStudents(config,batch,domain);
      console.log("myshfdjfhdjfhdjfhdj........")
      if (data?.users) {
      setFulldata((prev)=>({
         ...prev,
         users:data['users'], 
         loading: false, 
         done: true}));
      }
    } catch (error) {
      console.log(error)
    }
  }
   console.log("mystudents", Fulldata.users)
  let mystudents = Fulldata.users ? Fulldata.users : [];
  
  return (
    <div className='reviewstudent'>
      <div className="studtitle">
        <span>My Students</span>
     </div>

    <div className="studentstable">
     <Table striped bordered hover size="sm">
      <thead>
        <tr className='firstrow'>
          <th style={{width: '180px'}}>Batch Name</th>
          <th>Group</th>
          <th>Advisor Name</th>
          <th style={{width: '200px'}}>Action</th>
        </tr>
      </thead>
      <tbody>
      {mystudents?.map((row) => (
        <tr>
          <td>{row.name}</td>
          <td>{row.domain}</td>
          <td>{row.email}</td>
          <td style={{display: 'flex'}}><Link to={`/staff/group/${row.batch}/${row.domain}/${row._id}`}>
            <button className='viewmygrpbutton'>View</button>
          </Link>
          <Link to={`/staff/review/add/${row.batch}/${row.domain}/${row._id}`}>
            <button className='sviewmygrpbutton'>Add</button>
          </Link>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  )
}


export default Reviewstudents