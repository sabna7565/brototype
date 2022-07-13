import './Layout.scss'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import Navbar from '../../components/admin/navbar/Navbar'

const Layout = ({children}) => {
  return (
   <>
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
         <Navbar />
         <div className="contents">
            {children}
         </div>
        </div>
    </div>
   </>
  )
}

export default Layout