import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import Select from "react-select";
import ICategories from "./interfaces/ICategories";
import { ServiceCategories } from "./service";

type ISelect = {
  value: string;
  label: string;
};

type ICategoriesSelect = {
  name: string;
  description: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  const [names, setNames] = useState<ISelect[]>([]);
  const [descriptions, setDescriptions] = useState<ISelect[]>([]);

  async function findAll() {
    try {
      const { data } = await ServiceCategories.findAll();
      setCategories(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  function getNamesAndDesciptions() {
    console.log("categories", categories);
    if (categories.length > 0) {
      categories.map(
        (e: ICategoriesSelect) => (
          setNames((prevState) => [
            ...prevState,
            { value: e.name, label: e.name },
          ]),
          setDescriptions((prevState) => [
            ...prevState,
            { value: e.description, label: e.description },
          ])
        )
      );
    }
  }

  useEffect(() => {
    findAll();
  }, []);

  useEffect(() => {
    getNamesAndDesciptions();
  }, [categories]);

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between mb-5">
        <h3>Categorias</h3>
        <Button>Adicionar</Button>
      </div>
      <Form.Group className="d-flex">
        <div className="w-50 mr-2">
          <Form.Label>Nome</Form.Label>
          <Select placeholder="Selecione" options={names} />
        </div>
        <div className="w-50">
          <Form.Label>Descrição</Form.Label>
          <Select placeholder="Selecione" options={descriptions} />
        </div>
      </Form.Group>
      <Table responsive className="mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categoria) => (
            <tr>
              <td>{categoria.name}</td>
              <td>{categoria.description}</td>
              <td>
                <Button variant="warning">Editar</Button>
              </td>
              <td>
                <Button variant="danger">Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Categories;
