import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React from 'react'
import './AddDesignation.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addDesignation, reset } from '../../../../features/admin/designation/addDesignationSlice'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useEffect,useState } from 'react';


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
   modalbody: {
    background: '#EFEFEF',
    fontweight: 'bold',
    fontfamily: 'Lucida Grande sansserif',
    padding: '20px',
    color: '#333',
    fontSize: '12px',
    letterSpacing: '-1px'
   },

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
   
  },
   
  papinput: {
    fontsize: 21,
    fontWeight: 'bold',
    display: 'block',
    margin: '20px',
    outline:0,
    border:0,
    padding: '10px 10px',
    fontsize: '13px',
    width: '300px',
    borderRadius: '4px',
    boxShadow:'inset 0 0 2px rgba(0,0,0,0.5)'
  },

  desigbutton: {
    marginLeft: '35%',
    borderTop: '1px solid #d1dba2',
    background:' #6e7324',
    background: '-webkit-gradient(linear, left top, left bottom, from(#bda96e), to(#666933))',
    background: '-webkit-linear-gradient(top, #bda96e, #666933)',
    background: '-moz-linear-gradient(top, #bda96e, #666933)',
    background: '-ms-linear-gradient(top, #bda96e, #666933)',
    background: -'o-linear-gradient(top, #bda96e, #666933)',
    padding: '10px 16px',
    webkitBorderRadius: '8px',
    mozBorderRadius: '8px',
    borderRadius: '8px',
    webkitBoxShadow: 'rgba(0,0,0,0.1) 0 1px 0',
    mozBoxShadow: 'rgba(0,0,0,0.1) 0 1px 0',
    boxShadow: 'rgba(0,0,0,0.1) 0 1px 0',
    textShadow: 'rgba(0,0,0,.8) 0 1px 0',
    color: 'white',
    fontSize: '13px',
    textDecoration: 'none',
    verticalAlign: 'middle',
     width: 'auto',
     backgroundColor: 'black'
   }
}));

const AddDesignation = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const [Designation, setDesignation] = useState([])

const {designation, isLoading, isSuccess, isError, message} = useSelector((state) => state.allDesignations);

const [formData, setFormData] = React.useState({
  designame:''
});

const {designame} = formData;

useEffect(() => { 
  if (isError) {
    toast.error(message || 'Not Found');
  }

  if (isSuccess || designation) {
    setDesignation(designation.designation)
    navigate('/admin/designation')
    setOpen(false);
  }

  dispatch(reset());
}, [designation, isError, message, dispatch]);



const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name] : e.target.value,
  }));
};

const onSubmit=(e)=>{
  e.preventDefault();
  const designationData = {designame};
  dispatch(addDesignation(designationData));
}

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
  <div className={classes.modalbody}>
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={onSubmit}>
        <input type="text" name='designame' placeholder="Enter Designation" className={classes.papinput} onChange={onChange} /><br />
        {/* <input type="text" placeholder="Last Name" />  
        <input type="text" placeholder="Email"/> */}
        <input type="submit" className={classes.desigbutton}/>
        
      </form>
    </div>
  </div>
  );

  return (
    <div className='designation'> 
    <button className='addbutton' type="button" onClick={handleOpen}>
    Add Designation
  </button>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body}
  </Modal>
  </div>
  )
}

export default AddDesignation
