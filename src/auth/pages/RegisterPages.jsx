import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, } from '../../store/auth/thunks';
import  {Link} from 'react-router-dom';
import '../../styles/authStyles/main.scss';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'


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

    const [formSubmitted, setformSubmitted] = useState(false);

    const { status } = useSelector(state => state.auth )
    const dispatch = useDispatch();

    const { displayName, displayNameValid, email, emailValid, password, passwordValid,  onInputChange, formState, formStateValid } = useForm(formData, formValidation);
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const handleSubmit = (e) => {
        e.preventDefault() //proviene de thunks.js
        if (formStateValid) {
            dispatch(checkingAuthentication())
            setformSubmitted(true)
        }
        dispatch(checkingAuthentication())
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                    error={!!displayNameValid &&  formSubmitted}
                    helperText={displayNameValid}
                    label="name"
                    name="displayName"
                    onChange={onInputChange}
                    type='text'
                    value={displayName}
                />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                    error={!!emailValid &&  formSubmitted}
                    helperText={emailValid}
                    label="email"
                    name="email"
                    onChange={onInputChange}
                    type='email'
                    value={email}
                />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                    error={!!passwordValid &&  formSubmitted}
                    helperText={passwordValid}
                    label="password"
                    name="password"
                    onChange={onInputChange}
                    type='password'
                    value={password}
                />
                </Grid>
                    <button
                        variant="contained"
                        type='submit'
                        disabled={isAuthenticating}
                    >
                        Crear Cuenta
                    </button>
                    <Link to='/auth/login'>
                        ¿Ya Tienes una Cuenta?
                    </Link>
                </Grid>
            </form>
        </div>
    )
}
