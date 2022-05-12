import { Router } from "express";

import { AuthUserController } from "../modules/account/useCase/authUser/authUserController";

const authRoutes = Router()
const authUserController = new AuthUserController()

authRoutes.post("/", authUserController.handle)

export { authRoutes }