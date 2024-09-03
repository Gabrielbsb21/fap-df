import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ObitosResidentesDF {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_obito: number;

  @Column({ type: 'varchar', length: 10 })
  i_cid_cap: string;

  @Column({ type: 'varchar', length: 255 })
  i_cid_capitulo: string;

  @Column({ type: 'varchar', length: 10 })
  i_cid_obito: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_cbo: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_cid_obito: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_local_obito: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_raca_cor: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_radf_res: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_regiao_saude_estab: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_regiao_saude_res: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_sigla_estab_cnes: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_tipo_obito: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_tipo_violencia: string;

  @Column({ type: 'varchar', length: 2 })
  i_desc_uf_res: string;

  @Column({ type: 'varchar', length: 20 })
  i_faixa_etaria: string;

  @Column()
  i_idade_anos: number;

  @Column()
  i_mes_obito: number;

  @Column()
  i_qtd_obitos: number;

  @Column({ type: 'varchar', length: 10 })
  i_sexo: string;
}
