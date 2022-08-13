import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Sidebar.scss'
import nopic from '../../../images/user/noprofile.png'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { updatePro, reset } from '../../../features/auth/authSlice';
import {useSelector, useDispatch} from 'react-redux'
import { UploadImage } from '../../../utilities/cloudinaryupload'
import { useState } from 'react';
import { useEffect  } from 'react';
import { toast } from 'react-toastify'
import Spinner from '../../Spinner';


const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [pro_image, setProImage] = useState(null);
  const [Loading, setIsLoading] = useState(false);

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

   
  const [formData, setFormData] = useState({
    profile_image : user.profile_image || '',
  })
 
  const {profile_image } = formData;
    
       useEffect(() => {
      dispatch(updatePro(formData))
    }, [formData.profile_image])

    const profileUpdation = async (event) => {
      if(event.target.files && event.target.files[0]) {
        let proPicture = event.target.files[0]
        setProImage(pro_image)
        const data = await UploadImage(proPicture)
        const pimg = await data.secure_url.toString()
        let prImg = { profile_image: pimg }
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

     dispatch(reset())
  }, [user, isError, isSuccess, isLoading, message, dispatch])


  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className='usersidebar'>
          <div className="upimg">
          <span className='welcome'>Welcome sabna</span>

          {user.profile_image ? (
              <img src={user.profile_image} className="upro1" />
              ) : (
                <img src={nopic} className="upro" />
            )}
            <input type="file" name='profile_image' className='inputimg' onChange={profileUpdation}/>

          {/* <form action="">
            <img src={nopic} className="upro" />
            <input type="file" className='inputimg'/>
          </form>*/}
          </div> 

          <div className="useritems"><ul>
        <Link to="/user">
        <li>
          <span>Dashboard</span>
        </li></Link>
        
        <Link to="/user/task">
        <li>
          <span>Task</span>
        </li>
        </Link>

        <Link to="/user/review">
        <li>
          <span>Review</span>
        </li>
        </Link>
        {/* <Link to="/user/payments">
        <li>
          <span>Payments</span>
        </li>
        </Link> 
        <Link to="/user/group">
        <li>
          <span>Group</span>
        </li>
        </Link>*/}
        </ul>
        </div>      
    </div>
  )
}

export default Sidebar