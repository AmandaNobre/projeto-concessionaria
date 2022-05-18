import { useState } from "react"
import { Alert, Button, Form, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import { PageLoginAndCadastro } from "../../components/pageLoginAndCadastro/pageLoginAndCadastro"
import IUserRegister from "../interfaces/IUserRegister"

import ServiceUser from "../service"

const RegisterUser = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [error, setError] = useState<any>("")
    const [loading, setLoading] = useState<Boolean>(false)

    const navigate = useNavigate()

    function clearForm() {
        setName("")
        setEmail("")
        setPassword("")
    }

    async function register() {
        setError("")
        setLoading(true)
        try {
            const payload: IUserRegister = {
                name: name,
                email: email,
                password: password
            }
            await ServiceUser.register(payload)
            clearForm()
            navigate("/")
        } catch ({ response }) {
            setError(response)
        } finally {
            setLoading(false)
        }
    }

    return (
        <PageLoginAndCadastro>
            <Form.Group className="w-100">
                {error !== "" && (
                    <Alert key="danger" variant="danger">
                        {error?.data.message}
                    </Alert>
                )}
                <div className="mt-2">
                    <Form.Label>Name* : </Form.Label>
                    <Form.Control type="text" value={name} onChange={event => setName(event.target.value)} required />
                </div>
                <div className="mt-2">
                    <Form.Label>Email* : </Form.Label>
                    <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)} required />
                </div>
                <div className="mt-2">
                    <Form.Label>Password* : </Form.Label>
                    <Form.Control type="text" value={password} onChange={event => setPassword(event.target.value)} required />
                </div>
                <Button variant="primary" className="mt-4 w-100" onClick={register}>
                    {loading ? (<Spinner animation="border" size="sm" />) : "Cadastrar"}
                </Button>
            </Form.Group>
        </PageLoginAndCadastro>
    )
}

export { RegisterUser }