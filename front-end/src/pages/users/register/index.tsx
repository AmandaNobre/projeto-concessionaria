import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { PageLoginAndCadastro } from "../../components/pageLoginAndCadastro/pageLoginAndCadastro"
import IUserRegister from "../interfaces/IUserRegister"
import ServiceUser from "../service"


const RegisterUser = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    async function register() {
        try {
            const payload: IUserRegister = {
                name: name,
                email: email,
                password: password
            }
            await ServiceUser.register(payload)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <PageLoginAndCadastro>
            <Form.Group className="w-100">
                <div>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)} />
                </div>
                <div>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="text" value={password} onChange={event => setPassword(event.target.value)} />
                </div>
                <Button variant="primary" className="mt-4 w-100" onClick={register} >Cadastrar</Button>
            </Form.Group>
        </PageLoginAndCadastro>
    )
}

export { RegisterUser }