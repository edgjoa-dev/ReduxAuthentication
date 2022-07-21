import { singInWhitGoogle } from "../../firebase/provider"
import { checkingCredentials } from "./AuthSlice"

export const checkingAuthentication = ( email, password ) => {
//van al login
    return async(dispatch) => {
        dispatch( checkingCredentials() )
    }

}

export const googleSignIn = ( ) => {

    return async(dispatch) => {
        dispatch( checkingCredentials() )
        const result = singInWhitGoogle() //viene del provider store
        console.log(result);
    }

}