import './List.scss'
import DataTable from '../../../components/admin/students/datable/Datable'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react';
import { getUsers } from '../../../features/admin/users/getUsersSlice'

const List = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getUsers())
 },[dispatch]);
 
  return (
    <div className='list'>
        
        <div className="listContainer">
        
         <div className="studtitle">
         <h1 className='title'>Student List</h1>
         </div>
         <DataTable className="studdatatable"/>
        </div>
    </div>
  )
}

export default List