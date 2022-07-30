import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Header from '../components/home/header/Header'
import { Link } from 'react-router-dom'
import './Ulogin.scss'


function Login() {
        const [formData, setFormData] = useState({
            email: '',
            password: '',
           
        })
    
        const { email, password } = formData
    
        const navigate = useNavigate()
        const dispatch = useDispatch()

        const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

        useEffect(() => {
            if(isError) {
               toast.error(message)
            }
      
            if(isSuccess && user) {
               navigate('/')
            }
      
            dispatch(reset())
      
          }, [user, isLoading, isError, isSuccess, message, navigate, dispatch])
      

        const onChange = (e) => {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))
        }
    
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email, password
        }

        dispatch(login(userData))
    }
    
    if(isLoading) {
        return <Spinner />
    }

      return (
      <div>
        <Header />
        <div className="cont">
        <form onSubmit={onSubmit} >

        <div className="fform sign-in">
            <h2>Enter Login credentials</h2>
            <label>
                <span style={{color: 'white'}}>Email</span>
                <input type="email"  id="email" name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
            </label>
            <label>
                <span style={{color: 'white'}}>Password</span>
                <input type="password" id="password" name='password' value={password} placeholder='Enter your password' onChange={onChange}/>
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <button type="submit" className="submit">Sign In</button>
        </div>
        <div className="sub-cont">
            <div className="img">
                <div className="img__text m--up">
                 
                    <h3>For Staff Login? Click the below button!</h3>
                </div>
               <Link to="/slogin" >
                <div className="img__btn" >
                    <span className="m--up">Sign In</span>
                </div></Link>
            </div>
            
        </div>
        </form>

    </div>
      </div>
      )
    }
    
export default Login