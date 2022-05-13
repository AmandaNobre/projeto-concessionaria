import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ILogin from "../interfaces/ILogin"
import ServiceUser from "../service"

const LoginUser = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    async function login() {
        try {
            const payload: ILogin = {
                email: email,
                password: password
            }

            const { data } = await ServiceUser.login(payload)
            navigate("/categories")
            console.log('data.user', data.user)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <Container>
            <Form.Group>
                <div>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)} />
                </div>
                <div>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="text" value={password} onChange={event => setPassword(event.target.value)} />
                </div>
                <Button variant="primary" onClick={login} >Cadastrar</Button>
            </Form.Group>
        </Container>
    )
}

export { LoginUser }