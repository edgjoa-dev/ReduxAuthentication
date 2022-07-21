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