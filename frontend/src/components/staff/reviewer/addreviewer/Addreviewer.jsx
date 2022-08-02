import './Addreviewer.scss'
import {createReviewer, sreset } from '../../../../features/sauth/sauthSlice'
import {Link, useNavigate} from "react-router-dom"
import React from 'react'
import { toast } from 'react-toastify'
import Spinner from '../../../Spinner';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { UploadImage } from '../../../../utilities/cloudinaryupload'

const Addreviewer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {staff, isLoading, isError, isSuccess, message} = useSelector((state) => state.staffauth)
    const [Pro_image, setProImage] = useState(null);


    const [formData, setFormData] = React.useState({
      name:'', email:'', mobile:'', company:'', designation:'',  pic :''
    })
  
    const {name, email, mobile, company, designation,  pic  } = formData;
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const proPIc = async (proPicture) => {
        try {
            const data = await UploadImage(proPicture);
            setProImage(data.secure_url.toString());
        } catch (error) {
          console.log(error)
        }
      }
  
    const onSubmit=(e)=>{
      e.preventDefault();
      const reviewerData = {
        name, email, mobile, company, designation,  pic: Pro_image ? Pro_image : '',
      };
        dispatch(createReviewer(reviewerData));
        console.log("submi", reviewerData)
    }
  
    useEffect(() => {
      if (isError) {
        toast.error(message || 'Not Found');
        return;
      }
  
    //   if(isSuccess && staff) {
    //     navigate('/staff/reviewer')
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
    <h3>Add Reviewer</h3>
  
    <fieldset>
    <input name='name' type="text" value={name} onChange={onChange} tabindex="1" placeholder='reviwer name' required autofocus />
    </fieldset>
    <fieldset>
    <input name='email' type="email"  value={email} onChange={onChange} tabindex="1" placeholder='reviwer email' required autofocus />
    </fieldset>
    <fieldset>
    <input name='mobile' type="number" value={mobile} onChange={onChange} tabindex="1" placeholder='mobile' required autofocus />
    </fieldset>
    <fieldset>
    <input name='company' type="text" value={company} onChange={onChange} tabindex="1" placeholder='company name' required autofocus />
    </fieldset>
    <fieldset>
    <input name='designation' type="text" value={designation} onChange={onChange} tabindex="1" placeholder='designation' required autofocus />
    </fieldset>
    <fieldset>
    <input name='pic' type="file" tabindex="1" onChange={(e) => proPIc(e.target.files[0])} required autofocus />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
    </div>
  )
}

export default Addreviewer