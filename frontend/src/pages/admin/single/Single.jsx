import './Single.scss'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import Sabna from '../../../images/admin/sabna.jpeg'
import Adhar from '../../../images/admin/adhar.jpeg'
import SIngleUser from '../../../components/admin/students/single/SIngleUser'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react';
import { getUsers } from '../../../features/admin/users/getUsersSlice'

const Single = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getUsers())
 },[dispatch]);


  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <h1 className="title">User Details</h1>
          <div className="item">
            <img src={Sabna} alt="" className="userImg" />
            <div className="details">
           <SIngleUser />
    
            </div>
          </div>
        </div>
        {/* <div className="right">
        <img src={Adhar} alt="" className="userImg" />
        </div> */}
      </div>
      <div className="bottom">
      <h1 className="title">Review Details</h1>
      </div>
      </div>
    </div>
  )
}

export default Single