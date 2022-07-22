import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../../../features/auth/authSlice'
import './Header.scss'

function Header() {
const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state) => state.auth)

const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/')
}

  return (
    <header className='headers'>
      <div className="firstdiv">
      <ul className='ulli'>
          <li>about</li>
          <li>branch</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="seconddiv">
        <div className='logo'>
          <Link to='/'><h1 className='brotot'>
            <span className='bro'> BRO</span>
            <span className='type'>TOTYPE</span>
            </h1>
            <p className='quotes'>BROTHER YOU NEVER HAD</p>
            </Link>  
        </div>
        <ul className='ulli'>
          <li>about</li>
          <li>branch</li>
          <li>contact</li>
          {user ? ( 
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
                </button>  
            </li>
          ) : (
          <>
            <li>
            <Link to='/login'>
               <FaSignInAlt /> Login
              </Link>  
          </li>
          <li>
            <Link to='/register'>
               <FaUser /> Register
              </Link>  
          </li>
          </>)}
          
        </ul>
        </div>
    </header>
  )
}

export default Header