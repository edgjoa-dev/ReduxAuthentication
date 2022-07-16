import { Route, Routes } from "react-router-dom"
import { ContactPage } from "../pages/ContactPage"
import { CrewPage } from "../pages/CrewPage"
import { HomePage } from "../pages/HomePage"

export const PagesRosutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/crew" element={<CrewPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}
