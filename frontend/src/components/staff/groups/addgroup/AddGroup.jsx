import { useDispatch, useSelector } from 'react-redux'
import './AddGroup.scss'
import { useEffect, useState } from 'react'
import * as api from '../../../../api/staff'
import {createGroup, sreset } from '../../../../features/sauth/sauthSlice'
import {Link, useNavigate} from "react-router-dom"
import React from 'react'
import { toast } from 'react-toastify'
import Spinner from '../../../Spinner';

const AddGroup = () => {
    const [Fulldata, setFulldata] = useState({loading:false,done:false})
    const [Staffdata, setStaffdata] = useState({loading:false,done:false})
  
    useEffect(() => {
        !Fulldata.done && fetchAllBatchs()
      }, [])

    const fetchAllBatchs= async()=>{
      setFulldata((prev)=>({ ...prev, loading: true}))
      try {
        const {data}=await api.viewBatchs();
        if (data?.batch) {
        setFulldata((prev)=>({
           ...prev,
           batch:data['batch'],
           loading: false, 
           done: true}));
        }
      } catch (error) {
        console.log(error)
      }      
    }
    let batc = Fulldata.batch ? Fulldata.batch : [];

    // const batc = Batch ? Batch : '';
    
    console.log("batch", batc)
    useEffect(() => {
        !Staffdata.done && fetchAllStaffs()
      }, [])

    const fetchAllStaffs= async()=>{
      setStaffdata((prev)=>({ ...prev, loading: true}))
      try {
        const {data}=await api.viewStaffs();
        if (data?.staff) {
          setStaffdata((prev)=>({
           ...prev,
           staff:data['staff'], 
           loading: false, 
           done: true}));
        }
      } catch (error) {
        console.log(error)
      }
    }    

    const staf = Staffdata.staff ? Staffdata.staff : [];
    // const staf = Staff ? Staff : '';
    console.log("staff", staf)

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {staff, isLoading, isError, isSuccess, message} = useSelector((state) => state.staffauth)

    const [formData, setFormData] = React.useState({
      batch:'', domain:'', advisor:'', 
    })
  
    const {batch, domain, advisor,  } = formData;
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const onSubmit=(e)=>{
      e.preventDefault();
      const groupData = {
        batch, domain, advisor,
      };
        dispatch(createGroup(groupData));
        console.log("submi", groupData)
    }
  
    useEffect(() => {
      if (isError) {
        toast.error(message || 'Not Found');
        return;
      }
  
    //   if(isSuccess && staff) {
    //     navigate('/staff/group')
    //  }
  
      dispatch(sreset());
    }, [staff, isError, isSuccess, message, dispatch]);
  
    if (isLoading) {
      return <Spinner />
    }


  return (
    <div>
         <div className="containers">  
  <form id="contact" onSubmit={onSubmit}>
    <h3>Add Group</h3>
  
    <fieldset>
      <select name='batch' value={batch} onChange={onChange} tabindex="2" required>
      <option value=" ">select batch</option>
      {batc?.map((row) => (
         <option value={row.batch}>{row.batch}</option> 
        ))} 
      </select>
    </fieldset>
    <fieldset>
      <select  name='domain'  onChange={onChange}   tabindex="1" required >
      <option value=" ">select Domain</option>
      <option value="mern">MERN</option>
      <option value="python">Python</option>
      <option value="flutter">Flutter</option>

        </select>
    </fieldset>
    <fieldset>
      <select name='advisor' value={advisor} onChange={onChange} tabindex="2" required>
      <option value=" ">select Advisor</option>
      {staf?.map((rows) => (
         <option value={rows.fname}>{rows.fname}</option> 
        ))} 
      </select>
    </fieldset>
    
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

    </div>
  )
}

export default AddGroup