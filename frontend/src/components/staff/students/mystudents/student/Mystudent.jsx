import './Mystudent.scss'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'
import * as api from '../../../../../api/staff'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useParams} from "react-router-dom"
import nopic from '../../../../../images/staff/nppic.jpg'
import noproof from '../../../../../images/staff/adharshutter.jpg'


const Mystudent = () => {
    const { batch, domain, id } = useParams()
    const [Fulldata, setFulldata] = useState({loading:false,done:false})
    const { staff } = useSelector((state) => state.staffauth);
  
  
    const {token}=staff?staff:"";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    useEffect(() => {
      !Fulldata.done && fetchMyStudent()
    }, [])
  
    const fetchMyStudent = async()=>{
      setFulldata((prev)=>({ ...prev, loading: true}))
      try {
        // let datas =batchname.batch,domainname.domain
        const {data}=await api.viewMyStudent(config,batch,domain,id);
        if (data?.users) {
        setFulldata((prev)=>({
           ...prev,
           users:data['users'], 
           loading: false, 
           done: true}));
        }
      } catch (error) {
        console.log(error)
      }
    }
     console.log("mystudent....", Fulldata.users)
    let mystudents = Fulldata.users ? Fulldata.users : [];

  return (
    <div className='staffstudent'>
        <span className="stafstudtitle">Manifest File</span>
        
        <Link to={`/staff/review/view/${mystudents.batch}/${mystudents.domain}/${mystudents._id}`}>
          <button className='addgrp'>View Reviews</button>
        </Link>
        
    <div className="studentcontent">
       <div className="first">
       <div > {mystudents.name ? <span className='details'> Name : &nbsp; {mystudents.name} </span>  :" "}</div>
         <div>{mystudents.dob ? <span className='details'> Date of Birth : &nbsp;{mystudents.dob} </span>  :" "}</div>   
        <div>{mystudents.age ? <span className='details'> Age : &nbsp;{mystudents.age} </span>  :" "}</div>   
        <div>{mystudents.gender ? <span className='details'> Gender : &nbsp;{mystudents.gender} </span>  :" "}</div>   
        <div>{mystudents.father ? <span className='details'> Father Name : &nbsp;{mystudents.father} </span>  :" "}</div>   
        <div>{mystudents.fcontact ? <span className='details'> Father's Contact : &nbsp;{mystudents.fcontact} </span>  :" "}</div>   
        <div>{mystudents.mother ? <span className='details'> Mother Name : &nbsp;{mystudents.mother} </span>  :" "}</div>   
        <div>{mystudents.guardian ? <span className='details'> Name of Guardian : &nbsp;{mystudents.guardian} </span>  :" "}</div>   
        <div>{mystudents.relationship ? <span className='details'> Relation of guardian : &nbsp;{mystudents.relationship} </span>  :" "}</div>   
        <div>{mystudents.address ? <span className='details'> Address  : &nbsp;{mystudents.address} </span>  :" "}</div> 
       </div>
       <div className="second">
        <div>{mystudents.domain ? <span className='details'> Domain  : &nbsp;{mystudents.domain} </span>  :" "}</div>   
        <div>{mystudents.email ? <span className='details'> Email : &nbsp; {mystudents.email} </span>  :" "}</div>
        <div>{mystudents.mobile ? <span className='details'> Mobile : &nbsp;{mystudents.mobile} </span>  :" "}</div>   
        <div>{mystudents.batch ? <span className='details'> Batch : &nbsp; {mystudents.batch} </span>  :" "}</div>
        <div>{mystudents.qualification ? <span className='details'> Qualification : &nbsp;{mystudents.qualification} </span>  :" "}</div>
        <div>{mystudents.village ? <span className='details'> Village : &nbsp;{mystudents.village} </span>  :" "}</div>   
        <div>{mystudents.taluk ? <span className='details'> Taluk : &nbsp;{mystudents.taluk} </span>  :" "}</div>   
        <div>{mystudents.college ? <span className='details'> College Name : &nbsp;{mystudents.college} </span>  :" "}</div>   
        <div>{mystudents.experience ? <span className='details'> Experience : &nbsp;{mystudents.experience} </span>  :" "}</div>   
        <div>{mystudents.company ? <span className='details'> Company Name : &nbsp;{mystudents.company} </span>  :" "}</div>   
        <div>{mystudents.designation ? <span className='details'> Designation : &nbsp;{mystudents.designation} </span>  :" "}</div>   
       </div>
       <div className="third">
        <div className="studpro">
        

          <img className='studproimg' src={nopic} />
        </div>
        <div className="studproof">
        {mystudents.proof_image ?
        <img style={{width: '200px'}} src={mystudents.proof_image}/> :  <img style={{width: '200px'}} src={noproof}/>   }
        </div>
        </div>  
    </div>      
    </div>
  )
}

export default Mystudent
