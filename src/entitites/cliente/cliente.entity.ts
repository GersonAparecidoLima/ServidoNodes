import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../usuario/usuario.entity";

@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number

    // @OneToMany(()=> Usuario,(usuario) => usuario.id)
    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuarioId' })
    usuario: Usuario;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    telefone: string;

    @Column()
    email: string;
}