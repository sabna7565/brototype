import React from 'react'
import './Location.scss'
import { Link } from 'react-router-dom'
import Addbranch  from '../../../components/admin/branch/addbranch/Addbranch'
import Allbranch  from '../../../components/admin/branch/Allbranch'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { allBranch } from '../../../features/admin/branch/addBranchSlice'
import { useEffect } from 'react'
import Viewbranchs from '../../../components/admin/branch/Viewbranchs'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '70%',
    height: '90%',
    marginTop: '4%',
    marginLeft: '10px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// export default function SimpleModal() {
 
// }
const Location = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allBranch())
 }, [dispatch]);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const body = (
  <div style={modalStyle} className={classes.paper}>
    <Addbranch />
  </div>
);

  return (
    <div className='location'>
        
    <div className="locationContainer">
    
     <div className="locationtitle">
     <h1 className='title'>Branches</h1>
     </div>
     <div className="addlocation">
      
    <button className="viewButton"  onClick={handleOpen} >Add Branch</button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
     </div>

     <div className="body">

      <Allbranch />
   
    </div>

    <div className="second">
    <Viewbranchs />
    </div>

     {/* <DataTable className="studdatatable"/> */}
    </div>
   </div>
  )
  }




export default Location