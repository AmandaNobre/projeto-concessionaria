
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Users = () => {

    const navigate = useNavigate()

    const navigateTo = (link: string) => {
        navigate(link)
    }

    return (
        <div>
            <Button variant="primary" onClick={() => navigateTo("register-user")} >Cadastrar</Button>
        </div>
    )
}

export { Users }