import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import Select from "react-select";
import ICategories from "./interfaces/ICategories";
import { ModalRegisterAndEdit } from "./ModalRegisterAndEdit/ModalRegisterAndEdit";
import { ServiceCategories } from "./service";

type ISelect = {
  value: string;
  label: string;
};

type ICategoriesSelect = {
  name: string;
  description: string;
};

const initialCategorySelecioned = {
  id: "",
  dateCreated_at: new Date(),
  description: "",
  name: "",
};

const Categories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [categorySelecioned, setCategorySelecioned] = useState<ICategories>(
    initialCategorySelecioned
  );

  const [names, setNames] = useState<ISelect[]>([]);
  const [descriptions, setDescriptions] = useState<ISelect[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>("");

  async function findAll() {
    try {
      const { data } = await ServiceCategories.findAll();
      setCategories(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  function getNamesAndDesciptions() {
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

  function cadastrar() {
    setOpenModal(true);
    setTitleModal("Cadastrar");
  }

  function editar(categoriaSelecionada: ICategories) {
    setOpenModal(true);
    setTitleModal("Editar");
    setCategorySelecioned(categoriaSelecionada);
  }

  function closeModal() {
    setCategorySelecioned(initialCategorySelecioned);
    setOpenModal(false);
    findAll();
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
        <Button onClick={cadastrar}>Adicionar</Button>
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
            <tr key={categoria.id}>
              <td>{categoria.name}</td>
              <td>{categoria.description}</td>
              <td>
                <Button variant="warning" onClick={() => editar(categoria)}>
                  Editar
                </Button>
              </td>
              <td>
                <Button variant="danger">Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalRegisterAndEdit
        show={openModal}
        handleClose={closeModal}
        title={titleModal}
        categorySelecioned={categorySelecioned}
      />
    </div>
  );
};

export default Categories;
