import { GoogleAuthProvider,  signInWithPopup,  } from '@firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

//van hacia los thunks
export const singInWhitGoogle  = async() => {

    try {
        const result = await signInWithPopup(FirebaseAuth,  googleProvider);
        const { uid, displayName, email, photoUrl } = result.user;
        return {
            ok: true,
            uid,
            displayName,
            email,
            photoUrl
        }

    } catch (error) {
        const errorMessage = error.message
        return{
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {

        const res = await createUserWithEmailAndPassword( FirebaseAuth, email, password, );
        const { uid, photoURL } = res.user;
        console.log(res);
        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            ok:true,
            uid, email, photoURL, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok:false, errorMessage: error.message}
    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        console.log(error);
        return {
            ok:false,
            errorMessage: error.message
        }
    }
}

export const logutFirebase = async() => {

    return await FirebaseAuth.signOut();

}