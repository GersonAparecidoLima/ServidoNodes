import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    senha: string;


}