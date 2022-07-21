import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, googleSignIn } from '../../store/auth/thunks';
import '../../styles/authStyles/main.scss';


    const formData = {
        email: 'edgarjoaquin@gmail.com',
        password: '123456',
    }


export const LoginPages = () => {

    const { status } = useSelector(state => state.auth )
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const handleSubmit = (e) => {
        e.preventDefault() //proviene de thunks.js
        dispatch(checkingAuthentication())
    }
    const onGoogleSignIn = () => {
        dispatch(googleSignIn()) //proviene de thunks.js
        console.log('login with google')
    }

    return (
        <div className='login__container-general' >
            <form
                className='form__container'
                onSubmit={handleSubmit}
            >
                <input
                className='form__input-text'
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={onInputChange}
                />
                <input
                className='form__input-text'
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={onInputChange}
                />
                    <button
                        className='button_submit'
                        variant="contained"
                        type='submit'
                    >
                        Login
                    </button>

                    <button
                        className='button_submit'
                        type="submit"
                        onClick={onGoogleSignIn}
                    >
                        Login Google
                    </button>
            </form>
        </div>
    )
}
