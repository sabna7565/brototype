import React from 'react'
import * as api from '../../../../api/staff'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useEffect,useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

const Usertaskmodal = ({id}) => {
    const { staff } = useSelector((state) => state.staffauth);

 const {token}=staff?staff:"";
 const config = {
   headers: {
     Authorization: `Bearer ${token}`,
   },
 };

 const [open, setOpen] = React.useState(false);

 const handleClickOpen = () => {
   setOpen(true);
 };
 const handleClose = () => {
   setOpen(false);
 };

 const [Fulldatas, setFulldatas] = useState({loading:false,done:false})
    useEffect(() => {
       fetchTaskModal(id)
    }, [id])
  
    const fetchTaskModal= async(id)=>{
      setFulldatas((prev)=>({ ...prev, loading: true}))
      try {
        if(id){
          const {data}=await api.viewTask(config, id);
         console.log("hhh", data)
          if (data?.task) {
          setFulldatas((prev)=>({
             ...prev,
             task:data['task'], 
             loading: false, 
             done: true}));           
          }
        }
        } catch (error) {
        console.log(error)
      }
    }
    
    let umodaltask = Fulldatas.task ? Fulldatas.task : [];
    console.log("taskmodal", umodaltask)


  return (
    <div>
        <Button style={{width: '150px'}} variant="outlined" color="primary" onClick={handleClickOpen}>
        View Question
      </Button>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
     
        
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Questions
        </DialogTitle>
        {
          <>
          {umodaltask.curriculam?.map((ro) => (
         <>
            <DialogContent dividers>
            <Typography gutterBottom>
              Type: {ro.qtype} 
              </Typography>
              <Typography gutterBottom>
              Question: {ro.question} 
              </Typography>
              <Typography gutterBottom>
              Answer: {ro.description} 
              </Typography>
            
            </DialogContent>
         </>
        
          ))}
          </>
         }
        <DialogActions>
          
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
        
        
      </Dialog>

    </div>
  )
}

export default Usertaskmodal