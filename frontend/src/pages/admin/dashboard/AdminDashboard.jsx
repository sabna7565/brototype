import React from 'react'
import AdminHeader from '../../../components/admin/header/AdminHeader'
import Sidebar from '../../../components/admin/sidebar/Sidebar'
import Navbar from '../../../components/admin/navbar/Navbar'
import Widget from '../../../components/admin/widget/Widget'
import './AdminDashboard.scss'
import Featured from '../../../components/admin/featured/Featured'
import Chart from '../../../components/admin/chart/Chart'
import Table from '../../../components/admin/dataTable/DataTable'

function AdminDashboard() {
   return (
     <div className='home'> 
      {/* <AdminHeader /> */}

      <div className="dashboardContainer">
        
        <div className="widgets">
          <Widget type="user"/> <Widget type="staff"/>
          <Widget type="placements"/> <Widget type="posts"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
         <div className="listContainer">
          <div className="listTitle">Latest counts</div>
          <Table />
          </div>
        </div>
      {/* <h1 className="title">Admin Dashboard</h1> */}
    </div>  
   )
   
  }
  
  export default AdminDashboard