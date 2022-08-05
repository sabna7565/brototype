import React from 'react'
import './Details.scss'
import { UploadImage } from '../../../../utilities/cloudinaryupload'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, reset } from '../../../../features/auth/authSlice'
import { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Spinner from '../../../Spinner'


const Details = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [Pproof_image, setProofImage] = useState(null);
  const [Loading, setIsLoading] = useState(false);

  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    dob : user.dob || '', age : user.age || '', gender : user.gender || '', domain: user.domain || '', father : user.father || '',
    fcontact : user.fcontact || '', mother : user.mother || '', guardian : user.guardian || '', relationship : user.relationship || '',
    address : user.address || '', village : user.village || '', taluk : user.taluk || '', qualification : user.qualification || '',
    college : user.college || '', experience : user.experience || '', company : user.company || '', designation : user.designation || '',
    proof_image : user.proof_image || '',
  })
 
  const {dob, age, domain, gender, father, fcontact, mother, guardian, relationship, address, village, taluk, 
    qualification, college, experience, company, designation, proof_image } = formData;


    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    const proofUpdation = async (proofPicture) => {
      try {
          const data = await UploadImage(proofPicture);
          setProofImage(data.secure_url.toString());
      } catch (error) {
        console.log(error)
      }
    }

  useEffect(() => {
     if (isError) {
        toast.error(message || 'Not Found');
      }

     dispatch(reset())
  }, [user, isError, isSuccess, isLoading, message, dispatch])


  const onSubmit = (e) => {
    e.preventDefault()

    const userData = { dob, age, domain, gender, father, fcontact, mother, guardian, relationship, address, village, taluk, 
      qualification, college, experience, company, designation, proof_image : Pproof_image ? Pproof_image : user.proof_image, }
      dispatch(updateUser(userData));
      
      if(userData) {
        navigate('/user')     
      }
  }



  if (isLoading) {
    return <Spinner />
  }
  
  return (
    <div >
    <span className='adddetails'>ADD DETAILS</span>
    <div className='detailsform'>
  <div className="form_wrapper">
  <div className="form_container">
  
    <div className="row clearfix">
      <div className="">
        <form onSubmit={onSubmit}>
              <div className="input_field"> <span><p>Date of Birth</p></span>
                <input type="date" name="dob" placeholder="Date of Birth" required value={dob} onChange={onChange}/>
            </div>
              <div className="input_field"> <span><p>Age</p> </span>
                <input type="number" name="age" placeholder="Age" required value={age} onChange={onChange}/>
            </div>
            <div className="input_field"> <span><p>Domain</p> </span>
            {/* <select name="domain"  id="domain" onChange={onChange}>
              <option value="mern">MERN</option>
              <option value="flutter">flutter</option>
              <option value="cybersecurity">Cyber Security</option>
              <option value="python">Python</option>
            </select> */}
                <input type="text" name="domain" placeholder="your domain" required value={domain} onChange={onChange}/>
            </div>
                    
          <div className="input_field"> <span><p>Gender</p></span>
            <input type="text" name="gender" placeholder="Gender" required value={gender} onChange={onChange} />
          </div>

          <div className="input_field"> <span><p>Father's Name</p></span>
            <input type="text" name="father" placeholder="Father's Name" required value={father} onChange={onChange} />
          </div>

          <div className="input_field"> <span><p>Father's contact</p></span>
            <input type="number" name="fcontact" placeholder="Father's contact" required value={fcontact} onChange={onChange} />
          </div>

          <div className="input_field"> <span><p>Mother's Name</p></span>
            <input type="text" name="mother" placeholder="Mother's Name" required onChange={onChange} value={mother}/>
          </div>

          <div className="input_field"> <span><p>Name of Guardian</p></span>
            <input type="text" name="guardian" placeholder="Name of Guardian" required onChange={onChange} value={guardian} />
          </div>
          <div className="input_field"> <span><p>Relationship with Guardian</p></span>
            <input type="text" name="relationship" placeholder="Relationship with Guardian" required onChange={onChange} value={relationship}/>
          </div>
          <div className="input_field"> <span><p>Address with pincode</p></span>
            <input type="text" name="address" placeholder="Address with pincode" required  onChange={onChange} value={address}/>
          </div>
          <div className="input_field"> <span><p>Village</p></span>
            <input type="text" name="village" placeholder="Village" required onChange={onChange} value={village}/>
          </div>
          <div className="input_field"> <span><p>Taluk</p></span>
            <input type="text" name="taluk" placeholder="Taluk" required onChange={onChange} value={taluk}/>
          </div>
          <div className="input_field"> <span><p>Qualificaion</p></span>
            <input type="text" name="qualification" placeholder="Qualificaion" required onChange={onChange} value={qualification}/>
          </div>
          <div className="input_field"> <span><p>Name of College</p></span>
            <input type="text" name="college" placeholder="Name of College" required onChange={onChange} value={college}/>
          </div>
          <div className="input_field"> <span><p>Work Experience(if any)</p></span>
            <input type="text" name="experience" placeholder="Work Experience" required onChange={onChange} value={experience}/>
          </div>
          <div className="input_field"> <span><p>Company Name</p></span>
            <input type="text" name="company" placeholder="Company Name" required onChange={onChange} value={company}/>
          </div>
          <div className="input_field"> <span><p>Designation</p></span>
            <input type="text" name="designation" placeholder="Designation" required onChange={onChange} value={designation}/>
          </div> 

          <div className="lasto">
          <div className="input_field"> 
          <img className='adidpic' src={Pproof_image || user.proof_image} />
          <span><p>Upload Proof</p></span></div>
            <input type="file" className='uploadid' name="proof_image"  onChange={(e) => proofUpdation(e.target.files[0])} required  />
           
          </div>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</div>
</div>
        
    </div>
  )
}

export default Details
