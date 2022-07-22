import React from 'react'
import './Viewbranch.scss'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { singleBranch, reset } from '../../../features/admin/branch/addBranchSlice';
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    height: 'aut0',
    width: '260px',
    lineHeight: '28px',
    gap: '10px',
    backgroundColor: 'rgb(245, 237, 237)',
    WebkitBoxShadow: '2px 4px 10px 1px rgba(2, 2, 2, 4.47) ',
    boxShadow: '2px 4px 10px 1px rgb(7, 7, 7)',
  },
  viewimg:{
    width: '240px',
    height: '150px'
  },
  headnames: {
    color: 'black',
    fontSize: '40px'
  },
  location: {
    color: 'black',
    fontSize: '20px',
    lineHeight: '1px'
  },
  second: {
    color: 'black',
    fontSize: '15px'
  },
}));


const Viewbranch = () => {
  const locname = useParams()
  const classes = useStyles();
    const dispatch = useDispatch();

    const [SBranch, setSBranch] = useState()
    const {branch, isLoading, isSuccess, isError, message} = useSelector((state) => state.allBranchs);
  
    useEffect(() => {
        dispatch(singleBranch(locname.location))
        dispatch(reset());
      }, []);
    
      console.log("first effect", branch);

    useEffect(() => {
     if (isError) {
    toast.error(message || 'Not Found');
  }

  if (isSuccess && branch) {
      setSBranch(branch)
      console.log("single before effect", branch);
  }
  
  dispatch(reset());
  },[branch, isSuccess, isError, message, dispatch]);

console.log("branch second effect", branch)
  const rows = SBranch ? SBranch?.branch : [];
     console.log("single branch", rows)
     function FormRow() {
      return (
        <React.Fragment>
        {rows.map((item)=>(  
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={item.branch_image} className={classes.viewimg}/>
              <h1 className={classes.headnames}>{item.branch_name}</h1>
              <h1 className={classes.location}>{item.location}</h1>
              <h1 className={classes.second}>{item.address}</h1>

            </Paper>
          </Grid>
           ))} 
        </React.Fragment>
      );
    }

  return (
    <div className='singlebranchs'>
      <div className= {classes.root}>
    <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
        <FormRow></FormRow> 
        </Grid>
        </Grid>
    </div>
    </div>

  )
}

export default Viewbranch