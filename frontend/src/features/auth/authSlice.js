import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Register User
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//edit user
export const updateUser = createAsyncThunk('update-student-deetails', async (userDetails, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await authService.editUser(token, userDetails);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// user logout
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

export const authSlice = createSlice({
    name : 'auth',
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
        [register.pending]: (state) => {
            state.isLoading = true
        },
        [register.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        },
        [register.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },
        [login.pending]: (state) => {
            state.isLoading = true
        },
         [login.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },
        [updateUser.pending]: (state) => {
            state.isLoading = true
        },
         [updateUser.fulfilled]: (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.isSuccess = true
        },
        [updateUser.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        },
        [logout.fulfilled]: (state) => {
            state.user = null
        }
    },
})


export const {reset} = authSlice.actions
export default authSlice.reducer