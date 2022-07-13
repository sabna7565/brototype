import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {adminlogout, adminreset} from '../../../features/admin/auth/adminAuthSlice'


function AdminHeader() {
const navigate = useNavigate()
const dispatch = useDispatch()
const {admin} = useSelector((state) => state.adminauth)

const onLogout = () => {
  dispatch(adminlogout())
  dispatch(adminreset())
  navigate('/admin')
}

  return (
    <header className='header'>
        <div className='logo'>
          <h1 className='brototype'>Brototype</h1>
          {/* <Link to='/'>Brototype</Link>   */}
        </div>
        <ul>
          { admin ? ( 
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
                </button>  
            </li>
          ) : (
            <>
              <li>
              <Link to='/admin'>
                 <FaSignInAlt /> Login
                </Link>  
             </li>
            </>)}
          
        </ul>
    </header>
  )
}

export default AdminHeader