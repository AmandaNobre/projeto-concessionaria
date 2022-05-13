import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
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
        <Container>
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
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    )
}

export { Categories }