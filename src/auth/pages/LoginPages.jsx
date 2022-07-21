import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, googleSignIn } from '../../store/auth/thunks';
import Button from '@mui/material/Button';
import { ButtonGroup, Grid } from '@mui/material';


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
        <div>
            <Grid container
                sx={{
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Grid item
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        justifyContent: 'center',
                        backgroundColor: '#495C83',
                        width: '100%',
                    }}
                >
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
                <ButtonGroup
                    orientation="vertical"
                >
                    <Button
                        variant="contained"
                        type='submit'
                        disabled={isAuthenticating}
                        sx={{
                            margin: '.6rem',
                        }}
                    >
                        Login
                    </Button>

                    <Button
                        variant="contained"
                        type="submit"
                        onClick={onGoogleSignIn}
                        disabled={isAuthenticating}
                    >
                        Login Google
                    </Button>
                </ButtonGroup>
            </form>
            </Grid>
            </Grid>
        </div>
    )
}
