import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../layout/Layout"

import { LoginUser } from "../pages/users/login"
import { RegisterUser } from "../pages/users/register"

const Routers = () => {

    return (
        <React.Suspense>
            <Routes>
                <Route path="/" element={<Navigate to="/login-user" replace />} />
                <Route path="/login-user" element={<LoginUser />} />
                <Route path="/register-user" element={<RegisterUser />} />
                <Route path="*" element={<Layout />} />
            </Routes>
        </React.Suspense>
    )
}

export { Routers }