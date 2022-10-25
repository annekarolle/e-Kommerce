import { Router } from "express";
import { authUser } from "../middlewares/authUser.middleware";

import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller"
import userListOneController from "../controllers/user/userListOne.controller"
import userLoginController from "../controllers/user/userLogin.controller"
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller"
import userUpdateController from "../controllers/user/userUpdatePassword.controller"

const routes = Router()

export const userRoutes = () => {
    
    routes.post('/', userCreateController)
    routes.post('/login', userLoginController)
    routes.get('/', authUser, userListController)
    routes.get('/me', authUser, userListOneController)
    routes.delete('/me', authUser, userDeleteSelfController)
    routes.patch('/me/updatePassword', authUser, userUpdateController)

    return routes
}

