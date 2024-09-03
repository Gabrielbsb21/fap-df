import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObitosResidentesDF } from './entities/obitos-residentes-df.entity';

@Injectable()
export class ObitosResidentesDFService {
  constructor(
    @InjectRepository(ObitosResidentesDF)
    private readonly obitosResidentesDFRepository: Repository<ObitosResidentesDF>,
  ) {}

  async findAll(
    page: number,
    limit: number,
    ano?: number,
    sexo?: string,
    cid?: string,
    cnes?: number,
  ): Promise<{ data: ObitosResidentesDF[]; total: number }> {
    const query = this.obitosResidentesDFRepository.createQueryBuilder(
      'obitos_residentes_df',
    );

    if (ano) {
      query.andWhere('obitos_residentes_df.i_ano_obito = :ano', { ano });
    }

    if (sexo) {
      query.andWhere('obitos_residentes_df.i_sexo = :sexo', { sexo });
    }

    if (cid) {
      query.andWhere('obitos_residentes_df.i_cid_obito = :cid', { cid });
    }

    if (cnes) {
      query.andWhere('obitos_residentes_df.i_desc_sigla_estab_cnes = :cnes', {
        cnes,
      });
    }

    const [data, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: number): Promise<ObitosResidentesDF> {
    return this.obitosResidentesDFRepository.findOne({ where: { id } });
  }
}
