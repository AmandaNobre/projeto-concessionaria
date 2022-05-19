import { useEffect, useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import ICategories from "./interfaces/ICategories"
import { ServiceCategories } from "./service"


const Categories = () => {

    const [categories, setCategories] = useState<ICategories[]>([])

    async function findAll() {
        try {
            const { data } = await ServiceCategories.findAll()
            setCategories(data)

        } catch (error) {
            console.log('error', error)

        }
    }

    useEffect(() => { findAll() }, [])

    return (
        <div className="w-100">
            <Form.Group className="d-flex">
                {/* <div>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </div>
                <div>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" />
                </div> */}
                <div>
                    {/* <Button>Pesquisar</Button> */}
                </div>
            </Form.Group>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(categoria => (
                        <tr>
                            <td>{categoria.name}</td>
                            <td>{categoria.description}</td>
                            <td> <Button>Editar</Button> </td>
                            <td> <Button variant="danger">Excluir</Button> </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    )
}

export default Categories