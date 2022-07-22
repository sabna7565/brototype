import React from 'react'
import { Link } from 'react-router-dom'
import './Addbranch.scss'
import { UploadImage } from '../../../../utilities/cloudinaryupload'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addBranch, reset } from '../../../../features/admin/branch/addBranchSlice'
import { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import def from '../../../../images/broto.png'

const Addbranch = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [branch_image, setImage] = useState(null);

   const { branch, isError, isSuccess, isLoading, message } = useSelector((state) => state.allBranchs)

   useEffect(() => {
      if (isError) {
         toast.error(message || 'Not Found');
       }

       if (isSuccess) {
         navigate('/admin/branch')
      }

      dispatch(reset())
   }, [isError, isSuccess, isLoading, message])



   const onChangeImage = (event) => {
      if(event.target.files && event.target.files[0]) {
         let img = event.target.files[0]
         setImage(img)
      }
   }

   const [formData, setFormData] = useState({
      branch_name: '', location:'', address:'', branch_image:'',
   })
   const [Loading, setIsLoading] = useState(false);

   const onChange = (e) => {
      setFormData ((prev) => ({
         ...prev,
         [e.target.name] : e.target.value,
      }))
   }
   
   const onSubmit = async (e) => {
      e.preventDefault()
      if(!branch_image) {
         // if (isError) {
         //    toast.error(message || 'Images not selected');
         //  }
         alert('no images selected')

      } else {
         setIsLoading(true)
         const data = await UploadImage(branch_image)
         console.log("data",data)
         formData.branch_image = data.secure_url.toString()
         dispatch(addBranch(formData))
         setIsLoading(false)
      }
   }

  return (
    <div className='addbranch'>
    <section className="get-in-touch">
    <h4 className="title">Add Branch</h4>
    <form onSubmit={onSubmit} className="contact-form row">
       <div className="form-field col x-50">
          <input id="name" className="input-text js-input" type="text" name='branch_name' required placeholder='name' onChange={onChange} value={formData.name} />
          {/* <label className="label" for="name">Branch Name</label> */}
       </div>
       <div className="form-field col x-50" >
        <select name="location" id="" className="input-text js-input" onChange={onChange} value={formData.location}>
            <option value="">Select Location</option>
            <option value="ernakulam">Ernakulam</option>
            <option value="calicut">Calicut</option>
            <option value="trivandrum">Trivandrum</option>

        </select>

          {/* <input id="email" className="input-text js-input" type="email" required /> */}
       </div>
       <div className="form-field col x-100">
          <textarea id="message" className=" js-input" type="text" name='address' required  placeholder='Enter Address' onChange={onChange} value={formData.address}/>
          {/* <label className="label" for="message">Address</label> */}
       </div>

      

       <div className="form-field col x-100">
          <div className="viewsimg">
            {branch_image ? (
               <img src = {URL.createObjectURL(branch_image)} className="viewbranchimg" />
               ) : (
                  <img src={def} className="viewbranchimg" />
               )}
          </div>
          <input id="image" className="input-file js-input" type="file" name='branch_image' onChange={onChangeImage}
         //   value={formData.branch_image} 
           required />
           
       </div>


       <div className="form-field col x-100 align-center">
          <input className="submit-btn" type="submit" value="Submit" />
       </div>
    </form>
 </section>
 </div>
  )
}


export default Addbranch