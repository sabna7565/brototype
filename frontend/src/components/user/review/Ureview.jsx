import './Ureview.scss'
import Table from 'react-bootstrap/Table';
import * as api from '../../../api/index'
import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'

const Ureview = () => {
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    const {token}=user?user:"";
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

const [Fulldata, setFulldata] = useState({loading:false,done:false})

    useEffect(() => {
        !Fulldata.done && fetchMyReview()
      }, [])
    
      const fetchMyReview = async()=>{
        setFulldata((prev)=>({ ...prev, loading: true}))
        try {
          const {data}=await api.viewReview(config, user._id);
          if (data?.review) {
          setFulldata((prev)=>({
             ...prev,
             review:data['review'], 
             loading: false, 
             done: true}));
          }
        } catch (error) {
          console.log(error)
        }
      }
       console.log("mystudent....", Fulldata.review)
       let reviews = Fulldata.review ? Fulldata.review : [];


  return (
    <div className='staffsinglereview'>
      <div className="title">
        <span>View review</span>
      </div>

      <div className="studentreviewtable">
     <Table striped bordered hover size="sm">
      <thead>
        <tr className='firstrow'>
          <th style={{width: '150px'}}>Date</th>
          <th style={{width: '100px'}}>Week</th>
          <th style={{width: '100px'}}>Status</th>
          <th style={{width: '100px'}}>Pendings</th>
          <th style={{width: '100px'}}>Updations</th>
          <th style={{width: '100px'}}>Reviewer</th>
          <th style={{width: '100px'}}>Score</th>
          <th style={{width: '100px'}}>Seminar </th>
          <th style={{width: '100px'}}>Score</th>

          <th style={{width: '100px'}}>Total</th>
        </tr>
      </thead>
      <tbody>
      {reviews?.map((row) => (
        <tr>
          <td>{row.date}</td>
          <td>{row.week}</td>
                        
          <td style={{backgroundColor: row.status, color: row.status}}>
            {row.status}</td> 
            
          <td>{row.pending}</td>
          <td>{row.updations}</td>
          <td>{row.reviewer}</td>
          <td>{row.score}</td>
          <td>{row.seminar}</td>
          <td>{row.semiscore}</td>
          <td>{row.total}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Ureview