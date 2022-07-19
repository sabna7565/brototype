import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminAuthSlice from '../features/admin/auth/adminAuthSlice'
import getUsersSlice from '../features/admin/users/getUsersSlice';
import singleUserSlice from '../features/admin/users/single/singleUserSlice';
import addStaffSlice from '../features/admin/staff/register/addStaffSlice'
import getStaffsSlice from '../features/admin/staff/getStaffsSlice'
import addDesignationSlice from '../features/admin/designation/addDesignationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminauth: adminAuthSlice,
    fetchUsers: getUsersSlice,
    fetchUser: singleUserSlice,
    addStaff: addStaffSlice,
    viewStaffs: getStaffsSlice,
    allDesignations: addDesignationSlice    
  },
});
