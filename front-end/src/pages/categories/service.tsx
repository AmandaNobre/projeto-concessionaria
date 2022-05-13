import api from "../../api"

class ServiceCategories {
    static findAll() {
        return api.get("/categorias")
    }
}

export { ServiceCategories }