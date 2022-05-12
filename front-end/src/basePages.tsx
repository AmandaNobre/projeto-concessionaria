import { Route, Routes } from "react-router-dom"

import { Users } from "./pages/users"
import { RegisterUser } from "./pages/users/register"

const BasePages = () => {
    return (
        <Routes  >
            <Route path="/" element={<Users />} />
            <Route path="/register-user" element={<RegisterUser />} />
        </Routes>
    )
}

export { BasePages }