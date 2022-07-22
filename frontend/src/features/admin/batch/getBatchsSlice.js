import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBatchsService from './getBatchsService'

const initialState = {
    batch: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//get all batch
export const getBatchs = createAsyncThunk('fetch-Batchs', async (_, thunkAPI) => {
    try {
        return await getBatchsService.fetchBatchs()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

//insert batch
export const registerBatch = createAsyncThunk('register-Batch', async (batch, thunkAPI) => {
    try {        
        return await getBatchsService.insertBatch(batch)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

export const getBatchsSlice = createSlice({
    name : 'fetch-all-batch',
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
         [getBatchs.pending]: (state) => {
            state.isLoading = true
        },
        [getBatchs.fulfilled]: (state, action) => {
            state.batch = action.payload
            console.log("action", action.payload)
            state.isLoading = false
            state.isSuccess = true
        },
        [getBatchs.rejected]: (state, action) => {
            state.message = action.payload
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.batch = null
        },
        [registerBatch.pending]: (state) => {
            state.isLoading = true            
        },
        [registerBatch.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.batch = action.payload
        },
        [registerBatch.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.batch = null
        }
    },
});

export const {reset} = getBatchsSlice.actions
export default getBatchsSlice.reducer
