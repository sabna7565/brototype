import React from 'react'
import './Reviewstudents.scss'
import * as api from '../../../../api/staff'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useParams} from "react-router-dom"
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


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

  const navigate = useNavigate()

  const handleSelect= async(e)=>{
    let studId = e.currentTarget.getAttribute('value');
    let week = e.currentTarget.getAttribute('data-value');
    try{
      let data = await api.updateWeek({week:week}, config, studId);
        if (data) {
         navigate('/staff/review/') 
        }
       } catch (error) {
        console.log(error)
      }
  }
  
  const rows = [
    {week: 'week1',},{week: 'week2',},{ week: 'week3',},{ week: 'week4',},
    {week: 'week5',},{week: 'week6',},{ week: 'week7',},{ week: 'week8',},
    {week: 'week9',},{week: 'week10',},{ week: 'week11',},{ week: 'week12',},
    {week: 'week13',},{ week: 'week14',},
    {week: 'week15',},{ week: 'week16',},
    {week: 'week17',},{ week: 'week18',},
    {week: 'week19',},{ week: 'week20',},
    {week: 'week21',},{ week: 'week22',},
    {week: 'week23',},{ week: 'week24',},
  ];
  return (
    <div className='reeviewstudent'>
      <div className="studtitle">
        <span>Review Students</span>
     </div>
    <div className="revsecond">
    <div className="studentstable">
     <Table striped bordered hover size="sm">
      <thead>
        <tr className='firstrow'>
          <th style={{width: '150px'}}>Name</th>
          <th style={{width: '150px'}}>Group</th>
          <th style={{width: '220px'}}>Email Id</th>
          <th style={{width: '280px'}}>Action</th>
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
         
          <DropdownButton
          className='updatereviewbtn'
          title = "Update week"
          size="lg"
            >
              {rows?.map((ro) => (
            <Dropdown.Item active  onClick={handleSelect} value={row._id} data-value ={ro.week}>{ro.week}</Dropdown.Item>
           ))} 

          </DropdownButton>

          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
    </div>
  )
}


export default Reviewstudents