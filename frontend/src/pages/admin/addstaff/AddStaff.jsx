import './AddStaff.scss'
import { Link } from 'react-router-dom'
import StaffForm from '../../../components/admin/staffs/staffForm/StaffForm'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../components/Spinner'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { reset } from '../../../features/admin/staff/register/addStaffSlice'
import {useNavigate} from 'react-router-dom'


const AddStaff = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {staff, isLoding, isSuccess, isError, message } =useSelector((state) => state.addStaff);

  useEffect(() => {
    if (isError) {
      toast.error(message || 'Not Found');
      return;
    }

    if(isSuccess || staff) {
      navigate('/admin/staffs')
   }

    dispatch(reset());
  }, [staff, isError, isSuccess, message, dispatch]);

  if (isLoding) {
    return <Spinner />
  }

  return (
    <div className='addstaff'>
      <div className="addstaffContainer">
      <div className="addstafftitle">
         <h1 className='title'>Add Staff</h1>
            <Link to='/admin/staffs'>
              <button className="viewButton" >Back</button>
            </Link>
         </div>
         <div className="body">
          <StaffForm />
         </div>
      </div>
    </div>
  )
}

export default AddStaff