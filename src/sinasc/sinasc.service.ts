import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sinasc } from './entities/sinasc.entity';

@Injectable()
export class SinascService {
  constructor(
    @InjectRepository(Sinasc)
    private readonly sinascRepository: Repository<Sinasc>,
  ) {}

  async findAll(
    page: number,
    limit: number,
    ano?: number,
  ): Promise<{ data: Sinasc[]; total: number }> {
    const offset = (page - 1) * limit;
    const query = this.sinascRepository.createQueryBuilder('sinasc');

    if (offset < 0) {
      throw new Error('OFFSET must not be negative');
    }

    if (ano) {
      query.andWhere('sinasc.i_ano_nasc = :ano', { ano });
    }

    const [data, total] = await this.sinascRepository.findAndCount({
      skip: offset,
      take: limit,
    });

    return { data, total };
  }

  async findOne(id: number): Promise<Sinasc> {
    return this.sinascRepository.findOne({ where: { id } });
  }
}
