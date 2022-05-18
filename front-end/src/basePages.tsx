import React from "react";

const Categories = React.lazy(() => import("./pages/categories"));

const basePages = [
    { path: "/categories", element: Categories }
]

export { basePages }