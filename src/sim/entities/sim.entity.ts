import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('')
export class Sim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_obito: number;

  @Column()
  i_cid_cap: string;

  @Column()
  i_cid_capitulo: string;

  @Column()
  i_cid_obito: string;

  @Column()
  i_desc_cbo: string;

  @Column()
  i_desc_cid_obito: string;

  @Column()
  i_desc_local_obito: string;

  @Column()
  i_desc_raca_cor: string;

  @Column()
  i_desc_radf_res: string;

  @Column()
  i_desc_regiao_saude_estab: string;

  @Column()
  i_desc_sigla_estab_cnes: string;

  @Column()
  i_desc_tipo_obito: string;

  @Column()
  i_desc_tipo_violencia: string;

  @Column()
  i_desc_uf_res: string;

  @Column()
  i_faixa_etaria: string;

  // Permitir valores nulos para i_idade_anos
  @Column('float', { nullable: true })
  i_idade_anos: number;

  @Column()
  i_mes_obito: number;

  @Column()
  i_qtd_obitos: number;

  @Column()
  i_sexo: string;
}
