export interface IProduct {
    id: string
    name: string
    description: string
    price: number
}

export interface IProductCreate {
    name: string
    description: string
    price: number
}