import {Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./user.entity"

//lado many

@Entity("imovel")
export class Imovel{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    status: string

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    valor_compra: number

    @Column()
    valor_venda: number

    @Column()
    created_at: Date

    @ManyToOne((type) => User, user => user.imoveis, {
        onDelete: "CASCADE"
    })
    user: User

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}