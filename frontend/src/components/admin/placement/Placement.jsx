import './Placement.scss'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect,useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import * as api from '../../../api/admin'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      justifyContent: 'center',
      alignItems: 'center',
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
  
  const useStyless = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Placement = () => {
    const classess = useStyless();
    
    const [Fulldata, setFulldata] = useState({loading:false,done:false})

    useEffect(() => {
      !Fulldata.done && fetchSyllabus()
    }, [])
    
    const fetchSyllabus= async()=>{
      setFulldata((prev)=>({ ...prev, loading: true}))
      try {
        const {data}=await api.viewPlacement();
        if (data?.placement) {
        setFulldata((prev)=>({
           ...prev,
           placement:data['placement'], 
           loading: false, 
           done: true}));
        }
        } catch (error) {
        console.log(error)
      }
    }
    
let placement = Fulldata.placement ? Fulldata.placement : [];


  return (
    <div className='placement'>
    <div className="heading">
    <span className='syllabustitle'>Placements</span>
   <Link to="/admin/placements/new/">
    <button className='addsyllabus'>Add Placement</button></Link>
    </div>
    <div className="table">
   <TableContainer component={Paper} className="datatable">
    <Table className={classess.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell className='tableCell'>Image</StyledTableCell>
          <StyledTableCell className='tableCell' >Name </StyledTableCell>
          <StyledTableCell className='tableCell' >Batch</StyledTableCell>
          <StyledTableCell className='tableCell'>Domain</StyledTableCell>
          <StyledTableCell className='tableCell' >Company Name </StyledTableCell>
          <StyledTableCell className='tableCell' >Position</StyledTableCell>
          <StyledTableCell className='tableCell' >LPA</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
      
      {placement?.map((row) => (
          <StyledTableRow >
            <StyledTableCell className='tableCell'>
              <img style={{width: '100px', height: '100px'}} src={row.photo}  />
            </StyledTableCell>
            <StyledTableCell className='tableCell'>{row.name}</StyledTableCell>
            <StyledTableCell className='tableCell'>{row.batch}</StyledTableCell>
            <StyledTableCell className='tableCell'>{row.domain}</StyledTableCell>
            <StyledTableCell className='tableCell'>{row.company}</StyledTableCell>
            <StyledTableCell className='tableCell'>{row.designation}</StyledTableCell>
            <StyledTableCell className='tableCell'>{row.lpa}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  </div>
  )
}

export default Placement