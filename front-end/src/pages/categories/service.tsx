import api from "../../api";
import TCategoryCreateAndEdit from "./interfaces/TCategoryCreateAndEdit";
import TCategoryCreate from "./interfaces/TCategoryCreateAndEdit";

class ServiceCategories {
  static findAll() {
    return api.get("/categorias");
  }

  static create(data: TCategoryCreate) {
    return api.post("/categorias", data);
  }

  static edit(id: string, data: TCategoryCreateAndEdit) {
    return api.put(`/categorias/${id}`, data);
  }
}

export { ServiceCategories };
