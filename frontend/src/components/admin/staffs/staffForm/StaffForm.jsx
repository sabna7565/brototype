import React from 'react'
import './StaffForm.scss'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';
import PaymentIcon from '@material-ui/icons/Payment';
import EmailIcon from '@material-ui/icons/Email';
import ContactsIcon from '@material-ui/icons/Contacts';
import LockIcon from '@material-ui/icons/Lock';
import { useDispatch } from 'react-redux';
import { registerStaff } from '../../../../features/admin/staff/register/addStaffSlice'

const StaffForm = () => {
const dispatch = useDispatch();

const [formData, setFormData] = React.useState({
  fname:'', lname:'', designation:'', salary:'',
  email:'', mobile: '', password:'',
});

const {fname, lname, designation, salary, email, mobile, password} = formData;

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

const onSubmit=(e)=>{
  e.preventDefault();
  const staffData = {
    fname, lname, designation, salary, email, mobile, password
  };
dispatch(registerStaff(staffData));

}


  return (
<div className='staffform'>
  <div className="form_wrapper">
  <div className="form_container">
  
    <div className="row clearfix">
      <div className="">
        <form onSubmit={onSubmit}>
        <div className="row clearfix">
            <div className="col_half">
              <div className="input_field"> <span><AccountBoxIcon className='icon'/></span>
                <input type="text" name="fname" placeholder="First Name" required value={fname} onChange={onChange} />
              </div>
            </div>
            <div className="col_half">
              <div className="input_field"> <span><AccountBoxIcon className='icon'/> </span>
                <input type="text" name="lname" placeholder="Last Name" required value={lname} onChange={onChange} />
              </div>
            </div>
          </div>
          
          <div className="input_field"> <span><WorkIcon className='icon'/></span>
            <input type="text" name="designation" placeholder="Designation" required value={designation} onChange={onChange} />
          </div>

          <div className="input_field"> <span><PaymentIcon className='icon'/></span>
            <input type="number" name="salary" placeholder="Salary" required value={salary} onChange={onChange} />
          </div>

          <div className="input_field"> <span><EmailIcon className='icon'/></span>
            <input type="email" name="email" placeholder="Email" required value={email} onChange={onChange} />
          </div>

          <div className="input_field"> <span><ContactsIcon className='icon'/></span>
            <input type="number" name="mobile" placeholder="Mobile Number" required value={mobile} onChange={onChange} />
          </div>

          <div className="input_field"> <span><LockIcon className='icon'/></span>
            <input type="password" name="password" placeholder="Password" required value={password} onChange={onChange} />
          </div>
                
           
          <input className="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>
</div>
  )
}


export default StaffForm