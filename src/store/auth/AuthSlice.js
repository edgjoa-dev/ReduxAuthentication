import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
name: 'auth',
initialState: {

    status: 'notAuthenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    messageError: null,

},
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
        checkingCredentials: (state) => {
            state.status = 'checkingCredentials'
        },
    }
})
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions