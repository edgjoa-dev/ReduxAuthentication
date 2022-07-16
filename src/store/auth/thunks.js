import { checkingCredentials } from "./AuthSlice"



export const checkingAuthentication = (email, password) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() )

    }
}