import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { LoginUser } from "../pages/users/login"
import { RegisterUser } from "../pages/users/register"

const Routers = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginUser />} />
            <Route path="/register-user" element={<RegisterUser />} />
        </Routes>
    )
}

export { Routers }