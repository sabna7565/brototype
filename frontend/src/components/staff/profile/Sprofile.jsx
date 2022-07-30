import React from 'react'
import './Sprofile.scss'
import {Link, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 const Sprofile = () => {
    const {staff, isLoading, isError, isSuccess, message} = useSelector((state) => state.staffauth)
    console.log("imprtnt", staff)
  return (
    <div className='sprofile'>
      <div className="title">
        <span>PERSONAL DETAILS</span>
      </div>
      <div className="card">
      <Card className="text-center">
      <Card.Header className='namehead'> <Card.Title>{staff.fname} {staff.lname}</Card.Title></Card.Header>
      <Card.Body>
       
        <Card.Text>
          <Button className='sbtn' variant="secondary">Designation: {staff.designation}</Button><br />

        </Card.Text>
        <Button className='sbtn' variant="secondary">Email: {staff.email}</Button><br />
        <Button className='sbtn' variant="secondary">Mobile: {staff.mobile}</Button><br />
        <Button className='sbtn' variant="secondary">Salary: {staff.salary}</Button><br />
       
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}


export default Sprofile