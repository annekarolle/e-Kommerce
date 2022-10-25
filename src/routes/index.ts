import { Express } from 'express'
import { userRoutes } from './user.routes'
import { productRoutes } from './product.routes'
import { cartRoutes } from './cart.routes'
import { buyRoutes } from './buy.routes'

export const appRoutes = (app: Express) => {

    app.use('/users', userRoutes())
    app.use('/products', productRoutes())
    app.use('/cart', cartRoutes())
    app.use('/buy', buyRoutes())
}