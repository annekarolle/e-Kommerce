import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class Product {

    @PrimaryColumn('uuid')
    readonly id:string

    @Column()
    name: string

    @Column()
    description: string

    @Column('float')
    price: number

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}