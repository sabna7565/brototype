import './Datable.scss'
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { reset } from '../../../../features/admin/users/getUsersSlice'
import Spinner from '../../../Spinner'
import  { removeUser } from '../../../../features/admin/users/getUsersSlice'

function DataTable () {
  // const label = { inputProps: { 'aria-label': '' }};
  const [User, setUser] = useState([])

  const dispatch = useDispatch()
  
  const { users, isLoading, isError, isSuccess, message} = useSelector((state) => state.fetchUsers);

  useEffect(() => {
    if (isError) {
      toast.error(message || "Not Found");
      return
    }

    if (isSuccess && users) {
      setUser(users.users)
    }

    dispatch(reset());
  }, [users, isError, isSuccess, message, dispatch]);

    if (isLoading) {
      return <Spinner />
    }

    const columns = [
      { field: 'no', headerName: 'No', width: 50, color: 'black' },
      // { field: '_id', headerName: 'User-ID', width: 150 },
      { field: 'name', headerName: 'Name', width: 150, 
        // renderCell:(params)=>{
        //   return(
        //     <div className="username">
        //       <img src="" alt="" className="userImg" />
        //       {params.row.name}
        //     </div>
        //   )
        // }
      },
      { field: 'batch', headerName: 'Batch', width: 150 },
      // { field: 'qualification', headerName: 'Qualification', width: 150 },
      // { field: 'adhar_no', headerName: 'Adhar No', width: 150 },
      // { field: 'address', headerName: 'Address', width: 200 },
      { field: 'email', headerName: 'Email', width: 150 },
      { field: 'mobile', headerName: 'Mobile', width: 150 },
      { field: 'action', headerName: 'Action', width: 180, renderCell:(params)=>{
        return(

            <div className="cellAction">
              <Link to={`/admin/users/${params.id}`}>
                <button className="stviewButton" id={params.id ? params.id:""}><span className='vsspan'>View</span></button>
                </Link>
                <Link to="" style={{ textDecoration: "none" }}>
                <button onClick={()=>{dispatch(removeUser(params.id))}} className="deleteButton">Delete</button>
                </Link>
            </div>
        )
    } }

    ];
    const rows = User ? User : '';
  
    
  return (
    <div style={{ height: 400, width: '100%', color: 'black' }} className='datable'>
         <DataGrid
        rows={rows}
        columns={columns}
        getRowId = {(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  )
}
 
export default DataTable