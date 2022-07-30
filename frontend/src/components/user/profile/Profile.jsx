import React from 'react'
import './Profile.scss'
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import nopic from '../../../images/user/noprofile.png'
import Adhar from '../../../images/admin/adhar.jpeg'
import {Link, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'

const Profile = () => {

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  console.log("sabna", user)

  return (
    <div  className='single'>
      <span className='profile'>PROFILE</span>
       <Link to="/user/more">
        <button className='addman'>Update Details</button></Link>

      <div className="singleCntainer">
        <div className="left">
        {/* <img src={user.profile_image ? user.profile_image :  nopic} alt="" className="userImg" /> */}
        <div > {user.name ? <span className='details'> Name : &nbsp; {user.name} </span>  :" "}</div>
         <div>{user.dob ? <span className='details'> Date of Birth : &nbsp;{user.dob} </span>  :" "}</div>   
        <div>{user.age ? <span className='details'> Age : &nbsp;{user.age} </span>  :" "}</div>   
        <div>{user.gender ? <span className='details'> Gender : &nbsp;{user.gender} </span>  :" "}</div>   
        <div>{user.father ? <span className='details'> Father Name : &nbsp;{user.father} </span>  :" "}</div>   
        <div>{user.fcontact ? <span className='details'> Father's Contact : &nbsp;{user.fcontact} </span>  :" "}</div>   
        <div>{user.mother ? <span className='details'> Mother Name : &nbsp;{user.mother} </span>  :" "}</div>   
        <div>{user.guardian ? <span className='details'> Name of Guardian : &nbsp;{user.guardian} </span>  :" "}</div>   
        <div>{user.relationship ? <span className='details'> Relation of guardian : &nbsp;{user.relationship} </span>  :" "}</div>   
        <div>{user.address ? <span className='details'> Address  : &nbsp;{user.address} </span>  :" "}</div>   

        </div>
        <div className="center">
        <div>{user.domain ? <span className='details'> Domain  : &nbsp;{user.domain} </span>  :" "}</div>   
        <div>{user.email ? <span className='details'> Email : &nbsp; {user.email} </span>  :" "}</div>
        <div>{user.mobile ? <span className='details'> Mobile : &nbsp;{user.mobile} </span>  :" "}</div>   
        <div >{user.batch ? <span className='details'> Batch : &nbsp; {user.batch} </span>  :" "}</div>
        <div>{user.qualification ? <span className='details'> Qualification : &nbsp;{user.qualification} </span>  :" "}</div>
        <div>{user.village ? <span className='details'> Village : &nbsp;{user.village} </span>  :" "}</div>   
        <div>{user.taluk ? <span className='details'> Taluk : &nbsp;{user.taluk} </span>  :" "}</div>   
        <div>{user.college ? <span className='details'> College Name : &nbsp;{user.college} </span>  :" "}</div>   
        <div>{user.experience ? <span className='details'> Experience : &nbsp;{user.experience} </span>  :" "}</div>   
        <div>{user.company ? <span className='details'> Company Name : &nbsp;{user.company} </span>  :" "}</div>   
        <div>{user.designation ? <span className='details'> Designation : &nbsp;{user.designation} </span>  :" "}</div>   
      </div>
        <div className="right">           
        <img src={user.proof_image ? user.proof_image :  Adhar} alt="" className="useradImg" />       
        </div>

      </div>
      
         
    </div>
  )
}


export default Profile