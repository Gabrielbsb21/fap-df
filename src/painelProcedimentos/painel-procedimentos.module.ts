import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PainelProcedimentosService } from './painel-procedimentos.service';
import { PainelProcedimentosController } from './painel-procedimentos.controller';
import { PainelProcedimentos } from './entities/painel-procedimentos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PainelProcedimentos])],
  controllers: [PainelProcedimentosController],
  providers: [PainelProcedimentosService],
})
export class PainelProcedimentosModule {}
