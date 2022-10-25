import { Router } from "express";

import buyCreateController from "../controllers/buy/buyCreate.controller";
import { authUser } from "../middlewares/authUser.middleware";

const routes = Router()

export const buyRoutes = () => {

    routes.post('/', authUser, buyCreateController)

    return routes
}