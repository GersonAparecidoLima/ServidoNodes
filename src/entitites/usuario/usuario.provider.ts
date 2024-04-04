import { Usuario } from "./usuario.entity";
import { DataSource } from "typeorm";

export const UsuarioProvider = {
    provide: 'UsuarioRepository',
    useFactory: ((ds: DataSource) => ds.getRepository(Usuario)),
    inject: ['AppDataSource']
}