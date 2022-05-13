import api from "../../api";
import ILogin from "./interfaces/ILogin";
import IUserRegister from "./interfaces/IUserRegister";

class ServiceUser {
    static register(payload: IUserRegister) {
        return api.post("/user", payload)
    }

    static login(payload: ILogin) {
        return api.post("/sessions", payload)
    }
}

export default ServiceUser