import { async } from "@firebase/util";
import { singInWhitGoogle, logutFirebase, registerUserWithEmailPassword, loginWithEmailPassword, } from "../../firebase/provider.js"
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {

        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        if(!ok) return dispatch( logout({errorMessage}))
        dispatch(login({ uid, displayName, email, photoURL }))
    }

}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async( dispatch ) => {

        dispatch(checkingCredentials());

        const result = await   loginWithEmailPassword({email, password});

        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}

export const startLogout = ()=> {
    return async(dispatch) => {
        await logutFirebase();
        dispatch(logout({}));
    }
}