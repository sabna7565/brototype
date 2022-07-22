import React from 'react'
import './Addbatch.scss'
import { useDispatch, useSelector } from 'react-redux'
import { registerBatch, reset } from '../../../../features/admin/batch/getBatchsSlice'
import Spinner from '../../../Spinner'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'


 const Addbatch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    batch_name:'', location:'', advisor:'', starting:'',
  })

  const {batch_name, location, advisor, starting, } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    const batchData = {
      batch_name, location, advisor, starting
    };
  dispatch(registerBatch(batchData));
  
  }
  const {batch, isLoding, isSuccess, isError, message } = useSelector((state) => state.allBatchs);


  useEffect(() => {
    if (isError) {
      toast.error(message || 'Not Found');
      return;
    }

    if(isSuccess && batch) {
      navigate('/admin/batch')
   }

    dispatch(reset());
  }, [batch, isError, isSuccess, message, dispatch]);

  if (isLoding) {
    return <Spinner />
  }

  return (
    <div className='content'>
      <div className="containers">  
  <form id="contact" onSubmit={onSubmit}>
    <h3>Add Batch Details</h3>
    <fieldset>
      <input placeholder="Batch name" name='batch_name' value={batch_name} onChange={onChange} type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <select name='location' value={location} onChange={onChange} tabindex="2" required>
        <option value="ernakulam">Ernakulam</option>
        <option value="calicut">Calicut</option>
        <option value="trivandrum">Trivandrum</option>
      </select>
    </fieldset>
    <fieldset>
      <input placeholder="Advisor name" type="text" name='advisor' value={advisor} onChange={onChange} tabindex="3" required />
    </fieldset>
    <fieldset>
      <input placeholder="starting date" type="date" name='starting' value={starting} onChange={onChange} tabindex="4" required />
    </fieldset>
    {/* <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset> */}
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
    </div>
  )
}

export default Addbatch