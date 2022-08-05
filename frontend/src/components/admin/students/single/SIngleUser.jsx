import './SIngleUser.scss'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { reset, } from '../../../../features/admin/users/single/singleUserSlice'
import Spinner from '../../../Spinner'
import Sabna from '../../../../images/admin/sabna.jpeg'
import Adhar from '../../../../images/user/adgar2.png'


function SingleUser () {
  // const label = { inputProps: { 'aria-label': '' }};
  const [User, setUser] = useState([])

  const dispatch = useDispatch()
  
  const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.fetchUser);
  console.log("singleuser", user);

  useEffect(() => {

    if (isError) {
      toast.error(message || "Not Found");
      return
    }

    if (isSuccess && user) {
      setUser(user.user)
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

    if (isLoading) {
      return <Spinner />
    }

console.log("Second Singleuser", User);
    const rows = User ? User : '';
  
    
  return (
    <div  className='single'>
      <div className="singleCntainer">
        <div className="left">
        <img src={Sabna} alt="" className="userImg" />
        </div>
        <div className="center">
        <div > {User.name ? <span className='details'> Name : &nbsp; {User.name} </span>  :" "}</div>
        <div >{User.batch ? <span className='details'> Batch : &nbsp; {User.batch} </span>  :" "}</div>
        <div>{User.qualification ? <span className='details'> Qualification : &nbsp;{User.qualification} </span>  :" "}</div>
        <div>{User.adhar_no ? <span className='details'> Adhar_No : &nbsp;{User.adhar_no} </span>  :" "}</div>
        <div>{User.address ? <span className='details'> Address : &nbsp;{User.address} </span>  :" "}</div>
        <div>{User.email ? <span className='details'> Email : &nbsp; {User.email} </span>  :" "}</div>
        <div>{User.mobile ? <span className='details'> Mobile : &nbsp;{User.mobile} </span>  :" "}</div>   
      </div>
        <div className="right">           
        <img src={Adhar} alt="" className="userImg" />       
        </div>

      </div>
      
         
    </div>
  )
}
 
export default SingleUser