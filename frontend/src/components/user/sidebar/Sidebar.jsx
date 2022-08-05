import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Sidebar.scss'
import nopic from '../../../images/user/noprofile.png'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Sidebar = () => {
  return (
    <div className='usersidebar'>
          <div className="upimg">
          <span className='welcome'>Welcome sabna</span>
          <form action="">
            <img src={nopic} className="upro" />
            <input type="file" className='inputimg'/>
          </form>
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
        <Link to="/user/payments">
        <li>
          <span>Payments</span>
        </li>
        </Link>
        <Link to="/user/group">
        <li>
          <span>Group</span>
        </li>
        </Link>
        </ul>
        </div>      
    </div>
  )
}

export default Sidebar