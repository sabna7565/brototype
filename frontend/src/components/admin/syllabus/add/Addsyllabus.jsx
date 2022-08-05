import React from 'react'
import './Addsyllabus.scss'
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import * as api from '../../../../api/admin'

const Addsyllabus = () => {

  const rows = [
    {week: 'week1',},{week: 'week2',},{ week: 'week3',},{ week: 'week4',},
    {week: 'week5',},{week: 'week6',},{ week: 'week7',},{ week: 'week8',},
    {week: 'week9',},{week: 'week10',},{ week: 'week11',},{ week: 'week12',},
    {week: 'week13',},{ week: 'week14',},
    {week: 'week15',},{ week: 'week16',},
    {week: 'week17',},{ week: 'week18',},
    {week: 'week19',},{ week: 'week20',},
    {week: 'week21',},{ week: 'week22',},
    {week: 'week23',},{ week: 'week24',},
  ];

  const navigate = useNavigate()
 
  const [inputFields, setInputFields] = useState([
    { qtype: '', question: '' },
  ])

  const [formData, setFormData] = React.useState({
    domain:'', week:'',
  })

  const { domain, week } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const Data = {
      domain: domain,
      week: week,
      formFields: inputFields
    }
    try {        
        const { data } = await api.addSyllabus(Data);
        if (data) {
          navigate('/admin/syllabus') 
        }
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, {qtype: '', question: ''} ])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values)
  }
  return (
    <div className='addsyllabus'>
    <section className="get-in-touch">
    <h4 className="title">Add Curriculum</h4>
    <form className="contact-form row" onSubmit={handleSubmit}>
       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='domain' onChange={onChange} required placeholder='domain name' />
          {/* <label className="label" for="name">Branch Name</label> */}
       </div>
       <div className="form-field col x-100" >
        <select name="week" id="" className="input-text js-input" onChange={onChange} >
          <option value="">Select Week</option>
          {rows?.map((row) => (
            <option value={row.week}>{row.week}</option>
            ))} 

        </select>
      </div>
       
      
            {inputFields.map((inputField, index) => (
              <>
              <div className="form-field col x-80" key={index} style={{display: 'flex',}}>
              {/* <input type="text" name='type' placeholder='enter the type' value={inputField.type} onChange={event => handleChangeInput(index, event)} /> */}
              <select name="qtype" id="" className="input-text js-input" value={inputField.qtype} onChange={event => handleChangeInput(index, event)}>
                <option value="">Select Type</option>
                <option value="personal">Personal</option>
                <option value="technical">Technical</option>
                <option value="miscellaneous">Miscellaneous</option>

              </select>
              <div className="buttn" style={{display: 'flex',}}>
              <IconButton style={{color: 'white', backgroundColor: 'black', width: '50px', justifyContent:'center', alignItems: 'center', marginLeft:'45%'}}
              onClick={() => handleRemoveFields(index)}>
                  <RemoveIcon />
                </IconButton>

                <IconButton style={{color: 'white', backgroundColor: 'black', width: '50px', justifyContent:'center', alignItems: 'center', marginLeft:'45%'}}
                onClick={() => handleAddFields()}>
                  <AddIcon />
                </IconButton>
              </div></div>
              
              <div className="form-field col x-100" key={index}>
              <textarea type="text" name='question' placeholder='enter the question' value={inputField.question} onChange={event => handleChangeInput(index, event)}/>
              </div>
              
              </>
             )) }
      


      {/* <div className="form-field col x-100">
          <div className="viewsimg">
             {branch_image ? (
               <img src = {URL.createObjectURL(branch_image)} className="viewbranchimg" />
               ) : (
                  <img src={def} className="viewbranchimg" />
               )} 
          </div>
          <input id="image" className="input-file js-input" type="file" enctype="multipart/form-data" name='attachment' required />
           
       </div>*/}


       <div className="form-field col x-100 align-center">
          <input className="submit-btn" onClick={handleSubmit} type="submit" value="Submit" />
       </div>
    </form>
 </section>
 </div>
    
  )
}

export default Addsyllabus