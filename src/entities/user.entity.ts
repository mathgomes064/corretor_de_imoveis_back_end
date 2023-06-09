import {Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm"
import { v4 as uuid } from "uuid"
import { Imovel } from "./imovel.entity"

//lado one

@Entity("user")
export class User{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    contato: string

    @Column()
    created_at: Date

    @OneToMany((type) => Imovel, imovel => imovel.user, {
        eager: true,
        onDelete: "CASCADE"
    })
    imoveis: Imovel[] 

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
