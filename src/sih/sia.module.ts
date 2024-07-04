import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SihService } from './sih.service';
import { SihController } from './sih.controller';
import { Sih } from './entities/sih.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sih])],
  providers: [SihService],
  controllers: [SihController],
})
export class SihModule {}
