import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, googleSignIn } from '../../store/auth/thunks';

    const formData = {
        email: 'edgarjoaquin@gmail.com',
        password: '123456',
    }


export const LoginPages = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);

    const handleSubmit = (e) => {
        e.preventDefault() //proviene de thunks.js
        dispatch(checkingAuthentication())
    }
    const onGoogleSignIn = () => {
        dispatch(googleSignIn()) //proviene de thunks.js
        console.log('login with google')
    }

    return (
        <div>
            <h1>LoginPages</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={onInputChange}
                />
                <input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={onInputChange}
                />
                <button
                    type="submit"
                >Login</button>

                <button
                    type="submit"
                    onClick={onGoogleSignIn}
                >
                    Login Google
                </button>
            </form>
        </div>
    )
}
