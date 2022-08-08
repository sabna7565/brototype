import React from 'react'
import './Groups.scss'
import Mygroup from './mygroups/Mygroup'
import {Link, useNavigate} from "react-router-dom"


const Groups = () => {
  return (
    <div className='group'>
      <div className="title">
        <span>My Groups</span>
        <Link to="/staff/group/new">
          <button className='addgrp'>Create Group</button>
        </Link>
      </div>
      <div className="body">
      <div className="review">
        <div className="mygrpss">
          {/* <span className='text'>My Groups</span> */}
          </div>
          <Mygroup />
      </div>
      {/* <div className="casual">
        <div className="mygrpss">
          <span>Review Groups</span>
          </div> 
          <Review />
      </div> */}
     </div>
    </div>
  )
}

export default Groups