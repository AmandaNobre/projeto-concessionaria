import { Route, Routes } from "react-router-dom"
import { Categories } from "./pages/categories"

import { Users } from "./pages/users"
import { LoginUser } from "./pages/users/login"
import { RegisterUser } from "./pages/users/register"

const BasePages = () => {
    return (
        <Routes  >
            <Route path="/" element={<Users />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/login-user" element={<LoginUser />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
    )
}

export { BasePages }