import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import adminAuthService from './adminAuthService'

// Get user from localStorage
const admin = JSON.parse(localStorage.getItem('admin'))
console.log("details",admin);
const initialState = {
    admin: admin ? admin : null,
    // admin: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Register User
// export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
//     try {
//         return await authService.register(user)
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })


// Login user
export const adminlogin = createAsyncThunk('adminauth/adminlogin', async (admin, thunkAPI) => {
    try {
        console.log("sliceadmintry",admin);
        return await adminAuthService.adminlogin(admin)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const adminlogout = createAsyncThunk('adminauth/adminlogout', async () => {
    await adminAuthService.logout()
})

export const adminAuthSlice = createSlice({
    name : 'adminauth',
    initialState, 
    reducers: {
        adminreset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
     builder
        .addCase(adminlogin.pending, (state) => {
            state.isLoading = true
        })
        .addCase(adminlogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.admin = action.payload
        })
        .addCase(adminlogin.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.admin = null
        })
        .addCase(adminlogout.fulfilled, (state) => {
            state.admin = null
        })
    },
})


export const {adminreset} = adminAuthSlice.actions
export default adminAuthSlice.reducer