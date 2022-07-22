import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { AdminLogin } from './pages/admin/login/AdminLogin';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import List from './pages/admin/list/List'
import Single from './pages/admin/single/Single'
import New from './pages/admin/new/New'
import { useSelector } from 'react-redux'
import Layout from './pages/admin/Layout'
import AddStaff from './pages/admin/addstaff/AddStaff'
import StaffList from './pages/admin/stafflist/StaffList'
import SingleStaff from './pages/admin/singlestaff/SingleStaff' 
import DesignationList from './pages/admin/designation/Designation'
import Location from './pages/admin/location/Location'
import Addbranch from './components/admin/branch/addbranch/Addbranch';
import Viewbranch from './components/admin/branch/Viewbranch'
import Batch from './pages/admin/batch/BatchList'
import Addbatch from './components/admin/batch/addbatch/Addbatch'

function App() {
const admin = useSelector((state) => state.adminauth.admin)
const user = useSelector((state) => state.auth.user)

  return (
    <>
    <Router>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* ====================Admin======================= */}

        <Route path='/admin'>            
        <Route path= '' element={<AdminLogin />} />
        <Route path='admindashboard' element={admin
          ? <Layout children={<AdminDashboard />} />
          : <AdminLogin />}/>

        <Route path='users'>
          <Route index element={admin ? <Layout children={<List />} /> : <AdminLogin /> }/>
          <Route path=':id' element={admin ? <Layout children={<Single />} /> : <AdminLogin /> } />
          <Route path='new' element={<New />} />
        </Route>

        <Route path='staffs'>
          <Route index element={admin ? <Layout children={<StaffList />} /> : <AdminLogin /> }/>
          <Route path=':id' element={admin ? <Layout children={<SingleStaff />} /> : <AdminLogin /> } />
          <Route path='new' element={admin ? <Layout children={ <AddStaff />} /> : <AdminLogin /> } />
        </Route>

        <Route path='batch'>
          <Route index element={admin ? <Layout children={<Batch />} /> : <AdminLogin /> }/>
           {/* <Route path=':location' element={admin ? <Layout children={<Viewbranch />} /> : <AdminLogin /> } /> */}
          <Route path='new' element={admin ? <Layout children={ <Addbatch />} /> : <AdminLogin /> } />
        </Route>

        <Route path='branch'>
          <Route index element={admin ? <Layout children={<Location />} /> : <AdminLogin /> }/>
           <Route path=':location' element={admin ? <Layout children={<Viewbranch />} /> : <AdminLogin /> } />
          <Route path='new' element={admin ? <Layout children={ <Addbranch />} /> : <AdminLogin /> } />
        </Route>

        <Route path='designation'>
          <Route index element={admin ? <Layout children={<DesignationList />} /> : <AdminLogin /> }/>
           <Route path=':id' element={admin ? <Layout children={<SingleStaff />} /> : <AdminLogin /> } />
         {/* <Route path='new' element={admin ? <Layout children={ <AddStaff />} /> : <AdminLogin /> } /> */}
        </Route>

        <Route path='placements'>
          <Route index element={admin ? <Layout children={<DesignationList />} /> : <AdminLogin /> }/>
           <Route path=':id' element={admin ? <Layout children={<SingleStaff />} /> : <AdminLogin /> } />
         {/* <Route path='new' element={admin ? <Layout children={ <AddStaff />} /> : <AdminLogin /> } /> */}
        </Route>


        </Route>
        
        {/* ====================Staff======================= */}
        <Route path='staff'>            
        <Route index element={<AdminLogin />} />
        <Route path='home' element={<AdminDashboard />} />
        <Route path='users'>
          <Route index element={<List />} />
          <Route path=':userId' element={<Single />} />
          <Route path='new' element={<New />} title="Add new sttaff"/>
        </Route>
        </Route>


      </Routes>
     </div>
    </Router>
    <ToastContainer />
    </>   
  );
}

export default App;
