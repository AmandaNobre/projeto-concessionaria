import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button, Form } from "react-bootstrap"

import ILogin from "../interfaces/ILogin"

import ServiceUser from "../service"
import { PageLoginAndCadastro } from "../../components/pageLoginAndCadastro/pageLoginAndCadastro"

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
        <PageLoginAndCadastro>
            <Form.Group className="w-100">
                <div>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)} />
                </div>
                <div>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="text" value={password} onChange={event => setPassword(event.target.value)} />
                </div>
                <Button onClick={login} className="w-100 mt-4" >Logar</Button>
                <p>Ainda não tem cadastro: <a href="/register-user">Cadastrar</a></p>
            </Form.Group>
        </PageLoginAndCadastro>

    )
}

export { LoginUser }