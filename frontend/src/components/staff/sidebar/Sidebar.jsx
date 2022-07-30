import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Sidebar.scss'
import nopic from '../../../images/staff/1.png'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {useSelector, useDispatch} from 'react-redux'
import { UploadImage } from '../../../utilities/cloudinaryupload'
import { useState } from 'react';
import { useEffect  } from 'react';
import { toast } from 'react-toastify'
import Spinner from '../../Spinner';
import { updateStaff, sreset } from '../../../features/sauth/sauthSlice';

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [pro_image, setProImage] = useState(null);
  const [Loading, setIsLoading] = useState(false);

  const {staff, isLoading, isError, isSuccess, message} = useSelector((state) => state.staffauth)

  const [formData, setFormData] = useState({
    sprofile : staff.sprofile || '',
  })
 
  const {sprofile } = formData;
    
    // const profileUpdation = async (proPicture) => {
    //   try {
    //       const data = await UploadImage(proPicture);
    //       setProImage(data.secure_url.toString());
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   const staffData = { sprofile:  pro_image ? pro_image : staff.sprofile, }
    //   dispatch(updateStaff(staffData));
    //   console.log("propic", staffData);
    // }

    useEffect(() => {
      dispatch(updateStaff(formData))
    }, [formData.sprofile])

    const profileUpdation = async (event) => {
      if(event.target.files && event.target.files[0]) {
        let proPicture = event.target.files[0]
        setProImage(pro_image)
        const data = await UploadImage(proPicture)
        const pimg = await data.secure_url.toString()
        let prImg = { sprofile: pimg }
        setFormData((formData) => ({
          ...formData,
          ...prImg,
        }))
      }
    }

  useEffect(() => {
     if (isError) {
        toast.error(message || 'Not Found');
      }

     dispatch(sreset())
  }, [staff, isError, isSuccess, isLoading, message, dispatch])


  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='usidebar'>
          <div className="pimg">
          <span className='welcome'>Welcome {staff.fname} </span>
          
            <img src={pro_image || staff.sprofile} className="upro" />
            <input type="file" name='sprofile' className='inputimg' onChange={profileUpdation}/>
          
          </div>
           
          <div className="uitems"><ul>
        <Link to="/staff">
        <li>
          <span>Dashboard</span>
        </li></Link>
        <hr className='hr'/>
        <Link to="/staff/group">
        <li>
          <span>My Batch</span>
        </li>
        </Link>
        <hr className='hr'/>
        <Link to="/staff/task">
        <li>
          <span>Task</span>
        </li>
        </Link>
        <hr className='hr'/>
        <Link to="/admin/staffs">
        <li>
          <span>Review</span>
        </li>        
        </Link>
        <hr className='hr'/>
        <Link to="/admin/staffs">
        <li>
          <span>Reviwer</span>
        </li>
        </Link>
        <hr className='hr'/>
        <Link to="/admin/staffs">
        <li>
          <span>Group</span>
        </li>
        </Link>
        <hr className='hr'/>
        </ul>
        </div>

      
    </div>
  )
}

export default Sidebar