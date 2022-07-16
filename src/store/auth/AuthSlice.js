import { createSlice } from '@reduxjs/toolkit'


export const AuthSlice = createSlice({
name: 'auth',
initialState: {
    status: 'no-authenticated',
    uid: null,
    displayName: null,
    email: null,
    pothoUrl: null,
    errorMessage: null,

},
reducers: {

    checkingCredentials: ( state ) => {
        state.status= 'checking'
    },

},
})
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials  } = AuthSlice.actions