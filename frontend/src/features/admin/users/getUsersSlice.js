import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUsersService from './getUsersService'

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getUsers = createAsyncThunk('fetch-Users', async ( thunkAPI) => {
    try {
        return await getUsersService.fetchUsers()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

export const getUsersSlice = createSlice({
    name : 'fetch-all-users',
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
         [getUsers.pending]: (state) => {
            state.isLoading = true
        },
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.users = null
        }
    },
});

export const {reset} = getUsersSlice.actions
export default getUsersSlice.reducer
