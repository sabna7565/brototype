import './New.scss';
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import Sabna from '../../../images/admin/sabna.jpeg'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { useState } from 'react';

const New = ({inputs, title}) => {

  const [file, setFile] = useState(" ");

  console.log(file)

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top"><h1> Add new Staff</h1></div>
        <div className="bottom">
          <div className="left">
          <img src={Sabna} alt="" className="Img" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>Image: <InsertDriveFileIcon className='icon'/>Staff Name</label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{ display: "none" }}/>
              </div>
              <div className="formInput">
                <label >Staff Name</label>
                <input type="text" placeholder='enter staff name'/>
              </div>
              <div className="formInput">
                <label >Designation</label>
                <input type="text" placeholder='enter staff designation'/>
              </div>
              <div className="formInput">
                <label >Qualification</label>
                <input type="text" placeholder='enter staff qualification'/>
              </div>
              <div className="formInput">
                <label >Email</label>
                <input type="email" placeholder='enter staff email'/>
              </div>
              <div className="formInput">
                <label >Contact Number</label>
                <input type="number" placeholder='enter staff contact number'/>
              </div>
              <div className="formInput">
                <label >Password</label>
                <input type="text" placeholder='enter staff password'/>
              </div><br></br>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New