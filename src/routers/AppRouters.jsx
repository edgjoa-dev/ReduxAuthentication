import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PagesRosutes } from '../app/routers/PagesRosutes'
import { AuthRoutes } from '../auth/routers/AuthRoutes'


export const AppRouters = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='/*' element={<PagesRosutes />} />
        </Routes>
    )
}
