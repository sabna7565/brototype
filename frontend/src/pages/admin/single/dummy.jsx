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





// .single{
//   display: flex;
//   width: 100%;

//   .singleContainer{
//       flex: 6;

//       .top{
//           padding: 20px;
//           display: flex;
//           gap: 20px;

//           .left{
//               flex: 3;
//               padding: 20px;
//               -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
//               box-shadow: 2px 4px 10px 1px rgba(122, 117, 117, 0.47);
          

//               .title{
//                   font-size: 25px;
//                   align-items: center;
//                   text-decoration: underline;
//                   margin-left: 45%;
//               }

//               .item{
//                   display: flex;
//                   gap: 20px;

//                   .userImg{
//                       width: 300px;
//                       height: 300px;
//                       border-radius: 50%;
//                       border-color: rgb(0, 0, 0);
//                       border: 10px;
//                       object-fit: cover;
//                   }

//                   .details{
//                       padding: 18px;

//                       .username{
//                           margin-bottom: 10px;
//                           color: rgb(116, 113, 113);
//                       }

//                       .detailItem{
//                           margin-bottom: 10px;
//                           font-size: 14px;

//                           .itemKey{
//                               color: rgba(0, 0, 0, 0.801);
//                               font-weight: bold;
//                               margin-right: 10px;
//                           }

//                           .itemValue{
//                               font-weight: 300;
//                               color: black;
//                           }
//                       }
//                   }
//               }
//           }

//           .right{
//               flex: 1;
//               padding: 20px;
//               margin-top: 20px;
//               -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
//               box-shadow: 2px 4px 10px 1px rgba(122, 117, 117, 0.47);

//               .userImg{
//                   width: 300px;
//                   height: 100%;
//                   border-radius: 1%;
//                   border-color: rgb(0, 0, 0);
//                   border: 10px;
//                   object-fit: cover;
//               }
//          }
//       }
  

//   .bottom{
//       padding: 20px;
//       -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
//       box-shadow: 2px 4px 10px 1px rgba(122, 117, 117, 0.47);
//       margin: 20px;
//   }

//   .title{
//       font-size: 16px;
//       color: rgb(19, 18, 18);
//       margin-bottom: 20px;
//    }
//  }   
// }