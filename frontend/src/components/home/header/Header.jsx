import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../../../features/auth/authSlice'
import {stafflogout, sreset} from '../../../features/sauth/sauthSlice'

import './Header.scss'

function Header() {
const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state) => state.auth)
const {staff} = useSelector((state) => state.staffauth)

const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/')
}

const onsLogout = () => {
  dispatch(stafflogout())
  dispatch(sreset())
  navigate('/')
}

  return (
    <header className='headers'>
      {/* <div className="firstdiv">
      <ul className='ulli'>
          <li>about</li>
          <li>branch</li>
          <li>contact</li>
        </ul>
      </div> */}
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
             <Link to='/user'>
             <li style={{color:'white'}}>
                 Profile
              
              </li>
             </Link>  
          ) : (
          <>
          
         </>)}

         {staff ? ( 
             <Link to='/staff'>
             <li style={{color:'white'}}>
                 Profiles
              
              </li>
             </Link>  
          ) : (
          <>
          
         </>)}


          {user  ? ( 
            <li>
              <button type='button' className='btn' onClick={onLogout}>
                 Logout
                </button>  
            </li> 

            
          ) : (
          <>
          { !staff ? (
          <Link to='/login'>
            <li style={{color:'white'}}>
                Login
             
             </li>
            </Link>  

            ) : (
              <>
              </>
            )
            }
          {/* <li>
            <Link to='/register'>
               <FaUser /> Register
              </Link>  
          </li> */}
          </>)}

          {staff ? ( 
            <li>
              <button type='button' className='btn' onClick={onsLogout}>
                 Logout
                </button>  
            </li>
          ) : (
          <>
          
         </>)}
          
        </ul>
        </div>
    </header>
  )
}

export default Header