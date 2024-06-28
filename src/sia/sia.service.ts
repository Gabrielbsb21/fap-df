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

  async findAll(
    page: number,
    limit: number,
    filters: {
      ano?: number;
      mes?: number;
      siglaEstab?: string;
      regiaoSaude?: string;
    },
  ): Promise<{ data: Sia[]; total: number }> {
    const query = this.siaRepository.createQueryBuilder('sia');

    if (filters.ano) {
      query.andWhere('sia.i_ano_compt = :ano', { ano: filters.ano });
    }

    if (filters.mes) {
      query.andWhere('sia.i_mes_compt = :mes', { mes: filters.mes });
    }

    if (filters.siglaEstab) {
      query.andWhere('sia.i_desc_sigla_estab_cnes = :siglaEstab', {
        siglaEstab: filters.siglaEstab,
      });
    }

    if (filters.regiaoSaude) {
      query.andWhere('sia.i_desc_regiao_saude = :regiaoSaude', {
        regiaoSaude: filters.regiaoSaude,
      });
    }

    const [data, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: number): Promise<Sia> {
    return this.siaRepository.findOne({ where: { id } });
  }
}
