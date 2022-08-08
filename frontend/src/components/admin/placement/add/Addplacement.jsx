import './Addplacement.scss'
import def from '../../../../images/user/noprofile.png'
import * as api from '../../../../api/admin'
import {Link, useNavigate} from "react-router-dom"
import React from 'react';
import { useState } from 'react';
import { UploadImage } from '../../../../utilities/cloudinaryupload';


const Addplacement = () => {
    const navigate = useNavigate()
   
    const [photo, setImage] = useState(null);


const [formData, setFormData] = React.useState({
    name:'', batch:'', domain:'', company:'', designation:'',  lpa:'', photo:'', 
})

const { name, batch, domain, company, designation,  lpa,  } = formData;

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

const onChangeImage = (event) => {
    if(event.target.files && event.target.files[0]) {
       let img = event.target.files[0]
       setImage(img)
    }
 }

const onSubmit= async(e)=>{
  e.preventDefault();
  if(!photo) {
   alert(' no pic selected')
  }else{
   const picdata = await UploadImage(photo)
  console.log("data",picdata)
  formData.photo = picdata.secure_url.toString()
  if(formData.photo) {
  let data = await api.addPlacement(formData);
  console.log("hfdhf", data)
     if (data) {
       navigate('/admin/placements') 
     }
    
  }  
 }
}
  return (
    <div className='addplacement'>
    <section className="get-in-touch">
    <h4 className="title">Add Curriculum</h4>
    <form className="contact-form row" onSubmit={onSubmit}>
       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='name' onChange={onChange} required placeholder='student name' />
       </div>

       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='batch' onChange={onChange} required placeholder='batch name' />
       </div>
       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='domain' onChange={onChange} required placeholder='domain name' />
       </div>
       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='company' onChange={onChange} required placeholder='company name' />
       </div>
       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='designation' onChange={onChange} required placeholder='student designation' />
       </div>
       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='lpa' onChange={onChange} required placeholder='student salary' />
       </div>
             
       <div className="form-field col x-100">
          <div className="viewsimg">
             {photo ? (
               <img src = {URL.createObjectURL(photo)} className="viewbranchimg" />
               ) : (
                  <img src={def} className="viewbranchimg" />
               )} 
          </div>
          <input id="image" className="input-file js-input" type="file" encType="multipart/form-data" name='photo' onChange={onChangeImage} required />
           
       </div>


       <div className="form-field col x-100 align-center">
          <input className="submit-btn"  type="submit" value="Submit" />
       </div>
    </form>
 </section>
 </div>
  )
}


export default Addplacement