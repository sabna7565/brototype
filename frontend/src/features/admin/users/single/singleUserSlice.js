import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import singleUserService from "./singleUserService";

const initialState = {
    user: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getUser = createAsyncThunk('fetch-User', async (userId, thunkAPI) => {
    try {        
        return await singleUserService.singleUser(userId)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

export const singleUserSlice = createSlice({
    name : 'fetch-single-user',
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
         [getUser.pending]: (state, action) => {
            state.isLoading = true
            state.isSuccess = true
            state.user = action.payload
        },
        [getUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        },
        [getUser.rejected]: (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.user = null
        }
    },
});

export const {reset} = singleUserSlice.actions
export default singleUserSlice.reducer
