import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminAuthSlice from '../features/admin/auth/adminAuthSlice'
import getUsersSlice from '../features/admin/users/getUsersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminauth: adminAuthSlice,
    fetchUsers: getUsersSlice,
    
  },
});
