import { Cliente } from "./cliente.entity";
import { DataSource } from "typeorm";

export const ClienteProvider = {
    provide: 'ClienteRepository',
    useFactory: ((ds: DataSource) => ds.getRepository(Cliente)),
    inject: ['AppDataSource']
}