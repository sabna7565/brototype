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
import About from './components/home/intro/Intro'
import UViewbranch from './components/home/branch/Uviewbranch'
import Slogin from './components/home/slogin/Slogin'
import UserLayout from './pages/user/UserLayout';
import Profile from './components/user/profile/Profile';
import Details from './components/user/profile/details/Details'
import StaffLayout from './pages/staff/StaffLayout';
import Sprofile from './components/staff/profile/Sprofile';
import Groups from './components/staff/groups/Groups';
import AddGroup from './components/staff/groups/addgroup/AddGroup'
import Mystudents from './components/staff/students/mystudents/Mystudents';
import Reviewstudents from './components/staff/review/students/Reviewstudents';
import Mystudent from './components/staff/students/mystudents/student/Mystudent';
import Batchreview from './components/staff/students/mystudents/student/Viewreview';
import Task from './components/staff/task/Task';
import Addtask from './components/staff/task/add/Addtask';
import Viewtasks from './components/staff/task/view/Viewtasks';
import Reviewer from './components/staff/reviewer/Reviewer';
import Addreviewer from './components/staff/reviewer/addreviewer/Addreviewer';
import Review from './components/staff/review/Review';
import Addreview from './components/staff/review/add/Addreview';
import Viewreview from './components/staff/students/mystudents/student/Viewreview'
import Syllabus from './components/admin/syllabus/Syllabus'
import Addsyllabus from './components/admin/syllabus/add/Addsyllabus';
import Utask from './components/user/task/Utask'
import Uaddtask from './components/user/task/add/Uaddtask';
import Viewtask from './components/staff/task/view/Viewtask';
import Ureview from './components/user/review/Ureview';
import Placement from './components/admin/placement/Placement';
import Addplacement from './components/admin/placement/add/Addplacement';
//import Procard from './components/home/profile/Profile'

function App() {
const admin = useSelector((state) => state.adminauth.admin)
const user = useSelector((state) => state.auth.user)
const staff = useSelector((state) => state.staffauth.staff)


 return (
    <>
    <Router>
    <div >
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/slogin' element={<Slogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/:location' element={<UViewbranch />} />
        {/* <Route path='/procard' element={<Procard />} /> */}

        {/* ====================User======================= */}

      <Route path='/user'>            
        <Route path= '' element={user ? <UserLayout children={<Profile />}/> :  <Login /> } />
        <Route path='more' element={user ? <UserLayout children={<Details />}/> :  <Login /> } />

        <Route path='task'>
        <Route index element={user ? <UserLayout children={<Utask />}/> :  <Login /> } />
        <Route path=':id/:domain/:week' element={user ? <UserLayout children={<Uaddtask />} /> : <Login /> } />
        </Route>
        
        <Route path='review' element={user ? <UserLayout children={<Ureview />}/> :  <Login /> } />
        <Route path='payment' element={user ? <UserLayout children={<Profile />}/> :  <Login /> } />
      </Route>

       {/* ====================Staff======================= */}
       <Route path='/staff'>            
       <Route path= '' element={staff ? <StaffLayout children={<Sprofile />}/> :  <Slogin /> } />

        <Route path='group'>
        <Route index element={staff ? <StaffLayout children={<Groups />}/> :  <Slogin /> } />
        <Route path='new' element={staff ? <StaffLayout children={ <AddGroup />} /> : <Slogin /> } />
        <Route path=':batch/:domain' element={staff ? <StaffLayout children={ <Mystudents />} /> : <Slogin /> } />
        <Route path=':batch/:domain/:id' element={staff ? <StaffLayout children={ <Mystudent />} /> : <Slogin /> } />
        <Route path=':batch/:domain/:id/review' element={staff ? <StaffLayout children={ <Batchreview />} /> : <Slogin /> } />
        <Route path='reviewstudents' element={staff ? <StaffLayout children={ <Reviewstudents />} /> : <Slogin /> } />
        </Route>

        <Route path='task'>
        <Route index element={staff ? <StaffLayout children={<Task />}/> :  <Slogin /> } />
        <Route path=':batch/:domain' element={staff ? <StaffLayout children={ <Viewtasks />} /> : <Slogin /> } />
        <Route path='view/:id' element={staff ? <StaffLayout children={ <Viewtask />} /> : <Slogin /> } />
        </Route>

        <Route path='reviewer'>
        <Route index element={staff ? <StaffLayout children={<Reviewer />}/> :  <Slogin /> } />
        <Route path='new' element={staff ? <StaffLayout children={ <Addreviewer />} /> : <Slogin /> } />
        </Route>

        <Route path='review'>
        <Route index element={staff ? <StaffLayout children={<Review />}/> :  <Slogin /> } />
        <Route path=':batch/:domain' element={staff ? <StaffLayout children={ <Reviewstudents />} /> : <Slogin /> } />
        <Route path='add/:batch/:domain/:id' element={staff ? <StaffLayout children={ <Addreview />} /> : <Slogin /> } />
        <Route path='view/:batch/:domain/:id' element={staff ? <StaffLayout children={ <Viewreview />} /> : <Slogin /> } />
        </Route>

        <Route path='payment' element={staff ? <StaffLayout children={<Profile />}/> :  <Slogin /> } />
        </Route>


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
        </Route>

        <Route path='syllabus'>
          <Route index element={admin ? <Layout children={<Syllabus />} /> : <AdminLogin /> }/>
          <Route path='new' element={admin ? <Layout children={ <Addsyllabus />} /> : <AdminLogin /> } />
        </Route>

        <Route path='placements'>
          <Route index element={admin ? <Layout children={<Placement />} /> : <AdminLogin /> }/>
           <Route path='new' element={admin ? <Layout children={<Addplacement />} /> : <AdminLogin /> } />
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
