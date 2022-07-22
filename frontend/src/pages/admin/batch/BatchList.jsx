import './BatchList.scss'
import { Link } from 'react-router-dom'
import BatchTable from '../../../components/admin/batch/Batchtable'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getBatchs } from '../../../features/admin/batch/getBatchsSlice'


const Batch = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //  dispatch(getBatchs())
  // }, [dispatch]);

  return (
    <div className='stafflist'>
    <div className="stafflistContainer">
    <div className="stafftitle">
       <h1 className='title'>Batch Details</h1>
          <Link to='/admin/batch/new'>
            <button className="viewButton" >Add new batch</button>
          </Link>
       </div>
       <div className="body">
        <BatchTable />
       </div>
    </div>      
  </div>
  )
}

export default Batch