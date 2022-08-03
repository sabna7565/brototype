import './Addsyllabus.scss'
import {Link} from "react-router-dom"


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
  return (
    <div className='addsyllabus'>
    <section className="get-in-touch">
    <h4 className="title">Add Syllabus</h4>
    <form className="contact-form row">
       <div className="form-field col x-100">
          <input id="name" className="input-text js-input" type="text" name='domain_name' required placeholder='domain name' />
          {/* <label className="label" for="name">Branch Name</label> */}
       </div>
       <div className="form-field col x-100" >
        <select name="week" id="" className="input-text js-input" >
          <option value="">Select Week</option>
          {rows?.map((row) => (
            <option value={row.week}>{row.week}</option>
            ))} 

        </select>
      </div>
       

      

       <div className="form-field col x-100">
         {/* <div className="viewsimg">
             {branch_image ? (
               <img src = {URL.createObjectURL(branch_image)} className="viewbranchimg" />
               ) : (
                  <img src={def} className="viewbranchimg" />
               )} 
          </div>*/}
          <input id="image" className="input-file js-input" type="file" name='attachment' required />
           
       </div>


       <div className="form-field col x-100 align-center">
          <input className="submit-btn" type="submit" value="Submit" />
       </div>
    </form>
 </section>
 </div>
    
  )
}

export default Addsyllabus