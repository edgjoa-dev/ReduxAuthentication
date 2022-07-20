
export const checkingAuthentication = ( email, password ) => {

    return async(dispatch) => {
        dispatch( checkingCredentials() )
    }

}

export const googleSignIn = ( ) => {

    return async(dispatch) => {
        dispatch( checkingCredentials() )
    }

}
