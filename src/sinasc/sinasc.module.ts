import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinascService } from './sinasc.service';
import { SinascController } from './sinasc.controller';
import { Sinasc } from './entities/sinasc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sinasc])],
  providers: [SinascService],
  controllers: [SinascController],
})
export class SinascModule {}
