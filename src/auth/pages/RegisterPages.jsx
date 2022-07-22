import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, } from '../../store/auth/thunks';
import  {Link} from 'react-router-dom';
import '../../styles/authStyles/main.scss';


    const formData = {
        name: 'Edgar Joaquin Flores',
        email: 'edgarjoaquin@gmail.com',
        password: '123456',
    }


export const RegisterPages = () => {

    const { status } = useSelector(state => state.auth )
    const dispatch = useDispatch();

    const { name, email, password, onInputChange } = useForm(formData);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const handleSubmit = (e) => {
        e.preventDefault() //proviene de thunks.js
        dispatch(checkingAuthentication())
    }

    return (
        <div className='login__container-general' >
            <form
                className='form__container'
                onSubmit={handleSubmit}
            >
                <input
                className='form__input-text'
                type="name"
                name="name"
                value={name}
                placeholder="Nombre"
                onChange={onInputChange}
                />
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
                        disabled={isAuthenticating}
                    >
                        Crear Cuenta
                    </button>
                    <Link to='/auth/login'>
                        ¿Ya Tienes una Cuenta?
                    </Link>
            </form>
        </div>
    )
}
