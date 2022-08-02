import './Reviewer.scss'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react'
import * as api from '../../../api/staff'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '70px'
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'white',
      lineHeight: '5px',
      display: 'grid',
      marginLeft: '10px'
    },
    propic: {
      height: '200px',
      width: '250px',
      paddingLeft: '20px'
    },
    names: {
      marginTop: '20px',
      color: 'black',
      fontSize: '15px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    namess: {
      marginTop: '20px',
      color: 'black',
      fontSize: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
    }
  }));

  

const Reviewer = () => {
  const classes = useStyles();
    const [Fulldata, setFulldata] = useState({loading:false,done:false})
    const { staff } = useSelector((state) => state.staffauth);
  
  
    const {token}=staff?staff:"";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    useEffect(() => {
      !Fulldata.done && fetchReviewers()
    }, [])
  
  const fetchReviewers= async()=>{
    setFulldata((prev)=>({ ...prev, loading: true}))
    try {
      const {data}=await api.viewReviewer(config);
      if (data?.reviewer) {
      setFulldata((prev)=>({
         ...prev,
         reviewer:data['reviewer'], 
         loading: false, 
         done: true}));
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log("reviewers", Fulldata.reviewer)
  let mygroup = Fulldata.reviewer ? Fulldata.reviewer : [];
  
  function FormRow() {
    return (
      <React.Fragment>
        {mygroup.map((item)=>(
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src={item.pic} className={classes.propic} />
            <span className={classes.namess}>{item.name}</span>
            <span className={classes.names}>{item.company}</span>
            <span className={classes.names}>{item.designation}</span>
            <span className={classes.names}>{item.email}</span>
            <span className={classes.names}>{item.mobile}</span>

          </Paper>
        </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
<div className='reviewergroup'>
      <div className="title">
        <span>Reviewers</span>
        <Link to="/staff/reviewer/new">
          <button className='addreviewer'>Add Reviewer</button>
        </Link>
      </div>
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


export default Reviewer