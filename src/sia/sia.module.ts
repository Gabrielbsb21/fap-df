import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiaService } from './sia.service';
import { SiaController } from './sia.controller';
import { Sia } from './entities/sia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sia])],
  providers: [SiaService],
  controllers: [SiaController],
})
export class SiaModule {}
