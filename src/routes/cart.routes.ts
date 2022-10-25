import { Router } from "express";

import cartAddProdController from "../controllers/cart/cartAddProd.controller";
import cartDelProdController from "../controllers/cart/cartDelProd.controller";
import { authUser } from "../middlewares/authUser.middleware";

const routes = Router()

export const cartRoutes = () => {

    routes.post('/', authUser, cartAddProdController)
    routes.delete('/:product_id', authUser, cartDelProdController)

    return routes
}