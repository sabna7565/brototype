import './Batchreview.scss'
import {Link, useNavigate, useParams} from "react-router-dom"


const Batchreview = () => {
  return (
    <div className='staffsinglereview'>
      <div className="title">
        <span>Review</span>
        {/* <Link to="/staff/group/new"> */}
            <button className='addgrp'>Back</button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Batchreview