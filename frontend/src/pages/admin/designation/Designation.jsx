import './Designation.scss'
import AddDesignation  from '../../../components/admin/designation/addDesignation/AddDesignation'
import Designation  from '../../../components/admin/designation/AllDesignation'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../components/Spinner'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import { reset, allDesignations } from '../../../features/admin/designation/addDesignationSlice'

const DesignationList = () => {
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(allDesignations())
    }, [dispatch]);
      
     
  return (
    <div className='designation'>
        
        <div className="designationContainer">
        
         <div className="designationtitle">
         <h1 className='title'>Designations</h1>
         </div>
         <div className="adddesignation">
          <AddDesignation />
         </div>

         <div className="body">
          <Designation />
        </div>

         {/* <DataTable className="studdatatable"/> */}
        </div>
    </div>
  )
}


export default DesignationList