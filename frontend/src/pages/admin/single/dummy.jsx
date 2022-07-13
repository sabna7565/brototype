import './Single.scss'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import Sabna from '../../../images/admin/sabna.jpeg'
 

function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <h1 className="title">User Details</h1>
          <div className="item">
            <img src={Sabna} alt="" className="userImg" />
            <div className="details">
              <h1 className="username">Sabna</h1>
              <div className="detailItem">
                <span className="itemKey">Domain : </span>
                <span className="itemValue">MERN</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Date of Birth : </span>
                <span className="itemValue">22/04/1997</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Gender : </span>
                <span className="itemValue">Female</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Contact : </span>
                <span className="itemValue">8157037565</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Email : </span>
                <span className="itemValue">sabna@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="right"></div> */}
      </div>
      <div className="bottom">
      <h1 className="title">Review Details</h1>
      </div>
      </div>
    </div>
  )
}

export default Single