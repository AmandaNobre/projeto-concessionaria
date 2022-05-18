import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { LoginUser } from "../pages/users/login"
import { RegisterUser } from "../pages/users/register"

const Layout = React.lazy(() => import("../layout/Layout"));
const Routers = () => {

    return (
        <React.Suspense>
            <Routes>
                <Route path="/" element={<Navigate to="/login-user" replace />} />
                <Route path="/login-user" element={<LoginUser />} />
                <Route path="/register-user" element={<RegisterUser />} />
                <Route path="/dashboard/*" element={<Layout />} />
            </Routes>
        </React.Suspense>
    )
}

export { Routers }