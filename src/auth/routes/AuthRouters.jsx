import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPages } from '../pages/LoginPages'
import { RegisterPages } from '../pages/RegisterPages'

export const AuthRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPages />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="/register" element={<RegisterPages />} />
        </Routes>
    )
}
