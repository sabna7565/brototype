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


//delete user
export const removeUser = createAsyncThunk('delete-user', async (userId, thunkAPI) => {
    try {
      return await getUsersService.deleteUser(userId);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something went wrong';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
        },
        [removeUser.pending]: (state) => {
            state.isLoading = true
        },
        [removeUser.fulfilled]: (state, action) => {
            const itemId = action.payload.userId;
            state.users.users = state.users.users.filter(
                (item) => item._id !== itemId
            );
            state.isLoading = false
            state.isSuccess = true
        },
        [removeUser.rejected]: (state, action) => {
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
