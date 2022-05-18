import { Suspense } from "react";
import { Route, Routes } from "react-router-dom"
import { basePages } from "../basePages";

const TheContent = () => {
    const loading = (
        <div className="pt-3 text-center">
            <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
    );
    return (
        <Suspense fallback={loading}>
            <Routes>
                {basePages.map((base, index) => {
                    return ((
                        <Route
                            key={index}
                            path={base.path}
                            element={<base.element />}
                        />
                    )
                    );
                })}
            </Routes>
        </Suspense>
    );
}

export { TheContent }