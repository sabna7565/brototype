import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Header from '../components/home/header/Header'
import './Register.scss'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        batch: '', 
        adhar_no: '', 
        email: '',
        mobile: '', 
        password: '',
    })
    
    const { name, batch,  adhar_no,  email, mobile, password,  } = formData

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
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

      //   if(password !== password2) {
      //     toast.error('passwords do not match')
      //   } else {
           const userData = {name, batch,  adhar_no, email, mobile, password}

           dispatch(register(userData))
       // }
    }

    if(isLoading) {
      return <Spinner />
    }

  return <>
   <Header />
    <div className="foradminheading">
    <section className='heading'>
       <h1>
        <FaUser /> Enroll Now
       </h1> 
       <p>Please create an account</p>
    </section></div>
    <div className="forform">
    <section className='fform'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
               <input type="text" className="form-control" id="name" name='name' value={name} placeholder='Enter your name' onChange={onChange} />
            </div>
            <div className='form-group'>
               <input type="text" className="form-control" id="batch" name='batch' value={batch} placeholder='Enter your batch' onChange={onChange} />
            </div>
            <div className='form-group'>
               <input type="email" className="form-control" id="email" name='email' value={email} placeholder='Enter your email' onChange={onChange} />
            </div>
            <div className='form-group'>
               <input type="number" className="form-control" id="mobile" name='mobile' value={mobile} placeholder='Enter your mobile number' onChange={onChange} />
            </div>
            <div className='form-group'>
               <input type="password" className="form-control" id="password" name='password' value={password} placeholder='Enter your password' onChange={onChange} />
            </div>
            {/* <div className='form-group'>
               <input type="text" className="form-control" id="password2" name='password2' value={password2} placeholder='Enter cofirm password' onChange={onChange} />
            </div> */}
            <div className="form-group">
                <button type="submit" className='btn btn-block'>Submit</button>
            </div>
        </form>
    </section>
    </div>
  </>

}

export default Register