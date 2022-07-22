import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, } from '../../store/auth/thunks';
import  {Link} from 'react-router-dom';
import '../../styles/authStyles/main.scss';


    const formData = {
        displayName: 'Edgar Joaquin Flores',
        email: 'edgarjoaquin@gmail.com',
        password: '123456',
    }

    const formValidation = {
        email: [(value) => value.includes('@gmail.com'), 'El email no es valido'],
        password: [(value) => value.length >= 8, 'El password debe tener almenos 8 caracteres'],
        displayName: [(value) => value.length >= 2, 'Nombre invalido'],
    }


export const RegisterPages = () => {

    const { status } = useSelector(state => state.auth )
    const dispatch = useDispatch();

    const { displayName, displayNameValid, email, emailVlaid, password, passwordValid,  onInputChange, formState, formStateValid } = useForm(formData);
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
                type="text"
                name="displayName"
                value={displayName}
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
