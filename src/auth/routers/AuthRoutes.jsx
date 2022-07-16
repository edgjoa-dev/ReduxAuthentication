import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/loginPage"
import { RegisterPage } from "../pages/registerPage"

export const AuthRoutes = () => {
    return(
        <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}
