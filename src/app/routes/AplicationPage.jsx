import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { InfoPage } from '../pages/InfoPage'

export const AplicationPage = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/info" element={<InfoPage />} />
        </Routes>
    )
}
