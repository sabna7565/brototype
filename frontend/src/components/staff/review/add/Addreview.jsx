import './Addreview.scss'
import * as api from '../../../../api/staff'
import { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"
import React from 'react'
import { toast } from 'react-toastify'
import Spinner from '../../../Spinner';
import { useDispatch, useSelector } from 'react-redux'
import { sreset } from '../../../../features/sauth/sauthSlice'


const Addreview = () => {
  const { batch, domain, id } = useParams()
    const [Fulldata, setFulldata] = useState({loading:false,done:false})
  
    useEffect(() => {
        !Fulldata.done && fetchAllReviewers()
      }, [])

      const { staff, isLoading, isError, isSuccess, message } = useSelector((state) => state.staffauth);

      
  const {token}=staff?staff:"";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
     };

    const fetchAllReviewers= async()=>{
      setFulldata((prev)=>({ ...prev, loading: true}))
      try {
        const {data}=await api.viewReviewer(config);
        if (data?.reviewer) {
        setFulldata((prev)=>({
           ...prev,
           reviewer:data['reviewer'],
           loading: false, 
           done: true}));
        }
      } catch (error) {
        console.log(error)
      }      
    }
    let reviewers = Fulldata.reviewer ? Fulldata.reviewer : [];

    console.log("reviewers", reviewers)


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

      const dispatch = useDispatch();
      const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    date:'', week:'', status:'', pending:'', updations:'',  reviewer:'', score:'', seminar:'', semiscore:'',
  })

  const { date, week, status, pending, updations,  reviewer, score, seminar, semiscore } = formData;
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit= async(e)=>{
    e.preventDefault();
    const reviewData = {
      date, week, status, pending, updations,  reviewer, score, seminar, semiscore
    };
    try{
    let data = await api.createReview(reviewData, config, batch, domain, id,);
      console.log("submit..", data)
      if (data) {
       navigate('/staff/review') 
      }
     } catch (error) {
      console.log(error)
    }
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
         <div className="reviewcontainers">  
  <form id="reviewcontact" onSubmit={onSubmit}>
    <h3>Add Review Details</h3>
    <fieldset>
    <input name='date' value={date} onChange={onChange} type="date"  tabindex="1" placeholder='updations' required autofocus />
    </fieldset>
    <fieldset>
      <select name='week' value={week} onChange={onChange}  tabindex="2" required>
      <option value=" ">select week</option>
      {rows?.map((row) => (
         <option value={row.week}>{row.week}</option> 
        ))} 
      </select>
    </fieldset>
    <fieldset>
    <select name="status" value={status} onChange={onChange} tabindex="1" id="" required autofocus>
        <option value="">select status</option>
        <option style={{backgroundColor: 'blue'}} value="blue">blue</option>
        <option style={{backgroundColor: 'green'}} value="green">green</option>
        <option style={{backgroundColor: 'orange'}} value="orange">orange</option>
        <option style={{backgroundColor: 'red'}} value="red">red</option>
        <option style={{backgroundColor: 'yellow'}} value="yellow">yellow</option>
        
    </select>
    </fieldset>
    <fieldset>
    <textarea name='pending' value={pending} onChange={onChange}  type="text"  tabindex="1" placeholder='pending Task' required autofocus />
    </fieldset>
    <fieldset>
    <textarea name='updations' value={updations} onChange={onChange}  type="text"  tabindex="1" placeholder='updations' required autofocus />
    </fieldset>
    <fieldset>
    <select name='reviewer' type="text" tabindex="2" required value={reviewer} onChange={onChange} >
      <option value=" ">select Reviewer</option>
         {reviewers?.map((row) => (
         <option value={row.name}>{row.name}</option> 
        ))} 
      </select>
    </fieldset>
    <fieldset>
    <input name='score' type="number" value={score} onChange={onChange} tabindex="1" placeholder='score' required autofocus />
    </fieldset>
    <fieldset>
    <input name='seminar' type="text" value={seminar} onChange={onChange} tabindex="1" placeholder='seminar topic' required autofocus />
    </fieldset>
    <fieldset>
    <input name='semiscore' type="number" value={semiscore} onChange={onChange} tabindex="1" placeholder='seminar score' required autofocus />
    </fieldset>
   
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

    </div>
  )
}


export default Addreview