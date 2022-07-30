import './UserLayout.scss'
import Sidebar from '../../components/user/sidebar/Sidebar'
import Header from '../../components/home/header/Header'

const UserLayout = ({children}) => {
  return (
    <div className='grid'>
     <div className='header'>
        <Header />
         </div>
        <div className="ubody">
        <div className="uhomeSidebar">
         <Sidebar />
         </div>
         <div className="ucontents">
            {children}
         </div>
         <div className="chat">
          hii
        </div>
        </div>
    </div>
  )
}

export default UserLayout