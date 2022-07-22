import './Dashboard.scss'
import Carousal from "../components/home/carousal/Carousal"
import Header from '../components/home/header/Header'
import Carous from '../components/home/carousal/Carous'

function Dashboard() {
  return <div className="dashboard">
    <div className="dashhead">
    <Header />
    </div>
    <div className="carousal">
    <Carous />
    </div>
    
    
    Dashboard</div>  
}

export default Dashboard