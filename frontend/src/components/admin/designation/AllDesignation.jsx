import React from 'react'
import { Link } from 'react-router-dom'
import { reset, allDesignations}  from '../../../features/admin/designation/addDesignationSlice'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Spinner'
import { toast } from 'react-toastify'
import './AllDesignation.scss'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black'
  },
}));


 const Designation = () => {

  const classes = useStyles();


  // const classes = useStyles();

  const dispatch=useDispatch()
  const [Designation, setDesignation] = useState()
   const {designation, isLoading, isSuccess, isError, message} = useSelector((state) => state.allDesignations);

   useEffect(() => { 
    if (isError) {
      toast.error(message || 'Not Found');
    }

    if (isSuccess && designation) {
      setDesignation(designation)
    }
    
    dispatch(reset());
  }, [designation,isSuccess, isError, message, dispatch]);

  // console.log("sabbbbbb", designation.designation);

  const rows = Designation ? Designation?.designation : [];

  function FormRow() {
    return (
      <React.Fragment>
        {rows.map((item)=>(
        <Grid item xs={4}><Link to={`/admin/designations/${item._id}`}>
          <Paper className={classes.paper}>{item.designame}</Paper></Link>
        </Grid>
        ))}
      </React.Fragment>
    );
  }
  
   return (   
     
  <div className= {classes.root}>
  <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow></FormRow> 
        </Grid>
  </Grid>
  </div>
  ) 
}

export default Designation




