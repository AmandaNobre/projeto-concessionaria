import React from "react"
import { Link, Route } from "react-router-dom"

import './styles.scss'
import { TheContent } from "./TheContent"

const Layout = () => {
    return (
        <React.Fragment>
            {/* // <div className="d-flex">
        //     <nav className="menu">
        //         <Link to="/categories" className="link">Categorias</Link>
        //         <Link to="/" className="link">Home</Link>
        //     </nav>
        //     <div> */}
            <TheContent />
        </React.Fragment>


    )
}

export default Layout