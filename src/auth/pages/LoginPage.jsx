import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication } from '../../store/auth/thunks'



const formData = {
    email: 'flores@gmail.com',
    password: 123456,
}

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm(formData)
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(checkingAuthentication())
    }

    const singinWhitGoogle = () => {
        console.log('SignIn Google');
        dispatch(checkingAuthentication())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={ onInputChange }
                />
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={ onInputChange }
                    />

                    <button
                        type='submit'
                    >
                        login
                    </button>

                    <button
                        name='password'
                        value={password}
                        onClick={singinWhitGoogle}
                    >
                        SignIn Google
                    </button>
            </form>
        </div>
    )
}
