import { Link } from 'react-router-dom'
import Spinner from '../../../components/Spinner'
import Header from '../../../components/home/header/Header'
import './Stlogin.scss'
import { stafflogin, sreset } from '../../../features/sauth/sauthSlice'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'


const Slogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
       
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {staff, isLoading, isError, isSuccess, message} = useSelector((state) => state.staffauth)

    useEffect(() => {
        if(isError) {
           toast.error(message)
        }
  
        if(isSuccess && staff) {
           navigate('/')
        }
  
        dispatch(sreset())
  
      }, [staff, isLoading, isError, isSuccess, message, navigate, dispatch])
  

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

const onSubmit = (e) => {
    e.preventDefault()

    const staffData = {
        email, password
    }

    dispatch(stafflogin(staffData))
}

if(isLoading) {
    return <Spinner />
}

  return (
    <div>
        <Header />
         <div className="cont">
             <div className="img">
                   <div className="img__text m--up">
                    
                       <h3>For Student Login? Click the below button!</h3>
                   </div>
                   <Link to="/login" >
                   <div className="img__btn" >
                       <span className="m--up">Sign In</span>
                   </div></Link>
               </div>
           <div className="foorm sign-in">
                <form onSubmit={onSubmit}>
               <h2>Enter Login credentials</h2>
               <label>
                   <span style={{color: 'white'}}>Email</span>
                   <input type="email" name='email' placeholder='Enter your email' value={email} onChange={onChange} />
               </label>
               <label>
                   <span style={{color: 'white'}}>Password</span>
                   <input type="password" name='password' placeholder='Enter your password' value={password} onChange={onChange} />
               </label>
               {/* <p className="forgot-pass">Forgot password?</p> */}
               
               <button type="submit" className="submit">Sign In</button>
               </form>
           </div>
           
       </div>

    </div>
  )
}

export default Slogin