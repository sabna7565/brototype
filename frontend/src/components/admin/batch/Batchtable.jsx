import './Batchtable.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { reset }  from '../../../features/admin/batch/getBatchsSlice'
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import Spinner from '../../Spinner';
import { getBatchs } from '../../../features/admin/batch/getBatchsSlice'


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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const BatchTable = () => {
  const [Batch, setBatch] = useState([])

  const dispatch = useDispatch()
  const classes = useStyles();

  const { batch, isLoading, isError, isSuccess, message} = useSelector((state) => state.allBatchs);
  useEffect(() => {
  dispatch(getBatchs())
   }, [dispatch]);

   useEffect(() => {
      if (isError) {
        toast.error(message || "Not Found");
        return
      }
  
      if (isSuccess && batch) {
        setBatch(batch.batch)
      }
  
      dispatch(reset());
    }, [batch, isError, isSuccess, message, dispatch]);
  
      if (isLoading) {
        return <Spinner />
      }

 
  const rows = Batch ? Batch : ''; 
  return (
    
      <TableContainer component={Paper} className="datatable">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='tableCell'>Batch Name</StyledTableCell>
            <StyledTableCell className='tableCell' >Location </StyledTableCell>
            <StyledTableCell className='tableCell' >Advisor</StyledTableCell>
            <StyledTableCell className='tableCell' >Starting Date</StyledTableCell>
            <StyledTableCell className='tableCell' >Ending Date</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell className='tableCell'>
             
                {row.batch_name} 
              </StyledTableCell>
              <StyledTableCell className='tableCell'>{row.location}</StyledTableCell>
              <StyledTableCell className='tableCell'>{row.advisor}</StyledTableCell>
              <StyledTableCell className='tableCell'>{row.starting}</StyledTableCell>
              <StyledTableCell className='tableCell'>{row.ending}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default BatchTable