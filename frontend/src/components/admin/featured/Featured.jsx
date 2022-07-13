import './Featured.scss'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Students</h1>
        <MoreVertIcon fontSize='small' className='icon' style={{color: "black"}}/>
      </div>
      <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          </div>
          <p className="title">Total Students</p>
          <p className="count">500</p>
          <p className="desc">New batch may not be included. Fumigation is ongoing</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount">1000</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Lastbatch</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize='small'/>
                <div className="resultAmount">1000</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Upcoming batch</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize='small'/>
                <div className="resultAmount">1000</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}


export default Featured