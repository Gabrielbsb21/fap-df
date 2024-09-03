import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObitosResidentesDFService } from './obitos-residentes-df.service';
import { ObitosResidentesDFController } from './obitos-residentes-df.controller';
import { ObitosResidentesDF } from './entities/obitos-residentes-df.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ObitosResidentesDF])],
  providers: [ObitosResidentesDFService],
  controllers: [ObitosResidentesDFController],
})
export class ObitosResidentesDFModule {}
