import { Link } from "react-router-dom"

import { TheContent } from "./TheContent"
import './styles.scss'


const Layout = () => {
    return (
        <div className="d-flex">
            <nav className="menu">
                <Link to="/categories" className="link">Categorias</Link>
                <Link to="/" className="link">Home</Link>
            </nav>
            <div className="content">
                <TheContent />
            </div>
        </div>
    )
}

export { Layout }