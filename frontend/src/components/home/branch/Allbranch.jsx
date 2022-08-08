import React from 'react'
import Ernakulam from '../../../images/ernakulam.png'
import Calicut from '../../../images/calicut.jpg'
import TVM from '../../../images/tvndrm.jpg'
import './Allbranch.scss'
import { Link } from 'react-router-dom'

const Allbranch = () => {
  return (
    <div className='homeallbranch'>
     <div className="left">
     <Link to={`/${'ernakulam'}`}>
      <div className="pic">
     <img src={Ernakulam} alt="" className="userImg"  /></div>
    <div className="ername"><h2 className='ernakulam'> Ernakulam</h2></div>
    </Link>
     </div>
     <div className="center">
     <Link to={`/${'calicut'}`}>
     <div className="pic">
     <img src={Calicut} alt="" className="userImg" /></div>
     <div className="ername"><h2 className='ernakulam'> Calicut</h2></div>
     </Link>
     </div>
     <div className="right">
     <Link to={`/${'trivandrum'}`}>
     <div className="pic">
     <img src={TVM} alt="" className="userImg" /></div>
     <div className="ername"><h2 className='ernakulam'> Trivandrum</h2></div>
     </Link>
     </div> 
    </div>
  )
}

export default Allbranch