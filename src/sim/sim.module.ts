import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimService } from './sim.service';
import { SimController } from './sim.controller';
import { Sim } from './entities/sim.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sim])],
  providers: [SimService],
  controllers: [SimController],
})
export class SimModule {}
