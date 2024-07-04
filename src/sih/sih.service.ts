import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sih } from './entities/sih.entity';

@Injectable()
export class SihService {
  constructor(
    @InjectRepository(Sih)
    private readonly sihRepository: Repository<Sih>,
  ) {}

  async findAll(
    page: number,
    limit: number,
    ano?: number,
  ): Promise<{ data: Sih[]; total: number }> {
    const query = this.sihRepository.createQueryBuilder('sih');

    if (ano) {
      query.andWhere('sih.i_ano_compt = :ano', { ano });
    }

    const [data, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: number): Promise<Sih> {
    return this.sihRepository.findOne({ where: { id } });
  }
}
