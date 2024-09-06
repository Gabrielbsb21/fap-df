import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PainelProcedimentos } from './entities/painel-procedimentos.entity';

@Injectable()
export class PainelProcedimentosService {
  constructor(
    @InjectRepository(PainelProcedimentos)
    private readonly painelProcedimentosRepository: Repository<PainelProcedimentos>,
  ) {}

  async findAll(
    page: number,
    limit: number,
    ano?: number,
    mes?: number,
    regiaoSaude?: string,
    sexo?: string,
  ): Promise<{ data: PainelProcedimentos[], total: number }> {
    const query = this.painelProcedimentosRepository.createQueryBuilder('painel_procedimentos');

    if (ano) {
      query.andWhere('painel_procedimentos.i_ano_compt = :ano', { ano });
    }

    if (mes) {
      query.andWhere('painel_procedimentos.i_mes_compt = :mes', { mes });
    }

    if (regiaoSaude) {
      query.andWhere('painel_procedimentos.i_desc_regiao_saude = :regiaoSaude', { regiaoSaude });
    }

    if (sexo) {
      query.andWhere('painel_procedimentos.i_desc_sexo = :sexo', { sexo });
    }

    const [data, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: number): Promise<PainelProcedimentos> {
    return this.painelProcedimentosRepository.findOne({ where: { id } });
  }
}
