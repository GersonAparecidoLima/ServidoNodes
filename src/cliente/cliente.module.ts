import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { DatabaseModule } from '../Infra/datasource/database.modules';
import { ClienteProvider } from '../entitites/cliente/cliente.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteProvider],
})
export class ClienteModule { }
