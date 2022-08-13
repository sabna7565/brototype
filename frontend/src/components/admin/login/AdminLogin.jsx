import React, {useState, useEffect} from 'react'
import './login.scss'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {adminlogin, adminreset} from '../../../features/admin/auth/adminAuthSlice'
import Spinner from '../../Spinner'

function AdminnLogin() {
        const [formData, setFormData] = useState({
            email: '',
            password: '',
           
        })
    
        console.log("formdata",formData);
        const { email, password } = formData
    
        const navigate = useNavigate()
        const dispatch = useDispatch()

        const {admin, isLoading, isError, isSuccess, message} = useSelector((state) => state.adminauth)

        useEffect(() => {
            if(isError) {
               toast.error(message)
            }
      
            if(isSuccess && admin) {
               navigate('/admin/admindashboard')
            }
      
            dispatch(adminreset())
      
          }, [admin, isLoading, isError, isSuccess, message, navigate, dispatch])
      

        const onChange = (e) => {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))
        }
    
    const onSubmit = (e) => {
        e.preventDefault()

        const adminData = {
            email, password
        }

        dispatch(adminlogin(adminData))
    }
    
    if(isLoading) {
        return <Spinner />
    }

      return <>
        <div className="forheading">
        <section className='heading'>
           <h1>
             Admin Login
           </h1> 
           <p>Enter your credentials</p>
        </section>
        </div>
        <section className='form'>
            <form onSubmit={onSubmit}>
            
                <div className='form-group'>
                   <input type="email" className="form-control" id="email" name='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className='form-group'>
                   <input type="password" className="form-control" id="password" name='password' value={password} placeholder='Enter your password' onChange={onChange} />
                </div>
              
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Login</button>
                </div>
            </form>
        </section>
      </>
    
    }
    
export default AdminnLogin