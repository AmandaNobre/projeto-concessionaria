import { Suspense } from "react";
import { Route, Routes } from "react-router-dom"
import { basePages } from "../basePages";

const TheContent = () => {
    return (
        <Suspense >
            {basePages.map((base, index) => {
                return (

                    <Routes>
                        base.element && (
                        <Route
                            key={index}
                            path={base.path}
                            element={<base.element />}
                        />
                        )
                    </Routes>
                );
            })}
        </Suspense>
    )
}

export { TheContent }