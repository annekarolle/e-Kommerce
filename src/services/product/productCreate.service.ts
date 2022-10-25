import { AppDataSource } from "../../data-source"
import { Product } from "../../entities/product.entity"
import { AppError } from "../../errors/appError"
import { IProductCreate } from "../../interfaces/product"


const productCreateService = async ({name, description, price}: IProductCreate) => {

    const productRepository = AppDataSource.getRepository(Product)

    const productAlreadyExists = await productRepository.findOne({where: { name }})

    if (productAlreadyExists) {
        throw new AppError(409, "Product already registered.")
    }

    const product = new Product()
    product.name = name
    product.description = description
    product.price = price
    
    productRepository.create(product)
    await productRepository.save(product)

    return product

}

export default productCreateService