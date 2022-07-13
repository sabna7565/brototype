import './Widget.scss'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CodeIcon from '@material-ui/icons/CodeOutlined'
import PostAddIcon from '@material-ui/icons/PostAddOutlined'

const Widget = ({ type }) => {
let data;

//temporary
const amount = 100;
const diff = 20;

switch(type){
    case "user":
        data={
            title:"USERS",
            isMoney: false,
            link:"See all users",
            icon: (
                <PersonOutlineIcon className='icon' 
                style={{
                    color:"white",
                    backgroundColor:"black"
                }}/>
            )
        };
        break;
        case "staff":
            data={
                title:"STAFFS",
                isMoney: false,
                link:"view all staffs",
                icon: (
                    <SupervisorAccountIcon className='icon'
                    style={{
                        color:"white",
                        backgroundColor:"black"
                    }}/>
                )
            };
        break;
        case "placements":
        data={
            title:"PLACEMENTS",
            isMoney: false,
            link:"See all placements",
            icon: (
                <CodeIcon className='icon' 
                style={{
                    color:"white",
                    backgroundColor:"black"
                }}/>
            )
        };
        break;
        case "posts":
            data={
                title:"POSTS",
                isMoney: false,
                link:"See all posts",
                icon: (
                    <PostAddIcon className='icon' 
                    style={{
                        color:"white",
                        backgroundColor:"black"
                    }}/>
                )
            };
            break;
        default:
            break;
}

  return (
    <div className='widget'>
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && '$'}{amount}</span>
        <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />{diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}


export default Widget