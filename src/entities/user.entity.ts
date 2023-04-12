import {Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from "typeorm"
import { v4 as uuid } from "uuid"

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

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
