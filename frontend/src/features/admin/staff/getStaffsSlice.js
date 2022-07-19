import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getStaffsService from './getStaffsService'

const initialState = {
    staffs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//get all staffs
export const getStaffs = createAsyncThunk('fetch-Staffs', async ( thunkAPI) => {
    try {
        return await getStaffsService.fetchStaffs()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message)
    }
});

//delete staffs
export const removeStaff = createAsyncThunk('delete-staff', async (staffId, thunkAPI) => {
      try {
        return await getStaffsService.deleteStaff(staffId);
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


export const getStaffsSlice = createSlice({
    name : 'fetch-all-staffs',
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
         [getStaffs.pending]: (state) => {
            state.isLoading = true
        },
        [getStaffs.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.staffs = action.payload
        },
        [getStaffs.rejected]: (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.staffs = null
        },
        [removeStaff.pending]: (state) => {
            state.isLoading = true
        },
        [removeStaff.fulfilled]: (state, action) => {
            const itemId = action.payload.staffId;
            state.staffs.staffs = state.staffs.staffs.filter(
                (item) => item._id !== itemId
            );
            state.isLoading = false
            state.isSuccess = true
        },
        [removeStaff.rejected]: (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.staffs = null
        }
    },
});

export const {reset} = getStaffsSlice.actions
export default getStaffsSlice.reducer
