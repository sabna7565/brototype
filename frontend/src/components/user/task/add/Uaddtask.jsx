import './Uaddtask.scss'
import {Link, useNavigate, useParams} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import * as api from '../../../../api/index'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Uaddtask = () => {
  const { id, domain, week } = useParams()
  const { user } = useSelector((state) => state.auth)
  const [Fulldata, setFulldata] = useState({loading:false,done:false})
  const navigate = useNavigate()

  const {token}=user?user:"";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
     };

     useEffect(() => {
      !Fulldata.done && fetchMySyllabus()
    }, [])
  
    const fetchMySyllabus = async()=>{
      setFulldata((prev)=>({ ...prev, loading: true}))
      try {
        // let datas =batchname.batch,domainname.domain
        const {data}=await api.viewSyllabus(config,domain,week);
        if (data?.smodal) {
        setFulldata((prev)=>({
           ...prev,
           smodal:data['smodal'], 
           loading: false, 
           done: true}));
        }
      } catch (error) {
        console.log(error)
      }
    }
     let modalsyllabuses = Fulldata.smodal ? Fulldata.smodal : [];

     const [inputFields, setInputFields] = useState([
      { qtype: '', question: '', description: '' },
    ])

    const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      console.log("InputFields", inputFields)
        const Data = {
        
          formFields: inputFields
      }
      try {        
          const { data } = await api.uploadTask(Data, config, id, domain, week);
          console.log("InputData", data)
          if (data) {
            navigate('/user/task') 
          }
      } catch (error) {
        console.log("error", error)
      }
    }

    const handleAddFields = () => {
      setInputFields([...inputFields, {qtype: '', question: '', description: ''} ])
    }
  
    const handleRemoveFields = (index) => {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values)
    }
  return (
    <div>
         <div className='usertask'>
    <div className="reviewtitle">
      <span>Task</span>
      {/* <Link to={`/user/task/${user._id}/${user.domain}/${user.week}`}>
        <button className='utaskaddgrp'>Upload task</button>
      </Link> */}
    </div>

      <div className='tasktable'>
    <Table striped bordered hover size="sm">
    <thead>
      <tr className='firstrow'>
        <th style={{width: '180px'}}>Type</th>
        <th>Question</th>
      </tr>
    </thead>
    <tbody>
    {
          <>
    {modalsyllabuses.curriculam?.map((ro) => (
      <>
      <tr>
        <td>{ro.qtype}</td>
        <td>{ro.question}</td>
      </tr>
      </>
       ))}
    </>
   }
    </tbody>
  </Table>
  </div>
</div> 


        <div className="userreviewcontainers">  
  <form id="reviewcontact" onSubmit={handleSubmit}>
    <h3 id='titleaddtask'>Upload Task</h3>
    {inputFields.map((inputField, index) => (
       <>
    <div className="buttn" style={{display: 'flex',}}>
              <IconButton style={{color: 'white', backgroundColor: 'black', width: '50px', justifyContent:'center', alignItems: 'center', marginLeft:'75%'}}
              onClick={() => handleRemoveFields(index)}>
                  <RemoveIcon />
                </IconButton>

                <IconButton style={{color: 'white', backgroundColor: 'black', width: '50px', justifyContent:'center', alignItems: 'center', marginLeft:'5%'}}
                onClick={() => handleAddFields()}>
                  <AddIcon />
                </IconButton>
              </div>

      
           
    <fieldset key={index}>
      <label htmlFor="" style={{marginLeft: 0}}>question type:</label>
    <input name='qtype' type="text" value={inputField.qtype} tabindex="1" placeholder='Question Type' required autofocus onChange={event => handleChangeInput(index, event)}/>
    </fieldset>
    <label htmlFor="" style={{marginLeft: 0}}>question:</label >
    <fieldset key={index}>
    <textarea name='question' value={inputField.question} type="text"  tabindex="1" placeholder='Question' required autofocus onChange={event => handleChangeInput(index, event)}/>
    </fieldset>
    <fieldset key={index}>
    <label htmlFor="" style={{marginLeft: 0}}>Description:</label>
    <textarea name='description'  type="text" value={inputField.description} tabindex="1" placeholder='description' required autofocus onChange={event => handleChangeInput(index, event)}/>
    </fieldset>
        </>
        )) }
  
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
     
    
  </form>
</div>

    </div>
  )
}

export default Uaddtask