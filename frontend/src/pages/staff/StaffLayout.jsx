import './StaffLayout.scss'
import Sidebar from '../../components/staff/sidebar/Sidebar'
import Header from '../../components/home/header/Header'

const StaffLayout = ({children}) => {
  return (
    
    <div className='grid'>
      <Header />
     {/* <div className='header'>
        
         </div> */}
        <div className="ubody">
        <div className="uhomeSidebar">
         <Sidebar />
         </div>
         <div className="ucontents">
            {children}
         </div>
         {/* <div className="chat">
          .
        </div> */}
        </div>
    </div>
  )
}

export default StaffLayout