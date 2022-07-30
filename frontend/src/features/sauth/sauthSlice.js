import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import sauthService from './sauthService'

// Get staff from localStorage
const staff = JSON.parse(localStorage.getItem('staff'))
const initialState = {
    staff: staff ? staff : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Login staff
export const stafflogin = createAsyncThunk('staffauth/stafflogin', async (staff, thunkAPI) => {
    try {
        return await sauthService.slogin(staff)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//edit staff
export const updateStaff = createAsyncThunk('update-staff-propic', async (staffDetail, thunkAPI) => {
    try {
        const token = thunkAPI.getState().staffauth.staff.token;
        return await sauthService.editStaff(token, staffDetail);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//create group 
export const createGroup = createAsyncThunk('create-groupn', async (groupData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().staffauth.staff.token;
        return await sauthService.group(token, groupData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//staff logout
export const stafflogout = createAsyncThunk('staffauth/stafflogout', async () => {
    await sauthService.slogout()
})

export const sauthSlice = createSlice({
    name : 'staffauth',
    initialState, 
    reducers: {
        sreset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers:  {
        [stafflogin.pending]: (state) => {
            state.isLoading = true
        },
         [stafflogin.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.staff = action.payload
        },
        [stafflogin.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.staff = null
        },
        [updateStaff.pending]: (state) => {
            state.isLoading = true
        },
         [updateStaff.fulfilled]: (state, action) => {
            state.staff = action.payload
            state.isLoading = false
            state.isSuccess = true
        },
        [updateStaff.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.staff = null
        },
        [createGroup.pending]: (state) => {
            state.isLoading = true
        },
         [createGroup.fulfilled]: (state, action) => {
            state.group = action.payload
            state.isLoading = false
            state.isSuccess = true
        },
        [createGroup.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.group = null
        },
        [stafflogout.fulfilled]: (state) => {
            state.staff = null
        }
    },
})


export const {sreset} = sauthSlice.actions
export default sauthSlice.reducer