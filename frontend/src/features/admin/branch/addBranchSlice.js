import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import addBranchService from './addBranchService'


//const designation = JSON.parse(localStorage.getItem('designation'))

const initialState = {
    branch: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//add branch
export const addBranch = createAsyncThunk('adds-branch', async (branch, thunkAPI) => {
    try {
        return await addBranchService.giveBranch(branch)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

//view single branch
export const singleBranch = createAsyncThunk('fetch-single-branch', async (locname, thunkAPI) => {
    try {        
        return await addBranchService.getBranch(locname)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

//view branchs
export const allBranch = createAsyncThunk('fetchs-branch', async (_, thunkAPI) => {
    try {
        return await addBranchService.getBranchs();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const addBranchSlice = createSlice({
    name : 'new-branchs',
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
        [allBranch.pending] : (state) => {
            state.isLoading = true
        },
        [allBranch.fulfilled] : (state, action) => {
            console.log("branchs",action.payload);
            state.branch = action.payload
            state.isSuccess = true
            state.isLoading = false
        },
        [allBranch.rejected] : (state, action) => {
            state.message = action.payload
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.branch = null
        },
        [singleBranch.pending] : (state) => {
            state.isLoading = true
        },
        [singleBranch.fulfilled] : (state, action) => {
            console.log("singlebranchs",action.payload);
            state.branch = action.payload
            state.isSuccess = true
            state.isLoading = false
        },
        [singleBranch.rejected] : (state, action) => {
            state.message = action.payload
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.branch = null
        },
        [addBranch.pending] : (state) => {
            state.isLoading = true
        },
        [addBranch.fulfilled] : (state, action) => {
            //state.designation.designation.push(action.payload)
            state.branch = action.payload
            console.log("addbranch", action.payload)
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        },
        [addBranch.rejected] : (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.branch = null
        }
    }
})

export const {reset} = addBranchSlice.actions
export default addBranchSlice.reducer