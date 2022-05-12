import api from "../../api";
import IUserRegister from "./interfaces/IUserRegister";

class ServiceUser {
    static register(payload: IUserRegister) {
        return api.post("/user", payload)
    }
}

export default ServiceUser