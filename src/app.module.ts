import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [ClienteModule, UsuarioModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
