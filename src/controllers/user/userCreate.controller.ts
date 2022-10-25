import { Request, Response } from 'express'
import userCreateService from '../../services/user/userCreate.service'
import "express-async-errors"
import { AppError, handleError } from '../../errors/appError'


const userCreateController = async (req: Request, res: Response) => {

    try {

        const {name, email, password} = req.body
    
        const newUser =  await userCreateService({name, email, password})
        
        return res.status(201).send(newUser)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }


}

export default userCreateController