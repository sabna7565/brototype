import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../../../features/auth/authSlice'
import {stafflogout, sreset} from '../../../features/sauth/sauthSlice'
import { HashLink } from 'react-router-hash-link';


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
        <HashLink to='/#about'>
          <li><button type='button' className='hbtn'>
                 About
                </button>  </li></HashLink>
                <HashLink to='/#placement'>
                <li><button type='button' className='hbtn'>
                 Placements
                </button>  </li></HashLink>
                <HashLink to='/#branch'>
                <li><button type='button' className='hbtn'>
                 Branch
                </button>  </li></HashLink>
                <HashLink to='/#courses'>
                <li><button type='button' className='hbtn'>
                 Courses
                </button>  </li></HashLink>
                <HashLink to='/#contact'>
                <li><button type='button' className='hbtn'>
                 Contact
                </button>  </li></HashLink>
          

          {user ? ( 
             <Link to='/user'>
             <li style={{color:'white'}}>
             <button type='button' className='hbtn'>
                Profile
                </button>       
              
              </li>
             </Link>  
          ) : (
          <>
          
         </>)}

         {staff ? ( 
             <Link to='/staff'>
             <li style={{color:'white'}}>
             <button type='button' className='hbtn'>
                Profile
                </button>
              
              </li>
             </Link>  
          ) : (
          <>
          
         </>)}


          {user  ? ( 
            <li>
              <button type='button' className='ulogouthbtn' onClick={onLogout}>
                 Logout
                </button>  
            </li> 

            
          ) : (
          <>
          { !staff ? (
            <>
          <Link to='/login'>
            <li style={{color:'white'}}>
                <button className='hbtn'>Login</button>
             
             </li>
            </Link>  

            <Link to='/register'>
            <li style={{color:'white'}}>
                <button className='hbtn'>Register</button>
            
            </li>
            </Link>  
            </>
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
              <button type='button' className='logouthbtn' onClick={onsLogout}>
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