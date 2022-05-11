import { Router } from "express";
import { CreateUserControler } from "../modules/account/useCase/CreateUser/CreateUserrControler";

const usersRoutes = Router()

const createUserControler = new CreateUserControler()

usersRoutes.post("/", createUserControler.handle)

export { usersRoutes }