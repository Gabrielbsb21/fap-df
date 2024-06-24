import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sia } from './entities/sia.entity';

@Injectable()
export class SiaService {
  constructor(
    @InjectRepository(Sia)
    private readonly siaRepository: Repository<Sia>,
  ) {}

  async findAll(): Promise<Sia[]> {
    return this.siaRepository.find();
  }

  async findOne(id: number): Promise<Sia> {
    return this.siaRepository.findOne({ where: { id } });
  }
}
