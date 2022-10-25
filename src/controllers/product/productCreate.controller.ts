import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import { IProduct } from '../../interfaces/product'
import productCreateService from '../../services/product/productCreate.service'

const productCreateController = async (req: Request, res: Response) => {

    try {

        const data = req.body

        const product: IProduct = await productCreateService(data)

        return res.status(201).json(product)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }

    }
}

export default productCreateController