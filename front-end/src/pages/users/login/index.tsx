import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Alert, Button, Form, Spinner } from "react-bootstrap"

import ILogin from "../interfaces/ILogin"

import ServiceUser from "../service"
import { PageLoginAndCadastro } from "../../../components/pageLoginAndCadastro/pageLoginAndCadastro"

const LoginUser = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [error, setError] = useState<any>("")
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    async function login() {
        setError("")
        setLoading(true)
        try {
            const payload: ILogin = {
                email: email,
                password: password
            }

            const { data } = await ServiceUser.login(payload)
            navigate("/categories")
        } catch ({ response }) {
            setError(response)
        } finally {
            setLoading(false)
        }
    }

    return (
        <PageLoginAndCadastro>
            <Form.Group className="w-100">
                <h3>Login</h3>
                {error !== "" && (
                    <Alert key="danger" variant="danger">
                        {error?.data.message}
                    </Alert>
                )}
                <div className="mt-5">
                    <Form.Label>Email* : </Form.Label>
                    <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)} required />
                </div>
                <div className="mt-2">
                    <Form.Label>Password* : </Form.Label>
                    <Form.Control type="text" value={password} onChange={event => setPassword(event.target.value)} required />
                </div>
                <Button onClick={login} className="w-100 mt-4 mb-2" >
                    {loading ? (<Spinner animation="border" size="sm" />) : "Logar"}
                </Button>
                <p>Ainda não tem cadastro: <a href="/register-user">Cadastrar</a></p>
            </Form.Group>
        </PageLoginAndCadastro>

    )
}

export { LoginUser }