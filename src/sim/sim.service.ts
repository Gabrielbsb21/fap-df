import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sim } from './entities/sim.entity';

@Injectable()
export class SimService {
  constructor(
    @InjectRepository(Sim)
    private readonly simRepository: Repository<Sim>,
  ) {}

  async findAll(
    page: number,
    limit: number,
    ano?: number,
    cid?: string,
    sexo?: string,
    cnes?: string, // Mudado para string
  ): Promise<{ data: Sim[]; total: number }> {
    const query = this.simRepository.createQueryBuilder('sim');

    if (ano) {
      query.andWhere('sim.i_ano_obito = :ano', { ano });
    }

    if (cid) {
      query.andWhere('sim.i_cid_obito = :cid', { cid });
    }

    if (sexo) {
      query.andWhere('sim.i_sexo = :sexo', { sexo });
    }

    if (cnes) {
      query.andWhere('sim.i_desc_sigla_estab_cnes = :cnes', { cnes });
    }

    const [data, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: number): Promise<Sim> {
    return this.simRepository.findOne({ where: { id } });
  }
}
