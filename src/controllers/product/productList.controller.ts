import { Request, Response } from "express";
import { IProduct } from "../../interfaces/product";
import productListService from "../../services/product/productList.service";

const productListController = async (req: Request, res: Response) => {

    const productList: IProduct[] = await productListService()

    return res.json(productList)

}

export default productListController