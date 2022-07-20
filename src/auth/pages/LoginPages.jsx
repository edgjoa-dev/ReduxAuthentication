import React from 'react'
import { useForm } from '../../hooks/useForm'

    const formData = {
        email: 'edgarjoaquin@gmail.com',
        password: '123456'
    }


export const LoginPages = () => {

    const [ email, password, onInputChange ] = useForm(formData);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit')
    }
    const onGoogleSignIn = () => {
        console.log('login with google')
    }

    return (
        <div>
            <h1>LoginPages</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="email"
                value={email}
                placeholder="email"
                onChange={onInputChange}
                />
                <input
                type="text"
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
                >Login Google</button>
            </form>
        </div>
    )
}
