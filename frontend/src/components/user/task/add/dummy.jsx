import './Uaddtask.scss'
import {Link, useNavigate, useParams} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import * as api from '../../../../api/index'
import { useEffect, useState } from 'react'

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
  return (
    <div>
        <div className="userreviewcontainers">  
  <form id="reviewcontact" onSubmit={handleSubmit}>
    <h3 id='titleaddtask'>Upload Task</h3>
    {
          <>
    {modalsyllabuses.curriculam?.map((ro) => (
      <>
      {inputFields.map((inputField, index) => (
            <>
    <fieldset>
      <label htmlFor="" style={{marginLeft: 0}}>question type:</label>
    <input name='qtype' type="text" value={ro.qtype} tabindex="1" placeholder='Question Type' required autofocus onChange={event => handleChangeInput(index, event)}/>
    </fieldset>
    <label htmlFor="" style={{marginLeft: 0}}>question:</label>
    <fieldset>
    <textarea name='question' value={ro.question} type="text"  tabindex="1" placeholder='Question' required autofocus onChange={event => handleChangeInput(index, event)}/>
    </fieldset>
    <fieldset>
    <label htmlFor="" style={{marginLeft: 0}}>Description:</label>
    <textarea name='description'  type="text"  tabindex="1" placeholder='description' required autofocus onChange={event => handleChangeInput(index, event)}/>
    </fieldset>
        </>
        )) }
        </>
       ))}
    </>
   }
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
     
    
  </form>
</div>

    </div>
  )
}

export default Uaddtask