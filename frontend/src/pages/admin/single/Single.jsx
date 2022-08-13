import './Single.scss'
import SIngleUser from '../../../components/admin/students/single/SIngleUser'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getUser } from '../../../features/admin/users/single/singleUserSlice'

const Single = () => {
const userId = useParams()

 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getUser(userId.id))
 },[dispatch]);

  return (
    <div className='single'>      
      <div className="singleContainer">     
      <div className="top">
      <h1 className="title">Student Details</h1>
        <div className="manifest">
          <SIngleUser />
        </div>        
      </div>           
     
      </div>
    </div>
  )
}

export default Single