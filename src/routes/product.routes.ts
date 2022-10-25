import { Router } from "express";

import productCreateController from "../controllers/product/productCreate.controller";
import productListController from "../controllers/product/productList.controller";

const routes = Router()

export const productRoutes = () => {

    routes.post('/', productCreateController)
    routes.get('/', productListController)

    return routes
}