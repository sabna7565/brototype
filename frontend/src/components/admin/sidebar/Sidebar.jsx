import './Sidebar.scss'
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import PaymentIcon from '@material-ui/icons/Payment';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CodeIcon from '@material-ui/icons/Code';
import {Link, useNavigate} from "react-router-dom"
import {adminlogout, adminreset} from '../../../features/admin/auth/adminAuthSlice'
import {useSelector, useDispatch} from 'react-redux'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'


const Sidebar = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const {admin} = useSelector((state) => state.adminauth)

const onLogout = () => {
  dispatch(adminlogout())
  dispatch(adminreset())
  navigate('/admin')
}

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/admin/admindashboard">
      <span className="logo">Welcome Admin</span>
      </Link>
      </div>
      <hr />
      <div className="center"><ul>
        <p className="title">Main</p>
        <Link to="/admin/admindashboard">
        <li>
          <DashboardIcon className='icon'/>
          <span>Dashboard</span>
        </li></Link>
        
        <p className="title">Users</p>
        <Link to="/admin/staffs">
        <li>
          <SupervisorAccountIcon className='icon'/>
          <span>Staffs</span>
        </li>
        </Link>

        <Link to="/admin/users">
        <li>
          <PersonIcon className='icon'/>
          <span>students</span>
        </li>
        </Link>

        <p className="title">Activities</p>
        
        <Link to="/admin/branch">
        <li>
          <WorkIcon className='icon'/>
          <span>Branches</span>
        </li>
        </Link>

        <Link to="/admin/batch">
        <li>
          <GroupIcon className='icon'/>
          <span>Batch</span>
        </li>
        </Link>
        
        <Link to="/admin/designation">
        <li>
          <WorkIcon className='icon'/>
          <span>Designation</span>
        </li>
        </Link>

        <Link to="/admin/syllabus">
        <li>
          <WorkIcon className='icon'/>
          <span>Syllabus</span>
        </li>
        </Link>

        <Link to="/admin/payments">
        <li>
          <PaymentIcon className='icon'/>
          <span>Payments</span>
        </li>
        </Link>

        <Link to="/admin/placements">
        <li>
          <CodeIcon className='icon'/>
          <span>Placements</span>
        </li>
        </Link>

        <Link to="/admin/posts">
        <li>
          <PostAddIcon className='icon'/>
          <span>Posts</span>
        </li>
        </Link>

        <li>
          <ExitToAppIcon className='icon'/>
          <button onClick={onLogout} className="but">
           Logout  
          </button> 
        </li></ul></div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>

        color options</div>
    </div>
    
  )
}

export default Sidebar