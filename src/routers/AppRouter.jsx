import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AplicationPage } from '../app/routes/AplicationPage'
import { AuthRouters } from '../auth/routes/AuthRouters'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRouters />} />
            <Route path="/*" element={<AplicationPage />} />
        </Routes>
    )
}
