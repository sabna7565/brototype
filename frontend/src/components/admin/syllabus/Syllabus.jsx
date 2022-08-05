import './Syllabus.scss'
import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { reset }  from '../../../features/admin/batch/getBatchsSlice'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import Spinner from '../../Spinner';
import {Link, useNavigate} from "react-router-dom"
import * as api from '../../../api/admin'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Syllabusmodal from './Syllabusmodal'


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

const useStyless = makeStyles({
  table: {
    minWidth: 700,
  },
});


const Syllabus = () => {
  const classess = useStyless();

  const [Fulldata, setFulldata] = useState({loading:false,done:false})

useEffect(() => {
  !Fulldata.done && fetchSyllabus()
}, [])

const fetchSyllabus= async()=>{
  setFulldata((prev)=>({ ...prev, loading: true}))
  try {
    const {data}=await api.viewSyllabus();
    if (data?.syllabus) {
    setFulldata((prev)=>({
       ...prev,
       syllabus:data['syllabus'], 
       loading: false, 
       done: true}));
    }
    } catch (error) {
    console.log(error)
  }
}

console.log("syllabus", Fulldata.syllabus)
let syllabuses = Fulldata.syllabus ? Fulldata.syllabus : [];

const [open, setOpen] = React.useState(false);
const [st, setSt] = React.useState(null);


return (
    <div className='syllabus'>
      <div className="heading">
      <span className='syllabustitle'>Syllabus</span>
     <Link to="/admin/syllabus/new/">
      <button className='addsyllabus'>Add Syllabus</button></Link>
      </div>
      <div className="table">
     <TableContainer component={Paper} className="datatable">
      <Table className={classess.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='tableCell'>Domain</StyledTableCell>
            <StyledTableCell className='tableCell' >Week </StyledTableCell>
            <StyledTableCell className='tableCell' >Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {syllabuses?.map((row) => (
            <StyledTableRow >
              <StyledTableCell className='tableCell'>
                {row.domain} 
              </StyledTableCell>
              <StyledTableCell className='tableCell'>{row.week}</StyledTableCell>
              <StyledTableCell className='tableCell' onClick={()=>setSt(row._id)}>  <Syllabusmodal id = {st} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
    </div>
  )
}

export default Syllabus