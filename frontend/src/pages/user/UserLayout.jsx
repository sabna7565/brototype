import './UserLayout.scss'
import Sidebar from '../../components/user/sidebar/Sidebar'
import Header from '../../components/home/header/Header'

const UserLayout = ({children}) => {
  return (
    
    <div className='ugrid'>
      <Header />
     {/* <div className='header'>
        {/* <Header /> 
         </div> */}
        <div className="ubody">
        <div className="uhomeSidebar">
         <Sidebar />
         </div>
         <div className="ucontents">
            {children}
         </div>
         
        </div>
    </div>
  )
}

export default UserLayout