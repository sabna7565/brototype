import './StaffTable.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { reset }  from '../../../../features/admin/staff/getStaffsSlice'
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import Spinner from '../../../Spinner';
import { removeStaff } from '../../../../features/admin/staff/getStaffsSlice'


const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      // function createData(name, starting_month, terminated, placed, total) {
      //   return { name, starting_month, terminated, placed, total};
      // }
      
const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });

const StaffTable = () => {
  //  const deleteStaff = (staffId)=>{
  //   dispatch(deleteStaff(staffId))
  //  }

  const [Staff, setStaff] = useState([])

  const dispatch = useDispatch()
  
    const classes = useStyles();
  
  const { staffs, isLoading, isError, isSuccess, message} = useSelector((state) => state.viewStaffs);
  useEffect(() => {
      if (isError) {
        toast.error(message || "Not Found");
        return
      }
  
      if (isSuccess && staffs) {
        setStaff(staffs.staffs)
      }
  
      dispatch(reset());
    }, [staffs, isError, isSuccess, message, dispatch]);
  
      if (isLoading) {
        return <Spinner />
      }

  // const columns = [
  //   { field: '', headerName: 'No', width: 50 },
  //   { field: 'name', headerName: 'Name', width: 150 },
  //   { field: 'designation', headerName: 'Designation', width: 150 },
  //   { field: 'salary', headerName: 'Salary', width: 150 },
  //   { field: 'email', headerName: 'Email', width: 150 },
  //   { field: 'mobile', headerName: 'Mobile', width: 150 },
  //   { field: 'action', headerName: 'Action', width: 150, renderCell:(params)=>{
  //     return(
  //         <div className="cellAction">
  //           <Link to={`/admin/users/${params.id}`}>
  //             <button className="viewButton" id={params.id ? params.id:""}>View</button>
  //             </Link>
  //             <button className="deleteButton">Delete</button>
  //         </div>
  //     )
  // } }
  // ];
    
  const rows = Staff ? Staff : ''; 

return (
  
<TableContainer component={Paper} className="datatable">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='tableCell'>Name</StyledTableCell>
            <StyledTableCell className='tableCell' >Designation </StyledTableCell>
            <StyledTableCell className='tableCell' >Salary</StyledTableCell>
            <StyledTableCell className='tableCell' >Email</StyledTableCell>
            <StyledTableCell className='tableCell' >Mobile</StyledTableCell>
            <StyledTableCell className='tableCell' >Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row._id}>
        {/* unique key.so give id instead of name */}
              <StyledTableCell className='tableCell'>
             
                {row.fname} {row.lname}
              </StyledTableCell>
              <StyledTableCell className='tableCell'>{row.designation}</StyledTableCell>
              <StyledTableCell className='tableCell'>{row.salary}</StyledTableCell>
              <StyledTableCell className='tableCell'>{row.email}</StyledTableCell>
              <StyledTableCell className='tableCell'>{row.mobile}</StyledTableCell>
              <StyledTableCell className='tableCell'>
                <span className={`status ${row.status}`}>

                <Link to={`/admin/staffs/${row._id}`}>
                <button className="viewButton" id={row._id ? row._id:""}>View</button>
                </Link>
                &nbsp; &nbsp;
                <button onClick={()=>{dispatch(removeStaff(row._id))}} className="deleteButton">Delete</button>
                </span>                
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default StaffTable