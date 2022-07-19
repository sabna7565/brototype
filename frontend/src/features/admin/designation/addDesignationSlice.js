import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import addDesignationService from './addDesignationService'

const designation = JSON.parse(localStorage.getItem('designation'))

const initialState = {
    designation: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//add designation
export const addDesignation = createAsyncThunk('add-designation', async (designation, thunkAPI) => {
    try {
        return await addDesignationService.addDesignation(designation)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

//view designations
export const allDesignations = createAsyncThunk('fetch-d111', async (_,thunkAPI) => {
    try {
        return await addDesignationService.getDesignations();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const addDesignationSlice = createSlice({
    name : 'add-new-designation',
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
        [allDesignations.pending] : (state) => {
            state.isLoading = true
        },
        [allDesignations.fulfilled] : (state, action) => {
            console.log("designations",action.payload);
            state.designation = action.payload
            state.isSuccess = true
            state.isLoading = false
        },
        [allDesignations.rejected] : (state, action) => {
            state.message = action.payload
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.designation = null
        },
        [addDesignation.pending] : (state) => {
            state.isLoading = true
        },
        [addDesignation.fulfilled] : (state, action) => {
            state.designation.designation.push(action.payload)
            state.isLoading = false
            state.isSuccess = true
        },
        [addDesignation.rejected] : (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.designation = null
        }
    }
})

export const {reset} = addDesignationSlice.actions
export default addDesignationSlice.reducer