import React, { useMemo, useState } from 'react'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { useForm } from '../../hooks/useForm'
import { useSelector, useDispatch } from 'react-redux';
import  {Link} from 'react-router-dom';
import { Alert, Button, Grid, TextField } from '@mui/material'
import '../../styles/authStyles/main.scss';


    const formData = {
        displayName: 'Edgar Joaquin Flores',
        email: 'edgarjoaquin@gmail.com',
        password: '123456789',
    }

    const formValidation = {
        email: [(value) => value.includes('@gmail.com'), 'El email no es valido'],
        password: [(value) => value.length >= 8, 'El password debe tener almenos 8 caracteres'],
        displayName: [(value) => value.length >= 2, 'Nombre invalido'],
    }


export const RegisterPages = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setformSubmitted] = useState(false);
    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const { displayName,
        displayNameValid,
        email,
        emailValid,
        password,
        passwordValid,
        onInputChange,
        formState,
        formStateValid
    } = useForm(formData, formValidation);

    const handleSubmit = (e) => {
        e.preventDefault();
        setformSubmitted(true)

        if(!formStateValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
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

                <Grid
                    item
                    xs={12}
                    display={ !!errorMessage ? '' : 'none' }
                    >
                        <Alert severity='error'>{errorMessage}</Alert>
                </Grid>


                </Grid>
                    <Button
                        variant="contained"
                        type='submit'
                        disabled={isCheckingAuthentication}
                    >
                        Crear Cuenta
                    </Button>
                    <Link to='/auth/login'>
                        ¿Ya Tienes una Cuenta?
                    </Link>
                </Grid>
            </form>
        </div>
    )
}
