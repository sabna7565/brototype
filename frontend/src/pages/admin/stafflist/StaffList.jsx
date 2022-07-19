import './StaffList.scss'
import { Link } from 'react-router-dom'
import StaffTable from '../../../components/admin/staffs/staffTable/StaffTable'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getStaffs } from '../../../features/admin/staff/getStaffsSlice'
import {  allDesignations } from '../../../features/admin/designation/addDesignationSlice'


const StaffList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getStaffs())
  }, [dispatch]);


  return (
    <div className='stafflist'>
      <div className="stafflistContainer">
      <div className="stafftitle">
         <h1 className='title'>Staff List</h1>
            <Link to='/admin/staffs/new'>
              <button className="viewButton" >Add new staff</button>
            </Link>
         </div>
         <div className="body">
          <StaffTable />
         </div>
      </div>      
    </div>
  )
}

export default StaffList