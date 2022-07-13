import './Navbar.scss'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ListIcon from '@material-ui/icons/List';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Adminlogo from '../../../images/admin/sabna.jpeg'

const Navbar = () => {
return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchIcon className='searchicon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
           <Brightness2Icon className='icon'/>
          </div>
          <div className="item">
           <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
           <NotificationsNoneIcon className='icon'/>
           <div className="counter">1</div>
          </div>
          <div className="item">
           <ChatBubbleOutlineIcon className='icon'/>
           <div className="counter">2</div>
          </div>
          <div className="item">
           <ListIcon className='icon'/>
          </div>
          <div className="item">
           <img src={Adminlogo} alt='' className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
