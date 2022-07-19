import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import addStaffService from './addStaffService';

const staff = JSON.parse(localStorage.getItem('staff'))

const initialState = {
    staff: staff ? staff : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//register staff
export const registerStaff = createAsyncThunk('register-Staff', async (staff, thunkAPI) => {
    try {        
        return await addStaffService.registerStaff(staff)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

export const addStaffSlice = createSlice({
    // name : 'fetch-single-user',
    name : 'add-new-staff',
    initialState, 
    reducers: {
          reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: {
         [registerStaff.pending]: (state) => {
            state.isLoading = true            
        },
        [registerStaff.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.staff = action.payload
        },
        [registerStaff.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.staff = null
        }
    },
});

export const {reset} = addStaffSlice.actions
export default addStaffSlice.reducer