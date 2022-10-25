import { Request, Response } from 'express'
import userDeleteSelfService from '../../services/user/userDeleteSelf.service'
import { AppError, handleError } from '../../errors/appError'


const userDeleteSelfController = async (req: Request, res: Response) => {

    try {

        const email = req.userEmail

        const user =  await userDeleteSelfService(email)
        
        return res.status(200).json({message: "User deleted with sucess!"})

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userDeleteSelfController