import { ChangeEvent, useEffect, useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

import ICategories from "../interfaces/ICategories";
import TCategoryCreateAndEdit from "../interfaces/TCategoryCreateAndEdit";

import { ServiceCategories } from "../service";

type TProps = {
  show: boolean;
  handleClose: Function;
  title: string;
  categorySelecioned: ICategories;
};

const ModalRegisterAndEdit = ({
  show,
  handleClose,
  title,
  categorySelecioned,
}: TProps) => {
  const initialCategory = { name: "", description: "" };
  const [category, setCategory] =
    useState<TCategoryCreateAndEdit>(initialCategory);

  const [validatedForm, setValidatedForm] = useState<boolean>(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const name = event.target.name;
    const value = event.target.value;
    setCategory({ ...category, [name]: value });
  }

  async function saveOrEdit() {
    setValidatedForm(true);

    try {
      if (title === "Cadastrar") {
        await ServiceCategories.create(category);
      }
      if (title === "Editar") {
        await ServiceCategories.edit(categorySelecioned.id, category);
      }
      handleClose();
      toast.success(`Sucesso ao ${title} categoria`);
    } catch ({ response }) {
    } finally {
    }
  }

  useEffect(() => {
    setCategory({
      name: categorySelecioned.name,
      description: categorySelecioned.description,
    });
  }, [show]);

  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{title} Categorias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validatedForm}>
          <Form.Group>
            <div>
              <Form.Label>Nome*: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={category.name}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </div>
            <div className="mt-4">
              <Form.Label>Descrição*: </Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={category.description}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Campo obrigatório
              </Form.Control.Feedback>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary">Close</Button> */}
        <Button variant="primary" onClick={saveOrEdit}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { ModalRegisterAndEdit };
