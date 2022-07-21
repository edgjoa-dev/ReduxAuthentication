import { async } from "@firebase/util";
import { singInWhitGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./AuthSlice"

export const checkingAuthentication = ( email, password ) => {
//van al login
    return async(dispatch) => {
        dispatch( checkingCredentials() )
    }

}

export const googleSignIn = ( ) => {

    return async(dispatch) => {

        dispatch( checkingCredentials() )

        const result = await singInWhitGoogle() //viene del provider store
        if(!result.ok) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )

    }

}