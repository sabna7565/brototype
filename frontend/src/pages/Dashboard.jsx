import './Dashboard.scss'
import Header from '../components/home/header/Header'
import Carous from '../components/home/carousal/Carous'
import Youtube from '../components/home/youtube/Youtube'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Allbranch from '../components/home/branch/Allbranch'
import Placement from '../components/home/placements/Placement'
import Web from '../images/home/webdev.jpg'
import Mob from '../images/home/mobile.jpg'
import Game from '../images/home/game.png'
import Cyber from '../images/home/cyber.jpg'
import Machine from '../images/home/machine.jpeg'
import Test from '../images/home/testing.webp'
import Data from '../images/home/datascience.jpg'
import Devops from '../images/home/devops.png'


function Dashboard() {
  return <div className="dashboard">
    <div className="dashhead">
    <Header />
    </div>
    <div className="carousal">
    <Carous />
    </div>
    <div className="videos">
      <div className="youtube"><Youtube /></div>
      <div className="description"><p>No Tution Fee <br /> Upfront, <br /> Pay only When <br /> You Earn.</p>
      <p className='from'>From Zero to a high paid Software Engineer in 180 <br /> days.</p>
      <Link to="/about"><Button className='more'>More About</Button></Link>
      </div>
    </div>
    <div className="placement">
      <Placement />
    </div>
    <div className="branch">
     <Allbranch />
    </div>
    <div className="domain">
      <h1 className='heading'>Domains</h1>
      <div className="firstrow">
        <div className="first">
        <img src={Web} className="imag" />
        </div>
        <div className="second">
        <img src={Mob} className="imag" />
        </div>
        <div className="third">
        <img src={Game} className="imag" />
        </div>
        <div className="four">
        <img src={Cyber} className="imag" />
        </div>
      </div>
      <div className="secondrow">
        <div className="first">
        <img src={Machine} className="imag" />
        </div>
        <div className="second">
        <img src={Test} className="imag" />
        </div>
        <div className="third">
        <img src={Data} className="imag" />
        </div>
        <div className="four">
        <img src={Devops} className="imag" />
        </div>
      </div>
    </div>
    
    
    Dashboard</div>  
}

export default Dashboard