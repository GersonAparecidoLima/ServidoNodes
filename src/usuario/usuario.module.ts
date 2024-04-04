import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from '../Infra/datasource/database.modules';
import { UsuarioProvider } from '../entitites/usuario/usuario.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioProvider],
})
export class UsuarioModule { }
